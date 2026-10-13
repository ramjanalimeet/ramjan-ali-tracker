import Link from "next/link";
import { CtaBand } from "./CtaBand";
import { JsonLd } from "./JsonLd";
import { PostCards } from "./PostCards";
import { RelatedLinks } from "./RelatedLinks";
import { WhatsAppButton } from "./WhatsAppButton";
import { type Post, formatDate, topicOf } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

/** Page frame for a blog article: header, body, sidebar, related posts and CTA. */
export function ArticleLayout({ post, lead, children }: { post: Post; lead: string; children: React.ReactNode }) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const topic = topicOf(post.topic);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: url,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: topic.name,
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#business` },
        image: `${SITE_URL}/opengraph-image`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="phero">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li aria-current="page">{post.title}</li>
            </ol>
          </nav>
          <Link className="eyebrow" href={`/blog#topic-${topic.id}`} style={{ textDecoration: "none" }}>
            {topic.name}
          </Link>
          <h1 style={{ maxWidth: "22ch", fontSize: "clamp(34px,4.6vw,60px)" }}>{post.title}</h1>
          <p className="lead">{lead}</p>
          <div className="ameta">
            <span>By Ramjan Ali Akash</span>
            <span>{post.minutes} min read</span>
            <span>
              Updated <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
          </div>
        </div>
      </section>
      <section className="sec tight" style={{ paddingTop: 20 }}>
        <div className="wrap art-grid">
          <article className="prose">{children}</article>
          <aside className="aside">
            <div className="panel">
              <h3>Free strategy call</h3>
              <p>
                I&apos;ll review your Google Business Profile, website, AI search presence and top competitors, and show
                you what to fix first.
              </p>
              <Link className="btn btn-dark btn-sm" href="/book-a-call">
                Book a Call →
              </Link>
            </div>
            <div className="panel">
              <h3>Related service</h3>
              <p>{topic.blurb}</p>
              <Link className="btn btn-ghost btn-sm" href={topic.service.href}>
                {topic.service.name} →
              </Link>
            </div>
            <div className="panel">
              <h3>Questions?</h3>
              <p>Message me directly. I reply to every message personally.</p>
              <WhatsAppButton className="btn-sm" />
            </div>
          </aside>
        </div>
      </section>
      <section className="sec tight">
        <div className="wrap">
          <span className="eyebrow">Keep reading</span>
          <PostCards exclude={post.slug} limit={3} style={{ marginTop: 6 }} />
        </div>
      </section>
      <RelatedLinks
        page={`/blog/${post.slug}`}
        topics={[post.topic]}
        posts={0}
        industriesTitle="Guides for your trade"
      />
      <CtaBand title="Want this done for your business?" />
    </>
  );
}
