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

  const nextSteps = [
    { t: "We audit your bill", d: "Line-by-line review for errors, bad tariffs, and demand-charge waste — usually within 1 business day." },
    { t: "We shop suppliers", d: "Your usage goes out for competitive bids. You see every option with transparent markups." },
    { t: "You approve, we switch", d: "Pick the rate that fits. We handle the paperwork; your utility keeps delivering, uninterrupted." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header band */}
      <section className="band-dark border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_20%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
          <span className="eyebrow">Free bill review</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Get your free bill review
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Upload your utility bill and a few details — it takes about a
            minute. We&apos;ll audit it line by line, shop competitive supplier
            rates, and follow up with a clear savings picture — no obligation.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_360px]">
          {/* Form — logic and field names untouched */}
          <form onSubmit={onSubmit} className="card space-y-6 p-6 shadow-lift md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-800">First name</label>
                <input name="firstName" required className="input" placeholder="First Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800">Last name</label>
                <input name="lastName" required className="input" placeholder="Last Name" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-800">Company</label>
                <input name="company" required className="input" placeholder="Business Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800">Role / Title</label>
                <input name="title" className="input" placeholder="Title" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-800">Work email</label>
                <input name="email" type="email" required className="input" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800">Phone</label>
                <input name="phone" className="input" placeholder="(555) 555-5555" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-800">Message (optional)</label>
              <textarea name="message" rows={4} className="textarea" placeholder="Sites, goals, timing…"></textarea>
            </div>

            <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-5">
              <label className="block text-sm font-semibold text-slate-800">
                Upload a recent utility bill
              </label>
              <input
                name="bill"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                className="input mt-2 w-full file:mr-4 file:rounded-lg file:border-0 file:bg-slate-950 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800"
              />
              <p className="mt-2 text-xs text-slate-500">
                PDF, JPG, or PNG. Up to ~10MB. You can also share more later.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Questions first?{" "}
                <a href="mailto:ben@changenergygroup.com" className="font-semibold text-brand-600 hover:text-brand-700">
                  ben@changenergygroup.com
                </a>
              </p>
            </div>

            {status === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error || "There was an issue. Please try again."}
              </div>
            )}
            {status === "success" && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                Thanks — we&apos;ve received your info. A consultant will reach out shortly.
              </div>
            )}

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button disabled={status === "submitting"} className="btn btn-primary btn-lg">
                {status === "submitting" ? "Submitting…" : "Send My Bill for Review"}
              </button>
              <a href="/resources" className="btn btn-outline">
                View Guides
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Your bill is used only for the review. We never share your information.
            </p>
          </form>

          {/* Side panel */}
          <aside className="space-y-6">
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-slate-900">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((s, i) => (
                  <li key={s.t} className="flex gap-3">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{s.t}</p>
                      <p className="mt-0.5 text-sm text-slate-600">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="band-dark rounded-2xl p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_160px_at_50%_0px,rgba(249,115,22,0.2),transparent)]"
              />
              <div className="relative">
                <h2 className="text-lg font-semibold text-white">Prefer email?</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Send your bill straight to our inbox — a real person reviews every one.
                </p>
                <a
                  href="mailto:ben@changenergygroup.com"
                  className="btn btn-primary mt-4 w-full"
                >
                  ben@changenergygroup.com
                </a>
                <a
                  href="mailto:support@changenergygroup.com"
                  className="link-brand mt-3 block text-center text-sm !text-brand-300 hover:!text-brand-200"
                >
                  support@changenergygroup.com
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
