"""Content for the three new blog posts. Rendered by build_posts.py."""

DATE = "2026-10-18"
DATE_H = "October 18, 2026"

POSTS = []

# ---------------------------------------------------------------------------
# 1. Google Maps cluster: GBP suspension (urgent, low competition, high intent)
# ---------------------------------------------------------------------------
POSTS.append(dict(
    slug="google-business-profile-suspended",
    cat="Google Maps", cat_slug="google-maps",
    h1="Google Business Profile suspended? A contractor's guide to getting reinstated",
    title="Google Business Profile Suspended? How Contractors Get Reinstated",
    desc="Why Google suspends contractor and service-area business profiles, what to fix before you appeal, the evidence that gets profiles reinstated, and how to stop it happening again.",
    lead="Why Google suspends roofing, plumbing, HVAC and septic profiles, what to fix before you appeal, and the evidence that actually gets a profile reinstated.",
    card="Why Google suspends contractor profiles, what to fix before you appeal, and the evidence that gets a profile reinstated.",
    aside=("Profile suspended right now?", "Send me your business name on WhatsApp. I'll tell you the likely trigger and what to fix before you appeal.", "/local-seo", "Local SEO services →"),
    related=["how-to-rank-in-google-map-pack", "local-seo-checklist-for-contractors", "local-services-ads-vs-seo-for-contractors"],
    faq=[
        ("How long does Google take to review a suspension appeal?", "Many appeals get an answer within a few business days, but some take several weeks, especially when Google asks for more evidence. Submitting complete evidence the first time is the best way to avoid delays."),
        ("Should I create a new Google Business Profile if mine is suspended?", "No. A new profile for the same business is treated as a duplicate and usually makes things worse. It can also cut you off from the reviews and history attached to the original profile. Appeal the original instead."),
        ("Will I lose my reviews if my profile is suspended?", "Reviews are normally kept on the profile while it is suspended and come back when it is reinstated. They are at risk if you delete the profile or start a new one."),
        ("Can a competitor get my profile suspended?", "A competitor can report your profile or suggest edits, and if the report points to a real guideline problem, such as keywords in your name or an address you do not really use, Google may act on it. A profile that follows the guidelines has very little to fear from reports."),
        ("Can you guarantee reinstatement?", "No one can. Only Google decides. What I can do is find the likely trigger, fix it, and help you put together the evidence Google asks for, which gives a genuine business the best chance."),
    ],
    body="""
<p>You search for your own business and it is gone from Google Maps. Or you log in and see a red banner saying your profile is suspended. For a roofer, plumber or HVAC company that gets most of its calls from the map pack, the phone goes quiet almost immediately.</p>
<p>The good news: most suspensions of real, legitimate contractors can be reversed. The bad news: the first reaction most owners have (editing everything, deleting the profile or making a new one) usually makes it worse. This guide walks through what to do, in order.</p>
{toc}
<div class="note"><p><strong>The short version:</strong> Do not delete the profile or create a new one. Find the guideline problem that most likely triggered the suspension, fix it, collect proof that your business is real and operates where you say it does, then submit one complete appeal.</p></div>

<h2 id="types">What a suspension actually means</h2>
<p>Google uses "suspended" for a few different situations, and they affect you differently. Check which one you are in before you do anything else.</p>
<div class="tbl"><table>
<thead><tr><th>What you see</th><th>What it usually means</th><th>Impact on calls</th></tr></thead>
<tbody>
<tr><td>Profile missing from Maps and search, suspension notice in your dashboard</td><td>Google believes the business, address or listing may not meet its guidelines</td><td>Severe. You get no calls from the profile until it is reinstated</td></tr>
<tr><td>Profile still visible, but you cannot edit it or reply to reviews</td><td>Your access or your account has been restricted, not necessarily the business itself</td><td>Moderate. Calls continue, but you cannot manage the profile</td></tr>
<tr><td>Profile visible, with pending or rejected edits and a request to verify</td><td>A recent change (name, address, category) triggered a review</td><td>Low to moderate, but can turn into a full suspension if ignored</td></tr>
</tbody></table></div>
<p>If you manage several profiles from one Google account, also check whether the restriction is on the account (every profile affected) or just one listing.</p>

<h2 id="triggers">Why contractor profiles get suspended</h2>
<p>Service-area businesses, the trades that drive to the customer, are suspended far more often than shops and restaurants. They have no storefront for Google to check, and the industry has a long history of fake listings. These are the triggers I see most often, roughly in order.</p>
<div class="tbl"><table>
<thead><tr><th>Trigger</th><th>Why Google flags it</th><th>Fix before appealing</th></tr></thead>
<tbody>
<tr><td><strong>Keywords or city in the business name</strong> ("Best Roofing Dallas TX")</td><td>Names must match the real-world brand</td><td>Change it to your legal or signage name, exactly as on your license and trucks</td></tr>
<tr><td><strong>Virtual office, P.O. box or coworking address</strong></td><td>The address cannot be verified as a real place of business</td><td>Use a real address you operate from, or hide the address and set a service area</td></tr>
<tr><td><strong>Address shown when you do not serve customers there</strong></td><td>Service-area businesses that do not receive customers should hide the address</td><td>Remove the address from public view and list your service areas</td></tr>
<tr><td><strong>Big edits in one go</strong> (name, address, category, phone)</td><td>Several core changes at once look like a takeover or a rebrand to game rankings</td><td>Make one core change at a time, with evidence ready</td></tr>
<tr><td><strong>Duplicate profiles</strong> for the same business</td><td>Each business should have one profile per real location</td><td>Identify the duplicates and request removal of the extras</td></tr>
<tr><td><strong>Service area that is far too big</strong></td><td>Areas reaching well beyond a realistic drive look like an attempt to rank everywhere</td><td>Trim the service area to where you really work</td></tr>
<tr><td><strong>Review problems</strong>: incentives, gating or fake reviews</td><td>Breaks Google's review policies</td><td>Stop the practice and change your review request process</td></tr>
<tr><td><strong>Website or phone mismatch</strong></td><td>Tracking numbers or a site for a different brand create inconsistencies</td><td>Make the site and phone clearly match the business on the profile</td></tr>
</tbody></table></div>
<blockquote><p>"Your name should reflect your business's real-world name, as used consistently on your storefront, website, stationery, and as known to customers."</p><cite>Google Business Profile guidelines, <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener">Guidelines for representing your business on Google</a></cite></blockquote>
<p>The name rule is the one contractors break most. It is tempting because keywords in a name can help rankings for a while. It is also the easiest thing for a competitor to report.</p>

<h2 id="first-24-hours">What to do in the first 24 hours</h2>
<ol>
<li><strong>Do not delete the profile.</strong> Deleting it can lose your reviews and history permanently.</li>
<li><strong>Do not create a new profile.</strong> A second listing for the same business looks like a duplicate and makes reinstatement harder.</li>
<li><strong>Stop making edits.</strong> Every edit while suspended adds noise to the review.</li>
<li><strong>Screenshot everything:</strong> the suspension notice, your current profile details, and any emails from Google.</li>
<li><strong>Read the notice carefully.</strong> It sometimes names the policy area. Then check your profile against <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener">Google's guidelines</a> and the trigger table above.</li>
<li><strong>Keep the phone covered.</strong> While the profile is down, make sure your website, any <a href="/blog/local-services-ads-vs-seo-for-contractors">Local Services Ads</a> and other listings carry the right number so you lose as few calls as possible.</li>
</ol>

<h2 id="evidence">The evidence that gets profiles reinstated</h2>
<p>An appeal is a request for Google to check that you are a real business operating as described. The more clearly you show that, the better. Prepare these before you submit:</p>
<div class="tbl"><table>
<thead><tr><th>Evidence</th><th>What it proves</th><th>Tips</th></tr></thead>
<tbody>
<tr><td>Business or contractor license</td><td>The business legally exists and operates in the area</td><td>The name and address should match the profile exactly</td></tr>
<tr><td>Utility bill or lease for the address</td><td>You really operate from that address</td><td>Recent, showing the business name</td></tr>
<tr><td>Photos of branded vehicles and equipment</td><td>A real trade business, not a lead-generation listing</td><td>Show the business name and phone on the truck</td></tr>
<tr><td>Photos of the location, including signage</td><td>The address is a real place of business</td><td>Wide shot showing the street plus a close-up of the sign</td></tr>
<tr><td>Website with matching name, phone and services</td><td>Consistency across your online presence</td><td>Fix mismatches before you appeal, not after</td></tr>
<tr><td>Liability insurance certificate</td><td>An active, insured trade business</td><td>Helpful supporting evidence for service-area businesses</td></tr>
</tbody></table></div>
<p>Google may also ask for a short video verification that shows your location, equipment and proof of management. If it does, record it in one continuous take: street signs or the outside of the building, then the branded vehicle and tools, then you opening the office or unlocking the equipment.</p>

<h2 id="appeal">How to submit the appeal</h2>
<ol>
<li>Fix the guideline problems you found first. Appealing with the same issues still in place usually gets a quick rejection.</li>
<li>Open your profile while signed in and follow the link in the suspension notice to request a review. Google handles this through its Business Profile appeals process.</li>
<li>Upload your evidence. Use clear, legible files, with the business name visible on every document.</li>
<li>Keep the explanation short and factual: what the business is, where it operates, and what you corrected.</li>
<li>Submit once and wait. Multiple appeals for the same issue do not speed anything up.</li>
</ol>
<div class="note"><p><strong>If the appeal is rejected:</strong> do not submit the same thing again. Work out what Google could not confirm (usually the address or the name), fix it or gather stronger proof, and then appeal again. The <a href="https://support.google.com/business/community" target="_blank" rel="noopener">Business Profile Help Community</a> can also escalate genuine cases.</p></div>

<h2 id="after">After reinstatement: rankings and recovery</h2>
<p>Once reinstated, most profiles get their reviews back and start showing again within days. Rankings can take a little longer to settle, and sometimes they do not fully return if the old rankings depended on the thing that was removed, such as keywords in the name.</p>
<p>That is normal. Rebuild with the signals that last: the right categories, a steady flow of reviews, a strong page on your website for each service, and the steps in <a href="/blog/how-to-rank-in-google-map-pack">how to rank in the Google map pack</a>.</p>

<h2 id="prevent">How to avoid another suspension</h2>
<ul>
<li>Use your real business name, with no added keywords or cities.</li>
<li>Hide your address if customers do not visit you, and keep the service area realistic.</li>
<li>Change one core detail at a time, and only when something genuinely changed.</li>
<li>Keep ownership in your own Google account and give agencies manager access only.</li>
<li>Ask every customer for a review, never only the happy ones, and never offer anything for it.</li>
<li>Keep your name, address and phone the same on your website and directories. The <a href="/blog/local-seo-checklist-for-contractors">local SEO checklist for contractors</a> covers this step by step.</li>
</ul>
<p>Not sure what triggered yours, or worried your profile could be next? A <a href="/free-seo-audit">free Local SEO audit</a> checks your profile against Google's guidelines and lists anything that puts it at risk, alongside what is holding your rankings back.</p>
""",
))

# ---------------------------------------------------------------------------
# 2. SEO Strategy cluster: LSA vs SEO (comparison, commercial investigation)
# ---------------------------------------------------------------------------
POSTS.append(dict(
    slug="local-services-ads-vs-seo-for-contractors",
    cat="SEO Strategy", cat_slug="seo-strategy",
    h1="Local Services Ads vs SEO for contractors: which brings cheaper calls?",
    title="Local Services Ads vs SEO for Contractors: Cost, Leads & Which Wins",
    desc="Google Local Services Ads vs local SEO vs Google Ads for roofers, plumbers, HVAC and septic companies: how each is paid for, cost per lead over time, and which to choose.",
    lead="How Google Local Services Ads, Google Ads and local SEO compare for roofers, plumbers, HVAC and septic companies, and how to decide where your marketing budget goes.",
    card="How Local Services Ads, Google Ads and local SEO compare on cost per lead, speed and control, and how to choose.",
    aside=("Not sure where to spend?", "I'll look at your market, your current calls and the competitors, and tell you honestly whether SEO is worth it for you yet.", "/seo-services", "SEO services →"),
    related=["how-long-does-local-seo-take", "google-business-profile-suspended", "how-to-get-more-septic-pumping-customers"],
    faq=[
        ("Do Local Services Ads help my SEO or map rankings?", "Not directly. Local Services Ads are a separate paid placement and do not change how your Google Business Profile ranks in the map pack. They share some ingredients, such as reviews and accurate business details, so work on one often helps the other."),
        ("What does a Local Services Ads lead cost?", "It depends on the trade, the job type and the market. Prices range from tens of dollars for some services to well over $100 for competitive trades such as roofing in large cities. Google shows the expected cost per lead in your account when you set up."),
        ("Can I stop paying for SEO once I rank?", "You can scale it down, but rankings need upkeep. Competitors keep working, reviews need to stay recent and pages need updating. Most businesses move to a lighter maintenance plan rather than stopping completely."),
        ("Which is better for emergency jobs like burst pipes or no-heat calls?", "Local Services Ads and the map pack both do well for urgent searches because they show a phone number at the top of the page. In practice, the strongest setup for emergency trades is a well-ranked Google Business Profile plus Local Services Ads to cover the gaps."),
        ("Is SEO worth it for a small, one-truck business?", "Often yes, especially in smaller towns and less crowded trades where the map pack is easier to win. A free audit is the quickest way to see how hard your market is before you spend anything."),
    ],
    body="""
<p>Search "plumber near me" and you will usually see three things before any normal website: Local Services Ads with a "Google Screened" or "Google Guaranteed" badge, regular Google Ads, and the map pack. Each one is a different way to pay for calls, and contractors often spend on the wrong one first.</p>
<p>This guide compares them honestly, including where SEO is <em>not</em> the right answer yet.</p>
{toc}
<div class="note"><p><strong>The short version:</strong> Local Services Ads and Google Ads buy calls now, at a price that never really goes down. Local SEO costs more up front relative to the calls it brings in the early months, then the cost per call keeps falling while the rankings hold. Most established contractors do best with both: ads for speed, SEO for margin.</p></div>

<h2 id="three-options">The three ways to get calls from Google</h2>
<div class="tbl"><table>
<thead><tr><th></th><th>Local Services Ads</th><th>Google Ads (search)</th><th>Local SEO</th></tr></thead>
<tbody>
<tr><td><strong>Where you show</strong></td><td>Very top of the page for many service searches</td><td>Top and bottom of the results, marked "Sponsored"</td><td>Map pack and normal organic results</td></tr>
<tr><td><strong>How you pay</strong></td><td>Per lead (call or message)</td><td>Per click, whether or not they call</td><td>A monthly fee or in-house time, not per lead</td></tr>
<tr><td><strong>Time to first calls</strong></td><td>Days to a few weeks, after screening</td><td>Days</td><td>Weeks to months, depending on the market</td></tr>
<tr><td><strong>Cost per lead over time</strong></td><td>Roughly flat, and rises as more competitors bid</td><td>Roughly flat, and rises with competition</td><td>Falls as rankings and traffic grow</td></tr>
<tr><td><strong>When you stop paying</strong></td><td>Leads stop the same day</td><td>Leads stop the same day</td><td>Rankings fade slowly, often over months</td></tr>
<tr><td><strong>Control</strong></td><td>Low: job types, area, hours and budget</td><td>High: keywords, ads, landing pages and bids</td><td>Medium: you control your site and profile, not Google</td></tr>
<tr><td><strong>Trust signal</strong></td><td>Google badge, background and license checks</td><td>"Sponsored" label, which some people skip</td><td>Reviews and organic position, which many people trust most</td></tr>
<tr><td><strong>Best for</strong></td><td>Filling the schedule fast in trades it covers</td><td>Specific high-value jobs and testing offers</td><td>Lowering cost per job and building an asset you own</td></tr>
</tbody></table></div>

<h2 id="lsa">How Local Services Ads work</h2>
<p>Local Services Ads are Google's pay-per-lead ads for service businesses. To run them, your business goes through Google's screening, which for most trades includes background checks and license and insurance verification. Once approved, you appear with a badge at the very top of many service searches, and customers can call or message you directly.</p>
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
<p>Local SEO is the work that gets your Google Business Profile into the <a href="/blog/how-to-rank-in-google-map-pack">map pack</a> and your website into organic results: profile optimization, <a href="/seo-services/on-page-seo">service pages</a>, <a href="/blog/service-area-pages-that-rank">service area pages</a>, reviews, citations and <a href="/seo-services/link-building">local links</a>.</p>
<blockquote><p>"Local results are based primarily on relevance, distance, and prominence."</p><cite>Google, <a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener">Tips to improve your local ranking on Google</a></cite></blockquote>
<p>You cannot buy any of those three. That is the downside, because it takes time, and the upside, because once you have them a competitor cannot simply outbid you tomorrow.</p>

<h2 id="math">The math: cost per lead over 12 months</h2>
<p>Here is a simple worked example. The numbers are illustrative, not a quote or a promise. Plug in your own from your ad account and your market.</p>
<div class="tbl"><table>
<thead><tr><th>Month</th><th>Local Services Ads ($60 per lead, $1,800 per month)</th><th>Local SEO ($1,200 per month)</th></tr></thead>
<tbody>
<tr><td>1 to 3</td><td>30 leads a month · $60 per lead</td><td>3 to 8 extra leads a month · $150 to $400 per lead</td></tr>
<tr><td>4 to 6</td><td>26 to 30 leads a month · $60 to $70 per lead</td><td>10 to 20 extra leads a month · $60 to $120 per lead</td></tr>
<tr><td>7 to 12</td><td>22 to 28 leads a month · $65 to $80 per lead as competition grows</td><td>20 to 40+ extra leads a month · $30 to $60 per lead</td></tr>
<tr><td>If you stop</td><td>0 leads the next day</td><td>Most leads continue for months while rankings hold</td></tr>
</tbody></table></div>
<p>The pattern holds in most markets even when the numbers change: ads are cheaper per lead early on, SEO is cheaper per lead later. How fast that crossover happens depends on your competition, which is covered in <a href="/blog/how-long-does-local-seo-take">how long local SEO takes</a>.</p>

<h2 id="choose">Which should you choose?</h2>
<div class="tbl"><table>
<thead><tr><th>Your situation</th><th>Start with</th><th>Why</th></tr></thead>
<tbody>
<tr><td>New business, under 20 reviews</td><td>Local Services Ads, plus profile and review basics</td><td>You need calls now, and reviews help both channels</td></tr>
<tr><td>Established, but paying more and more per lead</td><td>Local SEO, keeping ads running at a lower budget</td><td>Bring cost per job down without a drop in calls</td></tr>
<tr><td>Rural or wide service area (for example septic)</td><td>Local SEO first</td><td>Competition is often light, and SEO can rank you town by town</td></tr>
<tr><td>Seasonal trade (HVAC, roofing)</td><td>SEO started 3 to 6 months before peak, ads during peak</td><td>Rankings need to be in place before the rush, not after</td></tr>
<tr><td>Want specific high-value jobs (repipes, full roof replacements)</td><td>Dedicated service pages, plus Google Ads to test demand</td><td>Ads show quickly which jobs convert, and SEO captures them long term</td></tr>
<tr><td>Profile suspended</td><td>Local Services Ads to cover calls while you appeal</td><td>See the <a href="/blog/google-business-profile-suspended">suspension guide</a></td></tr>
</tbody></table></div>

<h2 id="together">Running both without wasting money</h2>
<ul>
<li><strong>Track calls by source.</strong> Use a separate tracking number for each channel so you know what each booked job actually cost.</li>
<li><strong>Use the same reviews strategy for both.</strong> More recent, detailed reviews help your profile rank and help your ads convert.</li>
<li><strong>Turn ads down as rankings grow.</strong> When you rank in the map pack for a service, test lowering the ad budget for that service and watch total calls.</li>
<li><strong>Answer fast.</strong> Responsiveness affects Local Services Ads, and a missed call from either channel is money gone.</li>
</ul>
<p>Want a straight answer for your business? My <a href="/free-seo-audit">free audit</a> shows how hard your local market is to rank in and whether SEO, ads or both make sense right now. If SEO is not worth it for you yet, I will tell you.</p>
""",
))

# ---------------------------------------------------------------------------
# 3. Local SEO cluster: septic (niche, low competition, supports /local-seo/septic-seo)
# ---------------------------------------------------------------------------
POSTS.append(dict(
    slug="how-to-get-more-septic-pumping-customers",
    cat="Local SEO", cat_slug="local-seo",
    h1="How to get more septic pumping customers from Google: a 90-day plan",
    title="How to Get More Septic Pumping Customers: A 90-Day Google Plan",
    desc="A practical 90-day plan for septic companies to get more pumping, inspection and repair calls from Google Maps and search across a wide rural service area.",
    lead="A practical 90-day plan for septic pumping, inspection and install companies to get more calls from Google Maps and search, across every town they drive to.",
    card="A 90-day plan for septic companies to get more pumping, inspection and repair calls from Google across a wide service area.",
    aside=("Septic SEO, done for you", "I help septic companies rank across the counties and towns they actually serve, not just near the yard.", "/local-seo/septic-seo", "Septic SEO →"),
    related=["service-area-pages-that-rank", "how-to-rank-in-google-map-pack", "local-services-ads-vs-seo-for-contractors"],
    faq=[
        ("What Google Business Profile category should a septic company use?", "Most septic companies should use \u201cSeptic system service\u201d as the primary category. Add secondary categories only for work you genuinely do, for example drainage or excavation services. Check which categories the top three competitors in your area use."),
        ("Should I build a page for every town I serve?", "No. Build pages for the counties and towns that bring in real work, and give each one genuinely local detail such as soil, permit rules and typical systems. Thin pages that only swap the town name can be treated as doorway pages."),
        ("How long does SEO take for a septic company?", "Septic is usually less competitive online than plumbing or roofing, so profile fixes and service pages often show results faster. Many septic companies see movement in the first two to three months, with the outer towns in the service area following over the next few months."),
        ("Is it worth targeting real estate inspection searches?", "Yes. Inspection searches come with a deadline, so buyers and agents call quickly, and a good inspection experience often turns into a long-term pumping customer and agent referrals."),
        ("How do I get reviews from customers in remote towns?", "Ask on site, the same day, and send a direct review link by text before you leave. Ask customers to mention the service and the town in their own words. Never offer a discount or gift for a review."),
    ],
    body="""
<p>Septic is one of the best trades for local SEO. Fewer companies compete online than in plumbing or roofing, every home on septic needs regular pumping, and urgent problems turn into calls fast.</p>
<p>The challenge is geography. Your customers are spread across counties and small towns, often 30 or 40 minutes from your yard, and Google does not automatically connect your business to those places. This plan fixes that in 90 days.</p>
{toc}
<div class="note"><p><strong>The short version:</strong> Fix your Google Business Profile and service area, build one strong page per septic service, add useful pages for the counties that bring in real work, collect reviews from across the whole area, and own the real estate inspection searches.</p></div>

<h2 id="why-different">Why septic search is different</h2>
<ul>
<li><strong>The demand repeats.</strong> Every home on septic needs regular pumping, so a customer you win once can come back every few years.</li>
<li><strong>The service area is huge.</strong> You are often competing town by town against small local operators, not one dominant company.</li>
<li><strong>Urgent searches convert.</strong> "Septic backing up" or "sewage smell in yard" is someone who needs a truck today.</li>
<li><strong>Real estate drives demand.</strong> Home sales often need a septic inspection, with a deadline attached.</li>
</ul>
<blockquote><p>"Household septic tanks are typically pumped every three to five years."</p><cite>U.S. EPA, <a href="https://www.epa.gov/septic/how-care-your-septic-system" target="_blank" rel="noopener">How to Care for Your Septic System</a></cite></blockquote>
<p>That cycle matters for marketing. Every pumping job is a customer you can remind in three years, and every new homeowner in your area is a future customer who will probably start with a Google search.</p>

<h2 id="searches">The searches worth winning</h2>
<p>Not every search is worth the same. Map each one to the page that should rank for it.</p>
<div class="tbl"><table>
<thead><tr><th>Search type</th><th>Example searches</th><th>Intent</th><th>Page that should rank</th></tr></thead>
<tbody>
<tr><td>Routine pumping</td><td>septic pumping near me, septic tank cleaning [county]</td><td>Ready to book, price-sensitive</td><td>Google Business Profile plus pumping service page</td></tr>
<tr><td>Emergency</td><td>septic backing up, septic alarm going off</td><td>Urgent, high value</td><td>Emergency or repair page with the phone number up top</td></tr>
<tr><td>Real estate</td><td>septic inspection for home sale, septic inspection cost</td><td>Deadline-driven, often an agent</td><td>Real estate inspection page</td></tr>
<tr><td>Repairs and drain fields</td><td>drain field repair, septic drain field replacement</td><td>High ticket, researching</td><td>Drain field page with process and FAQs</td></tr>
<tr><td>New systems</td><td>septic system installation [county], perc test [county]</td><td>High ticket, long decision</td><td>Installation page plus county pages covering permits</td></tr>
<tr><td>Commercial</td><td>grease trap pumping, commercial septic service</td><td>Recurring contracts</td><td>Commercial services page</td></tr>
</tbody></table></div>

<h2 id="plan">The 90-day plan</h2>
<div class="tbl"><table>
<thead><tr><th>When</th><th>Work</th><th>What you should have at the end</th></tr></thead>
<tbody>
<tr><td>Weeks 1 to 2</td><td>Audit, profile fixes, service area, tracking</td><td>A clean, correct profile and call tracking in place</td></tr>
<tr><td>Weeks 3 to 6</td><td>Service pages and the review system</td><td>One strong page per service, and reviews coming in weekly</td></tr>
<tr><td>Weeks 7 to 10</td><td>County and town pages, citations</td><td>Pages for the areas that bring real work, consistent listings</td></tr>
<tr><td>Weeks 11 to 13</td><td>Real estate partners, local links, review of results</td><td>Agent relationships, first local links, a plan for the next quarter</td></tr>
</tbody></table></div>

<h3>Weeks 1 to 2: profile, service area and tracking</h3>
<ul>
<li>Set "Septic system service" as the primary category, and add secondary categories only for work you really do.</li>
<li>If customers do not come to your yard, hide the address and list the towns and counties you serve. Keep it realistic; an area far bigger than you can actually cover can trigger a review. See <a href="/blog/google-business-profile-suspended">why contractor profiles get suspended</a>.</li>
<li>List every service in the profile: pumping, inspections, real estate inspections, repairs, drain fields, installs, grease traps.</li>
<li>Add real photos: your trucks, crew, equipment and jobs.</li>
<li>Set up call tracking so you know which towns and services the calls come from.</li>
</ul>

<h3>Weeks 3 to 6: service pages and reviews</h3>
<p>A single "Services" page with a bullet list will not rank for six different kinds of search. Build one page per service, each answering what the customer actually wants to know: what the job involves, how long it takes, signs you need it, what affects the price, and which areas you cover. The <a href="/seo-services/content-seo">content SEO</a> approach I use starts with exactly this structure.</p>
<p>At the same time, start a review routine:</p>
<ul>
<li>Ask on site, the same day, and text a direct review link before leaving.</li>
<li>Ask customers to mention the service and their town in their own words.</li>
<li>Ask every customer, not only the ones you expect to be happy, and never offer anything in return. Google's review policies forbid both.</li>
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
<p>Pages that only swap the town name are the fastest way to waste this step. <a href="/blog/service-area-pages-that-rank">How to write service area pages that rank</a> covers how to avoid it. Clean up your citations at the same time so your name, address and phone match everywhere.</p>

<h3>Weeks 11 to 13: real estate partners and local links</h3>
<ul>
<li>Create a clear real estate inspection page: what is checked, turnaround time and what the report includes.</li>
<li>Introduce yourself to local agents and home inspectors. A page they can send clients to makes referring you easy.</li>
<li>Earn local links from county extension offices, local business associations, sponsorships and supplier directories. <a href="/seo-services/link-building">Local link building</a> matters more in rural markets than most owners expect.</li>
<li>Review what came in: calls by town and service, rankings across the area, and which pages bring leads.</li>
</ul>

<h2 id="mistakes">Common mistakes that cost septic companies calls</h2>
<div class="tbl"><table>
<thead><tr><th>Mistake</th><th>What it costs you</th><th>Better approach</th></tr></thead>
<tbody>
<tr><td>Using "Plumber" as the primary category</td><td>Weaker relevance for septic searches</td><td>"Septic system service" as primary</td></tr>
<tr><td>Copy-paste town pages</td><td>Pages that do not rank and can look like doorway spam</td><td>Fewer, genuinely local county pages</td></tr>
<tr><td>Reviews only from customers near the yard</td><td>Weak visibility in outer towns</td><td>Ask everyone, everywhere, every job</td></tr>
<tr><td>No inspection page</td><td>Missed deadline-driven calls and agent referrals</td><td>A dedicated real estate inspection page</td></tr>
<tr><td>Buying shared leads instead of building rankings</td><td>Paying again for every customer, competing with others for the same lead</td><td>Build rankings, use ads only to fill gaps (see <a href="/blog/local-services-ads-vs-seo-for-contractors">LSA vs SEO</a>)</td></tr>
</tbody></table></div>

<h2 id="measure">How to measure whether it is working</h2>
<ul>
<li>Map rankings checked across a grid of your service area, not just from your yard.</li>
<li>Calls and form leads by town and by service.</li>
<li>Inspection requests and agent referrals.</li>
<li>Review count and how recent the latest reviews are.</li>
</ul>
<p>If you work in states where septic is common outside the cities, such as <a href="/locations/north-carolina">North Carolina</a> or <a href="/locations/georgia">Georgia</a>, the opportunity is often bigger than owners expect. For the full done-for-you version of this plan, see <a href="/local-seo/septic-seo">septic SEO services</a>, or start with a <a href="/free-seo-audit">free audit</a> of your profile, website and the competitors in your area.</p>
""",
))
