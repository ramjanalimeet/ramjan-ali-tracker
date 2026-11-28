import type { NextConfig } from "next";
import { RETIRED_CITY_SLUGS } from "./lib/cities";
import { ALSO_SERVED } from "./lib/industries";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const PRIVATE_ROBOTS_HEADER = { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" };

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      { source: "/admin/:path*", headers: [PRIVATE_ROBOTS_HEADER] },
      { source: "/api/:path*", headers: [PRIVATE_ROBOTS_HEADER] },
      {
        source: "/robots.txt",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" }],
      },
    ];
  },
  // Retired pages from before the Local SEO & AI search repositioning.
  async redirects() {
    return [
      { source: "/free-seo-audit", destination: "/?book", permanent: true },
      // Booking is a popup on every page now; /book-a-call opens it on the home page.
      { source: "/book-a-call", destination: "/?book", permanent: true },
      // Core services moved under /seo-services with the rest of the service pages.
      { source: "/local-seo", destination: "/seo-services/local-seo", permanent: true },
      { source: "/ai-search", destination: "/seo-services/ai-visibility", permanent: true },
      { source: "/ai-visibility", destination: "/seo-services/ai-visibility", permanent: true },
      { source: "/seo-services/ai-search", destination: "/seo-services/ai-visibility", permanent: true },
      { source: "/seo-services/content-seo", destination: "/seo-services/local-seo", permanent: true },
      { source: "/locations/texas", destination: "/locations", permanent: true },
      { source: "/locations/florida", destination: "/locations", permanent: true },
      { source: "/locations/georgia", destination: "/locations", permanent: true },
      { source: "/locations/arizona", destination: "/locations", permanent: true },
      { source: "/locations/north-carolina", destination: "/locations", permanent: true },
      { source: "/blog/local-seo", destination: "/blog", permanent: true },
      { source: "/blog/google-maps", destination: "/blog", permanent: true },
      { source: "/blog/technical-seo", destination: "/blog", permanent: true },
      { source: "/blog/content-seo", destination: "/blog", permanent: true },
      { source: "/blog/seo-strategy", destination: "/blog", permanent: true },
      // Trades without a dedicated page are listed on /industries.
      ...ALSO_SERVED.map((i) => ({ source: `/local-seo/${i.slug}`, destination: "/industries", permanent: true })),
      // City pages outside the US market.
      ...RETIRED_CITY_SLUGS.map((slug) => ({ source: `/locations/${slug}`, destination: "/locations", permanent: true })),
    ];
  },
};

export default nextConfig;
