import type { CountryDeep } from "./cities/deep-types";
import { COUNTRY_DEEP_A } from "./countries-deep-a";
import { COUNTRY_DEEP_B } from "./countries-deep-b";

/** Country-specific depth for every country hub and its city guides. */
export const COUNTRY_DEEP: Record<string, CountryDeep> = { ...COUNTRY_DEEP_A, ...COUNTRY_DEEP_B };
