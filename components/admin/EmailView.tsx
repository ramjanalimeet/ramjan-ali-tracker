"use client";

import { useEffect, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Campaign, Contact, Message, Step } from "./types";
import { api, Empty, Field, fmtDateTime, Icon, Modal, Status, timeAgo } from "./ui";

const SOURCES = [
  { id: "website", label: "Website form submissions" },
  { id: "finder", label: "Emails found from websites" },
  { id: "import", label: "CSV imports" },
  { id: "manual", label: "Added by hand" },
];

const STARTER: Step[] = [
  {
    delayDays: 0,
    subject: "Quick question about {{company|your business}}",
    body: "Hi {{first_name|there}},\n\nI was looking at {{website|your website}} and noticed a few quick wins that could help you show up higher in Google Maps for your area.\n\nWould it be useful if I sent over a short, free audit?\n\nThanks,\n{{sender_name}}",
  },
  {
    delayDays: 3,
    subject: "",
    body: "Hi {{first_name|there}}, just bumping this in case it got buried. Happy to send the audit over if it’s helpful.",
  },
  {
    delayDays: 5,
    subject: "",
    body: "Hi {{first_name|there}}, I’ll leave it here so I don’t clutter your inbox. If getting more calls from Google is ever a priority, just reply and I’ll send the audit.",
  },
];

export function EmailView({ ctx }: { ctx: AppCtx }) {
  const [tab, setTab] = useState<"campaigns" | "sent">("campaigns");
  const [campaigns, setCampaigns] = useState<Campaign[] | null>(null);
  const [editing, setEditing] = useState<Partial<Campaign> | null>(null);
  const [enrolling, setEnrolling] = useState<Campaign | null>(null);
  const [composing, setComposing] = useState(false);
  const load = () => api<Campaign[]>("campaigns").then(setCampaigns).catch((e) => ctx.toast(e.message, "error"));
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const emails = ctx.accounts.filter((a) => a.kind === "email");

  return (
    <div className="adm-stack lg">
      <header className="adm-head">
        <div>
          <h1>Email outreach</h1>
          <p>Sequences send on their own, rotate across your inboxes and stop as soon as someone replies.</p>
        </div>
        <div className="adm-head-actions">
          <button className="adm-btn" onClick={() => setComposing(true)}>
            <Icon name="mail" size={16} /> Write email
          </button>
          <button className="adm-btn primary" onClick={() => setEditing({ steps: STARTER, accountIds: emails.map((e) => e.id) })}>
            <Icon name="plus" size={16} /> New campaign
          </button>
        </div>
      </header>

      {emails.length === 0 && (
        <div className="adm-callout">
          <Icon name="mail" />
          <div>
            <b>Add your sending inboxes</b>
            <p>Connect 4–5 email accounts. Outreach is shared between them so each stays under its daily limit.</p>
          </div>
          <button className="adm-btn primary" onClick={() => ctx.openSettings("email")}>
            Add email accounts
          </button>
        </div>
      )}

      <div className="adm-tabs">
        <button className={tab === "campaigns" ? "on" : ""} onClick={() => setTab("campaigns")}>
          Campaigns
        </button>
        <button className={tab === "sent" ? "on" : ""} onClick={() => setTab("sent")}>
          Sent
        </button>
      </div>

      {tab === "campaigns" &&
        (!campaigns ? (
          <div className="adm-skel tall" />
        ) : campaigns.length === 0 ? (
          <Empty icon="send" title="No campaigns yet">
            Create a campaign with a first email and a couple of follow-ups, then add contacts.
          </Empty>
        ) : (
          <div className="adm-camps">
            {campaigns.map((c) => (
              <CampaignCard key={c.id} c={c} ctx={ctx} onEdit={() => setEditing(c)} onEnroll={() => setEnrolling(c)} onChange={load} />
            ))}
          </div>
        ))}

      {tab === "sent" && <SentList />}

      {editing && (
        <CampaignEditor
          ctx={ctx}
          c={editing}
          onClose={() => setEditing(null)}
          onSaved={(saved, isNew) => {
            setEditing(null);
            load();
            if (isNew) setEnrolling(saved);
          }}
        />
      )}
      {enrolling && <EnrollModal ctx={ctx} c={enrolling} onClose={() => setEnrolling(null)} onDone={load} />}
      {composing && <ComposeModal ctx={ctx} onClose={() => setComposing(false)} />}
    </div>
  );
}

function CampaignCard({ c, ctx, onEdit, onEnroll, onChange }: { c: Campaign; ctx: AppCtx; onEdit: () => void; onEnroll: () => void; onChange: () => void }) {
  const s = c.stats;
  const total = (s.active ?? 0) + (s.done ?? 0) + (s.replied ?? 0) + (s.failed ?? 0) + (s.stopped ?? 0);
  const setStatus = async (status: Campaign["status"]) => {
    try {
      await api("campaigns", { body: { ...c, status } });
      ctx.toast(status === "active" ? "Campaign is live" : "Campaign paused");
      onChange();
    } catch (e) {
      ctx.toast((e as Error).message, "error");
    }
  };
  return (
    <article className="adm-card camp">
      <div className="adm-camp-head">
        <div>
          <h2>{c.name}</h2>
          <span className="adm-hint">
            {c.steps.length} emails · {c.accountIds.length} inbox{c.accountIds.length === 1 ? "" : "es"} · up to {c.dailyLimit}/day · {c.startHour}:00–{c.endHour}:00
            {c.weekdaysOnly ? " weekdays" : ""}
          </span>
        </div>
        <Status value={c.status} />
      </div>
      <div className="adm-camp-stats">
        <div>
          <b>{total}</b>
          <span>Contacts</span>
        </div>
        <div>
          <b>{s.sent ?? 0}</b>
          <span>Emails sent</span>
        </div>
        <div>
          <b>{s.replied ?? 0}</b>
          <span>Replied</span>
        </div>
        <div>
          <b>{total ? Math.round(((s.replied ?? 0) / total) * 100) : 0}%</b>
          <span>Reply rate</span>
        </div>
        <div>
          <b>{s.active ?? 0}</b>
          <span>In progress</span>
        </div>
      </div>
      {c.autoSources.length > 0 && <p className="adm-hint">Auto-adds new contacts from: {c.autoSources.map((x) => SOURCES.find((s) => s.id === x)?.label).join(", ")}</p>}
      <div className="adm-camp-actions">
        {c.status === "active" ? (
          <button className="adm-btn" onClick={() => setStatus("paused")}>
            <Icon name="pause" size={15} /> Pause
          </button>
        ) : (
          <button className="adm-btn primary" onClick={() => setStatus("active")}>
            <Icon name="play" size={15} /> {c.status === "draft" ? "Start" : "Resume"}
          </button>
        )}
        <button className="adm-btn" onClick={onEnroll}>
          <Icon name="users" size={15} /> Add contacts
        </button>
        <button className="adm-btn" onClick={onEdit}>
          Edit
        </button>
        <span className="adm-grow" />
        <button
          className="adm-icon-btn"
          aria-label="Delete campaign"
          onClick={async () => {
            if (!confirm(`Delete “${c.name}”? Contacts stay in your list.`)) return;
            await api(`campaigns/${c.id}`, { method: "DELETE" });
            onChange();
          }}
        >
          <Icon name="trash" size={16} />
        </button>
      </div>
    </article>
  );
}

function CampaignEditor({ ctx, c, onClose, onSaved }: { ctx: AppCtx; c: Partial<Campaign>; onClose: () => void; onSaved: (c: Campaign, isNew: boolean) => void }) {
  const emails = ctx.accounts.filter((a) => a.kind === "email");
  const [d, setD] = useState({
    name: c.name ?? "Home service outreach",
    steps: c.steps ?? STARTER,
    accountIds: c.accountIds ?? [],
    dailyLimit: c.dailyLimit ?? 50,
    startHour: c.startHour ?? 9,
    endHour: c.endHour ?? 18,
    weekdaysOnly: c.weekdaysOnly ?? true,
    autoSources: c.autoSources ?? [],
  });
  const [busy, setBusy] = useState<string>("");
  const setStep = (i: number, patch: Partial<Step>) => setD({ ...d, steps: d.steps.map((s, j) => (j === i ? { ...s, ...patch } : s)) });

  return (
    <Modal
      title={c.id ? "Edit campaign" : "New campaign"}
      onClose={onClose}
      wide
      footer={
        <>
          <span className="adm-hint">
            Placeholders: <code>{"{{first_name}}"}</code> <code>{"{{company}}"}</code> <code>{"{{website}}"}</code> <code>{"{{sender_name}}"}</code> · fallback: <code>{"{{first_name|there}}"}</code>
          </span>
          <span className="adm-grow" />
          <button
            className="adm-btn primary"
            disabled={!!busy}
            onClick={async () => {
              setBusy("save");
              try {
                const saved = await api<Campaign>("campaigns", { body: { ...c, ...d, status: c.status ?? "draft" } });
                ctx.toast("Campaign saved");
                onSaved(saved, !c.id);
              } catch (e) {
                ctx.toast((e as Error).message, "error");
              } finally {
                setBusy("");
              }
            }}
          >
            {busy === "save" ? "Saving…" : "Save campaign"}
          </button>
        </>
      }
    >
      <div className="adm-stack">
        <Field label="Campaign name">
          <input value={d.name} onChange={(e) => setD({ ...d, name: e.target.value })} />
        </Field>
        <Field label="Send from" hint="Each new contact is given to the inbox with the most room left today, and follow-ups come from the same inbox.">
          {emails.length ? (
            <div className="adm-pick">
              {emails.map((a) => (
                <button
                  type="button"
                  key={a.id}
                  className={`adm-pick-item${d.accountIds.includes(a.id) ? " on" : ""}`}
                  onClick={() => setD({ ...d, accountIds: d.accountIds.includes(a.id) ? d.accountIds.filter((x) => x !== a.id) : [...d.accountIds, a.id] })}
                >
                  {a.label}
                  {d.accountIds.includes(a.id) && <Icon name="check" size={14} />}
                </button>
              ))}
            </div>
          ) : (
            <button type="button" className="adm-btn" onClick={() => ctx.openSettings("email")}>
              Add an email account first
            </button>
          )}
        </Field>

        <div className="adm-steps-edit">
          {d.steps.map((s, i) => (
            <div key={i} className="adm-step">
              <div className="adm-step-head">
                <span className="adm-step-n">{i + 1}</span>
                {i === 0 ? (
                  <b>First email</b>
                ) : (
                  <b>
                    Follow-up, if no reply after{" "}
                    <input type="number" min={1} className="adm-inline-num" value={s.delayDays} onChange={(e) => setStep(i, { delayDays: Number(e.target.value) })} /> days
                  </b>
                )}
                <span className="adm-grow" />
                <button
                  type="button"
                  className="adm-btn sm"
                  disabled={!!busy}
                  onClick={async () => {
                    setBusy(`ai${i}`);
                    try {
                      const brief =
                        i === 0
                          ? `Offer: ${s.body || "free Local SEO audit for home service businesses"}`
                          : `This is follow-up #${i} to this first email (reply in the same thread, short, no subject):\n${d.steps[0].body}`;
                      const r = await api<{ text: string }>("ai", { body: { kind: "email", brief } });
                      const m = r.text.match(/^Subject:\s*(.+)\n+([\s\S]*)$/i);
                      setStep(i, m ? { subject: i === 0 ? m[1].trim() : s.subject, body: m[2].trim() } : { body: r.text });
                    } catch (e) {
                      ctx.toast((e as Error).message, "error");
                    } finally {
                      setBusy("");
                    }
                  }}
                >
                  <Icon name="sparkle" size={14} /> {busy === `ai${i}` ? "Writing…" : "AI"}
                </button>
                {i > 0 && (
                  <button type="button" className="adm-icon-btn" aria-label="Remove step" onClick={() => setD({ ...d, steps: d.steps.filter((_, j) => j !== i) })}>
                    <Icon name="trash" size={15} />
                  </button>
                )}
              </div>
              <input
                className="adm-step-subj"
                placeholder={i === 0 ? "Subject" : "Subject (leave empty to reply in the same thread)"}
                value={s.subject}
                onChange={(e) => setStep(i, { subject: e.target.value })}
              />
              <textarea rows={6} value={s.body} onChange={(e) => setStep(i, { body: e.target.value })} placeholder="Email body" />
            </div>
          ))}
          <button type="button" className="adm-btn self-start" onClick={() => setD({ ...d, steps: [...d.steps, { delayDays: 4, subject: "", body: "" }] })}>
            <Icon name="plus" size={15} /> Add follow-up
          </button>
        </div>

        <div className="adm-grid3">
          <Field label="Max emails per day">
            <input type="number" min={1} value={d.dailyLimit} onChange={(e) => setD({ ...d, dailyLimit: Number(e.target.value) })} />
          </Field>
          <Field label="Send from (hour)">
            <input type="number" min={0} max={23} value={d.startHour} onChange={(e) => setD({ ...d, startHour: Number(e.target.value) })} />
          </Field>
          <Field label="Until (hour)">
            <input type="number" min={1} max={24} value={d.endHour} onChange={(e) => setD({ ...d, endHour: Number(e.target.value) })} />
          </Field>
        </div>
        <label className="adm-check">
          <input type="checkbox" checked={d.weekdaysOnly} onChange={(e) => setD({ ...d, weekdaysOnly: e.target.checked })} /> Only send Monday to Friday
        </label>
        <Field label="Automatically add new contacts from" hint="While the campaign is running, matching new contacts start the sequence on their own.">
          <div className="adm-checks">
            {SOURCES.map((s) => (
              <label key={s.id} className="adm-check">
                <input
                  type="checkbox"
                  checked={d.autoSources.includes(s.id)}
                  onChange={(e) => setD({ ...d, autoSources: e.target.checked ? [...d.autoSources, s.id] : d.autoSources.filter((x) => x !== s.id) })}
                />
                {s.label}
              </label>
            ))}
          </div>
        </Field>
      </div>
    </Modal>
  );
}

function EnrollModal({ ctx, c, onClose, onDone }: { ctx: AppCtx; c: Campaign; onClose: () => void; onDone: () => void }) {
  const [contacts, setContacts] = useState<Contact[] | null>(null);
  const [picked, setPicked] = useState<string[]>([]);
  const [q, setQ] = useState("");
  useEffect(() => {
    api<Contact[]>("contacts").then((list) => {
      setContacts(list);
      setPicked(list.filter((x) => x.status === "new").map((x) => x.id));
    });
  }, []);
  const shown = (contacts ?? []).filter((x) => `${x.email} ${x.name} ${x.company}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <Modal
      title={`Add contacts to “${c.name}”`}
      onClose={onClose}
      wide
      footer={
        <>
          <span className="adm-hint">{picked.length} selected. People who unsubscribed are skipped.</span>
          <span className="adm-grow" />
          <button
            className="adm-btn primary"
            disabled={!picked.length}
            onClick={async () => {
              const r = await api<{ added: number }>(`campaigns/${c.id}/enroll`, { body: { contactIds: picked } });
              ctx.toast(`${r.added} contact${r.added === 1 ? "" : "s"} added${c.status !== "active" ? ". Start the campaign to begin sending." : ""}`);
              onDone();
              onClose();
            }}
          >
            Add to campaign
          </button>
        </>
      }
    >
      {!contacts ? (
        <div className="adm-skel" />
      ) : contacts.length === 0 ? (
        <Empty icon="users" title="No contacts yet">
          <button className="adm-btn" onClick={() => ctx.go("contacts")}>
            Import or find contacts
          </button>
        </Empty>
      ) : (
        <div className="adm-stack">
          <div className="adm-searchbar">
            <Icon name="search" size={16} />
            <input placeholder="Search contacts" value={q} onChange={(e) => setQ(e.target.value)} />
            <button className="adm-link" onClick={() => setPicked(shown.map((x) => x.id))}>
              Select all
            </button>
            <button className="adm-link" onClick={() => setPicked([])}>
              None
            </button>
          </div>
          <div className="adm-picklist">
            {shown.map((x) => (
              <label key={x.id} className="adm-check row">
                <input type="checkbox" checked={picked.includes(x.id)} onChange={(e) => setPicked(e.target.checked ? [...picked, x.id] : picked.filter((p) => p !== x.id))} />
                <span>
                  <b>{x.name || x.email}</b> {x.name && <span className="adm-hint">{x.email}</span>}
                </span>
                <span className="adm-grow" />
                <Status value={x.status} />
              </label>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}

function SentList() {
  const [items, setItems] = useState<Message[] | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => {
    api<Message[]>("sent").then(setItems);
  }, []);
  if (!items) return <div className="adm-skel tall" />;
  if (!items.length) return <Empty icon="send" title="Nothing sent yet" />;
  return (
    <div className="adm-card flush">
      <ul className="adm-mlist">
        {items.map((m) => (
          <li key={m.id} onClick={() => setOpen(open === m.id ? null : m.id)}>
            <div className="adm-mlist-main">
              <div className="adm-mlist-top">
                <b>
                  To {m.contact_name || m.to_addr} <span className="adm-hint">from {m.from_addr}</span>
                </b>
                <time title={fmtDateTime(m.created_at)}>{timeAgo(m.created_at)}</time>
              </div>
              <span className="adm-mlist-subj">{m.subject}</span>
              {open === m.id ? <p className="adm-pre">{m.body}</p> : <span className="adm-mlist-snip">{m.body.replace(/\s+/g, " ").slice(0, 120)}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComposeModal({ ctx, onClose }: { ctx: AppCtx; onClose: () => void }) {
  const emails = ctx.accounts.filter((a) => a.kind === "email");
  const [f, setF] = useState({ to: "", subject: "", body: "", accountId: emails[0]?.id ?? "" });
  const [busy, setBusy] = useState(false);
  return (
    <Modal
      title="New email"
      onClose={onClose}
      footer={
        <>
          <span className="adm-grow" />
          <button
            className="adm-btn primary"
            disabled={busy || !f.to || !f.body}
            onClick={async () => {
              setBusy(true);
              try {
                await api("compose", { body: f });
                ctx.toast("Email sent");
                onClose();
              } catch (e) {
                ctx.toast((e as Error).message, "error");
              } finally {
                setBusy(false);
              }
            }}
          >
            <Icon name="send" size={15} /> {busy ? "Sending…" : "Send"}
          </button>
        </>
      }
    >
      <div className="adm-stack">
        <Field label="From">
          <select value={f.accountId} onChange={(e) => setF({ ...f, accountId: e.target.value })}>
            {emails.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="To">
          <input type="email" value={f.to} onChange={(e) => setF({ ...f, to: e.target.value })} />
        </Field>
        <Field label="Subject">
          <input value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value })} />
        </Field>
        <Field label="Message">
          <textarea rows={8} value={f.body} onChange={(e) => setF({ ...f, body: e.target.value })} />
        </Field>
      </div>
    </Modal>
  );
}
