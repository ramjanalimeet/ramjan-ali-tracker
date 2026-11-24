import type { Post } from "@/lib/posts";

/** An illustrative search or reporting example placed at the relevant point in the article. */
export function ArticleGraphic({ post }: { post: Post }) {
  const { title, caption, steps } = post.graphic;
  return (
    <figure className="article-guide">
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={`/assets/blog/${post.slug}-diagram-mobile-pale.webp`}
          width={700}
          height={post.graphic.mobileHeight}
        />
        <img
          src={`/assets/blog/${post.slug}-diagram-pale.webp`}
          width={1360}
          height={post.graphic.height}
          alt={`${title}. A text version follows.`}
          loading="lazy"
          decoding="async"
        />
      </picture>
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
