import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Local SEO Case Studies & Playbooks | Ramjan Ali Akash",
  description:
    "How I approach local SEO for roofing, plumbing, HVAC and septic companies: the starting point, the first 90 days and what gets measured.",
  path: "/case-studies",
});

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://ramjan-akash.vercel.app/#website",
      url: "https://ramjan-akash.vercel.app/",
      name: "Ramjan Ali Akash",
      inLanguage: "en",
      publisher: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://ramjan-akash.vercel.app/case-studies#webpage",
      url: "https://ramjan-akash.vercel.app/case-studies",
      name: "Local SEO Case Studies & Playbooks | Ramjan Ali Akash",
      description:
        "How I approach local SEO for roofing, plumbing, HVAC and septic companies: the starting point, the first 90 days and what gets measured.",
      isPartOf: {
        "@id": "https://ramjan-akash.vercel.app/#website",
      },
      about: {
        "@id": "https://ramjan-akash.vercel.app/#business",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ramjan-akash.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: "https://ramjan-akash.vercel.app/case-studies",
        },
      ],
    },
  ],
};

export default function CaseStudiesPage() {
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
              <li aria-current="page">Case Studies</li>
            </ol>
          </nav>
          <div className="phero-grid">
            <div>
              <span className="eyebrow">Case Studies</span>
              <h1>
                How the work <span className="hl">actually runs</span>.
              </h1>
              <p className="lead">
                Client case studies are published here only with permission and real numbers. In the meantime, these
                playbooks show exactly how I approach each trade in the first 90 days, on Google Maps and in AI search,
                so you know what you are buying.
              </p>
              <div className="cta-row">
                <WhatsAppButton />
                <Link className="btn btn-dark" href="/book-a-call">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Playbook · Roofing</span>
              <h2>A roofer losing storm work to out-of-town crews.</h2>
            </div>
            <p>
              Typical starting point: a profile with few photos and reviews, one generic services page, and storm
              chasers outranking them after every hail event.
            </p>
          </div>
          <div className="grid g3 rv">
            <div className="panel">
              <h3>Starting point</h3>
              <ul className="ticks">
                <li>Wrong or missing secondary categories</li>
                <li>One page for all services</li>
                <li>Reviews coming in only now and then</li>
                <li>No tracking of calls by source</li>
              </ul>
            </div>
            <div className="panel">
              <h3>First 90 days</h3>
              <ul className="ticks">
                <li>Profile rebuilt: categories, services, areas, job photos</li>
                <li>Separate pages for repair, replacement, storm damage</li>
                <li>Area pages for the top 5 towns</li>
                <li>Review requests after every job</li>
              </ul>
            </div>
            <div className="panel">
              <h3>What gets measured</h3>
              <ul className="ticks">
                <li>Map rankings across the service area</li>
                <li>Calls and forms from Google</li>
                <li>Inspection requests by service</li>
                <li>Review count and recency</li>
                <li>Mentions in AI search answers</li>
              </ul>
            </div>
          </div>
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/local-seo/roofing-seo">
              Roofing SEO <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Playbook · Plumbing</span>
              <h2>A plumber getting small calls, wanting bigger jobs.</h2>
            </div>
            <p>
              Typical starting point: decent rankings for "plumber" but almost nothing for water heaters, repipes or
              sewer lines, the jobs that pay best.
            </p>
          </div>
          <div className="grid g3 rv">
            <div className="panel">
              <h3>Starting point</h3>
              <ul className="ticks">
                <li>Rankings only for broad terms</li>
                <li>No dedicated high-value service pages</li>
                <li>Profile hours not matching reality</li>
                <li>Slow mobile site</li>
              </ul>
            </div>
            <div className="panel">
              <h3>First 90 days</h3>
              <ul className="ticks">
                <li>Pages for water heaters, repipes, sewer and leak detection</li>
                <li>Speed and mobile fixes</li>
                <li>Profile services and hours corrected</li>
                <li>Internal links pushing to high-value pages</li>
              </ul>
            </div>
            <div className="panel">
              <h3>What gets measured</h3>
              <ul className="ticks">
                <li>Rankings for high-value services</li>
                <li>Calls by service type</li>
                <li>Average ticket of leads from search</li>
                <li>Organic traffic to service pages</li>
                <li>Mentions in AI search answers</li>
              </ul>
            </div>
          </div>
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/local-seo/plumbing-seo">
              Plumbing SEO <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Playbook · HVAC</span>
              <h2>An HVAC company invisible until summer is over.</h2>
            </div>
            <p>Typical starting point: SEO started in June, rankings arriving in September, after the rush.</p>
          </div>
          <div className="grid g3 rv">
            <div className="panel">
              <h3>Starting point</h3>
              <ul className="ticks">
                <li>No seasonal plan</li>
                <li>Thin pages for AC and heating</li>
                <li>No maintenance plan page</li>
                <li>Few recent reviews</li>
              </ul>
            </div>
            <div className="panel">
              <h3>First 90 days</h3>
              <ul className="ticks">
                <li>Seasonal content calendar set before the next peak</li>
                <li>Strong AC, heating and heat pump pages</li>
                <li>Maintenance plan page and offer</li>
                <li>Seasonal profile posts</li>
              </ul>
            </div>
            <div className="panel">
              <h3>What gets measured</h3>
              <ul className="ticks">
                <li>Rankings before each season</li>
                <li>Repair vs replacement leads</li>
                <li>Maintenance plan sign-ups</li>
                <li>Calls from the map pack</li>
                <li>Mentions in AI search answers</li>
              </ul>
            </div>
          </div>
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/local-seo/hvac-seo">
              HVAC SEO <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="eyebrow">Playbook · Septic</span>
              <h2>A septic company with a 40-mile service area.</h2>
            </div>
            <p>
              Typical starting point: ranking well near the yard, invisible in the towns 30 or 40 minutes away where
              many customers live.
            </p>
          </div>
          <div className="grid g3 rv">
            <div className="panel">
              <h3>Starting point</h3>
              <ul className="ticks">
                <li>Service area not set properly</li>
                <li>No county or town pages</li>
                <li>Reviews only from nearby customers</li>
                <li>No real estate inspection page</li>
              </ul>
            </div>
            <div className="panel">
              <h3>First 90 days</h3>
              <ul className="ticks">
                <li>Service area and categories fixed</li>
                <li>County and town pages with real local detail</li>
                <li>Real estate inspection page and agent outreach</li>
                <li>Reviews requested across the whole area</li>
              </ul>
            </div>
            <div className="panel">
              <h3>What gets measured</h3>
              <ul className="ticks">
                <li>Rankings town by town</li>
                <li>Calls by town and service</li>
                <li>Inspection requests</li>
                <li>Coverage across the service area</li>
                <li>Mentions in AI search answers</li>
              </ul>
            </div>
          </div>
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/local-seo/septic-seo">
              Septic SEO <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
      <CtaBand title="Want this playbook run on your business?" />
    </>
  );
}
