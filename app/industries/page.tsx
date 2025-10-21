// app/industries/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Industries | Chang Energy",
  description:
    "Energy strategies for cold storage, manufacturing, multi-site chains, and healthcare—cost control that fits real operations.",
};

function Bullet({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-2 text-sm text-gray-700"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />{children}</li>;
}

export default function IndustriesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-6">
          <FadeIn>
            <h1 className="text-4xl font-bold text-gray-900">Industries</h1>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              We build strategies that match how your sites actually run—so your budget stays
              predictable without slowing production or service.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 grid gap-8 md:grid-cols-2">
        {/* Cold Storage */}
        <FadeIn>
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Cold Storage</h2>
            <p className="mt-3 text-gray-700">
              PLC management and demand strategy that respects food safety
              and warehouse reality—alerts when it matters, quiet when it doesn’t.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Peak prediction & brief, practical curtailment windows</Bullet>
              <Bullet>Block+index sizing that fits seasonal load profiles</Bullet>
              <Bullet>Site scorecards and verified savings</Bullet>
            </ul>
          </section>
        </FadeIn>

        {/* Manufacturing */}
        <FadeIn delay={100}>
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Manufacturing</h2>
            <p className="mt-3 text-gray-700">
              Procurement and capacity strategy tied to production schedules and shift patterns—cost
              control without disrupting throughput.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Hedge/coverage aligned to operational risk tolerance</Bullet>
              <Bullet>PLC/NSPL reduction playbooks that avoid downtime</Bullet>
              <Bullet>Budget tracking & variance explanations for finance</Bullet>
            </ul>
          </section>
        </FadeIn>

        {/* Multi-Site / QSR / Retail */}
        <FadeIn delay={150}>
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Multi-Site Chains</h2>
            <p className="mt-3 text-gray-700">
              Consistent pricing, clear reporting, and fast onboarding for new locations.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Portfolio-level contracts with local constraints handled</Bullet>
              <Bullet>Operator-friendly dashboards & KPI scorecards</Bullet>
              <Bullet>Invoice QA and exception reporting each month</Bullet>
            </ul>
          </section>
        </FadeIn>

        {/* Healthcare */}
        <FadeIn delay={200}>
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Healthcare</h2>
            <p className="mt-3 text-gray-700">
              Reliability first. We reduce demand charges and audit billing while protecting patient-
              critical operations.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Conservative risk posture & capacity planning</Bullet>
              <Bullet>Tariff review, rider optimization, and recoveries</Bullet>
              <Bullet>Budget confidence for multi-facility systems</Bullet>
            </ul>
          </section>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <FadeIn delay={250}>
          <section className="rounded-2xl border bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Want a quick benchmark?</h3>
              <p className="mt-1 text-gray-600">
                Send a recent invoice and load profile. We’ll show where costs can be stabilized or lowered.
              </p>
            </div>
            <a className="btn btn-primary" href="/contact">Start My Audit</a>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
