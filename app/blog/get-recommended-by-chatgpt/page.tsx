import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getPost } from "@/lib/posts";
import { pageMeta } from "@/lib/site";

const post = getPost("get-recommended-by-chatgpt")!;

export const metadata = pageMeta({
  title: "How to Get Recommended by ChatGPT: Home Service Guide",
  description:
    "Where ChatGPT, Gemini and Google's AI Overviews get local recommendations, and the steps that make your home service business one of the names they give.",
  path: `/blog/${post.slug}`,
  type: "article",
});

export default function GetRecommendedByChatGptPage() {
  return (
    <ArticleLayout
      post={post}
      lead="More homeowners now ask an AI tool who to call before they search the map. Here is where those answers come from, and the practical steps that put your business in them."
    >
      <p>
        &quot;Who is the best-reviewed plumber near me?&quot; used to be a Google search. Now a growing number of people
        type it into ChatGPT, Gemini, Perplexity or Microsoft Copilot, or read the AI Overview at the top of Google
        before they scroll. The answer is usually a short list of three to five businesses, often with a sentence about
        each.
      </p>
      <p>
        If you are on that list, you get the call. If you are not, the homeowner may never see you at all. The good news
        is that the work that gets you on the list is mostly the same work that wins the map pack.
      </p>

      <h2>Where AI recommendations come from</h2>
      <p>
        AI tools do not keep a secret directory of good contractors. When someone asks for a local business, the tool
        searches the web and reads what it finds. Each tool uses its own mix of sources and they change often, but the
        same kinds of places come up again and again:
      </p>
      <ul>
        <li>
          <strong>Business profiles and map listings:</strong> Google Business Profile for Google&apos;s AI features,
          and listings like Bing Places, Apple Business Connect and Yelp for others. Microsoft Copilot, for example, is
          built on Bing.
        </li>
        <li>
          <strong>Reviews:</strong> star ratings, review counts and what reviewers actually say about the job.
        </li>
        <li>
          <strong>Your website:</strong> service pages, area pages and FAQs that clearly say what you do and where.
        </li>
        <li>
          <strong>Other websites:</strong> local news, trade associations, suppliers, &quot;best of&quot; lists and
          directories that mention your business.
        </li>
      </ul>
      <p>
        AI tools tend to recommend businesses where these sources agree with each other and give them something specific
        to say.
      </p>

      <h2>Step 1: make your facts consistent everywhere</h2>
      <p>
        If your Google profile says you are open 24 hours, your website says 8 to 5, and an old directory lists a phone
        number you stopped using, an AI tool has a reason to doubt you. Start with the basics:
      </p>
      <ol>
        <li>Complete your Google Business Profile: categories, every service, service areas, hours and photos.</li>
        <li>Claim and complete Bing Places and Apple Business Connect. Many businesses never do.</li>
        <li>Fix your name, address, phone and website on the main directories in your country.</li>
        <li>Make sure your website shows the same details, ideally on every page.</li>
      </ol>

      <h2>Step 2: earn reviews that say something</h2>
      <p>
        &quot;Great service!&quot; does not give an AI tool much to work with. &quot;They replaced our water heater in
        Katy the same afternoon&quot; does. It names the service, the town and why the customer was happy, which is
        exactly what a recommendation needs.
      </p>
      <p>
        You cannot write reviews for customers, and you should never pay for them. But you can ask every happy customer,
        and you can ask them to mention what you did. Reply to every review too. It shows you are active and adds more
        detail.
      </p>

      <h2>Step 3: write pages that answer questions directly</h2>
      <p>
        AI tools look for clear, quotable answers. Most contractor websites bury them, or skip them entirely. For each
        main service, make sure there is a page that plainly states:
      </p>
      <ul>
        <li>What the service is and who it is for</li>
        <li>Which towns and areas you cover</li>
        <li>Typical price ranges or what affects the price</li>
        <li>How fast you can come out, and whether you handle emergencies</li>
        <li>Your licenses, insurance, warranties and years in business</li>
        <li>Answers to the questions customers ask you on the phone</li>
      </ul>
      <p>
        Add <strong>LocalBusiness schema</strong> to your site as well. It is structured data that labels your name,
        address, hours and services in a format machines read easily. It will not make you rank on its own, but it
        removes guesswork.
      </p>

      <h2>Step 4: let the AI crawlers in</h2>
      <p>
        Some websites block AI tools without the owner knowing, through a security plugin, a firewall setting or a line
        in the robots.txt file. If a tool cannot read your site, it can only describe you from what other websites say.
      </p>
      <p>
        Check your robots.txt and any bot-blocking settings. Crawlers like OpenAI&apos;s OAI-SearchBot (used for ChatGPT
        search) and PerplexityBot need access if you want those tools to read your pages. Also make sure your site loads
        quickly and is not hiding important text inside images.
      </p>

      <h2>Step 5: get mentioned on other local websites</h2>
      <p>
        A business that is only described by its own website is easy to overlook. Mentions from other sites act as
        independent proof. Good sources for home service businesses include:
      </p>
      <ul>
        <li>Local news stories, community pages and event sponsorships</li>
        <li>Trade associations and manufacturer &quot;certified installer&quot; directories</li>
        <li>Suppliers and partners who list the contractors they work with</li>
        <li>Local &quot;best of&quot; lists and chamber of commerce listings</li>
      </ul>

      <h2>How to check where you stand</h2>
      <p>
        Pick ten questions your customers really ask, like &quot;best roofer in [your town]&quot; or &quot;who can fix a
        furnace today near me&quot;. Ask them in ChatGPT, Gemini, Perplexity and Copilot, and look at Google&apos;s AI
        Overview for the same searches. Note who is named, what is said about them, and whether you appear.
      </p>
      <p>
        Repeat it every month. Answers change with wording, location and time, so one check means little. A steady
        record over a few months shows whether you are moving in the right direction.
      </p>

      <div className="note">
        <p>
          <strong>A word of caution:</strong> no one can guarantee that an AI tool will recommend your business, and you
          should be wary of anyone who promises it. Fake reviews, keyword-stuffed business names and mass-produced AI
          pages can backfire badly. The safe approach is also the one that works: be the business with the clearest
          facts and the best proof.
        </p>
      </div>

      <h2>Where to start</h2>
      <p>
        If your Google Business Profile is incomplete or your reviews are thin, start there, because AI tools and the
        map pack both lean on them. Then work through listings, pages and mentions.
      </p>
      <p>
        If you would rather have it done for you, <Link href="/ai-search">GEO &amp; AI Visibility</Link> is included in
        my Growth and Pro <Link href="/pricing">plans</Link>, alongside the local SEO work it depends on.
      </p>
    </ArticleLayout>
  );
}
