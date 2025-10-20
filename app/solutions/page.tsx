// app/solutions/page.tsx
import type { Metadata } from "next";
import Hero from "../../components/Hero";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Solutions | Chang Energy",
  description:
    "Transparent procurement, block+index strategies, capacity/PLC optimization, utility bill audits, and actionable reporting for manufacturers and multi-site operators.",
};

export default function SolutionsPage() {
  return (
    <>
      <Hero
        title="Predictable Power. Lower Total Cost."
        subtitle="You need budget stability without paying a premium. We structure procurement and capacity strategy around your load profile and risk tolerance—then track results with operator-friendly reporting."
        imageUrl="/images/hero-power.jpg"
        ctas={[
          { label: "Schedule a Free Audit", href: "/contact", variant: "primary" },
          { label: "See Case Outcomes", href: "/resources", variant: "outline" },
        ]}
      />

      {/* Quick links */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "#procurement", label: "Procurement & Risk" },
            { href: "#capacity", label: "Capacity & Transmission" },
            { href: "#audit", label: "Bill Audit & Recovery" },
            { href: "#reporting", label: "Data & Reporting" },
          ].map((x, i) => (
            <a
              key={x.href}
              href={x.href}
              className="rounded-xl border p-4 text-sm font-medium hover:shadow"
            >
              {x.label}
            </a>
          ))}
        </div>
      </section>

      {/* Solutions grid */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-10">What We Deliver</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Procurement & Risk */}
            <FadeIn delay={0}>
              <div id="procurement" className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Procurement & Risk Strategy</h3>
                <p className="mt-3 text-gray-700">
                  Fixed isn’t always safe—and index isn’t always cheap. We structure
                  block+index, fixed, or capped products to match your tolerance and load shape,
                  then run competitive RFPs to create real supplier pressure.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• Price transparency and markup visibility</li>
                  <li>• Hedge size informed by usage patterns & peaks</li>
                  <li>• Terms aligned to operational realities (swing, bandwidth, pass-throughs)</li>
                </ul>
              </div>
            </FadeIn>

            {/* Capacity & Transmission */}
            <FadeIn delay={100}>
              <div id="capacity" className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Capacity & Transmission (PLC / NSPL)</h3>
                <p className="mt-3 text-gray-700">
                  Capacity and transmission often rival the energy itself. We manage peak alerts,
                  targeted curtailment, and planning so your PLC/NSPL is minimized without
                  operational disruption.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• Peak prediction and alerting (PJM / ERCOT)</li>
                  <li>• Practical curtailment playbooks by site</li>
                  <li>• Year-over-year PLC/NSPL tracking and savings attribution</li>
                </ul>
              </div>
            </FadeIn>

            {/* Bill Audit & Recovery */}
            <FadeIn delay={200}>
              <div id="audit" className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Utility Bill Audit & Recovery</h3>
                <p className="mt-3 text-gray-700">
                  We review tariffs, riders, taxes, meter data, and supplier invoices to uncover
                  errors and misapplied rates—then pursue credits and corrections.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• 3–7% typical recoveries across portfolios</li>
                  <li>• Contract compliance & pass-through validation</li>
                  <li>• Ongoing monthly invoice QA</li>
                </ul>
              </div>
            </FadeIn>

            {/* Data & Reporting */}
            <FadeIn delay={300}>
              <div id="reporting" className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Data, KPI & Operator Reporting</h3>
                <p className="mt-3 text-gray-700">
                  Clear dashboards for finance and operations: budget vs. actuals, hedge position,
                  PLC exposure, and verified savings—so energy stays predictable and boring.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• Budget tracking & variance explanations</li>
                  <li>• Hedge/coverage visibility and risk alerts</li>
                  <li>• Site-level scorecards for multi-site operators</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* CTA */}
          <FadeIn delay={400}>
            <div className="mt-12 rounded-2xl border bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold">Ready to pressure-test your current setup?</h4>
                <p className="text-gray-600 mt-1">
                  We’ll audit recent invoices and your contract to surface savings opportunities—
                  then show a clear plan for stabilizing costs.
                </p>
              </div>
              <a href="/contact" className="btn btn-primary">Book a Strategy Call</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
