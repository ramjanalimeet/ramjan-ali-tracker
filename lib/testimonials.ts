/**
 * Client testimonials, shown on the home and pricing pages once at least one
 * real quote is added. The section stays hidden while this list is empty.
 *
 * Only add real quotes, with the client's permission, worded exactly as they
 * gave them. Never write or edit testimonials on a client's behalf.
 *
 * Example:
 *   {
 *     quote: "Calls from Google Maps doubled in four months, and I always know what was done.",
 *     name: "Mike R.",
 *     business: "Owner, Lone Star Plumbing",
 *     location: "McKinney, TX",
 *     source: "https://g.page/r/...",   // optional: where the review was originally posted
 *   },
 */
export type Testimonial = {
  quote: string;
  /** Full name or first name and initial, as the client agreed. */
  name: string;
  /** Role and business, or an anonymous description such as "Roofing company owner". */
  business: string;
  location?: string;
  /** Optional link to the original review (Google, Upwork, Fiverr, LinkedIn). */
  source?: string;
};

export const TESTIMONIALS: Testimonial[] = [];
