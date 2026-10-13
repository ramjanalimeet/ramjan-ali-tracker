import type { MetadataRoute } from "next";
import { SITE_URL, TRADES } from "@/lib/site";
import { POSTS } from "@/lib/posts";

const PAGES = ["", "/local-seo", "/ai-search", "/pricing", "/case-studies", "/blog", "/free-seo-audit", "/book-a-call"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-13");
  return [
    ...PAGES.map((p) => `${SITE_URL}${p || "/"}`),
    ...TRADES.map((t) => `${SITE_URL}/local-seo/${t.slug}`),
    ...POSTS.map((p) => `${SITE_URL}/blog/${p.slug}`),
  ].map((url) => ({ url, lastModified }));
}
