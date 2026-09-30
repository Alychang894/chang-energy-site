// app/locations/pennsylvania/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Commercial Electricity in Pennsylvania | Chang Energy",
  description:
    "Pennsylvania businesses can choose their electricity supplier. Learn how PA energy choice works, what to watch on your PECO, PPL, or Duquesne bill, and how we shop suppliers for you.",
};

const SITE_URL = "https://www.changenergygroup.com";

const faqs = [
  {
    q: "Do I have to switch electricity suppliers in Pennsylvania?",
    a: "No — switching is optional. If you don't choose, your utility (PECO, PPL, Duquesne Light, etc.) supplies your electricity at its default service rate, called the Price to Compare. But that default rate changes periodically and is rarely the cheapest option for a business.",
  },
  {
    q: "Will my power go out if I switch suppliers?",
    a: "No. Your utility still delivers the electricity, maintains the lines, and restores outages. Only the supply portion of your bill changes — the company name on the supply line and the rate you pay.",
  },
  {
    q: "What are capacity charges on my Pennsylvania commercial bill?",
    a: "Pennsylvania is in the PJM grid, which charges for capacity based on your usage during peak hours (your PLC tag) and transmission based on a separate peak (your NSPL tag). For many businesses these charges rival the energy itself — and managing them is a big part of what we do.",
  },
  {
    q: "How far in advance should I shop for a new rate?",
    a: "Start 3–6 months before your contract ends. That gives time to compare real supplier offers instead of rushing into whatever's available the week your contract expires — which is when most businesses overpay.",
  },
];

export default function PennsylvaniaPage() {
  return (
    <main>
      <Script id="schema-pa-faq" type="application/ld+json">
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
            <span className="eyebrow">Service Areas · Pennsylvania</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Commercial electricity in Pennsylvania, without the guesswork.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              PA businesses have been able to choose their electricity
              supplier for years — but most still pay the default rate. We
              shop vetted suppliers for you and lock in a fixed rate that
              fits your usage.
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

      {/* How choice works */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How energy choice works in PA
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Pennsylvania deregulated electricity supply in the late 1990s,
              with choice fully phased in across utilities by the early
              2010s. Here&apos;s the short version:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Your utility still delivers",
                text: "PECO, PPL, Duquesne Light, or your FirstEnergy company (Met-Ed, Penelec, Penn Power, West Penn) keeps delivering power and fixing outages. That never changes.",
              },
              {
                title: "You choose who supplies it",
                text: "Instead of the utility's default Price to Compare, you can buy your electricity supply from a competing supplier — often at a lower fixed rate.",
              },
              {
                title: "We do the shopping",
                text: "We compare offers from vetted suppliers against your actual usage, negotiate terms, and handle the switch. You approve the rate before anything changes.",
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

      {/* What to watch */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              What to watch on your PA commercial bill
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "The Price to Compare trap",
                text: "Your utility's default rate adjusts periodically. Businesses that never shop are effectively on a variable plan — paying whatever the current default is, with no protection when markets spike.",
              },
              {
                title: "Capacity and transmission tags",
                text: "Because PA sits in the PJM grid, part of your bill is set by your usage during a handful of peak hours each year (your PLC and NSPL tags). One unmanaged peak can inflate costs for twelve months.",
              },
              {
                title: "Auto-renewal clauses",
                text: "Many PA supply contracts roll over automatically — often onto variable rates. Mark your end date and shop 3–6 months early, not the week it expires.",
              },
              {
                title: "Demand charges",
                text: "Larger commercial accounts pay for their highest 15–30 minutes of demand each month. Shifting heavy equipment off peak hours can cut this line item without cutting production.",
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
              Utilities we work with across Pennsylvania include PECO, PPL
              Electric Utilities, Duquesne Light, Met-Ed, Penelec, Penn
              Power, and West Penn Power.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Pennsylvania FAQs
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

      {/* CTA */}
      <section className="band-dark py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Paying the PECO or PPL default rate?
            </h2>
            <p className="mt-3 text-slate-300">
              Send us your bill. We&apos;ll show you exactly what
              you&apos;re paying, when your contract ends, and what a fixed
              rate would look like — free, no obligation.
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
