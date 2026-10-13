import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

const DEFAULT_TEXT =
  "A free Local SEO & AI visibility audit of your Google Business Profile, website, AI search presence and top competitors. You get the findings and the order I would fix them in, whether you hire me or not.";

export function CtaBand({ title, text = DEFAULT_TEXT }: { title: string; text?: string }) {
  return (
    <section className="sec tight">
      <div className="wrap">
        <div className="band rv">
          <span className="eyebrow" style={{ color: "#8d9088" }}>
            Next step
          </span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-row">
            <WhatsAppButton />
            <Link className="btn btn-ghost-d" href="/book-a-call">
              Book a call
            </Link>
          </div>
          <p className="fine">Free · no pitch · you keep the action plan</p>
        </div>
      </div>
    </section>
  );
}
