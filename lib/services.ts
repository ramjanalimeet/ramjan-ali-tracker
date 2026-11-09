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
      { href: "/local-seo", name: "Local SEO", blurb: "Rank in Google Maps and local results" },
      { href: "/ai-search", name: "GEO & AI Visibility", blurb: "Get cited by ChatGPT, Gemini and AI Overviews" },
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
  {
    title: "SEO for online businesses",
    heading: "SEO for SaaS and online stores.",
    intro:
      "The same fix-first approach for businesses that sell online: pages built for buying searches, measured in signups, orders and revenue.",
    items: [
      { href: "/seo-services/saas-seo", name: "SaaS SEO", blurb: "Search that turns into trials and demos" },
      { href: "/seo-services/ecommerce-seo", name: "Ecommerce SEO", blurb: "Category and product pages that sell" },
      { href: "/seo-services/shopify-seo", name: "Shopify SEO", blurb: "Fix Shopify's quirks and grow sales" },
    ],
  },
];

export const ALL_SERVICES: Service[] = SERVICE_GROUPS.flatMap((g) => g.items);
