// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Short, practical posts for production and facilities leaders: peak demand, procurement strategy, and budget control.",
  alternates: { canonical: "/blog" },
};

type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  summary: string;
  tag?: string;
};

const posts: Post[] = [
  {
    slug: "commercial-electric-bill-decoded",
    title: "Your Commercial Electric Bill, Decoded: The 3 Lines That Actually Matter",
    date: "2026-10-05",
    summary:
      "Supply, delivery, demand — what each line of your business electric bill means, which one you can actually negotiate, and five things to check before winter.",
    tag: "Billing",
  },
  {
    slug: "energy-contract-terms-translated",
    title: "Your Energy Contract, Translated: 7 Terms That Quietly Cost You Money",
    date: "2026-10-02",
    summary:
      "Evergreen clauses, bandwidth, early termination fees — the contract terms nobody explains to small-business owners, translated into plain English.",
    tag: "Contracts",
  },
  {
    slug: "winter-energy-checklist",
    title: "5 Energy Moves to Make Before Winter",
    date: "2026-09-30",
    summary:
      "Winter is when electric bills surprise small businesses. Five practical moves — contract check, rate review, and more — to make before the cold hits.",
    tag: "Seasonal",
  },
  {
    slug: "pjm-peak-demand-charges",
    title: "PJM Peak Demand Charges: 3 Moves to Cut PLC Without Disrupting Ops",
    date: "2025-10-15",
    summary:
      "How to predict peaks, use short curtailment windows, and trend PLC/NSPL year-over-year so finance trusts the savings.",
    tag: "Peak Demand",
  },
  {
    slug: "lower-commercial-energy-bills",
    title: "How to Lower Commercial Energy Bills (Without Going 100% Fixed)",
    date: "2025-10-10",
    summary:
      "Block+index basics, risk posture choices, and the contract terms that matter when markets move.",
    tag: "Procurement",
  },
];

const SITE_URL = "https://www.changenergygroup.com";

export default function BlogIndexPage() {
  return (
    <main>
      {/* JSON-LD: Blog listing */}
      <Script id="schema-blog-list" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Chang Energy Blog",
          url: `${SITE_URL}/blog`,
        })}
      </Script>

      {/* Header band */}
      <section className="band-dark border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_80%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
          <FadeIn>
            <span className="eyebrow">Blog</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Energy strategy, in plain English
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              Short, operator-first posts on procurement, capacity, and budget
              control — no jargon, no sales pitch.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 80}>
              <Link
                href={`/blog/${p.slug}`}
                className="card card-hover group block h-full p-6"
              >
                <div className="flex items-center gap-3">
                  {p.tag && <span className="badge-brand">{p.tag}</span>}
                  <time className="text-xs text-slate-500" dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                  {p.title}
                </h2>
                <p className="mt-2 text-[15px] text-slate-600">{p.summary}</p>
                <span className="link-brand mt-4 inline-flex items-center gap-1 text-sm">
                  Read article
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
