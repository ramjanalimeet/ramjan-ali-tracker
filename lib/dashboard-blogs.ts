export interface DashboardBlog {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publish_at: number | null;
  updated_at: number;
  current_status: "draft" | "scheduled" | "published";
}
