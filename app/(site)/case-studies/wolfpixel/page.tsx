import { CaseStudyHero, CaseStudySections } from "@/components/CaseStudySections";
import { pageMeta } from "@/lib/site";

const title = "Wolfpixel Design Agency Overview";
const description = "An overview of Wolfpixel’s public portfolio for SaaS companies and startups.";

export const metadata = pageMeta({ title, description, path: "/case-studies/wolfpixel" });

export default function WolfpixelOverview() {
  return (
    <>
      <CaseStudyHero
        name="Wolfpixel"
        context="Public portfolio overview · Design agency"
        title={title}
        summary={description}
        website="https://www.wolfpixel.agency/"
        image={{ src: "/assets/case-studies/wolfpixel-card.webp", alt: "OpsLoop product interface from Wolfpixel’s portfolio" }}
      />
      <section className="case-reading-body">
        <div className="wrap">
          <article className="prose case-reading-copy">
            <h2>How Wolfpixel presents its work</h2>
            <p>Wolfpixel’s website pairs descriptions of its product, brand and web design services with individual project pages. Examples include OpsLoop, SpareCharge and Wayfare.</p>
            <h2>What other agencies can use</h2>
            <p>Give each project a dedicated page. Explain who it was for, what the team designed and how the work fits the client’s needs. Link relevant examples from the service pages so visitors can see what hiring the agency might involve.</p>
          </article>
        </div>
      </section>
      <CaseStudySections />
    </>
  );
}
