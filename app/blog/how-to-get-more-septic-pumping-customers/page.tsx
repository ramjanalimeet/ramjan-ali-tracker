import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("how-to-get-more-septic-pumping-customers")!;

export const metadata = pageMeta({
  title: "How to Get More Septic Pumping Customers: A 90-Day Google Plan",
  description:
    "A practical 90-day plan for septic companies to get more pumping, inspection and repair calls from Google Maps and search across a wide rural service area.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "What Google Business Profile category should a septic company use?",
    a: "Most septic companies should use “Septic system service” as the primary category. Add secondary categories only for work you genuinely do, for example drainage or excavation services. Check which categories the top three competitors in your area use.",
  },
  {
    q: "Should I build a page for every town I serve?",
    a: "No. Build pages for the counties and towns that bring in real work, and give each one genuinely local detail such as soil, permit rules and typical systems. Thin pages that only swap the town name can be treated as doorway pages.",
  },
  {
    q: "How long does SEO take for a septic company?",
    a: "Septic is usually less competitive online than plumbing or roofing, so profile fixes and service pages often show results faster. Many septic companies see movement in the first two to three months, with the outer towns in the service area following over the next few months.",
  },
  {
    q: "Is it worth targeting real estate inspection searches?",
    a: "Yes. Inspection searches come with a deadline, so buyers and agents call quickly, and a good inspection experience often turns into a long-term pumping customer and agent referrals.",
  },
  {
    q: "How do I get reviews from customers in remote towns?",
    a: "Ask on site, the same day, and send a direct review link by text before you leave. Ask customers to mention the service and the town in their own words. Never offer a discount or gift for a review.",
  },
];

export default function HowToGetMoreSepticPumpingCustomersPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="A practical 90-day plan for septic pumping, inspection and install companies to get more calls from Google Maps and search, across every town they drive to."
    >
      <p>Septic is one of the best trades for local SEO. Fewer companies compete online than in plumbing or roofing, every home on septic needs regular pumping, and urgent problems turn into calls fast.</p>
      <p>The challenge is geography. Your customers are spread across counties and small towns, often 30 or 40 minutes from your yard, and Google does not automatically connect your business to those places. This plan fixes that in 90 days.</p>
      <div className="note takeaways">
      <p><strong>The short version:</strong> Fix your Google Business Profile and service area, build one strong page per septic service, add useful pages for the counties that bring in real work, collect reviews from across the whole area, and own the real estate inspection searches.</p>
      </div>
      <nav className="toc" aria-label="In this article"><b>In this article</b><ol>
        <li><a href="#why-different">Why septic search is different</a></li>
        <li><a href="#searches">The searches worth winning</a></li>
        <li><a href="#plan">The 90-day plan</a></li>
        <li><a href="#mistakes">Common mistakes that cost septic companies calls</a></li>
        <li><a href="#measure">How to measure whether it is working</a></li>
        <li><a href="#faq">People also ask</a></li>
      </ol></nav>
      <h2 id="why-different">Why septic search is different</h2>
      <ul>
      <li><strong>The demand repeats.</strong> Every home on septic needs regular pumping, so a customer you win once can come back every few years.</li>
      <li><strong>The service area is huge.</strong> You are often competing town by town against small local operators, not one dominant company.</li>
      <li><strong>Urgent searches convert.</strong> &quot;Septic backing up&quot; or &quot;sewage smell in yard&quot; is someone who needs a truck today.</li>
      <li><strong>Real estate drives demand.</strong> Home sales often need a septic inspection, with a deadline attached.</li>
      </ul>
      <blockquote>
      <p>&quot;Household septic tanks are typically pumped every three to five years.&quot;</p>
      <cite>U.S. EPA, <Ext href="https://www.epa.gov/septic/how-care-your-septic-system">How to Care for Your Septic System</Ext></cite>
      </blockquote>
      <p>That cycle matters for marketing. Every pumping job is a customer you can remind in three years, and every new homeowner in your area is a future customer who will probably start with a Google search.</p>
      <h2 id="searches">The searches worth winning</h2>
      <p>Not every search is worth the same. Map each one to the page that should rank for it.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Search type</th><th>Example searches</th><th>Intent</th><th>Page that should rank</th></tr>
      </thead>
      <tbody>
      <tr><td>Routine pumping</td><td>septic pumping near me, septic tank cleaning [county]</td><td>Ready to book, price-sensitive</td><td>Google Business Profile plus pumping service page</td></tr>
      <tr><td>Emergency</td><td>septic backing up, septic alarm going off</td><td>Urgent, high value</td><td>Emergency or repair page with the phone number up top</td></tr>
      <tr><td>Real estate</td><td>septic inspection for home sale, septic inspection cost</td><td>Deadline-driven, often an agent</td><td>Real estate inspection page</td></tr>
      <tr><td>Repairs and drain fields</td><td>drain field repair, septic drain field replacement</td><td>High ticket, researching</td><td>Drain field page with process and FAQs</td></tr>
      <tr><td>New systems</td><td>septic system installation [county], perc test [county]</td><td>High ticket, long decision</td><td>Installation page plus county pages covering permits</td></tr>
      <tr><td>Commercial</td><td>grease trap pumping, commercial septic service</td><td>Recurring contracts</td><td>Commercial services page</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="plan">The 90-day plan</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>When</th><th>Work</th><th>What you should have at the end</th></tr>
      </thead>
      <tbody>
      <tr><td>Weeks 1 to 2</td><td>Audit, profile fixes, service area, tracking</td><td>A clean, correct profile and call tracking in place</td></tr>
      <tr><td>Weeks 3 to 6</td><td>Service pages and the review system</td><td>One strong page per service, and reviews coming in weekly</td></tr>
      <tr><td>Weeks 7 to 10</td><td>County and town pages, citations</td><td>Pages for the areas that bring real work, consistent listings</td></tr>
      <tr><td>Weeks 11 to 13</td><td>Real estate partners, local links, review of results</td><td>Agent relationships, first local links, a plan for the next quarter</td></tr>
      </tbody>
      </table>
      </div>
      <h3>Weeks 1 to 2: profile, service area and tracking</h3>
      <ul>
      <li>Set &quot;Septic system service&quot; as the primary category, and add secondary categories only for work you really do.</li>
      <li>If customers do not come to your yard, hide the address and list the towns and counties you serve. Keep it realistic; an area far bigger than you can actually cover can trigger a review. See <Link href="/blog/google-business-profile-suspended">why contractor profiles get suspended</Link>.</li>
      <li>List every service in the profile: pumping, inspections, real estate inspections, repairs, drain fields, installs, grease traps.</li>
      <li>Add real photos: your trucks, crew, equipment and jobs.</li>
      <li>Set up call tracking so you know which towns and services the calls come from.</li>
      </ul>
      <h3>Weeks 3 to 6: service pages and reviews</h3>
      <p>A single &quot;Services&quot; page with a bullet list will not rank for six different kinds of search. Build one page per service, each answering what the customer actually wants to know: what the job involves, how long it takes, signs you need it, what affects the price, and which areas you cover. The <Link href="/seo-services/on-page-seo">on-page SEO</Link> approach I use starts with exactly this structure.</p>
      <p>At the same time, start a review routine:</p>
      <ul>
      <li>Ask on site, the same day, and text a direct review link before leaving.</li>
      <li>Ask customers to mention the service and their town in their own words.</li>
      <li>Ask every customer, not only the ones you expect to be happy, and never offer anything in return. Google&apos;s review policies forbid both.</li>
      <li>Reply to every review, including the bad ones.</li>
      </ul>
      <h3>Weeks 7 to 10: county and town pages</h3>
      <p>This is where septic companies win the outer parts of their service area. Build pages for the counties and towns that bring in real work, and make each one genuinely local:</p>
      <ul>
      <li>Soil and site conditions that affect systems there.</li>
      <li>Permit and inspection rules for that county.</li>
      <li>Common system types (conventional, aerobic, mound) in the area.</li>
      <li>Real jobs you have done there, with photos.</li>
      </ul>
      <p>Pages that only swap the town name are the fastest way to waste this step. <Link href="/blog/service-area-pages-that-rank">How to write service area pages that rank</Link> covers how to avoid it. Clean up your citations at the same time so your name, address and phone match everywhere.</p>
      <h3>Weeks 11 to 13: real estate partners and local links</h3>
      <ul>
      <li>Create a clear real estate inspection page: what is checked, turnaround time and what the report includes.</li>
      <li>Introduce yourself to local agents and home inspectors. A page they can send clients to makes referring you easy.</li>
      <li>Earn local links from county extension offices, local business associations, sponsorships and supplier directories. <Link href="/seo-services/link-building">Local link building</Link> matters more in rural markets than most owners expect.</li>
      <li>Review what came in: calls by town and service, rankings across the area, and which pages bring leads.</li>
      </ul>
      <h2 id="mistakes">Common mistakes that cost septic companies calls</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Mistake</th><th>What it costs you</th><th>Better approach</th></tr>
      </thead>
      <tbody>
      <tr><td>Using &quot;Plumber&quot; as the primary category</td><td>Weaker relevance for septic searches</td><td>&quot;Septic system service&quot; as primary</td></tr>
      <tr><td>Copy-paste town pages</td><td>Pages that do not rank and can look like doorway spam</td><td>Fewer, genuinely local county pages</td></tr>
      <tr><td>Reviews only from customers near the yard</td><td>Weak visibility in outer towns</td><td>Ask everyone, everywhere, every job</td></tr>
      <tr><td>No inspection page</td><td>Missed deadline-driven calls and agent referrals</td><td>A dedicated real estate inspection page</td></tr>
      <tr><td>Buying shared leads instead of building rankings</td><td>Paying again for every customer, competing with others for the same lead</td><td>Build rankings, use ads only to fill gaps (see <Link href="/blog/local-services-ads-vs-seo-for-contractors">LSA vs SEO</Link>)</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="measure">How to measure whether it is working</h2>
      <ul>
      <li>Map rankings checked across a grid of your service area, not just from your yard.</li>
      <li>Calls and form leads by town and by service.</li>
      <li>Inspection requests and agent referrals.</li>
      <li>Review count and how recent the latest reviews are.</li>
      </ul>
      <p>In areas where septic is common outside the cities, such as around <Link href="/locations/wilmington">Wilmington</Link> and <Link href="/locations/asheville">Asheville</Link> in North Carolina or <Link href="/locations/savannah">Savannah</Link> and <Link href="/locations/augusta">Augusta</Link> in Georgia, the opportunity is often bigger than owners expect. For the full done-for-you version of this plan, see <Link href="/local-seo/septic-seo">septic SEO services</Link>, or book a <Link href="/book-a-call">free strategy call</Link> to review your profile, website and the competitors in your area.</p>
    </ArticleLayout>
  );
}
