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
              Someone in your corner for the whole electric bill
            </h2>
            <p className="p mx-auto mt-4 max-w-2xl text-lg">
              Most businesses overpay in three places: the supply rate, demand
              charges, and plain billing mistakes. We go after all three — and
              we do it around how your business actually runs, not some
              one-size-fits-all playbook.
            </p>
          </FadeIn>
        </div>

        {/* Value cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            delay={0}
            title="Better supplier rates"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M3 6a3 3 0 0 1 3-3h3v2H6a1 1 0 0 0-1 1v3H3V6Zm15-3a3 3 0 0 1 3 3v3h-2V6a1 1 0 0 0-1-1h-3V3h3ZM3 15h2v3a1 1 0 0 0 1 1h3v2H6a3 3 0 0 1-3-3v-3Zm18 0v3a3 3 0 0 1-3 3h-3v-2h3a1 1 0 0 0 1-1v-3h2Z" />
              </svg>
            }
          >
            <ul className="space-y-2.5">
              {[
                "Simple side-by-side bids — you see every markup",
                "A plan type that fits how you use power: fixed, flexible, or a mix",
                "Contract terms in plain English, timed around your business — no surprises",
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
            title="Taming demand charges"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" strokeLinejoin="round" />
              </svg>
            }
          >
            <ul className="space-y-2.5">
              {[
                "A heads-up before expensive peak hours, with simple ways to dodge them",
                "We keep an eye on the capacity charges hiding in your bill",
                "Nothing that shuts you down — everything works around your hours",
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
            title="Bill checkups, every month"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 5h16v14H4z M8 9h8M8 13h8M8 17h5" strokeLinecap="round" />
              </svg>
            }
          >
            <ul className="space-y-2.5">
              {[
                "Every line checked for errors and wrong rate classes",
                "Clear budget tracking you can actually read",
                "We keep watching, so new errors get caught fast",
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
              { t: "No hidden markups", d: "You see what the supplier charges and what we earn." },
              { t: "Same utility, zero interruption", d: "Your power keeps flowing — only the rate changes." },
              { t: "Made for real businesses", d: "Plans that fit your hours, your seasons, your reality." },
              { t: "One person who knows you", d: "A real human who knows your account — not a call center." },
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
                Wondering if you&apos;re overpaying?
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-slate-300">
                Snap a photo of your electric bill and send it over. A real
                person will show you where your money&apos;s going — and what
                better looks like. Free, no strings attached.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  {checkIcon}
                  Get My Free Bill Review
                </Link>
                <a href="mailto:ben@changenergygroup.com" className="btn btn-lg btn-outline-light">
                  Email Us Your Bill
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
