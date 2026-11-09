import type { ServiceKey } from "./playbooks";

/**
 * Client case studies. Add a real one by copying the shape of SAMPLE_CASE into
 * CASE_STUDIES, with the client's written permission and numbers taken straight
 * from their tracking tools (see README: "Adding a case study").
 *
 * Never publish made-up clients or numbers here.
 */

/** A month in YYYY-MM form, e.g. "2026-03". */
export type Month = string;

export type CaseStudy = {
  slug: string;
  /** True only for the labelled sample. Samples are noindexed and bannered. */
  sample?: boolean;
  /** Client name, or an anonymous description if they prefer ("Roofing company, Tampa"). */
  client: string;
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
  highlights: { label: string; before: string; after: string }[];
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

/** Real, approved client case studies. Newest first. */
export const CASE_STUDIES: CaseStudy[] = [];

/**
 * A labelled sample that shows how a finished case study looks. It is not a
 * real client and every page that shows it says so.
 */
export const SAMPLE_CASE: CaseStudy = {
  slug: "sample-roofing-local-seo",
  sample: true,
  client: "Sample Roofing Co.",
  trade: "Roofing",
  tradeSlug: "roofing-seo",
  services: ["local-seo", "ai-search"],
  plan: "Growth",
  location: "Example City",
  period: { start: "2026-01", end: "2026-06" },
  published: "2026-10-13",
  title: "Sample: a roofer winning storm searches across the service area",
  summary:
    "This sample shows the format every real case study uses: the starting point, the work, and the numbers from Search Console, map rank scans and AI visibility checks.",
  challenge: [
    "Ranking only near the office, invisible in the towns further out",
    "One page for every roofing service",
    "Few recent reviews and no job photos on the profile",
    "Not mentioned when AI tools were asked for local roofers",
  ],
  work: [
    "Profile rebuilt with the right categories, services, areas and weekly job photos",
    "Separate pages for repair, replacement and storm damage, plus five town pages",
    "Review requests after every job",
    "Listings made consistent on Google, Bing, Apple and key directories",
  ],
  highlights: [
    { label: "Monthly clicks from Google", before: "210", after: "860" },
    { label: "Grid points in the top 3", before: "1 of 25", after: "19 of 25" },
    { label: "AI questions where named", before: "0 of 25", after: "11 of 25" },
  ],
  searchConsole: {
    clicks: [
      { month: "2026-01", value: 210 },
      { month: "2026-02", value: 260 },
      { month: "2026-03", value: 390 },
      { month: "2026-04", value: 520 },
      { month: "2026-05", value: 700 },
      { month: "2026-06", value: 860 },
    ],
    impressions: [
      { month: "2026-01", value: 9400 },
      { month: "2026-02", value: 11200 },
      { month: "2026-03", value: 15800 },
      { month: "2026-04", value: 19900 },
      { month: "2026-05", value: 24600 },
      { month: "2026-06", value: 28300 },
    ],
  },
  mapGrid: {
    keyword: "roof repair near me",
    before: {
      date: "2026-01",
      grid: [
        [0, 0, 14, 0, 0],
        [0, 9, 6, 11, 0],
        [12, 5, 2, 4, 15],
        [0, 8, 4, 9, 0],
        [0, 0, 13, 0, 0],
      ],
    },
    after: {
      date: "2026-06",
      grid: [
        [6, 3, 2, 4, 8],
        [3, 2, 1, 2, 4],
        [2, 1, 1, 1, 3],
        [3, 2, 1, 2, 3],
        [7, 3, 2, 3, 9],
      ],
    },
  },
  ai: {
    questions: 25,
    months: [
      { month: "2026-01", mentioned: 0 },
      { month: "2026-02", mentioned: 1 },
      { month: "2026-03", mentioned: 3 },
      { month: "2026-04", mentioned: 6 },
      { month: "2026-05", mentioned: 9 },
      { month: "2026-06", mentioned: 11 },
    ],
    byTool: [
      { tool: "Google AI Overviews", mentioned: 4, asked: 7 },
      { tool: "ChatGPT", mentioned: 3, asked: 6 },
      { tool: "Gemini", mentioned: 2, asked: 6 },
      { tool: "Perplexity", mentioned: 2, asked: 6 },
    ],
  },
};

export const ALL_CASES = [...CASE_STUDIES, SAMPLE_CASE];
export const getCase = (slug: string) => ALL_CASES.find((c) => c.slug === slug);

export const monthLabel = (m: Month, withYear = false) =>
  new Date(`${m}-01T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    ...(withYear ? { year: "numeric" } : {}),
    timeZone: "UTC",
  });
