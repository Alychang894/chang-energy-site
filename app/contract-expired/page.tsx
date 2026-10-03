// app/contract-expired/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Your Business Electricity Contract Expired? Here's What Happens Next",
  description:
    "When a business electricity contract ends, you don't keep your old rate — you roll onto a default rate often 2–3× higher. What happens market by market, and how to fix it fast.",
  alternates: {
    canonical: "/contract-expired",
  },
};

const faqs = [
  {
    q: "What happens when my business electricity contract expires?",
    a: "You don't keep your old rate. Your account rolls onto the supplier's default — usually a variable holdover rate or your utility's default service rate. Suppliers themselves warn these holdover rates can run two to three times your old fixed rate. The meter keeps spinning; only the price changes, and it changes against you.",
  },
  {
    q: "How far in advance should I shop before my contract ends?",
    a: "Start 4–6 months out. That gives time to pull 12 months of bills, get competing bids from multiple suppliers, and negotiate — instead of panic-signing whatever's offered the week your contract dies. The 60–90 day window before expiration is the minimum; earlier is better.",
  },
  {
    q: "Can I switch suppliers before my contract ends?",
    a: "Yes, but check your early termination fee first — it's in your contract's fine print. Sometimes the fee is small enough that switching early to a much lower fixed rate still saves money. Send us your contract and we'll do that math for you.",
  },
  {
    q: "Will my power be interrupted if I switch?",
    a: "No. Your utility — PECO, Oncor, AEP Ohio, Eversource, whoever delivers your power — keeps delivering it and fixing outages no matter who supplies it. Switching changes the supply line on your bill and nothing else.",
  },
  {
    q: "What is a holdover rate?",
    a: "The rate your supplier charges after your fixed contract ends and you haven't signed a new one. It's typically variable, it moves with the market, and it's priced for the supplier's benefit, not yours. Industry folks call it the 'rack rate' — the maximum price they can legally charge you.",
  },
];

const markets = [
  {
    name: "Pennsylvania",
    utility: "PECO, PPL, Duquesne Light",
    what: "You fall back to your utility's Price to Compare — a default rate that adjusts periodically with zero price protection.",
  },
  {
    name: "Ohio",
    utility: "AEP Ohio, Duke, FirstEnergy",
    what: "You land on the Standard Service Offer (SSO), repriced through PUCO-overseen auctions. It can look fine one period and jump the next.",
  },
  {
    name: "Texas",
    utility: "Oncor, CenterPoint, AEP Texas",
    what: "Your provider moves you to a holdover or month-to-month variable plan — the most exposed position in an energy-only market famous for price spikes.",
  },
  {
    name: "New England",
    utility: "Eversource, National Grid, Unitil",
    what: "You revert to basic service, repriced every few months. In a region with winter gas constraints, that's the most expensive way to buy electricity over time.",
  },
];

const timeline = [
  {
    when: "180–120 days out",
    what: "Pull 12 months of bills. Find your exact end date and early termination fee. This is the diagnosis phase.",
  },
  {
    when: "120–90 days out",
    what: "Get competing bids from multiple suppliers against your real usage — not teaser rates. This is where a broker earns their keep.",
  },
  {
    when: "90–30 days out",
    what: "Negotiate term length and rate type, then sign. Fixed rates for budget certainty; the market rewards early shoppers.",
  },
  {
    when: "Under 30 days",
    what: "You're in the danger zone — sign the best available fixed rate now rather than rolling to holdover. Don't let it lapse.",
  },
];

export default function ContractExpiredPage() {
  return (
    <main>
      <Script id="schema-contract-faq" type="application/ld+json">
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
            <span className="eyebrow">Contract Renewals</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Your old rate is gone. The replacement costs 2–3× more.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              When a business electricity contract ends and you do nothing,
              you don&apos;t keep your old rate. You roll onto the
              supplier&apos;s default — priced for their benefit, not
              yours. Here&apos;s exactly what happens, and how to fix it
              before the next bill.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Upload My Bill — Find My End Date
              </Link>
              <Link href="/why-chang-energy" className="btn btn-secondary">
                Why Fixed Rates Win
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What expired means */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              What &ldquo;expired&rdquo; actually means
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Your fixed-rate contract was a deal: a set price for a set
              time. When the time runs out without a new deal, the supplier
              doesn&apos;t extend the courtesy. You drop onto what the
              industry calls a <strong>holdover rate</strong> — sometimes
              labeled variable, month-to-month, or default service.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Here&apos;s the part that stings: suppliers themselves warn
              that holdover rates can run{" "}
              <strong>two to three times</strong> your old fixed rate. It
              has a nickname in the business — the{" "}
              <strong>&ldquo;rack rate&rdquo;</strong>: the maximum price
              they can legally charge you. And every month you sit on it,
              that difference goes straight to their bottom line. One
              broker put it bluntly:{" "}
              <em>doing nothing is the costliest decision a business can
              make.</em>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Market by market */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Where you land, market by market
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              The default has a different name everywhere, but it&apos;s
              the same trap:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {markets.map((m, i) => (
              <FadeIn key={m.name} delay={i * 80}>
                <div className="card h-full p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-700">
                    {m.utility}
                  </p>
                  <p className="mt-2 text-[15px] text-slate-600">{m.what}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              The renewal timeline that protects you
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              The businesses that overpay all share one trait: they shopped
              the week their contract died. Here&apos;s the timeline that
              keeps the leverage on your side:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <FadeIn key={t.when} delay={i * 80}>
                <div className="card h-full p-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                    {t.when}
                  </p>
                  <p className="mt-2 text-[15px] text-slate-600">{t.what}</p>
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
              Don&apos;t know when your contract ends? We&apos;ll find out
              in one business day.
            </h2>
            <p className="mt-3 text-slate-300">
              Upload your bill. We&apos;ll tell you your exact end date,
              what you&apos;re paying now, and what your renewal should
              cost — free, no obligation. If your rate is already fair,
              we&apos;ll tell you that too.
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
              Contract questions, answered straight
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
