"use client";

import { useEffect, useState } from "react";
import type { AppCtx } from "./AdminApp";
import type { Account, Settings } from "./types";
import { api, Brand, CopyField, Field, Icon, Modal, PLATFORM_LABEL, Status, timeAgo } from "./ui";

export type SettingsTab = "email" | "website" | "general";

const TABS: { id: SettingsTab; label: string; icon: string }[] = [
  { id: "email", label: "Email accounts", icon: "mail" },
  { id: "website", label: "Website & bookings", icon: "globe" },
  { id: "general", label: "General", icon: "settings" },
];

export function SettingsModal({ ctx, initial, onClose }: { ctx: AppCtx; initial: SettingsTab; onClose: () => void }) {
  const [tab, setTab] = useState<SettingsTab>(initial);
  return (
    <Modal title="Settings" onClose={onClose} wide>
      <div className="adm-settings">
        <nav className="adm-settings-nav">
          {TABS.map((t) => (
            <button key={t.id} className={`adm-nav-item${tab === t.id ? " active" : ""}`} onClick={() => setTab(t.id)}>
              <Icon name={t.icon} size={17} />
              <span>{t.label}</span>
            </button>
          ))}
        </nav>
        <div className="adm-settings-body">
          {tab === "email" && <EmailAccounts ctx={ctx} />}
          {tab === "website" && <WebsiteSettings ctx={ctx} />}
          {tab === "general" && <General ctx={ctx} />}
        </div>
      </div>
    </Modal>
  );
}

// ---------- accounts list ----------

function AccountRow({ a, ctx, onEdit }: { a: Account; ctx: AppCtx; onEdit?: () => void }) {
  const [busy, setBusy] = useState(false);
  return (
    <div className="adm-acc">
      <Brand platform={a.platform} size={30} />
      <div className="adm-acc-main">
        <b>{a.label}</b>
        <span>
          {PLATFORM_LABEL(a.platform)}
          {a.kind === "email" && ` · ${a.sentToday}/${a.config.dailyLimit ?? 40} sent today`}
        </span>
        {a.last_error && <span className="adm-acc-err">{a.last_error}</span>}
      </div>
      <Status value={a.status === "ok" ? "connected" : a.status} />
      <div className="adm-acc-actions">
        {a.config.provider === "resend" && (
          <button className="adm-btn" disabled={busy} onClick={async () => {
            setBusy(true);
            try {
              const r = await api<{ note?: string }>(`accounts/${a.id}/connect-inbox`, { body: {} });
              ctx.toast(r.note || "Resend inbox connected");
              await ctx.reloadAccounts();
            } catch (error) { ctx.toast((error as Error).message, "error"); }
            finally { setBusy(false); }
          }}>{a.secretsSet.includes("resendWebhookSecret") ? "Inbox connected" : "Connect inbox"}</button>
        )}
        <button
          className="adm-btn"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              const r = await api<{ ok: boolean; note?: string; error?: string }>(`accounts/${a.id}/test`, { body: {} });
              ctx.toast(r.ok ? r.note || "Connection works" : r.error || "Failed", r.ok ? "ok" : "error");
              await ctx.reloadAccounts();
            } finally {
              setBusy(false);
            }
          }}
        >
          {busy ? "Testing…" : "Test"}
        </button>
        {onEdit && (
          <button className="adm-btn" onClick={onEdit}>
            Edit
          </button>
        )}
        <button
          className="adm-icon-btn"
          aria-label="Remove"
          onClick={async () => {
            if (!confirm(`Remove ${a.label}?`)) return;
            await api(`accounts/${a.id}`, { method: "DELETE" });
            await ctx.reloadAccounts();
          }}
        >
          <Icon name="trash" size={16} />
        </button>
      </div>
    </div>
  );
}

// ---------- email ----------

const PROVIDERS = [
  { id: "gmail", label: "Gmail / Google Workspace", smtpHost: "smtp.gmail.com", smtpPort: 465, imapHost: "imap.gmail.com" },
  { id: "outlook", label: "Outlook / Microsoft 365", smtpHost: "smtp.office365.com", smtpPort: 587, imapHost: "outlook.office365.com" },
  { id: "zoho", label: "Zoho Mail", smtpHost: "smtp.zoho.com", smtpPort: 465, imapHost: "imap.zoho.com" },
  { id: "custom", label: "Other (SMTP + IMAP)", smtpHost: "", smtpPort: 465, imapHost: "" },
  { id: "resend", label: "Resend (send + receive)", smtpHost: "", smtpPort: 0, imapHost: "" },
];

function EmailAccounts({ ctx }: { ctx: AppCtx }) {
  const [settings] = useSettings();
  const [editing, setEditing] = useState<Account | "new" | null>(null);
  const [testing, setTesting] = useState(false);
  const list = ctx.accounts.filter((account) => account.kind === "email");
  if (editing) return <EmailForm ctx={ctx} account={editing === "new" ? undefined : editing} onDone={() => setEditing(null)} />;
  if (!settings) return <div className="adm-skel" />;
  const enabled = settings.cloudflareLeadMail;
  return (
    <div className="adm-stack">
      <h3>Email accounts</h3>
      <div className="adm-acc">
        <Brand platform="email" size={30} />
        <div className="adm-acc-main">
          <b>{settings.cloudflareEmailAddress}</b>
          <span>Cloudflare · Form notifications and lead replies</span>
        </div>
        <Status value={enabled ? "connected" : "setup_required"} />
      </div>
      {enabled && settings.leadNotifyEmail && (
        <div className="adm-copy">
          <p className="adm-hint">Form notifications go to {settings.leadNotifyEmail}.</p>
          <button type="button" className="adm-btn" disabled={testing} onClick={async () => {
            setTesting(true);
            try {
              await api("settings/test-lead-notification", { body: {} });
              ctx.toast(`Test sent to ${settings.leadNotifyEmail}`);
            } catch (error) {
              ctx.toast((error as Error).message, "error");
            } finally {
              setTesting(false);
            }
          }}>{testing ? "Sending…" : "Send test email"}</button>
        </div>
      )}
      <details open={!enabled}>
        <summary>Other mailboxes{list.length ? ` (${list.length})` : ""}</summary>
        <div className="adm-stack">
          {list.length > 0 && (
            <div className="adm-acc-list">
              {list.map((account) => (
                <AccountRow key={account.id} a={account} ctx={ctx} onEdit={() => setEditing(account)} />
              ))}
            </div>
          )}
          <button type="button" className="adm-btn self-start" onClick={() => setEditing("new")}>
            <Icon name="plus" size={16} /> Add mailbox
          </button>
        </div>
      </details>
    </div>
  );
}

function EmailForm({ ctx, account, onDone }: { ctx: AppCtx; account?: Account; onDone: () => void }) {
  const c = account?.config ?? {};
  const guess = c.provider === "resend" ? "resend" : PROVIDERS.find((p) => p.smtpHost && p.smtpHost === c.smtpHost)?.id ?? (account ? "custom" : "gmail");
  const [provider, setProvider] = useState(guess);
  const [f, setF] = useState<Record<string, string>>({
    email: String(c.email ?? ""),
    fromName: String(c.fromName ?? "Ramjan Ali"),
    password: "",
    resendKey: "",
    resendInboundAddress: String(c.resendInboundAddress ?? ""),
    smtpHost: String(c.smtpHost ?? ""),
    smtpPort: String(c.smtpPort ?? ""),
    imapHost: String(c.imapHost ?? ""),
    imapPort: String(c.imapPort ?? ""),
    username: String(c.username ?? ""),
    dailyLimit: String(c.dailyLimit ?? 40),
    signature: String(c.signature ?? ""),
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [advanced, setAdvanced] = useState(provider === "custom");
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const p = PROVIDERS.find((x) => x.id === provider)!;

  return (
    <form
      className="adm-stack"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError("");
        const config: Record<string, unknown> = {
          ...f,
          provider: provider === "resend" ? "resend" : "smtp",
          smtpHost: f.smtpHost || p.smtpHost,
          smtpPort: Number(f.smtpPort) || p.smtpPort || undefined,
          imapHost: f.imapHost || p.imapHost,
          imapPort: Number(f.imapPort) || 993,
        };
        try {
          const saved = await api<Account>("accounts", { body: { id: account?.id, kind: "email", platform: "email", label: f.email, config } });
          await ctx.reloadAccounts();
          if (saved.status === "ok") {
            ctx.toast(`${f.email} connected`);
            onDone();
          } else setError(saved.last_error || "Could not sign in. Check the password and server settings.");
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setBusy(false);
        }
      }}
    >
      <button type="button" className="adm-back" onClick={onDone}>
        <Icon name="left" size={16} /> All email accounts
      </button>
      <h3>{account ? "Edit email account" : "Add an email account"}</h3>
      <Field label="Provider">
        <select value={provider} onChange={(e) => setProvider(e.target.value)}>
          {PROVIDERS.map((x) => (
            <option key={x.id} value={x.id}>
              {x.label}
            </option>
          ))}
        </select>
      </Field>
      {provider === "gmail" && (
        <div className="adm-help">
          Gmail needs an <b>app password</b>, not your normal password: turn on 2-Step Verification, then create one at{" "}
          <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noopener">
            myaccount.google.com/apppasswords
          </a>
          .
        </div>
      )}
      {provider === "outlook" && <div className="adm-help">Use an app password, and make sure SMTP AUTH and IMAP are allowed for the mailbox in Microsoft 365.</div>}
      {provider === "resend" && (
        <div className="adm-help">
          Resend sends your replies and securely delivers incoming client replies to this dashboard. Copy your address from Resend → Emails → Receiving → Inbound address.
        </div>
      )}
      <div className="adm-grid2">
        <Field label="Email address">
          <input type="email" required value={f.email} onChange={set("email")} placeholder="you@yourdomain.com" />
        </Field>
        <Field label="Sender name">
          <input value={f.fromName} onChange={set("fromName")} />
        </Field>
      </div>
      {provider === "resend" ? (
        <div className="adm-grid2">
          <Field label="Resend API key">
            <input type="password" autoComplete="off" value={f.resendKey} onChange={set("resendKey")} placeholder={account?.secretsSet.includes("resendKey") ? "•••••••• saved" : "re_…"} required={!account?.secretsSet.includes("resendKey")} />
          </Field>
          <Field label="Resend inbound address" hint="Example: replies@abc123.resend.app">
            <input type="email" value={f.resendInboundAddress} onChange={set("resendInboundAddress")} placeholder="replies@your-id.resend.app" required />
          </Field>
        </div>
      ) : (
        <Field label={provider === "gmail" ? "App password" : "Password / app password"}>
          <input type="password" autoComplete="new-password" value={f.password} onChange={set("password")} placeholder={account?.secretsSet.includes("password") ? "•••••••• saved — leave empty to keep" : ""} required={!account?.secretsSet.includes("password")} />
        </Field>
      )}
      <div className="adm-grid2">
        <Field label="Daily sending limit" hint="30–50 is a safe range for a warmed-up inbox.">
          <input type="number" min={1} max={500} value={f.dailyLimit} onChange={set("dailyLimit")} />
        </Field>
      </div>
      <Field label="Signature (optional)">
        <textarea rows={3} value={f.signature} onChange={set("signature")} placeholder={"Ramjan Ali Akash\nLocal SEO for home service businesses"} />
      </Field>
      {provider !== "resend" && (
        <>
          <button type="button" className="adm-link" onClick={() => setAdvanced((a) => !a)}>
            {advanced ? "Hide" : "Show"} server settings
          </button>
          {advanced && (
            <div className="adm-grid2">
              <Field label="SMTP host">
                <input value={f.smtpHost} onChange={set("smtpHost")} placeholder={p.smtpHost || "smtp.example.com"} />
              </Field>
              <Field label="SMTP port" hint="465 (SSL) or 587 (STARTTLS)">
                <input value={f.smtpPort} onChange={set("smtpPort")} placeholder={String(p.smtpPort || 465)} />
              </Field>
              <Field label="IMAP host" hint="Used to find replies">
                <input value={f.imapHost} onChange={set("imapHost")} placeholder={p.imapHost || "imap.example.com"} />
              </Field>
              <Field label="IMAP port">
                <input value={f.imapPort} onChange={set("imapPort")} placeholder="993" />
              </Field>
              <Field label="Username" hint="Usually the email address">
                <input value={f.username} onChange={set("username")} placeholder={f.email} />
              </Field>
            </div>
          )}
        </>
      )}
      {error && <div className="adm-error">{error}</div>}
      <div className="adm-row-end">
        <button type="button" className="adm-btn" onClick={onDone}>
          Cancel
        </button>
        <button className="adm-btn primary" disabled={busy}>
          {busy ? "Connecting…" : "Save & test"}
        </button>
      </div>
    </form>
  );
}

// ---------- website & bookings ----------

function useSettings() {
  const [s, setS] = useState<Settings | null>(null);
  useEffect(() => {
    api<Settings>("settings").then(setS).catch(() => {});
  }, []);
  return [s, setS] as const;
}

function WebsiteSettings({ ctx }: { ctx: AppCtx }) {
  const [s, setS] = useSettings();
  const [secret, setSecret] = useState("");
  const [notify, setNotify] = useState({ email: "", account: "" });
  const [savingNotify, setSavingNotify] = useState(false);
  const [testingNotify, setTestingNotify] = useState(false);
  useEffect(() => {
    if (s) setNotify({ email: s.leadNotifyEmail, account: s.leadNotifyAccount });
  }, [s]);
  if (!s) return <div className="adm-skel" />;
  const snippet = `<form action="${s.leadEndpoint}" method="POST">
  <input name="name" placeholder="Name" required>
  <input name="email" type="email" placeholder="Email" required>
  <input name="phone" placeholder="Phone">
  <textarea name="message" placeholder="How can I help?"></textarea>
  <input type="hidden" name="_form" value="Contact form">
  <input type="hidden" name="_redirect" value="https://your-site.com/thanks">
  <input name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  <button>Send</button>
</form>`;
  return (
    <div className="adm-stack">
      <div className="adm-sec-head">
        <h3>Cal.com bookings</h3>
        <Status value={s.calConnected ? "connected" : "awaiting_webhook"} />
      </div>
      {!s.calConnected && (
        <details>
          <summary>Set up Cal.com</summary>
          <div className="adm-stack">
            <p className="adm-hint">
              In <a href="https://app.cal.com/settings/developer/webhooks" target="_blank" rel="noopener">Cal.com webhooks</a>,
              add this subscriber URL and select Booking Created, Booking Rescheduled and Booking Cancelled.
            </p>
            <CopyField value={s.calWebhookUrl} />
            <form className="adm-copy" onSubmit={async (e) => {
              e.preventDefault();
              try {
                setS(await api<Settings>("settings", { body: { calSecret: secret } }));
                setSecret("");
                ctx.toast("Cal.com secret saved");
              } catch (error) {
                ctx.toast((error as Error).message, "error");
              }
            }}>
              <input type="password" aria-label="Cal.com webhook secret" autoComplete="off" placeholder={s.calSecretSet ? "Secret saved" : "Cal.com webhook secret"} value={secret} onChange={(e) => setSecret(e.target.value)} />
              <button type="submit" className="adm-btn" disabled={!secret.trim()}>Save secret</button>
            </form>
            <button type="button" className="adm-link" onClick={async () => {
              try {
                setS(await api<Settings>("settings"));
              } catch (error) {
                ctx.toast((error as Error).message, "error");
              }
            }}>Refresh status</button>
          </div>
        </details>
      )}

      <div className="adm-divider" />
      <div className="adm-sec-head">
        <div>
          <h3>Website forms</h3>
          <p>Any form that posts to this address lands in your Inbox, and the person is added to Contacts.</p>
        </div>
      </div>
      <form className="adm-stack" onSubmit={async (e) => {
        e.preventDefault();
        setSavingNotify(true);
        try {
          setS(await api<Settings>("settings", { body: { leadNotifyEmail: notify.email, leadNotifyAccount: notify.account } }));
          ctx.toast(notify.email ? "Form notifications saved" : "Form notifications turned off");
        } catch (error) {
          ctx.toast((error as Error).message, "error");
        } finally {
          setSavingNotify(false);
        }
      }}>
        <Field label="Send form notifications to" hint="Reply to the notification to email the visitor. Leave blank to turn notifications off.">
          <input type="email" value={notify.email} onChange={(e) => setNotify({ ...notify, email: e.target.value })} />
        </Field>
        {!s.cloudflareLeadMail && <Field label="Send with" hint="Choose a connected email account in Settings → Email accounts.">
          <select value={notify.account} onChange={(e) => setNotify({ ...notify, account: e.target.value })}>
            <option value="">Automatic (use a connected sender)</option>
            {ctx.accounts.filter((account) => account.status === "ok").map((account) => (
              <option key={account.id} value={account.id}>{account.label}</option>
            ))}
          </select>
        </Field>}
        {s.leadNotifyEmail && (
          <p className="adm-hint" role="status">
            {s.leadNotifySender ? `Sending from ${s.leadNotifySender} to ${s.leadNotifyEmail}.` : "Connect an email account to deliver queued notifications."}
          </p>
        )}
        <div className="adm-copy">
          <button className="adm-btn primary" disabled={savingNotify || testingNotify}>{savingNotify ? "Saving…" : "Save notifications"}</button>
          <button type="button" className="adm-btn" disabled={!s.leadNotifySender || savingNotify || testingNotify || notify.email !== s.leadNotifyEmail || notify.account !== s.leadNotifyAccount} onClick={async () => {
            setTestingNotify(true);
            try {
              await api("settings/test-lead-notification", { body: {} });
              ctx.toast(`Test sent to ${s.leadNotifyEmail}`);
            } catch (error) {
              ctx.toast((error as Error).message, "error");
            } finally {
              setTestingNotify(false);
            }
          }}>{testingNotify ? "Sending…" : "Send test email"}</button>
        </div>
      </form>
      <CopyField value={s.leadEndpoint} />
      <p className="adm-hint">Works with a plain HTML form (below), JavaScript <code>fetch</code> with JSON, or tools like Zapier, Tally and Typeform via webhook.</p>
      <pre className="adm-code">{snippet}</pre>
    </div>
  );
}

// ---------- general ----------

function General({ ctx }: { ctx: AppCtx }) {
  const [s, setS] = useSettings();
  const [form, setForm] = useState({ anthropicKey: "", newPassword: "" });
  const [activity, setActivity] = useState<{ id: number; level: string; text: string; created_at: number }[]>([]);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    api<typeof activity>("activity").then(setActivity).catch(() => {});
  }, []);
  if (!s) return <div className="adm-skel" />;
  return (
    <form
      className="adm-stack"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          setS(await api<Settings>("settings", { body: form }));
          setForm((f) => ({ ...f, anthropicKey: "", newPassword: "" }));
          ctx.toast("Settings saved");
        } catch (err) {
          ctx.toast((err as Error).message, "error");
        }
      }}
    >
      <h3>General</h3>
      <Field label="Anthropic API key (for “Write with AI”)" hint={s.anthropicKeySet ? "A key is saved. Paste a new one to replace it." : "Optional. Get one at console.anthropic.com."}>
        <input type="password" autoComplete="off" value={form.anthropicKey} onChange={(e) => setForm({ ...form, anthropicKey: e.target.value })} placeholder={s.anthropicKeySet ? "•••••••• saved" : "sk-ant-…"} />
      </Field>
      <Field
        label="Change dashboard password"
        hint={s.passwordFromEnv ? "The password is set by the ADMIN_PASSWORD secret in Cloudflare, so it can’t be changed here." : "At least 8 characters. Other signed-in devices will be signed out."}
      >
        <input type="password" autoComplete="new-password" disabled={s.passwordFromEnv} value={form.newPassword} onChange={(e) => setForm({ ...form, newPassword: e.target.value })} />
      </Field>
      <div className="adm-row-end">
        <button className="adm-btn primary">Save settings</button>
      </div>

      <div className="adm-divider" />
      <div className="adm-sec-head">
        <div>
          <h3>Automation</h3>
          <p>Checks for replies and retries pending form notifications every 5 minutes.</p>
        </div>
        <button
          type="button"
          className="adm-btn"
          disabled={running}
          onClick={async () => {
            setRunning(true);
            try {
              await api("run", { body: {} });
              setActivity(await api("activity"));
              ctx.refreshBadge();
              ctx.toast("Automation ran");
            } catch (err) {
              ctx.toast((err as Error).message, "error");
            } finally {
              setRunning(false);
            }
          }}
        >
          <Icon name="refresh" size={15} /> {running ? "Running…" : "Run now"}
        </button>
      </div>
      <div className="adm-log">
        {activity.length ? (
          activity.slice(0, 40).map((a) => (
            <div key={a.id} className={`adm-log-row ${a.level}`}>
              <span>{timeAgo(a.created_at)}</span>
              {a.text}
            </div>
          ))
        ) : (
          <p className="adm-hint">Nothing has happened yet.</p>
        )}
      </div>
    </form>
  );
}
