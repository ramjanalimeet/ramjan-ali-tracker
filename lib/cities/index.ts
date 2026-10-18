import { CITIES as ALL_CITIES, CITY_GROUPS as ALL_GROUPS } from "./data";

export type { City, CityGroup, TradeKey } from "./types";

/**
 * Markets that get city pages. Cities in other groups stay in data.ts so they can
 * be switched back on, but they are not built, and next.config.ts redirects their
 * old URLs to /locations.
 */
export const ACTIVE_GROUPS = ["united-states"];

export const CITIES = ALL_CITIES.filter((c) => ACTIVE_GROUPS.includes(c.group));
export const CITY_GROUPS = ALL_GROUPS.filter((g) => ACTIVE_GROUPS.includes(g.slug));
export const RETIRED_CITY_SLUGS = ALL_CITIES.filter((c) => !ACTIVE_GROUPS.includes(c.group)).map((c) => c.slug);

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug);
export const citiesIn = (group: string) => CITIES.filter((c) => c.group === group);
export const groupOf = (slug: string) => CITY_GROUPS.find((g) => g.slug === slug);
