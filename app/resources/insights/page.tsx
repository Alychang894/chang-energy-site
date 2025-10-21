// app/resources/insights/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../../components/FadeIn";
import { POSTS } from "./_data";

export const metadata: Metadata = {
  title: "Insights | Chang Energy",
  description:
    "Short, operator-friendly articles on procurement, PLC/NSPL, and energy budgeting.",
};

export default function InsightsPage() {
  return (
    <main className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Insights</h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Simple, practical reads—no fluff and no sales pitch.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 80}>
              <a href={`/resources/insights/${p.slug}`} className="card block p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {p.tags?.map((t) => (
                    <span key={t} className="badge-brand">{t}</span>
                  ))}
                  <span className="ml-auto">{new Date(p.date).toLocaleDateString()}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h2>
                <p className="mt-2 text-gray-600">{p.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm link-brand">
                  Read <span aria-hidden>→</span>
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
