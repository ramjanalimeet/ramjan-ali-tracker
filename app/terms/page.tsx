import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { OWNER } from "@/lib/legal";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms of Service | Ramjan Ali Akash",
  description:
    "Terms for this website and for Local SEO and GEO & AI Visibility services: plans, payment, cancellation, ownership, no ranking guarantees and liability.",
  path: "/terms",
});

const SECTIONS: [string, string][] = [
  ["agreement", "About these terms"],
  ["website", "Using this website"],
  ["services", "Services and plans"],
  ["fees", "Fees and payment"],
  ["term", "Term, pausing and cancellation"],
  ["client", "Your responsibilities"],
  ["guarantees", "No ranking guarantees"],
  ["ownership", "Ownership and access"],
  ["platforms", "Third-party platforms"],
  ["confidentiality", "Confidentiality"],
  ["liability", "Limitation of liability"],
  ["law", "Governing law and disputes"],
  ["changes", "Changes and contact"],
];

export default function TermsPage() {
  return (
    <LegalLayout
      path="/terms"
      title="Terms of Service"
      intro="The terms that apply when you use this website and when you hire me for Local SEO, GEO & AI Visibility or any other SEO service."
      sections={SECTIONS}
      summary={[
        "Plans are month to month, with no setup fees. You can pause or cancel with a week of notice.",
        "Your Google Business Profile, website and accounts always stay in your name and under your control.",
        "No one can guarantee rankings on Google or recommendations by AI tools, and I never promise them.",
        "The written proposal or plan we agree on sets out exactly what is included each month.",
      ]}
    >
      <h2 id="agreement">About these terms</h2>
      <p>
        These terms are between you and {OWNER.name}, trading as {OWNER.trading}, based in {OWNER.location}. By using
        this website you agree to the parts of these terms that apply to the website. If you hire me, these terms apply
        to the services together with the proposal, plan or invoice we agree on. If anything in a signed proposal
        conflicts with these terms, the proposal wins.
      </p>

      <h2 id="website">Using this website</h2>
      <p>
        You may read, share and link to the content on this website. You may not copy large parts of it to republish as
        your own, scrape it in bulk, try to disrupt the site, or use it for anything unlawful. The information on the
        site is general guidance, not advice for your specific situation; see the{" "}
        <Link href="/disclaimer">Disclaimer</Link>.
      </p>

      <h2 id="services">Services and plans</h2>
      <p>
        I provide local SEO, GEO &amp; AI visibility and related SEO services for home service businesses. The plans and
        their monthly prices are listed on the <Link href="/pricing">pricing page</Link>. Before work starts, we agree
        in writing which plan you are on and what is included, such as the number of pages, links and reports each
        month. Work outside that scope is quoted separately before it starts.
      </p>
      <p>
        The free strategy call is free and comes with no obligation. You keep any advice from it whether or not you hire
        me.
      </p>

      <h2 id="fees">Fees and payment</h2>
      <ul>
        <li>Plans are a fixed monthly fee, invoiced monthly in advance, in US dollars unless we agree otherwise.</li>
        <li>There are no setup fees.</li>
        <li>Prices shown do not include any taxes that apply where you are, which are added where required.</li>
        <li>
          Third-party costs you approve in advance, such as paid directory listings or sponsorships, are paid by you,
          either directly or at cost.
        </li>
        <li>If an invoice is unpaid for more than 14 days after its due date, I may pause work until it is paid.</li>
      </ul>

      <h2 id="term">Term, pausing and cancellation</h2>
      <p>
        Plans run month to month. You can pause, change plans or cancel at any time by giving one week&apos;s notice by
        email or WhatsApp before your next billing date. I can also end an engagement with the same notice. How fees are
        handled when you cancel is set out in the <Link href="/refund-policy">Cancellation &amp; Refund Policy</Link>.
      </p>
      <p>
        When an engagement ends, I hand over the work completed and remove my access to your accounts, or you can remove
        it yourself at any time.
      </p>

      <h2 id="client">Your responsibilities</h2>
      <p>The work goes faster and further when you:</p>
      <ul>
        <li>Give accurate information about your business, services and service areas</li>
        <li>Grant the access needed, through user roles rather than shared passwords where possible</li>
        <li>Review and approve changes and content within a reasonable time</li>
        <li>Ask customers for reviews, and answer the calls and enquiries the work brings in</li>
        <li>Hold the licenses and insurance your trade requires, and make sure claims about your business are true</li>
        <li>Follow the rules of the platforms you use, including Google&apos;s Business Profile guidelines</li>
      </ul>
      <p>
        I will not create fake reviews, fake listings, virtual offices or other content that breaks platform rules or
        consumer protection law, even if asked.
      </p>

      <h2 id="guarantees">No ranking guarantees</h2>
      <p>
        Google, Bing, Apple and AI companies such as OpenAI control their own results and change them often. No one can
        guarantee a particular ranking, number of calls or AI recommendation, and I do not. What I commit to is doing
        the agreed work properly, following the platforms&apos; rules, and reporting honestly on what was done and what
        it achieved.
      </p>

      <h2 id="ownership">Ownership and access</h2>
      <ul>
        <li>
          Your Google Business Profile, website, domain, Search Console, Analytics and other accounts belong to you and
          stay in your name.
        </li>
        <li>
          Content I create for you, such as pages, posts and reports, belongs to you once the month it was created in is
          paid for.
        </li>
        <li>
          My own templates, checklists, tools and know-how remain mine, but you can keep using anything built with them
          for your business.
        </li>
        <li>I may mention that I worked with you, or publish a case study, only with your written permission.</li>
      </ul>

      <h2 id="platforms">Third-party platforms</h2>
      <p>
        The work depends on platforms I do not control, such as Google, Bing, Apple, Cal.com and directory sites. I am
        not responsible for their outages, policy changes, algorithm updates, or decisions such as suspending a listing,
        although I will help you respond to them where I can.
      </p>

      <h2 id="confidentiality">Confidentiality</h2>
      <p>
        I keep your business information, account access and results confidential and only use them to do the work. I
        handle personal information as described in the <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2 id="liability">Limitation of liability</h2>
      <p>
        To the extent the law allows, I am not liable for indirect or consequential losses, such as lost profits or lost
        business, and my total liability for any claim related to the services is limited to the fees you paid me in the
        three months before the claim arose. Nothing in these terms limits liability that cannot be limited by law, or
        your statutory rights as a consumer.
      </p>

      <h2 id="law">Governing law and disputes</h2>
      <p>
        If something goes wrong, please tell me first. Most issues can be fixed with a conversation. These terms are
        governed by the laws of Bangladesh. If you are a consumer, you also keep any protections the laws of the country
        where you live give you, and nothing here takes those away.
      </p>

      <h2 id="changes">Changes and contact</h2>
      <p>
        I may update these terms and will change the date at the top when I do. For active clients, changes take effect
        from the next billing month, and I will tell you about any significant change in advance. Questions? Email{" "}
        <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>.
      </p>
    </LegalLayout>
  );
}
