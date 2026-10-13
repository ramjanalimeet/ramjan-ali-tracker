import { CITIES, CITY_GROUPS } from "./data";

export { CITIES, CITY_GROUPS } from "./data";
export type { City, CityGroup, TradeKey } from "./types";

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug);
export const citiesIn = (group: string) => CITIES.filter((c) => c.group === group);
export const groupOf = (slug: string) => CITY_GROUPS.find((g) => g.slug === slug);
