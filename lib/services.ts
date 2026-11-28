export type Service = { href: string; name: string; blurb: string };
export type ServiceGroup = {
  title: string;
  /** Heading and intro for this group's section on /seo-services. */
  heading: string;
  intro: string;
  items: Service[];
};

/** Every service on the site, grouped the way the Services menu shows them. */
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Core SEO services",
    heading: "Get found and get recommended.",
    intro:
      "The two services every plan is built on: ranking in Google Maps and local results, and being named when people ask AI tools who to call.",
    items: [
      { href: "/seo-services/local-seo", name: "Local SEO", blurb: "Rank in Google Maps and local results" },
      { href: "/seo-services/ai-visibility", name: "GEO & AI Visibility", blurb: "Get cited by ChatGPT, Gemini and AI Overviews" },
    ],
  },
  {
    title: "SEO by specialization",
    heading: "The SEO underneath it all.",
    intro: "Focused work on the website itself. Included inside a monthly plan, or booked on its own.",
    items: [
      { href: "/seo-services/technical-seo", name: "Technical SEO", blurb: "Speed, crawling, indexing and schema" },
      { href: "/seo-services/on-page-seo", name: "On-Page SEO", blurb: "Titles, copy and page structure that rank" },
      { href: "/seo-services/seo-audits", name: "SEO Audit", blurb: "A full review with a prioritized fix list" },
      { href: "/seo-services/link-building", name: "Link Building", blurb: "Relevant links that build real authority" },
    ],
  },
];

export const ALL_SERVICES: Service[] = SERVICE_GROUPS.flatMap((g) => g.items);
