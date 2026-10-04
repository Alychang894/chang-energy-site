// app/industries/restaurants/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../../components/FadeIn";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Restaurant Electricity Costs in Pennsylvania — and How to Lower Them",
  description:
    "Why restaurant electric bills run so high in PA: walk-ins that never rest, dinner-rush demand spikes, and the Price to Compare trap. Practical moves that cut costs.",
  alternates: {
    canonical: "/industries/restaurants",
  },
};

const equipment = [
  {
    title: "Walk-in coolers & freezers",
    body: "They run 24/7/365 — compressors cycling around the clock whether you're serving lunch or closed on Monday. Refrigeration is usually the single biggest slice of a restaurant's electric bill.",
  },
  {
    title: "The cooking line",
    body: "Fryers, ovens, grills, and warming equipment all fire at once during service. That stacked load is what sets your demand peak for the entire month.",
  },
  {
    title: "HVAC & make-up air",
    body: "Kitchen exhaust pulls conditioned air straight out of the building, so the HVAC works overtime to replace it — especially brutal in a Pennsylvania summer and winter alike.",
  },
  {
    title: "Lighting & signage",
    body: "Dining room, kitchen, parking lot, and the sign out front. It adds up, and it's the easiest load to trim without touching operations.",
  },
];

const drivers = [
  {
    title: "Refrigeration never rests",
    body: "Unlike an office that powers down at night, your biggest load runs while you sleep. That 24/7 baseload means there's no 'off-hours' rate trick that fixes a restaurant bill on its own.",
  },
  {
    title: "The dinner-rush demand spike",
    body: "Everything fires at 6pm: cooking line, HVAC fighting the kitchen heat, dining room at full light. One 15-minute window of everything-on can set your demand charge for the whole month.",
  },
  {
    title: "The Price to Compare trap",
    body: "If your supply contract lapsed, you're sitting on PECO or PPL's default Price to Compare — no price protection, repriced periodically. Plenty of restaurants land there without realizing it.",
  },
];

const moves = [
  {
    title: "Maintain the refrigeration",
    body: "Dirty condenser coils, worn door gaskets, and walk-ins set colder than they need to be make compressors work far harder than they should. A maintenance pass on the boxes is the cheapest demand reduction a restaurant can buy.",
  },
  {
    title: "Don't fire the whole line at once",
    body: "Stagger equipment startups before service instead of lighting every fryer, oven, and warmer in the same 15 minutes. Same cooking, lower peak — and the demand charge only prices your worst quarter-hour.",
  },
  {
    title: "Benchmark your rate",
    body: "Pull your supply rate off the bill and compare it to your utility's Price to Compare and what competitive suppliers are offering. If you're above it, a broker bidding your usage across suppliers usually beats a single renewal quote.",
  },
];

const faqs = [
  {
    q: "Why is my restaurant's electric bill so high?",
    a: "Three reasons stack up: refrigeration runs 24/7 with no off-hours, the cooking line and HVAC all peak together during dinner service (which sets your demand charge for the month), and many restaurants sit on their utility's default rate after a contract lapses — with zero price protection.",
  },
  {
    q: "What uses the most electricity in a restaurant?",
    a: "Refrigeration — walk-in coolers and freezers running around the clock — is typically the biggest slice. Next comes the cooking line during service hours, then HVAC working against kitchen exhaust, then lighting.",
  },
  {
    q: "What is PECO's Price to Compare?",
    a: "It's PECO's default supply rate — what you pay if you don't have a competitive supplier contract. It adjusts periodically and offers no price protection. PPL and Duquesne Light have their own versions. If your contract expired and you did nothing, this is probably what you're on.",
  },
  {
    q: "Can a small restaurant negotiate electricity rates?",
    a: "Yes. In Pennsylvania's deregulated market, any business can shop competitive suppliers — and a broker bids your actual usage across multiple suppliers so they compete for your account. Restaurants the big comparison sites ignore are exactly who this works best for.",
  },
  {
    q: "Will my power be interrupted if I switch suppliers?",
    a: "No. PECO, PPL, or Duquesne Light keeps delivering your power and fixing outages no matter who supplies it. Switching changes the supply line on your bill and nothing else — the walk-ins stay cold the whole time.",
  },
];

export default function RestaurantsPage() {
  return (
    <div className="bg-white">
      <Script id="schema-restaurants-faq" type="application/ld+json">
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
      <section className="band-dark border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <FadeIn>
            <Link href="/industries" className="text-sm font-medium text-brand-300 hover:text-brand-200">
              ← All industries
            </Link>
            <span className="eyebrow mt-4">Industry playbook</span>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Your walk-in runs 24/7. Your electricity contract shouldn&apos;t punish you for it.
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              Restaurants run some of the most punishing electric loads in
              small business — refrigeration that never sleeps, a cooking
              line that all fires at once, margins too thin to absorb a
              bad rate. Here&apos;s what actually drives the bill in
              Pennsylvania, and what to do about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Upload My Bill — Free Review
              </Link>
              <Link href="/locations/pennsylvania" className="btn btn-secondary">
                PA Rates & Utilities
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="eyebrow">The load</span>
            <h2 className="h2 mt-4 max-w-2xl">The equipment that drives the bill</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {equipment.map((e, i) => (
              <FadeIn key={e.title} delay={i * 80}>
                <div className="card h-full p-7">
                  <h3 className="text-lg font-semibold text-slate-900">{e.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{e.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Drivers */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="eyebrow">The problem</span>
            <h2 className="h2 mt-4 max-w-2xl">Why restaurant bills are brutal</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {drivers.map((d, i) => (
              <FadeIn key={d.title} delay={i * 80}>
                <div className="card h-full p-7">
                  <h3 className="text-lg font-semibold text-slate-900">{d.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{d.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Moves */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="eyebrow">The playbook</span>
            <h2 className="h2 mt-4 max-w-2xl">Three moves that actually help</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {moves.map((m, i) => (
              <FadeIn key={m.title} delay={i * 60}>
                <div className="card card-hover h-full p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{m.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{m.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <p className="mt-8 max-w-3xl text-slate-600">
              Want the full story on the sneakiest line item?{" "}
              <Link href="/demand-charges-explained" className="font-medium text-brand-700 hover:text-brand-600">
                Demand charges, explained →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="band-dark">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_0px,rgba(249,115,22,0.18),transparent)]"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              What should a restaurant your size be paying?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Upload your bill and we&apos;ll tell you — your rate versus
              the market, whether your demand charge is fair, and what
              your renewal should cost. Free, no obligation.
            </p>
            {/* BEN: insert real client story here — trade, town, before/after with dollars */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get My Free Bill Review
              </Link>
              <Link href="/contract-expired" className="btn btn-lg btn-outline-light">
                Contract Expiring?
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <span className="eyebrow">Straight answers</span>
            <h2 className="h2 mt-4">Restaurant electricity questions</h2>
          </FadeIn>
          <div className="mt-10 space-y-6">
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
    </div>
  );
}
