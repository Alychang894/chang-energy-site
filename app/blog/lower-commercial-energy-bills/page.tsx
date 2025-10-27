// app/blog/lower-commercial-energy-bills/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Lower Commercial Energy Bills (Without Going 100% Fixed)",
  description:
    "Block+index basics, risk posture choices, and the contract terms that matter when markets move.",
};

export default function Page() {
  const siteUrl = "https://changenergygroup.com";
  const title = "How to Lower Commercial Energy Bills (Without Going 100% Fixed)";

  return (
    <main className="px-6 py-12">
      {/* JSON-LD: Article + breadcrumbs */}
      <Script id="schema-lowerbills-article" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          datePublished: "2025-10-10",
          author: { "@type": "Organization", name: "Chang Energy" },
          url: `${siteUrl}/blog/lower-commercial-energy-bills`,
        })}
      </Script>
      <Script id="schema-lowerbills-breadcrumbs" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Blog", item: `${siteUrl}/blog` },
            { "@type": "ListItem", position: 2, name: title, item: `${siteUrl}/blog/lower-commercial-energy-bills` },
          ],
        })}
      </Script>

      <article className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-xs text-gray-500">Oct 10, 2025 • 4 min read</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
          <p className="mt-3 text-gray-700">
            Fixed isn’t always safer. Index isn’t always cheaper. Here’s a straightforward path to lower total cost
            without gambling your budget.
          </p>
        </FadeIn>

        <div className="prose prose-gray mt-8 max-w-none">
          <h2>1) Size the block to your base-load</h2>
          <p>Use recent meter data and remove anomalies. Start conservative; you can add later.</p>

          <h2>2) Match risk posture to stakeholders</h2>
          <ul>
            <li>Conservative: higher block, tighter bands</li>
            <li>Balanced: mid block, caps or collars</li>
            <li>Opportunistic: smaller block, wider bands</li>
          </ul>

          <h2>3) Lock down the right terms</h2>
          <p>Swing/bandwidth, change-in-law, pass-throughs, and markup transparency matter most when markets move.</p>

          <hr />
          <p className="text-sm text-gray-600">
            Want examples using your load profile? Send a recent invoice; we’ll size the block with you.
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
