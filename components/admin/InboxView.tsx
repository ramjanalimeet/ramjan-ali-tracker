"use client";

import { useEffect, useMemo, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Message } from "./types";
import { api, Brand, Empty, fmtDateTime, Icon, timeAgo } from "./ui";

const FILTERS = [
  { id: "", label: "All" },
  { id: "email", label: "Replies" },
  { id: "form", label: "Forms" },
  { id: "booking", label: "Bookings" },
  { id: "social", label: "Social" },
];

export function InboxView({ ctx }: { ctx: AppCtx }) {
  const [items, setItems] = useState<Message[] | null>(null);
  const [filter, setFilter] = useState("");
  const [sel, setSel] = useState<string | null>(null);

  const load = () =>
    api<Message[]>("inbox")
      .then(setItems)
      .catch((e) => ctx.toast(e.message, "error"));
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shown = useMemo(
    () =>
      (items ?? []).filter((m) =>
        !filter ? true : filter === "social" ? ["twitter", "facebook", "linkedin"].includes(m.channel) : m.channel === filter,
      ),
    [items, filter],
  );
  const current = items?.find((m) => m.id === sel) ?? null;

  const open = async (m: Message) => {
    setSel(m.id);
    if (!m.read) {
      setItems((list) => list?.map((x) => (x.id === m.id ? { ...x, read: 1 } : x)) ?? null);
      await api(`inbox/${m.id}/read`, { body: {} }).catch(() => {});
      ctx.refreshBadge();
    }
  };

  return (
    <div className={`adm-inbox${current ? " has-sel" : ""}`}>
      <div className="adm-inbox-list">
        <div className="adm-inbox-top">
          <h1>Inbox</h1>
          <button
            className="adm-link"
            onClick={async () => {
              await api("inbox/read-all", { body: {} });
              setItems((l) => l?.map((x) => ({ ...x, read: 1 })) ?? null);
              ctx.refreshBadge();
            }}
          >
            Mark all read
          </button>
        </div>
        <div className="adm-chips">
          {FILTERS.map((f) => (
            <button key={f.id} className={`adm-chip${filter === f.id ? " on" : ""}`} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
        {!items ? (
          <div className="adm-skel" />
        ) : shown.length ? (
          <ul className="adm-mlist">
            {shown.map((m) => (
              <li key={m.id} className={`${m.read ? "" : "unread"}${sel === m.id ? " sel" : ""}`} onClick={() => open(m)}>
                <Brand platform={m.channel} size={28} />
                <div className="adm-mlist-main">
                  <div className="adm-mlist-top">
                    <b>{m.from_name || m.contact_name || m.from_addr}</b>
                    <time>{timeAgo(m.created_at)}</time>
                  </div>
                  {m.subject && <span className="adm-mlist-subj">{m.subject}</span>}
                  <span className="adm-mlist-snip">{m.body.replace(/\s+/g, " ").slice(0, 110)}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Empty icon="inbox" title="Nothing here yet">
            Replies to your outreach, website form submissions, Cal.com bookings and social mentions appear here.
          </Empty>
        )}
      </div>
      <div className="adm-inbox-detail">
        {current ? (
          <Detail
            key={current.id}
            m={current}
            ctx={ctx}
            onBack={() => setSel(null)}
            onDelete={async () => {
              await api(`inbox/${current.id}`, { method: "DELETE" });
              setSel(null);
              load();
            }}
          />
        ) : (
          <Empty icon="mail" title="Select a message" />
        )}
      </div>
    </div>
  );
}

function Detail({ m, ctx, onBack, onDelete }: { m: Message; ctx: AppCtx; onBack: () => void; onDelete: () => void }) {
  const [thread, setThread] = useState<Message[]>([m]);
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState<"" | "send" | "ai">("");
  const canEmail = /@/.test(m.from_addr);
  const fields: Record<string, string> = useMemo(() => {
    try {
      return JSON.parse(m.meta || "{}").fields ?? {};
    } catch {
      return {};
    }
  }, [m.meta]);

  useEffect(() => {
    if (m.contact_id) api<Message[]>(`inbox/${m.id}/thread`).then(setThread).catch(() => {});
  }, [m.id, m.contact_id]);

  return (
    <div className="adm-detail">
      <div className="adm-detail-head">
        <button className="adm-icon-btn adm-detail-back" onClick={onBack} aria-label="Back">
          <Icon name="left" />
        </button>
        <div className="adm-detail-who">
          <h2>{m.subject || (m.channel === "form" ? "Form submission" : "Message")}</h2>
          <span>
            {m.from_name ? `${m.from_name} · ` : ""}
            {m.from_addr}
            {m.contact_company ? ` · ${m.contact_company}` : ""}
          </span>
        </div>
        {m.url && (
          <a className="adm-btn sm" href={m.url} target="_blank" rel="noopener">
            <Icon name="link" size={14} /> Open
          </a>
        )}
        <button className="adm-icon-btn" onClick={onDelete} aria-label="Delete">
          <Icon name="trash" size={17} />
        </button>
      </div>

      <div className="adm-thread">
        {thread.map((t) => (
          <article key={t.id} className={`adm-bubble ${t.direction}`}>
            <header>
              <b>{t.direction === "out" ? "You" : t.from_name || t.from_addr}</b>
              <time>{fmtDateTime(t.created_at)}</time>
            </header>
            {t.direction === "out" && t.subject && <div className="adm-bubble-subj">{t.subject}</div>}
            {t.channel === "form" && t.id === m.id && Object.keys(fields).length ? (
              <dl className="adm-fields">
                {Object.entries(fields).map(([k, v]) => (
                  <div key={k}>
                    <dt>{k.replace(/[_-]/g, " ")}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p>{t.body}</p>
            )}
          </article>
        ))}
      </div>

      {canEmail ? (
        <form
          className="adm-reply"
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy("send");
            try {
              await api(`inbox/${m.id}/reply`, { body: { body: reply } });
              ctx.toast("Reply sent");
              setReply("");
              if (m.contact_id) setThread(await api<Message[]>(`inbox/${m.id}/thread`));
            } catch (err) {
              ctx.toast((err as Error).message, "error");
            } finally {
              setBusy("");
            }
          }}
        >
          <textarea rows={4} placeholder={`Reply to ${m.from_name || m.from_addr}…`} value={reply} onChange={(e) => setReply(e.target.value)} />
          <div className="adm-reply-bar">
            <button
              type="button"
              className="adm-btn"
              disabled={!!busy}
              onClick={async () => {
                setBusy("ai");
                try {
                  const r = await api<{ text: string }>("ai", { body: { kind: "reply", brief: `${m.subject}\n\n${m.body}\n\nMy notes: ${reply}` } });
                  setReply(r.text);
                } catch (err) {
                  ctx.toast((err as Error).message, "error");
                } finally {
                  setBusy("");
                }
              }}
            >
              <Icon name="sparkle" size={15} /> {busy === "ai" ? "Writing…" : "Draft with AI"}
            </button>
            <button className="adm-btn primary" disabled={!!busy || !reply.trim()}>
              <Icon name="send" size={15} /> {busy === "send" ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      ) : (
        m.url && (
          <p className="adm-hint pad">
            Reply on the platform:{" "}
            <a href={m.url} target="_blank" rel="noopener">
              open the conversation
            </a>
            .
          </p>
        )
      )}
    </div>
  );
}
