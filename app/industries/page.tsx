// app/industries/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries | Chang Energy",
  description:
    "Energy strategies for cold storage, manufacturing, multi-site chains, healthcare, offices, restaurants, and more across PA, OH, TX, and New England.",
};

const SITE_URL = "https://www.changenergygroup.com";

const groups = [
  {
    title: "Cold Storage",
    href: "/industries/cold-storage",
    blurb:
      "PLC management and demand strategy that respects food safety and warehouse reality — alerts when it matters, quiet when it doesn't.",
    bullets: [
      "Peak prediction & practical curtailment windows",
      "Block+index sizing that fits seasonal load profiles",
      "Site scorecards and clear reporting",
    ],
  },
  {
    title: "Manufacturing",
    blurb:
      "Procurement and capacity strategy tied to production schedules and shift patterns — cost control without disrupting throughput.",
    bullets: [
      "Hedge coverage aligned to risk tolerance",
      "PLC/NSPL reduction playbooks that avoid downtime",
      "Budget tracking & variance explanations",
    ],
  },
  {
    title: "Multi-Site Chains",
    blurb:
      "Consistent pricing, clear reporting, and fast onboarding for new locations. Portfolio visibility with local constraints handled.",
    bullets: [
      "Portfolio-level contracts with local constraints handled",
      "Operator-friendly KPI scorecards",
      "Invoice QA and exception reporting each month",
    ],
  },
  {
    title: "Healthcare",
    blurb:
      "Reliability first. We reduce demand charges and audit billing while protecting patient-critical operations.",
    bullets: [
      "Conservative risk posture & capacity planning",
      "Tariff review and rider optimization",
      "Budget confidence for multi-facility systems",
    ],
  },
  {
    title: "Restaurants & Chains",
    blurb:
      "High-usage kitchens with thin margins. We benchmark rates, time contracts to avoid spikes, and keep bills predictable.",
    bullets: [
      "Competitive supplier bidding with transparent markups",
      "Contract timing around rate cycles",
      "Multi-location invoice consistency",
    ],
  },
  {
    title: "Offices & Commercial",
    blurb:
      "For building managers and tenants who need clean budgets and zero drama. Portfolio reporting that finance actually reads.",
    bullets: [
      "Budget vs. actuals tracking",
      "Green-e renewable options where available",
      "Single point of contact per portfolio",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* JSON-LD: Industry Service + Audience */}
      <Script id="schema-industries" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Commercial & Industrial Energy Management",
          url: `${SITE_URL}/industries`,
          description:
            "Energy strategies for cold storage, manufacturing, multi-site chains, healthcare, offices, and restaurants.",
          areaServed: ["Pennsylvania", "Ohio", "Texas", "New England", "PJM Interconnection Region", "ERCOT"],
          audience: [
            { "@type": "BusinessAudience", name: "Manufacturing companies" },
            { "@type": "BusinessAudience", name: "Cold storage & warehousing" },
            { "@type": "BusinessAudience", name: "Multi-site retail & restaurants" },
            { "@type": "BusinessAudience", name: "Healthcare systems" },
            { "@type": "BusinessAudience", name: "Commercial offices" },
          ],
          keywords: [
            "Energy management for manufacturers",
            "Energy solutions for restaurants",
            "Energy efficiency for warehouses",
            "Energy for commercial buildings",
          ],
          provider: { "@type": "Organization", name: "Chang Energy Group" },
        })}
      </Script>

      <section className="band-dark border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_80%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <FadeIn>
            <span className="eyebrow">Industries</span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Strategies built around how your sites run
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              Budgets stay predictable without slowing production, service, or
              patient care — across Pennsylvania, Ohio, Texas, and New England.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((g, i) => (
              <FadeIn key={g.title} delay={i * 70}>
                <Link href={g.href ?? "/contact"} className="block h-full">
                  <article className="card card-hover group relative h-full p-6">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
                    <h3 className="flex items-center justify-between text-lg font-semibold text-slate-900">
                      {g.title}
                      {g.href && (
                        <span className="text-brand-600 transition-transform group-hover:translate-x-1" aria-hidden>
                          →
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 text-[15px] text-slate-600">{g.blurb}</p>
                    <ul className="mt-5 space-y-2.5 text-[15px] text-slate-700">
                      {g.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <svg viewBox="0 0 20 20" className="mt-[3px] h-4 w-4 flex-none text-brand-600" fill="currentColor" aria-hidden="true">
                            <path d="M16.7 5.3a1 1 0 00-1.4-1.4L8 11.17 4.7 7.88a1 1 0 10-1.4 1.42l4 4a1 1 0 001.4 0l8-8z" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="band-dark mt-12 rounded-3xl p-8 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_240px_at_20%_0px,rgba(249,115,22,0.16),transparent)]"
              />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                    Want a quick benchmark for your industry?
                  </h4>
                  <p className="mt-2 max-w-2xl text-slate-300">
                    Send a recent invoice. We&apos;ll show where costs can be
                    stabilized or lowered — free, no obligation.
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
