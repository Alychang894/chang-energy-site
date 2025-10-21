// app/solutions/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Solutions | Chang Energy",
  description:
    "Transparent procurement, capacity optimization, utility bill audits, and reporting tailored to your operations.",
};

const chips = ["Enterprise Energy", "Cost Control", "Risk Management"];

export default function SolutionsPage() {
  return (
    <main className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-6">
            {chips.map((x) => (
              <span key={x} className="badge-brand">{x}</span>
            ))}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Solutions
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            We help industrial, commercial, and multi-site operators turn energy
            volatility into predictable budgets with transparent procurement,
            peak management, and disciplined reporting.
          </p>
        </FadeIn>

        {/* Section tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {["Procurement & Risk", "Capacity & Transmission", "Bill Audit & Recovery", "Data & Reporting"].map((t) => (
            <a key={t} href={`#${t.toLowerCase().replace(/\s|&/g, "-")}`}
               className="rounded-full border px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand hover:text-brand">
              {t}
            </a>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <article id="procurement---risk" className="card p-7">
              <div className="flex items-start gap-3">
                <span className="rounded-xl bg-brand/10 p-2 text-brand">
                  {/* check icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Procurement & Risk Strategy</h2>
                  <p className="mt-2 text-gray-600">
                    Balance budget stability with market opportunity. We design block+index, fixed,
                    or hybrid strategies to match your load profile and risk tolerance, then run
                    competitive RFPs to pressure pricing.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li>✓ Transparent supplier markups</li>
                    <li>✓ Data-driven hedge sizing by usage patterns</li>
                    <li>✓ Terms aligned to operational realities</li>
                  </ul>
                </div>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={100}>
            <article id="capacity---transmission" className="card p-7">
              <div className="flex items-start gap-3">
                <span className="rounded-xl bg-brand/10 p-2 text-brand">
                  {/* bolt icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Capacity & Transmission Optimization</h2>
                  <p className="mt-2 text-gray-600">
                    Manage PLC/NSPL and demand charges with targeted peak alerts and pragmatic
                    curtailment. Stabilize long-term cost without disrupting operations.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li>✓ Peak prediction & site-specific playbooks</li>
                    <li>✓ Year-over-year PLC/NSPL tracking</li>
                    <li>✓ Verified capacity cost savings</li>
                  </ul>
                </div>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={200}>
            <article id="bill-audit---recovery" className="card p-7">
              <div className="flex items-start gap-3">
                <span className="rounded-xl bg-brand/10 p-2 text-brand">
                  {/* magnifier icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Utility Bill Audit & Recovery</h2>
                  <p className="mt-2 text-gray-600">
                    Uncover errors, misapplied tariffs, and supplier pass-throughs. Recover funds and
                    enforce contract compliance with monthly invoice QA.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li>✓ 3–7% typical portfolio recoveries</li>
                    <li>✓ Contract & pass-through validation</li>
                    <li>✓ Clear documentation of findings</li>
                  </ul>
                </div>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={300}>
            <article id="data---reporting" className="card p-7">
              <div className="flex items-start gap-3">
                <span className="rounded-xl bg-brand/10 p-2 text-brand">
                  {/* chart icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19V5M10 19V9M16 19V13M22 19H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Data, KPI & Executive Reporting</h2>
                  <p className="mt-2 text-gray-600">
                    Predictable, boring energy. Dashboards show budget vs. actuals, hedge position,
                    PLC exposure, and verified savings—for finance and ops.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li>✓ Budget tracking & variance analysis</li>
                    <li>✓ Coverage/hedge visibility & risk alerts</li>
                    <li>✓ Multi-site scorecards</li>
                  </ul>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="mt-12 rounded-2xl border bg-white p-8 text-center">
            <h3 className="text-lg font-semibold">Ready to pressure-test your current setup?</h3>
            <p className="mt-1 text-gray-600">
              We’ll audit recent invoices and your contract to surface savings—then show a clear plan.
            </p>
            <a href="/contact" className="mt-5 inline-flex btn btn-primary px-4 py-2">
              Request a Consultation
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
