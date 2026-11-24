import { CaseStudyHero, CaseStudySections, CaseStudyResults } from "@/components/CaseStudySections";
import { ELITE_SEPTIC_METRICS, ELITE_SEPTIC_PATH, ELITE_SEPTIC_WEBSITE } from "@/lib/elite-septic";
import { pageMeta } from "@/lib/site";

const title = "Elite Septic Service: From Google Maps to a phone call";
const description = "An industry example from Lufkin and Jasper on connecting a septic service website with its Google Business Profile and measuring calls.";

export const metadata = pageMeta({ title, description, path: ELITE_SEPTIC_PATH });

export default function EliteSepticCaseStudy() {
  return (
    <>
      <CaseStudyHero
        name="Elite Septic Service"
        context="Industry example · Lufkin and Jasper, Texas"
        title={title}
        summary={description}
        website={ELITE_SEPTIC_WEBSITE}
        image={{ src: "/assets/case-studies/elite-card.webp", alt: "Elite Septic Service technician working on a septic system" }}
      />
      <CaseStudyResults source="Publicly reported Google Business Profile data · June to early November 2026" highlights={ELITE_SEPTIC_METRICS} />
      <section className="case-reading-body">
        <div className="wrap">
          <article className="prose case-reading-copy">
            <h2>What the numbers mean</h2>
            <p>Google Business Profile recorded 100 calls out of 232 profile interactions. That is about 43%. The published report covers profile activity, with no comparison period or booking and revenue figures.</p>
            <h2>Put the service and location first</h2>
            <p>A homeowner dealing with a septic backup needs to know whether the company can handle the problem and reach their address. Elite Septic’s site makes its services, including pumping, repairs, inspections and installation, easy to find alongside coverage in Lufkin, Jasper and nearby East Texas communities.</p>

            <h2>Make the next step clear on both surfaces</h2>
            <p>A customer may start on Google Maps or go directly to the website. Consistent services, hours and contact details make it easier to call from either place. The profile also gives customers a way to check reviews, see photos and book online.</p>

            <h2>Measure what happens after the call</h2>
            <p>Track calls by source and record which ones turn into quotes and booked jobs. That gives a septic company a way to compare the profile and website as lead sources and decide where to spend time next.</p>
          </article>
        </div>
      </section>
      <CaseStudySections />
    </>
  );
}
