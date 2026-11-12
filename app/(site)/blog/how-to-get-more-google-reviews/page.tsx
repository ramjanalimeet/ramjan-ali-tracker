import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("how-to-get-more-google-reviews")!;

export const metadata = pageMeta({
  title: "How Contractors Get More Google Reviews (Scripts & Templates)",
  description:
    "A review system for roofers, plumbers, HVAC and home service businesses: when to ask, word-for-word text and email scripts, reply templates and the rules.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "How do I get a direct link for customers to leave a Google review?",
    a: "In your Google Business Profile, choose the option to ask for reviews and copy the short link Google gives you. Send that link by text or email so customers land straight on the review box, with no searching.",
  },
  {
    q: "Can I offer a discount for leaving a review?",
    a: "No. Google's policies do not allow offering incentives for reviews, and the FTC's rule on consumer reviews also restricts incentives that are conditioned on a positive review. Ask every customer, offer nothing in return.",
  },
  {
    q: "Is it OK to only ask happy customers for reviews?",
    a: "No. Selectively asking only customers you expect to be happy, often called review gating, breaks Google's policies. Ask every customer you complete a job for.",
  },
  {
    q: "How many Google reviews does a contractor need?",
    a: "There is no magic number. Compare yourself with the businesses in the map pack for your main searches and aim to match and then pass their count, while keeping a steady flow of new reviews each month.",
  },
  {
    q: "Can I remove a bad Google review?",
    a: "Only if it breaks Google's policies, for example spam, a fake review or a review about a different business. You can report it for review. For genuine negative reviews, a calm, specific reply is your best tool.",
  },
  {
    q: "Should I reply to every review?",
    a: "Yes. Replies show future customers you care, and Google encourages businesses to respond. Keep positive replies short and personal, and take negative ones offline after a calm public reply.",
  },
];

export default function HowToGetMoreGoogleReviewsPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="A simple, rule-abiding review system for roofers, plumbers, HVAC and other home service businesses, with word-for-word request scripts, reply templates and the rules you must not break."
    >
      <p>Reviews do two jobs at once. They help you rank in the map pack, and they are often the thing that decides who gets the call once a homeowner sees three businesses side by side. A roofer with 40 recent, detailed reviews will usually beat one with 15 old ones, even if the second company does better work.</p>
      <p>The good news: you do not need tricks. You need a simple system that asks every customer, at the right moment, in a way that takes them 30 seconds. This guide gives you that system, including scripts you can copy.</p>
      <div className="note takeaways">
      <p><strong>Key takeaways</strong></p>
      <ul>
      <li>Ask every customer, the same day the job is finished, by text with a direct link.</li>
      <li>A steady flow of reviews beats an occasional burst.</li>
      <li>Ask customers to mention the service and their town in their own words.</li>
      <li>Never offer incentives, never ask only happy customers, never write or buy reviews.</li>
      <li>Reply to every review, and handle negative ones calmly and specifically.</li>
      </ul>
      </div>
      <nav className="toc" aria-label="In this article">
      <b>In this article</b><ol>
      <li><a href="#why">Why reviews matter for rankings and calls</a></li>
      <li><a href="#system">The 4-step review system</a></li>
      <li><a href="#scripts">Word-for-word request scripts</a></li>
      <li><a href="#timing">When to ask, by trade</a></li>
      <li><a href="#rules">The rules: what you cannot do</a></li>
      <li><a href="#replies">How to reply to reviews</a></li>
      <li><a href="#fake">Fake or unfair reviews</a></li>
      <li><a href="#measure">How to measure your review system</a></li>
      <li><a href="#next">Reviews are one part of the plan</a></li>
      <li><a href="#faq">People also ask</a></li>
      </ol>
      </nav>
      <h2 id="why">Why reviews matter for rankings and calls</h2>
      <p>Google is direct about reviews being part of local ranking:</p>
      <blockquote>
      <p>&quot;Google review count and review score factor into local search ranking. More reviews and positive ratings can improve your business&apos;s local ranking.&quot;</p>
      <cite>Google Business Profile Help, <Ext href="https://support.google.com/business/answer/7091">Tips to improve your local ranking on Google</Ext></cite>
      </blockquote>
      <p>Rankings are only half of it. When a homeowner compares three businesses in the map pack, they look at the star rating, the number of reviews and how recent the last few are. Reviews that mention a specific job and town (&quot;replaced our water heater in Frisco the same afternoon&quot;) do more convincing than any ad.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Review signal</th><th>Effect on rankings</th><th>Effect on calls</th></tr>
      </thead>
      <tbody>
      <tr><td>Total count</td><td>More reviews help prominence</td><td>High counts build instant trust</td></tr>
      <tr><td>Average rating</td><td>Higher ratings help</td><td>Many people skip businesses below about 4 stars</td></tr>
      <tr><td>Recency</td><td>A steady flow keeps the profile active</td><td>Recent reviews show you are still good today</td></tr>
      <tr><td>Detail (service, town)</td><td>Adds relevance for those services and places</td><td>Shows you have done jobs like theirs</td></tr>
      <tr><td>Your replies</td><td>Shows an active, engaged business</td><td>Calm replies to bad reviews reassure readers</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="system">The 4-step review system</h2>
      <ol>
      <li><strong>Get your direct review link.</strong> In your Business Profile, use the &quot;Ask for reviews&quot; option and copy the short link. Save it in your phone, your CRM and your invoice template.</li>
      <li><strong>Ask in person at the end of the job.</strong> The technician says one sentence (scripts below) while the customer is happy and the work is in front of them.</li>
      <li><strong>Send the link by text within the hour.</strong> Text gets opened far more than email. Use their first name and the job.</li>
      <li><strong>Send one reminder after three days</strong> if they have not left one. Then stop. More than one reminder starts to annoy.</li>
      </ol>
      <div className="note">
      <p><strong>Make one person responsible.</strong> The most common reason review systems fail is that nobody owns them. Give the office manager or the owner a weekly five-minute check: jobs completed versus review requests sent.</p>
      </div>
      <h2 id="scripts">Word-for-word request scripts</h2>
      <h3>In person (technician, end of the job)</h3>
      <p>&quot;Thanks for having us out today. We&apos;re a local business and reviews really help other homeowners find us. I&apos;m going to text you a link. If you have 30 seconds, it&apos;d mean a lot if you shared how the job went.&quot;</p>
      <h3>Text message (same day)</h3>
      <p>&quot;Hi Sarah, it&apos;s Mike from Lone Star Plumbing. Thanks for choosing us for your water heater today. If you have a moment, would you share a quick Google review? Mentioning what we did and your town helps neighbors find us: [link]&quot;</p>
      <h3>Email (for customers who prefer it)</h3>
      <p>Subject: &quot;How did we do on your roof repair?&quot;</p>
      <p>&quot;Hi David, thank you for trusting us with your roof repair in Allen. If you were happy with the work, a short Google review would help other homeowners in the area find a roofer they can trust. It takes about 30 seconds: [link]. If anything wasn&apos;t right, reply to this email and I&apos;ll fix it personally. Jake, Owner&quot;</p>
      <h3>Reminder (three days later, one time only)</h3>
      <p>&quot;Hi Sarah, just a quick reminder in case the link got buried. A short review would really help us: [link]. Thanks again!&quot;</p>
      <div className="note">
      <p><strong>Notice what the email does:</strong> it invites problems to come to you privately, but it still sends the review link to everyone. That is fine. What is not fine is sending the link <em>only</em> to people who say they were happy.</p>
      </div>
      <h2 id="timing">When to ask, by trade</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Trade</th><th>Best moment to ask</th><th>Why</th></tr>
      </thead>
      <tbody>
      <tr><td>Plumbing, emergency repairs</td><td>Right after the problem is fixed</td><td>Relief is highest when the water stops</td></tr>
      <tr><td>HVAC repair</td><td>Once the house is cooling or heating again</td><td>The customer can feel the result</td></tr>
      <tr><td>Roof replacement</td><td>Final walkthrough, after cleanup</td><td>A clean yard and a finished roof make the best impression</td></tr>
      <tr><td>Septic pumping</td><td>When the tech shares the tank condition report</td><td>The customer has just learned something useful</td></tr>
      <tr><td>Remodeling</td><td>At the reveal, then again after 2 weeks</td><td>Excitement at the reveal, considered praise later</td></tr>
      <tr><td>Recurring services (pest, lawn)</td><td>After the second or third visit</td><td>They have seen consistency</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="rules">The rules: what you cannot do</h2>
      <p>Review shortcuts can get reviews removed, profiles restricted and, in the US, attract regulatory penalties. Google&apos;s policy on fake engagement is clear:</p>
      <blockquote>
      <p>&quot;Don&apos;t discourage negative reviews or selectively solicit positive reviews from customers.&quot;</p>
      <cite>Google Maps user contributed content policy, <Ext href="https://support.google.com/contributionpolicy/answer/7400114">Prohibited and restricted content</Ext></cite>
      </blockquote>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Do not</th><th>Why</th></tr>
      </thead>
      <tbody>
      <tr><td>Offer discounts, gift cards or entries for reviews</td><td>Against Google&apos;s policies, and the FTC&apos;s 2024 rule on consumer reviews restricts incentives tied to positive reviews</td></tr>
      <tr><td>Ask only customers you expect to be happy (review gating)</td><td>Against Google&apos;s policies</td></tr>
      <tr><td>Write reviews for yourself or have staff and family do it</td><td>Fake engagement. Google removes it, and the FTC rule prohibits fake reviews</td></tr>
      <tr><td>Buy reviews or use review exchange groups</td><td>Fake engagement. Profiles can be restricted</td></tr>
      <tr><td>Set up a review kiosk or tablet at your office</td><td>Many reviews from one location and device can be filtered out</td></tr>
      </tbody>
      </table>
      </div>
      <p>Software that sends the same request to every customer is fine. Software that asks &quot;Were you happy?&quot; first and only sends the Google link to people who say yes is gating, and that is the risky kind.</p>
      <h2 id="replies">How to reply to reviews</h2>
      <h3>Positive reviews</h3>
      <p>Keep it short, personal and specific. Mention the job and the town naturally, without stuffing keywords:</p>
      <p>&quot;Thanks, Maria! Glad we could get your AC running again before the weekend heat. Say hi to Biscuit for us. The Cool Air team&quot;</p>
      <h3>Negative reviews</h3>
      <ol>
      <li>Wait until you are calm. Never reply the same hour you are angry.</li>
      <li>Thank them, acknowledge the specific problem and do not argue the details in public.</li>
      <li>Offer to fix it offline, with a name and a direct number.</li>
      <li>If you resolve it, it is fine to ask (once) whether they would update the review. Do not pressure them.</li>
      </ol>
      <p>&quot;Hi Tom, I&apos;m sorry the crew left debris in your driveway. That&apos;s not our standard. I&apos;d like to make it right. Please call me directly at 555-0142. Jake, Owner&quot;</p>
      <p>Future customers read your replies to bad reviews more carefully than the reviews themselves. A calm, fair reply often wins more trust than a perfect 5.0.</p>
      <h2 id="fake">Fake or unfair reviews</h2>
      <p>If a review is spam, from someone who was never a customer, or about a different business, report it from your Business Profile. Collect evidence (no matching customer record, competitor connection). Then reply calmly and briefly in public, for example: &quot;We can&apos;t find any record of this job. Please call us so we can look into it.&quot; Readers can tell the difference.</p>
      <h2 id="measure">How to measure your review system</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Measure</th><th>Healthy target</th></tr>
      </thead>
      <tbody>
      <tr><td>Requests sent / jobs completed</td><td>Close to 100%</td></tr>
      <tr><td>Reviews received / requests sent</td><td>Track it monthly and improve the script if it drops</td></tr>
      <tr><td>New reviews per month</td><td>Steady, every month, at or above your top competitors&apos; pace</td></tr>
      <tr><td>Days since the last review</td><td>Short, ideally days, not months</td></tr>
      <tr><td>Reply rate</td><td>100%</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="next">Reviews are one part of the plan</h2>
      <p>Reviews work best alongside the right <Link href="/blog/google-business-profile-categories-for-contractors">profile categories</Link>, strong service pages and local links. They also feed AI assistants: many AI answers about &quot;the best plumber near me&quot; summarize your reviews, which is why review detail matters for <Link href="/ai-search">AI search visibility</Link> too.</p>
      <p>Every <Link href="/local-seo">Local SEO</Link> plan I run includes a review request system set up for your team. If you want a second pair of eyes on your current reviews and how they compare with the businesses beating you, book a <Link href="/book-a-call">free strategy call</Link>.</p>
    </ArticleLayout>
  );
}
