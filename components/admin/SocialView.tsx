"use client";

import { useEffect, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Post } from "./types";
import { api, Brand, Empty, Field, fmtDateTime, Icon, Modal, PLATFORM_LABEL, Status, toLocalInput } from "./ui";

export function SocialView({ ctx }: { ctx: AppCtx }) {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [editing, setEditing] = useState<Partial<Post> | null>(null);
  const load = () => api<Post[]>("posts").then(setPosts).catch((e) => ctx.toast(e.message, "error"));
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const social = ctx.accounts.filter((a) => a.kind === "social");
  const groups: { title: string; list: Post[] }[] = [
    { title: "Scheduled", list: (posts ?? []).filter((p) => p.status === "scheduled").sort((a, b) => a.scheduled_at - b.scheduled_at) },
    { title: "Drafts", list: (posts ?? []).filter((p) => p.status === "draft") },
    { title: "Published", list: (posts ?? []).filter((p) => ["published", "partial", "failed"].includes(p.status)) },
  ];

  return (
    <div className="adm-stack lg">
      <header className="adm-head">
        <div>
          <h1>Social posts</h1>
          <p>Write once, publish to LinkedIn, X, Facebook and Medium on schedule.</p>
        </div>
        <button className="adm-btn primary" onClick={() => setEditing({})}>
          <Icon name="plus" size={16} /> New post
        </button>
      </header>

      {social.length === 0 && (
        <div className="adm-callout">
          <Icon name="share" />
          <div>
            <b>No social accounts connected</b>
            <p>Connect LinkedIn, X, Facebook or Medium so scheduled posts can go out automatically.</p>
          </div>
          <button className="adm-btn primary" onClick={() => ctx.openSettings("social")}>
            Connect accounts
          </button>
        </div>
      )}

      {!posts ? (
        <div className="adm-skel tall" />
      ) : posts.length === 0 ? (
        <Empty icon="share" title="No posts yet">
          Create your first post and pick when it should go live.
        </Empty>
      ) : (
        groups
          .filter((g) => g.list.length)
          .map((g) => (
            <section key={g.title} className="adm-card flush">
              <div className="adm-card-head pad">
                <h2>
                  {g.title} <span className="adm-count">{g.list.length}</span>
                </h2>
              </div>
              <ul className="adm-posts">
                {g.list.map((p) => (
                  <PostRow key={p.id} p={p} ctx={ctx} onEdit={() => setEditing(p)} onChange={load} />
                ))}
              </ul>
            </section>
          ))
      )}

      {editing && (
        <PostComposer
          ctx={ctx}
          post={editing}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            load();
          }}
        />
      )}
    </div>
  );
}

function PostRow({ p, ctx, onEdit, onChange }: { p: Post; ctx: AppCtx; onEdit: () => void; onChange: () => void }) {
  const [busy, setBusy] = useState(false);
  return (
    <li className="adm-post">
      <div className="adm-brands">
        {p.account_ids.map((id) => {
          const a = ctx.accounts.find((x) => x.id === id);
          return a ? <Brand key={id} platform={a.platform} size={22} /> : null;
        })}
      </div>
      <div className="adm-post-main">
        {p.title && <b>{p.title}</b>}
        <p>{p.content}</p>
        {Object.entries(p.results).length > 0 && (
          <div className="adm-results">
            {Object.entries(p.results).map(([id, r]) => {
              const a = ctx.accounts.find((x) => x.id === id);
              return (
                <span key={id} className={r.ok ? "ok" : "bad"} title={r.error}>
                  {PLATFORM_LABEL(r.platform || a?.platform || "")}:{" "}
                  {r.ok ? (
                    r.url ? (
                      <a href={r.url} target="_blank" rel="noopener">
                        view post
                      </a>
                    ) : (
                      "posted"
                    )
                  ) : (
                    r.error?.slice(0, 120)
                  )}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className="adm-post-side">
        <Status value={p.status} />
        <time>{fmtDateTime(p.scheduled_at)}</time>
        <div className="adm-post-actions">
          {p.status !== "published" && (
            <button
              className="adm-btn sm"
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                try {
                  const r = await api<Post>(`posts/${p.id}/publish`, { body: {} });
                  ctx.toast(r.status === "published" ? "Published" : "Some platforms failed — see the post", r.status === "published" ? "ok" : "error");
                  onChange();
                } catch (e) {
                  ctx.toast((e as Error).message, "error");
                } finally {
                  setBusy(false);
                }
              }}
            >
              {busy ? "Publishing…" : p.status === "failed" || p.status === "partial" ? "Retry" : "Publish now"}
            </button>
          )}
          {p.status !== "published" && (
            <button className="adm-btn sm" onClick={onEdit}>
              Edit
            </button>
          )}
          <button
            className="adm-icon-btn"
            aria-label="Delete"
            onClick={async () => {
              if (!confirm("Delete this post from the dashboard?")) return;
              await api(`posts/${p.id}`, { method: "DELETE" });
              onChange();
            }}
          >
            <Icon name="trash" size={16} />
          </button>
        </div>
      </div>
    </li>
  );
}

export function PostComposer({ ctx, post, onClose, onSaved }: { ctx: AppCtx; post: Partial<Post>; onClose: () => void; onSaved: () => void }) {
  const social = ctx.accounts.filter((a) => a.kind === "social");
  const [title, setTitle] = useState(post.title ?? "");
  const [content, setContent] = useState(post.content ?? "");
  const [imageUrl, setImageUrl] = useState(post.image_url ?? "");
  const [ids, setIds] = useState<string[]>(post.account_ids ?? social.filter((a) => a.status === "ok").map((a) => a.id));
  const [when, setWhen] = useState(toLocalInput(post.scheduled_at ?? Date.now() + 60 * 60_000));
  const [busy, setBusy] = useState("");
  const chosen = social.filter((a) => ids.includes(a.id));
  const hasX = chosen.some((a) => a.platform === "twitter");
  const hasMedium = chosen.some((a) => a.platform === "medium");

  const save = async (mode: "draft" | "schedule" | "now") => {
    setBusy(mode);
    try {
      const saved = await api<Post>("posts", {
        body: {
          id: post.id,
          title,
          content,
          imageUrl,
          accountIds: ids,
          status: mode === "draft" ? "draft" : "scheduled",
          scheduledAt: mode === "now" ? Date.now() : new Date(when).getTime(),
        },
      });
      if (mode === "now") {
        const r = await api<Post>(`posts/${saved.id}/publish`, { body: {} });
        ctx.toast(r.status === "published" ? "Published" : "Some platforms failed — see the post", r.status === "published" ? "ok" : "error");
      } else ctx.toast(mode === "draft" ? "Draft saved" : `Scheduled for ${fmtDateTime(new Date(when).getTime())}`);
      onSaved();
    } catch (e) {
      ctx.toast((e as Error).message, "error");
    } finally {
      setBusy("");
    }
  };

  return (
    <Modal
      title={post.id ? "Edit post" : "New post"}
      onClose={onClose}
      wide
      footer={
        <>
          <button className="adm-btn" disabled={!!busy} onClick={() => save("draft")}>
            Save draft
          </button>
          <span className="adm-grow" />
          <button className="adm-btn" disabled={!!busy || !content.trim() || !ids.length} onClick={() => save("now")}>
            {busy === "now" ? "Publishing…" : "Publish now"}
          </button>
          <button className="adm-btn primary" disabled={!!busy || !content.trim() || !ids.length} onClick={() => save("schedule")}>
            <Icon name="clock" size={15} /> {busy === "schedule" ? "Scheduling…" : "Schedule"}
          </button>
        </>
      }
    >
      <div className="adm-stack">
        <Field label="Post to">
          {social.length ? (
            <div className="adm-pick">
              {social.map((a) => (
                <button
                  type="button"
                  key={a.id}
                  className={`adm-pick-item${ids.includes(a.id) ? " on" : ""}`}
                  onClick={() => setIds((s) => (s.includes(a.id) ? s.filter((x) => x !== a.id) : [...s, a.id]))}
                >
                  <Brand platform={a.platform} size={20} />
                  {a.label}
                  {ids.includes(a.id) && <Icon name="check" size={14} />}
                </button>
              ))}
            </div>
          ) : (
            <button type="button" className="adm-btn" onClick={() => ctx.openSettings("social")}>
              Connect a social account first
            </button>
          )}
        </Field>
        <Field label={hasMedium ? "Title (required for Medium)" : "Title (optional)"} hint="Used as the Medium headline and the first line elsewhere.">
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field>
        <Field
          label="Post"
          hint={
            <span className={hasX && content.length > 280 ? "warn" : ""}>
              {content.length} characters{hasX ? " · X allows 280 on a standard account" : ""}
            </span>
          }
        >
          <textarea rows={9} value={content} onChange={(e) => setContent(e.target.value)} placeholder="What do you want to share?" />
        </Field>
        <div className="adm-grid2">
          <Field label="Publish at">
            <input type="datetime-local" value={when} onChange={(e) => setWhen(e.target.value)} />
          </Field>
          <Field label="Image URL (Facebook, optional)">
            <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://…" />
          </Field>
        </div>
        <button
          type="button"
          className="adm-btn self-start"
          disabled={!!busy}
          onClick={async () => {
            setBusy("ai");
            try {
              const brief = `Platforms: ${chosen.map((a) => PLATFORM_LABEL(a.platform)).join(", ") || "LinkedIn"}.\nTopic / notes: ${title}\n${content}`;
              const r = await api<{ text: string }>("ai", { body: { kind: "post", brief } });
              setContent(r.text);
            } catch (e) {
              ctx.toast((e as Error).message, "error");
            } finally {
              setBusy("");
            }
          }}
        >
          <Icon name="sparkle" size={15} /> {busy === "ai" ? "Writing…" : "Write with AI from these notes"}
        </button>
      </div>
    </Modal>
  );
}
