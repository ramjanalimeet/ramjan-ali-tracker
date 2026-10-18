import Link from "next/link";
import { relatedPosts, seedOf, someIndustries } from "@/lib/links";
import { type TopicId, topicOf } from "@/lib/posts";

/**
 * "Related guides" and "Industries" links shown near the end of service,
 * industry, city and article pages, for internal linking and onward reading.
 */
export function RelatedLinks({
  page,
  topics,
  posts = 3,
  industries = 10,
  industriesTitle = "Industries I work with",
}: {
  /** The current path; seeds which links are picked and excludes the page itself. */
  page: string;
  topics: TopicId[];
  posts?: number;
  industries?: number;
  industriesTitle?: string;
}) {
  const seed = seedOf(page);
  const reads = relatedPosts(topics, posts, seed, page.replace("/blog/", ""));
  const inds = someIndustries(industries, seed, page.replace("/local-seo/", ""));
  return (
    <section className="sec tight related">
      <div className="wrap related-grid">
        {posts > 0 && (
          <div className="rv">
            <span className="eyebrow">Related guides</span>
            <ul className="related-posts">
              {reads.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`}>
                    <span>{topicOf(p.topic).name}</span>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {industries > 0 && (
          <div className="rv">
            <span className="eyebrow">{industriesTitle}</span>
            <div className="chips" style={{ marginTop: 6 }}>
              {inds.map((i) => (
                <Link className="chip" href={`/local-seo/${i.slug}`} key={i.slug}>
                  {i.name}
                </Link>
              ))}
              <Link className="chip" href="/industries">
                All industries →
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
