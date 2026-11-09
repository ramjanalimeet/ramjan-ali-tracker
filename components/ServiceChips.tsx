import Link from "next/link";
import { ALL_SERVICES } from "@/lib/services";

/** "Related" chip row linking to the other services. */
export function ServiceChips({ exclude }: { exclude: string }) {
  return (
    <section className="sec tight">
      <div className="wrap rv">
        <span className="eyebrow">Related</span>
        <div className="chips" style={{ marginTop: 6 }}>
          {ALL_SERVICES.filter((s) => s.href !== exclude).map((s) => (
            <Link className="chip" href={s.href} key={s.href}>
              {s.name} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
