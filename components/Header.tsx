"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TRADES } from "@/lib/site";

const LINKS = [
  { href: "/local-seo", label: "Local SEO", mobile: "Local SEO" },
  { href: "/ai-search", label: "AI Search", mobile: "AI Search Visibility" },
  { href: "/locations", label: "Locations", mobile: "Locations" },
  { href: "/pricing", label: "Pricing", mobile: "Pricing" },
  { href: "/case-studies", label: "Case Studies", mobile: "Case Studies" },
  { href: "/blog", label: "Blog", mobile: "Blog" },
  { href: "/free-seo-audit", label: "Free Audit", mobile: "Free Audit" },
];

function Caret() {
  return (
    <svg className="car" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || (href === "/blog" && pathname.startsWith("/blog/"));
  const current = (href: string) => (isCurrent(href) ? ("page" as const) : undefined);
  const [localSeo, aiSearch, ...rest] = LINKS;

  return (
    <>
      <header className="hdr" id="hdr">
        <div className="wrap nav">
          <Link className="logo" href="/" aria-label="Ramjan Ali, home">
            Ramjan Ali<b>.</b>
          </Link>
          <nav aria-label="Main">
            <ul className="links">
              {[localSeo, aiSearch].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={current(l.href)}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/local-seo#trades"
                  aria-current={pathname.startsWith("/local-seo/") ? "page" : undefined}
                  aria-haspopup="true"
                >
                  Industries
                  <Caret />
                </Link>
                <div className="dd">
                  <ul>
                    {TRADES.map((t) => (
                      <li key={t.slug}>
                        <Link href={`/local-seo/${t.slug}`}>
                          {t.name}
                          <small>{t.blurb}</small>
                        </Link>
                      </li>
                    ))}
                    <li className="all">
                      <Link href="/local-seo#trades">All industries →</Link>
                    </li>
                  </ul>
                </div>
              </li>
              {rest.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={current(l.href)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <Link className="btn btn-dark btn-sm" href="/book-a-call">
              Book a call <span className="arr">→</span>
            </Link>
            <button
              className="menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mnav"
              onClick={() => setOpen((o) => !o)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <nav
        className="mnav"
        id="mnav"
        aria-label="Mobile"
        onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
      >
        <Link href={localSeo.href}>{localSeo.mobile}</Link>
        <Link href={aiSearch.href}>{aiSearch.mobile}</Link>
        <details>
          <summary>Industries</summary>
          <ul>
            {TRADES.map((t) => (
              <li key={t.slug}>
                <Link href={`/local-seo/${t.slug}`}>{t.name}</Link>
              </li>
            ))}
          </ul>
        </details>
        {rest.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.mobile}
          </Link>
        ))}
        <Link className="btn btn-dark" href="/book-a-call">
          Book a call →
        </Link>
      </nav>
    </>
  );
}
