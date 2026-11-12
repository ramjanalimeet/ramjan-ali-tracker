import { LegalLayout } from "@/components/LegalLayout";
import { OWNER } from "@/lib/legal";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Accessibility Statement | Ramjan Ali Akash",
  description:
    "How this website is built to be usable by everyone, the standard it aims for, known limitations and how to report an accessibility problem.",
  path: "/accessibility",
});

const SECTIONS: [string, string][] = [
  ["commitment", "Commitment"],
  ["measures", "What has been done"],
  ["limits", "Known limitations"],
  ["feedback", "Feedback and help"],
];

export default function AccessibilityPage() {
  return (
    <LegalLayout
      path="/accessibility"
      title="Accessibility Statement"
      intro="This website is built so everyone can read it and get in touch, on any device and with any assistive technology."
      sections={SECTIONS}
      summary={[
        "The site aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.",
        "It works with keyboards and screen readers, and on phones from 320 pixels wide.",
        "If anything is hard to use, email me and I will help and fix it.",
      ]}
    >
      <h2 id="commitment">Commitment</h2>
      <p>
        I want every home service business owner to be able to read this website and contact me, whatever device or
        assistive technology they use. The site aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.2
        at level AA.
      </p>

      <h2 id="measures">What has been done</h2>
      <ul>
        <li>A clear heading structure on every page, with one main heading and a &quot;Skip to content&quot; link</li>
        <li>Text alternatives for meaningful images; decorative images and icons are hidden from screen readers</li>
        <li>Keyboard access to the menu, dropdowns, accordions and booking popup, with visible focus</li>
        <li>Text and button colors chosen for readable contrast</li>
        <li>Charts on case study pages include a data table, so nothing depends on seeing the chart</li>
        <li>Animations respect the &quot;reduce motion&quot; setting on your device</li>
        <li>Layouts that work on phones down to 320 pixels wide, without sideways scrolling</li>
      </ul>

      <h2 id="limits">Known limitations</h2>
      <p>
        The booking calendar is provided by Cal.com and its accessibility is controlled by them. If it is difficult to
        use, you can email or WhatsApp me to arrange a call instead. Some older articles may have tables that scroll
        sideways on very small screens.
      </p>

      <h2 id="feedback">Feedback and help</h2>
      <p>
        If you have trouble using any part of this website, or need information in a different format, email{" "}
        <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>. I will reply within 24 hours on working days and fix
        problems as quickly as I can.
      </p>
    </LegalLayout>
  );
}
