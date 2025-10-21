// app/resources/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Resources | Chang Energy",
  description:
    "Operator-friendly guides and templates for procurement, PLC/NSPL, and budgeting.",
};

const items = [
  {
    tag: "Guide (PDF)",
    title: "Capacity & Transmission Playbook",
    desc:
      "Cut demand charges with practical PLC/NSPL tactics and short, site-friendly curtailment windows—no downtime drama.",
    href: "/resources/capacity-transmission",
  },
  {
    tag: "Guide (PDF)",
    title: "Block+Index Strategy Guide",
    desc:
      "When fixed is safer, when index is cheaper—and how to size hedge blocks to real usage patterns.",
    href: "/resources/block-index",
  },
  {
    tag: "Template",
    title: "Energy Budget Template",
    desc:
      "A clean Excel model for budget vs. actuals with variance notes and a place to show verified savings.",
    href: "/resources/energy-budget-template",
  },
  {
    tag: "Insights",
    title: "Insights Library",
    desc:
      "Quick, operator-friendly reads on procurement, PLC/NSPL, and energy budgeting.",
    href: "/resources/insights",
  },
];

export default function ResourcesPage() {
  return (
    <main className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Resources
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Tools, guides, and templates you can use immediately—no sales pitch required.
          </p>
        </FadeIn>

        {/* Contact-first banner (no public calculator) */}
        <FadeIn delay={80}>
          <div className="mt-6 rounded-2xl border border-brand/20 bg-brand/5 p-5">
            <p className="text-sm text-gray-800">
              Want your true blended rate or PLC/NSPL exposure? We’ll calculate it and show
              where your budget can be stabilized.{" "}
              <a href="/contact" className="link-brand font-medium">
                Request a consultation →
              </a>
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((r, i) => (
            <FadeIn key={r.title} delay={(i + 2) * 80}>
              <a
                href={r.href}
                className="card block p-6 hover:shadow-lg transition-shadow"
              >
                <span className="badge-brand">{r.tag}</span>
                <h2 className="mt-3 text-lg font-semibold text-gray-900">
                  {r.title}
                </h2>
                <p className="mt-2 text-gray-600">{r.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm link-brand">
                  Open <span aria-hidden>→</span>
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
