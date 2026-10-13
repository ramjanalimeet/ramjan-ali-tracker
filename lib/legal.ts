/** Legal pages, in footer order. */
export const LEGAL_PAGES = [
  { href: "/privacy-policy", name: "Privacy Policy" },
  { href: "/terms", name: "Terms of Service" },
  { href: "/cookie-policy", name: "Cookie Policy" },
  { href: "/refund-policy", name: "Cancellation & Refunds" },
  { href: "/disclaimer", name: "Disclaimer" },
  { href: "/editorial-policy", name: "Editorial Policy" },
  { href: "/accessibility", name: "Accessibility" },
] as const;

/** Date the legal pages were last reviewed. Update it whenever a policy changes. */
export const LEGAL_UPDATED = "2026-10-13";

export const OWNER = {
  name: "Ramjan Ali Akash",
  trading: "Ramjan Ali",
  location: "Dhaka, Bangladesh",
  email: "raakash.meet@gmail.com",
};
