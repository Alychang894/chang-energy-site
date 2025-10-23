// app/industries/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Industries | Chang Energy",
  description:
    "Energy strategies for cold storage, manufacturing, multi-site chains, healthcare, offices, restaurants, and more.",
};

const groups = [
  {
    title: "Cold Storage",
    blurb:
      "PLC management and demand strategy that respects food safety and warehouse reality—alerts when it matters, quiet when it doesn’t.",
    bullets: [
      "Peak prediction & brief, practical curtailment windows",
      "Block+index sizing that fits seasonal load profiles",
      "Site scorecards and verified savings",
    ],
  },
  {
    title: "Manufacturing",
    blurb:
      "Procurement and capacity strategy tied to production schedules and shift patterns—cost control without disrupting throughput.",
    bullets: [
      "Hedge/coverage aligned to risk tolerance",
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
      "Operator-friendly dashboards & KPI scorecards",
      "Invoice QA and exception reporting each month",
    ],
  },
  {
    title: "Healthcare",
    blurb:
      "Reliability first. We reduce demand charges and audit billing while protecting patient-critical operations.",
    bullets: [
      "Conservative risk posture & capacity planning",
      "Tariff review, rider optimization, and recoveries",
      "Budget confidence for multi-facility systems",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      <section className="border-b bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-orange-600/10">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <FadeIn>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Industries</h1>
            <p className="mt-4 max-w-3xl text-gray-700">
              We build strategies that match how your sites actually run—so your budget stays predictable without slowing
              production or service.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {groups.map((g, i) => (
              <FadeIn key={g.title} delay={i * 80}>
                <article className="relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{g.title}</h3>
                  <p className="mt-2 text-gray-700">{g.blurb}</p>
                  <ul className="mt-5 space-y-2 text-[15px] text-gray-700">
                    {g.bullets.map((b) => (
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
                  <h4 className="text-lg font-semibold text-gray-900">Want a quick benchmark?</h4>
                  <p className="mt-1 text-gray-700">
                    Send a recent invoice and load profile. We’ll show where costs can be stabilized or lowered.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-[15px] font-semibold text-white shadow-sm hover:bg-black/90"
                >
                  Start My Audit
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
