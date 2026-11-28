import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { MainCta } from "@/components/MainCta";
import { AiMock, MapMock } from "@/components/Mocks";
import { COUNTRY_DEEP } from "@/lib/countries-deep";
import { GLOBAL_COUNTRIES, getGlobalCity, slugifyPlace } from "@/lib/global-locations";
import { getCityGuide } from "@/lib/global-cities";
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

const titleFor = (city: string, country: string) => {
  const full = `Local SEO Services in ${city}, ${country} | Ramjan Ali Akash`;
  return full.length <= 65 ? full : `Local SEO in ${city}, ${country}`;
};

const fallbackDescription = (city: string, country: string) =>
  fit(
    `Local SEO and AI visibility services in ${city}, ${country}. Improve Maps rankings, organic discovery and qualified enquiries for local businesses.`,
  );

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;
  const match = getGlobalCity(countrySlug, citySlug);
  if (!match) return {};
  const { country, city } = match;
  const guide = getCityGuide(country.slug, citySlug);
  return pageMeta({
    title: titleFor(city, country.name),
    description: guide ? fit(guide.summary) : fallbackDescription(city, country.name),
    path: `/locations/countries/${country.slug}/${citySlug}`,
  });
}

export default async function GlobalCityPage({ params }: Props) {
  const { country: countrySlug, city: citySlug } = await params;
  const match = getGlobalCity(countrySlug, citySlug);
  if (!match) notFound();
  const { country, city, index } = match;
  const guide = getCityGuide(country.slug, citySlug);
  const url = `${SITE_URL}/locations/countries/${country.slug}/${citySlug}`;
  const title = titleFor(city, country.name);
  const description = guide ? fit(guide.summary) : fallbackDescription(city, country.name);
  const sectors =
    guide?.sectors ?? [...country.sectors.slice(index % country.sectors.length), ...country.sectors].slice(0, 3);
  const queries = guide?.queries ?? [`${sectors[0]} ${city}`, `${sectors[1]} near me`, `${sectors[2]} ${city}`];
  const otherCities = [...country.cities.slice(index + 1), ...country.cities.slice(0, index)].slice(0, 6);

  const faqs: FaqItem[] = [
    ...(guide?.faqs ?? []),
    {
      q: `Do you need an office in ${city} to rank in the map pack?`,
      a: `A verified address in or near ${city} strongly influences map rankings. Service-area businesses can hide their address and list the areas they genuinely cover, but website pages cannot replace an eligible Google Business Profile location.`,
    },
    {
      q: `How do you measure a ${city} local SEO campaign?`,
      a: `Map rankings are checked on a grid across ${city}${guide ? `, including ${guide.areas.slice(0, 2).map((a) => a.name).join(" and ")}` : ""}, alongside calls, forms, non-brand clicks, review growth and how accurately AI tools describe the business.`,
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
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "Country", name: country.name },
          ...(guide ? { containsPlace: guide.areas.map((a) => ({ "@type": "Place", name: a.name })) } : {}),
        },
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
                {guide?.lead ??
                  `Win more nearby searches in ${city} with a clearer Google Business Profile, locally relevant pages, trusted reviews and consistent business information across the web.`}
              </p>
              <div className="cta-row"><MainCta /></div>
            </div>
            <aside className="facts">
              <h2>{city} at a glance</h2>
              <ul>
                <li><b>Country</b><span>{country.name}</span></li>
                {guide && <li><b>Key areas</b><span>{guide.areas.slice(0, 3).map((a) => a.name).join(", ")}</span></li>}
                {guide && <li><b>Nearby</b><span>{guide.nearby.slice(0, 3).join(", ")}</span></li>}
                <li><b>Most competitive</b><span>{sectors.join(", ")}</span></li>
                <li><b>Search surfaces</b><span>Google Maps, organic results and AI answers</span></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {guide && (
        <section className="sec">
          <div className="wrap split">
            <div className="body rv">
              <span className="eyebrow">The {city} market</span>
              <h2>What local search looks like in {city}.</h2>
              {guide.profile.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <MapMock query={queries[0]} name="Your Business" />
          </div>
        </section>
      )}

      {guide && (
        <section className="sec alt">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <span className="eyebrow">Areas</span>
                <h2>The parts of {city} customers search by.</h2>
              </div>
              <p>
                Map rankings change street by street, so each area is tracked on its own. These are the places worth
                checking first, and the ones that may deserve a page of their own.
              </p>
            </div>
            <div className="grid g3">
              {guide.areas.map((a) => (
                <div className="card rv" key={a.name}>
                  <h3>{a.name}</h3>
                  <p>{a.note}</p>
                </div>
              ))}
              <div className="card rv">
                <h3>Around {city}</h3>
                <p>
                  Nearby: {guide.nearby.join(", ")}. A business based in {city} usually ranks best close to its address,
                  so these need real coverage and proof before they get their own pages.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">Search language</span>
            <h2>How people in {city} search.</h2>
            {guide && <p>{guide.language}</p>}
            <p>
              The keyword set is built from the service, the place and the reason someone is searching, then checked
              against real search data for {city}. Broad traffic that cannot turn into a call, booking or visit is left
              out.
            </p>
          </div>
          <div className="panel rv">
            <h3>Example {city} searches</h3>
            <ul className="ticks">
              {queries.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {guide && (
        <section className="sec alt">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <span className="eyebrow">Local demand</span>
                <h2>When {city} searches change.</h2>
              </div>
              <p>Pages, profile posts and review requests go in before each busy period, because rankings take weeks to build.</p>
            </div>
            <div className="grid g3">
              {guide.demand.map((d) => (
                <div className="card rv" key={d.when}>
                  <h3>{d.when}</h3>
                  <p>{d.what}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {COUNTRY_DEEP[country.slug] && (
        <section className="sec tight">
          <div className="wrap rv">
            <span className="eyebrow">Listings to keep consistent</span>
            <p className="muted" style={{ margin: "6px 0 12px" }}>
              Beyond Google, these are the directories in {country.name} where businesses in {city} should keep their details identical.{" "}
              <Link href={`/locations/countries/${country.slug}`}>How local search works in {country.name} →</Link>
            </p>
            <div className="chips">
              {COUNTRY_DEEP[country.slug].directories.map((d) => (
                <span className="chip" key={d.name}>
                  {d.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sec alt">
        <div className="wrap split">
          <div className="body rv">
            <span className="eyebrow">AI recommendations</span>
            <h2>Get named when {city} customers ask AI.</h2>
            <p>
              AI tools recommend the local businesses they can verify: the same name, services and location across the
              website, Google Business Profile and trusted listings, backed by detailed reviews.
            </p>
            <p>
              A fixed set of {city} questions is checked every month, so reporting shows whether the business is named
              and whether the description is accurate.
            </p>
          </div>
          <AiMock prompt={`Who are the best ${sectors[0]} in ${city}?`} name="Your Business" />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">What I do</span>
              <h2>The work behind your {city} campaign.</h2>
            </div>
            <p>Every task supports local relevance, trust, prominence or conversion for the real {city} location.</p>
          </div>
          <div className="grid g3">
            <div className="card rv"><h3>Google Business Profile</h3><p>Categories, services, service areas, photos, posts and review replies aligned with the real {city} location.</p></div>
            <div className="card rv"><h3>Local pages</h3><p>Service pages and area pages{guide ? ` for places like ${guide.areas[0].name}` : ""} that answer what customers need before they get in touch.</p></div>
            <div className="card rv"><h3>Reporting</h3><p>Map rank grids across {city}, calls and forms by page, non-brand clicks and AI mentions in one plain-English monthly report.</p></div>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap rv">
          <span className="eyebrow">More {country.name} city guides</span>
          <div className="chips" style={{ marginTop: 6 }}>
            {otherCities.map((name) => (
              <Link className="chip" href={`/locations/countries/${country.slug}/${slugifyPlace(name)}`} key={name}>
                {name} →
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
