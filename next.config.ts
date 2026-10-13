import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Retired pages from before the Local SEO & AI search repositioning.
  async redirects() {
    return [
      { source: "/free-seo-audit", destination: "/book-a-call", permanent: true },
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
