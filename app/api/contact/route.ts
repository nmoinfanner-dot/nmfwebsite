import { SITE_EMAIL } from "@/lib/site";

// Sends the contact form to SITE_EMAIL through Resend's HTTP API.
// Needs RESEND_API_KEY in the environment (Vercel project settings, or
// .env.local while developing). CONTACT_FROM is optional: it must be an
// address on a domain verified in Resend, e.g. "Website <hello@nmoinfanner.com>".
const RESEND_URL = "https://api.resend.com/emails";
const DEFAULT_FROM = "Website contact form <onboarding@resend.dev>";

const LIMITS = { name: 120, email: 254, phone: 40, message: 5000 };

type Fields = { name: string; email: string; phone: string; message: string };

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Newlines are removed from anything that goes into a header (subject, name)
// so a visitor cannot inject extra mail headers.
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

function fail(code: string, status: number) {
  return Response.json({ ok: false, error: code }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail("invalid", 400);
  }

  // Hidden field that real visitors never fill. Bots do: pretend it worked.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const fields: Fields = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    phone: clean(body.phone, LIMITS.phone),
    message: clean(body.message, LIMITS.message),
  };

  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email);
  if (!fields.name || !emailLooksValid || !fields.message) return fail("invalid", 400);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set, the message was not sent.");
    return fail("not_configured", 500);
  }

  const text = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone || "-"}`,
    "",
    fields.message,
  ].join("\n");

  try {
    const response = await fetch(RESEND_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || DEFAULT_FROM,
        to: [SITE_EMAIL],
        reply_to: fields.email,
        subject: `New message from ${singleLine(fields.name)}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error(
        "Contact form: Resend rejected the message",
        response.status,
        await response.text(),
      );
      return fail("send_failed", 502);
    }
  } catch (error) {
    console.error("Contact form: could not reach Resend", error);
    return fail("send_failed", 502);
  }

  return Response.json({ ok: true });
}
