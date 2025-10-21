// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "edge"; // Blob works great on Edge runtime

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const firstName = String(form.get("firstName") || "");
    const lastName = String(form.get("lastName") || "");
    const company = String(form.get("company") || "");
    const title = String(form.get("title") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");

    let billUrl: string | null = null;
    const file = form.get("bill");
    const now = new Date();

    // If a file was provided, upload to Blob Storage
    if (file && typeof file !== "string") {
      const f = file as File;
      const safeName = f.name?.replace(/[^\w.\-]+/g, "_") || "bill";
      const key = `bills/${now.toISOString().replace(/[:.]/g, "-")}_${safeName}`;

      const { url } = await put(key, f, {
        access: "public", // stays private by default; change to "public" if you want public links
        addRandomSuffix: true,
      });

      billUrl = url;
    }

    // Persist lead metadata as JSON in Blob (simple, durable, private)
    const leadKey = `leads/${now.toISOString().replace(/[:.]/g, "-")}_${company
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .slice(0, 60)}.json`;

    const record = {
      submittedAt: now.toISOString(),
      firstName,
      lastName,
      company,
      title,
      email,
      phone,
      message,
      billUrl,
      source: "website/contact",
    };

    await put(leadKey, JSON.stringify(record, null, 2), {
      contentType: "application/json",
      access: "public",
      addRandomSuffix: false,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return new NextResponse(err?.message || "Error", { status: 400 });
  }
}
