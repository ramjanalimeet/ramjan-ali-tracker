"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { POSTS, TOPICS, type TopicId, topicOf } from "@/lib/posts";
import { PostCard } from "./PostCards";

type Filter = TopicId | "all";

/** Article grid with topic filters. All articles are in the HTML; filtering only hides cards. */
export function BlogExplorer() {
  const [filter, setFilter] = useState<Filter>("all");

  // Topic links elsewhere on the page use #topic-<id>.
  useEffect(() => {
    const fromHash = () => {
      const id = location.hash.replace("#topic-", "") as TopicId;
      if (TOPICS.some((t) => t.id === id)) {
        setFilter(id);
        document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    fromHash();
    addEventListener("hashchange", fromHash);
    return () => removeEventListener("hashchange", fromHash);
  }, []);

  const count = (id: Filter) => (id === "all" ? POSTS.length : POSTS.filter((p) => p.topic === id).length);
  const shown = filter === "all" ? POSTS : POSTS.filter((p) => p.topic === filter);
  const topic = filter === "all" ? null : topicOf(filter);

  return (
    <>
      <div className="blog-filter" role="toolbar" aria-label="Filter articles by topic">
        {(["all", ...TOPICS.map((t) => t.id)] as Filter[]).map((id) => (
          <button
            type="button"
            key={id}
            className={filter === id ? "chip on" : "chip"}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {id === "all" ? "All articles" : topicOf(id).name}
            <span className="n">{count(id)}</span>
          </button>
        ))}
      </div>
      {topic && (
        <p className="blog-topic-note">
          {topic.blurb} Related service: <Link href={topic.service.href}>{topic.service.name} →</Link>
        </p>
      )}
      <div className="grid g3" aria-live="polite">
        {shown.map((p) => (
          <PostCard post={p} reveal={false} key={p.slug} />
        ))}
      </div>
      {shown.length === 0 && <p className="muted">New articles on this topic are on the way.</p>}
    </>
  );
}
