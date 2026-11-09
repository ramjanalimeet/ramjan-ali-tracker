import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("service-area-pages-that-rank")!;

export const metadata = pageMeta({
  title: "Service Area Pages That Rank (Without Doorway Spam)",
  description:
    "How home service businesses can build location pages for the towns they serve that rank and convert without breaking Google's doorway rules, with a template.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "Do location pages help SEO?",
    a: "Yes, when each page has genuinely local, useful content. They help you rank organically in towns where the map pack does not reach because of distance, and they give AI tools clear facts about where you work.",
  },
  {
    q: "Is duplicate content on location pages bad for SEO?",
    a: "Near-identical pages with only the town name changed rarely rank well, because Google picks one and ignores the rest, and at scale they can be treated as doorway pages. Unique content for each page is what makes them work.",
  },
  {
    q: "What should a location page include?",
    a: "A clear heading with the service and town, local context, the services you offer there, recent jobs with photos, reviews from local customers, the neighborhoods you cover, local FAQs and a clear call to action.",
  },
  {
    q: "What is a service area page?",
    a: "A page on your website about the work you do in one specific town or area, such as 'Roof repair in Katy, TX'. It helps you rank organically in places where the map pack does not reach because of distance.",
  },
  {
    q: "How many service area pages should I have?",
    a: "Start with the three to five towns that matter most for your business, and only add more when you can make each one genuinely useful. Ten strong pages beat a hundred thin ones.",
  },
  {
    q: "Are location pages considered doorway pages?",
    a: "Only when they are thin, near-identical pages built just to rank and funnel people to the same place. Pages with real local information, projects and reviews for that area are legitimate and useful.",
  },
  {
    q: "Should service area pages target one service or all services?",
    a: "Start with one general page per town that links to your services. For your most valuable service in your most valuable towns, a dedicated service plus town page can be worth it if you have enough local proof to fill it.",
  },
  {
    q: "Can AI-written location pages rank?",
    a: "Pages written by AI with only the town name changed tend to be exactly the thin, duplicate content that does not rank. AI can help draft, but the local details, photos and proof need to be real.",
  },
  {
    q: "Should area pages have their own URL structure?",
    a: "Keep it simple and consistent, such as /areas/katy or /roof-repair-katy-tx. The exact format matters less than each page being unique, useful and linked from the rest of your site.",
  },
  {
    q: "Can I rank in towns where I have no office?",
    a: "Organically, yes, with genuinely useful area pages. In the map pack, distance from your verified address matters most, so towns far away are won mainly through organic results.",
  },
  {
    q: "How long should an area page be?",
    a: "Long enough to be useful, and no longer. A few hundred words of genuinely local detail, with photos, reviews and projects, beats a long page padded with generic text.",
  },
];

export default function ServiceAreaPagesPost() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="How home service businesses can build pages for the towns they serve that genuinely help customers, rank in organic search and stay well clear of Google's doorway rules, with a page template you can copy."
    >
      <div className="note takeaways">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>Area pages help you rank organically in towns the map pack does not reach.</li>
          <li>Pages that only swap the town name risk being treated as doorway pages.</li>
          <li>Start with three to five towns where you want work and already have proof.</li>
          <li>Fill each page with real local detail: projects, reviews, housing, weather and rules.</li>
          <li>Link area pages into your site and keep them growing with new jobs.</li>
        </ul>
      </div>
      <nav className="toc" aria-label="In this article">
        <b>In this article</b>
        <ol>
          <li>
            <a href="#why">Why service area pages matter</a>
          </li>
          <li>
            <a href="#doorway">The doorway page problem</a>
          </li>
          <li>
            <a href="#which">Which towns get a page</a>
          </li>
          <li>
            <a href="#template">A page template that works</a>
          </li>
          <li>
            <a href="#content">Where to find real local content</a>
          </li>
          <li>
            <a href="#seo">On-page SEO for area pages</a>
          </li>
          <li>
            <a href="#linking">Linking them together</a>
          </li>
          <li>
            <a href="#measure">Measuring success</a>
          </li>
          <li>
            <a href="#faq">People also ask</a>
          </li>
        </ol>
      </nav>

      <h2 id="why">Why service area pages matter</h2>
      <p>
        The Google map pack leans heavily on distance. A roofer based in one suburb will struggle to appear in the map
        for searches 20 miles away, however good their profile is. But many customers in those towns still search for
        &quot;roof repair [town]&quot;, and the organic results below the map are much less tied to your address.
      </p>
      <p>
        That is where service area pages come in. A well-built page about your work in a specific town can rank
        organically there, bring in calls from places your map listing does not reach, and give AI tools clear facts
        about where you work. Done badly, though, they are one of the most common reasons contractor websites struggle.
      </p>

      <h2 id="doorway">The doorway page problem</h2>
      <p>
        Many contractor sites have dozens or hundreds of town pages that are identical except for the town name. Google
        has a name for this. Its{" "}
        <Ext href="https://developers.google.com/search/docs/essentials/spam-policies">spam policies</Ext> describe
        doorway abuse as sites or pages created to rank for specific, similar search queries that lead users to
        intermediate pages that are not as useful as the final destination. Region- or city-targeted pages that all
        funnel to the same place are one of the examples given.
      </p>
      <p>Google&apos;s guidance on helpful content sums up the principle behind it:</p>
      <blockquote>
        <p>
          &ldquo;Google&apos;s automated ranking systems are designed to prioritize helpful, reliable information
          that&apos;s created to benefit people, and not content that&apos;s created to manipulate search engine
          rankings.&rdquo;
        </p>
        <cite>
          Google Search Central,{" "}
          <Ext href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content">
            Creating helpful, reliable, people-first content
          </Ext>
        </cite>
      </blockquote>
      <p>The difference between a doorway page and a useful area page is easy to see side by side:</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Doorway page</th>
              <th>Useful area page</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Same text on every page, town name swapped</td>
              <td>Unique text written about that town</td>
            </tr>
            <tr>
              <td>No local photos or projects</td>
              <td>Real jobs completed in that area</td>
            </tr>
            <tr>
              <td>No reviews from the area</td>
              <td>Reviews from customers in that town</td>
            </tr>
            <tr>
              <td>Generic claims anyone could make</td>
              <td>Local details: housing, weather, common problems</td>
            </tr>
            <tr>
              <td>Hundreds of towns, including ones you never visit</td>
              <td>Only the places you genuinely serve</td>
            </tr>
            <tr>
              <td>Exists only to rank</td>
              <td>Answers what a customer in that town needs to know</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="which">Which towns get a page</h2>
      <p>Do not start by listing every town within 50 miles. Choose based on business value and the proof you have:</p>
      <ol>
        <li>
          <strong>Where you want more work.</strong> Towns with the jobs, house prices and drive times that make sense
          for you.
        </li>
        <li>
          <strong>Where you already have proof.</strong> Completed jobs, photos and reviews from that area make the page
          easy to fill with real content.
        </li>
        <li>
          <strong>Where the map does not reach.</strong> Towns far enough away that your profile does not appear in the
          map pack, so organic rankings are the opportunity.
        </li>
        <li>
          <strong>Where people actually search.</strong> Check keyword data or Search Console impressions for searches
          that include the town name.
        </li>
      </ol>
      <p>
        Start with three to five. Add more as you complete jobs in new areas. If you serve customers in several
        countries or regions, the same principle applies; my <Link href="/locations">locations page</Link> shows how I
        approach different markets.
      </p>

      <h2 id="template">A page template that works</h2>
      <p>
        Every strong area page I build follows roughly the same structure. The structure repeats; the content inside it
        must not.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Section</th>
              <th>What goes in it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heading and intro</td>
              <td>&quot;[Service] in [Town]&quot; and two or three sentences on your work there</td>
            </tr>
            <tr>
              <td>Local context</td>
              <td>Housing age, weather, soil, common problems customers in that town have</td>
            </tr>
            <tr>
              <td>Services offered there</td>
              <td>Short list linking to your main service pages</td>
            </tr>
            <tr>
              <td>Recent jobs</td>
              <td>Two or three real projects with photos and neighborhood names</td>
            </tr>
            <tr>
              <td>Reviews</td>
              <td>Reviews from customers in that town, quoted with permission</td>
            </tr>
            <tr>
              <td>Coverage</td>
              <td>Neighborhoods and nearby areas you cover from there</td>
            </tr>
            <tr>
              <td>FAQs</td>
              <td>Questions customers in that area actually ask, such as permits or HOA rules</td>
            </tr>
            <tr>
              <td>Call to action</td>
              <td>Phone, booking link and response time for that area</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A good test: if you could swap the town name on a page and it would still be true for a different town, it is
        not specific enough yet.
      </p>

      <h2 id="example">Example: what a strong area page looks like</h2>
      <p>
        Here is a condensed example for a fictional plumbing company, to show the level of local detail that separates a
        useful page from a doorway page. The structure is the template above; every sentence is specific to the town.
      </p>
      <div className="note">
        <p>
          <strong>Plumbing in Cypress, TX.</strong> We have been fixing pipes, water heaters and drains across Cypress
          since we opened our shop in nearby Jersey Village. Most of our Cypress calls come from the newer subdivisions
          along the Grand Parkway, where we see a lot of builder-grade water heaters reaching the end of their life, and
          from older homes near Cypress Creek with original galvanized pipes.
        </p>
        <p>
          Recent jobs include a tankless water heater install in Bridgeland, a slab leak repair in Coles Crossing and a
          full repipe in Copperfield. Cypress is about 20 minutes from our shop, so we can usually be there the same day
          for emergencies. Most subdivisions here have HOA rules about exterior work, so we handle permits and keep work
          inside the property line.
        </p>
      </div>
      <p>
        Notice what makes it work: real neighborhoods, the actual problems in that area, named jobs, honest drive times
        and local rules. Swap &quot;Cypress&quot; for another town and almost every sentence would become false, which
        is exactly the test a good area page should pass.
      </p>

      <h2 id="gbp-area">Service area settings in your Google Business Profile</h2>
      <p>
        If you visit customers rather than having them come to you, your Google Business Profile should be set up as a
        service-area business. You can hide your street address and list the areas you serve instead. A few points that
        trip people up:
      </p>
      <ul>
        <li>
          Listing a town in your service area does not make you rank in the map pack there. Distance from your verified
          address still matters most.
        </li>
        <li>Keep the list to places you genuinely cover; an enormous radius looks unrealistic and does not help.</li>
        <li>
          Your website&apos;s area pages and your profile&apos;s service area should match, so Google and customers see
          the same picture.
        </li>
        <li>
          If you have a second staffed office, it can have its own profile and its own area pages, but a virtual office
          or mailbox cannot.
        </li>
      </ul>

      <h2 id="content">Where to find real local content</h2>
      <p>
        The hardest part of area pages is having enough to say. Contractors usually have far more local knowledge than
        they realise. Sources I use:
      </p>
      <ul>
        <li>
          <strong>Your job history.</strong> Which services you do most in that town, and why. A septic company might
          note that most homes in one area are on older systems.
        </li>
        <li>
          <strong>Your crew.</strong> Ask them what is different about working there: access, house styles, common
          problems.
        </li>
        <li>
          <strong>Photos.</strong> Before and after shots from jobs in that town, with the neighborhood named.
        </li>
        <li>
          <strong>Reviews.</strong> Customers often mention where they live; quote them with permission.
        </li>
        <li>
          <strong>Local rules.</strong> Permit requirements, HOA restrictions, water quality or building codes that
          affect your work.
        </li>
        <li>
          <strong>Weather and seasons.</strong> Hail, freezes, hurricanes, heat or humidity, and how they affect the
          jobs you do there.
        </li>
      </ul>

      <h2 id="seo">On-page SEO for area pages</h2>
      <ul>
        <li>
          <strong>Title:</strong> &quot;[Service] in [Town], [State] | [Business]&quot;, kept under about 60 characters.
        </li>
        <li>
          <strong>H1:</strong> one clear heading naming the service and town.
        </li>
        <li>
          <strong>URL:</strong> short and readable, such as /roof-repair-katy-tx or /areas/katy.
        </li>
        <li>
          <strong>Meta description:</strong> what you do there and a reason to call.
        </li>
        <li>
          <strong>Schema:</strong> Service markup with the area served.
        </li>
        <li>
          <strong>Images:</strong> real photos with descriptive file names and alt text.
        </li>
      </ul>
      <p>
        These are part of my <Link href="/seo-services/on-page-seo">On-Page SEO</Link> work, and the technical side is
        covered in{" "}
        <Link href="/blog/technical-seo-for-service-business-websites">
          technical SEO for service business websites
        </Link>
        .
      </p>

      <h2 id="linking">Linking them together</h2>
      <p>
        Area pages that nothing links to are hard for Google to find and rarely rank. Build them into your site
        structure:
      </p>
      <ul>
        <li>Link each area page from a &quot;Areas we serve&quot; section on the homepage or a locations hub.</li>
        <li>Link from each area page to the main service pages, and from service pages to the main areas.</li>
        <li>Link neighboring towns to each other where it makes sense.</li>
        <li>Mention area pages from relevant blog posts and project write-ups.</li>
      </ul>
      <p>
        Your Google Business Profile service area and your area pages should tell the same story. If your profile lists
        a town, it is a good candidate for a page; if you have a page for a town, it should be in your service area.
      </p>

      <h2 id="examples">What this looks like by trade</h2>
      <p>The local angle changes with the trade. A few examples of what makes each page genuinely local:</p>
      <ul>
        <li>
          <strong>Roofing:</strong> hail or hurricane history, common roof types in that neighborhood, local permit
          rules. See <Link href="/local-seo/roofing-seo">Roofing SEO</Link>.
        </li>
        <li>
          <strong>Septic:</strong> soil types, which areas are off mains sewer, county inspection rules. See{" "}
          <Link href="/local-seo/septic-seo">Septic SEO</Link>.
        </li>
        <li>
          <strong>HVAC:</strong> climate, typical home sizes and ages, utility rebates in that area. See{" "}
          <Link href="/local-seo/hvac-seo">HVAC SEO</Link>.
        </li>
        <li>
          <strong>Pest control:</strong> the pests that are common in that area and season. See{" "}
          <Link href="/local-seo/pest-control-seo">Pest Control SEO</Link>.
        </li>
      </ul>

      <h2 id="ai">Area pages and AI search</h2>
      <p>
        Area pages help with AI visibility too. When someone asks an AI tool for &quot;a plumber in Cypress who can come
        today&quot;, the tool looks for businesses that clearly state they serve Cypress and offer same-day work. A page
        that says so plainly, backed by reviews from Cypress customers, gives it exactly that. Vague claims such as
        &quot;serving the greater Houston area&quot; give it nothing to work with. More on this in{" "}
        <Link href="/blog/get-recommended-by-chatgpt">how to get recommended by ChatGPT and AI search</Link>.
      </p>

      <h2 id="measure">Measuring success</h2>
      <p>Give each page a few months, then check:</p>
      <ul>
        <li>Is it indexed in Search Console?</li>
        <li>Which searches is it getting impressions for, and do they include the town?</li>
        <li>Are calls and form leads coming from that town?</li>
        <li>Has your organic position for &quot;[service] [town]&quot; improved?</li>
      </ul>
      <p>
        Pages that get impressions but few clicks need better titles. Pages with no impressions after a few months
        usually need more genuine local content, more internal links, or both.
      </p>
      <div className="note">
        <p>
          <strong>Keep them alive:</strong> add new jobs, photos and reviews over time. A page that keeps growing with
          real local work keeps getting stronger, while a page written once and forgotten slowly fades.
        </p>
      </div>
      <p>
        Need help planning or writing them? Area pages are part of every <Link href="/local-seo">Local SEO plan</Link>.{" "}
        <Link href="/book-a-call">Book a free call</Link> and I will tell you which towns are worth a page for your
        business, or start with the full{" "}
        <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist</Link>.
      </p>
    </ArticleLayout>
  );
}
