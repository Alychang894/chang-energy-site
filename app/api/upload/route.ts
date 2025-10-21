// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs"; // ensures Node runtime for Blob SDK

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("bill") as File | null;
    if (!file || file.size === 0) {
      return NextResponse.json({ ok: false, message: "Missing file." }, { status: 400 });
    }

    const name = (form.get("name") || "") as string;
    const email = (form.get("email") || "") as string;
    const company = (form.get("company") || "") as string;
    const message = (form.get("message") || "") as string;

    const ts = Date.now();
    const safeName = file.name.replace(/[^\w.\-]+/g, "_");
    const key = `bills/${ts}-${safeName}`;

    // Upload the bill file (private by default)
    const uploaded = await put(key, file, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN, // set in Vercel → Settings → Environment Variables
    });

    // Save a small JSON record alongside it
    await put(
      `submissions/${ts}.json`,
      JSON.stringify({ ts, name, email, company, message, fileKey: uploaded.pathname }),
      {
        access: "public",
        contentType: "application/json",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      }
    );

    return NextResponse.json({ ok: true, url: uploaded.url });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, message: err?.message || "Upload failed" },
      { status: 500 }
    );
  }
}
