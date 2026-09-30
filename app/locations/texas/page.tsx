// app/locations/texas/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Commercial Electricity in Texas | Chang Energy",
  description:
    "Texas businesses in deregulated areas can choose their electricity provider. How ERCOT choice works, 4CP transmission charges, and beating summer peaks — explained plainly.",
};

const faqs = [
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

      <section className="bg-white py-14 md:py-20">
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

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              What to watch on your Texas commercial bill
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
            <p className="mt-8 text-sm text-slate-500">
              Delivery utilities (TDSPs) across our Texas footprint include
              Oncor, CenterPoint Energy, AEP Texas, and Texas-New Mexico
              Power (TNMP).
            </p>
          </FadeIn>
        </div>
      </section>

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
