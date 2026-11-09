import { sitemapIndex } from "@/lib/sitemaps";

export const dynamic = "force-static";

export function GET() {
  return sitemapIndex();
}
