import Link from "next/link";
import { Ext } from "@/components/Ext";
import { LegalLayout } from "@/components/LegalLayout";
import { OWNER } from "@/lib/legal";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Cookie Policy | Ramjan Ali Akash",
  description:
    "This website sets no cookies of its own and uses no analytics or advertising trackers. Here is what third-party services such as the booking calendar may use.",
  path: "/cookie-policy",
});

const SECTIONS: [string, string][] = [
  ["what", "What cookies are"],
  ["own", "Cookies this website sets"],
  ["third", "Third-party services"],
  ["control", "Controlling cookies"],
  ["changes", "Changes"],
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      path="/cookie-policy"
      title="Cookie Policy"
      intro="What cookies and similar technologies are used when you visit this website, and how you can control them."
      sections={SECTIONS}
      summary={[
        "This website does not set any cookies of its own.",
        "There are no analytics, advertising or social media trackers on the site, so there is no cookie banner.",
        "If you open the booking calendar, Cal.com may use cookies to run the scheduling service.",
      ]}
    >
      <h2 id="what">What cookies are</h2>
      <p>
        Cookies are small text files a website stores in your browser. Similar technologies, such as local storage, work
        in a similar way. They are used to keep sites working, remember settings, measure visits or show advertising.
        Privacy laws such as the GDPR, the UK&apos;s PECR and the EU ePrivacy rules require consent for cookies that are
        not strictly necessary.
      </p>

      <h2 id="own">Cookies this website sets</h2>
      <p>
        None. This website does not set its own cookies, does not use local storage to track you, and does not run
        analytics, advertising, heatmap or social media tracking scripts. Fonts and images are served from this website
        rather than from third-party services. Because nothing on the site needs consent, there is no cookie banner.
      </p>

      <h2 id="third">Third-party services</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>When it is used</th>
              <th>What may happen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cal.com booking calendar</td>
              <td>Only when you open the calendar or booking page</td>
              <td>
                Cal.com may set cookies needed to run scheduling. See the{" "}
                <Ext href="https://cal.com/privacy">Cal.com privacy policy</Ext>.
              </td>
            </tr>
            <tr>
              <td>WhatsApp</td>
              <td>Only when you click a WhatsApp button</td>
              <td>You leave this site for WhatsApp, which applies its own cookie policy.</td>
            </tr>
            <tr>
              <td>Social media and external links</td>
              <td>Only when you click them</td>
              <td>The site you visit applies its own cookies and policies.</td>
            </tr>
            <tr>
              <td>Website hosting (Vercel)</td>
              <td>Every visit</td>
              <td>
                Basic server logs, described in the <Link href="/privacy-policy">Privacy Policy</Link>; no tracking
                cookies.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="control">Controlling cookies</h2>
      <p>
        You can block or delete cookies in your browser settings at any time, and you can choose not to open the booking
        calendar and email me instead at <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>. Guides for the main
        browsers: <Ext href="https://support.google.com/chrome/answer/95647">Chrome</Ext>,{" "}
        <Ext href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac">Safari</Ext>,{" "}
        <Ext href="https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox">Firefox</Ext> and{" "}
        <Ext href="https://support.microsoft.com/microsoft-edge">Edge</Ext>.
      </p>

      <h2 id="changes">Changes</h2>
      <p>
        If I ever add analytics or other tools that use cookies, I will update this page first and ask for your consent
        where the law requires it.
      </p>
    </LegalLayout>
  );
}
