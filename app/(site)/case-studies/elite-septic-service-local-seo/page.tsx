import Link from "next/link";
import { CASE_STUDY_HERO, CaseStudySections, CaseStudyTrust } from "@/components/CaseStudySections";
import { ELITE_SEPTIC_METRICS, ELITE_SEPTIC_PATH, ELITE_SEPTIC_WEBSITE } from "@/lib/elite-septic";
import { pageMeta } from "@/lib/site";

const title = "Elite Septic Service: From Google Maps to a phone call";
const description = "An industry example from Lufkin and Jasper on connecting a septic service website with its Google Business Profile and measuring calls.";

export const metadata = pageMeta({ title, description, path: ELITE_SEPTIC_PATH });

export default function EliteSepticCaseStudy() {
  return (
    <>
      <section className="sec">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li aria-current="page">Elite Septic Service</li>
            </ol>
          </nav>
          <article className="prose">
            <span className="eyebrow">Industry example · East Texas</span>
            <p className="case-study-hero-theme">{CASE_STUDY_HERO}</p>
            <h1>{title}</h1>
            <p className="lead">{description}</p>

            <p>
              <Link className="btn btn-ghost btn-sm" href={ELITE_SEPTIC_WEBSITE} target="_blank" rel="noopener">
                Visit website
              </Link>
            </p>

            <h2>What Google Business Profile recorded</h2>
            <ul className="case-result-metrics">
              {ELITE_SEPTIC_METRICS.map(({ label, value }) => (
                <li key={label}><b>{value}</b><span>{label}</span></li>
              ))}
            </ul>
            <p>These figures come from publicly reported Google Business Profile data covering June through early November 2026. Google counted 100 calls among 232 profile interactions, or about 43%. The figures cover activity from the profile. Booking and revenue figures were unavailable, and the reporting period has no comparable baseline.</p>

            <h2>Put the service and location first</h2>
            <p>A homeowner dealing with a septic backup needs to know whether the company can handle the problem and reach their address. Elite Septic’s site makes its services, including pumping, repairs, inspections and installation, easy to find alongside coverage in Lufkin, Jasper and nearby East Texas communities.</p>

            <h2>Make the next step clear on both surfaces</h2>
            <p>A customer may start on Google Maps or go directly to the website. Consistent services, hours and contact details make it easier to call from either place. The profile also gives customers a way to check reviews, see photos and book online.</p>

            <h2>Measure what happens after the call</h2>
            <p>Track calls by source and record which ones turn into quotes and booked jobs. That gives a septic company a way to compare the profile and website as lead sources and decide where to spend time next.</p>
          </article>
        </div>
      </section>
      <CaseStudyTrust />
      <CaseStudySections />
    </>
  );
}
