/**
 * All prices on the site come from this file. Change a number here and every
 * page (pricing page, service pages, FAQs) updates with it.
 */
export type Plan = {
  name: string;
  price: number;
  tagline: string;
  features: string[];
  popular?: boolean;
};

/** One set of all-in-one plans: Local SEO in every plan, GEO & AI Visibility from Growth up. */
export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: 349,
    tagline: "Local SEO for one location in a smaller market.",
    features: [
      "Google Business Profile optimization and weekly posts",
      "Up to 5 core services and 5 towns",
      "Citation cleanup on the top directories",
      "2 new service or area pages a month",
      "Review request system",
      "Monthly report on rankings, calls and leads",
    ],
  },
  {
    name: "Growth",
    price: 750,
    tagline: "Local SEO plus GEO & AI Visibility for a competitive market.",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 10 services and 10 towns",
      "4 new pages a month",
      "2 to 4 relevant local links a month",
      "Map-pack rank grid across your service area",
      "GEO & AI Visibility (medium): 25 AI questions tracked monthly",
      "Bing Places, Apple Business Connect and schema set up for AI answers",
      "Monthly strategy call",
    ],
  },
  {
    name: "Pro",
    price: 1250,
    tagline: "Full Local SEO and GEO & AI Visibility, up to 3 locations or a large metro.",
    features: [
      "Everything in Growth",
      "Up to 3 Google Business Profiles",
      "8 new pages a month",
      "5 to 8 local links and PR mentions a month",
      "GEO & AI Visibility (full): 75 AI questions tracked monthly",
      "Answer-ready page rewrites and AI mention outreach",
      "Review reply management",
      "Calls every two weeks",
    ],
  },
];

/** SaaS SEO plans, shown on /seo-services/saas-seo. */
export const SAAS_PLANS: Plan[] = [
  {
    name: "Starter",
    price: 899,
    tagline: "Early-stage SaaS finding product-market search fit.",
    features: [
      "Technical audit and fixes",
      "Keyword map by funnel stage",
      "4 pages or articles a month",
      "Feature and use-case page optimization",
      "Monthly report on signups from search",
    ],
  },
  {
    name: "Growth",
    price: 1499,
    tagline: "SaaS with traction, ready to scale.",
    popular: true,
    features: [
      "Everything in Starter",
      "8 pages or articles a month",
      "Comparison and alternatives pages",
      "Integration and template pages",
      "Relevant links and PR mentions",
    ],
  },
  {
    name: "Pro",
    price: 2499,
    tagline: "Established SaaS in competitive categories.",
    features: [
      "Everything in Growth",
      "14 pages or articles a month",
      "Programmatic SEO for scalable pages",
      "AI search visibility tracking",
      "Monthly strategy call",
    ],
  },
];

/** Ecommerce SEO plans, shown on /seo-services/ecommerce-seo. */
export const ECOMMERCE_PLANS: Plan[] = [
  {
    name: "Starter",
    price: 799,
    tagline: "Stores up to 500 products.",
    features: [
      "Technical audit and fixes",
      "5 category pages optimized a month",
      "Product title and meta templates",
      "Product and review schema",
      "Monthly revenue-focused report",
    ],
  },
  {
    name: "Growth",
    price: 1399,
    tagline: "Stores up to 5,000 products.",
    popular: true,
    features: [
      "Everything in Starter",
      "10 category pages a month",
      "Faceted navigation and duplicate URL control",
      "2 buying guides a month",
      "Relevant links to category pages",
    ],
  },
  {
    name: "Pro",
    price: 2299,
    tagline: "Large catalogs and multi-region stores.",
    features: [
      "Everything in Growth",
      "20 pages a month",
      "International SEO and hreflang",
      "Digital PR campaigns",
      "Monthly strategy call",
    ],
  },
];

/** Shopify SEO plans, shown on /seo-services/shopify-seo. */
export const SHOPIFY_PLANS: Plan[] = [
  {
    name: "Starter",
    price: 699,
    tagline: "New and growing Shopify stores.",
    features: [
      "Shopify SEO audit",
      "Theme speed and app bloat fixes",
      "5 collection pages optimized a month",
      "Product schema and meta templates",
      "Monthly report",
    ],
  },
  {
    name: "Growth",
    price: 1199,
    tagline: "Established stores ready to scale.",
    popular: true,
    features: [
      "Everything in Starter",
      "10 collection pages a month",
      "Duplicate product URL and tag page cleanup",
      "2 blog guides a month",
      "Relevant links to collections",
    ],
  },
  {
    name: "Pro",
    price: 1999,
    tagline: "Shopify Plus and multi-market stores.",
    features: [
      "Everything in Growth",
      "Shopify Markets, hreflang and multi-language",
      "Custom theme template work",
      "Digital PR campaigns",
      "Monthly strategy call",
    ],
  },
];

/** The cheapest plan that includes GEO & AI Visibility. */
export const AI_PLAN = PLANS[1];

export const fromPrice = () => Math.min(...PLANS.map((p) => p.price));
export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
