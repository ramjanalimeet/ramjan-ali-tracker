import { NextResponse } from "next/server";

const MIN_FILL_MS = 3000;

/** Validates audit requests and filters obvious bots. The email notification is sent from the browser. */
export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please add your name and a valid email" }, { status: 400 });
  }

  // Bots fill the hidden field or submit instantly; accept silently so they learn nothing.
  const tooFast = typeof body.t === "number" && Date.now() - body.t < MIN_FILL_MS;
  if (body.company_url || tooFast) return NextResponse.json({ ok: true });

  console.log("lead", { name, email, business: body.business, trade: body.trade, area: body.area, page: body.page });
  return NextResponse.json({ ok: true });
}
