// app/resources/energy-budget-template/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Energy Budget Template | Resources | Chang Energy",
  description:
    "A simple model for budget vs. actuals with variance explanations and KPI rollups.",
};

export default function Page() {
  const siteUrl = "https://changenergygroup.com";

  return (
    <main className="px-6 py-12">
      {/* JSON-LD: Breadcrumb + HowTo */}
      <Script id="schema-budget-breadcrumbs" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Resources", item: `${siteUrl}/resources` },
            { "@type": "ListItem", position: 2, name: "Energy Budget Template", item: `${siteUrl}/resources/energy-budget-template` },
          ],
        })}
      </Script>
      <Script id="schema-budget-howto" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Energy Budget Template",
          description:
            "Track budget vs. actuals, explain variances, and keep stakeholders aligned. Use site-level scorecards and a simple roll-up for finance.",
          url: `${siteUrl}/resources/energy-budget-template`,
          totalTime: "PT10M",
          step: [
            { "@type": "HowToStep", name: "Enter monthly usage & rates" },
            { "@type": "HowToStep", name: "Track actuals and PLC costs" },
            { "@type": "HowToStep", name: "Record variance explanations" },
          ],
          tool: ["Excel", "Invoices"],
        })}
      </Script>

      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-[#F97316]/10 px-2.5 py-1 text-xs font-medium text-[#F97316]">
            Template
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Energy Budget Template
          </h1>
          <p className="mt-3 text-gray-700">
            Track budget vs. actuals, explain variances, and keep stakeholders aligned. Use site-level scorecards and a
            simple roll-up for finance.
          </p>
        </FadeIn>

        <div className="mt-8 space-y-6">
          <FadeIn delay={100}>
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Template structure</h2>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>Inputs: volume, price, PLC/NSPL, tariffs</li>
                <li>Outputs: budget, actuals, variance, coverage</li>
                <li>Scorecards: site KPIs and notes</li>
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
