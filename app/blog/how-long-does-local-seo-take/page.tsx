import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("how-long-does-local-seo-take")!;

export const metadata = pageMeta({
  title: "How Long Does Local SEO Take? A Realistic Timeline",
  description:
    "A realistic month-by-month timeline for local SEO results for home service businesses, what speeds it up or slows it down, and how to tell if it is working.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "How long does local SEO take to work?",
    a: "Most home service businesses see early movement in four to eight weeks, clearer gains in three to six months, and stable top positions for competitive searches in six to twelve months. Smaller towns and less crowded trades are often faster.",
  },
  {
    q: "Is local SEO worth it?",
    a: "For most home service businesses, yes. Local searches come from people ready to book, and unlike ads, rankings keep bringing in calls after the work slows down. It works best when you can answer the calls it brings.",
  },
  {
    q: "How much does local SEO cost per month?",
    a: "Agency retainers commonly range from a few hundred to a few thousand dollars a month, depending on market, competition and how many services and locations are covered. Compare what each quote actually includes.",
  },
  {
    q: "Why does local SEO take so long?",
    a: "Google needs time to crawl and trust changes, reviews and links build up gradually, and you are competing with businesses that may have years of head start. The work compounds, which is why results tend to accelerate over time.",
  },
  {
    q: "Can I speed up local SEO?",
    a: "Yes, by fixing the profile and technical problems first, getting reviews flowing quickly, focusing on fewer services and towns at a time, and starting before your busy season. You cannot safely skip the trust-building part.",
  },
  {
    q: "When should I stop if it is not working?",
    a: "Judge progress at three and six months against leading indicators such as impressions, map rankings on a grid and profile actions. If none of those are moving after six months of consistent work, something in the strategy needs to change.",
  },
  {
    q: "Is local SEO faster than general SEO?",
    a: "Usually, yes. Local competition is limited to businesses near you, and the Google Business Profile gives you a direct lever that national SEO does not have.",
  },
  {
    q: "How long does it take Google to update my Business Profile?",
    a: "Edits to your profile are usually reviewed and published within days, although some changes, such as name or address edits, can take longer or trigger re-verification.",
  },
  {
    q: "Do new businesses take longer to rank?",
    a: "Usually, yes. A new business starts with no reviews, links or history, so building prominence takes longer. Focusing on reviews and a handful of strong pages helps most.",
  },
  {
    q: "Is it worth doing SEO in the off-season?",
    a: "Yes. The off-season is the best time to start, because rankings need a few months to build. Work done in winter pays off when demand returns.",
  },
  {
    q: "Will my rankings drop if I stop doing SEO?",
    a: "Not immediately. Rankings usually hold for a while, then slowly fade as competitors keep working and your reviews and content age.",
  },
];

export default function HowLongLocalSeoPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="A realistic, month-by-month timeline for local SEO results for home service businesses, what makes it faster or slower in your market, and how to tell whether it is working long before the phone starts ringing more."
    >
      <div className="note takeaways">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>
            Expect early movement in four to eight weeks, clear gains in three to six months, and stable top positions
            in six to twelve.
          </li>
          <li>Competition, your starting point, reviews and focus change the speed most.</li>
          <li>Start a season before your busy period, especially for roofing, HVAC and outdoor trades.</li>
          <li>Judge progress by leading indicators: impressions, grid rankings, profile actions and reviews.</li>
          <li>Be wary of guarantees and results promised in days.</li>
        </ul>
      </div>
      <nav className="toc" aria-label="In this article">
        <b>In this article</b>
        <ol>
          <li>
            <a href="#short">The short answer</a>
          </li>
          <li>
            <a href="#timeline">Month-by-month timeline</a>
          </li>
          <li>
            <a href="#factors">What changes the speed</a>
          </li>
          <li>
            <a href="#trades">How timing differs by trade</a>
          </li>
          <li>
            <a href="#measure">How to tell if it is working</a>
          </li>
          <li>
            <a href="#faster">How to get results sooner</a>
          </li>
          <li>
            <a href="#redflags">Red flags</a>
          </li>
          <li>
            <a href="#faq">People also ask</a>
          </li>
        </ol>
      </nav>

      <h2 id="short">The short answer</h2>
      <p>
        For most home service businesses, local SEO shows early movement within four to eight weeks, clear gains in
        three to six months, and settles into stable top positions for competitive searches in six to twelve months. In
        a small town with few competitors it can be much faster. In a big city in a crowded trade like roofing or HVAC,
        it can take longer.
      </p>
      <p>That range is not just my experience. Google itself has given a similar figure:</p>
      <blockquote>
        <p>
          &ldquo;In most cases, SEOs need four months to a year to help your business first implement improvements and
          then see potential benefit.&rdquo;
        </p>
        <cite>
          Maile Ohye, then a Developer Programs Tech Lead at Google, in Google&apos;s 2017 video &quot;How to hire an
          SEO&quot; (
          <Ext href="https://searchengineland.com/google-releases-new-video-hire-seo-consultant-269463">
            coverage on Search Engine Land
          </Ext>
          )
        </cite>
      </blockquote>
      <p>
        Local SEO for a service business often sits at the faster end of that range, because the Google Business Profile
        is a direct lever and you are only competing with businesses near you.
      </p>

      <h2 id="timeline">Month-by-month timeline</h2>
      <p>
        Here is what a typical engagement looks like when the work is done consistently. Your market will move faster or
        slower, but the order rarely changes.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Work happening</th>
              <th>What you usually see</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weeks 1 to 4</td>
              <td>Audit, research, profile fixes, technical fixes, review process set up</td>
              <td>Profile changes picked up; more profile views; first new reviews</td>
            </tr>
            <tr>
              <td>Months 2 to 3</td>
              <td>Core service pages, citation cleanup, first area pages</td>
              <td>Rankings move for less competitive searches and nearby areas; impressions rise</td>
            </tr>
            <tr>
              <td>Months 4 to 6</td>
              <td>More pages, local links, steady reviews, profile posts</td>
              <td>Map pack appearances spread across more of your area; calls increase</td>
            </tr>
            <tr>
              <td>Months 7 to 12</td>
              <td>Content for every service and key town, ongoing links and reviews</td>
              <td>Top positions for main searches; steady, predictable lead flow</td>
            </tr>
            <tr>
              <td>Year 2+</td>
              <td>Maintenance, new services and areas, defending rankings</td>
              <td>Compounding returns; lower cost per lead than ads</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Weeks 1 to 4: foundations</h3>
      <p>
        The first month is about fixing what is broken. Categories get corrected, services listed, photos added and
        technical problems such as unindexed pages fixed. Google often picks up profile changes within days to weeks, so
        this is when you may see the first small lift, especially if the profile was badly incomplete before.
      </p>
      <h3>Months 2 to 3: relevance</h3>
      <p>
        New service pages and cleaned-up citations start to register. Rankings usually improve first for long, specific
        searches such as &quot;water heater replacement in [town]&quot;, and in the areas closest to your address.
        Impressions in Search Console rise before clicks do.
      </p>
      <h3>Months 4 to 6: prominence</h3>
      <p>
        Reviews and local links accumulate. This is where the map pack starts to show up across a wider part of your
        service area, and where most owners notice a real change in calls.
      </p>
      <h3>Months 7 to 12: momentum</h3>
      <p>
        With the foundations in place, each new page, review and link adds to what is already there. Competitive head
        terms such as &quot;roofer near me&quot; in a big city usually fall into place in this period.
      </p>

      <h2 id="factors">What changes the speed</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>Faster when</th>
              <th>Slower when</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Competition</td>
              <td>Small town, few established competitors</td>
              <td>Big city, crowded trade, national brands and lead sellers</td>
            </tr>
            <tr>
              <td>Starting point</td>
              <td>Some reviews and an existing site</td>
              <td>New business, no reviews, no website</td>
            </tr>
            <tr>
              <td>Profile history</td>
              <td>Clean, verified, consistent</td>
              <td>Past suspensions, duplicates, changing addresses</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>Fast, indexed, one page per service</td>
              <td>Slow, thin, or on a platform that is hard to change</td>
            </tr>
            <tr>
              <td>Reviews</td>
              <td>Customers asked after every job</td>
              <td>Reviews only now and then</td>
            </tr>
            <tr>
              <td>Focus</td>
              <td>A few services and towns at a time</td>
              <td>Trying to rank everywhere for everything at once</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="trades">How timing differs by trade</h2>
      <p>Seasonality matters as much as competition. Plan your start date around when your customers search:</p>
      <ul>
        <li>
          <strong>Roofing:</strong> storm-driven. Start in the off-season so rankings are ready before hail or hurricane
          season. See <Link href="/local-seo/roofing-seo">Roofing SEO</Link>.
        </li>
        <li>
          <strong>HVAC:</strong> peaks in summer and winter. Starting in June means ranking in September, after the
          rush. See <Link href="/local-seo/hvac-seo">HVAC SEO</Link>.
        </li>
        <li>
          <strong>Plumbing and drains:</strong> steady all year, with winter spikes for frozen pipes and water heaters.
          See <Link href="/local-seo/plumbing-seo">Plumbing SEO</Link>.
        </li>
        <li>
          <strong>Landscaping, lawn care and pools:</strong> customers sign up in early spring, so rank by late winter.
          See <Link href="/local-seo/lawn-care-seo">Lawn Care SEO</Link>.
        </li>
        <li>
          <strong>Chimney and snow removal:</strong> booked in late summer and autumn. See{" "}
          <Link href="/local-seo/chimney-seo">Chimney SEO</Link>.
        </li>
      </ul>
      <p>
        Every other trade is covered on the <Link href="/industries">industries page</Link>, each with its own seasonal
        notes.
      </p>

      <h2 id="ads">Local SEO vs ads: how the timelines compare</h2>
      <p>
        If you need calls this week, local SEO is not the right tool on its own. Paid options are faster, but they stop
        the moment you stop paying. Here is how they compare:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Local SEO</th>
              <th>Google Ads</th>
              <th>Local Services Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time to first leads</td>
              <td>Weeks to months</td>
              <td>Days</td>
              <td>Days to weeks (after verification)</td>
            </tr>
            <tr>
              <td>How you pay</td>
              <td>Monthly work</td>
              <td>Per click</td>
              <td>Per lead</td>
            </tr>
            <tr>
              <td>Cost over time</td>
              <td>Falls per lead as rankings grow</td>
              <td>Rises with competition</td>
              <td>Rises with competition</td>
            </tr>
            <tr>
              <td>When you stop</td>
              <td>Rankings mostly hold for a while</td>
              <td>Leads stop immediately</td>
              <td>Leads stop immediately</td>
            </tr>
            <tr>
              <td>Helps AI visibility</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Many home service businesses run ads during the first few months of SEO, then reduce spend once organic leads
        are steady. Reviews help both, so the review habit pays off twice. For a full cost comparison, see{" "}
        <Link href="/blog/local-services-ads-vs-seo-for-contractors">Local Services Ads vs SEO for contractors</Link>.
      </p>

      <h2 id="report">What a realistic first year looks like on paper</h2>
      <p>
        It helps to know what &quot;working&quot; looks like before you start. In a typical first year for a single
        location in a mid-size market, the reports tend to show a pattern like this. In the first quarter, impressions
        in Search Console climb while clicks barely move, and the map pack appears only near the shop. In the second
        quarter, clicks start to follow impressions, the rank grid shows top-three positions spreading into nearby
        neighborhoods, and profile calls rise. By the second half of the year, the main service searches are ranking in
        most of the area, new pages rank faster than the first ones did, and calls from search become predictable enough
        to plan around.
      </p>
      <p>
        The exact numbers depend entirely on your market, which is why I agree on targets with each client after looking
        at their competitors, rather than quoting a figure up front.
      </p>

      <h2 id="dips">Why rankings sometimes dip</h2>
      <p>Progress is rarely a straight line. Short dips are normal, and usually have a clear cause:</p>
      <ul>
        <li>
          <strong>Google updates.</strong> Core and local algorithm updates can shuffle rankings for a few weeks.
        </li>
        <li>
          <strong>Competitor activity.</strong> A competitor gets a burst of reviews or launches new pages.
        </li>
        <li>
          <strong>Profile edits.</strong> Changing your name, category or address can cause temporary drops, and some
          edits trigger re-verification.
        </li>
        <li>
          <strong>Seasonality.</strong> Fewer searches in the off-season means fewer impressions, even if rankings hold.
        </li>
        <li>
          <strong>Spam.</strong> New fake listings appear, especially in trades like locksmiths and garage doors.
        </li>
      </ul>
      <p>Judge progress over quarters, not weeks, and look at the trend across several indicators.</p>

      <h2 id="measure">How to tell if it is working</h2>
      <p>
        Calls are the goal, but they are a lagging indicator. Watch the leading indicators month by month so you know
        early whether things are moving:
      </p>
      <ol>
        <li>
          <strong>Impressions in Search Console</strong> rising for your service and town searches.
        </li>
        <li>
          <strong>Map rankings on a grid</strong>, with the area where you appear in the top three spreading outward.
        </li>
        <li>
          <strong>Profile actions</strong>: calls, website clicks and direction requests from your Google Business
          Profile.
        </li>
        <li>
          <strong>Reviews</strong> growing steadily, and recent.
        </li>
        <li>
          <strong>Calls and forms by source</strong>, tracked so you can see which came from search.
        </li>
        <li>
          <strong>AI mentions</strong>: whether AI tools name you when asked for your service in your area.
        </li>
      </ol>
      <p>
        I report on all six every month. You can see how that report is laid out on my{" "}
        <Link href="/case-studies">case studies page</Link>.
      </p>

      <h2 id="faster">How to get results sooner</h2>
      <ul>
        <li>Fix the Google Business Profile and technical problems first; they are the fastest wins.</li>
        <li>Ask every customer for a review from day one.</li>
        <li>Focus on your two or three most profitable services and closest towns before expanding.</li>
        <li>Start a season before your busy period.</li>
        <li>Answer the phone. More rankings with missed calls do not turn into jobs.</li>
        <li>Keep going. The biggest mistake is stopping at month three, just before results compound.</li>
      </ul>
      <p>
        The step-by-step version is in my{" "}
        <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist for contractors</Link>.
      </p>

      <h2 id="ai">What about AI search?</h2>
      <p>
        AI tools such as ChatGPT and Google&apos;s AI Overviews build their local recommendations from the same
        profiles, reviews, listings and pages. In my experience, AI mentions tend to follow the same curve as local
        rankings, sometimes a little behind, because the AI tools need the underlying signals to be strong first. The
        details are in <Link href="/blog/geo-vs-seo-home-services">GEO vs SEO for home service businesses</Link>.
      </p>

      <h2 id="budget">How budget affects the timeline</h2>
      <p>
        More budget mostly buys more output per month: more pages, more links and more frequent profile work. That can
        shorten the timeline, but only up to a point, because Google still needs time to crawl, test and trust changes,
        and reviews arrive at the pace you complete jobs. Doubling spend rarely halves the time. Consistency matters
        more than intensity: steady monthly work for a year usually beats a big burst followed by nothing. You can see
        what each level of work includes on my <Link href="/pricing">pricing page</Link>.
      </p>

      <h2 id="redflags">Red flags</h2>
      <p>Be cautious of anyone who promises:</p>
      <ul>
        <li>
          <strong>Guaranteed #1 rankings.</strong> No one controls Google&apos;s results. Google&apos;s own guidance on{" "}
          <Ext href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo">hiring an SEO</Ext> warns
          against it.
        </li>
        <li>
          <strong>Results in days.</strong> Fast results usually come from tactics that break Google&apos;s rules, such
          as fake reviews or keyword-stuffed names, and they tend not to last.
        </li>
        <li>
          <strong>Long lock-in contracts</strong> with no clear reporting.
        </li>
        <li>
          <strong>Ownership of your profile or website.</strong> Your Google Business Profile and site should always be
          in your name.
        </li>
      </ul>
      <div className="note">
        <p>
          <strong>The honest version:</strong> local SEO is a three to twelve month investment that keeps paying after
          the work slows down. If you need calls this week, ads are the faster tool. Many businesses run both, then
          reduce ad spend as organic rankings take over.
        </p>
      </div>
      <p>
        Want a timeline for your own market? <Link href="/book-a-call">Book a free strategy call</Link> and I will look
        at your competitors and tell you what is realistic. Plans are month to month; see{" "}
        <Link href="/pricing">pricing</Link>.
      </p>
    </ArticleLayout>
  );
}
