import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { MainCta } from "@/components/MainCta";
import { AiMock, MapMock } from "@/components/Mocks";
import { GLOBAL_COUNTRIES, getGlobalCountry, slugifyPlace } from "@/lib/global-locations";
import { type FaqItem, SITE_URL, faqSchema, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return GLOBAL_COUNTRIES.map((country) => ({ country: country.slug }));
}

type Props = { params: Promise<{ country: string }> };

const descriptionFor = (name: string) =>
  `Local SEO and AI visibility services in ${name}. Explore city strategies for Maps, organic discovery, enquiries and AI recommendations.`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = getGlobalCountry((await params).country);
  if (!country) return {};
  return pageMeta({
    title: `Local SEO Services in ${country.name} | City Guides`,
    description: descriptionFor(country.name),
    path: `/locations/countries/${country.slug}`,
  });
}

export default async function CountryLocationPage({ params }: Props) {
  const country = getGlobalCountry((await params).country);
  if (!country) notFound();

  const url = `${SITE_URL}/locations/countries/${country.slug}`;
  const description = descriptionFor(country.name);
  const faqs: FaqItem[] = [
    {
      q: `Can you manage local SEO for a business in ${country.name}?`,
      a: `Yes. The campaign is built around the cities and customer areas the business genuinely serves in ${country.name}, using market-relevant search terms, listings and competitors.`,
    },
    {
      q: `Do you create a separate page for every city in ${country.name}?`,
      a: "Only when the business genuinely serves that city and can add useful local evidence. Each page needs its own intent, examples, service context and internal links; changing only the city name is not enough.",
    },
    {
      q: `Which businesses can use local SEO in ${country.name}?`,
      a: `The strategy fits local service companies, clinics, professional firms, automotive businesses, restaurants, hospitality and other businesses customers visit or contact in a defined area.`,
    },
    {
      q: `How is local SEO performance measured in ${country.name}?`,
      a: `Reporting combines city-level map rankings, non-brand organic clicks, calls, forms, review growth and accurate AI mentions. Each city is tracked separately so one strong market does not hide a weaker one.`,
    },
    {
      q: `Can one Google Business Profile rank across all of ${country.name}?`,
      a: `Usually not. Map visibility is strongly tied to the verified location and the searcher's proximity. A multi-location business needs eligible profiles and useful landing pages for its real locations; a service-area business should target only places it genuinely serves.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: `Local SEO in ${country.name}`,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
          { "@type": "ListItem", position: 3, name: country.name, item: url },
        ],
      },
      faqSchema(faqs),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="phero">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li aria-current="page">{country.name}</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">{country.region} · {country.cities.length} city guides</span>
              <h1>Local SEO in <span className="hl">{country.name}</span>.</h1>
              <p className="lead">
                City-specific local SEO and AI visibility for businesses in {country.name}. {country.market}
              </p>
              <div className="cta-row"><MainCta /></div>
            </div>
            <aside className="facts">
              <h2>{country.name} at a glance</h2>
              <ul>
                <li><b>Region</b><span>{country.region}</span></li>
                <li><b>City guides</b><span>{country.cities.length}</span></li>
                <li><b>Key channels</b><span>{country.platforms.slice(0, 3).join(", ")}</span></li>
                <li><b>Good fit</b><span>{country.sectors.slice(0, 3).join(", ")}</span></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec tight alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Choose a market</span>
              <h2>Local SEO city guides for {country.name}.</h2>
            </div>
            <p>Every guide owns one city-level search intent and links only to related markets, helping each page stay clear and useful.</p>
          </div>
          <div className="ind-grid">
            {country.cities.map((city) => (
              <Link className="ind-card rv" href={`/locations/countries/${country.slug}/${slugifyPlace(city)}`} key={city}>
                <b>{city}</b>
                <small>Local SEO &amp; AI visibility in {city}</small>
                <span className="arr" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Market approach</span>
            <h2>Built around how customers search in {country.name}.</h2>
            <p>{country.market}</p>
            <p>
              The starting point is a technically sound site, a complete Google Business Profile and consistent business
              details. From there, service pages, location evidence, reviews and local mentions help Google and AI systems
              understand what the business does and where it is relevant.
            </p>
          </div>
          <div className="panel rv">
            <h3>Core local channels</h3>
            <ul className="ticks">
              {country.platforms.map((platform) => <li key={platform}>{platform}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Search foundations</span>
              <h2>Build a verifiable local presence in {country.name}.</h2>
            </div>
            <p>A strong campaign aligns the website, business profiles and third-party evidence before it expands into more city targets.</p>
          </div>
          <div className="grid g3">
            <article className="card rv"><h3>Accurate business entities</h3><p>Names, services, locations and contact details stay consistent across {country.platforms.slice(0, 3).join(", ")} and the website.</p></article>
            <article className="card rv"><h3>City-specific relevance</h3><p>Each active location has useful service evidence and its own intent instead of duplicated pages covering every city in {country.name}.</p></article>
            <article className="card rv"><h3>Trust and prominence</h3><p>Reviews, local mentions, credentials and first-party proof help customers and search systems validate the business.</p></article>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Maps and local discovery</span>
            <h2>Track visibility city by city in {country.name}.</h2>
            <p>
              A national average cannot show whether customers can find a business in a specific service area. Campaigns
              use city and neighbourhood rank checks, then connect that coverage with calls, forms and visits.
            </p>
            <p>
              The first priority is the market closest to each verified location. Expansion follows only where the business
              has real coverage, operational capacity and evidence customers can trust.
            </p>
          </div>
          <MapMock query={`${country.sectors[0]} in ${country.cities[0]}`} name="Your Business" />
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">AI visibility</span>
            <h2>Make local expertise understandable to AI systems.</h2>
            <p>
              Search and answer engines need corroborated facts. Clear services, consistent profiles, strong local pages,
              reviews and trusted mentions give them evidence about what a business does and where it is relevant.
            </p>
            <p>
              Recommendation checks use repeatable customer questions and verify accuracy, not just whether the business
              name appears once.
            </p>
          </div>
          <AiMock prompt={`Who is a trusted ${country.sectors[1]} provider in ${country.cities[0]}?`} name="Your Business" />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Reporting</span>
              <h2>Measure outcomes across {country.name}.</h2>
            </div>
            <p>Every active city has a defined keyword set, landing-page purpose and conversion view, reducing overlap and making progress easier to judge.</p>
          </div>
          <div className="loc-metrics">
            <article className="loc-metric rv"><b>Map rankings</b><span>Coverage around each verified location</span></article>
            <article className="loc-metric rv"><b>Organic demand</b><span>Non-brand clicks by city and service</span></article>
            <article className="loc-metric rv"><b>Enquiries</b><span>Calls and forms from local pages</span></article>
            <article className="loc-metric rv"><b>AI accuracy</b><span>Correct mentions across tracked prompts</span></article>
          </div>
        </div>
      </section>

      <Faq items={faqs} title={`${country.name} local SEO questions.`} />
      <CtaBand title={`Build a stronger local presence in ${country.name}.`} />
    </>
  );
}

