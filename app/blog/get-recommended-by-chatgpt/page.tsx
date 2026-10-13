import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Ext } from "@/components/Ext";
import { getPost } from "@/lib/posts";
import { type FaqItem, pageMeta } from "@/lib/site";

const post = getPost("get-recommended-by-chatgpt")!;

export const metadata = pageMeta({
  title: "How to Get Recommended by ChatGPT: Home Service Guide",
  description:
    "Where ChatGPT, Gemini, Perplexity and Google's AI Overviews get local recommendations, and the steps that make your home service business one of the names they give.",
  path: `/blog/${post.slug}`,
  type: "article",
});

const FAQ: FaqItem[] = [
  {
    q: "How does ChatGPT decide which local businesses to recommend?",
    a: "When ChatGPT searches the web for an answer, it reads pages, listings and reviews it finds and summarizes the businesses that are consistently described as relevant and well reviewed. There is no paid placement and no way to submit your business directly.",
  },
  {
    q: "Can I pay to be recommended by ChatGPT or Google's AI Overviews?",
    a: "No. There is no paid placement inside the AI answers themselves. Visibility comes from the same profiles, reviews, listings and pages that drive local search.",
  },
  {
    q: "Do I need a special file or schema to appear in AI answers?",
    a: "Google says there are no additional technical requirements for its AI features beyond being indexed and eligible to show with a snippet. Standard LocalBusiness schema and clear pages help, but there is no special AI file that guarantees inclusion.",
  },
  {
    q: "Why does ChatGPT give different answers each time?",
    a: "AI answers vary with the exact wording, the user's location, the tool's settings and what it finds in a fresh search. That is why visibility should be measured over a fixed set of questions every month, not from one check.",
  },
  {
    q: "Should I block AI crawlers?",
    a: "If you want AI tools to recommend your business, allow their search crawlers. OpenAI, for example, documents separate crawlers for ChatGPT search and for model training, so you can allow one and block the other.",
  },
  {
    q: "Does ChatGPT use Google Business Profile data?",
    a: "ChatGPT does not publish exactly which sources it uses for local businesses. In practice it reads web pages, listings and reviews it finds, which is why consistent details across Google, Bing, Apple and directories matter.",
  },
  {
    q: "Do reviews on Yelp or Facebook help with AI recommendations?",
    a: "They can. AI tools read reviews on many platforms, not just Google, so reviews where your customers already leave them are worth encouraging.",
  },
];

export default function GetRecommendedByChatGptPage() {
  return (
    <ArticleLayout
      post={post}
      faq={FAQ}
      lead="More homeowners now ask an AI tool who to call before they search the map. Here is where those answers come from, how each major tool finds local businesses, and the practical steps that put your business in them."
    >
      <div className="note takeaways">
        <p>
          <strong>Key takeaways</strong>
        </p>
        <ul>
          <li>
            AI tools build local recommendations from profiles, listings, reviews, websites and third-party mentions.
          </li>
          <li>
            Google says there are no additional technical requirements for its AI features beyond normal indexing.
          </li>
          <li>Make your facts identical everywhere, including Bing Places and Apple Business Connect.</li>
          <li>Write answer-first service pages with towns, prices and response times, and let AI crawlers in.</li>
          <li>Track a fixed set of real questions monthly; one check means little.</li>
        </ul>
      </div>
      <nav className="toc" aria-label="In this article">
        <b>In this article</b>
        <ol>
          <li>
            <a href="#shift">How homeowners now find contractors</a>
          </li>
          <li>
            <a href="#sources">Where AI recommendations come from</a>
          </li>
          <li>
            <a href="#tools">How each AI tool finds local businesses</a>
          </li>
          <li>
            <a href="#steps">Seven steps to get recommended</a>
          </li>
          <li>
            <a href="#check">How to check where you stand</a>
          </li>
          <li>
            <a href="#avoid">What not to do</a>
          </li>
        </ol>
      </nav>

      <h2 id="shift">How homeowners now find contractors</h2>
      <p>
        &quot;Who is the best-reviewed plumber near me?&quot; used to be typed straight into Google. Now a growing
        number of people ask ChatGPT, Gemini, Perplexity or Microsoft Copilot, or read the AI Overview at the top of
        Google before they scroll. The answer is usually a short list of three to five businesses, often with a sentence
        about why each was chosen.
      </p>
      <p>
        If you are on that list, you get the call. If you are not, that homeowner may never see your business at all.
        The good news is that the work that gets you on the list is mostly the same work that wins the Google map pack,
        with a few extra steps that matter more for AI.
      </p>

      <h2 id="sources">Where AI recommendations come from</h2>
      <p>
        AI tools do not keep a secret directory of good contractors. When someone asks for a local business, the tool
        searches the web, reads what it finds and summarizes it. Each tool uses its own mix of sources, and those change
        often, but the same kinds of places come up again and again:
      </p>
      <ul>
        <li>
          <strong>Business profiles and map listings:</strong> your Google Business Profile for Google&apos;s AI
          features, and listings such as Bing Places, Apple Business Connect and Yelp for others.
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
        to say. A business with the same details everywhere, plenty of detailed reviews and clear service pages is easy
        to recommend. A business with conflicting hours, a thin website and no reviews is easy to skip.
      </p>

      <h2 id="tools">How each AI tool finds local businesses</h2>
      <p>
        The tools differ in where they look. You do not need to optimize for each one separately, but it helps to know
        why being listed beyond Google matters.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>AI tool</th>
              <th>Where it tends to look</th>
              <th>What helps most</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google AI Overviews and AI Mode</td>
              <td>Google&apos;s index and its local business data</td>
              <td>Google Business Profile, reviews, indexed pages</td>
            </tr>
            <tr>
              <td>ChatGPT (search)</td>
              <td>Web search results and pages its search crawler can read</td>
              <td>Crawlable site, consistent listings, third-party mentions</td>
            </tr>
            <tr>
              <td>Microsoft Copilot</td>
              <td>Bing&apos;s index and business data</td>
              <td>Bing Places, Bing indexing, consistent details</td>
            </tr>
            <tr>
              <td>Perplexity</td>
              <td>Live web search with cited sources</td>
              <td>Clear, quotable pages and mentions on trusted sites</td>
            </tr>
            <tr>
              <td>Gemini</td>
              <td>Google&apos;s search and local data</td>
              <td>Google Business Profile, reviews, website</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        For Google&apos;s own AI features, the requirements are reassuringly ordinary. Google&apos;s documentation says
        a page must be indexed and eligible to be shown in Search with a snippet, and then adds:
      </p>
      <blockquote>
        <p>&ldquo;There are no additional technical requirements.&rdquo;</p>
        <cite>
          Google Search Central,{" "}
          <Ext href="https://developers.google.com/search/docs/appearance/ai-features">
            AI features and your website
          </Ext>
        </cite>
      </blockquote>
      <p>
        For ChatGPT, OpenAI documents a dedicated search crawler, OAI-SearchBot, which it says is used to surface
        websites in search results in ChatGPT&apos;s search features. That crawler is separate from GPTBot, which
        relates to model training, so you can allow one and block the other. Details are on{" "}
        <Ext href="https://platform.openai.com/docs/bots">OpenAI&apos;s crawler documentation</Ext>.
      </p>

      <h2 id="steps">Seven steps to get recommended</h2>
      <h3>1. Make your facts consistent everywhere</h3>
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

      <h3>2. Earn reviews that say something</h3>
      <p>
        &quot;Great service!&quot; does not give an AI tool much to work with. &quot;They replaced our water heater in
        Katy the same afternoon&quot; does. It names the service, the town and why the customer was happy, which is
        exactly what a recommendation needs. You cannot write reviews for customers, and you should never pay for them,
        but you can ask every happy customer and ask them to mention what you did. Reply to every review too.
      </p>

      <h3>3. Write pages that answer questions directly</h3>
      <p>
        AI tools look for clear, quotable answers. Most contractor websites bury them or skip them entirely. For each
        main service, make sure there is a page that plainly states:
      </p>
      <ul>
        <li>What the service is and who it is for</li>
        <li>Which towns and areas you cover</li>
        <li>Typical price ranges, or what affects the price</li>
        <li>How fast you can come out, and whether you handle emergencies</li>
        <li>Licenses, insurance, warranties and years in business</li>
        <li>Answers to the questions customers ask you on the phone</li>
      </ul>
      <p>
        Put the answer first, then the detail. &quot;We repair and replace water heaters in Katy, Cypress and Richmond,
        usually the same day&quot; is easier for an AI tool to use than three paragraphs about your passion for quality.
      </p>

      <h3>4. Add structured data</h3>
      <p>
        Add <strong>LocalBusiness schema</strong> (or a more specific type such as Plumber) describing your name,
        address, hours, services and area, plus FAQ markup where a page genuinely has questions and answers. It will not
        make you rank on its own, but it removes guesswork. My guide to{" "}
        <Link href="/blog/technical-seo-for-service-business-websites">technical SEO for service websites</Link> covers
        how to set it up.
      </p>

      <h3>5. Let the AI crawlers in</h3>
      <p>
        Some websites block AI tools without the owner knowing, through a security plugin, a firewall setting or a line
        in robots.txt. If a tool cannot read your site, it can only describe you from what other websites say. Check
        your robots.txt file and bot-blocking settings, and make sure important text is not hidden inside images.
      </p>

      <h3>6. Get mentioned on other local websites</h3>
      <p>
        A business described only by its own website is easy to overlook. Mentions from other sites act as independent
        proof:
      </p>
      <ul>
        <li>Local news stories, community pages and event sponsorships</li>
        <li>Trade associations and manufacturer &quot;certified installer&quot; directories</li>
        <li>Suppliers and partners who list the contractors they work with</li>
        <li>Local &quot;best of&quot; lists and chamber of commerce listings</li>
      </ul>
      <p>
        This overlaps with classic local link building, covered in my{" "}
        <Link href="/seo-services/link-building">Link Building service</Link>.
      </p>

      <h3>7. Keep the foundations strong</h3>
      <p>
        AI answers lean on the same signals as the map pack, so everything in my{" "}
        <Link href="/blog/local-seo-checklist-for-contractors">local SEO checklist</Link> and{" "}
        <Link href="/blog/how-to-rank-in-google-map-pack">map pack guide</Link> helps here too. If your Google profile
        and reviews are weak, fix those first.
      </p>

      <h2 id="example">Example: rewriting a service page answer-first</h2>
      <p>
        Most service pages open with a slogan and bury the useful facts. Here is the same information written two ways.
        The second is easier for a homeowner to scan and far easier for an AI tool to quote.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Before</th>
              <th>After (answer-first)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                &quot;Quality you can trust. We are passionate about delivering excellence to our valued
                customers.&quot;
              </td>
              <td>
                &quot;We repair and replace furnaces in Plano, Frisco and Allen, usually within 24 hours, with a
                two-year labor warranty.&quot;
              </td>
            </tr>
            <tr>
              <td>&quot;Contact us for pricing.&quot;</td>
              <td>
                &quot;Most furnace repairs cost between $X and $Y. Replacements start at $Z, depending on size.&quot;
              </td>
            </tr>
            <tr>
              <td>&quot;We serve the greater area.&quot;</td>
              <td>&quot;We cover Plano, Frisco, Allen, McKinney and Richardson.&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Fill in your own real numbers and towns. Specific, verifiable facts are what make a business easy to recommend.
      </p>

      <h2 id="time">How long it takes to show up in AI answers</h2>
      <p>
        There is no fixed timeline, because each AI tool refreshes what it knows at its own pace. In practice, changes
        to your website are picked up once the relevant crawlers revisit it, and listings and reviews build up over
        weeks and months. Most businesses I work with see AI mentions follow the same curve as their local rankings,
        often a little behind, because the AI tools need the underlying signals to be strong first. That is why I track
        the same questions every month rather than judging from a single week. A realistic local SEO timeline is in{" "}
        <Link href="/blog/how-long-does-local-seo-take">how long local SEO takes</Link>.
      </p>

      <h2 id="check">How to check where you stand</h2>
      <p>
        Pick ten to twenty-five questions your customers really ask, such as &quot;best roofer in [your town]&quot; or
        &quot;who can fix a furnace today near me&quot;. Ask them in ChatGPT, Gemini, Perplexity and Copilot, and look
        at Google&apos;s AI Overview for the same searches. For each one, record:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Record</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Were you named?</td>
              <td>Your basic visibility rate across questions</td>
            </tr>
            <tr>
              <td>Who else was named?</td>
              <td>Shows which competitors AI tools trust</td>
            </tr>
            <tr>
              <td>What was said about you?</td>
              <td>Catches wrong hours, services or areas</td>
            </tr>
            <tr>
              <td>Which sources were cited?</td>
              <td>Shows which listings and sites to improve</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Repeat it every month with the same questions. Answers change with wording, location and time, so one check
        means little. A steady record over a few months shows whether you are moving in the right direction, which is
        exactly how I track it in my <Link href="/ai-search">GEO &amp; AI Visibility</Link> work.
      </p>

      <h2 id="avoid">What not to do</h2>
      <ul>
        <li>
          <strong>Do not buy fake reviews.</strong> They break Google&apos;s rules and, in the US, the FTC&apos;s rule
          on fake reviews and testimonials.
        </li>
        <li>
          <strong>Do not mass-produce AI pages.</strong> Hundreds of near-identical pages are the kind of thin content
          that neither Google nor AI tools trust.
        </li>
        <li>
          <strong>Do not keyword-stuff your business name.</strong> It risks suspension and the loss of your reviews.
        </li>
        <li>
          <strong>Do not trust guarantees.</strong> No one controls what an AI tool says. Be wary of anyone who promises
          a recommendation.
        </li>
      </ul>
      <div className="note">
        <p>
          <strong>The safe approach is also the one that works:</strong> be the business with the clearest facts and the
          best proof, everywhere AI tools look.
        </p>
      </div>

      <h2>Where to start</h2>
      <p>
        If your Google Business Profile is incomplete or your reviews are thin, start there, because AI tools and the
        map pack both lean on them. Then work through listings, pages and mentions. For how GEO fits with the rest of
        your marketing, read <Link href="/blog/geo-vs-seo-home-services">GEO vs SEO for home service businesses</Link>.
      </p>
      <p>
        If you would rather have it done for you, <Link href="/ai-search">GEO &amp; AI Visibility</Link> is included in
        my Growth and Pro <Link href="/pricing">plans</Link>, alongside the local SEO work it depends on. Or{" "}
        <Link href="/book-a-call">book a free call</Link> and I will show you what AI tools currently say about your
        business.
      </p>
    </ArticleLayout>
  );
}
