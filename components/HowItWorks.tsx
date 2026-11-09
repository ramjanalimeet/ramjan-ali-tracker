const STEPS = [
  {
    title: "Audit",
    text: "I review your Google Business Profile, website, citations, reviews, the three competitors beating you in the map pack, and what AI tools like ChatGPT and Google's AI Overviews say when asked for a business like yours. You keep the findings either way.",
  },
  {
    title: "Plan",
    text: "Target services, towns and keywords, written down as one 90-day roadmap you approve before any work starts.",
  },
  {
    title: "Fix and build",
    text: "Profile cleanup, technical fixes, service and area pages, citations, and a review system. The foundations go in first.",
  },
  {
    title: "Grow and report",
    text: "Content, links and profile activity every month, with a plain-English report on map rankings, AI search mentions, calls and form leads.",
  },
];

export function HowItWorks({ alt = false }: { alt?: boolean }) {
  return (
    <section className={alt ? "sec alt" : "sec"}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>How an engagement runs.</h2>
          </div>
          <p>You always know what is being worked on this month, what lands next, and what I need from you.</p>
        </div>
        <ol className="steps">
          {STEPS.map((s) => (
            <li className="step rv" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
