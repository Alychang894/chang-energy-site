// app/page.tsx
import type { Metadata } from "next";
import Hero from "../components/Hero";
import Offering from "../components/Offering";
import FadeIn from "../components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Electricity Broker for Small Business",
  description:
    "Chang Energy negotiates lower commercial electricity rates for small businesses in PA, OH, TX, and New England. Free bill review — upload your bill and see what you should be paying.",
  alternates: { canonical: "/" },
};

function TrustBar() {
  const items = [
    { t: "No hidden markups", d: "You'll see exactly what the supplier charges." },
    { t: "Same utility, same wires", d: "Nothing changes except the rate you pay." },
    { t: "Free bill review", d: "No obligation — and no pushy sales calls, ever." },
    { t: "One person who knows you", d: "A real point of contact, not a call center." },
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
    body: "We shop your usage against competitive supplier bids and go through your bill line by line — catching errors, wrong tariffs, and inflated demand charges.",
  },
  {
    n: "3",
    title: "You approve the rate",
    body: "You get simple side-by-side options with everything spelled out. Pick the one you like — we handle the switch paperwork, and your utility keeps delivering without missing a beat.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow justify-center">How it works</span>
            <h2 className="h2 mt-4">From your bill to a better rate in three steps</h2>
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
  { name: "Restaurants & Chains", d: "Kitchens running full tilt on thin margins." },
  { name: "Laundromats & Auto Shops", d: "The little guys hit hardest when rates spike." },
  { name: "Offices & Retail", d: "One clean picture across every location." },
  { name: "Manufacturing", d: "Power costs that move with your shifts." },
  { name: "Cold Storage", d: "Round-the-clock cooling without the scary bills.", href: "/industries/cold-storage" },
  { name: "Healthcare", d: "Reliable power with costs under control." },
];

function IndustriesStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <FadeIn>
            <span className="eyebrow">Industries</span>
            <h2 className="h2 mt-4 max-w-xl">Built for businesses that feel every penny of their electric bill</h2>
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
    a: "Nope — not for a second. Your local utility still delivers electricity over the same wires and handles any outages. The only thing that changes is the company supplying the energy, and the rate you pay for it.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just one thing: a recent electricity bill. That's it — it shows your usage, your current rate, and any demand charges, which is everything we need to shop better bids and check for errors.",
  },
  {
    q: "I'm already under contract. Can you still help?",
    a: "Yes. Send the bill and your contract if you have it. We'll review the terms, flag the end date, and time a switch so you avoid rollover into an expensive default rate.",
  },
  {
    q: "Which areas do you serve?",
    a: "We're set up across Pennsylvania, Ohio, Texas, and New England — including the big deregulated markets (PJM and ERCOT). If your business is in one of those states, we can almost certainly help.",
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
            <h2 className="h2 mt-4">Questions we hear all the time</h2>
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
            Let&apos;s take a look at your bill.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Snap a photo of your latest electric bill and send it our way. A
            real person will dig in and show you what&apos;s possible — usually
            within a few days.
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
        eyebrow="Your business energy partner"
        title="Your electricity bill is negotiable."
        subtitle="Your electric bill shouldn't be a mystery — or a budget-killer. Upload a recent bill and a real person will shop better supplier rates for you, check every line for errors, and show you where your money is actually going. Free review, zero obligation. We help everyone from corner restaurants to multi-site operations across PA, OH, TX, and New England."
        imageUrl="/images/hero-storefront.jpg"
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
