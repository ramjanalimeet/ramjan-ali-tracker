import type { LocaleKey, TradeKey } from "./types";

export const TRADE_LINKS: Record<TradeKey, string> = {
  roofing: "/local-seo/roofing-seo",
  plumbing: "/local-seo/plumbing-seo",
  septic: "/local-seo/septic-seo",
  hvac: "/local-seo/hvac-seo",
  home: "/local-seo/home-services-seo",
};

type Locale = {
  noun: string;
  tradesDesc: string;
  areasWord: string;
  labels: Record<TradeKey, string>;
  queries: Record<TradeKey, string[]>;
  hours: string;
};

const BOOKED = "Calls are booked through my calendar and I reply to every message within 24 hours.";

/** Everything that changes with the market: trade names, search patterns, spelling and time zones. */
export const LOCALES: Record<LocaleKey, Locale> = {
  us: {
    noun: "contractors",
    tradesDesc: "roofing, plumbing, septic, HVAC and home-service companies",
    areasWord: "Neighborhoods",
    labels: {
      roofing: "Roofing SEO",
      plumbing: "Plumbing SEO",
      septic: "Septic SEO",
      hvac: "HVAC SEO",
      home: "Home Services SEO",
    },
    queries: {
      roofing: ["roof repair {c}", "roof replacement {c}", "roofing company {c}"],
      plumbing: ["emergency plumber {c}", "water heater repair {c}", "plumber {c}"],
      septic: ["septic pumping {c}", "septic inspection {c}"],
      hvac: ["ac repair {c}", "hvac company {c}", "furnace repair {c}"],
      home: ["electrician {c}", "garage door repair {c}", "pest control {c}"],
    },
    hours:
      "Calls are booked through my calendar in your morning or evening, and I reply to every message within 24 hours.",
  },
  uk: {
    noun: "trade businesses",
    tradesDesc: "roofers, plumbers, heating engineers, drainage firms and other trade businesses",
    areasWord: "Areas",
    labels: {
      roofing: "Roofing SEO",
      plumbing: "Plumbing & Heating SEO",
      septic: "Drainage & Septic SEO",
      hvac: "Boiler & Heating SEO",
      home: "Trades SEO",
    },
    queries: {
      roofing: ["roofer {c}", "roof repairs {c}", "flat roofing {c}"],
      plumbing: ["emergency plumber {c}", "plumber {c}"],
      septic: ["blocked drains {c}", "septic tank emptying {c}"],
      hvac: ["boiler repair {c}", "boiler installation {c}", "heating engineer {c}"],
      home: ["electrician {c}", "pest control {c}"],
    },
    hours: `Dhaka is five to six hours ahead of the UK, so your morning overlaps my afternoon. ${BOOKED}`,
  },
  ie: {
    noun: "trade businesses",
    tradesDesc: "roofers, plumbers, heating and heat pump installers, septic firms and other trades",
    areasWord: "Areas",
    labels: {
      roofing: "Roofing SEO",
      plumbing: "Plumbing SEO",
      septic: "Septic Tank SEO",
      hvac: "Heating & Heat Pump SEO",
      home: "Trades SEO",
    },
    queries: {
      roofing: ["roofers {c}", "roof repairs {c}"],
      plumbing: ["plumber {c}", "emergency plumber {c}"],
      septic: ["septic tank installation {c}", "septic tank emptying {c}"],
      hvac: ["heat pump installation {c}", "boiler service {c}"],
      home: ["electrician {c}", "builders {c}"],
    },
    hours: `Dhaka is five to six hours ahead of Ireland, so your morning overlaps my afternoon. ${BOOKED}`,
  },
  cy: {
    noun: "contractors",
    tradesDesc: "air conditioning, plumbing, roofing and waterproofing, pool and property maintenance companies",
    areasWord: "Areas",
    labels: {
      roofing: "Roofing & Waterproofing SEO",
      plumbing: "Plumbing SEO",
      septic: "Drainage & Septic SEO",
      hvac: "Air Conditioning SEO",
      home: "Property Maintenance SEO",
    },
    queries: {
      roofing: ["roof waterproofing {c}", "roof repairs {c}"],
      plumbing: ["plumber {c}", "emergency plumber {c}"],
      septic: ["septic tank emptying {c}", "blocked drains {c}"],
      hvac: ["air conditioning installation {c}", "ac service {c}", "ac repair {c}"],
      home: ["property maintenance {c}", "pool maintenance {c}", "electrician {c}"],
    },
    hours: `Dhaka is three to four hours ahead of Cyprus, so most of your working day overlaps mine. ${BOOKED}`,
  },
  ca: {
    noun: "contractors",
    tradesDesc: "roofing, plumbing, HVAC, septic and home-service companies",
    areasWord: "Neighbourhoods",
    labels: {
      roofing: "Roofing SEO",
      plumbing: "Plumbing SEO",
      septic: "Septic SEO",
      hvac: "HVAC & Furnace SEO",
      home: "Home Services SEO",
    },
    queries: {
      roofing: ["roofing company {c}", "roof repair {c}"],
      plumbing: ["plumber {c}", "emergency plumber {c}"],
      septic: ["septic pumping {c}", "septic system installation {c}"],
      hvac: ["furnace repair {c}", "hvac company {c}", "heat pump installation {c}"],
      home: ["electrician {c}", "snow removal {c}"],
    },
    hours:
      "Calls are booked through my calendar in your morning or evening, and I reply to every message within 24 hours.",
  },
  au: {
    noun: "tradies",
    tradesDesc: "roofers, plumbers, air conditioning, septic and other tradie businesses",
    areasWord: "Suburbs",
    labels: {
      roofing: "Roofing SEO",
      plumbing: "Plumbing SEO",
      septic: "Septic & Drainage SEO",
      hvac: "Air Conditioning SEO",
      home: "Tradie SEO",
    },
    queries: {
      roofing: ["roof restoration {c}", "roof repairs {c}", "roofing {c}"],
      plumbing: ["plumber {c}", "blocked drains {c}", "hot water repairs {c}"],
      septic: ["septic tank pumping {c}"],
      hvac: ["air conditioning installation {c}", "split system installation {c}"],
      home: ["electrician {c}", "pest control {c}"],
    },
    hours: `Dhaka is four to five hours behind eastern Australia, so my morning is your early afternoon. ${BOOKED}`,
  },
  me: {
    noun: "maintenance companies",
    tradesDesc: "AC maintenance, plumbing, waterproofing, pest control and home maintenance companies",
    areasWord: "Communities",
    labels: {
      roofing: "Waterproofing SEO",
      plumbing: "Plumbing SEO",
      septic: "Drainage SEO",
      hvac: "AC Maintenance SEO",
      home: "Home Maintenance SEO",
    },
    queries: {
      roofing: ["roof waterproofing {c}", "waterproofing company {c}"],
      plumbing: ["plumber {c}", "plumbing services {c}"],
      septic: ["drainage cleaning {c}"],
      hvac: ["ac maintenance {c}", "ac repair {c}", "ac duct cleaning {c}"],
      home: ["villa maintenance {c}", "pest control {c}", "deep cleaning {c}", "handyman {c}"],
    },
    hours: `Dhaka is two to three hours ahead of the Gulf, so we share almost the whole working day. ${BOOKED}`,
  },
};

// Shared section copy comes in several versions, chosen per city (see City.v),
// so city pages do not repeat the same paragraphs word for word.
export const SEARCH_INTRO = [
  "These are the searches that turn into booked jobs in {n}. Most show a map pack of three businesses above the regular results, and that is where the calls come from.",
  "Not every search is worth chasing. The ones below are what people in {n} type when they are ready to book, and they are where I put the effort first.",
  'A lot of {n} customers just search "near me" and pick from the map. Google ranks those by distance, relevance and prominence, so your profile, reviews and pages have to back each other up.',
  "The list on the right comes from how {n} customers actually phrase their searches: the service, the place, and often the word emergency.",
];
export const AREA_INTRO = [
  "Map rankings fade with distance, so each part of your {n} service area gets its own page and its own tracking.",
  "Customers rarely search the whole region. They search their own area, so these are the places that each get a page written for them.",
  "A single {n} page cannot rank everywhere you work. Separate pages for nearby areas, with real local detail, can.",
  "Where you rank changes block by block. I track a grid across these areas so we can see where you win in {n} and where you need more work.",
];
export const TRADE_INTRO = [
  "The same local playbook, tuned to what {n} customers need and when they need it.",
  "Every trade has its own busy season and its own searches in {n}. Here is how each one plays out.",
  "What wins in {n} depends on your trade. These are the angles I lead with for each.",
];
export const PLAN_OUTRO = [
  "It starts with a free strategy call on your Google Business Profile, website and the three competitors beating you in the {n} map pack. You keep the findings either way.",
  "Before any work starts you get a 90-day roadmap for {n}, so you know what is being done, in what order, and why.",
  "No long contract. You see what was done in {n} each month, and what it did for calls and form leads.",
];
export const PLAN_TICKS = [
  [
    "Google Business Profile tuned for {n}: categories, services, service area and photos",
    "Area pages for {a0}, {a1} and {a2}, each written for that place",
    "Citations cleaned up and built in {m} and national directories",
    "A simple review system so happy {n} customers actually leave reviews",
    "Local links from {n}-area suppliers, sponsors and associations",
    "Map-pack rank tracking on a grid across {n}",
  ],
  [
    "A {n} profile with the right primary category and every service listed",
    "Dedicated pages for {a0}, {a1} and {a2}",
    "Business details made consistent across {m} listings",
    "Review requests sent after every {n} job",
    "Links from local suppliers, clubs and partners",
    "Monthly report on {n} rankings, calls and leads",
  ],
  [
    "Technical fixes so your site loads fast on phones in {n}",
    "Service pages for each job you want more of, written for {n}",
    "Area pages for {a0}, {a1} and {a2}",
    "Weekly profile posts and job photos from {n}",
    "Reviews that mention the job and the area",
    "Grid tracking that shows where you rank across {m}",
  ],
];

export const TIMING: Record<string, string> = {
  Low: "In a market like {n}, most businesses see map and organic movement within 60 to 90 days once the profile and site are fixed, with steady gains over six to twelve months.",
  "Low-Medium":
    "Expect early movement in {n} within about three months, and stronger, steadier rankings over six to twelve months. Timing depends on how far behind your profile and site are today.",
  Medium:
    "{n} has real competition in some trades, so plan on three to six months for clear gains and six to twelve months to settle into the top spots for your main services.",
};
