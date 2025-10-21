// components/Offering.tsx
"use client";

import Link from "next/link";

function Card({
  icon,
  title,
  children,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div
      className="group relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-[2px]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/0 to-white/50 pointer-events-none" />
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 ring-1 ring-orange-100">
          {icon}
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
      </div>
      <div className="mt-3 text-[15px] leading-relaxed text-slate-700">
        {children}
      </div>
    </div>
  );
}

export default function Offering() {
  return (
    <section className="relative overflow-hidden border-y bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(249,115,22,0.08),transparent)]">
      {/* Top content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transparent Strategy. Tangible Results.
          </h2>
          <p className="mt-4 text-[17px] leading-7 text-slate-700">
            We reduce volatility, protect budgets, and unlock long-term savings
            across portfolios. From manufacturers and cold storage to
            restaurants and offices, our process aligns procurement with
            real-world operations.
          </p>
        </div>

        {/* Value cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            delay={0}
            title="Procurement"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 6a3 3 0 0 1 3-3h3v2H6a1 1 0 0 0-1 1v3H3V6Zm15-3a3 3 0 0 1 3 3v3h-2V6a1 1 0 0 0-1-1h-3V3h3ZM3 15h2v3a1 1 0 0 0 1 1h3v2H6a3 3 0 0 1-3-3v-3Zm18 0v3a3 3 0 0 1-3 3h-3v-2h3a1 1 0 0 0 1-1v-3h2ZM7.5 11.25h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5Zm0-3h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5Zm0 6h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5Z" />
              </svg>
            }
          >
            <ul className="mt-2 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                Competitive supplier bids with transparent markups
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                Structures matched to your load: fixed, index, or block+index
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                Terms aligned to operations (swing, bandwidth, pass-throughs)
              </li>
            </ul>
          </Card>

          <Card
            delay={75}
            title="Capacity Planning"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13 2a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM6 7a1 1 0 0 1 1 1v12h10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
              </svg>
            }
          >
            <ul className="mt-2 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                Peak prediction &amp; curtailment playbooks (PJM / ERCOT)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                PLC/NSPL optimization to lower T&amp;D charges year over year
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                Measurable performance tracking across sites
              </li>
            </ul>
          </Card>

          <Card
            delay={150}
            title="Reporting"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 6a2 2 0 0 1 2-2h2v16H6a2 2 0 0 1-2-2V6Zm12-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2V4Zm-8 0h6v16H8V4Z" />
              </svg>
            }
          >
            <ul className="mt-2 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                Budget vs. actuals, variance tracking, hedge position
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                PLC exposure &amp; verified savings
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                Operator-friendly scorecards for multi-site teams
              </li>
            </ul>
          </Card>
        </div>

        {/* Proof / stats strip */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "$100M+", v: "Energy spend guided" },
            { k: "40+", v: "Active suppliers" },
            { k: "3–7%", v: "Typical audit recovery" },
            { k: "PJM + ERCOT", v: "Market coverage" },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-xl border border-slate-200 bg-white/70 px-5 py-4 text-center"
            >
              <div className="text-base font-semibold text-slate-900">{x.k}</div>
              <div className="text-sm text-slate-600">{x.v}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            Ready to see how much you could be saving?
          </h3>
          <p className="mx-auto mt-1 max-w-2xl text-[15px] text-slate-600">
            Upload a recent bill and we’ll build a custom plan that fits your operations.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-[15px] font-semibold text-white shadow-sm hover:bg-orange-700"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a.997.997 0 0 1-1.414 0l-4-4A1 1 0 0 1 8.293 11.293L10.586 13V4a1 1 0 0 1 1-1ZM4 17a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
              </svg>
              Upload a Bill
            </Link>
            <Link
              href="/contact"
              className="text-[15px] font-medium text-slate-700 hover:text-slate-900"
            >
              Talk to an energy strategist →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
