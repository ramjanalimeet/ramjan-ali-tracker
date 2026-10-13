import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ALL_INDUSTRIES, CATEGORIES } from "@/lib/industries";
import { SITE_URL, pageMeta } from "@/lib/site";

const TITLE = "Industries | Local SEO & AI Search for 60+ Home Service Trades";
const DESCRIPTION = `Local SEO and GEO & AI visibility for ${ALL_INDUSTRIES.length} home service industries, from roofers, plumbers and HVAC to pest control, pools and cleaning.`;

export const metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/industries" });

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/industries#webpage`,
      url: `${SITE_URL}/industries`,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
      ],
    },
    {
      "@type": "ItemList",
      itemListElement: ALL_INDUSTRIES.map((i, n) => ({
        "@type": "ListItem",
        position: n + 1,
        name: i.name,
        url: `${SITE_URL}/local-seo/${i.slug}`,
      })),
    },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={SCHEMA} />
      <section className="phero">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Industries</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Industries</span>
              <h1>
                Built for <span className="hl">{ALL_INDUSTRIES.length} home service</span> trades.
              </h1>
              <p className="lead">
                Every trade searches differently. Roofers chase storms, pool companies plan for summer, locksmiths fight
                fake listings. Pick yours to see how I get it found on Google, Google Maps and in AI search.
              </p>
              <div className="cta-row">
                <WhatsAppButton />
                <Link className="btn btn-ghost" href="/book-a-call">
                  Book a call
                </Link>
              </div>
            </div>
          </div>
          <nav className="chips ind-jump" aria-label="Industry categories">
            {CATEGORIES.map((c) => (
              <a className="chip" href={`#${c.id}`} key={c.id}>
                {c.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {CATEGORIES.map((c, ci) => {
        const items = ALL_INDUSTRIES.filter((i) => i.category === c.id);
        return (
          <section className={ci % 2 ? "sec tight alt" : "sec tight"} id={c.id} key={c.id}>
            <div className="wrap">
              <div className="ind-head rv">
                <h2>{c.name}</h2>
                <span className="muted">{items.length} industries</span>
              </div>
              <div className="ind-grid">
                {items.map((i) => (
                  <Link className="ind-card rv" href={`/local-seo/${i.slug}`} key={i.slug}>
                    <b>{i.name}</b>
                    <small>{i.blurb}</small>
                    <span className="arr" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand
        title="Don't see your trade?"
        text="The same playbook works for any home service business. Book a free audit and I will show you exactly how customers search for your trade, and where you stand."
      />
    </>
  );
}
