// app/industries/cold-storage/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../../components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cold Storage Energy Strategy | Chang Energy",
  description:
    "Demand-charge and procurement strategy for cold storage and refrigerated warehouses: defrost layering, compressor sequencing, door heaters, and PLC reduction — without risking product.",
};

const challenges = [
  {
    title: "24/7 refrigeration load",
    body: "Refrigeration runs constantly, so there's no 'off-hours' to hide in. Costs come from sustained kW and the capacity tag assigned on the five coincident peaks.",
  },
  {
    title: "Capacity tags (PLC/NSPL)",
    body: "One hot afternoon during a grid peak can set your capacity obligation for the entire next year. In cold storage, that tag is often the single biggest avoidable cost.",
  },
  {
    title: "Product is non-negotiable",
    body: "You can't just shut down compressors to chase savings. Every curtailment plan has to respect temperature bands, defrost cycles, and food safety.",
  },
];

const tactics = [
  {
    title: "Defrost layering",
    body: "Stagger defrost cycles across evaporator banks instead of stacking them. Same refrigeration work, lower coincident kW during peak-risk hours.",
  },
  {
    title: "Compressor sequencing",
    body: "Run the most efficient compressors first and trim part-load operation. Sequencing controls can shave peaks without changing box temperatures.",
  },
  {
    title: "Door discipline & heaters",
    body: "Infiltration from open dock doors drives pulldown load. Heaters, strip curtains, and door-ajar alarms cut the moisture and heat that compressors have to fight.",
  },
  {
    title: "PLC reduction playbook",
    body: "On the handful of predicted peak days each summer, we send targeted alerts with short, practical curtailment windows — pre-cool, trim non-essential load, then release. Quiet the rest of the year.",
  },
  {
    title: "Thermal mass as a battery",
    body: "Pre-cooling ahead of a peak window lets you coast through it. Your product's thermal mass becomes free storage — if the plan is engineered, not improvised.",
  },
  {
    title: "Tariff & rider validation",
    body: "Cold storage sites are frequently on the wrong rate schedule or missing credits they qualify for. We audit the tariff line by line.",
  },
];

const process = [
  { n: "1", t: "Site walk & data review", d: "We review 12 months of interval data and invoices, plus how your rooms, compressors, and shifts actually run." },
  { n: "2", t: "Peak & tariff diagnosis", d: "We identify what's driving your capacity tag, demand charges, and where the tariff or billing errors are." },
  { n: "3", t: "Procurement + playbook", d: "Competitive supplier bids for the supply side, and a peak-season playbook your operators can actually follow." },
  { n: "4", t: "Track & refine", d: "Monthly invoice QA and tag tracking, so next year's peaks get easier instead of more expensive." },
];

export default function ColdStoragePage() {
  return (
    <div className="bg-white">
      {/* Header band */}
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
              Cold storage energy strategy — without risking the product
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              Refrigerated warehouses pay a premium for running 24/7. We attack
              the parts of the bill you can actually control: the capacity tag,
              demand peaks, and procurement — engineered around food safety, not
              against it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="eyebrow">The challenge</span>
            <h2 className="h2 mt-4 max-w-2xl">Why cold storage bills are different</h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {challenges.map((c, i) => (
              <FadeIn key={c.title} delay={i * 80}>
                <div className="card h-full p-7">
                  <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tactics */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="eyebrow">The playbook</span>
            <h2 className="h2 mt-4 max-w-2xl">Operational tactics that cut demand without touching product</h2>
            <p className="p mt-4 max-w-3xl text-lg">
              These are the levers we evaluate at every cold storage site. The
              right combination depends on your compressors, controls, and
              operating reality.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tactics.map((t, i) => (
              <FadeIn key={t.title} delay={i * 60}>
                <div className="card card-hover h-full p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{t.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <span className="eyebrow">How we work</span>
            <h2 className="h2 mt-4 max-w-2xl">From first walkthrough to lower peaks</h2>
          </FadeIn>
          <div className="relative mt-12 grid gap-6 md:grid-cols-4">
            <div aria-hidden className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-slate-300 md:block" />
            {process.map((p, i) => (
              <FadeIn key={p.n} delay={i * 90}>
                <div className="relative text-center">
                  <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-xl font-bold text-white shadow-md">
                    {p.n}
                    <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-brand-500 ring-4 ring-white" />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band-dark">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_0px,rgba(249,115,22,0.18),transparent)]"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Know your capacity tag? Most cold storage operators don&apos;t.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Send a recent bill and we&apos;ll tell you what&apos;s driving it —
              and whether your peak-season strategy is costing you. Free, no
              obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get My Free Bill Review
              </Link>
              <a href="tel:+12673408300" className="btn btn-lg btn-outline-light">
                Call +1-267-340-8300
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
