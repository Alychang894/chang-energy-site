// app/locations/new-england/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Average Commercial Electricity Rates in New England",
  description:
    "New England commercial rates run 22–26¢/kWh — nearly 3x Texas. See MA, CT, RI, NH, ME averages, why winter spikes them, and get a free bill review.",
  alternates: {
    canonical: "/locations/new-england",
  },
};

const faqs = [
  {
    q: "What is the average commercial electricity rate in New England?",
    a: "It varies by state — MA 25.64¢, RI 24.84¢, CT 23.16¢, ME 22.46¢, NH 22.19¢ per kWh (EIA commercial data, checked October 2026). All are among the highest in the country, driven by winter natural gas constraints.",
  },
  {
    q: "Why is my commercial rate higher than the New England average?",
    a: "Often it's timing: basic service reprices every few months, so a winter bill can run far above the annual average. Other culprits: capacity market costs and a contract that lapsed into a variable rate. A bill review finds which one.",
  },
  {
    q: "Which utility delivers my power in New England?",
    a: "Check your bill — it's typically Eversource, National Grid, or Unitil depending on your state and town. Municipal utilities are common in parts of Massachusetts; they generally aren't in the choice market.",
  },
  {
    q: "Which New England states have energy choice?",
    a: "Massachusetts, Rhode Island, Connecticut, and New Hampshire all let businesses choose a competitive electricity supplier. Maine has limited choice. Vermont is largely still utility-supplied.",
  },
  {
    q: "Why are New England winter electric rates so high?",
    a: "The region depends heavily on natural gas for power generation but has limited pipeline capacity into the region. On the coldest winter days, gas gets diverted to heating, power plants compete for scarce supply, and wholesale electricity prices spike — sometimes dramatically. Fixed-rate contracts signed before winter are the main defense.",
  },
  {
    q: "What is ISO New England?",
    a: "ISO-NE operates the region's power grid and wholesale markets, including a Forward Capacity Market that pays generators to be available. Capacity costs show up on commercial bills — another line item worth managing.",
  },
  {
    q: "Does switching suppliers change who fixes outages?",
    a: "No. Eversource, National Grid, Unitil, or your local utility still owns the wires and restores power. Only the supply portion of your bill changes.",
  },
];

const bars = [
  { label: "Massachusetts", value: 25.64, highlight: true },
  { label: "Rhode Island", value: 24.84, highlight: true },
  { label: "Connecticut", value: 23.16, highlight: true },
  { label: "Maine", value: 22.46, highlight: true },
  { label: "New Hampshire", value: 22.19, highlight: true },
  { label: "Texas (for contrast)", value: 8.64, highlight: false },
];
const maxBar = Math.max(...bars.map((b) => b.value));

const utilities = [
  {
    name: "Eversource",
    area: "MA, CT, NH",
    watch:
      "The region's largest utility. Basic service reprices every few months — riding it through winter is the most expensive way to buy power in New England.",
  },
  {
    name: "National Grid",
    area: "MA, RI",
    watch:
      "Same seasonal basic-service swings. Fixed contracts signed in the shoulder seasons beat the winter repricing every time.",
  },
  {
    name: "Unitil",
    area: "MA, NH, ME",
    watch:
      "Smaller territories with the same winter gas constraints — the default rate swings just as hard on a smaller stage.",
  },
];

export default function NewEnglandPage() {
  return (
    <main>
      <Script id="schema-ne-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}
      </Script>

      {/* Hero */}
      <section className="band-dark relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_80%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <FadeIn>
            <span className="eyebrow">Service Areas · New England</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              New England winters punish unprepared electric bills.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Businesses in MA, RI, CT, and NH can choose their
              electricity supplier — and with winter gas constraints
              driving some of the country&apos;s sharpest seasonal price
              swings, locking the right rate before the cold hits is
              everything. That&apos;s what we do.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Get My Free Bill Review
              </Link>
              <Link
                href="/resources/blended-rate-calculator"
                className="btn btn-secondary"
              >
                Calculate My Blended Rate
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The number */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
              Rates checked October 2026
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              New England&apos;s commercial average: 22–26¢/kWh
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              The highest regional rates in the country, state by state
              (EIA commercial retail data, via Integrity Energy):
              Massachusetts 25.64¢, Rhode Island 24.84¢, Connecticut
              23.16¢, Maine 22.46¢, New Hampshire 22.19¢.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-8 max-w-2xl space-y-5">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`text-sm font-semibold ${
                        b.highlight ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {b.label}
                    </span>
                    <span className="text-sm tabular-nums text-slate-600">
                      {b.value.toFixed(2)}¢/kWh
                    </span>
                  </div>
                  <div className="mt-1.5 h-7 overflow-hidden rounded-lg bg-slate-100">
                    <div
                      className={`h-7 rounded-lg ${
                        b.highlight ? "bg-brand-600" : "bg-slate-300"
                      }`}
                      style={{ width: `${(b.value / maxBar) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-2xl text-sm text-slate-600">
              Massachusetts at 25.64¢ is nearly 3x Texas at 8.64¢. This is
              the painliest turf in American commercial electricity —
              and the place where a good contract matters most.
            </p>
            <p className="mt-2 max-w-2xl text-xs text-slate-500">
              Averages are context, not your price. Your bill depends on
              your utility, your state&apos;s seasonal swings, and your
              contract — more on that below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How choice works */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How energy choice works in New England
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Each state runs its own choice program under the ISO New
              England grid — the rules differ, but the principle is the
              same.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Your utility delivers",
                text: "Eversource, National Grid, Unitil, or your municipal utility keeps the wires, reads the meter, and restores outages. Delivery is never up for bid.",
              },
              {
                title: "You choose the supplier",
                text: "In MA, RI, CT, and NH, licensed competitive suppliers compete for commercial accounts — with fixed-rate terms that protect you from the region's notorious winter spikes.",
              },
              {
                title: "We time the market",
                text: "New England pricing is seasonal and event-driven. We watch forward curves and contract your renewal when the market favors buyers — not when your expiration forces your hand.",
              },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 80}>
                <div className="card h-full p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-slate-600">{c.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Per-utility watch list */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Your utility, your watch-list
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              We don&apos;t publish per-utility rates — they move too fast
              for a webpage to stay honest, and in New England they move
              fastest of all. Here&apos;s what to watch instead:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {utilities.map((u, i) => (
              <FadeIn key={u.name} delay={i * 80}>
                <div className="card h-full p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {u.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-700">
                    {u.area}
                  </p>
                  <p className="mt-2 text-[15px] text-slate-600">{u.watch}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={120}>
            <p className="mt-8 max-w-3xl text-[15px] text-slate-600">
              Your exact number depends on your utility, your state, and
              your usage — upload your bill and we&apos;ll show you what
              winter could cost on your current plan versus a locked fixed
              rate, in one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why the average lies + what drives your bill */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why the official average lies (a little)
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Those state numbers are real EIA data — but they&apos;re
              annual averages, and in New England the average is the
              least informative number of all. Basic service reprices
              every few months, so a January bill and a May bill in the
              same state can look like different planets. The average
              smooths away exactly the spikes that hurt.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Treat the numbers above as the weather report for the
              region: useful context, not your price. Your price comes
              down to three things — which utility delivers your power,
              which months your contract covers, and whether you&apos;re
              on basic service or a competitive fixed rate.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h3 className="mt-10 text-xl font-bold tracking-tight text-slate-900">
              What drives YOUR bill in New England
            </h3>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Winter gas constraint spikes",
                text: "Limited pipeline capacity means the coldest days bring fierce competition for natural gas between heating and power generation. Wholesale prices — and variable-rate bills — can surge. Fixed contracts signed in shoulder seasons avoid it.",
              },
              {
                title: "Capacity market costs",
                text: "ISO-NE's Forward Capacity Market pays generators to be available, and those costs flow into commercial bills. They're set by auctions, not your usage — but the right contract structure keeps them predictable.",
              },
              {
                title: "Basic service rollover",
                text: "Each utility's default 'basic service' rate reprices every few months. Businesses that drift on it ride every seasonal swing. It's the most expensive way to buy electricity in New England over time.",
              },
              {
                title: "State-by-state fine print",
                text: "Renewal notice rules, contract length norms, and available products differ across MA, RI, CT, and NH. We track the differences so a multi-site business gets one coherent strategy, not four headaches.",
              },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 80}>
                <div className="card h-full p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-slate-600">{c.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={120}>
            <p className="mt-8 max-w-3xl text-[15px] text-slate-600">
              Two topics worth their own guides:{" "}
              <Link
                href="/demand-charges-explained"
                className="font-semibold text-brand-700 underline"
              >
                demand charges, explained
              </Link>{" "}
              — and{" "}
              <Link
                href="/contract-expired"
                className="font-semibold text-brand-700 underline"
              >
                what happens when your contract expires
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="card p-8 text-center">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                Know your number, not the average.
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-[15px] text-slate-600">
                Upload your bill and we&apos;ll show you what winter could
                cost on your current plan versus a locked fixed rate —
                free, back to you in one business day.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary mt-6 inline-flex"
              >
                Upload My Bill
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              New England FAQs
            </h2>
          </FadeIn>
          <div className="mt-8 space-y-6">
            {faqs.map((f, i) => (
              <FadeIn key={f.q} delay={i * 60}>
                <div className="card p-6">
                  <h3 className="font-semibold text-slate-900">{f.q}</h3>
                  <p className="mt-2 text-[15px] text-slate-600">{f.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band-dark py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Don&apos;t head into winter on a variable rate.
            </h2>
            <p className="mt-3 text-slate-300">
              Send us your bill. We&apos;ll show you what winter could
              cost on your current plan versus a locked fixed rate —
              free, no obligation.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Get My Free Bill Review
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
