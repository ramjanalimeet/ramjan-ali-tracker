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
      price: 497,
      tagline: "One location in a smaller market.",
      features: [
        "Google Business Profile optimization and weekly posts",
        "2 new or rebuilt service or area pages a month",
        "Citation cleanup on the directories that matter",
        "Review request system and reply templates",
        "Monthly map ranking report",
      ],
    },
    {
      name: "Growth",
      price: 897,
      tagline: "Competitive towns and more services.",
      popular: true,
      features: [
        "Everything in Starter",
        "4 new or rebuilt pages a month",
        "2 local links a month",
        "Map rank grid tracking across your service area",
        "Call and form tracking",
        "Monthly strategy call",
      ],
    },
    {
      name: "Dominate",
      price: 1497,
      tagline: "Big metros or multiple locations.",
      features: [
        "Everything in Growth",
        "Up to 3 locations or Google Business Profiles",
        "8 new or rebuilt pages a month",
        "4 local links a month",
        "Competitor monitoring",
        "Priority support with same-day replies",
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
  price: 1197,
  regular: 897 + 397,
};

export const SERVICES = [LOCAL_SEO, AI_SEARCH];

export const fromPrice = (s: ServicePricing) => Math.min(...s.plans.map((p) => p.price));
export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
