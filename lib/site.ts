import type { Metadata } from "next";

export const SITE_URL = "https://ramjan-akash.vercel.app";
export const SITE_NAME = "Ramjan Ali Akash";
export const EMAIL = "raakash.meet@gmail.com";
export const WHATSAPP_URL = "https://wa.me/8801839295114";
export const BOOKING_URL = "https://cal.com/ramjanalimeet/book-a-call";
export const OG_ALT = "Ramjan Ali - Local SEO and AI search visibility for home service businesses";

export const TRADES = [
  { slug: "roofing-seo", name: "Roofing SEO", blurb: "Rank for roof repair, replacement and storm work" },
  { slug: "plumbing-seo", name: "Plumbing SEO", blurb: "Win emergency and high-value plumbing calls" },
  { slug: "septic-seo", name: "Septic SEO", blurb: "Own pumping, inspection and install searches" },
  { slug: "hvac-seo", name: "HVAC SEO", blurb: "Rank for AC, heating and install searches" },
  { slug: "home-services-seo", name: "Home Services SEO", blurb: "Electricians, garage doors, pest control and more" },
] as const;

export const SOCIAL = [
  { label: "YouTube", href: "https://www.youtube.com/@Ramjanali-Akash" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ramjanalimeet/" },
  { label: "Facebook", href: "https://www.facebook.com/RamjanaliMeet" },
  { label: "Instagram", href: "https://www.instagram.com/ramjanali_akash/" },
  { label: "TikTok", href: "https://www.tiktok.com/@ramjanali_akash" },
  { label: "X", href: "https://x.com/RamjanaliMeet" },
] as const;

const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: OG_ALT };

type MetaInput = { title: string; description: string; path: string; type?: "website" | "article" };

/** Title, description, canonical, Open Graph and Twitter tags for one page. */
export function pageMeta({ title, description, path, type = "website" }: MetaInput): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type, siteName: SITE_NAME, title, description, url, locale: "en_US", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

export type FaqItem = { q: string; a: string };

export function faqSchema(items: readonly FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
