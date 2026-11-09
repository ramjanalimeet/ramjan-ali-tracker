import Link from "next/link";
import { ALL_SERVICES } from "@/lib/services";

export const metadata = { title: { absolute: "Page not found | Ramjan Ali Akash" }, robots: { index: false } };

export default function NotFound() {
  return (
    <section className="phero">
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1>
          This page <span className="hl">isn&apos;t here</span>.
        </h1>
        <p className="lead">It may have moved, or the link may be wrong. These are good places to start.</p>
        <div className="cta-row">
          <Link className="btn btn-dark" href="/">
            Go to the homepage
          </Link>
          <Link className="btn btn-ghost" href="/book-a-call">
            Book a Call
          </Link>
        </div>
        <div className="chips" style={{ marginTop: 32 }}>
          {ALL_SERVICES.map((s) => (
            <Link className="chip" href={s.href} key={s.href}>
              {s.name}
            </Link>
          ))}
          <Link className="chip" href="/industries">
            Industries
          </Link>
          <Link className="chip" href="/locations">
            Locations
          </Link>
          <Link className="chip" href="/blog">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
