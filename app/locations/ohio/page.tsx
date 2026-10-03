// app/locations/ohio/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Commercial Electricity in Ohio",
  description:
    "Ohio businesses can shop for electricity supply through PUCO's choice program. How Ohio energy choice works, what to watch on AEP, Duke, and FirstEnergy bills, and how we help.",
  alternates: {
    canonical: "/locations/ohio",
  },
};

const faqs = [
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

      <section className="bg-white py-14 md:py-20">
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

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              What to watch on your Ohio commercial bill
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
            <p className="mt-8 text-sm text-slate-500">
              Utilities we work with across Ohio include AEP Ohio, Duke
              Energy Ohio, AES Ohio, Ohio Edison, The Illuminating Company,
              and Toledo Edison.
            </p>
          </FadeIn>
        </div>
      </section>

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
