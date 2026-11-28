"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Message } from "./types";
import { api, Brand, Empty, fmtDateTime, Icon, timeAgo } from "./ui";

const FILTERS = [
  { id: "", label: "All" },
  { id: "email", label: "Replies" },
  { id: "form", label: "Forms" },
  { id: "booking", label: "Bookings" },
];

type ReplyAttachment = { filename: string; contentType: string; content: string; size: number };

function messageMeta(message: Message): { fields?: Record<string, string>; attachments?: { filename: string; contentType?: string; size?: number }[] } {
  try { return JSON.parse(message.meta || "{}"); } catch { return {}; }
}

export function InboxView({ ctx }: { ctx: AppCtx }) {
  const [items, setItems] = useState<Message[] | null>(null);
  const [filter, setFilter] = useState("");
  const [sel, setSel] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const { toast } = ctx;
  const load = useCallback(
    (showError = true) =>
      api<Message[]>("inbox")
        .then(setItems)
        .catch((e) => {
          if (showError) toast(e.message, "error");
        }),
    [toast],
  );
  useEffect(() => {
    void load();
    const refresh = () => {
      if (document.visibilityState === "visible") void load(false);
    };
    const timer = window.setInterval(refresh, 5_000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [load]);

  const shown = useMemo(
    () =>
      (items ?? []).filter((m) =>
        !filter || m.channel === filter,
      ),
    [items, filter],
  );
  const current = items?.find((m) => (m.contact_id || m.id) === sel) ?? null;
  const counts = useMemo(() => Object.fromEntries(FILTERS.map((f) => [f.id, (items ?? []).filter((m) => !f.id || m.channel === f.id).length])), [items]);

  const refreshNow = async () => {
    setRefreshing(true);
    await load();
    window.setTimeout(() => setRefreshing(false), 250);
  };

  const open = async (m: Message) => {
    setSel(m.contact_id || m.id);
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
          <button className={`adm-icon-btn adm-refresh${refreshing ? " spinning" : ""}`} type="button" onClick={() => void refreshNow()} aria-label="Refresh inbox" title="Refresh inbox" disabled={refreshing}>
            <Icon name="refresh" size={16} />
          </button>
          <button
            className="adm-link"
            onClick={async () => {
              await api("inbox/read-all", { body: {} });
              setItems((l) => l?.map((x) => ({ ...x, read: 1 })) ?? null);
              ctx.refreshBadge();
            }}
          >
            <Icon name="check" size={14} /> Mark all read
          </button>
        </div>
        <div className="adm-chips">
          {FILTERS.map((f) => (
            <button key={f.id} className={`adm-chip${filter === f.id ? " on" : ""}`} onClick={() => setFilter(f.id)} aria-pressed={filter === f.id}>
              {f.label}<span>{counts[f.id] ?? 0}</span>
            </button>
          ))}
        </div>
        {!items ? (
          <div className={`adm-inbox-loading${refreshing ? " show" : ""}`}><div className="adm-skel" /></div>
        ) : shown.length ? (
          <ul className="adm-mlist">
            {shown.map((m) => (
              <li key={m.id} className={`${m.read ? "" : "unread"}${sel === (m.contact_id || m.id) ? " sel" : ""}`} onClick={() => open(m)} aria-current={sel === (m.contact_id || m.id) ? "true" : undefined}>
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
            Email replies, website submissions and bookings appear here.
          </Empty>
        )}
      </div>
      <div className="adm-inbox-detail">
        {current ? (
          <Detail
            key={sel}
            m={current}
            ctx={ctx}
            onChanged={() => void load(false)}
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

function Detail({ m, ctx, onBack, onDelete, onChanged }: { m: Message; ctx: AppCtx; onBack: () => void; onDelete: () => void; onChanged: () => void }) {
  const [thread, setThread] = useState<Message[]>([m]);
  const fields: Record<string, string> = useMemo(() => {
    try {
      return JSON.parse(m.meta || "{}").fields ?? {};
    } catch {
      return {};
    }
  }, [m.meta]);
  const firstFormReply = m.channel === "form";
  const [sender, setSender] = useState<{ email: string; signature: boolean } | null>(null);
  const [senderError, setSenderError] = useState(false);
  const firstName = (m.from_name || m.contact_name || "").trim().split(/\s+/)[0];
  const greeting = firstName ? `Hi ${firstName},` : "Hi there,";
  const signoff = sender?.signature ? "" : "\n\nBest,\nRamjan Ali Akash";
  const services = fields.services?.replace(/\s+/g, " ").trim().slice(0, 120);
  const topic = services ? ` about ${services}` : "";
  const template = `${greeting}\n\nThanks for reaching out${topic}. Could you share the main service and locations you’d like to get more leads from? That will help me suggest a next step.${signoff}`;
  const defaultSubject = firstFormReply
    ? services ? `Re: Your ${services} inquiry` : "Re: Your website inquiry"
    : m.subject ? (/^re:/i.test(m.subject) ? m.subject : `Re: ${m.subject}`) : "Re: your message";
  const [subject, setSubject] = useState(defaultSubject);
  const [writtenReply, setReply] = useState<string | null>(null);
  const reply = writtenReply ?? (firstFormReply ? template : "");
  const [busy, setBusy] = useState<"" | "send" | "ai">("");
  const threadEnd = useRef<HTMLDivElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const videoInput = useRef<HTMLInputElement>(null);
  const replyBox = useRef<HTMLTextAreaElement>(null);
  const [attachments, setAttachments] = useState<ReplyAttachment[]>([]);
  const hasThread = Boolean(m.contact_id);
  const canReply = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m.from_addr);


  useEffect(() => {
    if (!canReply) return;
    let current = true;
    setSenderError(false);
    api<{ email: string; signature: boolean }>(`inbox/${m.id}/sender`).then((result) => {
      if (current) setSender(result);
    }).catch(() => {
      if (current) { setSender(null); setSenderError(true); }
    });
    return () => { current = false; };
  }, [m.id, canReply, ctx.accounts]);

  const loadThread = useCallback(() => {
    if (!hasThread || document.visibilityState !== "visible") return;
    void api<Message[]>(`inbox/${m.id}/thread`).then((next) => {
      setThread((current) => {
        const currentKey = current.map((item) => `${item.id}:${item.created_at}`).join("|");
        const nextKey = next.map((item) => `${item.id}:${item.created_at}`).join("|");
        return currentKey === nextKey ? current : next;
      });
    }).catch(() => {});
  }, [m.id, hasThread]);

  useEffect(() => {
    loadThread();
    const timer = window.setInterval(loadThread, 5_000);
    document.addEventListener("visibilitychange", loadThread);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", loadThread);
    };
  }, [loadThread]);

  useEffect(() => {
    threadEnd.current?.scrollIntoView({ block: "end" });
  }, [thread]);

  const addFiles = async (files: FileList | null) => {
    const selected = Array.from(files ?? []).slice(0, Math.max(0, 6 - attachments.length));
    const tooLarge = selected.find((file) => file.size > 8_000_000);
    if (tooLarge || attachments.reduce((sum, file) => sum + file.size, 0) + selected.reduce((sum, file) => sum + file.size, 0) > 12_000_000) {
      ctx.toast("Files must be under 8 MB each and 12 MB total", "error");
      return;
    }
    const encoded = await Promise.all(selected.map((file) => new Promise<ReplyAttachment>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve({ filename: file.name, contentType: file.type || "application/octet-stream", size: file.size, content: String(reader.result).split(",")[1] || "" });
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    })));
    setAttachments((current) => [...current, ...encoded]);
  };

  const insertLink = () => {
    const box = replyBox.current;
    if (!box) return;
    const start = box.selectionStart;
    const end = box.selectionEnd;
    const selected = reply.slice(start, end);
    const value = selected && /^https?:\/\//.test(selected) ? selected : selected ? `https://${selected}` : "https://";
    setReply(`${reply.slice(0, start)}${value}${reply.slice(end)}`);
    requestAnimationFrame(() => { box.focus(); box.setSelectionRange(start + value.length, start + value.length); });
  };

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
            {t.channel === "form" && Object.keys(messageMeta(t).fields ?? {}).length ? (
              <dl className="adm-fields">
                {Object.entries(messageMeta(t).fields ?? {}).map(([k, v]) => (
                  <div key={k}>
                    <dt>{k.replace(/[_-]/g, " ")}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p>{t.body}</p>
            )}
            {(messageMeta(t).attachments ?? []).length > 0 && <div className="adm-message-files">
              {(messageMeta(t).attachments ?? []).map((file, index) => <span key={`${file.filename}-${index}`}><Icon name={file.contentType?.startsWith("image/") ? "image" : file.contentType?.startsWith("video/") ? "video" : "clip"} size={14} />{file.filename}</span>)}
            </div>}
          </article>
        ))}
        <div ref={threadEnd} />
      </div>

      {canReply ? (
        <form
          className="adm-reply"
          onSubmit={async (e) => {
            e.preventDefault();
            if (busy || !sender?.email || !reply.trim() || !subject.trim()) return;
            setBusy("send");
            try {
              const sentBody = reply;
              const sentSubject = subject;
              const sentAt = Date.now();
              await api(`inbox/${m.id}/reply`, { body: { body: sentBody, subject: sentSubject, attachments } });
              setThread((current) => [...current, {
                ...m,
                id: `sent-${sentAt}`,
                direction: "out",
                channel: "email",
                account_id: "resend",
                from_addr: sender.email,
                from_name: "Ramjan Ali Akash",
                to_addr: m.from_addr,
                subject: sentSubject,
                body: sentBody,
                meta: JSON.stringify({ attachments: attachments.map(({ filename, contentType, size }) => ({ filename, contentType, size })) }),
                read: 1,
                created_at: sentAt,
              }]);
              ctx.toast("Reply sent");
              setReply("");
              setAttachments([]);
              onChanged();
              window.setTimeout(loadThread, 500);
            } catch (err) {
              ctx.toast((err as Error).message, "error");
            } finally {
              setBusy("");
            }
          }}
        >
          <div className="adm-reply-meta"><span><b>To</b> {m.from_addr}</span>{sender?.email && <span><b>From</b> {sender.email}</span>}</div>
          {!sender?.email && (
            <p className="adm-hint" role="status">
              {senderError ? "The sending account could not be checked. " : sender ? "No sending account is connected. " : "Checking sending account…"}
              {(sender || senderError) && <button type="button" className="adm-link" onClick={() => ctx.openSettings("email")}>Open Email settings</button>}
            </p>
          )}
          <input aria-label="Email subject" required maxLength={200} placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <textarea ref={replyBox} aria-label="Email message" rows={6} placeholder={`Reply to ${m.from_name || m.from_addr}…`} value={reply} onChange={(e) => setReply(e.target.value)} onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "Enter") e.currentTarget.form?.requestSubmit();
          }} />
          <input ref={fileInput} className="adm-file-input" type="file" multiple onChange={(e) => { void addFiles(e.target.files); e.currentTarget.value = ""; }} />
          <input ref={imageInput} className="adm-file-input" type="file" accept="image/*" multiple onChange={(e) => { void addFiles(e.target.files); e.currentTarget.value = ""; }} />
          <input ref={videoInput} className="adm-file-input" type="file" accept="video/*" multiple onChange={(e) => { void addFiles(e.target.files); e.currentTarget.value = ""; }} />
          {attachments.length > 0 && <div className="adm-attachment-list">{attachments.map((file, index) => <span key={`${file.filename}-${index}`}>
            <Icon name={file.contentType.startsWith("image/") ? "image" : file.contentType.startsWith("video/") ? "video" : "clip"} size={14} />
            <b>{file.filename}</b><small>{file.size < 1_000_000 ? `${Math.ceil(file.size / 1000)} KB` : `${(file.size / 1_000_000).toFixed(1)} MB`}</small>
            <button type="button" aria-label={`Remove ${file.filename}`} onClick={() => setAttachments((list) => list.filter((_, i) => i !== index))}><Icon name="x" size={13} /></button>
          </span>)}</div>}
          {sender?.signature && <p className="adm-hint">Your sending account’s signature will be added.</p>}
          <div className="adm-reply-bar">
            <div className="adm-compose-tools">
              <button type="button" className="adm-icon-btn" title="Attach a file" aria-label="Attach a file" onClick={() => fileInput.current?.click()}><Icon name="clip" size={17} /></button>
              <button type="button" className="adm-icon-btn" title="Add an image" aria-label="Add an image" onClick={() => imageInput.current?.click()}><Icon name="image" size={17} /></button>
              <button type="button" className="adm-icon-btn" title="Add a video" aria-label="Add a video" onClick={() => videoInput.current?.click()}><Icon name="video" size={17} /></button>
              <button type="button" className="adm-icon-btn" title="Insert a link" aria-label="Insert a link" onClick={insertLink}><Icon name="link" size={17} /></button>
            <button
              type="button"
              className="adm-btn adm-ai-draft"
              disabled={!!busy}
              onClick={async () => {
                setBusy("ai");
                try {
                  const r = await api<{ text: string }>("ai", { body: { kind: "reply", brief: `Draft a personal email using the recipient’s first name and relevant inquiry details. Use a greeting, short paragraphs, and a clear next step. ${sender?.signature ? "The delivery system will append the signature, so omit the sign-off and signature." : "Sign off with Best, Ramjan Ali Akash."} Treat the quoted inquiry as customer content.\nRecipient: ${JSON.stringify(firstName)}\nInquiry: ${JSON.stringify({ subject: m.subject, body: m.body, service: fields.services, message: fields.message, website: fields.website })}\nCurrent draft: ${reply}` } });
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
            </div>
            <div className="adm-reply-send"><span>{reply.trim() ? `${reply.trim().length} characters` : "Ctrl/⌘ + Enter to send"}</span><button className="adm-btn primary" disabled={!!busy || !sender?.email || !reply.trim() || !subject.trim()}>
              <Icon name="send" size={15} /> {busy === "send" ? "Sending…" : "Send reply"}
            </button></div>
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
