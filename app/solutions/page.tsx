// app/solutions/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Solutions | Chang Energy",
  description:
    "Transparent procurement, capacity/PLC optimization, utility bill audits, and executive reporting for industrial and multi-site operators.",
};

const pills = ["Enterprise Energy", "Cost Control", "Risk Management"];

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
      </svg>
    ),
    title: "Procurement & Risk Strategy",
    blurb:
      "Balance budget stability with market opportunity. We match block+index, fixed, or hybrid products to your load profile and risk tolerance, then run competitive RFPs to pressure pricing.",
    bullets: [
      "Transparent supplier markups",
      "Data-driven hedge sizing by usage patterns",
      "Terms aligned to operational realities",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
      </svg>
    ),
    title: "Capacity & Transmission Optimization",
    blurb:
      "Manage PLC/NSPL and demand charges with targeted peak alerts and pragmatic curtailment. Stabilize long-term costs without disrupting operations.",
    bullets: [
      "Peak prediction + site playbooks",
      "Year-over-year PLC/NSPL tracking",
      "Verified capacity cost savings",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19h16M4 5h16M9 9h6v6H9z" strokeLinecap="round" />
      </svg>
    ),
    title: "Utility Bill Audit & Recovery",
    blurb:
      "Uncover errors, misapplied tariffs, and supplier pass-throughs. Recover funds and enforce contract compliance with monthly invoice QA going forward.",
    bullets: ["3–7% typical portfolio recoveries", "Pass-through validation", "Clear, auditable findings"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12l6 6L21 6" strokeLinecap="round" />
      </svg>
    ),
    title: "Data, KPI & Executive Reporting",
    blurb:
      "Energy that’s predictable and boring. Dashboards show budget vs. actuals, hedge position, PLC exposure, and verified savings—for finance and ops.",
    bullets: [
      "Budget tracking & variance analysis",
      "Coverage/hedge visibility & risk alerts",
      "Site-level scorecards for multi-site operators",
    ],
  },
];

export default function SolutionsPage() {
  const siteUrl = "https://changenergygroup.com";

  return (
    <div className="bg-white">
      {/* JSON-LD: Services list */}
      <Script id="schema-services" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Service",
              name: "Energy Procurement & Risk Strategy",
              url: `${siteUrl}/solutions`,
              description:
                "Block+index, fixed, or capped procurement tailored to load profiles and risk tolerance. Competitive supplier RFPs.",
              areaServed: "PJM Interconnection Region",
              serviceType: "Energy procurement services",
              keywords: [
                "Energy procurement services",
                "Energy contract optimization",
                "Commercial energy rates",
                "Business energy audit",
                "Reducing energy costs",
              ],
            },
            {
              "@type": "Service",
              name: "Capacity & Transmission Optimization (PLC/NSPL)",
              url: `${siteUrl}/solutions`,
              description:
                "Peak prediction, pragmatic curtailment, and year-over-year PLC/NSPL tracking to lower demand charges.",
              areaServed: "PJM Interconnection Region",
              serviceType: "Demand response & capacity management",
              keywords: [
                "PJM peak demand charges",
                "Demand response programs",
                "Peak demand management",
                "PJM energy pricing analysis",
              ],
            },
            {
              "@type": "Service",
              name: "Utility Bill Audit & Recovery",
              url: `${siteUrl}/solutions`,
              description:
                "Invoice QA, tariff/rider review, pass-through validation, and documented recoveries.",
              areaServed: "United States",
              serviceType: "Energy bill auditing",
              keywords: [
                "Energy billing solutions",
                "Commercial utility costs",
                "Energy bill auditing",
                "3–7% typical recoveries",
              ],
            },
            {
              "@type": "Service",
              name: "Data, KPI & Executive Reporting",
              url: `${siteUrl}/solutions`,
              description:
                "Dashboards for budget vs. actuals, hedge position, PLC exposure, and verified savings for finance and operations.",
              areaServed: "United States",
              serviceType: "Energy reporting and monitoring",
              keywords: [
                "Energy monitoring systems",
                "Energy rate analysis",
                "Energy consumption reduction",
                "Energy efficiency for businesses",
              ],
            },
          ],
        })}
      </Script>

      {/* Header block */}
      <section className="relative border-b bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-orange-600/10">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2">
              {pills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-white px-3 py-1 text-[13px] font-medium text-orange-700 shadow-sm"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  {p}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Predictable Power. Lower Total Cost.
            </h1>
            <p className="mt-4 max-w-3xl text-gray-700">
              Structure procurement and capacity strategy around your load profile and risk tolerance—then track results
              with operator-friendly reporting.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <article className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-3 text-white shadow-md ring-1 ring-white/10">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                      <p className="mt-2 text-gray-600">{s.blurb}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 text-[15px] text-gray-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <svg viewBox="0 0 20 20" className="mt-[2px] h-4 w-4 text-orange-600" fill="currentColor">
                          <path d="M16.7 5.3a1 1 0 00-1.4-1.4L8 11.17 4.7 7.88a1 1 0 10-1.4 1.42l4 4a1 1 0 001.4 0l8-8z" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="mt-10 rounded-2xl border bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Ready to pressure-test your setup?</h4>
                  <p className="mt-1 text-gray-700">
                    We’ll review invoices and contracts, surface savings opportunities, and outline a stabilization plan.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-[15px] font-semibold text-white shadow-sm hover:bg-black/90"
                >
                  Request a Consultation
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
