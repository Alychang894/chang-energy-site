// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "edge"; // fast & compatible with Blob

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // fields expected from your contact form
    const file = form.get("bill") as File | null;      // <input name="bill" type="file" />
    const companyRaw = (form.get("company") as string | null) || "unknown";

    if (!file) {
      return NextResponse.json(
        { ok: false, error: "No file uploaded (field name should be 'bill')." },
        { status: 400 }
      );
    }

    if (file.size === 0) {
      return NextResponse.json(
        { ok: false, error: "The uploaded file is empty." },
        { status: 400 }
      );
    }

    // Optional size guard (25 MB)
    const MAX = 25 * 1024 * 1024;
    if (file.size > MAX) {
      return NextResponse.json(
        { ok: false, error: "File too large (max 25 MB)." },
        { status: 413 }
      );
    }

    // Sanitize the company name for a clean folder path
    const safeCompany = companyRaw
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") || "unknown";

    // Derive file extension (default to pdf if missing)
    const ext = (() => {
      const n = file.name || "bill";
      const i = n.lastIndexOf(".");
      return i >= 0 ? n.slice(i + 1).toLowerCase() : "pdf";
    })();

    // Unique + sortable filename
    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    const key = `bills/${safeCompany}/${ts}-${crypto.randomUUID()}.${ext}`;

    // Upload to Vercel Blob (public by design; unique URL)
    const uploaded = await put(key, file, {
      access: "public", // NOTE: "private" is not supported by the current SDK typings
      contentType: file.type || undefined,
      token: process.env.BLOB_READ_WRITE_TOKEN, // set in Vercel → Settings → Environment Variables
    });

    return NextResponse.json({
      ok: true,
      key,                     // e.g. bills/acme-co/2025-10-20T22-30-15-123Z-uuid.pdf
      url: uploaded.url,       // public, unguessable URL
      pathname: uploaded.pathname,
      size: file.size,
      type: file.type,
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Upload failed" },
      { status: 500 }
    );
  }
}
