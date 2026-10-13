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

export type ServicePricing = { id: "local" | "ai"; service: string; href: string; intro: string; plans: Plan[] };

export const LOCAL_SEO: ServicePricing = {
  id: "local",
  service: "Local SEO",
  href: "/local-seo",
  intro: "Rank in the Google map pack and local results for the jobs you want, in the towns you serve.",
  plans: [
    {
      name: "Starter",
      price: 499,
      tagline: "One location in a smaller market.",
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
      price: 899,
      tagline: "One location in a competitive market.",
      popular: true,
      features: [
        "Everything in Starter",
        "Up to 10 services and 10 towns",
        "4 new pages a month",
        "2 to 4 relevant local links a month",
        "Map-pack rank grid across your service area",
        "Monthly strategy call",
      ],
    },
    {
      name: "Pro",
      price: 1499,
      tagline: "Up to 3 locations or a large metro.",
      features: [
        "Everything in Growth",
        "Up to 3 Google Business Profiles",
        "8 new pages a month",
        "5 to 8 local links and PR mentions a month",
        "Review reply management",
        "Calls every two weeks",
      ],
    },
  ],
};

export const AI_SEARCH: ServicePricing = {
  id: "ai",
  service: "AI Search Visibility",
  href: "/ai-search",
  intro: "Get named in ChatGPT, Gemini, Perplexity and Google's AI Overviews when homeowners ask who to call.",
  plans: [
    {
      name: "AI Essentials",
      price: 397,
      tagline: "Get on the list AI tools pick from.",
      features: [
        "AI visibility audit to start",
        "25 real customer questions tracked monthly",
        "Bing Places, Apple Business Connect and key directories in sync",
        "LocalBusiness and service schema",
        "AI crawler access check",
        "Monthly AI mentions report",
      ],
    },
    {
      name: "AI Pro",
      price: 697,
      tagline: "Be the name AI recommends first.",
      popular: true,
      features: [
        "Everything in AI Essentials",
        "75 real customer questions tracked monthly",
        "4 answer-ready page rewrites a month",
        "FAQ content built from real customer questions",
        "Local mentions and PR outreach",
        "Quarterly AI strategy review",
      ],
    },
  ],
};

export const BUNDLE = {
  name: "Complete Visibility",
  includes: "Local SEO Growth + AI Essentials",
  price: 1199,
  regular: 899 + 397,
};

export const SERVICES = [LOCAL_SEO, AI_SEARCH];

export const fromPrice = (s: ServicePricing) => Math.min(...s.plans.map((p) => p.price));
export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
