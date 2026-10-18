import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { PLANS, fromPrice, usd } from "@/lib/pricing";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("how-much-does-local-seo-cost")!;

export const metadata = pageMeta({
  title: "How Much Does Local SEO Cost? Pricing for Home Services",
  description:
    "What local SEO costs for contractors and home service businesses: pricing models, what each budget level gets you, red flags and how to tell if it pays off.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "How much should a small contractor pay for local SEO?",
    a: "Many single-location home service businesses in smaller markets spend a few hundred to around a thousand dollars a month. Competitive metros and multi-location businesses usually need more. The right budget depends on your competition and how many services and towns you want to rank for.",
  },
  {
    q: "Why do SEO prices vary so much?",
    a: "Because the work varies. Prices depend on how competitive your market is, how many services and towns you target, whether new pages, links and AI visibility are included, and who does the work, from a solo specialist to a large agency.",
  },
  {
    q: "Is cheap SEO worth it?",
    a: "Very cheap packages often mean automated reports, directory submissions and little real work. That can be worse than nothing if it includes spammy links. Look for named deliverables each month, such as pages, profile work and links, rather than a low price.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "Not necessarily. Many providers, including my own plans, run month to month. A long minimum term is not automatically bad, but you should know exactly what you get each month and how to leave.",
  },
  {
    q: "How do I know if SEO is paying off?",
    a: "Track calls and form leads from Google, how many become booked jobs, and the revenue from those jobs. Compare that revenue with what you spend each month. Early months are an investment; the return usually builds over time.",
  },
  {
    q: "What are your prices?",
    a: `My plans start at ${usd(fromPrice())} a month for one location in a smaller market. Every plan is month to month. See the pricing page for what each plan includes.`,
  },
];

export default function HowMuchDoesLocalSeoCostPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="Local SEO prices range from a few hundred dollars a month to several thousand. Here is what each budget actually buys for a home service business, the pricing models you will see, and how to work out whether it pays for itself."
    >
      <p>&quot;How much does SEO cost?&quot; is usually the second question every contractor asks, right after &quot;how long does it take?&quot;. The honest answer is a range, but it is not a mystery. Price follows the work: how competitive your market is, how many services and towns you want, and what gets done each month.</p>
      <p>This guide breaks down the pricing models you will come across, what each budget level realistically buys, the red flags to watch for, and a simple way to check whether SEO will pay for itself.</p>
      <div className="note takeaways">
      <p><strong>Key takeaways</strong></p>
      <ul>
      <li>Most home service businesses pay a monthly fee, not a one-off price.</li>
      <li>Budget follows competition: a rural septic company needs less than a metro roofer.</li>
      <li>Judge an offer by its monthly deliverables, not its price.</li>
      <li>Guaranteed rankings and secret methods are red flags.</li>
      <li>Measure SEO by booked jobs and revenue, not rankings alone.</li>
      </ul>
      </div>
      <nav className="toc" aria-label="In this article">
      <b>In this article</b><ol>
      <li><a href="#models">Pricing models you will see</a></li>
      <li><a href="#ranges">Typical monthly ranges</a></li>
      <li><a href="#factors">What drives the price</a></li>
      <li><a href="#my-plans">What my plans cost and include</a></li>
      <li><a href="#roi">Will it pay for itself? A simple check</a></li>
      <li><a href="#by-trade">How cost differs by trade and market</a></li>
      <li><a href="#one-off">One-off costs to expect</a></li>
      <li><a href="#compare">SEO vs other ways to spend the same money</a></li>
      <li><a href="#red-flags">Red flags when comparing SEO offers</a></li>
      <li><a href="#questions">Questions to ask before you hire</a></li>
      <li><a href="#diy">Can you do it yourself?</a></li>
      <li><a href="#next">Get a straight number for your business</a></li>
      <li><a href="#faq">People also ask</a></li>
      </ol>
      </nav>
      <h2 id="models">Pricing models you will see</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Model</th><th>How it works</th><th>Good for</th><th>Watch out for</th></tr>
      </thead>
      <tbody>
      <tr><td>Monthly retainer</td><td>Fixed fee for ongoing work</td><td>Most local businesses, since SEO is ongoing</td><td>Vague deliverables</td></tr>
      <tr><td>One-off project</td><td>Fixed price for a defined job, such as an audit or site rebuild</td><td>Fixing a specific problem</td><td>Rankings fade without ongoing work</td></tr>
      <tr><td>Hourly</td><td>Billed by time</td><td>Consulting, training your own team</td><td>Hard to predict costs</td></tr>
      <tr><td>Pay per lead or performance</td><td>Pay per call or ranking</td><td>Rarely a good fit</td><td>The provider often owns the site or number, not you</td></tr>
      </tbody>
      </table>
      </div>
      <p>Pay-per-lead SEO deserves a warning. Some providers build rank-and-rent sites in your area and sell you the calls. You never own the asset, and the leads can be sold to your competitor next month. If you want pay-per-lead, compare it with <Link href="/blog/local-services-ads-vs-seo-for-contractors">Local Services Ads vs SEO</Link> first.</p>
      <h2 id="ranges">Typical monthly ranges</h2>
      <p>These are broad market ranges for home service businesses. They vary by country, market and provider.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Budget per month</th><th>What it usually buys</th><th>Usually right for</th></tr>
      </thead>
      <tbody>
      <tr><td>Under $300</td><td>Profile posting, basic citations, automated reports. Little new content</td><td>Rarely enough to move rankings in a competitive market</td></tr>
      <tr><td>$300 to $1,000</td><td>Profile management, a few new pages a month, citations, a review system, reporting</td><td>One location in a smaller or medium market</td></tr>
      <tr><td>$1,000 to $2,500</td><td>All of the above plus more pages, local link building, rank grids, AI visibility work</td><td>Competitive metros and growing companies</td></tr>
      <tr><td>$2,500+</td><td>Multiple locations, heavy content and link building, PR</td><td>Multi-location and very competitive markets</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="factors">What drives the price</h2>
      <ul>
      <li><strong>Competition.</strong> Roofing in a large metro needs far more work than septic in a rural county.</li>
      <li><strong>Scope.</strong> Five services in five towns is a different job from fifteen services in thirty towns.</li>
      <li><strong>Starting point.</strong> A site with no service pages needs more building than one that just needs tuning.</li>
      <li><strong>Locations.</strong> Each real location has its own profile, reviews and rankings to manage.</li>
      <li><strong>Extras:</strong> link building, AI search visibility, content volume, call tracking.</li>
      </ul>
      <p>The fastest way to estimate your own level is to look at your market. A <Link href="/seo-services/seo-audits">SEO audit</Link> compares you with the businesses already winning and shows how much work the gap needs.</p>
      <h2 id="my-plans">What my plans cost and include</h2>
      <p>For transparency, here is how my own plans compare. All are month to month.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Plan</th><th>Price per month</th><th>Best for</th><th>Highlights</th></tr>
      </thead>
      <tbody>
      <tr><td>{PLANS[0].name}</td><td>{usd(PLANS[0].price)}</td><td>{PLANS[0].tagline}</td><td>Profile optimization, 2 new pages a month, citations, review system, monthly report</td></tr>
      <tr><td>{PLANS[1].name}</td><td>{usd(PLANS[1].price)}</td><td>{PLANS[1].tagline}</td><td>4 new pages a month, local links, map rank grid, GEO and AI visibility, strategy call</td></tr>
      <tr><td>{PLANS[2].name}</td><td>{usd(PLANS[2].price)}</td><td>{PLANS[2].tagline}</td><td>Up to 3 profiles, 8 pages a month, more links and PR, full AI visibility, calls every two weeks</td></tr>
      </tbody>
      </table>
      </div>
      <p>The full list of what is included is on the <Link href="/pricing">pricing page</Link>.</p>
      <h2 id="roi">Will it pay for itself? A simple check</h2>
      <p>You do not need a complicated model. Work out three numbers:</p>
      <ol>
      <li><strong>Average job value</strong> for the services you want more of.</li>
      <li><strong>Close rate</strong> on calls from Google (how many calls become booked jobs).</li>
      <li><strong>Monthly SEO cost.</strong></li>
      </ol>
      <p>Then ask: how many extra booked jobs a month would cover the cost?</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Example (illustrative)</th><th>Number</th></tr>
      </thead>
      <tbody>
      <tr><td>Monthly SEO cost</td><td>$750</td></tr>
      <tr><td>Average job value</td><td>$1,200</td></tr>
      <tr><td>Gross margin on the job</td><td>40%, so $480 profit per job</td></tr>
      <tr><td>Jobs needed to break even</td><td>About 2 a month</td></tr>
      <tr><td>Calls needed at a 50% close rate</td><td>About 4 extra calls a month</td></tr>
      </tbody>
      </table>
      </div>
      <p>For a roofer or HVAC company where one replacement is worth several thousand dollars, a single extra job can cover months of SEO. For lower-ticket services, you need more volume, which is why the right services to target matter as much as the budget.</p>
      <div className="note">
      <p><strong>Remember the timeline.</strong> The first months are mostly foundation work. Most businesses see the return build from month three to six onward. See <Link href="/blog/how-long-does-local-seo-take">how long local SEO takes</Link> for a realistic month-by-month view.</p>
      </div>
      <h2 id="by-trade">How cost differs by trade and market</h2>
      <p>Two businesses with the same plan can need very different amounts of work. Competition is the biggest driver, and competition depends on the trade and the size of the market.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Situation</th><th>Competition</th><th>What it usually means for budget</th></tr>
      </thead>
      <tbody>
      <tr><td>Septic, well pump or chimney company in a rural county</td><td>Low</td><td>Often fine on a starter-level plan</td></tr>
      <tr><td>Plumber or HVAC company in a mid-sized town</td><td>Medium</td><td>Starter to mid-level, depending on how many services and towns</td></tr>
      <tr><td>Roofer, HVAC or plumber in a large metro</td><td>High</td><td>Mid-level or higher, with links and steady content</td></tr>
      <tr><td>Water damage, pest control or locksmith in a large metro</td><td>Very high (heavy ad spend and lead-gen sites)</td><td>Higher budgets, or a narrower focus on specific suburbs</td></tr>
      <tr><td>Multi-location business</td><td>Varies</td><td>Priced per location or per market</td></tr>
      </tbody>
      </table>
      </div>
      <p>If your budget is limited and your market is competitive, the best move is usually to narrow the focus: win your home town and two or three high-value services first, then expand.</p>
      <h2 id="one-off">One-off costs to expect</h2>
      <p>Beyond the monthly fee, some businesses need one-time work at the start:</p>
      <ul>
      <li><strong>A deep audit</strong> to find what is holding you back, often included at the start of a plan.</li>
      <li><strong>Website fixes or a rebuild</strong> if the current site is slow, broken on mobile or impossible to edit.</li>
      <li><strong>Photography</strong> of your team, trucks and jobs. Real photos help both rankings and conversions.</li>
      <li><strong>Call tracking setup</strong> so every call from Google can be measured.</li>
      </ul>
      <p>Ask for these to be quoted separately and up front, so there are no surprises.</p>
      <h2 id="compare">SEO vs other ways to spend the same money</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Option</th><th>Speed</th><th>What you keep if you stop</th></tr>
      </thead>
      <tbody>
      <tr><td>Local SEO</td><td>Slower start</td><td>Rankings, pages and reviews keep working for months</td></tr>
      <tr><td>Local Services Ads</td><td>Fast</td><td>Nothing. Leads stop the same day</td></tr>
      <tr><td>Google search ads</td><td>Fast</td><td>Nothing, except the data on what converts</td></tr>
      <tr><td>Shared lead services</td><td>Fast</td><td>Nothing, and you compete with other contractors for each lead</td></tr>
      </tbody>
      </table>
      </div>
      <p>Most established businesses use a mix: ads for speed, SEO to lower the cost of each job over time.</p>
      <h2 id="red-flags">Red flags when comparing SEO offers</h2>
      <blockquote>
      <p>&quot;No one can guarantee a #1 ranking on Google.&quot;</p>
      <cite>Google Search Central, <Ext href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo">Do you need an SEO?</Ext></cite>
      </blockquote>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Red flag</th><th>Why it matters</th></tr>
      </thead>
      <tbody>
      <tr><td>Guaranteed number one rankings</td><td>Nobody controls Google. Guarantees usually mean tricks or meaningless keywords</td></tr>
      <tr><td>&quot;Secret&quot; or proprietary methods</td><td>Good SEO is not secret. You should know what is being done</td></tr>
      <tr><td>You do not own your profile, site or tracking numbers</td><td>You lose everything if you leave</td></tr>
      <tr><td>Hundreds of links per month for a low price</td><td>Usually spam links that can hurt you</td></tr>
      <tr><td>Reports full of rankings for terms nobody searches</td><td>Looks good, brings no calls</td></tr>
      <tr><td>No clear monthly deliverables</td><td>You cannot tell whether work is being done</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="questions">Questions to ask before you hire</h2>
      <ul>
      <li>What exactly will you do in the first 90 days, and each month after that?</li>
      <li>Will I own everything: profile, website, content, tracking?</li>
      <li>How will you measure success? Calls and booked jobs, or just rankings?</li>
      <li>Who actually does the work?</li>
      <li>Can I leave at any time? What happens to the work if I do?</li>
      <li>Do you work with my direct competitors in the same area?</li>
      </ul>
      <h2 id="diy">Can you do it yourself?</h2>
      <p>Yes, partly. A motivated owner can handle the basics with the <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist for contractors</Link>: profile setup, reviews and accurate listings. The parts that are hardest to do yourself are consistent content, technical fixes, local link building and tracking, mostly because they take steady time every month.</p>
      <h2 id="next">Get a straight number for your business</h2>
      <p>The best way to know what SEO should cost you is to look at your actual market. On a <Link href="/book-a-call">free strategy call</Link> I review your profile, website and top competitors, then tell you which plan fits, or whether you should wait. Plans start at {usd(fromPrice())} a month, month to month.</p>
    </ArticleLayout>
  );
}
