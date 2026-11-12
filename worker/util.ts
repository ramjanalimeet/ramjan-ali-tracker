// Small helpers shared by the admin backend.

export const enc = new TextEncoder();
export const dec = new TextDecoder();

export function json(data: unknown, status = 200, headers: HeadersInit = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers },
  });
}

export function err(message: string, status = 400): Response {
  return json({ error: message }, status);
}

export function uid(prefix = ""): string {
  const b = crypto.getRandomValues(new Uint8Array(10));
  return prefix + Array.from(b, (x) => x.toString(36).padStart(2, "0")).join("").slice(0, 16);
}

export function now(): number {
  return Date.now();
}

export function b64(bytes: Uint8Array | string): string {
  const u = typeof bytes === "string" ? enc.encode(bytes) : bytes;
  let s = "";
  for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode(...u.subarray(i, i + 0x8000));
  return btoa(s);
}

export function fromB64(s: string): Uint8Array {
  const bin = atob(s.replace(/\s+/g, ""));
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function hex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function hmac(secret: string, data: string, algo: "SHA-256" | "SHA-1" = "SHA-256"): Promise<ArrayBuffer> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: algo }, false, ["sign"]);
  return crypto.subtle.sign("HMAC", key, enc.encode(data));
}

/** Constant-time string comparison. */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export async function pbkdf2(password: string, salt: Uint8Array, iterations: number): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations }, key, 256);
  return b64(new Uint8Array(bits));
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  return `pbkdf2$100000$${b64(salt)}$${await pbkdf2(password, salt, 100000)}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [kind, iter, salt, hash] = stored.split("$");
  if (kind !== "pbkdf2") return false;
  return safeEqual(await pbkdf2(password, fromB64(salt), Number(iter)), hash);
}

export function parseCookies(header: string | null): Record<string, string> {
  const out: Record<string, string> = {};
  for (const part of (header ?? "").split(";")) {
    const i = part.indexOf("=");
    if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

export const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;

/** Extracts the bare address from `"Name" <a@b.com>` style values. */
export function addrOf(v: string): string {
  const m = v.match(/<([^>]+)>/);
  return (m ? m[1] : v).trim().toLowerCase();
}

export function nameOf(v: string): string {
  const m = v.match(/^\s*"?([^"<]*?)"?\s*</);
  return m ? m[1].trim() : "";
}

/** Fills {{first_name}}, {{name}}, {{company}}, {{website}} and any custom field. */
export function fillTemplate(t: string, vars: Record<string, string | undefined | null>): string {
  return t.replace(/\{\{\s*([a-z_]+)\s*(?:\|\s*([^}]*))?\}\}/gi, (_, k: string, fallback?: string) => {
    const v = vars[k.toLowerCase()];
    return v && String(v).trim() ? String(v) : (fallback ?? "").trim();
  });
}

export function stripHtml(html: string): string {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|h\d|tr)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n\n")
    .trim();
}

export function startOfDay(t = Date.now()): number {
  const d = new Date(t);
  d.setUTCHours(0, 0, 0, 0);
  return d.getTime();
}

export function errMsg(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}
