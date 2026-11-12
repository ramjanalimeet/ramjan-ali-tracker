// Sending (SMTP or Resend) and reading replies (IMAP) for the connected
// email accounts.
import { Conn } from "./net";
import { addrOf, b64, dec, fromB64, nameOf, stripHtml, uid } from "./util";

export interface EmailConfig {
  email: string;
  fromName?: string;
  provider: "smtp" | "resend";
  smtpHost?: string;
  smtpPort?: number;
  imapHost?: string;
  imapPort?: number;
  username?: string;
  password?: string;
  resendKey?: string;
  dailyLimit?: number;
  signature?: string;
  // IMAP bookkeeping
  imapUid?: number;
  imapValidity?: number;
}

export interface OutMail {
  to: string;
  toName?: string;
  subject: string;
  body: string;
  inReplyTo?: string;
  references?: string;
}

/** Fills SMTP/IMAP hosts for common providers so only email + app password are needed. */
export function withDefaults(c: EmailConfig): EmailConfig {
  const domain = c.email.split("@")[1]?.toLowerCase() ?? "";
  const known: Record<string, [string, string]> = {
    "gmail.com": ["smtp.gmail.com", "imap.gmail.com"],
    "googlemail.com": ["smtp.gmail.com", "imap.gmail.com"],
    "outlook.com": ["smtp-mail.outlook.com", "outlook.office365.com"],
    "hotmail.com": ["smtp-mail.outlook.com", "outlook.office365.com"],
    "live.com": ["smtp-mail.outlook.com", "outlook.office365.com"],
    "yahoo.com": ["smtp.mail.yahoo.com", "imap.mail.yahoo.com"],
    "zoho.com": ["smtp.zoho.com", "imap.zoho.com"],
    "icloud.com": ["smtp.mail.me.com", "imap.mail.me.com"],
  };
  const k = known[domain];
  const out = { ...c };
  if (!out.smtpHost && k) out.smtpHost = k[0];
  if (!out.imapHost && k) out.imapHost = k[1];
  if (!out.smtpPort) out.smtpPort = out.smtpHost?.includes("outlook") ? 587 : 465;
  if (!out.imapPort) out.imapPort = 993;
  if (!out.username) out.username = c.email;
  return out;
}

function encodeHeader(v: string): string {
  return /^[\x20-\x7e]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`;
}

function wrap76(s: string): string {
  return s.replace(/.{1,76}/g, "$&\r\n");
}

function buildMime(c: EmailConfig, m: OutMail, messageId: string): string {
  const from = c.fromName ? `${encodeHeader(c.fromName)} <${c.email}>` : c.email;
  const to = m.toName ? `${encodeHeader(m.toName)} <${m.to}>` : m.to;
  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${encodeHeader(m.subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: ${messageId}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
  ];
  if (m.inReplyTo) headers.push(`In-Reply-To: ${m.inReplyTo}`, `References: ${m.references || m.inReplyTo}`);
  return headers.join("\r\n") + "\r\n\r\n" + wrap76(b64(m.body.replace(/\r?\n/g, "\r\n")));
}

async function smtpExpect(conn: Conn, code: number): Promise<string> {
  let line = "";
  let all = "";
  do {
    line = await conn.readLine();
    all += line + "\n";
  } while (/^\d{3}-/.test(line));
  if (!line.startsWith(String(code))) throw new Error(`SMTP: ${all.trim()}`);
  return all;
}

async function sendSmtp(c: EmailConfig, raw: string, to: string): Promise<void> {
  const host = c.smtpHost!;
  const port = c.smtpPort ?? 465;
  const implicit = port === 465;
  const conn = new Conn(host, port, implicit ? "on" : "starttls");
  try {
    await smtpExpect(conn, 220);
    await conn.write("EHLO ramjan-ali-tracker\r\n");
    await smtpExpect(conn, 250);
    if (!implicit) {
      await conn.write("STARTTLS\r\n");
      await smtpExpect(conn, 220);
      await conn.startTls();
      await conn.write("EHLO ramjan-ali-tracker\r\n");
      await smtpExpect(conn, 250);
    }
    await conn.write(`AUTH PLAIN ${b64(`\0${c.username}\0${c.password}`)}\r\n`);
    await smtpExpect(conn, 235);
    await conn.write(`MAIL FROM:<${c.email}>\r\n`);
    await smtpExpect(conn, 250);
    await conn.write(`RCPT TO:<${to}>\r\n`);
    await smtpExpect(conn, 250);
    await conn.write("DATA\r\n");
    await smtpExpect(conn, 354);
    await conn.write(raw.replace(/\r\n\./g, "\r\n..") + "\r\n.\r\n");
    await smtpExpect(conn, 250);
    await conn.write("QUIT\r\n");
  } finally {
    await conn.close();
  }
}

/** Sends one email and returns its Message-ID. */
export async function sendMail(cfg: EmailConfig, m: OutMail): Promise<string> {
  const c = withDefaults(cfg);
  const domain = c.email.split("@")[1] || "mail.local";
  const messageId = `<${uid()}.${Date.now()}@${domain}>`;
  const body = c.signature ? `${m.body}\n\n${c.signature}` : m.body;
  const mail = { ...m, body };
  if (c.provider === "resend") {
    if (!c.resendKey) throw new Error("Resend API key missing");
    const headers: Record<string, string> = { "Message-ID": messageId };
    if (m.inReplyTo) {
      headers["In-Reply-To"] = m.inReplyTo;
      headers["References"] = m.references || m.inReplyTo;
    }
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${c.resendKey}`, "content-type": "application/json" },
      body: JSON.stringify({
        from: c.fromName ? `${c.fromName} <${c.email}>` : c.email,
        to: [m.to],
        subject: m.subject,
        text: body,
        headers,
      }),
    });
    if (!res.ok) throw new Error(`Resend: ${res.status} ${await res.text()}`);
    return messageId;
  }
  if (!c.smtpHost || !c.password) throw new Error("SMTP host and password are required");
  await sendSmtp(c, buildMime(c, mail, messageId), m.to);
  return messageId;
}

// ---------- IMAP (read replies) ----------

export interface InMail {
  uid: number;
  from: string;
  fromName: string;
  subject: string;
  date: number;
  messageId: string;
  inReplyTo: string;
  references: string;
  body: string;
}

class Imap {
  private n = 0;
  constructor(private conn: Conn) {}

  /** Sends a command and collects untagged lines (with literals inlined as bytes). */
  async cmd(command: string): Promise<{ lines: string[]; literals: Uint8Array[][] }> {
    const tag = `A${++this.n}`;
    await this.conn.write(`${tag} ${command}\r\n`);
    const lines: string[] = [];
    const literals: Uint8Array[][] = [];
    for (;;) {
      let line = await this.conn.readLine();
      const lits: Uint8Array[] = [];
      // Literal: line ends with {n}; the next n bytes are raw data.
      let m: RegExpMatchArray | null;
      while ((m = line.match(/\{(\d+)\}$/))) {
        lits.push(await this.conn.readBytes(Number(m[1])));
        line = line + "\u0000" + (await this.conn.readLine());
      }
      if (line.startsWith(tag + " ")) {
        if (!/^\S+ OK/i.test(line)) throw new Error(`IMAP: ${line.replace(/LOGIN .*/i, "LOGIN ***")}`);
        return { lines, literals };
      }
      lines.push(line);
      literals.push(lits);
    }
  }
}

function quote(s: string): string {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function decodeWords(s: string): string {
  return s.replace(/=\?([^?]+)\?([bqBQ])\?([^?]*)\?=/g, (_, cs: string, kind: string, text: string) => {
    try {
      const bytes = kind.toUpperCase() === "B" ? fromB64(text) : qpBytes(text.replace(/_/g, " "));
      return new TextDecoder(cs.toLowerCase()).decode(bytes);
    } catch {
      return text;
    }
  });
}

function qpBytes(s: string): Uint8Array {
  const clean = s.replace(/=\r?\n/g, "");
  const out: number[] = [];
  for (let i = 0; i < clean.length; i++) {
    if (clean[i] === "=" && /^[0-9A-F]{2}$/i.test(clean.slice(i + 1, i + 3))) {
      out.push(parseInt(clean.slice(i + 1, i + 3), 16));
      i += 2;
    } else out.push(clean.charCodeAt(i) & 0xff);
  }
  return new Uint8Array(out);
}

function parseHeaders(raw: string): Record<string, string> {
  const out: Record<string, string> = {};
  const unfolded = raw.replace(/\r?\n[ \t]+/g, " ");
  for (const line of unfolded.split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i > 0) out[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim();
  }
  return out;
}

function decodePart(headers: Record<string, string>, body: string): string {
  const cte = (headers["content-transfer-encoding"] || "").toLowerCase();
  const cs = (headers["content-type"] || "").match(/charset="?([^";\s]+)/i)?.[1] || "utf-8";
  let bytes: Uint8Array;
  if (cte === "base64") {
    try {
      bytes = fromB64(body);
    } catch {
      bytes = new TextEncoder().encode(body);
    }
  } else if (cte === "quoted-printable") bytes = qpBytes(body);
  else bytes = Uint8Array.from(body, (ch) => ch.charCodeAt(0) & 0xff);
  let text: string;
  try {
    text = new TextDecoder(cs.toLowerCase()).decode(bytes);
  } catch {
    text = dec.decode(bytes);
  }
  return /html/i.test(headers["content-type"] || "") ? stripHtml(text) : text;
}

/** Best-effort: picks the text/plain part (or html) out of a MIME body. */
function extractText(headers: Record<string, string>, body: string): string {
  const ct = headers["content-type"] || "text/plain";
  const boundary = ct.match(/boundary="?([^";]+)"?/i)?.[1];
  if (!/multipart/i.test(ct) || !boundary) return decodePart(headers, body);
  const parts = body.split("--" + boundary).slice(1, -1);
  let html = "";
  for (const p of parts) {
    const sep = p.search(/\r?\n\r?\n/);
    if (sep < 0) continue;
    const h = parseHeaders(p.slice(0, sep));
    const b = p.slice(sep).replace(/^\r?\n\r?\n/, "");
    const pct = h["content-type"] || "text/plain";
    if (/multipart/i.test(pct)) {
      const inner = extractText(h, b);
      if (inner) return inner;
    } else if (/text\/plain/i.test(pct)) return decodePart(h, b);
    else if (/text\/html/i.test(pct) && !html) html = decodePart(h, b);
  }
  return html;
}

/** Removes the quoted earlier conversation from a reply. */
export function stripQuoted(text: string): string {
  const lines = text.split(/\r?\n/);
  const out: string[] = [];
  for (const l of lines) {
    if (/^On .+wrote:\s*$/i.test(l) || /^-{2,}\s*Original Message/i.test(l) || /^From: .+/i.test(l)) break;
    if (l.startsWith(">")) continue;
    out.push(l);
  }
  return out.join("\n").trim() || text.trim();
}

const latin1 = (u: Uint8Array) => {
  let s = "";
  for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode(...u.subarray(i, i + 0x8000));
  return s;
};

/**
 * Fetches messages newer than the stored UID. On the first run it only records
 * where the mailbox is, so old mail is not imported.
 */
export async function fetchNewMail(
  cfg: EmailConfig,
  limit = 25,
): Promise<{ mails: InMail[]; uid: number; validity: number }> {
  const c = withDefaults(cfg);
  if (!c.imapHost || !c.password) throw new Error("IMAP host and password are required");
  const conn = new Conn(c.imapHost, c.imapPort ?? 993, "on");
  const imap = new Imap(conn);
  try {
    const greet = await conn.readLine();
    if (!/^\* (OK|PREAUTH)/i.test(greet)) throw new Error(`IMAP greeting: ${greet}`);
    await imap.cmd(`LOGIN ${quote(c.username!)} ${quote(c.password)}`);
    const sel = await imap.cmd("EXAMINE INBOX");
    let uidNext = 0;
    let validity = 0;
    for (const l of sel.lines) {
      const a = l.match(/UIDNEXT (\d+)/i);
      if (a) uidNext = Number(a[1]);
      const b = l.match(/UIDVALIDITY (\d+)/i);
      if (b) validity = Number(b[1]);
    }
    let last = c.imapUid ?? 0;
    if (!last || c.imapValidity !== validity) {
      // First sync (or mailbox was reset): start from now.
      await imap.cmd("LOGOUT").catch(() => {});
      return { mails: [], uid: Math.max(uidNext - 1, 0), validity };
    }
    const search = await imap.cmd(`UID SEARCH UID ${last + 1}:*`);
    const uids = search.lines
      .filter((l) => /^\* SEARCH/i.test(l))
      .flatMap((l) => l.replace(/^\* SEARCH/i, "").trim().split(/\s+/))
      .map(Number)
      .filter((n) => n > last)
      .sort((a, b) => a - b)
      .slice(0, limit);
    const mails: InMail[] = [];
    for (const u of uids) {
      const r = await imap.cmd(`UID FETCH ${u} (BODY.PEEK[HEADER] BODY.PEEK[TEXT]<0.20000>)`);
      const idx = r.lines.findIndex((l) => /FETCH/i.test(l));
      const lits = idx >= 0 ? r.literals[idx] : [];
      if (lits.length < 1) continue;
      const headerRaw = latin1(lits[0]);
      const bodyRaw = lits[1] ? latin1(lits[1]) : "";
      const h = parseHeaders(headerRaw);
      const from = decodeWords(h["from"] || "");
      mails.push({
        uid: u,
        from: addrOf(from),
        fromName: nameOf(from),
        subject: decodeWords(h["subject"] || ""),
        date: Date.parse(h["date"] || "") || Date.now(),
        messageId: (h["message-id"] || "").trim(),
        inReplyTo: (h["in-reply-to"] || "").trim(),
        references: (h["references"] || "").trim(),
        body: stripQuoted(extractText(h, bodyRaw)).slice(0, 8000),
      });
      last = u;
    }
    await imap.cmd("LOGOUT").catch(() => {});
    return { mails, uid: Math.max(last, uids.length ? uids[uids.length - 1] : last), validity };
  } finally {
    await conn.close();
  }
}

/** Logs in to SMTP (and IMAP) to check the settings without sending anything. */
export async function testEmail(cfg: EmailConfig): Promise<string> {
  const c = withDefaults(cfg);
  const notes: string[] = [];
  if (c.provider === "resend") {
    const r = await fetch("https://api.resend.com/domains", { headers: { authorization: `Bearer ${c.resendKey}` } });
    if (!r.ok) throw new Error(`Resend: ${r.status}`);
    notes.push("Resend key works");
  } else {
    const port = c.smtpPort ?? 465;
    const conn = new Conn(c.smtpHost!, port, port === 465 ? "on" : "starttls");
    try {
      await smtpExpect(conn, 220);
      await conn.write("EHLO ramjan-ali-tracker\r\n");
      await smtpExpect(conn, 250);
      if (port !== 465) {
        await conn.write("STARTTLS\r\n");
        await smtpExpect(conn, 220);
        await conn.startTls();
        await conn.write("EHLO ramjan-ali-tracker\r\n");
        await smtpExpect(conn, 250);
      }
      await conn.write(`AUTH PLAIN ${b64(`\0${c.username}\0${c.password}`)}\r\n`);
      await smtpExpect(conn, 235);
      await conn.write("QUIT\r\n");
      notes.push("SMTP login OK");
    } finally {
      await conn.close();
    }
  }
  if (c.imapHost && c.password) {
    await fetchNewMail({ ...c, imapUid: 0 });
    notes.push("IMAP login OK");
  }
  return notes.join(" · ");
}
