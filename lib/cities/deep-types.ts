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
