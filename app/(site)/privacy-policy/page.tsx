import Link from "next/link";
import { Ext } from "@/components/Ext";
import { LegalLayout } from "@/components/LegalLayout";
import { OWNER } from "@/lib/legal";
import { pageMeta } from "@/lib/site";

const TITLE = "Privacy Policy";
const INTRO =
  "How I collect, use, share and protect personal information when you visit this website, book a call or work with me, and the rights you have wherever you are.";

export const metadata = pageMeta({
  title: "Privacy Policy | Ramjan Ali Akash",
  description:
    "How personal data is collected, used and protected, and your rights under GDPR, UK GDPR, US state laws, PIPEDA, the Australian Privacy Act and UAE PDPL.",
  path: "/privacy-policy",
});

const SECTIONS: [string, string][] = [
  ["who", "Who I am"],
  ["collect", "Information I collect"],
  ["use", "How I use it, and the legal basis"],
  ["cookies", "Cookies and tracking"],
  ["share", "Who I share it with"],
  ["transfers", "International transfers"],
  ["retention", "How long I keep it"],
  ["security", "How I protect it"],
  ["rights", "Your rights"],
  ["regions", "Rights in your country or state"],
  ["children", "Children"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact and complaints"],
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      path="/privacy-policy"
      title={TITLE}
      intro={INTRO}
      sections={SECTIONS}
      summary={[
        "This website does not use analytics, advertising trackers or its own cookies, and has no contact forms.",
        "I only receive personal information you choose to send: when you book a call, message me on WhatsApp, email me, or become a client.",
        "I use it to reply to you, run calls and deliver the work you hire me for. I never sell it or use it for advertising.",
        "You can ask to see, correct or delete your information at any time by emailing me.",
      ]}
    >
      <h2 id="who">Who I am</h2>
      <p>
        This website, ramjan-akash.vercel.app, is run by {OWNER.name}, an independent local SEO and AI search visibility
        consultant trading as {OWNER.trading}, based in {OWNER.location}. In this policy, &quot;I&quot;, &quot;me&quot;
        and &quot;my&quot; refer to {OWNER.name}, and &quot;you&quot; refers to anyone who visits the site, contacts me
        or works with me.
      </p>
      <p>
        For the purposes of data protection laws such as the GDPR and UK GDPR, I am the controller of the personal
        information described here. You can contact me about anything in this policy at{" "}
        <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>.
      </p>

      <h2 id="collect">Information I collect</h2>
      <h3>When you visit the website</h3>
      <p>
        The site has no analytics, advertising or social media tracking. Like almost every website, its hosting provider
        automatically records basic technical information in server logs when pages are requested, such as your IP
        address, browser type, the page requested, the referring page and the date and time. These logs are used to
        deliver the site, keep it secure and fix errors.
      </p>
      <h3>When you book a call</h3>
      <p>
        Booking uses Cal.com, a scheduling service. When you book, you give Cal.com the details the booking form asks
        for, typically your name, email address, the time you choose and any notes you add, such as your business name,
        website or service area. Cal.com shares the booking details with me so I can hold the call.
      </p>
      <h3>When you message or email me</h3>
      <p>
        If you contact me on WhatsApp, I receive your phone number, profile name and the messages you send. If you email
        me, I receive your email address and whatever you include in the message.
      </p>
      <h3>When you become a client</h3>
      <p>To deliver the work, I may also process:</p>
      <ul>
        <li>Your name, business name, contact details and billing details</li>
        <li>
          Access to accounts you choose to share, such as your Google Business Profile, Google Search Console, Google
          Analytics, website or listings
        </li>
        <li>
          Business information and performance data in those accounts, which can include customer names in reviews or
          enquiries
        </li>
        <li>Notes and records of our calls, messages and the work done</li>
      </ul>
      <p>
        I do not ask for, and you should not send, sensitive information such as health data, government ID numbers or
        payment card numbers.
      </p>

      <h2 id="use">How I use it, and the legal basis</h2>
      <p>
        Data protection laws such as the GDPR require a legal basis for each use of personal information. These are
        mine:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Information</th>
              <th>Legal basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Running and securing the website</td>
              <td>Server log data</td>
              <td>Legitimate interests (a working, secure website)</td>
            </tr>
            <tr>
              <td>Replying to enquiries and holding calls</td>
              <td>Booking, message and email details</td>
              <td>Steps you ask for before a contract; legitimate interests</td>
            </tr>
            <tr>
              <td>Delivering client work and reporting</td>
              <td>Client details, account access, business data</td>
              <td>Performance of a contract</td>
            </tr>
            <tr>
              <td>Invoicing, tax and accounting records</td>
              <td>Billing details, invoices</td>
              <td>Legal obligation</td>
            </tr>
            <tr>
              <td>Publishing a case study</td>
              <td>Business name, results, quotes</td>
              <td>Consent, which you can withdraw</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        I do not use personal information for advertising, I do not build marketing profiles, and I do not make
        decisions about you by automated means.
      </p>

      <h2 id="cookies">Cookies and tracking</h2>
      <p>
        This website does not set its own cookies and does not use analytics or advertising trackers. If you open the
        booking calendar, Cal.com may use cookies or similar technologies to run the scheduling service. Full details
        are in the <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2 id="share">Who I share it with</h2>
      <p>
        I do not sell personal information, and I do not share it for cross-context behavioral advertising. I only share
        it with service providers that help me run the site and the business, under their own terms and privacy
        policies:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>What for</th>
              <th>Privacy information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vercel</td>
              <td>Website hosting and server logs</td>
              <td>
                <Ext href="https://vercel.com/legal/privacy-policy">Vercel privacy policy</Ext>
              </td>
            </tr>
            <tr>
              <td>Cal.com</td>
              <td>Booking calls</td>
              <td>
                <Ext href="https://cal.com/privacy">Cal.com privacy policy</Ext>
              </td>
            </tr>
            <tr>
              <td>WhatsApp (Meta)</td>
              <td>Messaging, if you choose to contact me there</td>
              <td>
                <Ext href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp privacy policy</Ext>
              </td>
            </tr>
            <tr>
              <td>Google</td>
              <td>Email and, for clients, the Google tools we work in</td>
              <td>
                <Ext href="https://policies.google.com/privacy">Google privacy policy</Ext>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        For clients, I may also use SEO and reporting tools, such as rank trackers, to do the work. I only share the
        business information those tools need. I may also disclose information if required by law, or to protect my
        legal rights.
      </p>

      <h2 id="transfers">International transfers</h2>
      <p>
        I work from Bangladesh, and my service providers store data in other countries, including the United States and
        the European Union. This means your information may be processed outside the country where you live. Where the
        law requires it, such as for transfers out of the EU, UK or Switzerland, I rely on appropriate safeguards, such
        as the standard contractual clauses or equivalent terms offered by my providers.
      </p>

      <h2 id="retention">How long I keep it</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Information</th>
              <th>Kept for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enquiries that do not lead to work</td>
              <td>Up to 12 months after our last contact</td>
            </tr>
            <tr>
              <td>Client project records and reports</td>
              <td>For the engagement, then up to 3 years</td>
            </tr>
            <tr>
              <td>Invoices and accounting records</td>
              <td>As long as tax law requires</td>
            </tr>
            <tr>
              <td>Account access</td>
              <td>Removed or handed back when the engagement ends</td>
            </tr>
            <tr>
              <td>Server logs</td>
              <td>As set by the hosting provider, typically a short period</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="security">How I protect it</h2>
      <p>
        The site is served over HTTPS. I use strong, unique passwords and two-factor authentication on the accounts I
        use for work, I ask clients to grant access through each platform&apos;s user or manager roles rather than
        sharing passwords, and I remove access when it is no longer needed. No system is perfectly secure, but I take
        reasonable steps for a business of my size and will tell you without undue delay if a breach affects your
        information.
      </p>

      <h2 id="rights">Your rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>Know what personal information I hold about you and get a copy of it</li>
        <li>Correct information that is wrong or incomplete</li>
        <li>Have your information deleted</li>
        <li>Restrict or object to how I use it</li>
        <li>Receive your information in a portable format</li>
        <li>Withdraw consent where I rely on it, such as for a case study</li>
        <li>Complain to a data protection authority</li>
      </ul>
      <p>
        To use any of these rights, email <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>. I may need to confirm
        your identity before acting. I will respond within the time the law that applies to you requires, and within one
        month at the latest in most cases. I will not treat you differently for using your rights.
      </p>

      <h2 id="regions">Rights in your country or state</h2>
      <h3>European Union and European Economic Area (GDPR)</h3>
      <p>
        You have the rights listed above under the General Data Protection Regulation. You can complain to the data
        protection authority in the country where you live or work.
      </p>
      <h3>United Kingdom (UK GDPR)</h3>
      <p>
        You have equivalent rights under the UK GDPR and the Data Protection Act 2018, and you can complain to the{" "}
        <Ext href="https://ico.org.uk/make-a-complaint/">Information Commissioner&apos;s Office (ICO)</Ext>.
      </p>
      <h3>United States, including California</h3>
      <p>
        As a small consultancy, I may not meet the thresholds of state privacy laws such as the California Consumer
        Privacy Act (as amended by the CPRA). I still honor the core rights they give: to know, correct and delete your
        personal information. I do not sell or share personal information for cross-context behavioral advertising, and
        I do not use or disclose sensitive personal information. You can make a request yourself or through an
        authorized agent.
      </p>
      <h3>Canada (PIPEDA)</h3>
      <p>
        You can access and correct your personal information and withdraw consent, subject to legal limits. You can
        complain to the{" "}
        <Ext href="https://www.priv.gc.ca/en/report-a-concern/">Office of the Privacy Commissioner of Canada</Ext>.
      </p>
      <h3>Australia (Privacy Act 1988)</h3>
      <p>
        I handle personal information in line with the Australian Privacy Principles where they apply. If you are not
        satisfied with my response to a concern, you can contact the{" "}
        <Ext href="https://www.oaic.gov.au/privacy/privacy-complaints">
          Office of the Australian Information Commissioner (OAIC)
        </Ext>
        .
      </p>
      <h3>United Arab Emirates and the wider Gulf</h3>
      <p>
        If you are in the UAE, you have rights under the Personal Data Protection Law, including access, correction and
        deletion. Clients elsewhere in the Gulf, including Qatar, Oman and Bahrain, have similar rights under their
        national data protection laws, and I apply the same standards to everyone.
      </p>

      <h2 id="children">Children</h2>
      <p>
        This website and my services are for businesses and adults. They are not directed at children under 16, and I do
        not knowingly collect their personal information. If you think a child has sent me information, email me and I
        will delete it.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        I will update this policy if my services, providers or the law change, and update the date at the top. If I
        start using analytics or any other tracking on the site, I will update this page and the Cookie Policy first,
        and ask for consent where the law requires it.
      </p>

      <h2 id="contact">Contact and complaints</h2>
      <p>
        Email <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a> with any question or complaint about privacy. I will
        reply within 24 hours on working days and try to resolve it directly. You also always have the right to complain
        to the data protection authority where you live.
      </p>
      <p>
        Related: <Link href="/terms">Terms of Service</Link> · <Link href="/cookie-policy">Cookie Policy</Link>
      </p>
    </LegalLayout>
  );
}
