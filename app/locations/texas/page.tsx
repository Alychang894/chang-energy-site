// app/locations/texas/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Average Commercial Electricity Rates in Texas",
  description:
    "Texas averages 8.64¢/kWh for commercial electricity — among the lowest in the US. See how your TDU compares, what 4CP peaks cost, and get a free bill review.",
  alternates: {
    canonical: "/locations/texas",
  },
};

const faqs = [
  {
    q: "What is the average commercial electricity rate in Texas?",
    a: "About 8.64¢/kWh statewide, per EIA commercial retail data (checked October 2026) — among the lowest in the country. But Texas also has the widest spread between the cheapest and priciest plans, so the average says little about any single bill.",
  },
  {
    q: "Why is my commercial rate higher than the Texas average?",
    a: "Usually one of three things: a teaser plan whose usage tripwires you missed, a contract that rolled to a holdover rate, or 4CP transmission charges from unmanaged summer peaks. Upload your bill and we'll find which one.",
  },
  {
    q: "Which utility delivers my power in Texas?",
    a: "Your TDSP — the name is printed on your bill. In most deregulated areas it's Oncor, CenterPoint Energy, AEP Texas, or Texas-New Mexico Power (TNMP). You can't choose your TDSP, but you can choose the retail electric provider that sets your supply rate.",
  },
  {
    q: "Is my Texas business in a deregulated area?",
    a: "Most of Texas is — including Houston, Dallas–Fort Worth, and surrounding areas served by TDSPs like CenterPoint and Oncor. But municipal utilities (like Austin Energy or CPS Energy in San Antonio) and electric cooperatives are generally not open to retail choice. Your bill's TDSP name tells you where you stand.",
  },
  {
    q: "What are 4CP charges?",
    a: "In ERCOT, transmission costs are allocated based on your usage during the four summer system peaks (June–September), called the Four Coincident Peaks. If your business runs hard through a 4CP hour, you pay for it all year. Managing those afternoons is one of the highest-ROI moves a Texas business can make.",
  },
  {
    q: "Why do Texas summer rates spike?",
    a: "Texas runs an energy-only market — there's no PJM-style capacity market paying generators to be available. When summer heat pushes demand near supply limits, wholesale prices can spike hard and fast. Fixed-rate contracts shield you from that.",
  },
  {
    q: "What's a TDSP?",
    a: "A Transmission and Distribution Service Provider — the utility that owns the poles and wires (Oncor, CenterPoint, AEP Texas, TNMP). You can't choose your TDSP, but you can choose your retail electric provider, which sets your supply rate.",
  },
];

const bars = [
  { label: "Texas", value: 8.64, highlight: true },
  { label: "Ohio", value: 13.12, highlight: false },
  { label: "Pennsylvania", value: 14.21, highlight: false },
  { label: "Massachusetts", value: 25.64, highlight: false },
];
const maxBar = Math.max(...bars.map((b) => b.value));

const utilities = [
  {
    name: "Oncor",
    area: "Dallas–Fort Worth",
    watch:
      "The state's largest TDU. Delivery charges are fixed by tariff — every dollar of savings comes from your supply rate and managing the 4CP summer peaks.",
  },
  {
    name: "CenterPoint Energy",
    area: "Houston",
    watch:
      "Same story as Oncor: delivery is set, so the fight is entirely on the retail plan you pick — and how you handle August afternoons.",
  },
  {
    name: "AEP Texas",
    area: "South & west Texas",
    watch:
      "Check your bill's TDSP name — if you're in AEP territory, you're in choice territory, and the plan fine print matters more than the headline rate.",
  },
  {
    name: "Texas-New Mexico Power",
    area: "TNMP territories",
    watch:
      "Smaller footprint, same choice rules. Teaser-rate tripwires show up here too — always compare plans on your actual usage, never the advertised average.",
  },
];

export default function TexasPage() {
  return (
    <main>
      <Script id="schema-tx-faq" type="application/ld+json">
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
            <span className="eyebrow">Service Areas · Texas</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Texas runs hot. Your electric rate shouldn&apos;t.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Most Texas businesses can choose their retail electric
              provider — and with summer peaks setting transmission costs
              for the whole year, the right contract strategy matters more
              here than almost anywhere. We handle it.
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
              Texas&apos;s commercial average: 8.64¢/kWh
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Among the lowest commercial averages in the country — but
              Texas also has the widest spread between the cheapest and
              priciest plans, so the average hides more here than
              anywhere. Source: U.S. Energy Information Administration
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
              3x Texas. Cheap on average doesn&apos;t mean cheap for you.
            </p>
            <p className="mt-2 max-w-2xl text-xs text-slate-500">
              Averages are context, not your price. Your bill depends on
              your TDU, your plan&apos;s fine print, and your summer peak
              behavior — more on that below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How choice works */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How energy choice works in Texas
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Since 2002, most of Texas has run on retail electric choice
              under ERCOT — the grid operator for most of the state.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Your TDSP delivers",
                text: "Oncor, CenterPoint, AEP Texas, or TNMP owns the wires, reads the meter, and restores outages. You don't choose them — but they're not who sets your rate.",
              },
              {
                title: "You choose your provider",
                text: "Dozens of retail electric providers compete for your supply business. The spread between the cheapest and priciest offer for the same usage can be enormous.",
              },
              {
                title: "We cut through the noise",
                text: "Texas plans are famous for fine print — bill credits, tiered rates, usage thresholds. We compare true all-in costs on your actual load profile, not the advertised teaser.",
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

      {/* Per-TDU watch list */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Your TDU, your watch-list
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              In Texas you don&apos;t choose your delivery utility — but
              knowing which one you&apos;re in tells you where the savings
              actually come from:
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
              Your exact number depends on your TDU, your plan, and your
              usage — upload your bill and we&apos;ll tell you your true
              all-in rate and what you should be paying, in one business
              day.
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
              That 8.64¢ is real EIA data — but Texas is where averages
              lie the most. It blends Dallas offices with West Texas
              operations, straightforward fixed-rate plans with tiered
              teaser plans that only hit their advertised rate at exactly
              1,000 kWh. Two businesses with identical usage can pay
              wildly different rates on the same TDU.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Treat it as the weather report for Texas: useful context,
              not your price. Your price comes down to three things —
              which retail plan you&apos;re on, whether you&apos;re
              tripping its fine-print thresholds, and how you behave
              during the four summer peak hours.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h3 className="mt-10 text-xl font-bold tracking-tight text-slate-900">
              What drives YOUR bill in Texas
            </h3>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "The 4CP summer peaks",
                text: "ERCOT sets transmission charges from your usage during the four summer coincident peaks (June–September). Curtailing or shifting load on the hottest afternoons is the single biggest lever most Texas businesses have.",
              },
              {
                title: "Teaser rates with tripwires",
                text: "Many Texas plans advertise a low average rate that only applies at exactly 1,000 or 2,000 kWh. Use a little more or less and the real rate jumps. Always compare on your actual usage — that's what our bill review does.",
              },
              {
                title: "Summer scarcity pricing",
                text: "Texas has no capacity market — generators are paid only for energy produced. When August heat strains supply, wholesale prices can spike violently. A fixed-rate contract keeps those spikes off your bill.",
              },
              {
                title: "Contract end dates in summer",
                text: "If your contract expires June–September, you're shopping at the worst possible moment. We time renewals so you're never forced to sign during peak season.",
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
                Upload your bill and we&apos;ll tell you your true all-in
                rate, when your contract ends, and what you should be
                paying — free, back to you in one business day.
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
              Texas FAQs
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
              Shopping providers in Texas alone is a full-time job.
            </h2>
            <p className="mt-3 text-slate-300">
              Send us your bill and we&apos;ll cut through the teaser
              rates, find your true all-in cost, and line up fixed-rate
              options — free, no obligation.
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
