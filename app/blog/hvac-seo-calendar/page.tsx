import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("hvac-seo-calendar")!;

export const metadata = pageMeta({
  title: "HVAC SEO Calendar: Month-by-Month Plan for Busy Seasons",
  description:
    "A month-by-month HVAC SEO plan: what to publish, update and fix before summer and winter peaks so your rankings are in place when the calls start.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "When should an HVAC company start SEO?",
    a: "Ideally three to six months before your busiest season. Pages and profile changes take time to be indexed, trusted and ranked, so work done in late winter pays off in summer and work done in late summer pays off in winter.",
  },
  {
    q: "What HVAC pages should I have?",
    a: "At minimum: AC repair, AC installation or replacement, heating or furnace repair, furnace replacement, heat pumps, maintenance plans and emergency service, plus pages for the towns you serve most. Add ductless, duct cleaning and indoor air quality if you offer them.",
  },
  {
    q: "Should I change my Google Business Profile category by season?",
    a: "Most HVAC companies are better off keeping HVAC contractor as the primary category year-round, with heating and cooling secondaries, and using seasonal posts and pages instead. Switching primary categories every season can cause ranking swings.",
  },
  {
    q: "How do I get more HVAC maintenance plan sign-ups from SEO?",
    a: "Build a dedicated maintenance plan page that explains what is included, what it saves and how to sign up, link to it from every repair page, and promote it in profile posts during the shoulder seasons when people are not in a hurry.",
  },
  {
    q: "Do HVAC companies need blog posts?",
    a: "A few useful ones, yes, especially problem posts like AC blowing warm air or furnace short cycling, which bring homeowners who need help now. Service pages matter more, so build those first.",
  },
];

export default function HvacSeoCalendarPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="Most HVAC companies start SEO when the phones are already busy, and the rankings arrive after the rush. This month-by-month calendar puts the work where it pays: before each peak."
    >
      <p>HVAC demand is seasonal, and SEO is slow. Put those two facts together and you get the most common HVAC marketing mistake: starting SEO in June, getting the rankings in September, and paying for ads all summer anyway.</p>
      <p>The fix is a calendar. Do the slow work in the quiet months so your rankings are ready when the heat or cold arrives. This plan is written for a typical US market with hot summers and cold winters. In warmer climates, shift the cooling work earlier and lighten the heating work.</p>
      <div className="note takeaways">
      <p><strong>Key takeaways</strong></p>
      <ul>
      <li>Build cooling pages by early spring, heating pages by late summer.</li>
      <li>Use shoulder seasons for maintenance plans, reviews and links.</li>
      <li>Keep &quot;HVAC contractor&quot; as your primary category and use seasonal posts instead of category swaps.</li>
      <li>Refresh, do not rewrite: update existing pages each season.</li>
      <li>Measure by season against the same months last year.</li>
      </ul>
      </div>
      <nav className="toc" aria-label="In this article">
      <b>In this article</b><ol>
      <li><a href="#why">Why timing matters more in HVAC</a></li>
      <li><a href="#calendar">The month-by-month calendar</a></li>
      <li><a href="#pages">The pages every HVAC site needs</a></li>
      <li><a href="#profile">Seasonal Google Business Profile moves</a></li>
      <li><a href="#maintenance">Maintenance plans: the off-season win</a></li>
      <li><a href="#problems">Problem posts that bring urgent calls</a></li>
      <li><a href="#replacement">Repair vs replacement content: where the big jobs are</a></li>
      <li><a href="#rebates">Rebates, tax credits and financing pages</a></li>
      <li><a href="#posts">Sample seasonal profile posts</a></li>
      <li><a href="#climate">Adjusting for your climate</a></li>
      <li><a href="#measure">How to measure an HVAC season</a></li>
      <li><a href="#next">Start before the next peak</a></li>
      <li><a href="#faq">People also ask</a></li>
      </ol>
      </nav>
      <h2 id="why">Why timing matters more in HVAC</h2>
      <p>New and improved pages usually take weeks to months to rank, depending on competition. In HVAC, that delay decides whether you win the season or watch it pass.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Season</th><th>Typical peak</th><th>When the SEO work should be done</th></tr>
      </thead>
      <tbody>
      <tr><td>Cooling</td><td>June to August</td><td>February to April</td></tr>
      <tr><td>Heating</td><td>November to January</td><td>August to October</td></tr>
      <tr><td>Shoulder (spring and fall)</td><td>March to May, September to October</td><td>Use it for maintenance plans, reviews and links</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="calendar">The month-by-month calendar</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Month</th><th>Main focus</th><th>Specific tasks</th></tr>
      </thead>
      <tbody>
      <tr><td>January</td><td>Plan the year</td><td>Review last year&apos;s calls by month and service. Pick the cooling pages to build or improve. Fix any technical problems while traffic is low</td></tr>
      <tr><td>February</td><td>Build cooling pages</td><td>AC repair, AC replacement, heat pumps, ductless. Add real photos, FAQs and financing details</td></tr>
      <tr><td>March</td><td>Area pages and maintenance</td><td>Area pages for top towns. Promote spring AC tune-ups and maintenance plans in profile posts</td></tr>
      <tr><td>April</td><td>Links and reviews</td><td>Ask maintenance customers for reviews. Earn local links (sponsorships, suppliers, associations)</td></tr>
      <tr><td>May</td><td>Final checks before the rush</td><td>Confirm hours, phone tracking and booking. Update AC pages with this year&apos;s details. Weekly profile posts</td></tr>
      <tr><td>June</td><td>Respond and capture</td><td>Answer every call. Post about AC repairs and wait times. Ask every repair customer for a review</td></tr>
      <tr><td>July</td><td>Capture and learn</td><td>Note the most common problems and questions. Turn them into FAQ sections and problem posts</td></tr>
      <tr><td>August</td><td>Build heating pages</td><td>Furnace repair, furnace replacement, heat pump heating, boilers if you offer them</td></tr>
      <tr><td>September</td><td>Maintenance and links</td><td>Fall tune-up campaign. Maintenance plan push. Local links and PR</td></tr>
      <tr><td>October</td><td>Final checks before winter</td><td>Update heating pages. Weekly posts about furnace safety checks. Confirm emergency hours</td></tr>
      <tr><td>November</td><td>Respond and capture</td><td>No-heat calls. Reviews from every heating job</td></tr>
      <tr><td>December</td><td>Capture and review</td><td>Year-end report: rankings, calls and revenue by season. Plan next year&apos;s priorities</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="pages">The pages every HVAC site needs</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Page</th><th>Season</th><th>Notes</th></tr>
      </thead>
      <tbody>
      <tr><td>AC repair</td><td>Cooling</td><td>Common problems, response times, emergency number</td></tr>
      <tr><td>AC replacement and installation</td><td>Cooling</td><td>Brands, efficiency ratings, financing, rebates</td></tr>
      <tr><td>Heat pumps</td><td>Both</td><td>Growing demand. Explain cooling and heating in one system</td></tr>
      <tr><td>Furnace repair</td><td>Heating</td><td>Safety (carbon monoxide), common faults</td></tr>
      <tr><td>Furnace replacement</td><td>Heating</td><td>Gas vs electric, efficiency, sizing</td></tr>
      <tr><td>Ductless mini-splits</td><td>Both</td><td>Additions, garages, older homes</td></tr>
      <tr><td>Maintenance plans</td><td>Shoulder</td><td>What is included, savings, sign-up</td></tr>
      <tr><td>Indoor air quality and <Link href="/local-seo/air-duct-cleaning-seo">duct cleaning</Link></td><td>Shoulder</td><td>Allergies, filtration, humidity</td></tr>
      <tr><td>Emergency HVAC</td><td>Peaks</td><td>Only if you truly answer after hours</td></tr>
      </tbody>
      </table>
      </div>
      <p>Each page should answer the customer&apos;s real questions first, then show proof. The approach in <Link href="/blog/high-value-plumbing-keywords">high-value plumbing keywords</Link> works the same way for HVAC: group searches by the job, then build one strong page per job.</p>
      <h2 id="profile">Seasonal Google Business Profile moves</h2>
      <blockquote>
      <p>&quot;Relevance refers to how well a local Business Profile matches what someone is searching for.&quot;</p>
      <cite>Google Business Profile Help, <Ext href="https://support.google.com/business/answer/7091">Tips to improve your local ranking on Google</Ext></cite>
      </blockquote>
      <p>Seasonal searches change what people look for, but your profile should stay clearly relevant to all of it:</p>
      <ul>
      <li><strong>Keep the primary category steady.</strong> &quot;HVAC contractor&quot; with &quot;Air conditioning contractor&quot; and &quot;Heating contractor&quot; as secondaries is a solid default. The guide to <Link href="/blog/google-business-profile-categories-for-contractors">GBP categories for contractors</Link> explains why frequent swaps are risky.</li>
      <li><strong>Post weekly in peak seasons</strong> with real photos: installs, repairs, the crew.</li>
      <li><strong>Use offers carefully:</strong> tune-up specials in the shoulder seasons fill quiet weeks.</li>
      <li><strong>Update services and hours</strong> before each peak, especially holiday hours.</li>
      </ul>
      <h2 id="maintenance">Maintenance plans: the off-season win</h2>
      <p>Maintenance plans smooth out the seasons and bring repeat customers. They also make great SEO content, because people research them calmly instead of in a panic.</p>
      <ol>
      <li>Build a dedicated maintenance plan page with clear inclusions and price.</li>
      <li>Link to it from every repair and replacement page.</li>
      <li>Promote it in spring and fall profile posts.</li>
      <li>Ask plan members for reviews after their second visit.</li>
      </ol>
      <h2 id="problems">Problem posts that bring urgent calls</h2>
      <p>Peak season produces the same questions again and again. Each one is a short article that can rank for months:</p>
      <ul>
      <li>AC running but not cooling</li>
      <li>AC unit freezing up</li>
      <li>Furnace blowing cold air</li>
      <li>Furnace short cycling</li>
      <li>Heat pump making loud noise</li>
      <li>Thermostat blank after a power cut</li>
      </ul>
      <p>Explain likely causes, what is safe for a homeowner to check, and when to call. End each with a link to your repair page and phone number.</p>
      <h2 id="replacement">Repair vs replacement content: where the big jobs are</h2>
      <p>A system replacement is usually worth many repair calls. Homeowners rarely decide on a replacement in one search. They research first, often during the shoulder seasons when the old system is struggling but not dead yet. Content that helps them decide puts you in front of them early.</p>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Topic</th><th>What the homeowner wants to know</th><th>Best time to publish</th></tr>
      </thead>
      <tbody>
      <tr><td>Repair or replace my AC?</td><td>Age, repair cost vs value, efficiency, refrigerant type</td><td>Early spring</td></tr>
      <tr><td>Repair or replace my furnace?</td><td>Age, safety, cracked heat exchanger, efficiency</td><td>Late summer</td></tr>
      <tr><td>Heat pump vs furnace</td><td>Climate fit, running costs, rebates</td><td>Spring and late summer</td></tr>
      <tr><td>What size AC do I need?</td><td>Why proper sizing (a load calculation) matters more than square footage rules of thumb</td><td>Early spring</td></tr>
      <tr><td>How long do HVAC systems last?</td><td>Typical lifespans and warning signs</td><td>Any shoulder season</td></tr>
      </tbody>
      </table>
      </div>
      <p>Each of these should end with a clear next step: a free replacement estimate, with a link to your replacement page and the booking option.</p>
      <h2 id="rebates">Rebates, tax credits and financing pages</h2>
      <p>Energy-efficiency incentives change often, and homeowners search for them before they buy. A page that explains which rebates and credits apply in your area (utility rebates, manufacturer promotions, any current federal or state incentives) and how you help customers claim them can rank well and convert, because few competitors keep theirs up to date.</p>
      <ul>
      <li>Update it at least twice a year, before each peak, and show the date it was last checked.</li>
      <li>Link to the official sources rather than copying amounts that may change.</li>
      <li>Add your financing options on the same page. Payment plans often decide replacement jobs.</li>
      </ul>
      <h2 id="posts">Sample seasonal profile posts</h2>
      <div className="table-wrap">
      <table>
      <thead>
      <tr><th>Month</th><th>Post idea</th></tr>
      </thead>
      <tbody>
      <tr><td>March</td><td>&quot;Spring AC tune-ups are open. Book before the first heat wave.&quot; Photo of a tech at an outdoor unit</td></tr>
      <tr><td>June</td><td>&quot;AC not cooling? Check these 3 things first, then call us.&quot; Link to your AC repair page</td></tr>
      <tr><td>September</td><td>&quot;Fall furnace safety checks, including a carbon monoxide test.&quot; Photo of a furnace inspection</td></tr>
      <tr><td>December</td><td>&quot;Holiday hours: we answer no-heat calls every day.&quot; Clear phone number</td></tr>
      </tbody>
      </table>
      </div>
      <h2 id="climate">Adjusting for your climate</h2>
      <p>In hot southern markets such as <Link href="/locations/cape-coral">Cape Coral</Link> or <Link href="/locations/gilbert">Gilbert</Link>, cooling demand runs most of the year, so move cooling work earlier and keep it going. In colder northern and Canadian markets such as <Link href="/locations/saskatoon">Saskatoon</Link> or <Link href="/locations/kitchener">Kitchener</Link>, heating carries more weight and the heating build should start in early summer.</p>
      <h2 id="measure">How to measure an HVAC season</h2>
      <ul>
      <li>Calls and booked jobs from Google by month, against the same month last year.</li>
      <li>Rankings for cooling terms in May and heating terms in October, before each peak.</li>
      <li>Repair vs replacement leads.</li>
      <li>Maintenance plan sign-ups from the website.</li>
      <li>Calls from the map pack versus organic results.</li>
      </ul>
      <p>For a realistic sense of how fast new pages move, see <Link href="/blog/how-long-does-local-seo-take">how long local SEO takes</Link>.</p>
      <h2 id="next">Start before the next peak</h2>
      <p>Whatever month it is, the best time to start is before the next season. <Link href="/local-seo/hvac-seo">HVAC SEO</Link> follows this calendar, with pages, profile work and reviews planned around your peaks. Related trades such as <Link href="/local-seo/generator-installer-seo">generator installers</Link> and <Link href="/local-seo/insulation-seo">insulation contractors</Link> follow similar seasonal patterns.</p>
      <p>Book a <Link href="/book-a-call">free strategy call</Link> and I&apos;ll show you what to build before your next busy season, based on where you rank today.</p>
    </ArticleLayout>
  );
}
