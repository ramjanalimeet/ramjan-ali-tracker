import type { OAuthPlatform, PublishInput, PublishResult } from "./social";

export interface ZernioConfig {
  key: string;
  profileId: string;
}

interface ZernioAccount {
  _id: string;
  platform: string;
  displayName?: string;
  username?: string;
  isActive?: boolean;
}

async function request<T>(config: ZernioConfig, path: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);
  headers.set("Authorization", `Bearer ${config.key}`);
  const response = await fetch(`https://zernio.com/api/v1${path}`, { ...init, headers, redirect: "error" });
  if (response.status === 402) throw new Error("Zernio requires billing setup for this operation.");
  if (response.status === 401 || response.status === 403) throw new Error("Check your Zernio profile and API key permissions.");
  if (!response.ok) throw new Error(`Zernio request failed (HTTP ${response.status}).`);
  return response.json<T>();
}

export async function zernioConnect(config: ZernioConfig, platform: OAuthPlatform, redirect: string): Promise<string> {
  const params = new URLSearchParams({ profileId: config.profileId, redirect_url: redirect });
  const { authUrl } = await request<{ authUrl: string }>(config, `/connect/${platform}?${params}`);
  const url = new URL(authUrl);
  if (url.protocol !== "https:" || url.username || url.password) throw new Error("Invalid sign-in URL from Zernio.");
  return url.href;
}

export async function zernioAccount(config: ZernioConfig, platform: OAuthPlatform, id: string): Promise<ZernioAccount> {
  const params = new URLSearchParams({ profileId: config.profileId, limit: "100" });
  while (true) {
    const result = await request<{ accounts: ZernioAccount[]; pagination?: { nextCursor?: string } }>(config, `/accounts?${params}`);
    const match = result.accounts.find((a) => a._id === id && a.platform === platform && a.isActive !== false);
    if (match) return match;
    const cursor = result.pagination?.nextCursor;
    if (!cursor || cursor === params.get("cursor")) throw new Error("The connected account is unavailable in the configured Zernio profile.");
    params.set("cursor", cursor);
  }
}

export async function zernioPublish(
  config: ZernioConfig, platform: OAuthPlatform, accountId: string, post: PublishInput, idempotencyKey: string,
): Promise<PublishResult> {
  const { post: result } = await request<{ post?: { platforms?: {
    status?: string; platformPostId?: string; platformPostUrl?: string;
  }[] } }>(config, "/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
    body: JSON.stringify({
      content: post.title && !post.content.startsWith(post.title) ? `${post.title}\n\n${post.content}` : post.content,
      platforms: [{ platform, accountId }],
      publishNow: true,
      ...(post.imageUrl ? { mediaItems: [{ type: "image", url: post.imageUrl }] } : {}),
    }),
  });
  const target = result?.platforms?.[0];
  if (target?.status !== "published" || !target.platformPostId) throw new Error("Zernio did not confirm publication. Check its activity before retrying.");
  return { id: target.platformPostId, url: target.platformPostUrl };
}
