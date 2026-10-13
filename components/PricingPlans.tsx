import Link from "next/link";
import { usd, type ServicePricing } from "@/lib/pricing";

/** Plan cards for one service. */
export function PricingPlans({ service }: { service: ServicePricing }) {
  return (
    <div className={`plans plans-${service.plans.length}`}>
      {service.plans.map((p) => (
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

/** A full pricing section for one service, used on the pricing page and the service pages. */
export function PricingSection({
  service,
  alt = false,
  id,
  showAllLink = false,
}: {
  service: ServicePricing;
  alt?: boolean;
  id?: string;
  showAllLink?: boolean;
}) {
  return (
    <section className={alt ? "sec alt" : "sec"} id={id}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="eyebrow">Pricing · {service.service}</span>
            <h2>{service.service} plans.</h2>
          </div>
          <p>{service.intro} Month to month, no setup fees, cancel with a week of notice.</p>
        </div>
        <PricingPlans service={service} />
        {showAllLink && (
          <div className="cta-row rv">
            <Link className="btn btn-ghost" href="/pricing">
              All pricing and the bundle <span className="arr">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
