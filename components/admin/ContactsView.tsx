"use client";

import { useEffect, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Contact } from "./types";
import { api, Empty, Field, Icon, initials, Modal, Status, timeAgo } from "./ui";

const STATUSES = ["new", "contacted", "replied", "booked", "client", "unsubscribed", "bounced"];
const SOURCE_LABEL: Record<string, string> = { website: "Website form", booking: "Booking", finder: "Found on website", import: "Import", manual: "Manual" };

export function ContactsView({ ctx }: { ctx: AppCtx }) {
  const [list, setList] = useState<Contact[] | null>(null);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [modal, setModal] = useState<"import" | "find" | "add" | null>(null);
  const [edit, setEdit] = useState<Contact | null>(null);

  const load = () =>
    api<Contact[]>(`contacts?q=${encodeURIComponent(q)}${status ? `&status=${status}` : ""}`)
      .then(setList)
      .catch((e) => ctx.toast(e.message, "error"));
  useEffect(() => {
    const t = setTimeout(load, 200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, status]);

  return (
    <div className="adm-stack lg">
      <header className="adm-head">
        <div>
          <h1>Contacts</h1>
          <p>Leads from your website, bookings, imports and emails found on business websites.</p>
        </div>
        <div className="adm-head-actions">
          <button className="adm-btn" onClick={() => setModal("import")}>
            Import CSV
          </button>
          <button className="adm-btn" onClick={() => setModal("add")}>
            <Icon name="plus" size={16} /> Add
          </button>
          <button className="adm-btn primary" onClick={() => setModal("find")}>
            <Icon name="search" size={15} /> Find emails
          </button>
        </div>
      </header>

      <div className="adm-filters">
        <div className="adm-searchbar">
          <Icon name="search" size={16} />
          <input placeholder="Search name, email, company or website" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {!list ? (
        <div className="adm-skel tall" />
      ) : list.length === 0 ? (
        <Empty icon="users" title={q || status ? "No matches" : "No contacts yet"}>
          Import a CSV, paste a list of business websites to find their emails, or connect your website form.
        </Empty>
      ) : (
        <div className="adm-card flush">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Name</th>
                <th className="hide-sm">Company</th>
                <th className="hide-sm">Source</th>
                <th>Status</th>
                <th className="hide-sm">Added</th>
              </tr>
            </thead>
            <tbody>
              {list.map((c) => (
                <tr key={c.id} onClick={() => setEdit(c)}>
                  <td>
                    <div className="adm-person">
                      <span className="adm-avatar">{initials(c.name || c.email)}</span>
                      <div>
                        <b>{c.name || c.email.split("@")[0]}</b>
                        <span>{c.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="hide-sm">
                    {c.company}
                    {c.website && <span className="adm-sub">{c.website.replace(/^https?:\/\/(www\.)?/, "")}</span>}
                  </td>
                  <td className="hide-sm">
                    <span className="adm-tag">{SOURCE_LABEL[c.source] ?? c.source}</span>
                  </td>
                  <td>
                    <Status value={c.status} />
                  </td>
                  <td className="hide-sm adm-hint">{timeAgo(c.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modal === "import" && <ImportModal ctx={ctx} onClose={() => setModal(null)} onDone={load} />}
      {modal === "find" && <FindModal ctx={ctx} onClose={() => setModal(null)} onDone={load} />}
      {modal === "add" && <EditModal ctx={ctx} onClose={() => setModal(null)} onDone={load} />}
      {edit && <EditModal ctx={ctx} contact={edit} onClose={() => setEdit(null)} onDone={load} />}
    </div>
  );
}

function ImportModal({ ctx, onClose, onDone }: { ctx: AppCtx; onClose: () => void; onDone: () => void }) {
  const [csv, setCsv] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <Modal
      title="Import contacts"
      onClose={onClose}
      footer={
        <>
          <span className="adm-grow" />
          <button
            className="adm-btn primary"
            disabled={busy || !csv.trim()}
            onClick={async () => {
              setBusy(true);
              try {
                const r = await api<{ added: number; updated: number; skipped: number }>("contacts/import", { body: { csv, source: "import" } });
                ctx.toast(`${r.added} added, ${r.updated} updated${r.skipped ? `, ${r.skipped} skipped (no email)` : ""}`);
                onDone();
                onClose();
              } catch (e) {
                ctx.toast((e as Error).message, "error");
              } finally {
                setBusy(false);
              }
            }}
          >
            {busy ? "Importing…" : "Import"}
          </button>
        </>
      }
    >
      <div className="adm-stack">
        <p className="adm-hint">
          Columns: <code>email</code>, <code>name</code> (or <code>first_name</code>), <code>company</code>, <code>website</code>, <code>phone</code>. A header row is recommended. Exports from Google Sheets, Apollo and similar tools work.
        </p>
        <input
          type="file"
          accept=".csv,.tsv,.txt"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) setCsv(await file.text());
          }}
        />
        <textarea rows={10} placeholder={"email,name,company,website\njohn@acmeroofing.com,John Smith,Acme Roofing,acmeroofing.com"} value={csv} onChange={(e) => setCsv(e.target.value)} />
      </div>
    </Modal>
  );
}

interface Found {
  website: string;
  company: string;
  emails: string[];
  error?: string;
}

function FindModal({ ctx, onClose, onDone }: { ctx: AppCtx; onClose: () => void; onDone: () => void }) {
  const [urls, setUrls] = useState("");
  const [found, setFound] = useState<Found[] | null>(null);
  const [picked, setPicked] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const all = (found ?? []).flatMap((f) => f.emails.map((e) => ({ ...f, email: e })));
  return (
    <Modal
      title="Find emails from websites"
      onClose={onClose}
      wide
      footer={
        <>
          {found && (
            <button className="adm-btn" onClick={() => setFound(null)}>
              Search more
            </button>
          )}
          <span className="adm-grow" />
          {found ? (
            <button
              className="adm-btn primary"
              disabled={!picked.length}
              onClick={async () => {
                const rows = all.filter((r) => picked.includes(r.email)).map((r) => ({ email: r.email, company: r.company, website: r.website }));
                const res = await api<{ added: number }>("contacts/import", { body: { rows, source: "finder" } });
                ctx.toast(`${res.added} contact${res.added === 1 ? "" : "s"} added`);
                onDone();
                onClose();
              }}
            >
              Add {picked.length} to contacts
            </button>
          ) : (
            <button
              className="adm-btn primary"
              disabled={busy || !urls.trim()}
              onClick={async () => {
                setBusy(true);
                try {
                  const r = await api<Found[]>("contacts/find", { body: { urls } });
                  setFound(r);
                  setPicked(r.flatMap((f) => f.emails.slice(0, 1)));
                } catch (e) {
                  ctx.toast((e as Error).message, "error");
                } finally {
                  setBusy(false);
                }
              }}
            >
              <Icon name="search" size={15} /> {busy ? "Searching websites…" : "Find emails"}
            </button>
          )}
        </>
      }
    >
      {!found ? (
        <div className="adm-stack">
          <p className="adm-hint">Paste up to 10 business websites, one per line. The home, contact and about pages are checked for public email addresses.</p>
          <textarea rows={8} placeholder={"acmeroofing.com\nhttps://bestplumbingtampa.com"} value={urls} onChange={(e) => setUrls(e.target.value)} />
        </div>
      ) : (
        <div className="adm-found">
          {found.map((f) => (
            <div key={f.website} className="adm-found-site">
              <b>{f.company || f.website.replace(/^https?:\/\//, "")}</b>
              <span className="adm-hint">{f.website}</span>
              {f.emails.length ? (
                f.emails.map((e) => (
                  <label key={e} className="adm-check">
                    <input type="checkbox" checked={picked.includes(e)} onChange={(ev) => setPicked(ev.target.checked ? [...picked, e] : picked.filter((x) => x !== e))} />
                    {e}
                  </label>
                ))
              ) : (
                <span className="adm-hint warn">{f.error}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}

function EditModal({ ctx, contact, onClose, onDone }: { ctx: AppCtx; contact?: Contact; onClose: () => void; onDone: () => void }) {
  const [f, setF] = useState({
    email: contact?.email ?? "",
    name: contact?.name ?? "",
    company: contact?.company ?? "",
    website: contact?.website ?? "",
    phone: contact?.phone ?? "",
    status: contact?.status ?? "new",
    notes: contact?.notes ?? "",
  });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });
  return (
    <Modal
      title={contact ? contact.name || contact.email : "Add contact"}
      onClose={onClose}
      footer={
        <>
          {contact && (
            <button
              className="adm-btn danger"
              onClick={async () => {
                if (!confirm("Delete this contact?")) return;
                await api(`contacts/${contact.id}`, { method: "DELETE" });
                onDone();
                onClose();
              }}
            >
              Delete
            </button>
          )}
          <span className="adm-grow" />
          <button
            className="adm-btn primary"
            onClick={async () => {
              try {
                if (contact) await api(`contacts/${contact.id}`, { body: f });
                else await api("contacts/import", { body: { rows: [f], source: "manual" } });
                ctx.toast("Saved");
                onDone();
                onClose();
              } catch (e) {
                ctx.toast((e as Error).message, "error");
              }
            }}
          >
            Save
          </button>
        </>
      }
    >
      <div className="adm-stack">
        <Field label="Email">
          <input type="email" value={f.email} onChange={set("email")} disabled={!!contact} />
        </Field>
        <div className="adm-grid2">
          <Field label="Name">
            <input value={f.name} onChange={set("name")} />
          </Field>
          <Field label="Company">
            <input value={f.company} onChange={set("company")} />
          </Field>
          <Field label="Website">
            <input value={f.website} onChange={set("website")} />
          </Field>
          <Field label="Phone">
            <input value={f.phone} onChange={set("phone")} />
          </Field>
        </div>
        {contact && (
          <Field label="Status" hint="Marking someone replied, booked or unsubscribed stops their follow-ups.">
            <select value={f.status} onChange={set("status")}>
              {STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
        )}
        <Field label="Notes">
          <textarea rows={3} value={f.notes} onChange={set("notes")} />
        </Field>
      </div>
    </Modal>
  );
}
