import Link from "next/link";

type HeroProps = {
  name: string;
  context: string;
  title: string;
  summary: string;
  website: string;
  image?: { src: string; alt: string };
};

export function CaseStudyHero({ name, context, title, summary, website, image }: HeroProps) {
  return (
    <header className="case-reading-hero">
      <div className="wrap">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li aria-current="page">{name}</li>
          </ol>
        </nav>
        <div className="case-reading-intro">
          <div>
            <p className="eyebrow">{context}</p>
            <h1>{title}</h1>
            <p className="lead">{summary}</p>
            <a className="btn btn-ghost btn-sm" href={website} target="_blank" rel="noopener">Visit website <span aria-hidden="true">↗</span></a>
          </div>
          {image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="case-reading-photo" src={image.src} alt={image.alt} width={960} height={540} />
          )}
        </div>
      </div>
    </header>
  );
}

export function CaseStudyResults({ source, highlights }: {
  source: string;
  highlights: readonly { label: string; value: string; note?: string }[];
}) {
  return (
    <section className="case-reading-results" aria-labelledby="case-results">
      <div className="wrap">
        <h2 id="case-results">Results at a glance</h2>
        <p>{source}</p>
        <dl className="case-reading-metrics">
          {highlights.map(({ label, value, note }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd><strong>{value}</strong>{note && <small>{note}</small>}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function CaseStudySections({ quote }: { quote?: { text: string; name: string; role: string } }) {
  return (
    <section className="sec tight" aria-labelledby="case-audit">
      <div className="wrap">
        {quote && (
          <blockquote className="quote">
            <p>{quote.text}</p>
            <cite>{quote.name}, {quote.role}</cite>
          </blockquote>
        )}
        <div className="band">
          <h2 id="case-audit">Get a Free SEO Audit</h2>
          <p>Find out which changes could help more customers find your business in search.</p>
          <div className="cta-row">
            <Link className="btn btn-hire" href="/book-a-call">Get a Free SEO Audit <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
