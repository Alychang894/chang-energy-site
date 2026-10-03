// app/locations/pennsylvania/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Average Commercial Electricity Rates in Pennsylvania",
  description:
    "Pennsylvania averages 14.21¢/kWh for commercial electricity. See how PA compares to neighboring states, what drives your bill, and get a free bill review.",
  alternates: {
    canonical: "/locations/pennsylvania",
  },
};

const faqs = [
  {
    q: "What is the average commercial electricity rate in Pennsylvania?",
    a: "About 14.21¢/kWh statewide, per EIA commercial retail data (checked October 2026). But that's an average across utilities, co-ops, and contract types — your bill depends on your utility, your usage pattern, and whether you're on the default Price to Compare or a competitive fixed contract.",
  },
  {
    q: "Why is my commercial rate higher than the Pennsylvania average?",
    a: "The three usual suspects: you're on the utility default instead of a competitive contract, your demand charges or PJM capacity tags are inflated, or an old contract quietly rolled to a variable rate. A free bill review identifies which one, usually within a business day.",
  },
  {
    q: "Which utility delivers my power in Pennsylvania?",
    a: "Check the delivery section of your bill. In most of the state it's PECO, PPL Electric Utilities, Duquesne Light, or a FirstEnergy company — Met-Ed, Penelec, Penn Power, or West Penn Power. Your delivery utility never changes when you switch suppliers; only the supply rate does.",
  },
  {
    q: "Do I have to switch electricity suppliers in Pennsylvania?",
    a: "No — switching is optional. If you don't choose, your utility (PECO, PPL, Duquesne Light, etc.) supplies your electricity at its default service rate, called the Price to Compare. But that default rate changes periodically and is rarely the cheapest option for a business.",
  },
  {
    q: "Will my power go out if I switch suppliers?",
    a: "No. Your utility still delivers the electricity, maintains the lines, and restores outages. Only the supply portion of your bill changes — the company name on the supply line and the rate you pay.",
  },
  {
    q: "What are capacity charges on my Pennsylvania commercial bill?",
    a: "Pennsylvania is in the PJM grid, which charges for capacity based on your usage during peak hours (your PLC tag) and transmission based on a separate peak (your NSPL tag). For many businesses these charges rival the energy itself — and managing them is a big part of what we do.",
  },
  {
    q: "How far in advance should I shop for a new rate?",
    a: "Start 3–6 months before your contract ends. That gives time to compare real supplier offers instead of rushing into whatever's available the week your contract expires — which is when most businesses overpay.",
  },
];

const bars = [
  { label: "Pennsylvania", value: 14.21, highlight: true },
  { label: "Ohio", value: 13.12, highlight: false },
  { label: "Texas", value: 8.64, highlight: false },
  { label: "Massachusetts", value: 25.64, highlight: false },
];
const maxBar = Math.max(...bars.map((b) => b.value));

const utilities = [
  {
    name: "PECO",
    area: "Philadelphia region",
    watch:
      "Your default is the Price to Compare — it resets periodically, and most businesses just drift on it. That's the first number we beat.",
  },
  {
    name: "PPL Electric Utilities",
    area: "Central & eastern PA",
    watch:
      "PPL's default shifts with auction cycles. Compare it against fixed supplier offers before assuming it's fine.",
  },
  {
    name: "Duquesne Light",
    area: "Pittsburgh area",
    watch:
      "A smaller territory where fewer businesses shop — which is exactly why the ones who do often find the best spreads.",
  },
  {
    name: "FirstEnergy",
    area: "Met-Ed, Penelec, Penn Power, West Penn",
    watch:
      "Four utilities, four default rates. If you have sites in more than one territory, you're juggling multiple Price to Compare numbers — we line them up side by side.",
  },
];

export default function PennsylvaniaPage() {
  return (
    <main>
      <Script id="schema-pa-faq" type="application/ld+json">
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
            <span className="eyebrow">Service Areas · Pennsylvania</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Commercial electricity in Pennsylvania, without the guesswork.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              PA businesses have been able to choose their electricity
              supplier for years — but most still pay the default rate. We
              shop vetted suppliers for you and lock in a fixed rate that
              fits your usage.
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
              Pennsylvania&apos;s commercial average: 14.21¢/kWh
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              That&apos;s the statewide average commercial electricity
              rate — what PA businesses pay per kilowatt-hour, averaged
              across utilities, co-ops, and contract types. Source: U.S.
              Energy Information Administration commercial retail data,
              via Integrity Energy.
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
              Massachusetts businesses pay 25.64¢/kWh on average — nearly
              3x Texas. If you think PA rates sting, New England is another
              world.
            </p>
            <p className="mt-2 max-w-2xl text-xs text-slate-500">
              Averages are context, not your price. Your bill depends on
              your utility, your usage pattern, and your contract — more
              on that below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How choice works */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How energy choice works in PA
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Pennsylvania deregulated electricity supply in the late 1990s,
              with choice fully phased in across utilities by the early
              2010s. Here&apos;s the short version:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Your utility still delivers",
                text: "PECO, PPL, Duquesne Light, or your FirstEnergy company (Met-Ed, Penelec, Penn Power, West Penn) keeps delivering power and fixing outages. That never changes.",
              },
              {
                title: "You choose who supplies it",
                text: "Instead of the utility's default Price to Compare, you can buy your electricity supply from a competing supplier — often at a lower fixed rate.",
              },
              {
                title: "We do the shopping",
                text: "We compare offers from vetted suppliers against your actual usage, negotiate terms, and handle the switch. You approve the rate before anything changes.",
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
              for a webpage to stay honest. Here&apos;s what to watch at
              each major PA utility instead:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
              Your exact number depends on your utility and your usage —
              upload your bill and we&apos;ll tell you what you&apos;re
              paying and what you should be paying, in one business day.
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
              That 14.21¢ is real EIA data — but it&apos;s a statewide
              average, and averages hide as much as they reveal. It blends
              municipal utilities and co-ops (not in the choice market at
              all) with bundled utility rates and competitive supply
              contracts. It averages corner delis with 24-hour factories.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Treat it as the weather report for Pennsylvania: useful
              context, not your price. Your price comes down to three
              things — which utility delivers your power, how and when
              you use it, and whether you&apos;re on the default rate or
              a competitive contract.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h3 className="mt-10 text-xl font-bold tracking-tight text-slate-900">
              What drives YOUR bill in PA
            </h3>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "The Price to Compare trap",
                text: "Your utility's default rate adjusts periodically. Businesses that never shop are effectively on a variable plan — paying whatever the current default is, with no protection when markets spike.",
              },
              {
                title: "Capacity and transmission tags",
                text: "Because PA sits in the PJM grid, part of your bill is set by your usage during a handful of peak hours each year (your PLC and NSPL tags). One unmanaged peak can inflate costs for twelve months.",
              },
              {
                title: "Auto-renewal clauses",
                text: "Many PA supply contracts roll over automatically — often onto variable rates. Mark your end date and shop 3–6 months early, not the week it expires.",
              },
              {
                title: "Demand charges",
                text: "Larger commercial accounts pay for their highest 15–30 minutes of demand each month. Shifting heavy equipment off peak hours can cut this line item without cutting production.",
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
              Two of these deserve their own guides:{" "}
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
                Upload your bill and we&apos;ll tell you your exact rate,
                when your contract ends, and what you should be paying —
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
              Pennsylvania FAQs
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
              Paying the PECO or PPL default rate?
            </h2>
            <p className="mt-3 text-slate-300">
              Send us your bill. We&apos;ll show you exactly what
              you&apos;re paying, when your contract ends, and what a fixed
              rate would look like — free, no obligation.
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
