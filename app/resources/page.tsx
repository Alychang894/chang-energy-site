// app/resources/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Resources | Chang Energy",
  description:
    "Operator-friendly guides and templates: Capacity & Transmission Playbook, Block+Index Strategy Guide, and an Energy Budget Template.",
};

const resources = [
  {
    kind: "Guide",
    colorClass: "bg-orange-50 text-orange-700 ring-orange-400/20",
    title: "Capacity & Transmission Playbook",
    blurb:
      "Cut demand charges with practical PLC/NSPL tactics that won’t disrupt operations. Alerts, curtailment windows, year-over-year tracking.",
    href: "/resources/capacity-transmission-playbook",
  },
  {
    kind: "Guide",
    colorClass: "bg-orange-50 text-orange-700 ring-orange-400/20",
    title: "Block+Index Strategy Guide",
    blurb:
      "When fixed is safer, when index is cheaper—and how to size blocks by risk. Transparent markup, hedge logic, and timing tips.",
    href: "/resources/block-index-strategy-guide",
  },
  {
    kind: "Template",
    colorClass: "bg-amber-50 text-amber-700 ring-amber-400/20",
    title: "Energy Budget Template",
    blurb:
      "A simple template for budget vs. actuals with variance explanations—clear visibility for finance and operations.",
    href: "/resources/energy-budget-template",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <section className="border-b bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-orange-600/10">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <FadeIn>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Resources</h1>
            <p className="mt-4 max-w-3xl text-gray-700">
              Tools and guides you can use immediately—no sales pitch required.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((r, i) => (
              <FadeIn key={r.title} delay={i * 80}>
                <a
                  href={r.href}
                  className="group relative block overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-medium ring-1 ${r.colorClass}`}
                  >
                    {r.kind}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold text-gray-900">{r.title}</h2>
                  <p className="mt-2 text-gray-700">{r.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[15px] font-medium text-orange-700">
                    Open
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                    </svg>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="mt-10 rounded-2xl border bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Want a walkthrough?</h4>
                  <p className="mt-1 text-gray-700">
                    We’ll review your invoices and show you how to use these tools on your sites.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-[15px] font-semibold text-white shadow-sm hover:bg-black/90"
                >
                  Request a Consultation
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
