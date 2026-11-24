import Link from "next/link";
import { ELITE_SEPTIC_PATH, ELITE_SEPTIC_METRICS, ELITE_SEPTIC_WEBSITE } from "@/lib/elite-septic";
import { CASE_STUDIES } from "@/lib/case-studies";

const PROJECT_CARDS = [
  ...CASE_STUDIES.map((c) => {
    const isEcoverde = c.slug === "ecoverde-valeting-local-seo-ai-visibility";
    return {
      name: c.client,
      category: isEcoverde ? "Car Detailing (UK)" : c.trade,
      cover: isEcoverde ? "/assets/case-studies/ecoverde-card.webp" : c.image,
      alt: isEcoverde ? "A vehicle being foam washed by Ecoverde" : c.imageAlt,
      summary: isEcoverde
        ? "Local SEO and AI visibility work for an eco-friendly mobile valeting service in West London."
        : c.summary,
      highlights: c.highlights.slice(0, 3).map(({ after, label }) => ({ value: after, label })),
      website: c.website,
      href: `/case-studies/${c.slug}`,
      detailLabel: "Read case study",
    };
  }),
  {
    name: "Elite Septic Service",
    category: "Septic Service (USA)",
    cover: "/assets/case-studies/elite-card.webp",
    alt: "An Elite Septic Service technician working on a septic system",
    summary: "An industry example of how a service website and Google Business Profile help East Texas homeowners find and call a septic company.",
    highlights: ELITE_SEPTIC_METRICS,
    website: ELITE_SEPTIC_WEBSITE,
    href: ELITE_SEPTIC_PATH,
    detailLabel: "Read case study",
  },
  {
    name: "Wolfpixel",
    category: "Design Agency",
    cover: "/assets/case-studies/wolfpixel-card.webp",
    alt: "OpsLoop product interface shown on a tablet, from Wolfpixel’s portfolio",
    summary: "A design agency for SaaS companies and startups, with a portfolio spanning product design, branding and websites.",
    highlights: [
      { value: "Product", label: "Digital design" },
      { value: "Brand", label: "Visual identity" },
      { value: "Web", label: "Site design" },
    ],
    website: "https://www.wolfpixel.agency/",
    href: "/case-studies/wolfpixel",
    detailLabel: "Read overview",
  },
];

const WOLFPIXEL_DEMO_METRICS = [
  { value: "+35%", label: "Demo organic traffic" },
  { value: "18", label: "Demo enquiries" },
  { value: "12", label: "Demo ranking keywords" },
];

export function CaseStudyCards({ showDemo = false }: { showDemo?: boolean }) {
  return (
    <div className="case-results-grid">
      {PROJECT_CARDS.map((project) => (
        <article className="case-result-card rv" key={project.href}>
          <Link className="case-result-image" href={project.href} aria-label={`${project.detailLabel}: ${project.name}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.cover} alt={project.alt} width={960} height={540} />
            <span className="case-result-category">{project.category}</span>
            <span className="case-result-arrow" aria-hidden="true">↗</span>
          </Link>
          <div className="case-result-body">
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <ul className="case-result-metrics">
              {(showDemo && project.href === "/case-studies/wolfpixel" ? WOLFPIXEL_DEMO_METRICS : project.highlights).map(({ label, value }) => (
                <li key={label}><b>{value}</b><span>{label}</span></li>
              ))}
            </ul>
            <div className="case-result-actions">
              <Link className="btn btn-ghost btn-sm" href={project.website} target="_blank" rel="noopener">View website</Link>
              <Link className="btn btn-dark btn-sm" href={project.href}>{project.detailLabel} <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
