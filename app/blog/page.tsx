// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog | Chang Energy",
  description:
    "Short, practical posts for production and facilities leaders: PJM peak demand, procurement strategy, and budget control.",
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

export default function BlogIndexPage() {
  const siteUrl = "https://changenergygroup.com";

  return (
    <main className="px-6 py-12">
      {/* JSON-LD: Blog listing */}
      <Script id="schema-blog-list" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Chang Energy Blog",
          url: `${siteUrl}/blog`,
        })}
      </Script>

      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Blog
          </h1>
          <p className="mt-3 max-w-3xl text-gray-700">
            Short, operator-first posts on procurement, capacity, and budget control in the PJM region.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <FadeIn key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  {p.tag && (
                    <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-400/20">
                      {p.tag}
                    </span>
                  )}
                  <time
                    className="text-xs text-gray-500"
                    dateTime={p.date}
                  >
                    {new Date(p.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-800">
                  {p.title}
                </h2>
                <p className="mt-2 text-gray-700">{p.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-700">
                  Read →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
