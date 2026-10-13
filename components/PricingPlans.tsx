import Link from "next/link";
import { PLANS, usd } from "@/lib/pricing";

/** The plan cards. */
export function PricingPlans() {
  return (
    <div className={`plans plans-${PLANS.length}`}>
      {PLANS.map((p) => (
        <div className={p.popular ? "plan pop rv" : "plan rv"} key={p.name}>
          <div className="plan-head">
            <h3>{p.name}</h3>
            {p.popular && <span className="plan-badge">Most popular</span>}
          </div>
          <p className="tagline">{p.tagline}</p>
          <p className="price">
            {usd(p.price)}
            <small>/month</small>
          </p>
          <ul className="ticks">
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <Link className={p.popular ? "btn btn-accent" : "btn btn-ghost"} href="/book-a-call">
            Get started <span className="arr">→</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

/** The pricing section, used on the pricing page and the service pages. */
export function PricingSection({
  alt = false,
  id,
  showAllLink = false,
}: {
  alt?: boolean;
  id?: string;
  showAllLink?: boolean;
}) {
  return (
    <section className={alt ? "sec alt" : "sec"} id={id}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2>One plan. Everything included.</h2>
          </div>
          <p>
            Local SEO in every plan, with GEO &amp; AI Visibility from Growth up. Month to month, no setup fees, cancel
            with a week of notice.
          </p>
        </div>
        <PricingPlans />
        {showAllLink && (
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/pricing">
              Full pricing details <span className="arr">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
