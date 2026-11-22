import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { MainCta } from "@/components/MainCta";
import { GLOBAL_COUNTRIES, getGlobalCity, slugifyPlace } from "@/lib/global-locations";
import { type FaqItem, SITE_URL, faqSchema, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return GLOBAL_COUNTRIES.flatMap((country) =>
    country.cities.map((city) => ({ country: country.slug, city: slugifyPlace(city) })),
  );
}

type Props = { params: Promise<{ country: string; city: string }> };

const fit = (text: string, limit = 158) => {
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1).replace(/\s+\S*$/, "").replace(/,$/, "")}.`;
};

const titles = [
  "Win more nearby searches",
  "Turn local searches into enquiries",
  "Build visibility where customers compare",
  "Be easier to find and trust",
  "Grow a stronger local search presence",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;
  const match = getGlobalCity(countrySlug, citySlug);
  if (!match) return {};
  const { country, city } = match;
  const title = `Local SEO in ${city}, ${country.name}`;
  const description = fit(
    `Local SEO and AI visibility for local businesses in ${city}, ${country.name}. Improve Google Maps rankings, local organic visibility and qualified enquiries.`,
  );
  return pageMeta({ title, description, path: `/locations/countries/${country.slug}/${citySlug}` });
}

export default async function GlobalCityPage({ params }: Props) {
  const { country: countrySlug, city: citySlug } = await params;
  const match = getGlobalCity(countrySlug, citySlug);
  if (!match) notFound();
  const { country, city, index } = match;
  const url = `${SITE_URL}/locations/countries/${country.slug}/${citySlug}`;
  const title = `Local SEO in ${city}, ${country.name}`;
  const description = fit(
    `Local SEO and AI visibility for local businesses in ${city}, ${country.name}. Improve Google Maps rankings, local organic visibility and qualified enquiries.`,
  );
  const primarySectors = [...country.sectors.slice(index % country.sectors.length), ...country.sectors].slice(0, 3);
  const nearbyCities = [...country.cities.slice(index + 1), ...country.cities.slice(0, index)].slice(0, 4);
  const intentExamples = [
    `${primarySectors[0]} in ${city}`,
    `best ${primarySectors[1]} near me`,
    `${primarySectors[2]} ${city}`,
    `local business in ${city}`,
    `${primarySectors[0]} near ${city}`,
  ];
  const faqs: FaqItem[] = [
    {
      q: `What does local SEO in ${city} include?`,
      a: `It covers Google Business Profile optimisation, local keyword and competitor research, technical fixes, city-relevant service content, reviews, listings, local links and map-rank tracking across ${city}.`,
    },
    {
      q: `Can a ${city} business appear in AI recommendations?`,
      a: `It can improve its chances. AI systems look for consistent facts, relevant website content, credible mentions and customer reviews. The same evidence that supports local SEO also helps AI systems understand the business.`,
    },
    {
      q: `Will a ${city} page rank in every nearby city?`,
      a: `No single page should target every market. ${nearbyCities.join(", ")} and other genuine service areas need their own useful evidence when they are important enough to target. Map visibility also depends heavily on the verified business location.`,
    },
  ];

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
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
          { "@type": "ListItem", position: 3, name: country.name, item: `${SITE_URL}/locations/countries/${country.slug}` },
          { "@type": "ListItem", position: 4, name: city, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Local SEO in ${city}, ${country.name}`,
        serviceType: "Local SEO and AI visibility",
        description,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "Place", name: city, containedInPlace: { "@type": "Country", name: country.name } },
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
              <li><Link href={`/locations/countries/${country.slug}`}>{country.name}</Link></li>
              <li aria-current="page">{city}</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">{country.region} · {country.name}</span>
              <h1>Local SEO in <span className="hl">{city}, {country.name}</span>.</h1>
              <p className="lead">
                {titles[index % titles.length]} in {city} with a clearer Google Business Profile, locally relevant
                pages, trusted reviews and consistent business information across the web.
              </p>
              <div className="cta-row"><MainCta /></div>
            </div>
            <aside className="facts">
              <h2>{city} campaign focus</h2>
              <ul>
                <li><b>Primary market</b><span>{city}</span></li>
                <li><b>Country</b><span>{country.name}</span></li>
                <li><b>Search surfaces</b><span>Maps, organic and AI answers</span></li>
                <li><b>Suitable for</b><span>{primarySectors.join(", ")}</span></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">The {city} search market</span>
            <h2>One city, one clear search intent.</h2>
            <p>{country.market}</p>
            <p>
              For a business in {city}, the goal is not generic traffic from everywhere. The useful searches come from
              people who need a nearby provider, compare credible options and are ready to call, visit or enquire.
              The page, profile and citations therefore use {city} only where the business has real relevance.
            </p>
            <p>
              This approach separates {city} from {nearbyCities.slice(0, 2).join(" and ")}. Each market has its own
              canonical URL, heading, metadata, internal links and tracked keyword set, reducing overlap between pages.
            </p>
          </div>
          <div className="panel rv">
            <h3>Local searches to research</h3>
            <ul className="ticks">
              {intentExamples.map((intent) => <li key={intent}>{intent}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Local visibility system</span>
              <h2>What I improve for a {city} business.</h2>
            </div>
            <p>Every task supports either local relevance, trust, prominence or conversion—without creating duplicate city pages.</p>
          </div>
          <div className="grid g3">
            <div className="card rv"><h3>Google Maps</h3><p>Categories, services, photos, business details and review signals aligned with the real {city} location and service area.</p></div>
            <div className="card rv"><h3>Local website</h3><p>Technical fixes and useful service content that answers what {city} customers need before they contact a business.</p></div>
            <div className="card rv"><h3>AI visibility</h3><p>Consistent facts, clear entities and credible mentions that help search and AI systems verify the business.</p></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Related markets</span>
            <h2>Other city guides in {country.name}.</h2>
            <p>
              These links create a country-level topic cluster without making one page target another city. A campaign
              should activate only the markets a business can genuinely serve and support with local evidence.
            </p>
          </div>
          <div className="chips rv">
            {nearbyCities.map((nearby) => (
              <Link className="chip" href={`/locations/countries/${country.slug}/${slugifyPlace(nearby)}`} key={nearby}>
                {nearby} →
              </Link>
            ))}
            <Link className="chip" href={`/locations/countries/${country.slug}`}>All {country.name} cities →</Link>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand title={`Plan your local visibility in ${city}.`} />
    </>
  );
}

