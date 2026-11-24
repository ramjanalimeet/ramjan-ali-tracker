import Link from "next/link";
import { pageMeta } from "@/lib/site";

const title = "Wolfpixel Design Agency Overview";
const description = "An overview of Wolfpixel’s public portfolio for SaaS companies and startups.";

export const metadata = pageMeta({ title, description, path: "/case-studies/wolfpixel" });

export default function WolfpixelOverview() {
  return (
    <section className="sec">
      <div className="wrap">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li aria-current="page">Wolfpixel</li>
          </ol>
        </nav>
        <article className="prose">
          <span className="eyebrow">Public portfolio overview</span>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <figure className="article-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/case-studies/wolfpixel-card.webp" alt="OpsLoop product interface shown on a tablet, from Wolfpixel’s portfolio" width={960} height={540} />
          </figure>
          <h2>How the portfolio is organized</h2>
          <p>Wolfpixel presents selected projects alongside its product design, branding and web design services. Visitors can open individual examples to see how the studio applies those services across different products and industries.</p>
          <p><Link className="btn btn-dark" href="https://www.wolfpixel.agency/" target="_blank" rel="noopener">View Wolfpixel website</Link></p>
        </article>
      </div>
    </section>
  );
}
