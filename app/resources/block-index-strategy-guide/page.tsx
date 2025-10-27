// app/resources/block-index-strategy-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Block+Index Strategy Guide | Resources | Chang Energy",
  description:
    "When fixed is safer, when index is cheaper, and how to size blocks by risk.",
};

export default function Page() {
  const siteUrl = "https://changenergygroup.com";

  return (
    <main className="px-6 py-12">
      {/* JSON-LD: Breadcrumb + TechArticle */}
      <Script id="schema-blockindex-breadcrumbs" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Resources", item: `${siteUrl}/resources` },
            { "@type": "ListItem", position: 2, name: "Block+Index Strategy Guide", item: `${siteUrl}/resources/block-index-strategy-guide` },
          ],
        })}
      </Script>
      <Script id="schema-blockindex-article" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Block+Index Strategy Guide",
          description:
            "Balance budget stability with market opportunity. Match hedge size to usage pattern and tolerance—then pressure suppliers with a clean RFP.",
          url: `${siteUrl}/resources/block-index-strategy-guide`,
          about: ["Block and index", "Hedge sizing", "Energy procurement"],
          author: { "@type": "Organization", name: "Chang Energy" },
        })}
      </Script>

      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-[#F97316]/10 px-2.5 py-1 text-xs font-medium text-[#F97316]">
            Guide
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Block+Index Strategy Guide
          </h1>
          <p className="mt-3 text-gray-700">
            Balance budget stability with market opportunity. Match hedge size to your usage pattern and tolerance—then
            pressure suppliers with a clean RFP.
          </p>
        </FadeIn>

        <div className="mt-8 space-y-6">
          <FadeIn delay={100}>
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">1) Sizing the block</h2>
              <p className="mt-2 text-gray-700">
                Start with base-load. Use recent meter data and remove abnormal events. Consider seasonal shape and
                operational changes.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={150}>
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">2) Risk posture</h2>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>Conservative: higher block, tighter bands</li>
                <li>Balanced: mid block, caps or collars</li>
                <li>Opportunistic: smaller block, wider bands</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={200}>
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">3) Contract terms that matter</h2>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>Swing/bandwidth, change-in-law, pass-throughs</li>
                <li>Credit thresholds and termination language</li>
                <li>Measurement, reconciliation, and markup visibility</li>
              </ul>
            </section>
          </FadeIn>
        </div>

        <FadeIn delay={250}>
          <div className="mt-8 flex items-center gap-3">
            <Link href="/resources" className="text-[#F97316] font-medium">
              ← Back to Resources
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-gray-900 px-4 py-2 text-[15px] font-semibold text-white hover:bg-black/90"
            >
              Request a Consultation
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
