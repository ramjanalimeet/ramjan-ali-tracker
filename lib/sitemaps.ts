import { CASE_STUDIES } from "./case-studies";
import { CITIES } from "./cities";
import { ALL_INDUSTRIES } from "./industries";
import { POSTS } from "./posts";
import { ALL_SERVICES } from "./services";
import { SITE_URL } from "./site";

/** Bump when site-wide page content changes. */
const SITE_UPDATED = "2026-10-13";

type Entry = { path: string; lastmod: string; images?: string[] };
export type SitemapName = "page" | "service" | "industry" | "location" | "post" | "case-study";

const PORTRAIT = `${SITE_URL}/assets/akash.webp`;

const SITEMAPS: Record<SitemapName, () => Entry[]> = {
  page: () =>
    [
      { path: "/", images: [PORTRAIT] },
      { path: "/about", images: [PORTRAIT] },
      { path: "/pricing" },
      { path: "/industries" },
      { path: "/locations" },
      { path: "/case-studies" },
      { path: "/blog" },
      { path: "/book-a-call" },
      { path: "/privacy-policy" },
      { path: "/terms" },
      { path: "/cookie-policy" },
      { path: "/refund-policy" },
      { path: "/disclaimer" },
      { path: "/editorial-policy" },
      { path: "/accessibility" },
    ].map((e) => ({ ...e, lastmod: SITE_UPDATED })),
  service: () => [
    { path: "/seo-services", lastmod: SITE_UPDATED },
    ...ALL_SERVICES.map((s) => ({ path: s.href, lastmod: SITE_UPDATED })),
  ],
  industry: () => ALL_INDUSTRIES.map((i) => ({ path: `/local-seo/${i.slug}`, lastmod: SITE_UPDATED })),
  location: () => CITIES.map((c) => ({ path: `/locations/${c.slug}`, lastmod: SITE_UPDATED })),
  post: () => POSTS.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date })),
  "case-study": () => CASE_STUDIES.map((c) => ({ path: `/case-studies/${c.slug}`, lastmod: c.published })),
};

const ORDER: SitemapName[] = ["page", "service", "industry", "location", "case-study", "post"];

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const iso = (d: string) => `${d}T09:00:00+00:00`;
const HEAD = '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';

function xml(body: string) {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}

/** Sub-sitemaps that have at least one URL. */
const active = () => ORDER.filter((n) => SITEMAPS[n]().length > 0);
const newest = (entries: Entry[]) =>
  entries
    .map((e) => e.lastmod)
    .sort()
    .at(-1) ?? SITE_UPDATED;

export function sitemapIndex() {
  const items = active()
    .map(
      (n) =>
        `  <sitemap>\n    <loc>${SITE_URL}/${n}-sitemap.xml</loc>\n    <lastmod>${iso(newest(SITEMAPS[n]()))}</lastmod>\n  </sitemap>`,
    )
    .join("\n");
  return xml(`${HEAD}<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`);
}

export function sitemap(name: SitemapName) {
  const urls = SITEMAPS[name]()
    .map((e) => {
      const images = (e.images ?? []).map(
        (src) => `\n    <image:image><image:loc>${esc(src)}</image:loc></image:image>`,
      );
      return `  <url>\n    <loc>${esc(SITE_URL + (e.path === "/" ? "/" : e.path))}</loc>\n    <lastmod>${iso(e.lastmod)}</lastmod>${images.join("")}\n  </url>`;
    })
    .join("\n");
  return xml(
    `${HEAD}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`,
  );
}
