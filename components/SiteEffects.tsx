"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Scroll-driven header, progress bar, mobile CTA, and reveal-on-scroll animations. */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const hdr = document.getElementById("hdr");
    const prog = document.querySelector<HTMLElement>(".progress");
    const mcta = document.querySelector<HTMLElement>(".mcta");
    let last = 0;
    const onScroll = () => {
      const y = scrollY;
      const h = document.documentElement.scrollHeight - innerHeight;
      hdr?.classList.toggle("scrolled", y > 10);
      hdr?.classList.toggle("hide", y > last && y > 400 && !document.body.classList.contains("menu-open"));
      last = y;
      if (prog) prog.style.width = `${h > 0 ? (y / h) * 100 : 0}%`;
      mcta?.classList.toggle("on", y > 500 && y < h - 700);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>(".rv:not(.in)")];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
