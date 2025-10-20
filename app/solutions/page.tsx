// app/solutions/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Solutions | Chang Energy",
  description:
    "Energy procurement, capacity & transmission optimization, utility bill audit & recovery, and executive reporting—built for industrial and multi-site operations.",
};

/** --- Minimal inline icons so we don't add new deps --- */
function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center ring-1 ring-indigo-100">
      {children}
    </div>
  );
}
function ShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2l7 3v6c0 5-3.4 9.3-7 11-3.6-1.7-7-6-7-11V5l7-3zM7 9.5l3 3 6-6-1.4-1.4L10 9.7 8.4 8.1 7 9.5z" />
    </svg>
  );
}
function Zap() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}
function Receipt() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M6 2h12l2 2v18l-2-2-2 2-2-2-2 2-2-2-2 2-2-2-2 2V4l2-2zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
    </svg>
  );
}
function Chart() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4 20h16v2H4zM6 10h3v8H6zM11 6h3v12h-3zM16 12h3v6h-3z" />
    </svg>
  );
}
function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
  );
}

export default function SolutionsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header / intro */}
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-6">
          <FadeIn>
            <div className="flex items-center gap-2 text-xs font-medium text-indigo-700">
              <span className="rounded-full bg-indigo-50 px-2 py-1 ring-1 ring-indigo-100">
                Enterprise Energy
              </span>
              <span className="rounded-full bg-indigo-50 px-2 py-1 ring-1 ring-indigo-100">
                Cost Control
              </span>
              <span className="rounded-full bg-indigo-50 px-2 py-1 ring-1 ring-indigo-100">
                Risk Management
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              Solutions
            </h1>
            <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-600">
              We help industrial, commercial, and multi-site operators turn energy volatility
              into predictable budgets with transparent procurement, peak management, and
              disciplined reporting.
            </p>
          </FadeIn>

          {/* Quick nav pills */}
          <FadeIn delay={100}>
            <nav
              className="mt-6 flex flex-wrap gap-2 text-sm"
              aria-label="Solutions quick navigation"
            >
              {[
                { href: "#procurement", label: "Procurement & Risk" },
                { href: "#capacity", label: "Capacity & Transmission" },
                { href: "#audit", label: "Bill Audit & Recovery" },
                { href: "#reporting", label: "Data & Reporting" },
              ].map((x) => (
                <a
                  key={x.href}
                  href={x.href}
                  className="rounded-full border bg-white px-3 py-1.5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                >
                  {x.label}
                </a>
              ))}
            </nav>
          </FadeIn>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        {/* Grid of solutions */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Procurement & Risk */}
          <FadeIn>
            <section
              id="procurement"
              className="group rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <IconWrap>
                  <ShieldCheck />
                </IconWrap>
                <h2 className="text-xl font-semibold text-gray-900">
                  Procurement & Risk Strategy
                </h2>
              </div>
              <p className="mt-3 text-gray-700">
                Balance budget stability with market opportunity. We design block+index,
                fixed, or hybrid strategies to match your load profile and risk tolerance,
                then run competitive RFPs to pressure pricing.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check /> <span>Transparent supplier markups</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check /> <span>Data-driven hedge sizing by usage patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check /> <span>Terms aligned to operational realities</span>
                </li>
              </ul>
            </section>
          </FadeIn>

          {/* Capacity & Transmission */}
          <FadeIn delay={100}>
            <section
              id="capacity"
              className="group rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <IconWrap>
                  <Zap />
                </IconWrap>
                <h2 className="text-xl font-semibold text-gray-900">
                  Capacity & Transmission Optimization
                </h2>
              </div>
              <p className="mt-3 text-gray-700">
                Manage PLC/NSPL and demand charges with targeted peak alerts and
                pragmatic curtailment. Stabilize long-term cost without disrupting
                operations.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check /> <span>Peak prediction & site-specific playbooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check /> <span>Year-over-year PLC/NSPL tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check /> <span>Verified capacity cost savings</span>
                </li>
              </ul>
            </section>
          </FadeIn>

          {/* Bill Audit & Recovery */}
          <FadeIn delay={150}>
            <section
              id="audit"
              className="group rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <IconWrap>
                  <Receipt />
                </IconWrap>
                <h2 className="text-xl font-semibold text-gray-900">
                  Utility Bill Audit & Recovery
                </h2>
              </div>
              <p className="mt-3 text-gray-700">
                Uncover errors, misapplied tariffs, and supplier pass-throughs. We recover
                funds and enforce contract compliance—with monthly invoice QA going forward.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check /> <span>3–7% typical portfolio recoveries</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check /> <span>Contract & pass-through validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check /> <span>Clear documentation of findings</span>
                </li>
              </ul>
            </section>
          </FadeIn>

          {/* Data & Reporting */}
          <FadeIn delay={200}>
            <section
              id="reporting"
              className="group rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <IconWrap>
                  <Chart />
                </IconWrap>
                <h2 className="text-xl font-semibold text-gray-900">
                  Data, KPI & Executive Reporting
                </h2>
              </div>
              <p className="mt-3 text-gray-700">
                Energy that’s predictable and boring. Dashboards show budget vs actuals,
                hedge position, PLC exposure, and verified savings—for finance and ops.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check /> <span>Budget tracking & variance analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check /> <span>Coverage/hedge visibility & risk alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check /> <span>Site-level scorecards for multi-site operators</span>
                </li>
              </ul>
            </section>
          </FadeIn>
        </div>

        {/* Why Chang band */}
        <FadeIn delay={250}>
          <section className="mt-16 rounded-2xl bg-gradient-to-br from-white to-indigo-50 border p-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Why enterprises choose Chang
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <Check />
                <span>Market intel + supplier access (not just a price quote)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check />
                <span>Risk controls: block+index, budget caps, KPI reporting</span>
              </div>
              <div className="flex items-start gap-2">
                <Check />
                <span>Utility audits with real recoveries and contract enforcement</span>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={300}>
          <section className="mt-12 rounded-2xl border bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Ready to benchmark your current setup?
              </h4>
              <p className="mt-1 text-gray-600">
                Send 1–2 recent invoices and your contract summary. We’ll surface savings
                opportunities and map a stability plan—fast.
              </p>
            </div>
            <a href="/contact" className="btn btn-primary">Start My Audit</a>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
