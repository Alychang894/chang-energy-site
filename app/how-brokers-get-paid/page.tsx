// app/how-brokers-get-paid/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How Electricity Brokers Get Paid (And Why Ours Costs You Nothing)",
  description:
    "Are electricity brokers legit? How a broker gets paid, why it costs your business nothing, and 5 questions to ask any broker before you sign.",
  alternates: {
    canonical: "/how-brokers-get-paid",
  },
};

const faqs = [
  {
    q: "Does using an electricity broker cost me extra?",
    a: "No. Brokers are paid a commission by the supplier when a contract is signed — it comes out of the supplier's margin, not your pocket. Think of it like a real-estate agent: the seller pays the commission, the buyer doesn't pay extra for having representation.",
  },
  {
    q: "Do brokers really get better rates than going direct?",
    a: "Usually, yes. A broker bids your usage across multiple suppliers who compete for your business, which tends to beat the single quote you'd get calling one supplier yourself. And a good broker will show you the bids side by side so you can see that for yourself.",
  },
  {
    q: "How do I know a broker isn't just pushing the supplier that pays them most?",
    a: "Ask them to show you competing bids from multiple suppliers, side by side, with the commission disclosed. A broker who works for you has no reason to hide that. If a broker only ever brings you one supplier's offer, that's your answer.",
  },
  {
    q: "What's the difference between a broker and a supplier sales rep?",
    a: "A supplier rep sells one company's product. A broker shops your usage across many suppliers and brings you the best fit. The rep's job is to close you on their rate; the broker's job is to find you the best rate.",
  },
  {
    q: "Do I have to switch suppliers to use Chang Energy?",
    a: "Not necessarily. If your current rate is already fair, we'll tell you that — a free bill review sometimes ends with 'you're fine, don't change a thing.' We only recommend a switch when the numbers say it's worth it.",
  },
];

const steps = [
  {
    n: "1",
    title: "You sign a supplier contract",
    what: "You pick a rate and term from real competing bids. The price you see is the price you pay — nothing added on top for us.",
  },
  {
    n: "2",
    title: "The supplier pays us from their margin",
    what: "When the contract is secured, the supplier pays us a commission — the same way they'd pay their own sales team. It never comes out of your pocket.",
  },
  {
    n: "3",
    title: "Your rate is the same or better than going direct",
    what: "Because suppliers compete for brokered business, the rate you get through us is typically as good as — often better than — what you'd get calling that supplier yourself.",
  },
];

const checklist = [
  {
    q: "Do they disclose how they're paid?",
    a: "If a broker gets vague about money, walk away. The answer should be one sentence: suppliers pay us when you sign.",
  },
  {
    q: "Are they locked to one supplier, or do they bid multiple?",
    a: "A broker with one supplier is just a sales rep with a different title. Ask how many suppliers they'll put your usage in front of.",
  },
  {
    q: "Will they show you the bids side by side?",
    a: "Side-by-side bids are the whole point. If they only bring you one 'great deal,' you can't know it's great.",
  },
  {
    q: "Do they charge you any fee on top?",
    a: "The answer should be no. A broker's compensation comes from the supplier — if you're being asked to pay a separate fee, ask exactly what it's for.",
  },
  {
    q: "Who do they work for when there's a billing dispute?",
    a: "The right answer: you. A broker worth keeping picks up the phone and fights the supplier on your behalf when a bill looks wrong.",
  },
];

export default function HowBrokersGetPaidPage() {
  return (
    <main>
      <Script id="schema-broker-faq" type="application/ld+json">
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
            <span className="eyebrow">Trust & Transparency</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              We get paid by the suppliers. Not by you.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              It&apos;s the first question every smart business owner asks,
              so let&apos;s answer it up front: using a broker costs you
              nothing. Like a real-estate agent&apos;s commission, the
              supplier pays it — you just get the representation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Get My Free Bill Review
              </Link>
              <Link href="/contract-expired" className="btn btn-secondary">
                Contract Expiring? Read This
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How the money flows */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How the money actually flows
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              No fine print, no mystery. Three steps:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 80}>
                <div className="card h-full p-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                    Step {s.n}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-slate-600">{s.what}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Independence test */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              The independence test: 5 questions to ask any broker
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Ask us these. Ask every broker these. The honest ones will
              love the questions:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {checklist.map((c, i) => (
              <FadeIn key={c.q} delay={i * 80}>
                <div className="card h-full p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {c.q}
                  </h3>
                  <p className="mt-2 text-[15px] text-slate-600">{c.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          {/* BEN: insert real client story here — business name, town, before/after rate with dollars */}
        </div>
      </section>

      {/* Why this matters */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why this matters
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Plenty of business owners have been burned before —
              door-to-door reps, teaser rates that doubled, contracts
              signed under pressure. That skepticism is healthy, and we
              don&apos;t take it personally.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Here&apos;s the difference: a supplier rep has one product
              to sell you. A broker who shows you{" "}
              <strong>multiple bids, side by side</strong>, has nowhere to
              hide. The bids are the proof. If they&apos;re not on the
              table, neither is our recommendation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA band */}
      <section className="band-dark py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              See what multiple suppliers would charge you — free.
            </h2>
            <p className="mt-3 text-slate-300">
              Upload your bill and we&apos;ll bring you competing bids
              from multiple suppliers, side by side, with everything
              disclosed. No obligation, no fee, no sales-rep energy.
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
              Broker questions, answered straight
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
