import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CITIES } from "@/lib/cities";
import { ALL_INDUSTRIES } from "@/lib/industries";
import { SITE_URL } from "@/lib/site";
import { POSTS } from "@/lib/posts";
import { ALL_SERVICES } from "@/lib/services";

const PAGES = [
  "",
  "/seo-services",
  "/industries",
  "/locations",
  "/pricing",
  "/case-studies",
  "/blog",
  "/about",
  "/book-a-call",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-13");
  return [
    ...PAGES.map((p) => `${SITE_URL}${p || "/"}`),
    ...ALL_SERVICES.map((s) => `${SITE_URL}${s.href}`),
    ...ALL_INDUSTRIES.map((t) => `${SITE_URL}/local-seo/${t.slug}`),
    ...CITIES.map((c) => `${SITE_URL}/locations/${c.slug}`),
    ...CASE_STUDIES.map((c) => `${SITE_URL}/case-studies/${c.slug}`),
    ...POSTS.map((p) => `${SITE_URL}/blog/${p.slug}`),
  ].map((url) => ({ url, lastModified }));
}
