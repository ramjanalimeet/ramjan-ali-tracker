// Optional AI writing (needs an Anthropic API key saved in Settings).
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM = `You write for Ramjan Ali Akash, who does Local SEO and AI search visibility for home service businesses (plumbers, roofers, HVAC, septic and similar trades).
Write in plain, warm, specific English. No hype, no emojis unless asked, no invented facts, numbers or client results.
Return only the requested text, with no preamble or explanation.`;

export async function aiWrite(apiKey: string, kind: "email" | "post" | "reply", brief: string): Promise<string> {
  const client = new Anthropic({ apiKey });
  const task =
    kind === "email"
      ? "Write a short cold outreach email (under 120 words). First line: 'Subject: ...'. Then a blank line, then the body. You may use {{first_name}}, {{company}} and {{website}} placeholders."
      : kind === "reply"
        ? "Write a short, friendly reply to the message below. Body only."
        : "Write a social media post. Keep it under 1200 characters unless the brief says otherwise.";
  const response = await client.beta.messages.create({
    model: "claude-opus-5-5",
    max_tokens: 4000,
    output_config: { effort: "low" },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: SYSTEM,
    messages: [{ role: "user", content: `${task}\n\nBrief:\n${brief}` }],
  });
  if (response.stop_reason === "refusal") throw new Error("The AI declined this request");
  return response.content
    .flatMap((b) => (b.type === "text" ? [b.text] : []))
    .join("")
    .trim();
}
