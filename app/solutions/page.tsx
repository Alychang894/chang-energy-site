// app/solutions/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Transparent energy procurement, capacity and demand-charge optimization, utility bill audits, and executive reporting for businesses across PA, OH, TX, and New England.",
  alternates: {
    canonical: "/solutions",
  },
};

const SITE_URL = "https://www.changenergygroup.com";

const pills = ["Transparent Pricing", "Demand Strategy", "Bill Audits"];

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 6a3 3 0 0 1 3-3h3v2H6a1 1 0 0 0-1 1v3H3V6Zm15-3a3 3 0 0 1 3 3v3h-2V6a1 1 0 0 0-1-1h-3V3h3ZM3 15h2v3a1 1 0 0 0 1 1h3v2H6a3 3 0 0 1-3-3v-3Zm18 0v3a3 3 0 0 1-3 3h-3v-2h3a1 1 0 0 0 1-1v-3h2Z" />
      </svg>
    ),
    title: "Procurement & Risk Strategy",
    blurb:
      "Balance budget stability with market opportunity. We match block+index, fixed, or hybrid products to your load profile and risk tolerance — then run competitive bids to pressure pricing.",
    bullets: [
      "Supplier bids with transparent markups",
      "Hedge sizing matched to your usage patterns",
      "Terms aligned to operational realities",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Capacity & Demand Optimization",
    blurb:
      "Manage PLC/NSPL tags and demand charges with targeted peak alerts and pragmatic curtailment. Lower long-term costs without disrupting operations.",
    bullets: [
      "Peak prediction + site-specific playbooks",
      "Year-over-year PLC/NSPL tracking",
      "Curtailment windows that respect production",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5h16v14H4z M8 9h8M8 13h8M8 17h5" strokeLinecap="round" />
      </svg>
    ),
    title: "Utility Bill Audit & Recovery",
    blurb:
      "Uncover billing errors, misapplied tariffs, and supplier pass-throughs. Recover what's yours — then keep it clean with monthly invoice QA.",
    bullets: [
      "Line-by-line invoice review",
      "Tariff, rider & pass-through validation",
      "Clear, documented findings",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" strokeLinecap="round" />
      </svg>
    ),
    title: "Reporting & Budget Tracking",
    blurb:
      "Energy that's predictable and boring — in a good way. Budget vs. actuals, hedge position, and demand exposure in reports finance and ops can actually read.",
    bullets: [
      "Budget tracking & variance explanations",
      "Hedge coverage visibility & risk alerts",
      "Site-level scorecards for multi-site teams",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* JSON-LD: Services list */}
      <Script id="schema-services" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: solutions.map((s) => ({
            "@type": "Service",
            name: s.title,
            url: `${SITE_URL}/solutions`,
            description: s.blurb,
            areaServed: ["Pennsylvania", "Ohio", "Texas", "New England"],
            provider: { "@type": "Organization", name: "Chang Energy Group" },
          })),
        })}
      </Script>

      {/* Header block */}
      <section className="band-dark border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2">
              {pills.map((p) => (
                <span key={p} className="badge-dark">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {p}
                </span>
              ))}
            </div>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Predictable power. Lower total cost.
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              Structure procurement and demand strategy around your load profile
              and risk tolerance — then track results with reporting your whole
              team understands.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <article className="card card-hover group relative h-full overflow-hidden p-7">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600" />
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-slate-950 p-3 text-brand-400 shadow-sm transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{s.blurb}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-[15px] text-slate-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <svg viewBox="0 0 20 20" className="mt-[3px] h-4 w-4 flex-none text-brand-600" fill="currentColor" aria-hidden="true">
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

          <FadeIn delay={300}>
            <div className="band-dark mt-12 rounded-3xl p-8 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_240px_at_80%_0px,rgba(249,115,22,0.16),transparent)]"
              />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                    Ready to pressure-test your setup?
                  </h4>
                  <p className="mt-2 max-w-2xl text-slate-300">
                    We&apos;ll review your invoices and contracts, surface
                    savings opportunities, and outline a stabilization plan —
                    free.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="btn btn-primary">
                    Get My Free Bill Review
                  </Link>
                  <a href="mailto:ben@changenergygroup.com" className="btn btn-outline-light">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
