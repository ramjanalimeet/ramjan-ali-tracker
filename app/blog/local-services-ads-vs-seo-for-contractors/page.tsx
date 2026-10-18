import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("local-services-ads-vs-seo-for-contractors")!;

export const metadata = pageMeta({
  title: "Local Services Ads vs SEO for Contractors: Cost, Leads & Which Wins",
  description:
    "Local Services Ads vs local SEO vs Google Ads for roofers, plumbers, HVAC and septic companies: how each is paid, cost per lead over time and which to choose.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "Do Local Services Ads help my SEO or map rankings?",
    a: "Not directly. Local Services Ads are a separate paid placement and do not change how your Google Business Profile ranks in the map pack. They share some ingredients, such as reviews and accurate business details, so work on one often helps the other.",
  },
  {
    q: "What does a Local Services Ads lead cost?",
    a: "It depends on the trade, the job type and the market. Prices range from tens of dollars for some services to well over $100 for competitive trades such as roofing in large cities. Google shows the expected cost per lead in your account when you set up.",
  },
  {
    q: "Can I stop paying for SEO once I rank?",
    a: "You can scale it down, but rankings need upkeep. Competitors keep working, reviews need to stay recent and pages need updating. Most businesses move to a lighter maintenance plan rather than stopping completely.",
  },
  {
    q: "Which is better for emergency jobs like burst pipes or no-heat calls?",
    a: "Local Services Ads and the map pack both do well for urgent searches because they show a phone number at the top of the page. In practice, the strongest setup for emergency trades is a well-ranked Google Business Profile plus Local Services Ads to cover the gaps.",
  },
  {
    q: "Is SEO worth it for a small, one-truck business?",
    a: "Often yes, especially in smaller towns and less crowded trades where the map pack is easier to win. A free audit is the quickest way to see how hard your market is before you spend anything.",
  },
];

export default function LocalServicesAdsVsSeoForContractorsPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="How Google Local Services Ads, Google Ads and local SEO compare for roofers, plumbers, HVAC and septic companies, and how to decide where your marketing budget goes."
    >
      <p>Search &quot;plumber near me&quot; and you will usually see three things before any normal website: Local Services Ads with a &quot;Google Screened&quot; or &quot;Google Guaranteed&quot; badge, regular Google Ads, and the map pack. Each one is a different way to pay for calls, and contractors often spend on the wrong one first.</p>
      <p>This guide compares them honestly, including where SEO is <em>not</em> the right answer yet.</p>
      <div className="note takeaways">
      <p><strong>The short version:</strong> Local Services Ads and Google Ads buy calls now, at a price that never really goes down. Local SEO costs more up front relative to the calls it brings in the early months, then the cost per call keeps falling while the rankings hold. Most established contractors do best with both: ads for speed, SEO for margin.</p>
      </div>
      <nav className="toc" aria-label="In this article"><b>In this article</b><ol>
        <li><a href="#three-options">The three ways to get calls from Google</a></li>
        <li><a href="#lsa">How Local Services Ads work</a></li>
        <li><a href="#seo">How local SEO works by comparison</a></li>
        <li><a href="#math">The math: cost per lead over 12 months</a></li>
        <li><a href="#choose">Which should you choose?</a></li>
        <li><a href="#together">Running both without wasting money</a></li>
        <li><a href="#faq">People also ask</a></li>
      </ol></nav>
      <h2 id="three-options">The three ways to get calls from Google</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th></th><th>Local Services Ads</th><th>Google Ads (search)</th><th>Local SEO</th></tr>
      </thead>
      <tbody>
      <tr><td><strong>Where you show</strong></td><td>Very top of the page for many service searches</td><td>Top and bottom of the results, marked &quot;Sponsored&quot;</td><td>Map pack and normal organic results</td></tr>
      <tr><td><strong>How you pay</strong></td><td>Per lead (call or message)</td><td>Per click, whether or not they call</td><td>A monthly fee or in-house time, not per lead</td></tr>
      <tr><td><strong>Time to first calls</strong></td><td>Days to a few weeks, after screening</td><td>Days</td><td>Weeks to months, depending on the market</td></tr>
      <tr><td><strong>Cost per lead over time</strong></td><td>Roughly flat, and rises as more competitors bid</td><td>Roughly flat, and rises with competition</td><td>Falls as rankings and traffic grow</td></tr>
      <tr><td><strong>When you stop paying</strong></td><td>Leads stop the same day</td><td>Leads stop the same day</td><td>Rankings fade slowly, often over months</td></tr>
      <tr><td><strong>Control</strong></td><td>Low: job types, area, hours and budget</td><td>High: keywords, ads, landing pages and bids</td><td>Medium: you control your site and profile, not Google</td></tr>
      <tr><td><strong>Trust signal</strong></td><td>Google badge, background and license checks</td><td>&quot;Sponsored&quot; label, which some people skip</td><td>Reviews and organic position, which many people trust most</td></tr>
      <tr><td><strong>Best for</strong></td><td>Filling the schedule fast in trades it covers</td><td>Specific high-value jobs and testing offers</td><td>Lowering cost per job and building an asset you own</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="lsa">How Local Services Ads work</h2>
      <p>Local Services Ads are Google&apos;s pay-per-lead ads for service businesses. To run them, your business goes through Google&apos;s screening, which for most trades includes background checks and license and insurance verification. Once approved, you appear with a badge at the very top of many service searches, and customers can call or message you directly.</p>
      <p>You do not choose keywords. You choose your job types, service area, hours and weekly budget. Where you appear depends on things like your proximity to the customer, your reviews, how quickly you answer, your hours and your budget.</p>
      <h3>Where Local Services Ads shine</h3>
      <ul>
      <li>A new business, or one with few reviews, that needs calls now.</li>
      <li>Emergency trades where the top phone number on the page wins.</li>
      <li>Filling slow weeks without a long commitment.</li>
      </ul>
      <h3>Where they hurt</h3>
      <ul>
      <li>You pay for every lead, including tire-kickers and wrong job types. You can dispute some invalid leads, but not all.</li>
      <li>Lead prices tend to rise as more competitors in your area join.</li>
      <li>You build nothing you keep. The day the budget stops, so do the calls.</li>
      </ul>
      <h2 id="seo">How local SEO works by comparison</h2>
      <p>Local SEO is the work that gets your Google Business Profile into the <Link href="/blog/how-to-rank-in-google-map-pack">map pack</Link> and your website into organic results: profile optimization, <Link href="/seo-services/on-page-seo">service pages</Link>, <Link href="/blog/service-area-pages-that-rank">service area pages</Link>, reviews, citations and <Link href="/seo-services/link-building">local links</Link>.</p>
      <blockquote>
      <p>&quot;Local results are based primarily on relevance, distance, and prominence.&quot;</p>
      <cite>Google, <Ext href="https://support.google.com/business/answer/7091">Tips to improve your local ranking on Google</Ext></cite>
      </blockquote>
      <p>You cannot buy any of those three. That is the downside, because it takes time, and the upside, because once you have them a competitor cannot simply outbid you tomorrow.</p>
      <h2 id="math">The math: cost per lead over 12 months</h2>
      <p>Here is a simple worked example. The numbers are illustrative, not a quote or a promise. Plug in your own from your ad account and your market.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Month</th><th>Local Services Ads ($60 per lead, $1,800 per month)</th><th>Local SEO ($1,200 per month)</th></tr>
      </thead>
      <tbody>
      <tr><td>1 to 3</td><td>30 leads a month · $60 per lead</td><td>3 to 8 extra leads a month · $150 to $400 per lead</td></tr>
      <tr><td>4 to 6</td><td>26 to 30 leads a month · $60 to $70 per lead</td><td>10 to 20 extra leads a month · $60 to $120 per lead</td></tr>
      <tr><td>7 to 12</td><td>22 to 28 leads a month · $65 to $80 per lead as competition grows</td><td>20 to 40+ extra leads a month · $30 to $60 per lead</td></tr>
      <tr><td>If you stop</td><td>0 leads the next day</td><td>Most leads continue for months while rankings hold</td></tr>
      </tbody>
      </table>
      </div>
      <p>The pattern holds in most markets even when the numbers change: ads are cheaper per lead early on, SEO is cheaper per lead later. How fast that crossover happens depends on your competition, which is covered in <Link href="/blog/how-long-does-local-seo-take">how long local SEO takes</Link>.</p>
      <h2 id="choose">Which should you choose?</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Your situation</th><th>Start with</th><th>Why</th></tr>
      </thead>
      <tbody>
      <tr><td>New business, under 20 reviews</td><td>Local Services Ads, plus profile and review basics</td><td>You need calls now, and reviews help both channels</td></tr>
      <tr><td>Established, but paying more and more per lead</td><td>Local SEO, keeping ads running at a lower budget</td><td>Bring cost per job down without a drop in calls</td></tr>
      <tr><td>Rural or wide service area (for example septic)</td><td>Local SEO first</td><td>Competition is often light, and SEO can rank you town by town</td></tr>
      <tr><td>Seasonal trade (HVAC, roofing)</td><td>SEO started 3 to 6 months before peak, ads during peak</td><td>Rankings need to be in place before the rush, not after</td></tr>
      <tr><td>Want specific high-value jobs (repipes, full roof replacements)</td><td>Dedicated service pages, plus Google Ads to test demand</td><td>Ads show quickly which jobs convert, and SEO captures them long term</td></tr>
      <tr><td>Profile suspended</td><td>Local Services Ads to cover calls while you appeal</td><td>See the <Link href="/blog/google-business-profile-suspended">suspension guide</Link></td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="together">Running both without wasting money</h2>
      <ul>
      <li><strong>Track calls by source.</strong> Use a separate tracking number for each channel so you know what each booked job actually cost.</li>
      <li><strong>Use the same reviews strategy for both.</strong> More recent, detailed reviews help your profile rank and help your ads convert.</li>
      <li><strong>Turn ads down as rankings grow.</strong> When you rank in the map pack for a service, test lowering the ad budget for that service and watch total calls.</li>
      <li><strong>Answer fast.</strong> Responsiveness affects Local Services Ads, and a missed call from either channel is money gone.</li>
      </ul>
      <p>Want a straight answer for your business? On a <Link href="/book-a-call">free strategy call</Link> I will show you how hard your local market is to rank in and whether SEO, ads or both make sense right now. If SEO is not worth it for you yet, I will tell you. You can also compare monthly plans on the <Link href="/pricing">pricing page</Link>.</p>
    </ArticleLayout>
  );
}
