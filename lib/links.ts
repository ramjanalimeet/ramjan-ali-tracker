import { ALL_INDUSTRIES, type IndustryLink } from "./industries";
import { POSTS, type Post, type TopicId } from "./posts";

/** Stable number from a string, so each page gets its own (but fixed) slice of links. */
export function seedOf(s: string) {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/** Rotates a list to start at `seed`, so links spread evenly across all targets instead of always the first few. */
export function rotate<T>(list: T[], seed: number) {
  if (!list.length) return list;
  const i = seed % list.length;
  return [...list.slice(i), ...list.slice(0, i)];
}

/** Posts on the given topics first, then the rest, skipping `exclude`. */
export function relatedPosts(topics: TopicId[], n: number, seed = 0, exclude?: string): Post[] {
  const pool = POSTS.filter((p) => p.slug !== exclude);
  const onTopic = rotate(
    pool.filter((p) => topics.includes(p.topic)),
    seed,
  );
  const rest = rotate(
    pool.filter((p) => !topics.includes(p.topic)),
    seed,
  );
  return [...onTopic, ...rest].slice(0, n);
}

export function someIndustries(n: number, seed: number, exclude?: string): IndustryLink[] {
  return rotate(
    ALL_INDUSTRIES.filter((i) => i.slug !== exclude),
    seed,
  ).slice(0, n);
}
