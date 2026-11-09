import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { OWNER } from "@/lib/legal";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Cancellation & Refund Policy | Ramjan Ali Akash",
  description:
    "Month-to-month plans with no setup fees and no lock-in. How to pause or cancel with one week's notice, and when fees are refunded or credited.",
  path: "/refund-policy",
});

const SECTIONS: [string, string][] = [
  ["plans", "Month-to-month plans"],
  ["cancel", "How to cancel or pause"],
  ["refunds", "Refunds"],
  ["handover", "What happens when you leave"],
  ["rights", "Your legal rights"],
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      path="/refund-policy"
      title="Cancellation & Refund Policy"
      intro="No lock-in contracts and no setup fees. Here is how cancelling, pausing and refunds work."
      sections={SECTIONS}
      summary={[
        "Plans are month to month. Cancel or pause any time with one week's notice before your next billing date.",
        "There are no setup fees and no cancellation fees.",
        "If agreed work for a month you paid for is not delivered, you get a refund or credit for that part.",
        "The strategy call is always free.",
      ]}
    >
      <h2 id="plans">Month-to-month plans</h2>
      <p>
        Every plan on the <Link href="/pricing">pricing page</Link> is billed monthly in advance, with no setup fee and
        no minimum term. You can move between plans at the start of any billing month.
      </p>

      <h2 id="cancel">How to cancel or pause</h2>
      <ol>
        <li>
          Email <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a> or send a WhatsApp message saying you want to cancel
          or pause.
        </li>
        <li>Give at least one week&apos;s notice before your next billing date.</li>
        <li>I confirm in writing, and you are not billed for the following month.</li>
      </ol>
      <p>
        Notice given less than a week before the billing date takes effect from the month after. A pause works the same
        way; let me know when you want to restart.
      </p>

      <h2 id="refunds">Refunds</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Situation</th>
              <th>What happens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>You cancel with notice</td>
              <td>No further billing. The current paid month is completed.</td>
            </tr>
            <tr>
              <td>You cancel in your first month before any work has started</td>
              <td>Full refund of that month.</td>
            </tr>
            <tr>
              <td>Agreed work for a paid month is not delivered</td>
              <td>Refund or credit for the undelivered part, your choice.</td>
            </tr>
            <tr>
              <td>You were charged in error</td>
              <td>Full refund of the incorrect amount.</td>
            </tr>
            <tr>
              <td>Rankings or calls did not reach a level you hoped for</td>
              <td>
                Not refundable, because results depend on platforms I do not control. See{" "}
                <Link href="/terms">no ranking guarantees</Link>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Approved third-party costs, such as paid listings or sponsorships, follow the refund rules of the company that
        charged them. Refunds are paid back to the original payment method, normally within 14 days of being agreed.
      </p>

      <h2 id="handover">What happens when you leave</h2>
      <ul>
        <li>You keep your Google Business Profile, website, content and all accounts. They were always yours.</li>
        <li>You get the final report and any work completed in your last paid month.</li>
        <li>I remove my access to your accounts, or you can remove it yourself at any time.</li>
      </ul>

      <h2 id="rights">Your legal rights</h2>
      <p>
        This policy does not affect any rights you have under the consumer protection laws of the country where you
        live, such as cancellation rights for services bought at a distance where they apply. If you think you are owed
        a refund, email me and I will look at it promptly.
      </p>
    </LegalLayout>
  );
}
