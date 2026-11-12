import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { MapMock } from "@/components/Mocks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CITIES, type City, type TradeKey, citiesIn, getCity, groupOf } from "@/lib/cities";
import {
  AREA_INTRO,
  LOCALES,
  PLAN_OUTRO,
  PLAN_TICKS,
  SEARCH_INTRO,
  TIMING,
  TRADE_INTRO,
  TRADE_LINKS,
} from "@/lib/cities/locales";
import { fromPrice, usd } from "@/lib/pricing";
import { type FaqItem, SITE_URL, faqSchema, pageMeta } from "@/lib/site";

// Only the cities in lib/cities exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

type Props = { params: Promise<{ city: string }> };

const fill = (s: string, c: City) =>
  s
    .replaceAll("{n}", c.name)
    .replaceAll("{m}", c.metro)
    .replaceAll("{a0}", c.areas[0])
    .replaceAll("{a1}", c.areas[1])
    .replaceAll("{a2}", c.areas[2]);

const titleCase = (s: string) => s.replace(/\b\w/g, (ch) => ch.toUpperCase());

/** Trims a description to Google's ~160 characters at a word boundary. */
function fit(text: string, limit = 160) {
  if (text.length <= limit) return text;
  return `${text
    .slice(0, limit - 1)
    .replace(/\s+\S*$/, "")
    .replace(/,$/, "")}.`;
}

function seo(c: City) {
  const L = LOCALES[c.locale];
  const base = `${c.place} Local SEO for ${titleCase(L.noun)}`;
  const title = `${base} | Ramjan Ali Akash`.length <= 60 ? `${base} | Ramjan Ali Akash` : base;
  const description = fit(
    `Local SEO for ${c.place} ${L.tradesDesc}. Rank in the map pack across ${c.areas[0]}, ${c.areas[1]} and ${c.areas[2]}. Book a free call.`,
  );
  return { title, description };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCity((await params).city);
  if (!c) return {};
  const { title, description } = seo(c);
  return {
    ...pageMeta({ title, description, path: `/locations/${c.slug}` }),
    other: { ...(c.geoRegion ? { "geo.region": c.geoRegion } : {}), "geo.placename": c.name },
  };
}

function faqsFor(c: City): FaqItem[] {
  return [
    ...c.faqs,
    { q: `How long does local SEO take in ${c.name}?`, a: fill(TIMING[c.competition] ?? TIMING.Medium, c) },
    {
      q: `You are based in Bangladesh. Can you really do local SEO for ${c.name}?`,
      a: `Yes. Local SEO is done through your Google Business Profile, website, citations, reviews and links, all of which I manage remotely. Local knowledge comes from keyword data, map-rank tracking across your service area, competitor research, and from you and your team. ${LOCALES[c.locale].hours}`,
    },
  ];
}

export default async function CityPage({ params }: Props) {
  const c = getCity((await params).city);
  if (!c) notFound();

  const L = LOCALES[c.locale];
  const labels = { ...L.labels, ...c.labels };
  const url = `${SITE_URL}/locations/${c.slug}`;
  const group = groupOf(c.group);
  const { title, description } = seo(c);
  const faqs = faqsFor(c);

  const allTrades = Object.keys(TRADE_LINKS) as TradeKey[];
  const trades = [
    ...(c.focus as TradeKey[]).filter((t) => c.trades[t]),
    ...allTrades.filter((t) => c.trades[t] && !c.focus.includes(t)),
  ];
  const queries = [
    ...new Set([...trades.flatMap((t) => L.queries[t].map((q) => q.replace("{c}", c.queryName))), ...c.queries]),
  ].slice(0, 14);

  const groupCities = citiesIn(c.group);
  const at = groupCities.findIndex((x) => x.slug === c.slug);
  const siblings = [...groupCities.slice(at + 1), ...groupCities.slice(0, at)];
  const siblingByName = new Map(siblings.map((x) => [x.name, x]));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
          { "@type": "ListItem", position: 3, name: c.name, item: url },
        ],
      },
      {
        "@type": "Service",
        name: `Local SEO in ${c.place}`,
        description,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        serviceType: `Local SEO for ${L.noun}`,
        areaServed: {
          "@type": "City",
          name: c.name,
          containedInPlace: {
            "@type": c.adminType,
            name: c.adminName,
            containedInPlace: { "@type": "Country", name: c.country },
          },
        },
      },
      faqSchema(faqs),
    ],
  };

  const facts: [string, string][] = [
    [c.admin[0], c.admin[1]],
    ["Wider area", c.metro],
    ["Nearby", c.areas.slice(0, 4).join(", ")],
    [
      "Top demand",
      trades
        .slice(0, 3)
        .map((t) => labels[t].replace(" SEO", ""))
        .join(", "),
    ],
  ];

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
                <Link href="/locations">Locations</Link>
              </li>
              <li aria-current="page">{c.name}</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Local SEO · {c.place}</span>
              <h1>
                Local SEO for <span className="hl">{c.name}</span> {L.noun}.
              </h1>
              <p className="lead">{c.lead}</p>
              <div className="cta-row">
                <WhatsAppButton />
                <Link className="btn btn-dark" href="/book-a-call">
                  Book a Call
                </Link>
              </div>
            </div>
            <aside className="facts">
              <h2>{c.name} at a glance</h2>
              <ul>
                {facts.map(([k, v]) => (
                  <li key={k}>
                    <b>{k}</b>
                    <span>{v}</span>
                  </li>
                ))}
                <li>
                  <b>Price</b>
                  <span>
                    From {usd(fromPrice())}/month. <Link href="/pricing">See plans</Link>
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">The {c.name} market</span>
            <h2>{c.headline}</h2>
            {c.market.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <MapMock query={c.query} name="Your Business" />
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">By trade</span>
              <h2>
                Local SEO for {c.name} {L.noun}, by trade.
              </h2>
            </div>
            <p>{fill(TRADE_INTRO[c.v.trade], c)}</p>
          </div>
          <div className="grid g3">
            {trades.map((t, i) => (
              <Link className="card rv" href={TRADE_LINKS[t]} key={t}>
                <span className="ic" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>
                  {labels[t]} in {c.name}
                </h3>
                <p>{c.trades[t]}</p>
                <span className="go">
                  Learn more <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Search demand</span>
            <h2>What {c.name} customers type into Google.</h2>
            <p>{fill(SEARCH_INTRO[c.v.search], c)}</p>
            <p>{c.searchNote}</p>
          </div>
          <div className="panel rv">
            <h3>Searches I target in {c.name}</h3>
            <ul className="ticks">
              {queries.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Service area</span>
              <h2>
                {L.areasWord} and towns around {c.name}.
              </h2>
            </div>
            <p>{fill(AREA_INTRO[c.v.area], c)}</p>
          </div>
          <div className="chips rv">
            {[c.name, ...c.areas].map((a) => {
              const sib = siblingByName.get(a);
              return sib ? (
                <Link className="chip" href={`/locations/${sib.slug}`} key={a}>
                  {a} →
                </Link>
              ) : (
                <span className="chip" key={a}>
                  {a}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Your {c.name} plan</span>
            <h2>What I do for {c.name} businesses.</h2>
            <p>{c.plan}</p>
            <p>{fill(PLAN_OUTRO[c.v.outro], c)}</p>
          </div>
          <div className="panel rv">
            <h3>Included in a {c.name} plan</h3>
            <ul className="ticks">
              {PLAN_TICKS[c.v.ticks].map((t) => (
                <li key={t}>{fill(t, c)}</li>
              ))}
            </ul>
            <div className="cta-row">
              <Link className="btn btn-ghost btn-sm" href="/pricing">
                See pricing <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} title={`${c.name} local SEO questions.`} />

      <section className="sec tight">
        <div className="wrap rv">
          <span className="eyebrow">More {group?.name} cities</span>
          <div className="chips" style={{ marginTop: 6 }}>
            {siblings.slice(0, 9).map((x) => (
              <Link className="chip" href={`/locations/${x.slug}`} key={x.slug}>
                {x.name} →
              </Link>
            ))}
            <Link className="chip" href={`/locations#${c.group}`}>
              All locations →
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinks
        page={`/locations/${c.slug}`}
        topics={["local-seo", "google-maps"]}
        posts={2}
        industriesTitle="Industries I work with"
      />
      <CtaBand title={`Want more calls from ${c.name} searches?`} />
    </>
  );
}
