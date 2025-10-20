// app/solutions/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Solutions | Chang Energy",
  description:
    "Chang Energy provides transparent procurement, capacity and transmission management, bill audits, and reporting solutions built for real operational needs.",
};

export default function SolutionsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Solutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Chang Energy helps industrial, commercial, and multi-site operators control energy
            costs through transparent procurement, peak management, and disciplined data tracking.
          </p>
        </FadeIn>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Procurement & Risk */}
          <FadeIn delay={0}>
            <div id="procurement" className="bg-white rounded-2xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900">Procurement & Risk Strategy</h3>
              <p className="mt-3 text-gray-700">
                We structure contracts to balance budget stability and market opportunity.
                Block+index, fixed, or hybrid — every product is customized to your load and
                tolerance for risk.
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• Transparent supplier markups</li>
                <li>• Data-driven hedge sizing</li>
                <li>• Competitive supplier RFP process</li>
              </ul>
            </div>
          </FadeIn>

          {/* Capacity & Transmission */}
          <FadeIn delay={100}>
            <div id="capacity" className="bg-white rounded-2xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900">Capacity & Transmission Optimization</h3>
              <p className="mt-3 text-gray-700">
                We manage PLC/NSPL tags through targeted peak alerts and load adjustments — reducing
                demand charges and stabilizing long-term costs.
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• Peak prediction & curtailment planning</li>
                <li>• Year-over-year PLC/NSPL tracking</li>
                <li>• Verified capacity cost savings</li>
              </ul>
            </div>
          </FadeIn>

          {/* Bill Audit & Recovery */}
          <FadeIn delay={200}>
            <div id="audit" className="bg-white rounded-2xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900">Utility Bill Audit & Recovery</h3>
              <p className="mt-3 text-gray-700">
                We uncover billing errors, misapplied tariffs, and supplier pass-throughs — then
                recover funds and enforce contract compliance.
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• 3–7% typical recoveries</li>
                <li>• Monthly invoice QA</li>
                <li>• Full transparency in audit results</li>
              </ul>
            </div>
          </FadeIn>

          {/* Data & Reporting */}
          <FadeIn delay={300}>
            <div id="reporting" className="bg-white rounded-2xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900">Data, KPI & Reporting</h3>
              <p className="mt-3 text-gray-700">
                We make energy data actionable. Dashboards provide visibility into budget, hedge
                position, PLC exposure, and verified savings.
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• Budget vs. actual variance tracking</li>
                <li>• Site-level KPI scorecards</li>
                <li>• Multi-site reporting for operators</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="mt-16 rounded-2xl bg-white border p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Ready to audit your current setup?
              </h4>
              <p className="text-gray-600 mt-1">
                Send us recent invoices or a contract summary — we’ll identify savings opportunities
                and build a stability plan.
              </p>
            </div>
            <a href="/contact" className="btn btn-primary">
              Start My Audit
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
