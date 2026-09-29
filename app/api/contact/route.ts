// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "edge";

const LEAD_EMAIL = "support@changenergygroup.com";
const FROM_EMAIL = "Chang Energy Website <noreply@changenergygroup.com>";
const BUSINESS_PHONE = "+1-267-340-8300";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const firstName = String(form.get("firstName") || "").trim();
    const lastName = String(form.get("lastName") || "").trim();
    const company = String(form.get("company") || "").trim();
    const title = String(form.get("title") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!firstName || !company || !email) {
      return new NextResponse("Missing required fields.", { status: 400 });
    }

    // --- Bill upload (optional) ---
    let billName: string | null = null;
    let billBase64: string | null = null;
    let billContentType = "application/octet-stream";
    const file = form.get("bill");
    if (file && typeof file !== "string" && file.size > 0) {
      if (file.size > 12 * 1024 * 1024) {
        return new NextResponse("Bill file is too large (max ~12MB).", {
          status: 400,
        });
      }
      billName = (file.name || "bill").replace(/[^\w.\-]+/g, "_");
      billContentType = file.type || billContentType;
      billBase64 = Buffer.from(await file.arrayBuffer()).toString("base64");
    }

    const now = new Date();
    const stamp = now.toISOString().replace(/[:.]/g, "-");
    const slug = company
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .slice(0, 60);

    const record = {
      submittedAt: now.toISOString(),
      firstName,
      lastName,
      company,
      title,
      email,
      phone,
      message,
      billFileName: billName,
      source: "website/contact",
    };

    // --- Private backup in Blob storage (best-effort, never blocks the lead) ---
    let stored = false;
    try {
      await put(`leads/${stamp}_${slug}.json`, JSON.stringify(record, null, 2), {
        contentType: "application/json",
        access: "private",
        addRandomSuffix: false,
      });
      if (billBase64 && billName) {
        await put(
          `bills/${stamp}_${billName}`,
          Buffer.from(billBase64, "base64"),
          { contentType: billContentType, access: "private", addRandomSuffix: true }
        );
      }
      stored = true;
    } catch (e) {
      console.error("lead blob backup failed:", e);
    }

    // --- Instant email alert via Resend ---
    let emailed = false;
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      try {
        const rows: Array<[string, string]> = [
          ["Name", `${firstName} ${lastName}`.trim()],
          ["Company", company],
          ["Title", title || "—"],
          ["Email", email],
          ["Phone", phone || "—"],
          ["Bill attached", billName || "No"],
          ["Message", message || "—"],
        ];
        const html = `
          <h2>New website lead — ${esc(company)}</h2>
          <table cellpadding="6" cellspacing="0" border="0">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td><b>${esc(k)}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`
              )
              .join("")}
          </table>
          <p style="color:#666;font-size:12px">Submitted ${esc(now.toISOString())} via changenergygroup.com/contact</p>
        `;
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [LEAD_EMAIL],
            reply_to: email,
            subject: `New lead: ${company} (${firstName} ${lastName})`.slice(0, 120),
            html,
            ...(billBase64 && billName
              ? { attachments: [{ filename: billName, content: billBase64 }] }
              : {}),
          }),
        });
        if (res.ok) {
          emailed = true;
        } else {
          console.error("resend failed:", await res.text());
        }
      } catch (e) {
        console.error("resend error:", e);
      }
    } else {
      console.warn("RESEND_API_KEY not set — lead email alert skipped");
    }

    if (!emailed && !stored) {
      return new NextResponse(
        `We couldn't save your request. Please call ${BUSINESS_PHONE}.`,
        { status: 500 }
      );
    }
    return NextResponse.json({ ok: true, emailed });
  } catch (err: any) {
    return new NextResponse(err?.message || "Error", { status: 400 });
  }
}
