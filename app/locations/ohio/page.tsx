// app/locations/ohio/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Average Commercial Electricity Rates in Ohio",
  description:
    "Ohio averages 13.12¢/kWh for commercial electricity. See how the SSO default compares, what PLC/NSPL tags add to your bill, and get a free bill review.",
  alternates: {
    canonical: "/locations/ohio",
  },
};

const faqs = [
  {
    q: "What is the average commercial electricity rate in Ohio?",
    a: "About 13.12¢/kWh statewide, per EIA commercial retail data (checked October 2026). Your actual rate depends on your utility, your PLC/NSPL capacity tags, and whether you're on the SSO default or a competitive contract.",
  },
  {
    q: "Why is my commercial rate higher than the Ohio average?",
    a: "Common culprits: drifting on the SSO default through an auction repricing, inflated capacity tags from unmanaged peaks, or a community aggregation rate that isn't the best deal for a commercial account. A bill review finds which one fast.",
  },
  {
    q: "Which utility delivers my power in Ohio?",
    a: "It's on your bill's delivery section — AEP Ohio, Duke Energy Ohio, AES Ohio, or a FirstEnergy company (Ohio Edison, The Illuminating Company, Toledo Edison). Delivery never changes when you switch suppliers; only the supply rate does.",
  },
  {
    q: "What is the Standard Service Offer (SSO) in Ohio?",
    a: "It's the default supply rate your utility charges if you don't choose a supplier — set through PUCO-overseen auctions and adjusted periodically. Like other default rates, it offers zero price protection: when wholesale markets rise, the SSO follows.",
  },
  {
    q: "What is PUCO's Apples to Apples chart?",
    a: "The Public Utilities Commission of Ohio publishes comparison charts showing supplier offers side by side. They're a useful starting point — but they don't account for your usage pattern, contract terms, or the fees hiding in the fine print.",
  },
  {
    q: "Does switching suppliers affect my reliability?",
    a: "Not at all. AEP Ohio, Duke Energy Ohio, AES Ohio, or your FirstEnergy utility still delivers the power and handles outages. Switching only changes the supply company and rate on your bill.",
  },
  {
    q: "Are there capacity charges in Ohio like Pennsylvania?",
    a: "Yes — Ohio is also in the PJM grid, so commercial bills carry capacity (PLC) and transmission (NSPL) components driven by peak-hour usage. Managing those tags is just as important here as in PA.",
  },
];

const bars = [
  { label: "Ohio", value: 13.12, highlight: true },
  { label: "Pennsylvania", value: 14.21, highlight: false },
  { label: "Texas", value: 8.64, highlight: false },
  { label: "Massachusetts", value: 25.64, highlight: false },
];
const maxBar = Math.max(...bars.map((b) => b.value));

const utilities = [
  {
    name: "AEP Ohio",
    area: "Columbus area",
    watch:
      "The SSO default reprices through PUCO-overseen auctions — never assume it stayed where it was last quarter. Compare every cycle.",
  },
  {
    name: "Duke Energy Ohio",
    area: "Cincinnati area",
    watch:
      "Same SSO structure as AEP. The auction-set default can look fine one period and jump the next — fixed offers are the antidote.",
  },
  {
    name: "AES Ohio",
    area: "Dayton area",
    watch:
      "Smaller territory, same choice rules. PUCO's Apples to Apples chart is a starting point — your load profile determines the real cost.",
  },
  {
    name: "FirstEnergy",
    area: "Ohio Edison, The Illuminating Company, Toledo Edison",
    watch:
      "Three utilities, three SSO rates under one parent. Multi-site businesses need one strategy across all three — not three separate guesses.",
  },
];

export default function OhioPage() {
  return (
    <main>
      <Script id="schema-oh-faq" type="application/ld+json">
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
            <span className="eyebrow">Service Areas · Ohio</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ohio gave you energy choice. Most businesses never use it.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              If your business is still on the utility&apos;s Standard
              Service Offer, you&apos;re paying a floating default rate
              with no protection. We shop Ohio&apos;s competitive suppliers
              and lock in fixed rates built around your usage.
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
              Ohio&apos;s commercial average: 13.12¢/kWh
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              A touch below Pennsylvania&apos;s average — but Ohio&apos;s
              default SSO rate reprices through auctions, so the average
              and what you&apos;ll pay next quarter are two different
              things. Source: U.S. Energy Information Administration
              commercial retail data, via Integrity Energy.
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
              double Ohio. Geography is destiny in electricity pricing.
            </p>
            <p className="mt-2 max-w-2xl text-xs text-slate-500">
              Averages are context, not your price. Your bill depends on
              your utility, your capacity tags, and your contract — more
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
              How energy choice works in Ohio
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Ohio opened electricity supply to competition in 2001, and
              PUCO — the Public Utilities Commission of Ohio — oversees
              the market.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Your utility delivers",
                text: "AEP Ohio, Duke Energy Ohio, AES Ohio (Dayton), or a FirstEnergy company (Ohio Edison, The Illuminating Company, Toledo Edison) keeps the wires, reads meters, and restores power.",
              },
              {
                title: "You pick the supplier",
                text: "Licensed competitive suppliers offer fixed, variable, and hybrid rates. PUCO's Apples to Apples charts let you compare headline offers — but the real cost depends on your load profile.",
              },
              {
                title: "We negotiate for you",
                text: "We take your actual interval or billing history to multiple suppliers, compare true all-in pricing, and flag the contract terms that matter — so you sign the right deal, not just the cheapest headline.",
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
              each major Ohio utility instead:
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
              upload your bill and we&apos;ll benchmark it against live
              supplier offers, in one business day.
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
              That 13.12¢ is real EIA data — but it&apos;s a statewide
              average, and averages hide as much as they reveal. It blends
              municipal utilities and co-ops (not in the choice market at
              all) with SSO default rates and competitive supply
              contracts. It averages corner shops with factories.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Treat it as the weather report for Ohio: useful context, not
              your price. Your price comes down to three things — which
              utility delivers your power, what your capacity tags look
              like, and whether you&apos;re on the SSO default or a
              competitive contract.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h3 className="mt-10 text-xl font-bold tracking-tight text-slate-900">
              What drives YOUR bill in Ohio
            </h3>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "The SSO drift",
                text: "The Standard Service Offer is repriced through auctions — it can look competitive one period and jump the next. Businesses that treat it as 'good enough' often discover the hard way that it isn't.",
              },
              {
                title: "PJM capacity and transmission",
                text: "Ohio sits in PJM, so your PLC (capacity) and NSPL (transmission) tags — set by usage during a few peak hours — drive a major slice of the bill. We build peak-management strategy into every Ohio engagement.",
              },
              {
                title: "Government aggregation",
                text: "Many Ohio communities bulk-buy supply for residents and small businesses (aggregation). The opt-out rate isn't always the best deal for a commercial account — compare it against a brokered quote before assuming.",
              },
              {
                title: "Renewal timing",
                text: "Supplier contracts here commonly run 12–36 months. Shopping 3–6 months before expiration — never the week of — is the difference between leverage and desperation.",
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
                Upload your bill and we&apos;ll benchmark your current
                rate against live supplier offers — free, back to you in
                one business day.
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
              Ohio FAQs
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
              Still on the Standard Service Offer?
            </h2>
            <p className="mt-3 text-slate-300">
              Send us your bill. We&apos;ll benchmark your current rate
              against live supplier offers and show you the fixed-rate
              alternative — free, no obligation.
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
