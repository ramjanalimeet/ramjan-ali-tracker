import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Disclaimer | Ramjan Ali Akash",
  description:
    "Important information about results, examples, third-party trademarks and the general nature of the SEO and AI search advice on this website.",
  path: "/disclaimer",
});

const SECTIONS: [string, string][] = [
  ["results", "Results are not guaranteed"],
  ["advice", "General information, not professional advice"],
  ["examples", "Examples, playbooks and samples"],
  ["prices", "Prices and offers"],
  ["trademarks", "Trademarks"],
  ["links", "External links"],
];

export default function DisclaimerPage() {
  return (
    <LegalLayout
      path="/disclaimer"
      title="Disclaimer"
      intro="Plain-English notes about what the information and examples on this website can and cannot promise."
      sections={SECTIONS}
      summary={[
        "No one can guarantee Google rankings or AI recommendations, and nothing on this site is a guarantee.",
        "Articles are general guidance, not legal, financial or tax advice.",
        "Playbooks and sample case studies are illustrations, clearly labelled, not results from named clients.",
      ]}
    >
      <h2 id="results">Results are not guaranteed</h2>
      <p>
        Search engines and AI tools decide their own results and change them often. Timelines, ranking improvements and
        outcomes described on this website are typical patterns, not promises. Your results depend on your market,
        competition, starting point, platform changes and how your business handles the leads it gets.
      </p>

      <h2 id="advice">General information, not professional advice</h2>
      <p>
        The articles and guides on this site are general information to help home service business owners understand SEO
        and AI search. They are not legal, financial, tax or accounting advice. Where they mention laws, such as rules
        on fake reviews, check with a qualified professional in your country before relying on them. Information is
        accurate to the best of my knowledge on the date it was published or updated, and platforms change, so details
        may go out of date.
      </p>

      <h2 id="examples">Examples, playbooks and samples</h2>
      <p>
        Pages describing &quot;playbooks&quot; show common starting points and the work that follows, not results from
        specific clients. Sample case studies use illustrative data and are labelled as samples. Example businesses,
        towns and prices in articles are illustrations unless stated otherwise. Real client case studies are only
        published with the client&apos;s permission and data from their own tools. See{" "}
        <Link href="/case-studies">Case Studies</Link>.
      </p>

      <h2 id="prices">Prices and offers</h2>
      <p>
        Prices on the <Link href="/pricing">pricing page</Link> can change. The price and scope agreed in writing before
        work starts are the ones that apply to you.
      </p>

      <h2 id="trademarks">Trademarks</h2>
      <p>
        Google, Google Maps, Google Business Profile, Gemini, ChatGPT, OpenAI, Microsoft, Bing, Copilot, Perplexity,
        Apple, WhatsApp, Cal.com and other names mentioned are trademarks of their respective owners. They are used only
        to describe the platforms the work involves. I am not affiliated with, endorsed by or sponsored by any of them.
      </p>

      <h2 id="links">External links</h2>
      <p>
        Articles link to official documentation and other websites so you can check sources. I am not responsible for
        the content or privacy practices of those sites. This website contains no paid or affiliate links.
      </p>
    </LegalLayout>
  );
}
