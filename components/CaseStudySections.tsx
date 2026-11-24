import Link from "next/link";
import { CaseStudyCards } from "./CaseStudyCards";

export const CASE_STUDY_HERO = "SEO Case Studies: Real Businesses, Real Results";

const TRUST_METRICS = [
  { label: "Total clients", value: "12" },
  { label: "Organic traffic growth", value: "+35%" },
  { label: "Leads generated", value: "120" },
];

const INDUSTRIES = [
  { title: "Home services", text: "Service-area pages, Google Maps visibility and calls." },
  { title: "Automotive", text: "Search visibility for detailing, repairs and other vehicle services." },
  { title: "eCommerce", text: "Category and product pages that help customers find what they need." },
];

const METHODOLOGY = [
  { title: "Audit and establish a baseline", text: "Review indexing, local listings and current traffic. Set up tracking for calls and forms." },
  { title: "Prioritize the searches that matter", text: "Map services and products to the queries customers use, then improve the pages that answer those queries." },
  { title: "Measure and refine", text: "Review changes in Search Console and lead tracking, then use the results to choose the next priorities." },
];

const FAQS = [
  { question: "How soon can I expect SEO results?", answer: "Timing depends on your starting point, site health and competition. Early changes may show up in impressions before they show up in enquiries." },
  { question: "How do you measure leads from SEO?", answer: "Track calls and form submissions by source. Where sales data is available, match those enquiries to quotes and bookings." },
  { question: "What does the free audit cover?", answer: "The audit reviews your website, Google Business Profile where applicable, and the search competitors most relevant to your business." },
];

export function CaseStudyTrust() {
  return (
    <section className="sec tight" aria-labelledby="case-trust">
      <div className="wrap">
        <h2 id="case-trust">Trust Metrics</h2>
        <p>Demo figures for layout preview. These are illustrative.</p>
        <dl className="case-study-support-grid">
          {TRUST_METRICS.map(({ label, value }) => (
            <div className="card" key={label}>
              <dt>{label}</dt>
              <dd><strong>{value}</strong></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function CaseStudySections({ quote }: { quote?: { text: string; name: string; role: string } }) {
  return (
    <>
      <section className="sec tight" aria-labelledby="case-featured">
        <div className="wrap">
          <h2 id="case-featured">Featured Case Studies</h2>
          <p>Wolfpixel figures are demo examples.</p>
          <CaseStudyCards showDemo />
        </div>
      </section>
      <section className="sec tight" aria-labelledby="case-industries">
        <div className="wrap">
          <h2 id="case-industries">Industries Served</h2>
          <div className="case-study-support-grid">
            {INDUSTRIES.map(({ title, text }) => (
              <div className="card" key={title}><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec tight" aria-labelledby="case-methodology">
        <div className="wrap">
          <h2 id="case-methodology">SEO Methodology</h2>
          <ol className="case-study-support-grid">
            {METHODOLOGY.map(({ title, text }) => (
              <li className="card" key={title}><h3>{title}</h3><p>{text}</p></li>
            ))}
          </ol>
        </div>
      </section>
      <section className="sec tight" aria-labelledby="case-testimonials">
        <div className="wrap">
          <h2 id="case-testimonials">Client Testimonials</h2>
          {quote ? (
            <blockquote className="quote">
              <p>{quote.text}</p>
              <cite>{quote.name}, {quote.role}</cite>
            </blockquote>
          ) : (
            <p className="card">Demo placeholder for verified client feedback.</p>
          )}
        </div>
      </section>
      <section className="sec tight" aria-labelledby="case-faq">
        <div className="wrap">
          <h2 id="case-faq">FAQs</h2>
          <div className="faq">
            {FAQS.map(({ question, answer }) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>
      <section className="sec tight" aria-labelledby="case-audit">
        <div className="wrap">
          <div className="band">
            <h2 id="case-audit">Get a Free SEO Audit</h2>
            <p>Find out which changes could improve your visibility and help customers find you.</p>
            <div className="cta-row">
              <Link className="btn btn-hire" href="/book-a-call">Get a Free SEO Audit <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
