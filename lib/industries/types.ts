export type CategoryId = "exterior" | "mechanical" | "electrical" | "interior" | "cleaning" | "outdoor" | "specialty";

export type IndustryFaq = { q: string; a: string };

/** One generated industry page under /local-seo/<slug>. */
export type Industry = {
  /** URL slug, e.g. "electrician-seo". */
  slug: string;
  /** Plural trade name for cards and headings, e.g. "Electricians". */
  name: string;
  /** Singular label used in "<short> SEO", e.g. "Electrician". */
  short: string;
  category: CategoryId;
  /** One line for cards and menus. */
  blurb: string;
  /** SEO title, under 60 characters. */
  title: string;
  /** Meta description, under 160 characters. */
  description: string;
  /** H1 with one highlighted phrase: [before, highlight, after]. */
  h1: [string, string, string];
  lead: string;
  problemTitle: string;
  problem: [string, string];
  /** Example searches customers type into Google. */
  searches: string[];
  /** Example questions customers ask AI assistants. */
  ai: string[];
  /** Three trade-specific parts of the work. */
  focus: { t: string; d: string }[];
  faq: IndustryFaq[];
  cta: string;
};
