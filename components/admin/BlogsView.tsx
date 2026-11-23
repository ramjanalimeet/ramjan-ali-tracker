"use client";

import { useCallback, useEffect, useState } from "react";
import { POSTS } from "@/lib/posts";
import type { DashboardBlog } from "@/lib/dashboard-blogs";
import type { AppCtx } from "./AdminApp";
import { api, Empty, Field, fmtDateTime, Modal } from "./ui";

const filters = [
  { id: "published", label: "Published" },
  { id: "scheduled", label: "Scheduled" },
  { id: "draft", label: "Draft" },
  { id: "all", label: "All" },
] as const;

export function BlogsView({ ctx }: { ctx: AppCtx }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [entries, setEntries] = useState<DashboardBlog[]>([]);
  const [editor, setEditor] = useState<DashboardBlog | "new" | null>(null);
  const { toast } = ctx;
  const load = useCallback(() => api<DashboardBlog[]>("blogs").then(setEntries).catch((e) => toast(e.message, "error")), [toast]);
  useEffect(() => {
    void load();
    const timer = window.setInterval(load, 60_000);
    return () => window.clearInterval(timer);
  }, [load]);

  const managed = entries
    .filter((post) => filter === "all" || filter === post.current_status);
  const existing = filter === "all" || filter === "published" ? POSTS : [];

  return (
    <div className="adm-stack lg">
      <header className="adm-head">
        <h1>Blogs</h1>
        <button type="button" className="adm-btn primary" onClick={() => setEditor("new")}>New article</button>
      </header>
      <div className="adm-chips" aria-label="Blog status">
        {filters.map(({ id, label }) => (
          <button key={id} type="button" aria-pressed={filter === id} className={`adm-chip${filter === id ? " on" : ""}`} onClick={() => setFilter(id)}>
            {label}
          </button>
        ))}
      </div>
      <section className="adm-card" aria-label="Blog articles">
        {managed.length || existing.length ? (
          <ul className="adm-list">
            {managed.map((post) => (
              <li key={post.slug}>
                <div><b>{post.title}</b><span>{filters.find((f) => f.id === post.current_status)?.label}{post.publish_at ? ` · ${fmtDateTime(post.publish_at)}` : ""}</span></div>
                {post.current_status === "published" && <a className="adm-btn sm" href={`/blog/${post.slug}`}>View</a>}
                <button type="button" className="adm-btn sm" onClick={() => setEditor(post)}>Edit</button>
              </li>
            ))}
            {existing.map((post) => (
              <li key={post.slug}>
                <div><b>{post.title}</b><span>Published · {post.date}</span></div>
                <a className="adm-btn sm" href={`/blog/${post.slug}`}>View</a>
              </li>
            ))}
          </ul>
        ) : <Empty icon="book" title="No articles in this view" />}
      </section>
      {editor && <BlogEditor ctx={ctx} entry={editor === "new" ? undefined : editor} close={() => setEditor(null)} saved={load} />}
    </div>
  );
}

function BlogEditor({ ctx, entry, close, saved }: { ctx: AppCtx; entry?: DashboardBlog; close: () => void; saved: () => Promise<unknown> }) {
  const [title, setTitle] = useState(entry?.title ?? "");
  const [slug, setSlug] = useState(entry?.slug ?? "");
  const [excerpt, setExcerpt] = useState(entry?.excerpt ?? "");
  const [body, setBody] = useState(entry?.body ?? "");
  const [status, setStatus] = useState(entry?.current_status ?? "draft");
  const [time, setTime] = useState(() => {
    if (!entry?.publish_at) return "";
    return new Date(entry.publish_at + 6 * 3600_000).toISOString().slice(0, 16);
  });
  const [busy, setBusy] = useState(false);
  return (
    <Modal title={entry ? "Edit article" : "New article"} onClose={close} wide>
      <form className="adm-stack" onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        try {
          await api(entry ? `blogs/${entry.slug}` : "blogs", { body: {
            title, slug, excerpt, body, status, publishAt: time ? Date.parse(time + "+06:00") : undefined,
          } });
          await saved();
          ctx.toast("Article saved");
          close();
        } catch (error) {
          ctx.toast((error as Error).message, "error");
        } finally {
          setBusy(false);
        }
      }}>
        <Field label="Title"><input required maxLength={160} value={title} onChange={(e) => setTitle(e.target.value)} /></Field>
        <Field label="URL slug"><input required maxLength={100} pattern="[a-z0-9]+(?:-[a-z0-9]+)*" readOnly={Boolean(entry)} value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="my-new-article" /></Field>
        <Field label="Summary"><textarea rows={2} maxLength={500} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} /></Field>
        <Field label="Article"><textarea rows={10} maxLength={100000} value={body} onChange={(e) => setBody(e.target.value)} required={status !== "draft"} /></Field>
        <Field label="Status">
          <select value={status} onChange={(e) => setStatus(e.target.value as DashboardBlog["current_status"])}>
            <option value="draft">Draft</option><option value="scheduled">Scheduled</option><option value="published">Published</option>
          </select>
        </Field>
        {status === "scheduled" && <Field label="Publish time (Dhaka)"><input type="datetime-local" required value={time} onChange={(e) => setTime(e.target.value)} /></Field>}
        <button className="adm-btn primary" disabled={busy}>{busy ? "Saving…" : "Save article"}</button>
      </form>
    </Modal>
  );
}
