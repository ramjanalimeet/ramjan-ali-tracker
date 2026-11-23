import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedBlog } from "@/lib/published-blogs";
import { pageMeta } from "@/lib/site";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await publishedBlog(slug);
  if (!post) notFound();
  return pageMeta({ title: post.title, description: post.excerpt || post.body.slice(0, 155), path: `/blog/${post.slug}` });
}

export default async function DashboardBlogPage({ params }: Props) {
  const post = await publishedBlog((await params).slug);
  if (!post) notFound();
  return (
    <article className="sec">
      <div className="wrap">
        <Link href="/blog">All articles</Link>
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div style={{ whiteSpace: "pre-wrap", maxWidth: "72ch" }}>{post.body}</div>
      </div>
    </article>
  );
}
