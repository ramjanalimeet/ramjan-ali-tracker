import { EMAIL_PORTRAIT } from "./email-portrait";

export const CLOUDFLARE_FROM = "hello@ramjanaliakash.com";

function escapeHtml(value: string) {
  return value.replace(/[&<>]/g, (char) => char === "&" ? "&amp;" : char === "<" ? "&lt;" : "&gt;");
}

export async function sendCloudflareMail(
  email: SendEmail,
  mail: { to: string; subject: string; body: string; replyTo?: string; inReplyTo?: string; portrait?: boolean },
) {
  const cid = "ramjan-ali-akash";
  const messageId = mail.inReplyTo?.trim();
  const threadHeaders = messageId && /^<[^<>\s]+>$/u.test(messageId)
    ? { "In-Reply-To": messageId, References: messageId }
    : undefined;
  const html = mail.portrait ? [
    '<div style="font:15px/1.55 Arial,sans-serif;color:#202124">',
    ...mail.body.split(/\n\s*\n/).map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`),
    `<p><img src="cid:${cid}" width="64" height="64" alt="Ramjan Ali Akash" style="display:block;width:64px;height:64px;border-radius:50%"></p>`,
    "</div>",
  ].join("") : undefined;
  return email.send({
    from: { email: CLOUDFLARE_FROM, name: "Ramjan Ali Akash" },
    to: mail.to,
    subject: mail.subject.replace(/[\r\n]+/g, " ").slice(0, 200),
    text: mail.body,
    replyTo: mail.replyTo,
    headers: threadHeaders,
    ...(html ? {
      html,
      attachments: [{
        disposition: "inline",
        filename: "ramjan-ali-akash.jpg",
        type: "image/jpeg",
        contentId: cid,
        content: EMAIL_PORTRAIT,
      }],
    } : {}),
  });
}
