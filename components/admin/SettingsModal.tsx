"use client";

import { useEffect, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Account, Settings } from "./types";
import { api, Brand, CopyField, Field, Icon, Modal, PLATFORM_LABEL, Status, timeAgo } from "./ui";

export type SettingsTab = "social" | "email" | "website" | "general";

const TABS: { id: SettingsTab; label: string; icon: string }[] = [
  { id: "social", label: "Social accounts", icon: "share" },
  { id: "email", label: "Email accounts", icon: "mail" },
  { id: "website", label: "Website & bookings", icon: "globe" },
  { id: "general", label: "General", icon: "settings" },
];

export function SettingsModal({ ctx, initial, onClose }: { ctx: AppCtx; initial: SettingsTab; onClose: () => void }) {
  const [tab, setTab] = useState<SettingsTab>(initial);
  return (
    <Modal title="Settings" onClose={onClose} wide>
      <div className="adm-settings">
        <nav className="adm-settings-nav">
          {TABS.map((t) => (
            <button key={t.id} className={`adm-nav-item${tab === t.id ? " active" : ""}`} onClick={() => setTab(t.id)}>
              <Icon name={t.icon} size={17} />
              <span>{t.label}</span>
            </button>
          ))}
        </nav>
        <div className="adm-settings-body">
          {tab === "social" && <SocialAccounts ctx={ctx} />}
          {tab === "email" && <EmailAccounts ctx={ctx} />}
          {tab === "website" && <WebsiteSettings ctx={ctx} />}
          {tab === "general" && <General ctx={ctx} />}
        </div>
      </div>
    </Modal>
  );
}

// ---------- accounts list ----------

function AccountRow({ a, ctx, onEdit }: { a: Account; ctx: AppCtx; onEdit: () => void }) {
  const [busy, setBusy] = useState(false);
  return (
    <div className="adm-acc">
      <Brand platform={a.platform} size={30} />
      <div className="adm-acc-main">
        <b>{a.label}</b>
        <span>
          {PLATFORM_LABEL(a.platform)}
          {a.kind === "email" && ` · ${a.sentToday}/${a.config.dailyLimit ?? 40} sent today`}
        </span>
        {a.last_error && <span className="adm-acc-err">{a.last_error}</span>}
      </div>
      <Status value={a.status === "ok" ? "connected" : a.status} />
      <div className="adm-acc-actions">
        <button
          className="adm-btn"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              const r = await api<{ ok: boolean; note?: string; error?: string }>(`accounts/${a.id}/test`, { body: {} });
              ctx.toast(r.ok ? r.note || "Connection works" : r.error || "Failed", r.ok ? "ok" : "error");
              await ctx.reloadAccounts();
            } finally {
              setBusy(false);
            }
          }}
        >
          {busy ? "Testing…" : "Test"}
        </button>
        <button className="adm-btn" onClick={onEdit}>
          Edit
        </button>
        <button
          className="adm-icon-btn"
          aria-label="Remove"
          onClick={async () => {
            if (!confirm(`Remove ${a.label}?`)) return;
            await api(`accounts/${a.id}`, { method: "DELETE" });
            await ctx.reloadAccounts();
          }}
        >
          <Icon name="trash" size={16} />
        </button>
      </div>
    </div>
  );
}

// ---------- social ----------

const SOCIAL_FIELDS: Record<string, { key: string; label: string; secret?: boolean; optional?: boolean; placeholder?: string }[]> = {
  twitter: [
    { key: "apiKey", label: "API Key (Consumer Key)", secret: true },
    { key: "apiSecret", label: "API Key Secret", secret: true },
    { key: "accessToken", label: "Access Token", secret: true },
    { key: "accessSecret", label: "Access Token Secret", secret: true },
  ],
  linkedin: [
    { key: "token", label: "Access token", secret: true },
    { key: "authorUrn", label: "Company page URN (optional)", optional: true, placeholder: "urn:li:organization:123456 — leave empty to post as yourself" },
  ],
  facebook: [
    { key: "pageId", label: "Page ID", placeholder: "e.g. 102938475610293" },
    { key: "token", label: "Page access token", secret: true },
  ],
  medium: [{ key: "token", label: "Integration token", secret: true }],
};

const SOCIAL_HELP: Record<string, React.ReactNode> = {
  twitter: (
    <ol>
      <li>
        Open <a href="https://developer.x.com/en/portal/dashboard" target="_blank" rel="noopener">developer.x.com</a> and create a Project and App.
      </li>
      <li>In the app’s <b>User authentication settings</b>, set App permissions to <b>Read and write</b>.</li>
      <li>Under <b>Keys and tokens</b>, copy the API Key and Secret, then generate the Access Token and Secret (after setting permissions).</li>
      <li>Posting works on every plan. Showing @mentions in the inbox needs a plan that allows reading.</li>
    </ol>
  ),
  linkedin: (
    <ol>
      <li>
        Create an app at <a href="https://www.linkedin.com/developers/apps" target="_blank" rel="noopener">linkedin.com/developers</a> (it needs a company page to attach to).
      </li>
      <li>Under <b>Products</b>, add <b>Share on LinkedIn</b> and <b>Sign In with LinkedIn using OpenID Connect</b>.</li>
      <li>
        Use the <a href="https://www.linkedin.com/developers/tools/oauth/token-generator" target="_blank" rel="noopener">token generator</a> with the scopes <code>openid profile w_member_social</code> and paste the token here.
      </li>
      <li>LinkedIn tokens expire after 60 days; paste a new one when the account shows an error.</li>
    </ol>
  ),
  facebook: (
    <ol>
      <li>
        In <a href="https://developers.facebook.com/tools/explorer/" target="_blank" rel="noopener">Graph API Explorer</a>, pick your app, add <code>pages_manage_posts</code>, <code>pages_read_engagement</code> and <code>pages_show_list</code>, then generate a token.
      </li>
      <li>Choose your Page under “User or Page” to get a Page token, and extend it in the Access Token Debugger so it does not expire.</li>
      <li>The Page ID is in your Page’s About → Page transparency, or in the Explorer’s <code>me/accounts</code> result.</li>
    </ol>
  ),
  medium: (
    <ol>
      <li>
        Go to <a href="https://medium.com/me/settings/security" target="_blank" rel="noopener">Medium settings → Security and apps → Integration tokens</a> and create a token.
      </li>
      <li>Medium no longer gives new tokens to every account. If you don’t see the option, Medium can’t be connected automatically.</li>
    </ol>
  ),
};

function SocialAccounts({ ctx }: { ctx: AppCtx }) {
  const [editing, setEditing] = useState<{ platform: string; account?: Account } | null>(null);
  const list = ctx.accounts.filter((a) => a.kind === "social");
  if (editing) return <SocialForm ctx={ctx} platform={editing.platform} account={editing.account} onDone={() => setEditing(null)} />;
  return (
    <div className="adm-stack">
      <div className="adm-sec-head">
        <div>
          <h3>Social accounts</h3>
          <p>Posts you schedule are published to these automatically.</p>
        </div>
      </div>
      <div className="adm-platforms">
        {Object.keys(SOCIAL_FIELDS).map((p) => (
          <button key={p} className="adm-platform" onClick={() => setEditing({ platform: p })}>
            <Brand platform={p} size={28} />
            <span>{PLATFORM_LABEL(p)}</span>
            <Icon name="plus" size={16} />
          </button>
        ))}
      </div>
      {list.length > 0 && (
        <div className="adm-acc-list">
          {list.map((a) => (
            <AccountRow key={a.id} a={a} ctx={ctx} onEdit={() => setEditing({ platform: a.platform, account: a })} />
          ))}
        </div>
      )}
    </div>
  );
}

function SocialForm({ ctx, platform, account, onDone }: { ctx: AppCtx; platform: string; account?: Account; onDone: () => void }) {
  const [cfg, setCfg] = useState<Record<string, string>>(() =>
    Object.fromEntries(SOCIAL_FIELDS[platform].map((f) => [f.key, String(account?.config[f.key] ?? "")])),
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  return (
    <form
      className="adm-stack"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError("");
        try {
          const saved = await api<Account>("accounts", { body: { id: account?.id, kind: "social", platform, config: cfg } });
          await ctx.reloadAccounts();
          if (saved.status === "ok") {
            ctx.toast(`${PLATFORM_LABEL(platform)} connected`);
            onDone();
          } else setError(saved.last_error || "Could not connect. Check the values and try again.");
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setBusy(false);
        }
      }}
    >
      <button type="button" className="adm-back" onClick={onDone}>
        <Icon name="left" size={16} /> All accounts
      </button>
      <div className="adm-sec-head">
        <Brand platform={platform} size={34} />
        <div>
          <h3>{account ? "Edit" : "Connect"} {PLATFORM_LABEL(platform)}</h3>
          <p>Credentials stay on your server and are never shown again after saving.</p>
        </div>
      </div>
      <div className="adm-help">{SOCIAL_HELP[platform]}</div>
      {SOCIAL_FIELDS[platform].map((f) => (
        <Field key={f.key} label={f.label}>
          <input
            type={f.secret ? "password" : "text"}
            autoComplete="off"
            placeholder={f.secret && account?.secretsSet.includes(f.key) ? "•••••••• saved — leave empty to keep" : f.placeholder}
            required={!f.optional && !(f.secret && account?.secretsSet.includes(f.key))}
            value={cfg[f.key]}
            onChange={(e) => setCfg({ ...cfg, [f.key]: e.target.value })}
          />
        </Field>
      ))}
      {error && <div className="adm-error">{error}</div>}
      <div className="adm-row-end">
        <button type="button" className="adm-btn" onClick={onDone}>
          Cancel
        </button>
        <button className="adm-btn primary" disabled={busy}>
          {busy ? "Connecting…" : "Save & connect"}
        </button>
      </div>
    </form>
  );
}

// ---------- email ----------

const PROVIDERS = [
  { id: "gmail", label: "Gmail / Google Workspace", smtpHost: "smtp.gmail.com", smtpPort: 465, imapHost: "imap.gmail.com" },
  { id: "outlook", label: "Outlook / Microsoft 365", smtpHost: "smtp.office365.com", smtpPort: 587, imapHost: "outlook.office365.com" },
  { id: "zoho", label: "Zoho Mail", smtpHost: "smtp.zoho.com", smtpPort: 465, imapHost: "imap.zoho.com" },
  { id: "custom", label: "Other (SMTP + IMAP)", smtpHost: "", smtpPort: 465, imapHost: "" },
  { id: "resend", label: "Resend API (sending only)", smtpHost: "", smtpPort: 0, imapHost: "" },
];

function EmailAccounts({ ctx }: { ctx: AppCtx }) {
  const [editing, setEditing] = useState<Account | "new" | null>(null);
  const list = ctx.accounts.filter((a) => a.kind === "email");
  if (editing) return <EmailForm ctx={ctx} account={editing === "new" ? undefined : editing} onDone={() => setEditing(null)} />;
  return (
    <div className="adm-stack">
      <div className="adm-sec-head">
        <div>
          <h3>Email accounts</h3>
          <p>Outreach is spread across these inboxes, each with its own daily limit. Replies are read from them every 5 minutes.</p>
        </div>
        <button className="adm-btn primary" onClick={() => setEditing("new")}>
          <Icon name="plus" size={16} /> Add email
        </button>
      </div>
      {list.length ? (
        <div className="adm-acc-list">
          {list.map((a) => (
            <AccountRow key={a.id} a={a} ctx={ctx} onEdit={() => setEditing(a)} />
          ))}
        </div>
      ) : (
        <div className="adm-help">
          Add 4–5 sending inboxes (for example on a separate outreach domain). Keep each one to about 30–50 emails a day so they stay out of spam.
        </div>
      )}
    </div>
  );
}

function EmailForm({ ctx, account, onDone }: { ctx: AppCtx; account?: Account; onDone: () => void }) {
  const c = account?.config ?? {};
  const guess = c.provider === "resend" ? "resend" : PROVIDERS.find((p) => p.smtpHost && p.smtpHost === c.smtpHost)?.id ?? (account ? "custom" : "gmail");
  const [provider, setProvider] = useState(guess);
  const [f, setF] = useState<Record<string, string>>({
    email: String(c.email ?? ""),
    fromName: String(c.fromName ?? "Ramjan Ali"),
    password: "",
    resendKey: "",
    smtpHost: String(c.smtpHost ?? ""),
    smtpPort: String(c.smtpPort ?? ""),
    imapHost: String(c.imapHost ?? ""),
    imapPort: String(c.imapPort ?? ""),
    username: String(c.username ?? ""),
    dailyLimit: String(c.dailyLimit ?? 40),
    signature: String(c.signature ?? ""),
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [advanced, setAdvanced] = useState(provider === "custom");
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const p = PROVIDERS.find((x) => x.id === provider)!;

  return (
    <form
      className="adm-stack"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError("");
        const config: Record<string, unknown> = {
          ...f,
          provider: provider === "resend" ? "resend" : "smtp",
          smtpHost: f.smtpHost || p.smtpHost,
          smtpPort: Number(f.smtpPort) || p.smtpPort || undefined,
          imapHost: f.imapHost || p.imapHost,
          imapPort: Number(f.imapPort) || 993,
        };
        try {
          const saved = await api<Account>("accounts", { body: { id: account?.id, kind: "email", platform: "email", label: f.email, config } });
          await ctx.reloadAccounts();
          if (saved.status === "ok") {
            ctx.toast(`${f.email} connected`);
            onDone();
          } else setError(saved.last_error || "Could not sign in. Check the password and server settings.");
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setBusy(false);
        }
      }}
    >
      <button type="button" className="adm-back" onClick={onDone}>
        <Icon name="left" size={16} /> All email accounts
      </button>
      <h3>{account ? "Edit email account" : "Add an email account"}</h3>
      <Field label="Provider">
        <select value={provider} onChange={(e) => setProvider(e.target.value)}>
          {PROVIDERS.map((x) => (
            <option key={x.id} value={x.id}>
              {x.label}
            </option>
          ))}
        </select>
      </Field>
      {provider === "gmail" && (
        <div className="adm-help">
          Gmail needs an <b>app password</b>, not your normal password: turn on 2-Step Verification, then create one at{" "}
          <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noopener">
            myaccount.google.com/apppasswords
          </a>
          .
        </div>
      )}
      {provider === "outlook" && <div className="adm-help">Use an app password, and make sure SMTP AUTH and IMAP are allowed for the mailbox in Microsoft 365.</div>}
      {provider === "resend" && (
        <div className="adm-help">
          Resend sends from a verified domain. It can’t read replies, so point replies to an inbox you also add here, or check them yourself.
        </div>
      )}
      <div className="adm-grid2">
        <Field label="Email address">
          <input type="email" required value={f.email} onChange={set("email")} placeholder="you@yourdomain.com" />
        </Field>
        <Field label="Sender name">
          <input value={f.fromName} onChange={set("fromName")} />
        </Field>
      </div>
      {provider === "resend" ? (
        <Field label="Resend API key">
          <input type="password" autoComplete="off" value={f.resendKey} onChange={set("resendKey")} placeholder={account?.secretsSet.includes("resendKey") ? "•••••••• saved" : "re_…"} required={!account?.secretsSet.includes("resendKey")} />
        </Field>
      ) : (
        <Field label={provider === "gmail" ? "App password" : "Password / app password"}>
          <input type="password" autoComplete="new-password" value={f.password} onChange={set("password")} placeholder={account?.secretsSet.includes("password") ? "•••••••• saved — leave empty to keep" : ""} required={!account?.secretsSet.includes("password")} />
        </Field>
      )}
      <div className="adm-grid2">
        <Field label="Daily sending limit" hint="30–50 is a safe range for a warmed-up inbox.">
          <input type="number" min={1} max={500} value={f.dailyLimit} onChange={set("dailyLimit")} />
        </Field>
      </div>
      <Field label="Signature (optional)">
        <textarea rows={3} value={f.signature} onChange={set("signature")} placeholder={"Ramjan Ali Akash\nLocal SEO for home service businesses"} />
      </Field>
      {provider !== "resend" && (
        <>
          <button type="button" className="adm-link" onClick={() => setAdvanced((a) => !a)}>
            {advanced ? "Hide" : "Show"} server settings
          </button>
          {advanced && (
            <div className="adm-grid2">
              <Field label="SMTP host">
                <input value={f.smtpHost} onChange={set("smtpHost")} placeholder={p.smtpHost || "smtp.example.com"} />
              </Field>
              <Field label="SMTP port" hint="465 (SSL) or 587 (STARTTLS)">
                <input value={f.smtpPort} onChange={set("smtpPort")} placeholder={String(p.smtpPort || 465)} />
              </Field>
              <Field label="IMAP host" hint="Used to find replies">
                <input value={f.imapHost} onChange={set("imapHost")} placeholder={p.imapHost || "imap.example.com"} />
              </Field>
              <Field label="IMAP port">
                <input value={f.imapPort} onChange={set("imapPort")} placeholder="993" />
              </Field>
              <Field label="Username" hint="Usually the email address">
                <input value={f.username} onChange={set("username")} placeholder={f.email} />
              </Field>
            </div>
          )}
        </>
      )}
      {error && <div className="adm-error">{error}</div>}
      <div className="adm-row-end">
        <button type="button" className="adm-btn" onClick={onDone}>
          Cancel
        </button>
        <button className="adm-btn primary" disabled={busy}>
          {busy ? "Connecting…" : "Save & test"}
        </button>
      </div>
    </form>
  );
}

// ---------- website & bookings ----------

function useSettings() {
  const [s, setS] = useState<Settings | null>(null);
  useEffect(() => {
    api<Settings>("settings").then(setS).catch(() => {});
  }, []);
  return [s, setS] as const;
}

function WebsiteSettings({ ctx }: { ctx: AppCtx }) {
  const [s, setS] = useSettings();
  const [secret, setSecret] = useState("");
  if (!s) return <div className="adm-skel" />;
  const snippet = `<form action="${s.leadEndpoint}" method="POST">
  <input name="name" placeholder="Name" required>
  <input name="email" type="email" placeholder="Email" required>
  <input name="phone" placeholder="Phone">
  <textarea name="message" placeholder="How can I help?"></textarea>
  <input type="hidden" name="_form" value="Contact form">
  <input type="hidden" name="_redirect" value="https://your-site.com/thanks">
  <input name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  <button>Send</button>
</form>`;
  return (
    <div className="adm-stack">
      <div className="adm-sec-head">
        <div>
          <h3>Cal.com bookings</h3>
          <p>New, rescheduled and cancelled calls show up in your Inbox and Calendar.</p>
        </div>
      </div>
      <ol className="adm-steps">
        <li>
          Open <a href="https://app.cal.com/settings/developer/webhooks" target="_blank" rel="noopener">Cal.com → Settings → Developer → Webhooks</a> and click <b>New</b>.
        </li>
        <li>Paste this as the Subscriber URL:</li>
      </ol>
      <CopyField value={s.calWebhookUrl} />
      <ol className="adm-steps" start={3}>
        <li>Turn on Booking Created, Booking Rescheduled and Booking Cancelled, then save.</li>
        <li>Optional: if you set a secret key in Cal.com, paste the same key here so each booking is verified.</li>
      </ol>
      <div className="adm-copy">
        <input type="password" placeholder={s.calSecretSet ? "•••••••• saved" : "Cal.com webhook secret (optional)"} value={secret} onChange={(e) => setSecret(e.target.value)} />
        <button
          className="adm-btn"
          disabled={!secret}
          onClick={async () => {
            setS(await api<Settings>("settings", { body: { calSecret: secret } }));
            setSecret("");
            ctx.toast("Secret saved");
          }}
        >
          Save
        </button>
      </div>

      <div className="adm-divider" />
      <div className="adm-sec-head">
        <div>
          <h3>Website forms</h3>
          <p>Any form that posts to this address lands in your Inbox, and the person is added to Contacts.</p>
        </div>
      </div>
      <CopyField value={s.leadEndpoint} />
      <p className="adm-hint">Works with a plain HTML form (below), JavaScript <code>fetch</code> with JSON, or tools like Zapier, Tally and Typeform via webhook.</p>
      <pre className="adm-code">{snippet}</pre>
    </div>
  );
}

// ---------- general ----------

function General({ ctx }: { ctx: AppCtx }) {
  const [s, setS] = useSettings();
  const [form, setForm] = useState({ timezone: "", unsubscribeLine: "", anthropicKey: "", newPassword: "" });
  const [activity, setActivity] = useState<{ id: number; level: string; text: string; created_at: number }[]>([]);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (s) setForm((f) => ({ ...f, timezone: s.timezone, unsubscribeLine: s.unsubscribeLine }));
  }, [s]);
  useEffect(() => {
    api<typeof activity>("activity").then(setActivity).catch(() => {});
  }, []);
  if (!s) return <div className="adm-skel" />;
  return (
    <form
      className="adm-stack"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          setS(await api<Settings>("settings", { body: form }));
          setForm((f) => ({ ...f, anthropicKey: "", newPassword: "" }));
          ctx.toast("Settings saved");
        } catch (err) {
          ctx.toast((err as Error).message, "error");
        }
      }}
    >
      <h3>General</h3>
      <div className="adm-grid2">
        <Field label="Time zone" hint="Used for sending hours and the calendar.">
          <input value={form.timezone} onChange={(e) => setForm({ ...form, timezone: e.target.value })} placeholder="Asia/Dhaka" list="adm-tz" />
          <datalist id="adm-tz">
            {["Asia/Dhaka", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "Europe/London", "UTC"].map((z) => (
              <option key={z} value={z} />
            ))}
          </datalist>
        </Field>
      </div>
      <Field label="Opt-out line" hint="Added to the first outreach email. Replies like “no thanks” or “unsubscribe” stop the sequence automatically.">
        <input value={form.unsubscribeLine} onChange={(e) => setForm({ ...form, unsubscribeLine: e.target.value })} />
      </Field>
      <Field label="Anthropic API key (for “Write with AI”)" hint={s.anthropicKeySet ? "A key is saved. Paste a new one to replace it." : "Optional. Get one at console.anthropic.com."}>
        <input type="password" autoComplete="off" value={form.anthropicKey} onChange={(e) => setForm({ ...form, anthropicKey: e.target.value })} placeholder={s.anthropicKeySet ? "•••••••• saved" : "sk-ant-…"} />
      </Field>
      <Field
        label="Change dashboard password"
        hint={s.passwordFromEnv ? "The password is set by the ADMIN_PASSWORD secret in Cloudflare, so it can’t be changed here." : "At least 8 characters. Other signed-in devices will be signed out."}
      >
        <input type="password" autoComplete="new-password" disabled={s.passwordFromEnv} value={form.newPassword} onChange={(e) => setForm({ ...form, newPassword: e.target.value })} />
      </Field>
      <div className="adm-row-end">
        <button className="adm-btn primary">Save settings</button>
      </div>

      <div className="adm-divider" />
      <div className="adm-sec-head">
        <div>
          <h3>Automation</h3>
          <p>Runs every 5 minutes: publishes due posts, sends due outreach emails and checks inboxes for replies.</p>
        </div>
        <button
          type="button"
          className="adm-btn"
          disabled={running}
          onClick={async () => {
            setRunning(true);
            try {
              await api("run", { body: {} });
              setActivity(await api("activity"));
              ctx.refreshBadge();
              ctx.toast("Automation ran");
            } catch (err) {
              ctx.toast((err as Error).message, "error");
            } finally {
              setRunning(false);
            }
          }}
        >
          <Icon name="refresh" size={15} /> {running ? "Running…" : "Run now"}
        </button>
      </div>
      <div className="adm-log">
        {activity.length ? (
          activity.slice(0, 40).map((a) => (
            <div key={a.id} className={`adm-log-row ${a.level}`}>
              <span>{timeAgo(a.created_at)}</span>
              {a.text}
            </div>
          ))
        ) : (
          <p className="adm-hint">Nothing has happened yet.</p>
        )}
      </div>
    </form>
  );
}
