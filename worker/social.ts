// Publishing to (and reading replies from) the connected social accounts.
import { b64, hmac } from "./util";

export type Platform = "twitter" | "linkedin" | "facebook" | "medium";

export interface SocialConfig {
  // X / Twitter (OAuth 1.0a user context, from the developer portal "Keys and tokens")
  apiKey?: string;
  apiSecret?: string;
  accessToken?: string;
  accessSecret?: string;
  // LinkedIn / Facebook / Medium
  token?: string;
  pageId?: string; // Facebook Page id
  authorUrn?: string; // LinkedIn urn:li:person:xxx or urn:li:organization:xxx
  userId?: string; // Medium user id / X user id (filled automatically)
  handle?: string;
  sinceId?: string; // X mentions bookmark
}

export interface PublishInput {
  title?: string;
  content: string;
  imageUrl?: string;
}

export interface PublishResult {
  id: string;
  url?: string;
}

export interface SocialReply {
  extId: string;
  from: string;
  fromName: string;
  text: string;
  url?: string;
  date: number;
}

// ---------- X / Twitter ----------

function pct(s: string): string {
  return encodeURIComponent(s).replace(/[!'()*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
}

async function oauth1(c: SocialConfig, method: string, url: string, query: Record<string, string> = {}): Promise<string> {
  const o: Record<string, string> = {
    oauth_consumer_key: c.apiKey!,
    oauth_nonce: crypto.randomUUID().replace(/-/g, ""),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_token: c.accessToken!,
    oauth_version: "1.0",
  };
  const all = { ...query, ...o };
  const paramStr = Object.keys(all)
    .sort()
    .map((k) => `${pct(k)}=${pct(all[k])}`)
    .join("&");
  const base = [method.toUpperCase(), pct(url), pct(paramStr)].join("&");
  const sig = b64(new Uint8Array(await hmac(`${pct(c.apiSecret!)}&${pct(c.accessSecret!)}`, base, "SHA-1")));
  o.oauth_signature = sig;
  return (
    "OAuth " +
    Object.keys(o)
      .sort()
      .map((k) => `${pct(k)}="${pct(o[k])}"`)
      .join(", ")
  );
}

async function xFetch(c: SocialConfig, method: string, url: string, query: Record<string, string> = {}, body?: unknown) {
  if (!c.apiKey || !c.apiSecret || !c.accessToken || !c.accessSecret) throw new Error("X keys are incomplete");
  const qs = new URLSearchParams(query).toString();
  const res = await fetch(url + (qs ? `?${qs}` : ""), {
    method,
    headers: {
      authorization: await oauth1(c, method, url, query),
      ...(body ? { "content-type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`X ${res.status}: ${text.slice(0, 300)}`);
  return JSON.parse(text);
}

// ---------- shared ----------

async function api(url: string, init: RequestInit, label: string) {
  const res = await fetch(url, init);
  const text = await res.text();
  if (!res.ok) throw new Error(`${label} ${res.status}: ${text.slice(0, 300)}`);
  return text ? JSON.parse(text) : {};
}

const FB = "https://graph.facebook.com/v23.0";

/** Checks the credentials and fills in ids the publisher needs (user id, author urn, handle). */
export async function verifySocial(p: Platform, c: SocialConfig): Promise<SocialConfig> {
  if (p === "twitter") {
    const me = await xFetch(c, "GET", "https://api.x.com/2/users/me");
    return { ...c, userId: me.data.id, handle: "@" + me.data.username };
  }
  if (p === "linkedin") {
    if (c.authorUrn?.startsWith("urn:li:organization:")) return c;
    const me = await api(
      "https://api.linkedin.com/v2/userinfo",
      { headers: { authorization: `Bearer ${c.token}` } },
      "LinkedIn",
    );
    return { ...c, authorUrn: `urn:li:person:${me.sub}`, handle: me.name };
  }
  if (p === "facebook") {
    if (!c.pageId) throw new Error("Facebook Page ID is required");
    const page = await api(`${FB}/${c.pageId}?fields=name&access_token=${encodeURIComponent(c.token!)}`, {}, "Facebook");
    return { ...c, handle: page.name };
  }
  const me = await api(
    "https://api.medium.com/v1/me",
    { headers: { authorization: `Bearer ${c.token}`, accept: "application/json" } },
    "Medium",
  );
  return { ...c, userId: me.data.id, handle: "@" + me.data.username };
}

export async function publish(p: Platform, c: SocialConfig, post: PublishInput): Promise<PublishResult> {
  if (p === "twitter") {
    const text = post.title && !post.content.startsWith(post.title) ? `${post.title}\n\n${post.content}` : post.content;
    const r = await xFetch(c, "POST", "https://api.x.com/2/tweets", {}, { text: text.slice(0, 4000) });
    return { id: r.data.id, url: `https://x.com/i/status/${r.data.id}` };
  }
  if (p === "linkedin") {
    if (!c.authorUrn) c = await verifySocial(p, c);
    const text = post.title ? `${post.title}\n\n${post.content}` : post.content;
    const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
      method: "POST",
      headers: {
        authorization: `Bearer ${c.token}`,
        "content-type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
      },
      body: JSON.stringify({
        author: c.authorUrn,
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: { text: text.slice(0, 3000) },
            shareMediaCategory: "NONE",
          },
        },
        visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
      }),
    });
    if (!res.ok) throw new Error(`LinkedIn ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const id = res.headers.get("x-restli-id") || (await res.json<{ id?: string }>().catch(() => ({ id: "" }))).id || "";
    return { id, url: id ? `https://www.linkedin.com/feed/update/${id}` : undefined };
  }
  if (p === "facebook") {
    const body = new URLSearchParams({
      message: post.title ? `${post.title}\n\n${post.content}` : post.content,
      access_token: c.token!,
    });
    if (post.imageUrl) {
      body.set("url", post.imageUrl);
      body.set("caption", body.get("message")!);
      body.delete("message");
      const r = await api(`${FB}/${c.pageId}/photos`, { method: "POST", body }, "Facebook");
      return { id: r.post_id || r.id, url: `https://facebook.com/${r.post_id || r.id}` };
    }
    const r = await api(`${FB}/${c.pageId}/feed`, { method: "POST", body }, "Facebook");
    return { id: r.id, url: `https://facebook.com/${r.id}` };
  }
  // Medium
  if (!c.userId) c = await verifySocial(p, c);
  const r = await api(
    `https://api.medium.com/v1/users/${c.userId}/posts`,
    {
      method: "POST",
      headers: { authorization: `Bearer ${c.token}`, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        title: post.title || post.content.split("\n")[0].slice(0, 100),
        contentFormat: "markdown",
        content: post.title ? `# ${post.title}\n\n${post.content}` : post.content,
        publishStatus: "public",
      }),
    },
    "Medium",
  );
  return { id: r.data.id, url: r.data.url };
}

/** New mentions on X. Needs an X API plan that allows reading. */
export async function xMentions(c: SocialConfig): Promise<{ replies: SocialReply[]; sinceId?: string }> {
  if (!c.userId) c = await verifySocial("twitter", c);
  const q: Record<string, string> = {
    max_results: "20",
    expansions: "author_id",
    "tweet.fields": "created_at",
    "user.fields": "username,name",
  };
  if (c.sinceId) q.since_id = c.sinceId;
  const r = await xFetch(c, "GET", `https://api.x.com/2/users/${c.userId}/mentions`, q);
  const users = new Map<string, { username: string; name: string }>(
    (r.includes?.users ?? []).map((u: { id: string; username: string; name: string }) => [u.id, u]),
  );
  const replies: SocialReply[] = (r.data ?? []).map(
    (t: { id: string; text: string; author_id: string; created_at: string }) => {
      const u = users.get(t.author_id);
      return {
        extId: `x:${t.id}`,
        from: u ? "@" + u.username : t.author_id,
        fromName: u?.name ?? "",
        text: t.text,
        url: `https://x.com/i/status/${t.id}`,
        date: Date.parse(t.created_at) || Date.now(),
      };
    },
  );
  // On the first run only remember the newest id, so old mentions are not imported.
  return { replies: c.sinceId ? replies : [], sinceId: r.meta?.newest_id ?? c.sinceId };
}

/** Comments on recent Page posts. */
export async function fbComments(c: SocialConfig, postIds: string[]): Promise<SocialReply[]> {
  const out: SocialReply[] = [];
  for (const id of postIds.slice(0, 10)) {
    const r = await api(
      `${FB}/${id}/comments?fields=id,message,from,created_time,permalink_url&order=reverse_chronological&limit=25&access_token=${encodeURIComponent(c.token!)}`,
      {},
      "Facebook",
    );
    for (const cm of r.data ?? []) {
      if (cm.from?.id === c.pageId) continue;
      out.push({
        extId: `fb:${cm.id}`,
        from: cm.from?.name ?? "Facebook user",
        fromName: cm.from?.name ?? "",
        text: cm.message ?? "",
        url: cm.permalink_url,
        date: Date.parse(cm.created_time) || Date.now(),
      });
    }
  }
  return out;
}
