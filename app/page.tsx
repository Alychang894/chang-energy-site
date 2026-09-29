// app/page.tsx
import Hero from "../components/Hero";
import Offering from "../components/Offering";
import FadeIn from "../components/FadeIn";
import Link from "next/link";

function TrustBar() {
  const items = [
    { t: "Transparent markups", d: "See exactly what suppliers charge." },
    { t: "Same utility delivers", d: "Only the supplier changes — no interruption." },
    { t: "Free bill review", d: "No obligation, no pushy sales calls." },
    { t: "Built for operators", d: "Plans fit your shifts, seasons, and sites." },
  ];
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((x, i) => (
          <FadeIn key={x.t} delay={i * 80}>
            <div className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M16.7 5.3a1 1 0 00-1.4-1.4L8 11.17 4.7 7.88a1 1 0 10-1.4 1.42l4 4a1 1 0 001.4 0l8-8z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-slate-900">{x.t}</p>
                <p className="mt-0.5 text-sm text-slate-600">{x.d}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    n: "1",
    title: "Upload your bill",
    body: "Snap a photo or attach a PDF of a recent electricity bill through our secure form. It takes about a minute — and your free review starts the moment it lands.",
  },
  {
    n: "2",
    title: "We shop & audit",
    body: "We run your usage against competitive supplier bids and audit every line of the bill for errors, bad tariffs, and inflated demand charges.",
  },
  {
    n: "3",
    title: "You approve the rate",
    body: "You see side-by-side options with full transparency. Pick the winner — we handle the switch paperwork. Your utility keeps delivering, uninterrupted.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow justify-center">How it works</span>
            <h2 className="h2 mt-4">From bill to better rate in three steps</h2>
            <p className="p mx-auto mt-4 max-w-2xl text-lg">
              No cold calls, no 40-page contracts to decode. Just a clear look
              at what you&apos;re paying and what you could be paying.
            </p>
          </FadeIn>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* connector line */}
          <div aria-hidden className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-slate-300 md:block" />
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 120}>
              <div className="card relative h-full p-7 text-center">
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-bold text-white shadow-md">
                  {s.n}
                  <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-brand-500 ring-4 ring-slate-50" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <p className="mt-8 text-center text-[15px] text-slate-600">
            Prefer email?{" "}
            <a href="mailto:ben@changenergygroup.com" className="link-brand font-semibold">
              ben@changenergygroup.com
            </a>{" "}
            — a real person reviews every bill.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

const industries = [
  { name: "Restaurants & Chains", d: "High-usage kitchens with thin margins." },
  { name: "Manufacturing", d: "Rates tied to shifts and throughput." },
  { name: "Cold Storage", d: "24/7 refrigeration, managed demand.", href: "/industries/cold-storage" },
  { name: "Healthcare", d: "Reliability first, costs controlled." },
  { name: "Offices & Retail", d: "Multi-site consistency and reporting." },
  { name: "Laundromats & Auto Shops", d: "Small businesses hit hardest by spikes." },
];

function IndustriesStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <FadeIn>
            <span className="eyebrow">Industries</span>
            <h2 className="h2 mt-4 max-w-xl">Built for businesses that can&apos;t afford energy surprises</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <Link href="/industries" className="btn btn-outline">
              All industries
              <span aria-hidden>→</span>
            </Link>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <FadeIn key={ind.name} delay={i * 70}>
              <Link
                href={ind.href ?? "/industries"}
                className="card card-hover group flex h-full items-start gap-4 p-6"
              >
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-slate-950 text-brand-400 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block font-semibold text-slate-900">{ind.name}</span>
                  <span className="mt-1 block text-sm text-slate-600">{ind.d}</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Will my power be interrupted if I switch suppliers?",
    a: "No. Your local utility still delivers the electricity over the same wires and handles outages. Only the company supplying the energy — and the rate you pay — changes.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a recent electricity bill. It shows your usage pattern, current rate, and demand charges — everything we need to shop competitive bids and audit for errors.",
  },
  {
    q: "I'm already under contract. Can you still help?",
    a: "Yes. Send the bill and your contract if you have it. We'll review the terms, flag the end date, and time a switch so you avoid rollover into an expensive default rate.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve businesses across Pennsylvania, Ohio, Texas, and New England — covering both deregulated markets like PJM and ERCOT.",
  },
  {
    q: "What does the bill review cost?",
    a: "Nothing. The review is free and there's no obligation. If we can't beat what you're paying, we'll tell you straight.",
  },
];

function Faq() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <div className="text-center">
          <FadeIn>
            <span className="eyebrow justify-center">FAQ</span>
            <h2 className="h2 mt-4">Questions business owners ask us</h2>
          </FadeIn>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 60}>
              <details className="card group p-6 open:shadow-lift">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform group-open:rotate-45 group-open:bg-brand-600 group-open:text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="band-dark">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_340px_at_50%_0px,rgba(249,115,22,0.18),transparent)]"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Stop overpaying for electricity.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Upload a bill today — by this time next week you could be looking
            at a rate that actually makes sense for your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get My Free Bill Review
            </Link>
            <a href="mailto:ben@changenergygroup.com" className="btn btn-lg btn-outline-light">
              Email Us Instead
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Free review · No obligation · Every bill reviewed by a real human
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Commercial energy procurement"
        title="Your electricity bill is negotiable."
        subtitle="Chang Energy helps businesses across PA, OH, TX, and New England cut electricity costs — competitive supplier pricing, demand-charge strategy, and line-by-line bill audits. Upload your utility bill and start your free review today."
        imageUrl="/images/hero-power.jpg"
        ctas={[
          { label: "Get My Free Bill Review", href: "/contact", variant: "primary" },
          { label: "Email Us", href: "mailto:ben@changenergygroup.com", variant: "outline" },
        ]}
      />
      <TrustBar />
      <HowItWorks />
      <Offering />
      <IndustriesStrip />
      <Faq />
      <FinalCta />
    </>
  );
}
