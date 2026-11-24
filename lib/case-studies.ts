import type { ServiceKey } from "./playbooks";

/**
 * Client case studies. Add real work here only with the client's permission
 * and numbers taken straight
 * from their tracking tools (see README: "Adding a case study").
 *
 * Never publish made-up clients or numbers here.
 */

/** A month in YYYY-MM form, e.g. "2026-03". */
export type Month = string;

export type CaseStudy = {
  slug: string;
  /** Client name, or an anonymous description if they prefer ("Roofing company, Tampa"). */
  client: string;
  website: string;
  image: string;
  imageAlt: string;
  trade: string;
  /** Industry page under /local-seo. */
  tradeSlug: string;
  services: ServiceKey[];
  plan: "Starter" | "Growth" | "Pro";
  location: string;
  period: { start: Month; end: Month };
  /** Date the case study was published, YYYY-MM-DD. */
  published: string;
  title: string;
  summary: string;
  challenge: string[];
  work: string[];
  /** Headline numbers, before and after. Keep the wording exactly as the data supports. */
  highlights: { label: string; after: string; note: string }[];
  /** How the visibility work connects to sustainable customer acquisition. */
  businessImpact: { title: string; text: string }[];
  /** Monthly totals from Search Console: Performance > Search results, exported by month. */
  searchConsole?: {
    clicks: { month: Month; value: number }[];
    impressions: { month: Month; value: number }[];
  };
  /** Map rank grid scans (e.g. Local Falcon or BrightLocal), same grid and keyword before and after. 0 = not in top 20. */
  mapGrid?: {
    keyword: string;
    before: { date: string; grid: number[][] };
    after: { date: string; grid: number[][] };
  };
  /** Monthly AI visibility checks: the same fixed question set asked in each AI tool. */
  ai?: {
    questions: number;
    months: { month: Month; mentioned: number }[];
    byTool: { tool: string; mentioned: number; asked: number }[];
  };
  /** Only a real quote, approved by the client. */
  quote?: { text: string; name: string; role: string };
};

/** Real client case studies. Newest first. */
export const CASE_STUDIES: CaseStudy[] = [{
  slug: "ecoverde-valeting-local-seo-ai-visibility",
  client: "Ecoverde Valeting & Detailing Service",
  website: "https://ecoverdevaleting.co.uk/",
  image: "/assets/case-studies/ecoverde-homepage.webp",
  imageAlt: "Ecoverde Valeting and Detailing Service homepage for West London mobile car care",
  trade: "Mobile Car Valeting & Detailing",
  tradeSlug: "auto-detailing-seo",
  services: ["local-seo", "ai-search"],
  plan: "Growth",
  location: "West London, United Kingdom",
  period: { start: "2026-08", end: "2026-11" },
  published: "2026-11-22",
  title: "How Ecoverde earned 520 Google Search clicks in three months",
  summary:
    "A focused Local SEO and AI visibility strategy helped Ecoverde turn a clear eco-friendly mobile valeting offer into measurable Google demand and recommendations in ChatGPT and Gemini.",
  challenge: [
    "Translate a broad car-care offer into high-intent services people actually search for in West London",
    "Build strong location relevance without creating thin or competing service-area pages",
    "Give Google and AI systems consistent evidence about the business, services, coverage and reputation",
    "Turn new visibility into quote requests with a clear mobile-first conversion path",
  ],
  work: [
    "Positioned the brand around eco-friendly mobile valeting and detailing for West London drivers",
    "Built a clear site structure for services, service areas, trust signals and booking intent",
    "Optimised on-page copy and entity signals so search engines could connect Ecoverde with the right services and locations",
    "Strengthened reputation evidence with visible reviews, experience and local membership signals",
    "Aligned the website, local business information and topical content for both conventional search and AI answers",
    "Made quote, phone and WhatsApp actions prominent so high-intent visits had a direct next step",
  ],
  highlights: [
    { label: "Google Search clicks", after: "520", note: "Recorded over the latest three-month Search Console view" },
    { label: "Google impressions", after: "64.6K", note: "Search appearances during the same measured period" },
    { label: "Average position", after: "23", note: "Across all queries in the supplied Search Console report" },
    { label: "AI recommendations", after: "ChatGPT + Gemini", note: "Named for relevant West London car-detailing searches" },
  ],
  businessImpact: [
    {
      title: "The offer became easier to understand",
      text: "The site leads with an eco-friendly mobile service for West London instead of generic car-care language. That connects the brand with customers looking for convenience, detailing quality and a provider who comes to them.",
    },
    {
      title: "Google Search brought visitors to the site",
      text: "Search Console recorded 520 clicks and 64.6K impressions over the supplied three-month view. That gives the business an owned stream of discovery that can compound as service and location authority grows.",
    },
    {
      title: "Visitors have clear ways to ask for a quote",
      text: "Free Quote, phone and WhatsApp actions sit beside reviews and experience signals. Visitors can verify the offer and contact the business without navigating through unnecessary steps.",
    },
    {
      title: "Ecoverde appeared in AI recommendation checks",
      text: "Ecoverde appeared in supplied ChatGPT and Gemini recommendation checks for relevant West London detailing queries, giving the business another route into high-intent consideration.",
    },
  ],
}];

export const ALL_CASES = CASE_STUDIES;
export const getCase = (slug: string) => ALL_CASES.find((c) => c.slug === slug);

export const monthLabel = (m: Month, withYear = false) =>
  new Date(`${m}-01T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    ...(withYear ? { year: "numeric" } : {}),
    timeZone: "UTC",
  });
