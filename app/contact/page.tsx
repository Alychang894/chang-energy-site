// app/contact/page.tsx
"use client";

import { useState } from "react";

const markets = [
  "PJM",
  "ERCOT",
  "MISO",
  "NYISO",
  "ISO-NE",
  "CAISO",
  "Other",
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message?: string; error?: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    try {
      const res = await fetch("/api/request-audit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) {
        setResult({ ok: false, error: data?.error || "Failed to submit." });
      } else {
        setResult({ ok: true, message: data?.message || "Submitted!" });
        formEl.reset();
      }
    } catch (err: any) {
      setResult({ ok: false, error: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="px-6 py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Request a Strategy Call</h1>
        <p className="mt-2 text-gray-600">
          Upload a recent utility bill and tell us about your sites. We’ll audit spend,
          check PLC/NSPL exposure, and outline a plan to stabilize costs.
        </p>

        {/* Card */}
        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <form onSubmit={onSubmit} encType="multipart/form-data" className="grid gap-5">
            {/* Company */}
            <div>
              <label className="block text-sm font-medium">Company *</label>
              <input
                name="company"
                required
                placeholder="Acme Cold Storage"
                className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              />
            </div>

            {/* Name / Email */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Your Name *</label>
                <input
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@acme.com"
                  className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
                />
              </div>
            </div>

            {/* Phone / Market */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 555-5555"
                  className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Market / ISO</label>
                <select
                  name="market"
                  className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select market
                  </option>
                  {markets.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Annual kWh */}
            <div>
              <label className="block text-sm font-medium">
                Annual kWh (rough estimate)
              </label>
              <input
                name="annual_kwh"
                placeholder="e.g. 12,000,000"
                className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium">
                Notes (sites, suppliers, goals)
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Share anything helpful about your footprint."
                className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              />
            </div>

            {/* Bill upload */}
            <div>
              <label className="block text-sm font-medium">
                Upload a recent bill (PDF, PNG, JPG — max 10MB)
              </label>
              <input
                type="file"
                name="bill"
                accept=".pdf,.png,.jpg,.jpeg"
                className="mt-1 w-full rounded-md border px-3 py-2 file:mr-3 file:rounded file:border file:bg-gray-50 file:px-3 file:py-2"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary disabled:opacity-60 rounded-md bg-slate-900 px-5 py-2 text-white hover:bg-slate-800"
              >
                {submitting ? "Submitting..." : "Send Request"}
              </button>
              {result?.ok && (
                <span className="text-sm text-green-700">{result.message}</span>
              )}
              {result?.ok === false && (
                <span className="text-sm text-red-600">{result.error}</span>
              )}
            </div>
          </form>
        </div>

        {/* FYI */}
        <p className="mt-4 text-xs text-gray-500">
          By submitting, you agree to our processing of the information you provide to
          evaluate savings opportunities and contact you about your energy strategy.
        </p>
      </div>
    </main>
  );
}
