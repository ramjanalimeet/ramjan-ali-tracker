import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { DashboardBlog } from "./dashboard-blogs";
interface BlogStore {
  idFromName(name: string): unknown;
  get(id: unknown): { fetch(url: string): Promise<Response> };
}

type Summary = Pick<DashboardBlog, "slug" | "title" | "excerpt" | "publish_at">;
type Article = Summary & Pick<DashboardBlog, "body">;

async function read<T>(path: string): Promise<T | null> {
  const { env } = await getCloudflareContext({ async: true });
  const namespace = (env as { ADMIN_STORE?: BlogStore }).ADMIN_STORE;
  if (!namespace) return null;
  const response = await namespace.get(namespace.idFromName("main")).fetch(`https://dashboard.internal/api/blog-entries${path}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Published blogs could not be loaded");
  return (await response.json()) as T;
}

export async function publishedBlogs() {
  return (await read<Summary[]>("")) ?? [];
}

export function publishedBlog(slug: string) {
  return read<Article>(`/${encodeURIComponent(slug)}`);
}
