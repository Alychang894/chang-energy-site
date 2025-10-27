// app/blog/pjm-peak-demand-charges/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PJM Peak Demand Charges: 3 Moves to Cut PLC Without Disrupting Ops",
  description:
    "Predict peaks, use short curtailment windows, and trend PLC/NSPL so finance trusts the savings.",
};

export default function Page() {
  const siteUrl = "https://changenergygroup.com";
  const title =
    "PJM Peak Demand Charges: 3 Moves to Cut PLC Without Disrupting Ops";

  return (
    <main className="px-6 py-12">
      {/* JSON-LD: Article + breadcrumbs */}
      <Script id="schema-pjm-article" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          datePublished: "2025-10-15",
          author: { "@type": "Organization", name: "Chang Energy" },
          url: `${siteUrl}/blog/pjm-peak-demand-charges`,
        })}
      </Script>
      <Script id="schema-pjm-breadcrumbs" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Blog", item: `${siteUrl}/blog` },
            { "@type": "ListItem", position: 2, name: title, item: `${siteUrl}/blog/pjm-peak-demand-charges` },
          ],
        })}
      </Script>

      <article className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-xs text-gray-500">Oct 15, 2025 • 4 min read</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="mt-3 text-gray-700">
            In PJM, capacity and transmission often rival the energy itself. If your PLC is set by
            one bad hour each summer, here are three practical moves that don’t slow operations.
          </p>
        </FadeIn>

        <div className="prose prose-gray mt-8 max-w-none">
          <h2>1) Predict peaks (don’t spam alerts)</h2>
          <p>
            Use regional indicators and weather to flag likely peaks, then send one clear instruction:
            “Reduce for this 60–120 minute window.” Avoid alert fatigue with crisp start/stop.
          </p>

          <h2>2) Short, practical curtailment windows</h2>
          <p>
            Create site playbooks with safe sequences: what to idle, what to never touch. Target 1–2 hours,
            not half a day. Log actions so savings can be verified later.
          </p>

          <h2>3) Trend PLC/NSPL year-over-year</h2>
          <p>
            Track tags per site and attribute savings back to events and behaviors. Finance signs off when the
            story is clear and repeatable.
          </p>

          <hr />
          <p className="text-sm text-gray-600">
            Want to see how much PLC/NSPL exposure you can avoid next year?
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Link href="/blog" className="text-[#F97316] font-medium">
            ← Back to Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-gray-900 px-4 py-2 text-[15px] font-semibold text-white hover:bg-black/90"
          >
            Request a Consultation
          </Link>
        </div>
      </article>
    </main>
  );
}
