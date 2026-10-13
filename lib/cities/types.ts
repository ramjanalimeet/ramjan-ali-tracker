export type TradeKey = "roofing" | "plumbing" | "septic" | "hvac" | "home";
export type LocaleKey = "us" | "uk" | "ie" | "cy" | "ca" | "au" | "me";

export type CityGroup = { slug: string; name: string; lead: string };

export type City = {
  slug: string;
  name: string;
  /** "McKinney, TX" or "Cork, Ireland". */
  place: string;
  locale: LocaleKey;
  /** CityGroup slug. */
  group: string;
  country: string;
  adminType: string;
  adminName: string;
  geoRegion?: string | null;
  /** [label, value], e.g. ["County", "Collin County"]. */
  admin: string[];
  metro: string;
  areas: string[];
  /** The search shown in the map illustration. */
  query: string;
  /** City name as people type it in searches. */
  queryName: string;
  lead: string;
  headline: string;
  market: string[];
  trades: Partial<Record<TradeKey, string>>;
  focus: string[];
  labels: Partial<Record<TradeKey, string>>;
  searchNote: string;
  plan: string;
  card: string;
  faqs: { q: string; a: string }[];
  queries: string[];
  demand: string;
  competition: string;
  /** Which shared text variant each section uses, so pages do not repeat word for word. */
  v: { search: number; area: number; trade: number; outro: number; ticks: number };
};
