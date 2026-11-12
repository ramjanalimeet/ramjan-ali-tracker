import { MainCta } from "./MainCta";

const DEFAULT_TEXT =
  "Book a free strategy call. I will review your Google Business Profile, website, AI search presence and top competitors, and show you what I would fix first, whether you hire me or not.";

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
            <MainCta onDark />
          </div>
          <p className="fine">Free · no pitch · you keep the action plan</p>
        </div>
      </div>
    </section>
  );
}
