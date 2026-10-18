import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { OWNER } from "@/lib/legal";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Editorial Policy | Ramjan Ali Akash",
  description:
    "How articles on this site are researched, written, fact-checked, sourced and updated, and how to report a mistake.",
  path: "/editorial-policy",
});

const SECTIONS: [string, string][] = [
  ["who", "Who writes the content"],
  ["research", "How articles are researched"],
  ["quotes", "Sources and quotes"],
  ["ai", "Use of AI tools"],
  ["independence", "Independence"],
  ["updates", "Updates and corrections"],
];

export default function EditorialPolicyPage() {
  return (
    <LegalLayout
      path="/editorial-policy"
      title="Editorial Policy"
      intro="The standards behind every article and guide on this website, so you know how much to trust what you read."
      sections={SECTIONS}
      summary={[
        "Articles are written for home service business owners and focus on what actually helps them get calls.",
        "Claims about Google and AI tools are checked against official documentation, which is linked.",
        "No paid placements, sponsored posts or affiliate links.",
        "Mistakes are corrected promptly, and articles show when they were last updated.",
      ]}
    >
      <h2 id="who">Who writes the content</h2>
      <p>
        Content on this website is published by <Link href="/about">{OWNER.name}</Link>, a local SEO and AI search
        visibility consultant who works with home service businesses. Each article shows its author and the date it was
        last updated.
      </p>

      <h2 id="research">How articles are researched</h2>
      <ul>
        <li>Topics come from the questions business owners ask on calls and what they search for.</li>
        <li>Advice is based on official platform documentation and hands-on work on real profiles and websites.</li>
        <li>Each article aims to answer the reader&apos;s question fully, with practical steps rather than theory.</li>
      </ul>

      <h2 id="quotes">Sources and quotes</h2>
      <p>
        Statements about how Google, Bing or AI tools work are checked against their official documentation where it
        exists, and linked so you can read the source yourself. Direct quotes are only used when the wording has been
        checked; otherwise the point is paraphrased and the source linked. Where something is my opinion or experience
        rather than documented fact, the article says so.
      </p>

      <h2 id="ai">Use of AI tools</h2>
      <p>
        AI writing tools may be used to help research, outline or draft content. Every article is reviewed and edited
        before it is published, with facts, figures and quotes checked against original sources. AI is never used to
        invent client results, reviews or testimonials.
      </p>

      <h2 id="independence">Independence</h2>
      <p>
        There are no sponsored posts, paid placements or affiliate links on this website. Tools and platforms are
        mentioned because they are relevant, not because anyone paid for it. Examples are labelled as examples, and
        client results are only published with permission.
      </p>

      <h2 id="updates">Updates and corrections</h2>
      <p>
        Search and AI platforms change quickly, so articles are reviewed and updated, with the date shown at the top. If
        you spot an error or something out of date, email <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a> and it
        will be checked and corrected promptly.
      </p>
    </LegalLayout>
  );
}
