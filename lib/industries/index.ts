import { CLEANING } from "./cleaning";
import { EXTERIOR } from "./exterior";
import { INTERIOR } from "./interior";
import { OUTDOOR } from "./outdoor";
import { SPECIALTY } from "./specialty";
import { SYSTEMS } from "./systems";
import type { CategoryId, Industry } from "./types";

export type { CategoryId, Industry } from "./types";

export const CATEGORIES: { id: CategoryId; name: string }[] = [
  { id: "exterior", name: "Roofing & exterior" },
  { id: "mechanical", name: "Plumbing, HVAC & water" },
  { id: "electrical", name: "Electrical & smart home" },
  { id: "interior", name: "Remodeling & interior" },
  { id: "cleaning", name: "Cleaning & restoration" },
  { id: "outdoor", name: "Lawn, landscape & pool" },
  { id: "specialty", name: "Specialty services" },
];

const ALL_TRADES: Industry[] = [...EXTERIOR, ...SYSTEMS, ...INTERIOR, ...CLEANING, ...OUTDOOR, ...SPECIALTY];

/**
 * The trades that keep a dedicated page. Each one has trade-specific depth in
 * deep.ts. Every other trade is still served (listed on /industries) but its old
 * page redirects to /industries, so the site has fewer, stronger industry pages.
 */
export const CORE_SLUGS = [
  "electrician-seo",
  "garage-door-seo",
  "pest-control-seo",
  "landscaping-seo",
  "water-damage-restoration-seo",
  "painting-seo",
  "kitchen-remodeling-seo",
  "gutter-seo",
  "siding-seo",
  "window-door-seo",
  "water-heater-seo",
  "drain-cleaning-seo",
  "water-treatment-seo",
  "well-pump-seo",
  "air-duct-cleaning-seo",
  "generator-installer-seo",
  "insulation-seo",
  "home-inspection-seo",
];

/** Industry pages generated from data by app/local-seo/[slug]. */
export const INDUSTRIES: Industry[] = ALL_TRADES.filter((i) => CORE_SLUGS.includes(i.slug));

/** Trades served without a dedicated page: shown by name on /industries, linking to Home Services SEO. */
export const ALSO_SERVED = ALL_TRADES.filter((i) => !CORE_SLUGS.includes(i.slug)).map(({ slug, name, category }) => ({
  slug,
  name,
  category,
}));

/** Hand-written industry pages that live in their own folders under app/local-seo. */
const CUSTOM: IndustryLink[] = [
  { slug: "roofing-seo", name: "Roofers", blurb: "Roof repair, replacement and storm work", category: "exterior" },
  { slug: "plumbing-seo", name: "Plumbers", blurb: "Emergency and high-value plumbing calls", category: "mechanical" },
  { slug: "hvac-seo", name: "HVAC Companies", blurb: "AC, heating and system replacements", category: "mechanical" },
  { slug: "septic-seo", name: "Septic Companies", blurb: "Pumping, inspections and installs", category: "mechanical" },
  {
    slug: "home-services-seo",
    name: "Other Home Services",
    blurb: "Any trade not listed here",
    category: "specialty",
  },
];

export type IndustryLink = { slug: string; name: string; blurb: string; category: CategoryId };

/** Every industry page, hand-written and generated, for the hub, sitemap and related links. */
export const ALL_INDUSTRIES: IndustryLink[] = [
  ...CUSTOM.filter((c) => c.slug !== "home-services-seo"),
  ...INDUSTRIES.map(({ slug, name, blurb, category }) => ({ slug, name, blurb, category })),
  ...CUSTOM.filter((c) => c.slug === "home-services-seo"),
];

/** Every trade served, with or without a dedicated page. */
export const TRADE_COUNT = ALL_INDUSTRIES.length + ALSO_SERVED.length;

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);
