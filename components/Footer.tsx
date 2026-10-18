import Link from "next/link";
import { ALL_INDUSTRIES } from "@/lib/industries";
import { LEGAL_PAGES } from "@/lib/legal";
import { EMAIL, SOCIAL } from "@/lib/site";
import { ALL_SERVICES } from "@/lib/services";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Link className="logo" href="/">
              Ramjan Ali<b>.</b>
            </Link>
            <p>
              Local SEO &amp; AI search visibility for US home service businesses. Based in Dhaka, working in your
              time zone.
            </p>
            <ul className="social">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} rel="me noopener" target="_blank">
                    <SocialIcon name={s.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {ALL_SERVICES.map((sv) => (
                <li key={sv.href}>
                  <Link href={sv.href}>{sv.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/locations">Locations</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Industries</h4>
            <ul>
              {ALL_INDUSTRIES.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link href={`/local-seo/${t.slug}`}>{t.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/industries">All industries →</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/book-a-call">Book a Call</Link>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              {LEGAL_PAGES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>© {new Date().getFullYear()} Ramjan Ali Akash · Local SEO &amp; AI Search Visibility</span>
          <span>
            <Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link> · Dhaka, Bangladesh · GMT+6 ·
            replies within 24h
          </span>
        </div>
      </div>
    </footer>
  );
}
