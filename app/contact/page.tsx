// app/contact/page.tsx
"use client";

import { useState } from "react";
import FadeIn from "../../components/FadeIn";

type State =
  | { status: "idle" }
  | { status: "uploading" }
  | { status: "success"; url: string }
  | { status: "error"; message: string };

export default function ContactPage() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const file = formData.get("bill") as File | null;
    if (!file || file.size === 0) {
      return setState({ status: "error", message: "Please attach a recent bill (PDF or image)." });
    }

    try {
      setState({ status: "uploading" });
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`Upload failed (${res.status})`);
      const data = (await res.json()) as { ok: boolean; url?: string; message?: string };
      if (!data.ok) throw new Error(data.message || "Upload failed");

      setState({ status: "success", url: data.url! });
      form.reset();
    } catch (err: any) {
      setState({ status: "error", message: err.message || "Upload failed" });
    }
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="relative mx-auto max-w-3xl px-6 pt-16 pb-6">
          <FadeIn>
            <h1 className="text-4xl font-bold text-gray-900">Request a Strategy Call</h1>
            <p className="mt-3 text-lg text-gray-600">
              Send a recent invoice and a quick note. We’ll review and come prepared with
              ideas to stabilize costs and cut risk.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-20">
        <FadeIn>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border bg-white p-8 shadow-sm space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  name="company"
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Acme Foods"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="What problems are you running into?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload a recent bill (PDF or image)
              </label>
              <input
                name="bill"
                type="file"
                accept=".pdf,image/*"
                required
                className="mt-1 block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border file:bg-white file:px-3 file:py-2 file:text-gray-700 hover:file:bg-gray-50"
              />
              <p className="mt-1 text-xs text-gray-500">
                We’ll store it privately and reference it during your review.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={state.status === "uploading"}
                className="btn btn-primary disabled:opacity-60"
              >
                {state.status === "uploading" ? "Uploading…" : "Send & Book My Call"}
              </button>
              <a
                href="https://calendly.com" // <- swap with your scheduler
                target="_blank"
                className="btn btn-outline"
              >
                Or pick a time
              </a>
            </div>

            {state.status === "success" && (
              <div className="rounded-md bg-green-50 p-3 text-sm text-green-800">
                Thanks! Your file was received. (Private URL: {state.url})
              </div>
            )}
            {state.status === "error" && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-800">
                {state.message}
              </div>
            )}
          </form>
        </FadeIn>
      </div>
    </main>
  );
}
