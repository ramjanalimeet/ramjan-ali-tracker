import type { Post } from "@/lib/posts";

/** An illustrative search or reporting example placed at the relevant point in the article. */
export function ArticleGraphic({ post }: { post: Post }) {
  const { title, caption, steps } = post.graphic;
  return (
    <figure className="article-guide">
      <img
        src={`/assets/blog/${post.slug}-context.webp`}
        width={1600}
        height={1040}
        alt={`${title}. A text version follows.`}
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        <p>{caption}</p>
        <details>
          <summary>Read the example as text</summary>
          <ul>
            {steps.map((step) => <li key={step}>{step}</li>)}
          </ul>
        </details>
      </figcaption>
    </figure>
  );
}
