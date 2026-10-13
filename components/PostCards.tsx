import Link from "next/link";
import { POSTS } from "@/lib/posts";

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
        <Link className="card rv" href={`/blog/${p.slug}`} key={p.slug}>
          <span className="tag">
            {p.tag} · {p.minutes} min read
          </span>
          <h3>{p.title}</h3>
          <p>{p.excerpt}</p>
          <span className="go">
            Read article <span>→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
