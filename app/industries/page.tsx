// app/industries/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Industries | Chang Energy",
  description:
    "Strategies that match how your sites actually run—so budgets stay predictable without slowing production or service.",
};

type Item = {
  title: string;
  body: string;
  bullets: string[];
};

const sections: Item[] = [
  {
    title: "Cold Storage",
    body:
      "PLC management and demand strategy that respects food safety and warehouse reality—alerts when it matters, quiet when it doesn’t.",
    bullets: [
      "Peak prediction & brief, practical curtailment windows",
      "Block+index sizing that fits seasonal load profiles",
      "Site scorecards and verified savings",
    ],
  },
  {
    title: "Manufacturing",
    body:
      "Procurement and capacity strategy tied to production schedules and shift patterns—cost control without disrupting throughput.",
    bullets: [
      "Hedge/coverage aligned to operational risk tolerance",
      "PLC/NSPL reduction playbooks that avoid downtime",
      "Budget tracking & variance explanations for finance",
    ],
  },
  {
    title: "Multi-Site Chains",
    body:
      "Consistent pricing, clear reporting, and fast onboarding for new locations.",
    bullets: [
      "Portfolio-level contracts with local constraints handled",
      "Operator-friendly dashboards & KPI scorecards",
      "Invoice QA and exception reporting each month",
    ],
  },
  {
    title: "Healthcare",
    body:
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
    <main className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Industries</h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            We build strategies that match how your sites actually run—so your budget stays
            predictable without slowing production or service.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={i * 80}>
              <article className="card p-7">
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-brand/10 p-2 text-brand">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">{s.title}</h2>
                    <p className="mt-2 text-gray-600">{s.body}</p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                      {s.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="mt-12 rounded-2xl border bg-white p-8 text-center">
            <h3 className="text-lg font-semibold">Want a quick benchmark?</h3>
            <p className="mt-1 text-gray-600">
              Send a recent invoice and load profile. We’ll show where costs can be stabilized or lowered.
            </p>
            <a href="/contact" className="mt-5 inline-flex btn btn-primary px-4 py-2">
              Start My Audit
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
