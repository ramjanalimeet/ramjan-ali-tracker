import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Retired pages from before the Local SEO & AI search repositioning.
  async redirects() {
    return [
      { source: "/seo-services", destination: "/local-seo", permanent: true },
      { source: "/seo-services/technical-seo", destination: "/local-seo", permanent: true },
      { source: "/seo-services/on-page-seo", destination: "/local-seo", permanent: true },
      { source: "/seo-services/content-seo", destination: "/local-seo", permanent: true },
      { source: "/seo-services/link-building", destination: "/local-seo", permanent: true },
      { source: "/seo-services/seo-audits", destination: "/free-seo-audit", permanent: true },
      { source: "/locations", destination: "/local-seo", permanent: true },
      { source: "/locations/texas", destination: "/local-seo", permanent: true },
      { source: "/locations/florida", destination: "/local-seo", permanent: true },
      { source: "/locations/georgia", destination: "/local-seo", permanent: true },
      { source: "/locations/arizona", destination: "/local-seo", permanent: true },
      { source: "/locations/north-carolina", destination: "/local-seo", permanent: true },
      { source: "/blog/local-seo", destination: "/blog", permanent: true },
      { source: "/blog/google-maps", destination: "/blog", permanent: true },
      { source: "/blog/technical-seo", destination: "/blog", permanent: true },
      { source: "/blog/content-seo", destination: "/blog", permanent: true },
      { source: "/blog/seo-strategy", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
