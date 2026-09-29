// components/Offering.tsx
"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

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
    <FadeIn delay={delay}>
      <div className="card card-hover group relative h-full p-7">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
            {icon}
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {title}
          </h3>
        </div>
        <div className="mt-4 text-[15px] leading-relaxed text-slate-600">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a.997.997 0 0 1-1.414 0l-4-4A1 1 0 0 1 8.293 11.293L10.586 13V4a1 1 0 0 1 1-1ZM4 17a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
  </svg>
);

export default function Offering() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow justify-center">What we do</span>
            <h2 className="h2 mt-4">
              One partner for the whole electricity bill
            </h2>
            <p className="p mx-auto mt-4 max-w-2xl text-lg">
              Most businesses overpay in three places: the supply rate, demand
              charges, and billing errors. We go after all three — with a
              process built around how your sites actually run.
            </p>
          </FadeIn>
        </div>

        {/* Value cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            delay={0}
            title="Competitive Procurement"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M3 6a3 3 0 0 1 3-3h3v2H6a1 1 0 0 0-1 1v3H3V6Zm15-3a3 3 0 0 1 3 3v3h-2V6a1 1 0 0 0-1-1h-3V3h3ZM3 15h2v3a1 1 0 0 0 1 1h3v2H6a3 3 0 0 1-3-3v-3Zm18 0v3a3 3 0 0 1-3 3h-3v-2h3a1 1 0 0 0 1-1v-3h2Z" />
              </svg>
            }
          >
            <ul className="space-y-2.5">
              {[
                "Side-by-side supplier bids with transparent markups",
                "Fixed, index, or block+index structures matched to your load",
                "Contract terms aligned to your operations — no surprises",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  {t}
                </li>
              ))}
            </ul>
          </Card>

          <Card
            delay={100}
            title="Demand-Charge Strategy"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" strokeLinejoin="round" />
              </svg>
            }
          >
            <ul className="space-y-2.5">
              {[
                "Peak alerts with short, practical curtailment windows",
                "Capacity tag (PLC/NSPL) tracking year over year",
                "Plans that respect production — never blind shutdowns",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  {t}
                </li>
              ))}
            </ul>
          </Card>

          <Card
            delay={200}
            title="Bill Audits & Reporting"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 5h16v14H4z M8 9h8M8 13h8M8 17h5" strokeLinecap="round" />
              </svg>
            }
          >
            <ul className="space-y-2.5">
              {[
                "Line-by-line invoice review for errors and misapplied tariffs",
                "Budget vs. actuals tracking your finance team can read",
                "Ongoing invoice QA so errors get caught every month",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  {t}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Trust strip — neutral, no invented stats */}
        <FadeIn delay={150}>
          <div className="mt-12 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Transparent markups", d: "You see exactly what suppliers charge and what we earn." },
              { t: "Same utility, no interruption", d: "Only the supplier changes — your power keeps flowing." },
              { t: "Built for operators", d: "Plans fit shift schedules, seasons, and real constraints." },
              { t: "One point of contact", d: "A real person who knows your account, not a call center." },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M16.7 5.3a1 1 0 00-1.4-1.4L8 11.17 4.7 7.88a1 1 0 10-1.4 1.42l4 4a1 1 0 001.4 0l8-8z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-slate-900">{x.t}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={200}>
          <div className="band-dark mt-12 rounded-3xl p-8 text-center md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_50%_0px,rgba(249,115,22,0.16),transparent)]"
            />
            <div className="relative">
              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Find out what you should be paying
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-slate-300">
                Upload a recent electricity bill and we&apos;ll show you where
                the money is going — and what a better structure looks like.
                Free, no obligation.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  {checkIcon}
                  Get My Free Bill Review
                </Link>
                <a href="tel:+12673408300" className="btn btn-lg btn-outline-light">
                  Call +1-267-340-8300
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
