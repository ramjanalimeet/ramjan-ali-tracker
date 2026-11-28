import type { GlobalCityGuide } from "../cities/deep-types";
import { CITY_GUIDES_1 } from "./batch-1";
import { CITY_GUIDES_2 } from "./batch-2";
import { CITY_GUIDES_3 } from "./batch-3";
import { CITY_GUIDES_4 } from "./batch-4";
import { CITY_GUIDES_5 } from "./batch-5";
import { CITY_GUIDES_6 } from "./batch-6";
import { CITY_GUIDES_7 } from "./batch-7";
import { CITY_GUIDES_8 } from "./batch-8";
import { CITY_GUIDES_9 } from "./batch-9";
import { CITY_GUIDES_10 } from "./batch-10";
import { CITY_GUIDES_11 } from "./batch-11";
import { CITY_GUIDES_12 } from "./batch-12";
import { CITY_GUIDES_13 } from "./batch-13";
import { CITY_GUIDES_14 } from "./batch-14";
import { CITY_GUIDES_15 } from "./batch-15";
import { CITY_GUIDES_16 } from "./batch-16";

/**
 * City-specific content for every international city guide, keyed "<country-slug>/<city-slug>".
 * Each guide gives its page its own profile, districts, search language, demand calendar,
 * example searches and FAQs, so no two city pages are a name swap of each other.
 */
const CITY_GUIDES: Record<string, GlobalCityGuide> = {
  ...CITY_GUIDES_1,
  ...CITY_GUIDES_2,
  ...CITY_GUIDES_3,
  ...CITY_GUIDES_4,
  ...CITY_GUIDES_5,
  ...CITY_GUIDES_6,
  ...CITY_GUIDES_7,
  ...CITY_GUIDES_8,
  ...CITY_GUIDES_9,
  ...CITY_GUIDES_10,
  ...CITY_GUIDES_11,
  ...CITY_GUIDES_12,
  ...CITY_GUIDES_13,
  ...CITY_GUIDES_14,
  ...CITY_GUIDES_15,
  ...CITY_GUIDES_16,
};

export const getCityGuide = (countrySlug: string, citySlug: string): GlobalCityGuide | undefined =>
  CITY_GUIDES[`${countrySlug}/${citySlug}`];
