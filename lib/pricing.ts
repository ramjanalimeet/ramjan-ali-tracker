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

/** The cheapest plan that includes GEO & AI Visibility. */
export const AI_PLAN = PLANS[1];

export const fromPrice = () => Math.min(...PLANS.map((p) => p.price));
export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
