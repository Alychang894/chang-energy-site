// app/solutions/page.tsx
import type { Metadata } from "next";
import Hero from "../../components/Hero";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Solutions | Chang Energy",
  description:
    "Chang Energy provides transparent energy procurement, capacity and transmission management, bill audits, and reporting solutions built for real operational needs.",
};

export default function SolutionsPage() {
  return (
    <>
      <Hero
        title="Energy Strategy Built for Real Operations"
        subtitle="We help manufacturers, cold storage facilities, and multi-site operators turn energy volatility into predictable, data-driven budgets — without sacrificing flexibility or uptime."
        imageUrl="/images/hero-industrial-dark.jpg"
        ctas={[
          { label: "Book a Strategy Call", href: "/contact", variant: "primary" },
          { label: "See Cost Reduction Playbooks", href: "/resources", variant: "outline" },
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
          ].map((x) => (
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
            <h2 className="text-3xl font-bold mb-10 text-gray-900">
              Comprehensive Solutions That Deliver Control and Savings
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Procurement & Risk */}
            <FadeIn delay={0}>
              <div id="procurement" className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Procurement & Risk Strategy</h3>
                <p className="mt-3 text-gray-700">
                  Fixed isn’t always safe — and index isn’t always cheap. We design block+index,
                  fixed, or hybrid products tailored to your load profile and tolerance for risk,
                  then run supplier competitions to keep pricing honest.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• Transparent supplier markups</li>
                  <li>• Data-informed hedge sizing</li>
                  <li>• Terms aligned to operational realities</li>
                </ul>
              </div>
            </FadeIn>

            {/* Capacity & Transmission */}
            <FadeIn delay={100}>
              <div id="capacity" className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Capacity & Transmission Optimization</h3>
                <p className="mt-3 text-gray-700">
                  Capacity and transmission often make up 30–40% of your bill. We help you manage
                  peaks, reduce PLC/NSPL tags, and capture predictable savings across your portfolio.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• Peak prediction and curtailment planning</li>
                  <li>• PLC/NSPL management to reduce capacity costs</li>
                  <li>• Ongoing tracking and alerting during peak season</li>
                </ul>
              </div>
            </FadeIn>

            {/* Bill Audit & Recovery */}
            <FadeIn delay={200}>
              <div id="audit" className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Utility Bill Audit & Recovery</h3>
                <p className="mt-3 text-gray-700">
                  Most large accounts overpay between 3–7%. We review invoices, tariffs, and pass-through charges,
                  then recover errors and enforce contract compliance — no savings, no fee.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• Historical bill audits and refunds</li>
                  <li>• Real-time invoice QA each month</li>
                  <li>• Transparent reporting and supplier accountability</li>
                </ul>
              </div>
            </FadeIn>

            {/* Data & Reporting */}
            <FadeIn delay={300}>
              <div id="reporting" className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Data, KPI & Executive Reporting</h3>
                <p className="mt-3 text-gray-700">
                  Energy shouldn’t be guesswork. We deliver clear dashboards for finance, operations,
                  and procurement — budget vs actuals, hedge positions, and KPI progress.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• Budget tracking and variance analysis</li>
                  <li>• Hedge/cov
