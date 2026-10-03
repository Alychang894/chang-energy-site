// app/locations/new-england/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Commercial Electricity in New England",
  description:
    "Businesses in Massachusetts, Rhode Island, Connecticut, and New Hampshire can choose their electricity supplier. How New England choice works and how to beat winter price spikes.",
  alternates: {
    canonical: "/locations/new-england",
  },
};

const faqs = [
  {
    q: "Which New England states have energy choice?",
    a: "Massachusetts, Rhode Island, Connecticut, and New Hampshire all let businesses choose a competitive electricity supplier. Maine has limited choice. Vermont is largely still utility-supplied.",
  },
  {
    q: "Why are New England winter electric rates so high?",
    a: "The region depends heavily on natural gas for power generation but has limited pipeline capacity into the region. On the coldest winter days, gas gets diverted to heating, power plants compete for scarce supply, and wholesale electricity prices spike — sometimes dramatically. Fixed-rate contracts signed before winter are the main defense.",
  },
  {
    q: "What is ISO New England?",
    a: "ISO-NE operates the region's power grid and wholesale markets, including a Forward Capacity Market that pays generators to be available. Capacity costs show up on commercial bills — another line item worth managing.",
  },
  {
    q: "Does switching suppliers change who fixes outages?",
    a: "No. Eversource, National Grid, Unitil, or your local utility still owns the wires and restores power. Only the supply portion of your bill changes.",
  },
];

export default function NewEnglandPage() {
  return (
    <main>
      <Script id="schema-ne-faq" type="application/ld+json">
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

      <section className="band-dark relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_80%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <FadeIn>
            <span className="eyebrow">Service Areas · New England</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              New England winters punish unprepared electric bills.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Businesses in MA, RI, CT, and NH can choose their
              electricity supplier — and with winter gas constraints
              driving some of the country&apos;s sharpest seasonal price
              swings, locking the right rate before the cold hits is
              everything. That&apos;s what we do.
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

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How energy choice works in New England
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Each state runs its own choice program under the ISO New
              England grid — the rules differ, but the principle is the
              same.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Your utility delivers",
                text: "Eversource, National Grid, Unitil, or your municipal utility keeps the wires, reads the meter, and restores outages. Delivery is never up for bid.",
              },
              {
                title: "You choose the supplier",
                text: "In MA, RI, CT, and NH, licensed competitive suppliers compete for commercial accounts — with fixed-rate terms that protect you from the region's notorious winter spikes.",
              },
              {
                title: "We time the market",
                text: "New England pricing is seasonal and event-driven. We watch forward curves and contract your renewal when the market favors buyers — not when your expiration forces your hand.",
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

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              What to watch on your New England commercial bill
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Winter gas constraint spikes",
                text: "Limited pipeline capacity means the coldest days bring fierce competition for natural gas between heating and power generation. Wholesale prices — and variable-rate bills — can surge. Fixed contracts signed in shoulder seasons avoid it.",
              },
              {
                title: "Capacity market costs",
                text: "ISO-NE's Forward Capacity Market pays generators to be available, and those costs flow into commercial bills. They're set by auctions, not your usage — but the right contract structure keeps them predictable.",
              },
              {
                title: "Basic service rollover",
                text: "Each utility's default 'basic service' rate reprices every few months. Businesses that drift on it ride every seasonal swing. It's the most expensive way to buy electricity in New England over time.",
              },
              {
                title: "State-by-state fine print",
                text: "Renewal notice rules, contract length norms, and available products differ across MA, RI, CT, and NH. We track the differences so a multi-site business gets one coherent strategy, not four headaches.",
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
            <p className="mt-8 text-sm text-slate-500">
              Utilities we work with across New England include Eversource,
              National Grid, and Unitil, across Massachusetts, Rhode
              Island, Connecticut, and New Hampshire.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              New England FAQs
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

      <section className="band-dark py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Don&apos;t head into winter on a variable rate.
            </h2>
            <p className="mt-3 text-slate-300">
              Send us your bill. We&apos;ll show you what winter could
              cost on your current plan versus a locked fixed rate —
              free, no obligation.
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
