import { DEEP, type IndustryDeep } from "./deep";
import { DEEP_EXTRA_1 } from "./deep-extra-1";
import { DEEP_EXTRA_2 } from "./deep-extra-2";
import { DEEP_EXTRA_3 } from "./deep-extra-3";
import { DEEP_EXTRA_4 } from "./deep-extra-4";
import { DEEP_EXTRA_5 } from "./deep-extra-5";
import { DEEP_EXTRA_6 } from "./deep-extra-6";

const ALL_DEEP: Record<string, IndustryDeep> = {
  ...DEEP,
  ...DEEP_EXTRA_1,
  ...DEEP_EXTRA_2,
  ...DEEP_EXTRA_3,
  ...DEEP_EXTRA_4,
  ...DEEP_EXTRA_5,
  ...DEEP_EXTRA_6,
};

export const getDeep = (slug: string): IndustryDeep | undefined => ALL_DEEP[slug];
