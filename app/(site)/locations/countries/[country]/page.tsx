import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { MainCta } from "@/components/MainCta";
import { GLOBAL_COUNTRIES, getGlobalCountry, slugifyPlace } from "@/lib/global-locations";
import { type FaqItem, SITE_URL, faqSchema, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return GLOBAL_COUNTRIES.map((country) => ({ country: country.slug }));
}

type Props = { params: Promise<{ country: string }> };

const descriptionFor = (name: string) =>
  `Local SEO and AI visibility for local businesses in ${name}. Explore city strategies for Google Maps, organic search and AI recommendations.`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = getGlobalCountry((await params).country);
  if (!country) return {};
  return pageMeta({
    title: `Local SEO in ${country.name} | City Strategies`,
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

      <Faq items={faqs} />
      <CtaBand title={`Build a stronger local presence in ${country.name}.`} />
    </>
  );
}

