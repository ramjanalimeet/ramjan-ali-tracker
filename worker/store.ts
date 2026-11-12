// The dashboard's backend: one Durable Object with a SQLite database holding
// accounts, scheduled posts, contacts, outreach campaigns, the inbox, bookings
// and settings. Every /api/admin request, the public lead/booking webhooks and
// the 5-minute cron all run here.
import { DurableObject } from "cloudflare:workers";
import { aiWrite } from "./ai";
import { fetchNewMail, sendMail, testEmail, withDefaults, type EmailConfig } from "./mail";
import { fbComments, publish, verifySocial, xMentions, type Platform, type SocialConfig } from "./social";
import {
  EMAIL_RE,
  addrOf,
  err,
  errMsg,
  fillTemplate,
  hashPassword,
  hex,
  hmac,
  json,
  now,
  parseCookies,
  safeEqual,
  startOfDay,
  stripHtml,
  uid,
  verifyPassword,
} from "./util";

export interface Env {
  ADMIN_STORE: DurableObjectNamespace<AdminStore>;
  /** Optional: overrides the dashboard password (set as a Worker secret). */
  ADMIN_PASSWORD?: string;
}

// Default password hash (PBKDF2). Change the password from Settings, or set
// the ADMIN_PASSWORD secret in Cloudflare.
const DEFAULT_PASSWORD_HASH = "pbkdf2$100000$YWiHgA9TjAMol/TX0crtuQ==$mCWWefDX1fhuhtKnSjXfZO2TZq8ID4mf6J3jeOgg5iM=";
const COOKIE = "ra_admin";
const DAY = 86_400_000;
const SECRET_KEYS = ["password", "resendKey", "apiKey", "apiSecret", "accessToken", "accessSecret", "token"];
const MAX_SENDS_PER_TICK = 12;

type Row = Record<string, SqlStorageValue>;

interface Step {
  delayDays: number;
  subject: string;
  body: string;
}

interface Campaign {
  id: string;
  name: string;
  steps: Step[];
  accountIds: string[];
  dailyLimit: number;
  status: "draft" | "active" | "paused";
  autoSources: string[];
  startHour: number;
  endHour: number;
  weekdaysOnly: boolean;
  createdAt: number;
}

const SCHEMA = `
CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT);
CREATE TABLE IF NOT EXISTS accounts (
  id TEXT PRIMARY KEY, kind TEXT, platform TEXT, label TEXT, config TEXT,
  status TEXT DEFAULT 'ok', last_error TEXT, created_at INTEGER);
CREATE TABLE IF NOT EXISTS posts (
  id TEXT PRIMARY KEY, title TEXT, content TEXT, image_url TEXT, account_ids TEXT,
  scheduled_at INTEGER, status TEXT, results TEXT, created_at INTEGER);
CREATE TABLE IF NOT EXISTS contacts (
  id TEXT PRIMARY KEY, email TEXT UNIQUE, name TEXT, company TEXT, website TEXT, phone TEXT,
  source TEXT, status TEXT DEFAULT 'new', notes TEXT, created_at INTEGER, updated_at INTEGER);
CREATE TABLE IF NOT EXISTS campaigns (id TEXT PRIMARY KEY, data TEXT, created_at INTEGER);
CREATE TABLE IF NOT EXISTS enrollments (
  id TEXT PRIMARY KEY, campaign_id TEXT, contact_id TEXT, step INTEGER DEFAULT 0, next_at INTEGER,
  account_id TEXT, thread_id TEXT, thread_subject TEXT, status TEXT DEFAULT 'active',
  attempts INTEGER DEFAULT 0, last_error TEXT, created_at INTEGER, UNIQUE(campaign_id, contact_id));
CREATE INDEX IF NOT EXISTS enr_due ON enrollments(status, next_at);
CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY, direction TEXT, channel TEXT, account_id TEXT, contact_id TEXT, campaign_id TEXT,
  from_addr TEXT, from_name TEXT, to_addr TEXT, subject TEXT, body TEXT, message_id TEXT, in_reply_to TEXT,
  ext_id TEXT UNIQUE, url TEXT, meta TEXT, read INTEGER DEFAULT 0, created_at INTEGER);
CREATE INDEX IF NOT EXISTS msg_dir ON messages(direction, created_at);
CREATE INDEX IF NOT EXISTS msg_mid ON messages(message_id);
CREATE TABLE IF NOT EXISTS bookings (
  id TEXT PRIMARY KEY, uid TEXT UNIQUE, title TEXT, start_at INTEGER, end_at INTEGER, name TEXT, email TEXT,
  status TEXT, notes TEXT, meeting_url TEXT, raw TEXT, created_at INTEGER);
CREATE TABLE IF NOT EXISTS activity (id INTEGER PRIMARY KEY AUTOINCREMENT, level TEXT, text TEXT, created_at INTEGER);
`;

export class AdminStore extends DurableObject<Env> {
  private sql: SqlStorage;
  private fails = { count: 0, until: 0 };
  private leadHits = new Map<string, number[]>();
  private lastSocialPoll = 0;
  private ticking = false;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    ctx.blockConcurrencyWhile(async () => {
      this.sql.exec(SCHEMA);
      if (!this.setting("session_secret")) this.setSetting("session_secret", uid() + uid() + uid());
      if (!this.setting("hook_key")) this.setSetting("hook_key", uid() + uid());
    });
  }

  // ---------- db helpers ----------

  private q<T = Row>(query: string, ...args: SqlStorageValue[]): T[] {
    return this.sql.exec(query, ...args).toArray() as T[];
  }
  private one<T = Row>(query: string, ...args: SqlStorageValue[]): T | undefined {
    return this.q<T>(query, ...args)[0];
  }
  private setting(key: string): string | undefined {
    return this.one<{ value: string }>("SELECT value FROM settings WHERE key=?", key)?.value;
  }
  private setSetting(key: string, value: string) {
    this.sql.exec("INSERT INTO settings(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value", key, value);
  }
  private log(level: "info" | "warn" | "error", text: string) {
    this.sql.exec("INSERT INTO activity(level,text,created_at) VALUES(?,?,?)", level, text.slice(0, 500), now());
    this.sql.exec("DELETE FROM activity WHERE id <= (SELECT MAX(id) - 500 FROM activity)");
  }

  // ---------- auth ----------

  private async sessionValid(req: Request): Promise<boolean> {
    const c = parseCookies(req.headers.get("cookie"))[COOKIE];
    if (!c) return false;
    const [exp, sig] = c.split(".");
    if (!exp || !sig || Number(exp) < now()) return false;
    const want = hex(await hmac(this.setting("session_secret")!, `admin.${exp}`));
    return safeEqual(sig, want);
  }

  private async login(req: Request): Promise<Response> {
    if (this.fails.until > now()) return err("Too many attempts. Try again in a few minutes.", 429);
    const { password } = await req.json<{ password?: string }>();
    const stored = this.setting("password_hash");
    const ok = this.env.ADMIN_PASSWORD
      ? safeEqual(String(password ?? ""), this.env.ADMIN_PASSWORD)
      : await verifyPassword(String(password ?? ""), stored || DEFAULT_PASSWORD_HASH);
    if (!ok) {
      if (++this.fails.count >= 8) this.fails = { count: 0, until: now() + 10 * 60_000 };
      return err("Wrong password", 401);
    }
    this.fails.count = 0;
    const exp = now() + 30 * DAY;
    const sig = hex(await hmac(this.setting("session_secret")!, `admin.${exp}`));
    return json(
      { ok: true },
      200,
      { "set-cookie": `${COOKIE}=${exp}.${sig}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${30 * 86400}` },
    );
  }

  // ---------- request entry ----------

  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const path = url.pathname;
    try {
      if (path === "/api/lead") return await this.lead(req);
      if (path === "/api/hooks/cal") return await this.calHook(req, url);
      if (!path.startsWith("/api/admin")) return err("Not found", 404);
      const route = path.slice("/api/admin".length) || "/";
      if (route === "/login" && req.method === "POST") return await this.login(req);
      if (!(await this.sessionValid(req))) return err("Not signed in", 401);
      if (req.method !== "GET" && req.method !== "DELETE" && !(req.headers.get("content-type") || "").includes("json"))
        return err("Expected JSON", 415);
      return await this.admin(req, route, url);
    } catch (e) {
      this.log("error", `${path}: ${errMsg(e)}`);
      return err(errMsg(e), 500);
    }
  }

  private async body<T = Record<string, unknown>>(req: Request): Promise<T> {
    return (await req.json().catch(() => ({}))) as T;
  }

  private async admin(req: Request, route: string, url: URL): Promise<Response> {
    const m = req.method;
    const seg = route.split("/").filter(Boolean);
    const [res, id, action] = seg;

    if (res === "logout") return json({ ok: true }, 200, { "set-cookie": `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax` });
    if (res === "me") return json({ ok: true });
    if (res === "overview") return json(this.overview());
    if (res === "activity") return json(this.q("SELECT * FROM activity ORDER BY id DESC LIMIT 100"));
    if (res === "run" && m === "POST") {
      await this.tick(true);
      return json({ ok: true, overview: this.overview() });
    }

    if (res === "accounts") {
      if (m === "GET") return json(this.listAccounts());
      if (m === "POST" && !id) return json(await this.saveAccount(await this.body(req)));
      if (m === "POST" && action === "test") return json(await this.testAccount(id));
      if (m === "DELETE" && id) {
        this.sql.exec("DELETE FROM accounts WHERE id=?", id);
        return json({ ok: true });
      }
    }

    if (res === "posts") {
      if (m === "GET") return json(this.q("SELECT * FROM posts ORDER BY COALESCE(scheduled_at, created_at) DESC LIMIT 300").map(postOut));
      if (m === "POST" && !id) return json(this.savePost(await this.body(req)));
      if (m === "POST" && action === "publish") {
        await this.publishPost(id);
        return json(postOut(this.one("SELECT * FROM posts WHERE id=?", id)!));
      }
      if (m === "DELETE" && id) {
        this.sql.exec("DELETE FROM posts WHERE id=?", id);
        return json({ ok: true });
      }
    }

    if (res === "contacts") {
      if (m === "GET") {
        const q = `%${url.searchParams.get("q") ?? ""}%`;
        const status = url.searchParams.get("status");
        return json(
          this.q(
            `SELECT * FROM contacts WHERE (email LIKE ? OR name LIKE ? OR company LIKE ? OR website LIKE ?) ${status ? "AND status=?" : ""} ORDER BY created_at DESC LIMIT 1000`,
            ...([q, q, q, q, ...(status ? [status] : [])] as string[]),
          ),
        );
      }
      if (m === "POST" && id === "find") return json(await this.findEmails(await this.body(req)));
      if (m === "POST" && id === "import") return json(this.importContacts(await this.body(req)));
      if (m === "POST" && id && !action) return json(this.updateContact(id, await this.body(req)));
      if (m === "DELETE" && id) {
        this.sql.exec("DELETE FROM contacts WHERE id=?", id);
        this.sql.exec("DELETE FROM enrollments WHERE contact_id=?", id);
        return json({ ok: true });
      }
    }

    if (res === "campaigns") {
      if (m === "GET") return json(this.listCampaigns());
      if (m === "POST" && !id) return json(this.saveCampaign(await this.body(req)));
      if (m === "POST" && action === "enroll") return json(this.enroll(id, await this.body(req)));
      if (m === "DELETE" && id) {
        this.sql.exec("DELETE FROM campaigns WHERE id=?", id);
        this.sql.exec("DELETE FROM enrollments WHERE campaign_id=?", id);
        return json({ ok: true });
      }
    }

    if (res === "inbox") {
      if (m === "GET" && id && action === "thread") return json(this.thread(id));
      if (m === "GET") {
        const ch = url.searchParams.get("channel");
        return json(
          this.q(
            `SELECT m.*, c.name AS contact_name, c.company AS contact_company FROM messages m LEFT JOIN contacts c ON c.id=m.contact_id
             WHERE m.direction='in' ${ch ? "AND m.channel=?" : ""} ORDER BY m.created_at DESC LIMIT 300`,
            ...(ch ? [ch] : []),
          ),
        );
      }
      if (m === "POST" && action === "read") {
        this.sql.exec("UPDATE messages SET read=1 WHERE id=?", id);
        return json({ ok: true });
      }
      if (m === "POST" && id === "read-all") {
        this.sql.exec("UPDATE messages SET read=1 WHERE direction='in'");
        return json({ ok: true });
      }
      if (m === "POST" && action === "reply") return json(await this.reply(id, await this.body(req)));
      if (m === "DELETE" && id) {
        this.sql.exec("DELETE FROM messages WHERE id=?", id);
        return json({ ok: true });
      }
    }

    if (res === "sent" && m === "GET")
      return json(this.q("SELECT m.*, c.name AS contact_name FROM messages m LEFT JOIN contacts c ON c.id=m.contact_id WHERE direction='out' ORDER BY created_at DESC LIMIT 300"));

    if (res === "compose" && m === "POST") return json(await this.compose(await this.body(req)));

    if (res === "bookings" && m === "GET") return json(this.q("SELECT id,uid,title,start_at,end_at,name,email,status,notes,meeting_url,created_at FROM bookings ORDER BY start_at DESC LIMIT 300"));

    if (res === "calendar" && m === "GET") {
      const from = Number(url.searchParams.get("from")) || startOfDay() - 31 * DAY;
      const to = Number(url.searchParams.get("to")) || startOfDay() + 62 * DAY;
      return json({
        posts: this.q("SELECT * FROM posts WHERE scheduled_at BETWEEN ? AND ? ORDER BY scheduled_at", from, to).map(postOut),
        bookings: this.q("SELECT id,title,start_at,end_at,name,email,status,meeting_url FROM bookings WHERE start_at BETWEEN ? AND ? ORDER BY start_at", from, to),
        sends: this.q(
          `SELECT (next_at / 86400000) * 86400000 AS day, COUNT(*) AS n FROM enrollments WHERE status='active' AND next_at BETWEEN ? AND ? GROUP BY day`,
          from,
          to,
        ),
      });
    }

    if (res === "settings") {
      if (m === "GET") return json(this.settingsOut(url));
      if (m === "POST") return json(await this.saveSettings(await this.body(req), url));
    }

    if (res === "ai" && m === "POST") {
      const key = this.setting("anthropic_key");
      if (!key) return err("Add an Anthropic API key in Settings → General to use AI writing.");
      const b = await this.body<{ kind?: "email" | "post" | "reply"; brief?: string }>(req);
      return json({ text: await aiWrite(key, b.kind ?? "post", String(b.brief ?? "")) });
    }

    return err("Not found", 404);
  }

  // ---------- overview ----------

  private overview() {
    const n = (sql: string, ...a: SqlStorageValue[]) => Number(this.one<{ n: number }>(sql, ...a)?.n ?? 0);
    const today = startOfDay();
    return {
      unread: n("SELECT COUNT(*) n FROM messages WHERE direction='in' AND read=0"),
      sentToday: n("SELECT COUNT(*) n FROM messages WHERE direction='out' AND channel='email' AND created_at>=?", today),
      sentWeek: n("SELECT COUNT(*) n FROM messages WHERE direction='out' AND channel='email' AND created_at>=?", now() - 7 * DAY),
      repliesWeek: n("SELECT COUNT(*) n FROM messages WHERE direction='in' AND channel='email' AND created_at>=?", now() - 7 * DAY),
      scheduledPosts: n("SELECT COUNT(*) n FROM posts WHERE status='scheduled'"),
      publishedWeek: n("SELECT COUNT(*) n FROM posts WHERE status IN ('published','partial') AND scheduled_at>=?", now() - 7 * DAY),
      contacts: n("SELECT COUNT(*) n FROM contacts"),
      activeSequences: n("SELECT COUNT(*) n FROM enrollments WHERE status='active'"),
      leadsWeek: n("SELECT COUNT(*) n FROM messages WHERE direction='in' AND channel IN ('form','booking') AND created_at>=?", now() - 7 * DAY),
      upcomingBookings: this.q("SELECT id,title,start_at,name,email,meeting_url,status FROM bookings WHERE start_at>=? AND status!='cancelled' ORDER BY start_at LIMIT 5", now() - 3600_000),
      upcomingPosts: this.q("SELECT * FROM posts WHERE status='scheduled' ORDER BY scheduled_at LIMIT 5").map(postOut),
      recentInbox: this.q("SELECT id,channel,from_addr,from_name,subject,body,read,created_at FROM messages WHERE direction='in' ORDER BY created_at DESC LIMIT 6"),
      accounts: this.listAccounts().map((a) => ({ id: a.id, kind: a.kind, platform: a.platform, label: a.label, status: a.status })),
      daily: this.q(
        `SELECT (created_at / 86400000) * 86400000 AS day, direction, COUNT(*) AS n FROM messages WHERE channel='email' AND created_at>=? GROUP BY day, direction`,
        today - 13 * DAY,
      ),
      activity: this.q("SELECT * FROM activity ORDER BY id DESC LIMIT 8"),
    };
  }

  // ---------- accounts ----------

  private listAccounts() {
    return this.q<{ id: string; kind: string; platform: string; label: string; config: string; status: string; last_error: string; created_at: number }>(
      "SELECT * FROM accounts ORDER BY kind, created_at",
    ).map((a) => {
      const cfg = JSON.parse(a.config || "{}");
      const set: string[] = [];
      for (const k of SECRET_KEYS)
        if (cfg[k]) {
          set.push(k);
          cfg[k] = "";
        }
      const sentToday =
        a.kind === "email"
          ? Number(this.one<{ n: number }>("SELECT COUNT(*) n FROM messages WHERE direction='out' AND account_id=? AND created_at>=?", a.id, startOfDay())?.n ?? 0)
          : 0;
      return { ...a, config: cfg, secretsSet: set, sentToday };
    });
  }

  private async saveAccount(b: { id?: string; kind?: string; platform?: string; label?: string; config?: Record<string, unknown> }) {
    const kind = b.kind === "email" ? "email" : "social";
    const existing = b.id ? this.one<{ config: string }>("SELECT config FROM accounts WHERE id=?", b.id) : undefined;
    const old = existing ? JSON.parse(existing.config) : {};
    const cfg: Record<string, unknown> = { ...old };
    for (const [k, v] of Object.entries(b.config ?? {})) {
      if (SECRET_KEYS.includes(k) && (v === "" || v == null)) continue; // keep the saved secret
      cfg[k] = typeof v === "string" ? v.trim() : v;
    }
    if (kind === "email") {
      cfg.email = String(cfg.email ?? "").toLowerCase();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(cfg.email))) throw new Error("Enter a valid email address");
      cfg.provider = cfg.provider === "resend" ? "resend" : "smtp";
      cfg.dailyLimit = Math.max(1, Math.min(500, Number(cfg.dailyLimit) || 40));
      if (cfg.smtpPort) cfg.smtpPort = Number(cfg.smtpPort);
      if (cfg.imapPort) cfg.imapPort = Number(cfg.imapPort);
    }
    const id = b.id || uid("acc_");
    const names: Record<string, string> = { twitter: "X (Twitter)", linkedin: "LinkedIn", facebook: "Facebook", medium: "Medium" };
    const label = String(b.label || cfg.email || cfg.handle || names[String(b.platform)] || "Account");
    if (existing)
      this.sql.exec("UPDATE accounts SET label=?, config=?, platform=? WHERE id=?", label, JSON.stringify(cfg), String(b.platform), id);
    else
      this.sql.exec(
        "INSERT INTO accounts(id,kind,platform,label,config,status,created_at) VALUES(?,?,?,?,?,?,?)",
        id,
        kind,
        String(kind === "email" ? "email" : b.platform),
        label,
        JSON.stringify(cfg),
        "unchecked",
        now(),
      );
    // Check the connection straight away so problems show up in Settings.
    await this.testAccount(id).catch(() => {});
    return this.listAccounts().find((a) => a.id === id);
  }

  private async testAccount(id: string) {
    const a = this.one<{ kind: string; platform: string; config: string; label: string }>("SELECT * FROM accounts WHERE id=?", id);
    if (!a) throw new Error("Account not found");
    const cfg = JSON.parse(a.config);
    try {
      let note = "";
      if (a.kind === "email") note = await testEmail(cfg);
      else {
        const verified = await verifySocial(a.platform as Platform, cfg);
        this.sql.exec("UPDATE accounts SET config=?, label=? WHERE id=?", JSON.stringify(verified), verified.handle || a.label, id);
        note = `Connected as ${verified.handle ?? a.platform}`;
      }
      this.sql.exec("UPDATE accounts SET status='ok', last_error=NULL WHERE id=?", id);
      return { ok: true, note };
    } catch (e) {
      this.sql.exec("UPDATE accounts SET status='error', last_error=? WHERE id=?", errMsg(e), id);
      return { ok: false, error: errMsg(e) };
    }
  }

  // ---------- posts ----------

  private savePost(b: { id?: string; title?: string; content?: string; imageUrl?: string; accountIds?: string[]; scheduledAt?: number; status?: string }) {
    const content = String(b.content ?? "").trim();
    if (!content) throw new Error("Write something to post");
    const ids = (b.accountIds ?? []).filter(Boolean);
    if (!ids.length) throw new Error("Pick at least one account");
    const status = b.status === "draft" ? "draft" : "scheduled";
    const at = Number(b.scheduledAt) || now();
    const id = b.id || uid("post_");
    this.sql.exec(
      `INSERT INTO posts(id,title,content,image_url,account_ids,scheduled_at,status,results,created_at) VALUES(?,?,?,?,?,?,?,?,?)
       ON CONFLICT(id) DO UPDATE SET title=excluded.title, content=excluded.content, image_url=excluded.image_url,
       account_ids=excluded.account_ids, scheduled_at=excluded.scheduled_at, status=excluded.status`,
      id,
      String(b.title ?? ""),
      content,
      String(b.imageUrl ?? ""),
      JSON.stringify(ids),
      at,
      status,
      "{}",
      now(),
    );
    return postOut(this.one("SELECT * FROM posts WHERE id=?", id)!);
  }

  private async publishPost(id: string) {
    const p = this.one<{ title: string; content: string; image_url: string; account_ids: string; results: string }>("SELECT * FROM posts WHERE id=?", id);
    if (!p) throw new Error("Post not found");
    const results: Record<string, { ok: boolean; id?: string; url?: string; error?: string; platform?: string }> = JSON.parse(p.results || "{}");
    for (const accId of JSON.parse(p.account_ids) as string[]) {
      if (results[accId]?.ok) continue;
      const a = this.one<{ platform: string; config: string; label: string }>("SELECT * FROM accounts WHERE id=?", accId);
      if (!a) {
        results[accId] = { ok: false, error: "Account removed" };
        continue;
      }
      try {
        const r = await publish(a.platform as Platform, JSON.parse(a.config), { title: p.title, content: p.content, imageUrl: p.image_url || undefined });
        results[accId] = { ok: true, id: r.id, url: r.url, platform: a.platform };
        this.log("info", `Published to ${a.platform} (${a.label})`);
      } catch (e) {
        results[accId] = { ok: false, error: errMsg(e), platform: a.platform };
        this.log("error", `Publishing to ${a.platform} failed: ${errMsg(e)}`);
      }
    }
    const vals = Object.values(results);
    const status = vals.every((r) => r.ok) ? "published" : vals.some((r) => r.ok) ? "partial" : "failed";
    this.sql.exec("UPDATE posts SET results=?, status=?, scheduled_at=MIN(scheduled_at, ?) WHERE id=?", JSON.stringify(results), status, now(), id);
  }

  // ---------- contacts ----------

  /** Adds or updates a contact by email and returns its id. Enrolls new contacts into matching auto campaigns. */
  private upsertContact(c: { email: string; name?: string; company?: string; website?: string; phone?: string; source?: string; notes?: string }): string {
    const email = addrOf(c.email);
    const found = this.one<{ id: string }>("SELECT id FROM contacts WHERE email=?", email);
    if (found) {
      this.sql.exec(
        `UPDATE contacts SET name=COALESCE(NULLIF(?,''),name), company=COALESCE(NULLIF(?,''),company), website=COALESCE(NULLIF(?,''),website),
         phone=COALESCE(NULLIF(?,''),phone), updated_at=? WHERE id=?`,
        c.name ?? "",
        c.company ?? "",
        c.website ?? "",
        c.phone ?? "",
        now(),
        found.id,
      );
      return found.id;
    }
    const id = uid("ct_");
    this.sql.exec(
      "INSERT INTO contacts(id,email,name,company,website,phone,source,status,notes,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
      id,
      email,
      c.name ?? "",
      c.company ?? "",
      c.website ?? "",
      c.phone ?? "",
      c.source ?? "manual",
      "new",
      c.notes ?? "",
      now(),
      now(),
    );
    for (const camp of this.listCampaigns())
      if (camp.status === "active" && camp.autoSources.includes(c.source ?? "manual")) this.enroll(camp.id, { contactIds: [id] });
    return id;
  }

  private importContacts(b: { csv?: string; rows?: Record<string, string>[]; source?: string }) {
    let rows = b.rows ?? [];
    if (b.csv) rows = parseCsv(b.csv);
    let added = 0;
    let skipped = 0;
    const ids: string[] = [];
    for (const r of rows) {
      const email = (r.email || r["e-mail"] || r["email address"] || Object.values(r).find((v) => /@/.test(v)) || "").trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        skipped++;
        continue;
      }
      const before = this.one("SELECT id FROM contacts WHERE email=?", email.toLowerCase());
      ids.push(
        this.upsertContact({
          email,
          name: r.name || [r.first_name || r["first name"], r.last_name || r["last name"]].filter(Boolean).join(" "),
          company: r.company || r.business || r.organization,
          website: r.website || r.url || r.site,
          phone: r.phone,
          source: b.source || "import",
        }),
      );
      if (!before) added++;
    }
    return { added, updated: ids.length - added, skipped, ids };
  }

  private updateContact(id: string, b: Record<string, unknown>) {
    for (const k of ["name", "company", "website", "phone", "status", "notes"])
      if (k in b) this.sql.exec(`UPDATE contacts SET ${k}=?, updated_at=? WHERE id=?`, String(b[k] ?? ""), now(), id);
    if (["unsubscribed", "replied", "booked", "client", "bounced"].includes(String(b.status)))
      this.sql.exec("UPDATE enrollments SET status=? WHERE contact_id=? AND status='active'", b.status === "replied" || b.status === "booked" ? "replied" : "stopped", id);
    return this.one("SELECT * FROM contacts WHERE id=?", id);
  }

  /** Visits websites (home + contact/about pages) and collects the email addresses on them. */
  private async findEmails(b: { urls?: string[] | string }) {
    const list = (Array.isArray(b.urls) ? b.urls : String(b.urls ?? "").split(/[\s,]+/)).map((u) => u.trim()).filter(Boolean).slice(0, 10);
    const out: { website: string; company: string; emails: string[]; error?: string }[] = [];
    for (const raw of list) {
      const base = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
      let origin: string;
      try {
        origin = new URL(base).origin;
      } catch {
        out.push({ website: raw, company: "", emails: [], error: "Invalid URL" });
        continue;
      }
      const host = new URL(origin).hostname.replace(/^www\./, "");
      const emails = new Set<string>();
      let company = "";
      let error: string | undefined;
      for (const p of ["", "/contact", "/contact-us", "/about"]) {
        try {
          const r = await fetch(origin + p, { headers: { "user-agent": "Mozilla/5.0 (compatible; OutreachBot/1.0)" }, redirect: "follow", signal: AbortSignal.timeout(8000) });
          if (!r.ok) continue;
          const html = (await r.text()).slice(0, 400_000);
          if (!company) company = (html.match(/<meta[^>]+property=["']og:site_name["'][^>]+content=["']([^"']+)/i)?.[1] || html.match(/<title>([^<|–-]+)/i)?.[1] || "").trim();
          const text = html.replace(/&#64;|&#x40;|\[at\]|\(at\)/gi, "@");
          for (const e of text.match(EMAIL_RE) ?? []) {
            const em = e.toLowerCase().replace(/^mailto:/, "");
            if (/\.(png|jpe?g|gif|svg|webp|css|js)$/.test(em) || /(sentry|wixpress|example\.|domain\.com|email\.com|yourdomain)/.test(em)) continue;
            emails.add(em);
          }
          if (emails.size >= 3) break;
        } catch (e) {
          error = errMsg(e);
        }
      }
      const sorted = [...emails].sort((a, b) => Number(b.endsWith(host)) - Number(a.endsWith(host)));
      out.push({ website: origin, company: stripHtml(company), emails: sorted, error: sorted.length ? undefined : error || "No email found" });
    }
    return out;
  }

  // ---------- campaigns ----------

  private listCampaigns(): (Campaign & { stats: Record<string, number> })[] {
    return this.q<{ id: string; data: string; created_at: number }>("SELECT * FROM campaigns ORDER BY created_at DESC").map((r) => {
      const c = { ...defaultsCampaign(), ...JSON.parse(r.data), id: r.id, createdAt: r.created_at } as Campaign;
      const stats: Record<string, number> = {};
      for (const s of this.q<{ status: string; n: number }>("SELECT status, COUNT(*) n FROM enrollments WHERE campaign_id=? GROUP BY status", r.id))
        stats[s.status] = Number(s.n);
      stats.sent = Number(this.one<{ n: number }>("SELECT COUNT(*) n FROM messages WHERE direction='out' AND campaign_id=?", r.id)?.n ?? 0);
      return { ...c, stats };
    });
  }

  private saveCampaign(b: Partial<Campaign>) {
    const id = b.id || uid("cmp_");
    const existing = this.listCampaigns().find((c) => c.id === id);
    const data: Partial<Campaign> = { ...defaultsCampaign(), ...(existing ?? {}), ...b };
    delete (data as { stats?: unknown }).stats;
    data.steps = (data.steps ?? []).filter((s) => s.body?.trim()).map((s, i) => ({ delayDays: i === 0 ? 0 : Math.max(1, Number(s.delayDays) || 3), subject: String(s.subject ?? ""), body: String(s.body) }));
    if (!data.steps.length) throw new Error("Add at least one email step");
    if (!data.steps[0].subject) throw new Error("The first email needs a subject");
    data.dailyLimit = Math.max(1, Number(data.dailyLimit) || 50);
    this.sql.exec(
      "INSERT INTO campaigns(id,data,created_at) VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data",
      id,
      JSON.stringify({ ...data, id: undefined, createdAt: undefined }),
      existing?.createdAt ?? now(),
    );
    return this.listCampaigns().find((c) => c.id === id);
  }

  private enroll(campaignId: string, b: { contactIds?: string[]; status?: string }) {
    let ids = b.contactIds ?? [];
    if (b.status) ids = this.q<{ id: string }>("SELECT id FROM contacts WHERE status=?", b.status).map((r) => r.id);
    let added = 0;
    for (const cid of ids) {
      const c = this.one<{ status: string }>("SELECT status FROM contacts WHERE id=?", cid);
      if (!c || c.status === "unsubscribed" || c.status === "bounced") continue;
      const r = this.sql.exec(
        "INSERT OR IGNORE INTO enrollments(id,campaign_id,contact_id,step,next_at,status,created_at) VALUES(?,?,?,?,?,?,?)",
        uid("en_"),
        campaignId,
        cid,
        0,
        now(),
        "active",
        now(),
      );
      added += r.rowsWritten > 0 ? 1 : 0;
    }
    return { added };
  }

  // ---------- inbox ----------

  private thread(id: string) {
    const m = this.one<{ contact_id: string; from_addr: string }>("SELECT * FROM messages WHERE id=?", id);
    if (!m) return [];
    return m.contact_id
      ? this.q("SELECT * FROM messages WHERE contact_id=? ORDER BY created_at", m.contact_id)
      : this.q("SELECT * FROM messages WHERE id=?", id);
  }

  private emailAccounts() {
    return this.q<{ id: string; config: string; label: string; status: string }>("SELECT * FROM accounts WHERE kind='email'").map((a) => ({
      ...a,
      cfg: JSON.parse(a.config) as EmailConfig,
    }));
  }

  private async reply(id: string, b: { body?: string; accountId?: string }) {
    const m = this.one<{ channel: string; account_id: string; from_addr: string; from_name: string; subject: string; message_id: string; contact_id: string; in_reply_to: string }>(
      "SELECT * FROM messages WHERE id=?",
      id,
    );
    if (!m) throw new Error("Message not found");
    const text = String(b.body ?? "").trim();
    if (!text) throw new Error("Write a reply first");
    if (!/@/.test(m.from_addr)) throw new Error("Replies to social comments are not supported yet. Open the post to reply there.");
    const acc = this.emailAccounts().find((a) => a.id === (b.accountId || m.account_id)) ?? this.emailAccounts()[0];
    if (!acc) throw new Error("Add an email account in Settings first");
    const subject = m.subject ? (/^re:/i.test(m.subject) ? m.subject : `Re: ${m.subject}`) : "Re: your message";
    const messageId = await sendMail(acc.cfg, { to: m.from_addr, toName: m.from_name, subject, body: text, inReplyTo: m.message_id || undefined });
    this.recordOut({ accountId: acc.id, contactId: m.contact_id, to: m.from_addr, subject, body: text, messageId, from: acc.cfg.email });
    this.sql.exec("UPDATE messages SET read=1 WHERE id=?", id);
    this.log("info", `Replied to ${m.from_addr}`);
    return { ok: true };
  }

  private async compose(b: { to?: string; subject?: string; body?: string; accountId?: string }) {
    const to = addrOf(String(b.to ?? ""));
    if (!/@/.test(to)) throw new Error("Enter a valid recipient");
    const acc = this.emailAccounts().find((a) => a.id === b.accountId) ?? this.emailAccounts()[0];
    if (!acc) throw new Error("Add an email account in Settings first");
    const subject = String(b.subject ?? "").trim() || "(no subject)";
    const body = String(b.body ?? "");
    const messageId = await sendMail(acc.cfg, { to, subject, body });
    const contactId = this.upsertContact({ email: to, source: "manual" });
    this.recordOut({ accountId: acc.id, contactId, to, subject, body, messageId, from: acc.cfg.email });
    return { ok: true };
  }

  private recordOut(o: { accountId: string; contactId?: string; campaignId?: string; to: string; subject: string; body: string; messageId: string; from: string }) {
    this.sql.exec(
      "INSERT INTO messages(id,direction,channel,account_id,contact_id,campaign_id,from_addr,to_addr,subject,body,message_id,read,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,1,?)",
      uid("msg_"),
      "out",
      "email",
      o.accountId,
      o.contactId ?? null,
      o.campaignId ?? null,
      o.from,
      o.to,
      o.subject,
      o.body,
      o.messageId,
      now(),
    );
  }

  private addInbound(o: {
    channel: string;
    accountId?: string;
    contactId?: string;
    from: string;
    fromName?: string;
    to?: string;
    subject?: string;
    body: string;
    messageId?: string;
    inReplyTo?: string;
    extId?: string;
    url?: string;
    meta?: unknown;
    at?: number;
  }): boolean {
    const r = this.sql.exec(
      `INSERT OR IGNORE INTO messages(id,direction,channel,account_id,contact_id,from_addr,from_name,to_addr,subject,body,message_id,in_reply_to,ext_id,url,meta,read,created_at)
       VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,0,?)`,
      uid("msg_"),
      "in",
      o.channel,
      o.accountId ?? null,
      o.contactId ?? null,
      o.from,
      o.fromName ?? "",
      o.to ?? "",
      o.subject ?? "",
      o.body,
      o.messageId ?? "",
      o.inReplyTo ?? "",
      o.extId ?? null,
      o.url ?? "",
      o.meta ? JSON.stringify(o.meta) : "",
      o.at ?? now(),
    );
    return r.rowsWritten > 0;
  }

  // ---------- public: website forms & bookings ----------

  private async lead(req: Request): Promise<Response> {
    const cors = { "access-control-allow-origin": "*", "access-control-allow-headers": "content-type" };
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: { ...cors, "access-control-allow-methods": "POST" } });
    if (req.method !== "POST") return err("Use POST", 405);
    const ip = req.headers.get("cf-connecting-ip") || "?";
    const hits = (this.leadHits.get(ip) ?? []).filter((t) => t > now() - 3600_000);
    if (hits.length >= 10) return json({ error: "Too many submissions" }, 429, cors);
    hits.push(now());
    this.leadHits.set(ip, hits);

    const ct = req.headers.get("content-type") || "";
    let data: Record<string, string> = {};
    if (ct.includes("json")) data = Object.fromEntries(Object.entries(await req.json<Record<string, unknown>>()).map(([k, v]) => [k, String(v ?? "")]));
    else {
      const f = await req.formData();
      for (const [k, v] of f.entries()) if (typeof v === "string") data[k] = v;
    }
    const redirect = data._redirect;
    delete data._redirect;
    // Honeypot: real people never fill this hidden field.
    if (data._gotcha || data.company_website_hp) return redirect ? Response.redirect(redirect, 303) : json({ ok: true }, 200, cors);
    delete data._gotcha;
    const email = (data.email || data.Email || Object.values(data).find((v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) || "").trim();
    const name = data.name || data.full_name || [data.first_name, data.last_name].filter(Boolean).join(" ");
    const formName = data._form || data.form || "Website form";
    delete data._form;
    const lines = Object.entries(data)
      .filter(([k, v]) => v && !["email", "name"].includes(k))
      .map(([k, v]) => `${k.replace(/[_-]/g, " ")}: ${v}`);
    let contactId: string | undefined;
    if (/@/.test(email)) contactId = this.upsertContact({ email, name, phone: data.phone, company: data.company || data.business, website: data.website, source: "website" });
    this.addInbound({
      channel: "form",
      contactId,
      from: email || data.phone || "Website visitor",
      fromName: name,
      subject: formName,
      body: lines.join("\n") || "(empty form)",
      meta: { page: req.headers.get("referer") || "", fields: data },
    });
    this.log("info", `New form submission from ${email || name || "a visitor"}`);
    if (redirect && /^https?:\/\//.test(redirect)) return Response.redirect(redirect, 303);
    return json({ ok: true }, 200, cors);
  }

  /** Cal.com webhook (BOOKING_CREATED / RESCHEDULED / CANCELLED). */
  private async calHook(req: Request, url: URL): Promise<Response> {
    if (req.method !== "POST") return err("Use POST", 405);
    const raw = await req.text();
    const key = url.searchParams.get("key") || "";
    const calSecret = this.setting("cal_secret");
    const sig = req.headers.get("x-cal-signature-256") || "";
    const keyOk = safeEqual(key, this.setting("hook_key")!);
    const sigOk = calSecret ? safeEqual(sig, hex(await hmac(calSecret, raw))) : false;
    if (!keyOk && !sigOk) return err("Unauthorized", 401);
    const evt = JSON.parse(raw) as { triggerEvent?: string; payload?: Record<string, unknown> };
    const p = (evt.payload ?? {}) as {
      uid?: string;
      title?: string;
      startTime?: string;
      endTime?: string;
      attendees?: { name?: string; email?: string; timeZone?: string }[];
      responses?: Record<string, { value?: unknown } | unknown>;
      additionalNotes?: string;
      description?: string;
      metadata?: { videoCallUrl?: string };
      location?: string;
      rescheduleUid?: string;
    };
    if (evt.triggerEvent === "PING" || !p) return json({ ok: true });
    const att = p.attendees?.[0] ?? {};
    const trigger = evt.triggerEvent || "BOOKING_CREATED";
    const status = /CANCEL/.test(trigger) ? "cancelled" : /RESCHEDULE/.test(trigger) ? "rescheduled" : "booked";
    const meeting = p.metadata?.videoCallUrl || (typeof p.location === "string" && /^https?:/.test(p.location) ? p.location : "");
    const notes = [p.additionalNotes || p.description || ""]
      .concat(
        Object.entries(p.responses ?? {})
          .filter(([k]) => !["name", "email", "guests", "location", "rescheduleReason"].includes(k))
          .map(([k, v]) => {
            const val = v && typeof v === "object" && "value" in v ? (v as { value: unknown }).value : v;
            return val ? `${k}: ${typeof val === "string" ? val : JSON.stringify(val)}` : "";
          }),
      )
      .filter(Boolean)
      .join("\n");
    const bUid = p.uid || uid("bk_");
    if (p.rescheduleUid) this.sql.exec("UPDATE bookings SET status='rescheduled' WHERE uid=?", p.rescheduleUid);
    this.sql.exec(
      `INSERT INTO bookings(id,uid,title,start_at,end_at,name,email,status,notes,meeting_url,raw,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)
       ON CONFLICT(uid) DO UPDATE SET title=excluded.title, start_at=excluded.start_at, end_at=excluded.end_at, status=excluded.status,
       notes=excluded.notes, meeting_url=COALESCE(NULLIF(excluded.meeting_url,''), meeting_url)`,
      uid("bk_"),
      bUid,
      p.title || "Call",
      Date.parse(p.startTime || "") || now(),
      Date.parse(p.endTime || "") || now(),
      att.name || "",
      (att.email || "").toLowerCase(),
      status,
      notes,
      meeting,
      raw.slice(0, 20000),
      now(),
    );
    const contactId = att.email ? this.upsertContact({ email: att.email, name: att.name, source: "booking" }) : undefined;
    if (contactId) this.sql.exec("UPDATE contacts SET status='booked' WHERE id=? AND status IN ('new','contacted','replied')", contactId);
    const when = p.startTime ? new Date(p.startTime).toUTCString() : "";
    this.addInbound({
      channel: "booking",
      contactId,
      from: att.email || "Cal.com",
      fromName: att.name,
      subject: `${status === "cancelled" ? "Cancelled" : status === "rescheduled" ? "Rescheduled" : "New booking"}: ${p.title || "Call"}`,
      body: [`When: ${when}`, att.timeZone ? `Their time zone: ${att.timeZone}` : "", meeting ? `Meeting link: ${meeting}` : "", notes].filter(Boolean).join("\n"),
      extId: `cal:${bUid}:${trigger}:${p.startTime}`,
      url: meeting,
    });
    this.log("info", `Booking ${status}: ${att.name || att.email || ""} (${when})`);
    return json({ ok: true });
  }

  // ---------- settings ----------

  private settingsOut(url: URL) {
    const origin = url.origin;
    const key = this.setting("hook_key")!;
    return {
      timezone: this.setting("timezone") || "Asia/Dhaka",
      anthropicKeySet: !!this.setting("anthropic_key"),
      calSecretSet: !!this.setting("cal_secret"),
      passwordFromEnv: !!this.env.ADMIN_PASSWORD,
      calWebhookUrl: `${origin}/api/hooks/cal?key=${key}`,
      leadEndpoint: `${origin}/api/lead`,
      unsubscribeLine: this.setting("unsubscribe_line") ?? "If this isn't relevant, just reply \"no thanks\" and I won't email again.",
    };
  }

  private async saveSettings(b: Record<string, string>, url: URL) {
    if (b.timezone) {
      try {
        new Intl.DateTimeFormat("en-US", { timeZone: b.timezone });
        this.setSetting("timezone", b.timezone);
      } catch {
        throw new Error("Unknown time zone");
      }
    }
    if (typeof b.unsubscribeLine === "string") this.setSetting("unsubscribe_line", b.unsubscribeLine);
    if (b.anthropicKey) this.setSetting("anthropic_key", b.anthropicKey.trim());
    if (b.calSecret) this.setSetting("cal_secret", b.calSecret.trim());
    if (b.newPassword) {
      if (b.newPassword.length < 8) throw new Error("Use at least 8 characters for the password");
      this.setSetting("password_hash", await hashPassword(b.newPassword));
      this.setSetting("session_secret", uid() + uid() + uid()); // signs everyone else out
    }
    if (b.rotateHookKey) this.setSetting("hook_key", uid() + uid());
    return this.settingsOut(url);
  }

  // ---------- automation (cron) ----------

  private localTime(t = now()) {
    const tz = this.setting("timezone") || "Asia/Dhaka";
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", hour12: false, weekday: "short" }).formatToParts(new Date(t));
    const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
    const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
    return { hour, weekend: weekday === "Sat" || weekday === "Sun" };
  }

  async tick(manual = false): Promise<void> {
    if (this.ticking) return;
    this.ticking = true;
    try {
      // 1. Scheduled posts that are due.
      for (const p of this.q<{ id: string }>("SELECT id FROM posts WHERE status='scheduled' AND scheduled_at<=? ORDER BY scheduled_at LIMIT 5", now()))
        await this.publishPost(p.id).catch((e) => this.log("error", errMsg(e)));

      // 2. Replies first, so nobody who answered gets a follow-up.
      await this.pollMail();

      // 3. Outreach emails that are due.
      await this.runOutreach();

      // 4. Social replies (every 15 minutes).
      if (manual || now() - this.lastSocialPoll > 15 * 60_000) {
        this.lastSocialPoll = now();
        await this.pollSocial();
      }
    } finally {
      this.ticking = false;
    }
  }

  private async pollMail() {
    for (const acc of this.emailAccounts()) {
      const c = withDefaults(acc.cfg);
      if (!c.imapHost || !c.password) continue;
      try {
        const r = await fetchNewMail(c);
        for (const mail of r.mails) {
          const contact = this.one<{ id: string }>("SELECT id FROM contacts WHERE email=?", mail.from);
          const refs = [mail.inReplyTo, ...mail.references.split(/\s+/)].filter(Boolean);
          const original = refs.length
            ? this.one<{ contact_id: string; campaign_id: string }>(
                `SELECT contact_id, campaign_id FROM messages WHERE direction='out' AND message_id IN (${refs.map(() => "?").join(",")}) LIMIT 1`,
                ...refs,
              )
            : undefined;
          const contactId = contact?.id ?? original?.contact_id;
          // Only replies from people we emailed (or answering our emails) go to the inbox.
          const emailed = contactId && this.one("SELECT id FROM messages WHERE direction='out' AND contact_id=? LIMIT 1", contactId);
          if (!emailed && !original) continue;
          const added = this.addInbound({
            channel: "email",
            accountId: acc.id,
            contactId,
            from: mail.from,
            fromName: mail.fromName,
            to: c.email,
            subject: mail.subject,
            body: mail.body,
            messageId: mail.messageId,
            inReplyTo: mail.inReplyTo,
            extId: `mail:${mail.messageId || `${acc.id}:${mail.uid}`}`,
            at: mail.date,
          });
          if (!added || !contactId) continue;
          const unsub = /\b(unsubscribe|remove me|stop emailing|no thanks|not interested)\b/i.test(mail.body.slice(0, 300));
          const status = unsub ? "unsubscribed" : "replied";
          this.sql.exec("UPDATE contacts SET status=?, updated_at=? WHERE id=?", status, now(), contactId);
          this.sql.exec("UPDATE enrollments SET status='replied' WHERE contact_id=? AND status='active'", contactId);
          this.log("info", `Reply from ${mail.from}${unsub ? " (asked to stop)" : ""}`);
        }
        acc.cfg.imapUid = r.uid;
        acc.cfg.imapValidity = r.validity;
        this.sql.exec("UPDATE accounts SET config=? WHERE id=?", JSON.stringify(acc.cfg), acc.id);
      } catch (e) {
        this.sql.exec("UPDATE accounts SET status='error', last_error=? WHERE id=?", `Inbox: ${errMsg(e)}`, acc.id);
        this.log("warn", `Checking ${c.email} failed: ${errMsg(e)}`);
      }
    }
  }

  private async runOutreach() {
    const campaigns = this.listCampaigns().filter((c) => c.status === "active");
    if (!campaigns.length) return;
    const accounts = new Map(this.emailAccounts().map((a) => [a.id, a]));
    const sentToday = (accId: string) =>
      Number(this.one<{ n: number }>("SELECT COUNT(*) n FROM messages WHERE direction='out' AND account_id=? AND created_at>=?", accId, startOfDay())?.n ?? 0);
    const unsubLine = this.setting("unsubscribe_line") ?? "";
    const { hour, weekend } = this.localTime();
    let budget = MAX_SENDS_PER_TICK;

    for (const camp of campaigns) {
      if (budget <= 0) break;
      if (camp.weekdaysOnly && weekend) continue;
      if (hour < camp.startHour || hour >= camp.endHour) continue;
      const campToday = Number(
        this.one<{ n: number }>("SELECT COUNT(*) n FROM messages WHERE direction='out' AND campaign_id=? AND created_at>=?", camp.id, startOfDay())?.n ?? 0,
      );
      let campBudget = Math.min(budget, camp.dailyLimit - campToday);
      if (campBudget <= 0) continue;
      const pool = camp.accountIds.filter((id) => accounts.has(id));
      if (!pool.length) {
        this.log("warn", `Campaign "${camp.name}" has no email account selected`);
        continue;
      }
      const due = this.q<{ id: string; contact_id: string; step: number; account_id: string; thread_id: string; thread_subject: string; attempts: number }>(
        "SELECT * FROM enrollments WHERE campaign_id=? AND status='active' AND next_at<=? ORDER BY next_at LIMIT ?",
        camp.id,
        now(),
        campBudget,
      );
      for (const en of due) {
        if (campBudget <= 0) break;
        const contact = this.one<{ id: string; email: string; name: string; company: string; website: string; status: string }>("SELECT * FROM contacts WHERE id=?", en.contact_id);
        if (!contact || ["unsubscribed", "bounced", "replied", "booked"].includes(contact.status)) {
          this.sql.exec("UPDATE enrollments SET status=? WHERE id=?", contact?.status === "replied" || contact?.status === "booked" ? "replied" : "stopped", en.id);
          continue;
        }
        // Keep each contact on the same sender; otherwise pick the least-used account with room left today.
        let accId = en.account_id && accounts.has(en.account_id) ? en.account_id : "";
        if (!accId) {
          accId =
            pool
              .map((id) => ({ id, used: sentToday(id), limit: accounts.get(id)!.cfg.dailyLimit ?? 40 }))
              .filter((a) => a.used < a.limit)
              .sort((a, b) => a.used / a.limit - b.used / b.limit)[0]?.id ?? "";
        } else if (sentToday(accId) >= (accounts.get(accId)!.cfg.dailyLimit ?? 40)) continue;
        if (!accId) break; // every sender is at its daily limit
        const acc = accounts.get(accId)!;
        const step = camp.steps[en.step];
        if (!step) {
          this.sql.exec("UPDATE enrollments SET status='done' WHERE id=?", en.id);
          continue;
        }
        const first = (contact.name || "").split(/\s+/)[0] || "";
        const vars = {
          first_name: first,
          name: contact.name,
          company: contact.company,
          website: contact.website,
          email: contact.email,
          sender_name: acc.cfg.fromName || "",
        };
        const subject = step.subject?.trim()
          ? fillTemplate(step.subject, vars)
          : en.thread_subject
            ? `Re: ${en.thread_subject.replace(/^re:\s*/i, "")}`
            : fillTemplate(camp.steps[0].subject, vars);
        let body = fillTemplate(step.body, vars);
        if (unsubLine && en.step === 0) body += `\n\n${unsubLine}`;
        try {
          const messageId = await sendMail(acc.cfg, {
            to: contact.email,
            toName: contact.name,
            subject,
            body,
            inReplyTo: !step.subject?.trim() && en.thread_id ? en.thread_id : undefined,
          });
          this.recordOut({ accountId: accId, contactId: contact.id, campaignId: camp.id, to: contact.email, subject, body, messageId, from: acc.cfg.email });
          const nextStep = en.step + 1;
          const next = camp.steps[nextStep];
          this.sql.exec(
            "UPDATE enrollments SET step=?, next_at=?, status=?, account_id=?, thread_id=COALESCE(thread_id, ?), thread_subject=COALESCE(thread_subject, ?), attempts=0, last_error=NULL WHERE id=?",
            nextStep,
            next ? now() + next.delayDays * DAY : now(),
            next ? "active" : "done",
            accId,
            messageId,
            subject,
            en.id,
          );
          this.sql.exec("UPDATE contacts SET status='contacted', updated_at=? WHERE id=? AND status='new'", now(), contact.id);
          campBudget--;
          budget--;
        } catch (e) {
          const attempts = en.attempts + 1;
          this.sql.exec(
            "UPDATE enrollments SET attempts=?, last_error=?, next_at=?, status=? WHERE id=?",
            attempts,
            errMsg(e),
            now() + 60 * 60_000,
            attempts >= 3 ? "failed" : "active",
            en.id,
          );
          this.log("error", `Sending to ${contact.email} failed: ${errMsg(e)}`);
          if (/auth|login|credentials|535/i.test(errMsg(e))) {
            this.sql.exec("UPDATE accounts SET status='error', last_error=? WHERE id=?", errMsg(e), accId);
            accounts.delete(accId);
          }
        }
      }
    }
  }

  private async pollSocial() {
    for (const a of this.q<{ id: string; platform: string; config: string; label: string }>("SELECT * FROM accounts WHERE kind='social' AND platform IN ('twitter','facebook')")) {
      const cfg = JSON.parse(a.config) as SocialConfig;
      try {
        if (a.platform === "twitter") {
          const r = await xMentions(cfg);
          for (const m of r.replies) this.addInbound({ channel: "twitter", accountId: a.id, from: m.from, fromName: m.fromName, body: m.text, extId: m.extId, url: m.url, at: m.date });
          if (r.sinceId && r.sinceId !== cfg.sinceId) {
            cfg.sinceId = r.sinceId;
            this.sql.exec("UPDATE accounts SET config=? WHERE id=?", JSON.stringify(cfg), a.id);
          }
        } else {
          const posts = this.q<{ results: string }>("SELECT results FROM posts WHERE status IN ('published','partial') AND scheduled_at>=?", now() - 14 * DAY);
          const ids = posts.map((p) => JSON.parse(p.results)[a.id]?.id).filter(Boolean);
          for (const m of await fbComments(cfg, ids))
            this.addInbound({ channel: "facebook", accountId: a.id, from: m.from, fromName: m.fromName, body: m.text, extId: m.extId, url: m.url, at: m.date });
        }
      } catch (e) {
        // Reading mentions needs a paid X API plan; keep this quiet in the account status.
        this.sql.exec("UPDATE accounts SET last_error=? WHERE id=?", `Replies: ${errMsg(e)}`.slice(0, 300), a.id);
      }
    }
  }
}

function defaultsCampaign(): Omit<Campaign, "id" | "createdAt"> {
  return { name: "New campaign", steps: [], accountIds: [], dailyLimit: 50, status: "draft", autoSources: [], startHour: 9, endHour: 18, weekdaysOnly: true };
}

function postOut(p: Row) {
  return {
    ...p,
    account_ids: JSON.parse(String(p.account_ids || "[]")),
    results: JSON.parse(String(p.results || "{}")),
  };
}

/** Minimal CSV parser (handles quotes). Returns rows keyed by lower-cased header. */
function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let q = false;
  const sep = (text.split("\n")[0].match(/\t/g)?.length ?? 0) > (text.split("\n")[0].match(/,/g)?.length ?? 0) ? "\t" : ",";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') q = false;
      else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === sep) {
      row.push(cell);
      cell = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else cell += ch;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const clean = rows.filter((r) => r.some((c) => c.trim()));
  if (!clean.length) return [];
  const hasHeader = !clean[0].some((c) => /@/.test(c));
  const header = hasHeader ? clean[0].map((h) => h.trim().toLowerCase()) : ["email", "name", "company", "website"];
  return (hasHeader ? clean.slice(1) : clean).map((r) => Object.fromEntries(header.map((h, i) => [h, (r[i] ?? "").trim()])));
}
