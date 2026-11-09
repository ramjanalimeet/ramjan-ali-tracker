"use client";

import Link from "next/link";
import { useState } from "react";
import { PLAYBOOKS, PLAYBOOK_SERVICES, type ServiceKey, serviceOf } from "@/lib/playbooks";

type Filter = ServiceKey | "all";

/** Playbook cards with a service filter. Every playbook is in the HTML; filtering only hides cards. */
export function PlaybookExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const count = (k: Filter) => (k === "all" ? PLAYBOOKS.length : PLAYBOOKS.filter((p) => p.service === k).length);
  const shown = filter === "all" ? PLAYBOOKS : PLAYBOOKS.filter((p) => p.service === filter);

  return (
    <>
      <div className="blog-filter" role="toolbar" aria-label="Filter playbooks by service">
        {(["all", ...PLAYBOOK_SERVICES.map((s) => s.key)] as Filter[]).map((k) => (
          <button
            type="button"
            key={k}
            className={filter === k ? "chip on" : "chip"}
            aria-pressed={filter === k}
            onClick={() => setFilter(k)}
          >
            {k === "all" ? "All playbooks" : serviceOf(k).name}
            <span className="n">{count(k)}</span>
          </button>
        ))}
      </div>
      <div className="pb-list" aria-live="polite">
        {shown.map((p, i) => {
          const svc = serviceOf(p.service);
          return (
            <article className="pb" key={p.id}>
              <div className="pb-tags">
                <span className="tag">Playbook · {p.trade}</span>
                <span className="pb-pill">{svc.name}</span>
                <span className="pb-pill plan">{p.plan} plan</span>
              </div>
              <h3>{p.title}</h3>
              <p className="pb-sum">{p.summary}</p>
              <details className="pb-more" open={i === 0}>
                <summary>See the 90-day playbook</summary>
                <div className="pb-cols">
                  {[
                    { h: "Starting point", items: p.start },
                    { h: "First 90 days", items: p.first90 },
                    { h: "What gets measured", items: p.measured },
                  ].map((col) => (
                    <div key={col.h}>
                      <h4>{col.h}</h4>
                      <ul className="ticks">
                        {col.items.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="pb-links">
                  <Link href={svc.href}>{svc.name} service →</Link>
                  <Link href={`/local-seo/${p.tradeSlug}`}>{p.trade} SEO →</Link>
                  <Link href="/pricing">{p.plan} plan pricing →</Link>
                </div>
              </details>
            </article>
          );
        })}
      </div>
    </>
  );
}
