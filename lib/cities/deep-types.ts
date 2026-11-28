/** Extra, city-specific depth for the US city pages under /locations/<city>. */
export type CityDeep = {
  /** How homes are built and aged in this market, and what that means for trades. Two short paragraphs. */
  housing: [string, string];
  /** Local demand calendar driven by this city's climate and economy. Four rows. */
  seasons: { when: string; what: string }[];
  /** Neighborhoods and nearby towns worth their own pages, each with one line on why. Five or six rows. */
  areas: { name: string; note: string }[];
  /** What it takes to win the map pack here: the competitive picture in plain English. */
  competition: string;
  /** Three extra city-specific questions and answers. */
  faqs: { q: string; a: string }[];
};

/** Extra, country-specific depth for /locations/countries/<country> and its city guides. */
export type CountryDeep = {
  /** How local search works in this country. Two short paragraphs. */
  overview: [string, string];
  /** Directories, review sites and map platforms that matter here, each with one line on why. Four to six rows. */
  directories: { name: string; why: string }[];
  /** Language, spelling, address and phone format notes for pages and listings. */
  language: string;
  /** Review, privacy and advertising rules a local business should respect, phrased generally. */
  rules: string;
  /** Four practical tips specific to this market. */
  tips: string[];
  /** Three country-specific questions and answers. */
  faqs: { q: string; a: string }[];
};

/** City-specific content for one international city guide (/locations/countries/<country>/<city>). */
export type GlobalCityGuide = {
  /** Meta description, unique to this city, 120 to 155 characters. */
  summary: string;
  /** Hero lead, two sentences about this city and its local search market. */
  lead: string;
  /** What kind of place this is and what its local business landscape looks like. Two short paragraphs. */
  profile: [string, string];
  /** Five real districts, neighbourhoods or suburbs people search by, each with one line on why it matters. */
  areas: { name: string; note: string }[];
  /** Three or four real nearby towns or suburbs in the same catchment. */
  nearby: string[];
  /** The language(s) people search in here and any local wording to use. One or two sentences. */
  language: string;
  /** Three rows of local demand patterns: seasons, tourism, events, academic year, weather. */
  demand: { when: string; what: string }[];
  /** Five example local searches, in the local language where that is how people search. */
  queries: string[];
  /** Three local business types where map pack competition is strongest here. */
  sectors: string[];
  /** Two city-specific questions and answers. */
  faqs: { q: string; a: string }[];
};
