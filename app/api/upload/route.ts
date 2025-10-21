// app/api/request-audit/route.ts
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

// Quick slugify helper
function slugify(input: string) {
  return (input || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Today as YYYYMMDD
function yyyymmdd(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}

// Sanitize a filename a bit
function safeName(name: string) {
  return (name || "file")
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9._-]/g, "");
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // ----- Collect fields (mirror the form exactly) -----
    const company = String(form.get("company") || "");
    const contactName = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const annualKwh = String(form.get("annual_kwh") || "");        // optional
    const market = String(form.get("market") || "");                // PJM/ ERCOT / etc
    const message = String(form.get("message") || "");              // optional

    // ----- Grab file (optional but recommended) -----
    const file = form.get("bill") as unknown as File | null;

    if (!company || !contactName || !email) {
      return NextResponse.json(
        { ok: false, error: "Company, name, and email are required." },
        { status: 400 }
      );
    }

    const companySlug = slugify(company);
    const today = yyyymmdd();
    let uploadedUrl: string | null = null;
    let uploadedKey: string | null = null;

    if (file && file.size > 0) {
      // basic server-side file size limit (10 MB)
      const MAX_BYTES = 10 * 1024 * 1024;
      if (file.size > MAX_BYTES) {
        return NextResponse.json(
          { ok: false, error: "Bill must be 10MB or less." },
          { status: 400 }
        );
      }

      // put() requires public access (private is a TS error)
      const originalName = safeName((file as any).name || "bill.pdf");
      const key = `bills/${companySlug}/${today}-${originalName}`;

      const { url } = await put(key, file, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
        contentType: file.type || "application/octet-stream",
      });

      uploadedUrl = url;
      uploadedKey = key;
    }

    // Save an intake JSON for your records
    const intake = {
      receivedAt: new Date().toISOString(),
      company,
      contactName,
      email,
      phone,
      annualKwh,
      market,
      message,
      bill: uploadedUrl
        ? { url: uploadedUrl, key: uploadedKey, size: file?.size, type: file?.type }
        : null,
      userAgent: req.headers.get("user-agent") || "",
      ip: req.headers.get("x-forwarded-for") || "",
    };

    const intakeKey = `intake/${Date.now()}-${companySlug}.json`;
    await put(intakeKey, JSON.stringify(intake, null, 2), {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
      contentType: "application/json",
    });

    return NextResponse.json({
      ok: true,
      message: "Thanks — we received your request.",
      fileUrl: uploadedUrl,
      recordKey: intakeKey,
    });
  } catch (err: any) {
    console.error("request-audit error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error submitting the form." },
      { status: 500 }
    );
  }
}
