import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  // Retired pages from before the Local SEO & AI search repositioning.
  async redirects() {
    return [
      { source: "/free-seo-audit", destination: "/?book", permanent: true },
      // Booking is a popup on every page now; /book-a-call opens it on the home page.
      { source: "/book-a-call", destination: "/?book", permanent: false },
      { source: "/seo-services/content-seo", destination: "/local-seo", permanent: true },
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
    ];
  },
};

export default nextConfig;
