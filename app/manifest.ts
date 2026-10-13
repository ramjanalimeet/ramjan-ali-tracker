import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ramjan Ali | Local SEO & AI Search Visibility",
    short_name: "Ramjan Ali",
    description: "Local SEO and AI search visibility for home service businesses.",
    start_url: "/",
    display: "browser",
    background_color: "#F2F3F0",
    theme_color: "#F2F3F0",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
