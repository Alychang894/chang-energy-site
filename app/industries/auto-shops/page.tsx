// app/industries/auto-shops/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../../components/FadeIn";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Auto Shop Electricity Costs in Ohio — Tame the Demand Charge",
  description:
    "Lifts, compressors, and paint booths stack brutal demand peaks on Ohio auto shop bills. What drives the cost, practical moves that cut it, and the SSO trap to avoid.",
  alternates: {
    canonical: "/industries/auto-shops",
  },
};

const equipment = [
  {
    title: "Vehicle lifts",
    body: "Two-post and four-post lifts cycle all day as bays turn over. Each lift motor is a short, sharp draw — and when three bays lift cars within minutes of each other, the peaks stack.",
  },
  {
    title: "Air compressors",
    body: "The shop's heartbeat: impacts, ratchets, blow guns, lifts all drink from the same compressor. Startup inrush current on a big compressor is one of the nastiest single loads in a small commercial building.",
  },
  {
    title: "Paint booths",
    body: "If you run a booth, you know: heaters and airflow for bake cycles are an enormous concentrated load. One booth session can dominate the month's demand picture by itself.",
  },
  {
    title: "Lighting & HVAC",
    body: "Bright bays for detail work, a waiting room to keep comfortable, and an Ohio winter pushing heat through big bay doors that open all day. Steady, significant, and mostly overlooked.",
  },
];

const drivers = [
  {
    title: "Compressor startups stack",
    body: "One compressor kicking on is normal. Three bays hitting impacts while the lift motors cycle and the compressor restarts — that's the 15-minute peak your demand charge is priced on. The shop did the same work; the timing is what cost you.",
  },
  {
    title: "The paint booth problem",
    body: "Booth bake cycles concentrate huge heat and airflow load into a short window. Run a booth session on top of a busy shop morning and you've set the month's peak before lunch.",
  },
  {
    title: "The SSO trap",
    body: "Let your supply contract lapse in Ohio and you land on the Standard Service Offer — repriced through PUCO-overseen auctions, no price protection. It can look reasonable one period and jump the next, and shops on SSO rarely realize what happened.",
  },
];

const moves = [
  {
    title: "Sequence the heavy starts",
    body: "Don't fire the compressor, cycle two lifts, and start the booth in the same quarter-hour. Spreading the heaviest starts across the morning flattens the peak that prices your whole month's demand charge.",
  },
  {
    title: "Batch the booth work",
    body: "Group paint jobs so the booth heats once for a full session instead of cycling up for single jobs across the week. One hot booth doing three cars beats three warm-ups — in energy and in throughput.",
  },
  {
    title: "Audit the air system",
    body: "Leaks make the compressor cycle far more often than it should — a hissing shop is a compressor running overtime. Fixing leaks and right-sizing pressure cuts both energy and the startup peaks that drive demand charges.",
  },
];

const faqs = [
  {
    q: "How do auto shops lower demand charges?",
    a: "Sequence heavy equipment starts so lifts, compressors, and the paint booth don't all fire in the same 15 minutes. Fix air leaks so the compressor cycles less. Batch paint booth sessions. The demand charge prices your worst quarter-hour of the month — flattening that peak is the entire game.",
  },
  {
    q: "What uses the most electricity in an auto repair shop?",
    a: "The air compressor system is usually the biggest driver — constant cycling plus brutal startup current. Paint booth bake cycles are the largest single concentrated load if you run a booth. Lifts, lighting, and HVAC fill out the rest.",
  },
  {
    q: "What is Ohio's Standard Service Offer?",
    a: "The SSO is the default supply rate from AEP Ohio, Duke, or FirstEnergy when you don't have a competitive supplier contract. It's repriced through PUCO-overseen auctions and offers no price protection — if your contract expired and you did nothing, you're probably on it.",
  },
  {
    q: "Can a small auto shop negotiate electricity rates?",
    a: "Yes. Ohio's deregulated market lets any business shop competitive suppliers, and a broker bids your actual usage — lifts, compressors, booth and all — across multiple suppliers. Small shops the big comparison sites ignore are exactly who this works best for.",
  },
  {
    q: "Will my power be interrupted if I switch?",
    a: "No. AEP Ohio, Duke, or FirstEnergy keeps delivering your power and fixing outages no matter who supplies it. The lifts keep lifting through the switch — only the supply line on your bill changes.",
  },
];

export default function AutoShopsPage() {
  return (
    <div className="bg-white">
      <Script id="schema-autoshops-faq" type="application/ld+json">
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
              Lifts, compressors, and a demand charge you never saw coming.
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              An Ohio auto shop is a peak-making machine: compressors with
              brutal startup current, lifts cycling all day, paint booths
              that concentrate a month of load into one morning. Here&apos;s
              what actually drives the bill — and the SSO trap to avoid.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Upload My Bill — Free Review
              </Link>
              <Link href="/locations/ohio" className="btn btn-secondary">
                Ohio Rates & Utilities
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
            <h2 className="h2 mt-4 max-w-2xl">Why auto shop bills are brutal</h2>
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
              The demand charge is doing most of the damage —{" "}
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
              What should a shop your size be paying?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Upload your bill. We&apos;ll find your demand charge, check
              whether you&apos;re stuck on the SSO, and tell you what your
              supply rate should be — free, no obligation.
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
            <h2 className="h2 mt-4">Auto shop electricity questions</h2>
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
