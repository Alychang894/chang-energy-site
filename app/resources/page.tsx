// app/resources/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Resources | Chang Energy",
  description:
    "Operator-friendly guides and templates for procurement, PLC/NSPL, and budgeting.",
};

// inside your resources listing
const items = [
  {
    kind: "Guide",
    title: "Capacity & Transmission Playbook",
    href: "/resources/capacity-transmission-playbook",
    blurb:
      "Cut demand charges with practical PLC/NSPL tactics that won’t disrupt ops.",
  },
  {
    kind: "Guide",
    title: "Block+Index Strategy Guide",
    href: "/resources/block-index-strategy-guide",
    blurb:
      "When fixed is safer, when index is cheaper—and how to size blocks by risk.",
  },
  {
    kind: "Template",
    title: "Energy Budget Template",
    href: "/resources/energy-budget-template",
    blurb:
      "Budget vs. actuals with variance explanations and PLC/NSPL visibility.",
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
