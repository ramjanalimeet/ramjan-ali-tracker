import { EMAIL, type FaqItem } from "@/lib/site";

/** Turns the contact email inside an answer into a mailto link. */
function withEmailLink(text: string) {
  const i = text.indexOf(EMAIL);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      {text.slice(i + EMAIL.length)}
    </>
  );
}

export function Faq({ items, title = "Things people ask first." }: { items: readonly FaqItem[]; title?: string }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="eyebrow">Questions</span>
            <h2>{title}</h2>
          </div>
          <p>
            Anything else, ask on the call or <a href={`mailto:${EMAIL}`}>email me</a>. I reply to every message
            personally.
          </p>
        </div>
        <div className="faq rv">
          {items.map(({ q, a }) => (
            <details name="faq" key={q}>
              <summary>{q}</summary>
              <p>{withEmailLink(a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
