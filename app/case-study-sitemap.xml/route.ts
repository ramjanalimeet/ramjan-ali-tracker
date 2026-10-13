import { sitemap } from "@/lib/sitemaps";

export const dynamic = "force-static";

export function GET() {
  return sitemap("case-study");
}
