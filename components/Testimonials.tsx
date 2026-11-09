import { TESTIMONIALS } from "@/lib/testimonials";

/** Real client quotes. Renders nothing until lib/testimonials.ts has at least one. */
export function Testimonials({ title = "What clients say." }: { title?: string }) {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="eyebrow">Clients</span>
            <h2>{title}</h2>
          </div>
          <p>Shared with permission, in their own words.</p>
        </div>
        <div className={TESTIMONIALS.length > 1 ? "grid g2" : undefined}>
          {TESTIMONIALS.map((t) => (
            <figure className="quote rv" key={t.name + t.quote.slice(0, 20)}>
              <blockquote style={{ margin: 0 }}>
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <cite>
                  <b>{t.name}</b>, {t.business}
                  {t.location ? ` · ${t.location}` : ""}
                  {t.source && (
                    <>
                      {" · "}
                      <a href={t.source} target="_blank" rel="noopener">
                        Original review ↗
                      </a>
                    </>
                  )}
                </cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
