// app/industries/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Industries | Chang Energy",
  description:
    "Energy strategy for manufacturers, cold storage, healthcare, multi-site operators, and local businesses. Lower total cost without sacrificing stability.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page header (no hero image; keep the focus on message) */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight">Industries</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-700">
            Volatile power markets shouldn’t dictate your margins. Chang Energy helps
            industrial, commercial, and multi-site operators turn energy volatility into
            predictable budgets — with transparent procurement, capacity management, and
            disciplined data tracking.
          </p>
        </FadeIn>
      </section>

      {/* Story section */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl border p-8">
              <h2 className="text-2xl font-semibold">Built for Real Operations</h2>
              <p className="mt-3 text-gray-700">
                Fixed isn’t always safe, and index isn’t always cheap. We design block+index,
                fixed, or capped strategies around your load profile and risk tolerance — then
                run competitive RFPs that put real pressure on suppliers. Our capacity / PLC
                playbooks reduce demand charges without operational disruption.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Transparent pricing and markup visibility</li>
                <li>• Hedge size aligned to usage patterns & peaks</li>
                <li>• PLC/NSPL reduction with practical curtailment by site</li>
                <li>• Operator-friendly dashboards and KPIs</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="rounded-2xl border p-8">
              <h2 className="text-2xl font-semibold">Who We Help</h2>
              <p className="mt-3 text-gray-700">
                From enterprise portfolios to growing regional brands, our job is to keep power
                costs predictable and boring — so your teams can focus on production and service,
                not the markets.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border p-4">Manufacturing & Heavy Industrial</div>
                <div className="rounded-xl border p-4">Cold Storage & Food Processing</div>
                <div className="rounded-xl border p-4">Healthcare & Life Sciences</div>
                <div className="rounded-xl border p-4">Distribution & Logistics</div>
                <div className="rounded-xl border p-4">Multi-Site & Franchise Operations</div>
                <div className="rounded-xl border p-4">Commercial & Office Campuses</div>
                <div className="rounded-xl border p-4">Retail, QSR, & Local Restaurants</div>
                <div className="rounded-xl border p-4">Municipal & Education</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Outcomes / proof mini-grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <FadeIn>
          <h3 className="text-xl font-semibold">What changes for your team</h3>
        </FadeIn>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <FadeIn>
            <div className="rounded-2xl border p-6">
              <div className="text-4xl font-bold">3–7%</div>
              <div className="mt-2 text-gray-700">Typical bill-audit recovery</div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl border p-6">
              <div className="text-4xl font-bold">PJM / ERCOT</div>
              <div className="mt-2 text-gray-700">Peak alerts & PLC playbooks</div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="rounded-2xl border p-6">
              <div className="text-4xl font-bold">40+</div>
              <div className="mt-2 text-gray-700">Active suppliers in our RFPs</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">Want a plan matched to your operations?</h4>
            <p className="text-gray-600 mt-1">
              We’ll review your invoices, load profile, and contract — then show proven options
              to stabilize costs without paying a premium.
            </p>
          </div>
          <a href="/contact" className="btn btn-primary">Book a Strategy Call</a>
        </div>
      </section>
    </main>
  );
}
