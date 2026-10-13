export type Service = { href: string; name: string; blurb: string };
export type ServiceGroup = { title: string; items: Service[] };

/** Every service on the site, grouped the way the Services menu shows them. */
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Core SEO services",
    items: [
      { href: "/local-seo", name: "Local SEO", blurb: "Rank in Google Maps and local results" },
      { href: "/ai-search", name: "GEO & AI Visibility", blurb: "Get cited by ChatGPT, Gemini and AI Overviews" },
    ],
  },
  {
    title: "SEO by specialization",
    items: [
      { href: "/seo-services/technical-seo", name: "Technical SEO", blurb: "Speed, crawling, indexing and schema" },
      { href: "/seo-services/on-page-seo", name: "On-Page SEO", blurb: "Titles, copy and page structure that rank" },
      { href: "/seo-services/seo-audits", name: "SEO Audit", blurb: "A full review with a prioritized fix list" },
      { href: "/seo-services/link-building", name: "Link Building", blurb: "Relevant links that build real authority" },
    ],
  },
];

export const ALL_SERVICES: Service[] = SERVICE_GROUPS.flatMap((g) => g.items);
