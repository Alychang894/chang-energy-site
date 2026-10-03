// app/demand-charges-explained/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Demand Charges, Explained (The Line Item That Triples Bills)",
  description:
    "What is a demand charge on a commercial electric bill? How one 15-minute spike re-prices your whole month — and 3 moves that lower it.",
  alternates: {
    canonical: "/demand-charges-explained",
  },
};

const faqs = [
  {
    q: "What is a demand charge?",
    a: "A demand charge is a fee based on your highest 15 minutes of electricity use during the billing month, measured in kilowatts (kW). It pays for the grid capacity reserved to serve your peak — and it's billed on top of your energy (kWh) charges.",
  },
  {
    q: "What's the difference between kW and kWh?",
    a: "kW (kilowatts) is how much power you draw at one moment — like the speedometer. kWh (kilowatt-hours) is how much energy you use over time — like the odometer. Demand charges are priced on kW, your peak moment; supply charges are priced on kWh, your total usage.",
  },
  {
    q: "Can I eliminate demand charges?",
    a: "Usually not entirely — they're part of how commercial tariffs work. But you can often shrink them a lot: stagger equipment startups so everything doesn't spike at once, shift heavy loads where your tariff allows, and make sure you're on the right rate class. A bill review finds the quick wins.",
  },
  {
    q: "Why is my demand charge so high this month?",
    a: "Almost always one spike: a single 15-minute window where everything ran at once — equipment startup, HVAC cycling on during production, an extra shift. The demand charge doesn't care about your average; it prices your worst 15 minutes.",
  },
  {
    q: "Do all businesses pay demand charges?",
    a: "Most commercial and industrial accounts do, once usage passes a threshold. Small accounts on simple commercial rates may not see a separate demand line — but if your bill shows a kW figure anywhere, you're paying one.",
  },
];

const moves = [
  {
    n: "1",
    title: "Stagger your startups",
    what: "Don't fire up every motor, oven, compressor, and dryer bank at the same time. Sequencing startups across 30–60 minutes can cut your peak — and your demand charge — without changing total energy use at all.",
  },
  {
    n: "2",
    title: "Shift heavy loads where the tariff allows",
    what: "Some rate structures price peak-window demand much higher than off-peak. Moving the heaviest work out of the peak window, where your operations allow it, directly lowers the billed peak.",
  },
  {
    n: "3",
    title: "Get your rate class reviewed",
    what: "Businesses get put on the wrong rate class more often than you'd think — and the wrong class can mean the wrong demand structure entirely. A review of your actual load profile against available tariffs sometimes finds money with zero behavior change.",
  },
];

export default function DemandChargesExplainedPage() {
  return (
    <main>
      <Script id="schema-demand-faq" type="application/ld+json">
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
            <span className="eyebrow">Bill Literacy</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              One 15-minute spike can re-price your whole month.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              That&apos;s the demand charge: a fee on your highest 15
              minutes of power use, billed on top of your energy charges.
              Most owners have never heard of it — until it triples a
              bill.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Find My Demand Charge — Free
              </Link>
              <Link href="/resources" className="btn btn-secondary">
                Browse Resources
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The war story */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              The story we&apos;ve seen more than once
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              A shop owner wires up a new piece of equipment. Fires it up
              once, just to check it works. The startup current from that
              single test puts him on a different rate schedule — and his
              next bill <strong>triples</strong>.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              He didn&apos;t use three times the electricity. He just had
              one bad 15 minutes. That&apos;s the demand charge working
              exactly as designed — and it&apos;s why the line item
              deserves your attention even when the bill looks normal.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How it actually works
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Forget the textbook. Here&apos;s the whole concept in three
              cards:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FadeIn delay={0}>
              <div className="card h-full p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                  Your peak
                </p>
                <p className="mt-2 text-[15px] text-slate-600">
                  Your meter records your highest 15 minutes of usage
                  (kW) for the month. One spike — everything starting at
                  once — sets the number.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={80}>
              <div className="card h-full p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                  The charge
                </p>
                <p className="mt-2 text-[15px] text-slate-600">
                  The utility multiplies that peak by a per-kW rate. The
                  result lands on your bill on top of your energy (kWh)
                  charges.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="card h-full p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                  The whole month
                </p>
                <p className="mt-2 text-[15px] text-slate-600">
                  That one 15-minute window prices the entire month&apos;s
                  demand charge. Twenty-nine calm days don&apos;t offset
                  one loud one.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Where to find it */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Where it hides on your bill
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              The demand line rarely calls itself &ldquo;demand
              charge.&rdquo; Look for words like <strong>demand</strong>,{" "}
              <strong>kW charge</strong>, or{" "}
              <strong>facilities charge</strong> — and the giveaway unit:{" "}
              <strong>kW</strong>, not kWh. If you see a kW figure with a
              dollar amount next to it, that&apos;s the line.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Can&apos;t find it? Upload the bill and we&apos;ll point to
              the exact line — and tell you whether what you&apos;re
              paying for it is fair.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3 moves */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              3 moves that lower it
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {moves.map((m, i) => (
              <FadeIn key={m.n} delay={i * 80}>
                <div className="card h-full p-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                    Move {m.n}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-slate-600">{m.what}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="band-dark py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Upload your bill — we&apos;ll find your demand charge and
              tell you if it&apos;s fair.
            </h2>
            <p className="mt-3 text-slate-300">
              Free, no obligation. We&apos;ll point to the exact line,
              explain what&apos;s driving it, and tell you what a fair
              number looks like for your kind of business.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Get My Free Bill Review
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Demand-charge questions, answered straight
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
    </main>
  );
}
