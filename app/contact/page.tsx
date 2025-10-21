// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Request a Meeting</h1>
        <p className="mt-4 text-gray-700">
          Share a recent utility bill (PDF or image) and a few details. We’ll run a quick audit,
          estimate potential savings, and follow up with next steps.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <form onSubmit={onSubmit} className="rounded-2xl border p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First name</label>
              <input name="firstName" required className="mt-1 input" placeholder="First Name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Last name</label>
              <input name="lastName" required className="mt-1 input" placeholder="Last Name" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Company</label>
              <input name="company" required className="mt-1 input" placeholder="Business Name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Role / Title</label>
              <input name="title" className="mt-1 input" placeholder="Title" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Work email</label>
              <input name="email" type="email" required className="mt-1 input" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input name="phone" className="mt-1 input" placeholder="(555) 555-5555" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Message (optional)</label>
            <textarea name="message" rows={4} className="mt-1 textarea" placeholder="Sites, goals, timing…"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Upload a recent utility bill</label>
            <input
              name="bill"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              className="mt-1 file:mr-4 file:btn file:btn-outline input w-full"
            />
            <p className="mt-2 text-xs text-gray-500">
              PDF, JPG, or PNG. Up to ~10MB. You can also share multiple later.
            </p>
          </div>

          {status === "error" && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error || "There was an issue. Please try again."}
            </div>
          )}
          {status === "success" && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
              Thanks — we’ve received your info. A consultant will reach out shortly.
            </div>
          )}

          <div className="flex items-center gap-3">
            <button disabled={status === "submitting"} className="btn btn-primary">
              {status === "submitting" ? "Submitting…" : "Send & Upload"}
            </button>
            <a href="/resources" className="btn btn-outline">View Guides</a>
          </div>
        </form>
      </section>
    </main>
  );
}
