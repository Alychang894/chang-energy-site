// app/industries/laundromats/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../../components/FadeIn";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Laundromat Electricity Bills in Texas — Cut the Demand Spikes",
  description:
    "Dryer banks create brutal demand spikes on Texas laundromat bills. How 4CP charges work, why timing matters, and practical moves that lower the bill.",
  alternates: {
    canonical: "/industries/laundromats",
  },
};

const equipment = [
  {
    title: "Dryer banks",
    body: "The heaviest hitters in the building. A full bank of commercial dryers firing at once draws an enormous load — and if they all start together, that single moment can set your demand charge for the month.",
  },
  {
    title: "Commercial water heaters",
    body: "Hot water for dozens of washers, all day. Water heating is relentless and mostly invisible on the bill — until you look at the total kWh and realize how much of it is just making hot water.",
  },
  {
    title: "Washers & extractors",
    body: "Lower draw than dryers, but they run constantly. High-extraction machines that spin more water out before drying actually save real money on the dryer side.",
  },
  {
    title: "HVAC & lighting",
    body: "Texas heat plus dryer exhaust heat means the AC fights a two-front war all summer. Long hours and bright lighting for safety add a steady baseload on top.",
  },
];

const drivers = [
  {
    title: "Dryer banks stack demand",
    body: "This is the laundromat's signature problem. Ten dryers starting within minutes of each other creates one towering 15-minute peak — and the demand charge prices that peak, not your average. The machines did the same work; the timing is what cost you.",
  },
  {
    title: "4CP transmission charges",
    body: "In ERCOT, part of your delivery cost is set by your usage during the four summer coincident peaks (4CP). Run everything full-blast on a triple-digit August afternoon and you're paying for it all year.",
  },
  {
    title: "Volatility exposure",
    body: "Texas is an energy-only market famous for price spikes. A laundromat on a variable or holdover plan — instead of a locked fixed rate — is the most exposed seat in the house when the market moves.",
  },
];

const moves = [
  {
    title: "Sequence the dryer banks",
    body: "Don't let a full bank start in the same 15 minutes. Staggering dryer starts across 30–60 minutes spreads the load — same drying done, dramatically lower peak. This one habit is worth more than most equipment upgrades.",
  },
  {
    title: "Mind the 4CP windows",
    body: "On the hottest summer afternoons, trim what you can: pre-cool the building in the morning, ease off non-essential load during peak hours. You can't shut dryers off, but you can avoid stacking everything at the worst possible moment.",
  },
  {
    title: "Lock a fixed rate before summer",
    body: "Shop your supply contract in the shoulder seasons — not in August when everyone's scrambling. A fixed rate through the summer takes ERCOT volatility off your plate entirely.",
  },
];

const faqs = [
  {
    q: "What's a typical electric bill for a laundromat?",
    a: "It varies enormously with machine count, hours, and how the dryer banks are run — a small store and a 60-machine operation live in different worlds. What matters more than the total is the structure: if a big chunk is demand charges, sequencing the dryers can cut it without changing a thing about operations.",
  },
  {
    q: "Why is my laundromat's demand charge so high?",
    a: "Almost always the dryer banks. When many dryers start within the same 15-minute window, that one peak sets the demand charge for the entire month. Staggering starts is the single most effective fix, and it costs nothing.",
  },
  {
    q: "What is 4CP in Texas?",
    a: "The Four Coincident Peaks — ERCOT measures system-wide demand on the highest summer afternoons, and your usage during those windows helps set your transmission charges for the next year. For a laundromat running full tilt on a 105° day, those afternoons are expensive.",
  },
  {
    q: "Can laundromats choose their electricity provider in Texas?",
    a: "Yes — most of Texas is deregulated, so laundromats in Oncor, CenterPoint, AEP Texas, and TNMP territory can shop competitive suppliers. A broker bids your actual usage across suppliers instead of you taking the first renewal offer that lands in the mail.",
  },
  {
    q: "Will my power be interrupted if I switch?",
    a: "No. Your TDU — Oncor, CenterPoint, whoever owns the poles — keeps delivering power and fixing outages regardless of supplier. The dryers never notice the switch; only the supply line on your bill changes.",
  },
];

export default function LaundromatsPage() {
  return (
    <div className="bg-white">
      <Script id="schema-laundromats-faq" type="application/ld+json">
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
              Dryer banks don&apos;t negotiate. We do.
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              A Texas laundromat is a demand-charge machine: banks of dryers
              that all fire at once, water heaters that never rest, and
              4CP transmission charges waiting on the hottest afternoons
              of the year. Here&apos;s how the bill actually works — and
              how to fight it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Upload My Bill — Free Review
              </Link>
              <Link href="/locations/texas" className="btn btn-secondary">
                Texas Rates & TDUs
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
            <h2 className="h2 mt-4 max-w-2xl">Why laundromat bills are brutal</h2>
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
              The demand charge is the whole game here —{" "}
              <Link href="/demand-charges-explained" className="font-medium text-brand-700 hover:text-brand-600">
                here&apos;s how it works in plain English →
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
              What should a laundromat your size be paying?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Upload your bill. We&apos;ll find your demand charge, check
              your 4CP exposure, and tell you what your supply rate should
              be — free, no obligation.
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
            <h2 className="h2 mt-4">Laundromat electricity questions</h2>
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
