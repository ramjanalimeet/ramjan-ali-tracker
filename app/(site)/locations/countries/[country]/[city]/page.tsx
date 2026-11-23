import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { MainCta } from "@/components/MainCta";
import { AiMock, MapMock } from "@/components/Mocks";
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

const marketHeadings = [
  (city: string) => `How local customers compare options in ${city}.`,
  (city: string) => `Build relevance for searches centred on ${city}.`,
  (city: string) => `Turn ${city} search demand into a defined market.`,
  (city: string) => `Make every ${city} signal support the same intent.`,
  (city: string) => `Focus visibility on customers who can take action in ${city}.`,
];

const intentHeadings = [
  (city: string) => `Queries worth targeting in ${city}.`,
  (city: string) => `Find the service searches that matter in ${city}.`,
  (city: string) => `Separate research traffic from buying intent in ${city}.`,
  (city: string) => `Map the words ${city} customers use before they enquire.`,
  (city: string) => `Build a practical local keyword set for ${city}.`,
];

const localApproaches = [
  (city: string) => `The useful searches in ${city} come from people comparing nearby providers and deciding who to contact. The profile, landing pages and citations therefore reinforce real service availability rather than chasing traffic from places the business cannot support.`,
  (city: string) => `A ${city} campaign starts with proximity and eligibility, then strengthens service relevance, reputation and conversion. That sequence helps the business compete for customers who can realistically call, book or visit.`,
  (city: string) => `Visibility in ${city} is treated as a connected system: an eligible profile, a crawlable website, accurate listings and persuasive evidence. No single city page can compensate for missing fundamentals.`,
  (city: string) => `Customers in ${city} see profiles, reviews, service pages and third-party mentions before choosing. The campaign makes those touchpoints consistent so each one supports the same local promise.`,
  (city: string) => `The target is qualified discovery inside ${city}, not generic visits from everywhere. Keywords and pages are prioritised by service value, local relevance and whether the business can fulfil the enquiry.`,
];

const titleFor = (city: string, country: string) => {
  const full = `Local SEO Services in ${city}, ${country} | Ramjan Ali Akash`;
  return full.length <= 65 ? full : `Local SEO in ${city}, ${country}`;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;
  const match = getGlobalCity(countrySlug, citySlug);
  if (!match) return {};
  const { country, city } = match;
  const title = titleFor(city, country.name);
  const description = fit(
    `Local SEO and AI visibility services in ${city}, ${country.name}. Improve Maps rankings, organic discovery and qualified enquiries for local businesses.`,
  );
  return pageMeta({ title, description, path: `/locations/countries/${country.slug}/${citySlug}` });
}

export default async function GlobalCityPage({ params }: Props) {
  const { country: countrySlug, city: citySlug } = await params;
  const match = getGlobalCity(countrySlug, citySlug);
  if (!match) notFound();
  const { country, city, index } = match;
  const url = `${SITE_URL}/locations/countries/${country.slug}/${citySlug}`;
  const title = titleFor(city, country.name);
  const description = fit(
    `Local SEO and AI visibility services in ${city}, ${country.name}. Improve Maps rankings, organic discovery and qualified enquiries for local businesses.`,
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
  const contentAngles = [
    `Service pages that explain what a ${primarySectors[0]} provider offers, who it is for and how customers in ${city} can enquire.`,
    `Proof-led pages for ${primarySectors[1]} businesses, using real qualifications, reviews, photos and service details rather than generic city copy.`,
    `Useful answers around pricing, availability and selection criteria for people comparing ${primarySectors[2]} options in ${city}.`,
  ];
  const metrics = [
    ["Map coverage", `Rank-grid movement across ${city}`],
    ["Qualified demand", "Calls and forms by service page"],
    ["Organic growth", "Non-brand clicks and impressions"],
    ["AI presence", "Accurate mentions in answer engines"],
  ];
  const variant = index % marketHeadings.length;
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
    {
      q: `How long does local SEO take in ${city}?`,
      a: `Most businesses need several months of consistent work. Timing depends on the current profile, website quality, review strength and competition in ${city}. Early technical and profile fixes can appear sooner, while broader map coverage and authority usually take longer.`,
    },
    {
      q: `How do you measure a ${city} local SEO campaign?`,
      a: `I track map rankings from multiple points in ${city}, organic clicks, calls, forms, indexed pages, review growth and AI mentions. Reporting separates visibility from enquiries so the campaign stays focused on useful business outcomes.`,
    },
    {
      q: `Do you need an office in ${city} to rank locally?`,
      a: `A verified local address strongly influences map visibility, but service-area businesses can hide their address and define genuine coverage. Website pages should describe real services and evidence in ${city}; they cannot replace an eligible Google Business Profile location.`,
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
            <h2>{marketHeadings[variant](city)}</h2>
            <p>{country.market}</p>
            <p>{localApproaches[variant](city)}</p>
            <p>
              This approach separates {city} from {nearbyCities.slice(0, 2).join(" and ")}. Each market has its own
              canonical URL, heading, metadata, internal links and tracked keyword set, reducing overlap between pages.
            </p>
          </div>
          <MapMock query={`${primarySectors[0]} in ${city}`} name="Your Business" />
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Search intent</span>
            <h2>{intentHeadings[variant](city)}</h2>
            <p>
              A useful keyword set combines the service, the place and the reason someone is searching. Broad traffic
              is filtered out so the campaign can focus on searches that can realistically lead to a call, booking or visit.
            </p>
            <p>
              Language and wording are checked against actual customer behaviour in {country.name}; the same phrase is
              not assumed to work unchanged in every country or city.
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
              <span className="eyebrow">Useful local content</span>
              <h2>Content built for real decisions in {city}.</h2>
            </div>
            <p>Each page has a defined job, supports a genuine service and adds evidence that a generic location swap cannot provide.</p>
          </div>
          <div className="grid g3">
            {contentAngles.map((text, i) => (
              <article className="card rv" key={text}>
                <span className="ic" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{primarySectors[i]} content</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">AI recommendations</span>
            <h2>Help answer engines verify a {city} business.</h2>
            <p>
              AI visibility starts with clear entities and corroborated facts: the same business name, services,
              location, expertise and reputation should be understandable across the site, profiles and trusted listings.
            </p>
            <p>
              I also check whether answers describe the business accurately. A mention only helps when the service,
              location and reason for recommending it are correct.
            </p>
          </div>
          <AiMock prompt={`Who is a trusted ${primarySectors[1]} provider in ${city}?`} name="Your Business" />
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Measurement</span>
              <h2>Prove what local visibility produces in {city}.</h2>
            </div>
            <p>Reporting connects rankings and discovery to actions a business can value, instead of treating traffic as the final result.</p>
          </div>
          <div className="loc-metrics">
            {metrics.map(([label, detail]) => (
              <article className="loc-metric rv" key={label}>
                <b>{label}</b>
                <span>{detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
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

      <Faq items={faqs} title={`${city} local SEO questions.`} />
      <CtaBand title={`Plan your local visibility in ${city}.`} />
    </>
  );
}

