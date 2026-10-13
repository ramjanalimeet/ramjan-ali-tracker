import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { LEGAL_PAGES, LEGAL_UPDATED, OWNER } from "@/lib/legal";
import { formatDate } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

/** Shared frame for legal pages: header, summary, contents, body and links to the other policies. */
export function LegalLayout({
  path,
  title,
  intro,
  summary,
  sections,
  children,
}: {
  path: string;
  title: string;
  intro: string;
  /** Plain-English key points shown at the top. */
  summary: string[];
  /** [id, heading] pairs for the contents list; headings must match the h2s in children. */
  sections: [string, string][];
  children: React.ReactNode;
}) {
  const url = `${SITE_URL}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description: intro,
        dateModified: LEGAL_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
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
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
          <span className="eyebrow">Legal</span>
          <h1 style={{ fontSize: "clamp(36px,4.6vw,58px)" }}>{title}</h1>
          <p className="lead">{intro}</p>
          <div className="ameta">
            <span>
              Last updated <time dateTime={LEGAL_UPDATED}>{formatDate(LEGAL_UPDATED)}</time>
            </span>
            <span>{OWNER.trading}</span>
          </div>
        </div>
      </section>
      <section className="sec tight" style={{ paddingTop: 20 }}>
        <div className="wrap art-grid">
          <article className="prose legal">
            <div className="note takeaways">
              <p>
                <strong>In short</strong>
              </p>
              <ul>
                {summary.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <nav className="toc" aria-label="Contents">
              <b>Contents</b>
              <ol>
                {sections.map(([id, h]) => (
                  <li key={id}>
                    <a href={`#${id}`}>{h}</a>
                  </li>
                ))}
              </ol>
            </nav>
            {children}
          </article>
          <aside className="aside">
            <div className="panel">
              <h2 className="h3">Questions?</h2>
              <p>Email me about this policy or your data, and I will reply within 24 hours.</p>
              <a className="btn btn-dark btn-sm" href={`mailto:${OWNER.email}`}>
                Email me
              </a>
            </div>
            <div className="panel">
              <h2 className="h3">Legal pages</h2>
              <ul className="legal-links">
                {LEGAL_PAGES.map((l) => (
                  <li key={l.href}>{l.href === path ? <b>{l.name}</b> : <Link href={l.href}>{l.name}</Link>}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
