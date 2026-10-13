"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ALL_SERVICES, SERVICE_GROUPS } from "@/lib/services";

const LINKS = [
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/free-seo-audit", label: "Free Audit" },
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

  const page = (on: boolean) => (on ? ("page" as const) : undefined);
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const onServices = pathname === "/seo-services" || ALL_SERVICES.some((s) => pathname === s.href);
  const onIndustries = pathname === "/industries" || pathname.startsWith("/local-seo/");

  return (
    <>
      <header className="hdr" id="hdr">
        <div className="wrap nav">
          <Link className="logo" href="/" aria-label="Ramjan Ali, home">
            Ramjan Ali<b>.</b>
          </Link>
          <nav aria-label="Main">
            <ul className="links">
              <li>
                <Link href="/" aria-current={page(pathname === "/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/seo-services" aria-current={page(onServices)} aria-haspopup="true">
                  Services
                  <Caret />
                </Link>
                <div className="dd mega">
                  <div className="mega-box">
                    <div className="mega-cols">
                      {SERVICE_GROUPS.map((g) => (
                        <div key={g.title}>
                          <p className="mega-title">{g.title}</p>
                          <ul>
                            {g.items.map((s) => (
                              <li key={s.href}>
                                <Link href={s.href}>
                                  {s.name}
                                  <small>{s.blurb}</small>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="all">
                      <Link href="/seo-services">All services →</Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/industries" aria-current={page(onIndustries)}>
                  Industries
                </Link>
              </li>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={page(isCurrent(l.href))}>
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
        <Link href="/">Home</Link>
        <details>
          <summary>Services</summary>
          <ul>
            {ALL_SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/seo-services">All services</Link>
            </li>
          </ul>
        </details>
        <Link href="/industries">Industries</Link>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <Link className="btn btn-dark" href="/book-a-call">
          Book a call →
        </Link>
      </nav>
    </>
  );
}
