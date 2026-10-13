import Link from "next/link";
import { POSTS, type Post, formatDate, topicOf } from "@/lib/posts";

/** One article card. Set `reveal={false}` where cards mount after load (they would miss the scroll-in effect). */
export function PostCard({ post, reveal = true }: { post: Post; reveal?: boolean }) {
  return (
    <Link className={reveal ? "card post-card rv" : "card post-card"} href={`/blog/${post.slug}`}>
      <span className="tag">
        {topicOf(post.topic).name} · {post.minutes} min read
      </span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span className="post-foot">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="go">
          Read article <span>→</span>
        </span>
      </span>
    </Link>
  );
}

/** A grid of article cards. Pass `exclude` to leave out the current post, `limit` to cap the count. */
export function PostCards({
  exclude,
  limit,
  style,
}: {
  exclude?: string;
  limit?: number;
  style?: React.CSSProperties;
}) {
  const posts = POSTS.filter((p) => p.slug !== exclude).slice(0, limit);
  return (
    <div className="grid g3" style={style}>
      {posts.map((p) => (
        <PostCard post={p} key={p.slug} />
      ))}
    </div>
  );
}
