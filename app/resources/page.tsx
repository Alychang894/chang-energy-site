// app/resources/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Resources | Chang Energy",
  description:
    "Tools, guides, and templates you can use immediately—no sales pitch required.",
};

type Resource = {
  tag: "Tool" | "Guide (PDF)" | "Template";
  title: string;
  desc: string;
  href: string;
};

const items: Resource[] = [
  {
    tag: "Tool",
    title: "Blended Rate Calculator",
    desc: "Understand how your fixed and indexed blocks combine—get the real blended rate.",
    href: "/resources/blended-rate-calculator",
  },
  {
    tag: "Guide (PDF)",
    title: "Capacity & Transmission Playbook",
    desc: "Cut demand charges with practical PLC/NSPL tactics that won’t disrupt operations.",
    href: "/resources/capacity-playbook.pdf",
  },
  {
    tag: "Guide (PDF)",
    title: "Block+Index Strategy Guide",
    desc: "When fixed is safer, when index is cheaper—and how to size blocks by risk.",
    href: "/resources/block-index-guide.pdf",
  },
  {
    tag: "Template",
    title: "Energy Budget Template",
    desc: "A simple template for budget vs. actuals with variance explanations.",
    href: "/resources/energy-budget-template.xlsx",
  },
];

export default function ResourcesPage() {
  return (
    <main className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Resources</h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Tools, guides, and templates you can use immediately—no sales pitch required.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((r, i) => (
            <FadeIn key={r.title} delay={i * 80}>
              <a href={r.href} className="card block p-6 hover:shadow-lg transition-shadow">
                <span className="badge-brand">{r.tag}</span>
                <h2 className="mt-3 text-lg font-semibold text-gray-900">{r.title}</h2>
                <p className="mt-2 text-gray-600">{r.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm link-brand">
                  Open <span aria-hidden>→</span>
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* helper CTA */}
        <FadeIn delay={400}>
          <div className="mt-12 rounded-2xl border bg-white p-8 flex items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold">Want a walkthrough?</h3>
              <p className="mt-1 text-gray-600">
                We’ll review your invoices and show you how to use these tools on your sites.
              </p>
            </div>
            <a href="/contact" className="btn btn-primary px-4 py-2">Request a Consultation</a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
