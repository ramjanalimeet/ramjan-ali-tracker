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
      <div className="blog-filter" role="toolbar" aria-label="Filter case studies by service">
        {(["all", ...PLAYBOOK_SERVICES.map((s) => s.key)] as Filter[]).map((k) => (
          <button
            type="button"
            key={k}
            className={filter === k ? "chip on" : "chip"}
            aria-pressed={filter === k}
            onClick={() => setFilter(k)}
          >
            {k === "all" ? "All case studies" : serviceOf(k).name}
            <span className="n">{count(k)}</span>
          </button>
        ))}
      </div>
      <div className="pb-list" aria-live="polite">
        {shown.map((p) => {
          const svc = serviceOf(p.service);
          return (
            <article className="pb" key={p.id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pb-cover" src={p.image} alt={p.imageAlt} width={640} height={360} loading="lazy" />
              <div className="pb-content">
              <div className="pb-tags">
                <span className="tag">{p.trade} case study</span>
              </div>
              <h3>{p.title}</h3>
              <p className="pb-sum">{p.summary}</p>
              <div className="pb-actions">
                <div className="pb-action-tags" aria-label={`${svc.name}, ${p.plan} plan`}>
                  <span className="pb-pill">{svc.name}</span>
                  <span className="pb-pill plan">{p.plan}</span>
                </div>
                <Link className="pb-case" href={`/case-studies/${p.id}`}>
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
