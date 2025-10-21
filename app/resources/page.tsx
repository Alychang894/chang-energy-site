// app/resources/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn"; // correct depth from /app/resources

export const metadata: Metadata = {
  title: "Resources | Chang Energy",
  description:
    "Operator-friendly playbooks and templates: capacity & transmission, block+index strategy, and energy budget tracking.",
};

type ResourceItem = {
  kind: string;     // <- we use this as the badge
  title: string;
  href: string;
  blurb: string;
};

const items: ResourceItem[] = [
  {
    kind: "Guide (Page)",
    title: "Capacity & Transmission Playbook",
    href: "/resources/capacity-transmission-playbook",
    blurb:
      "Cut demand charges with practical PLC/NSPL tactics that won’t disrupt operations.",
  },
  {
    kind: "Guide (Page)",
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
      "A simple model for budget vs. actuals with variance explanations and KPI rollups.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Resources
          </h1>
          <p className="mt-3 max-w-3xl text-gray-700">
            Tools, guides, and templates you can use immediately—no sales pitch required.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((r) => (
            <FadeIn key={r.href}>
              <Link
                href={r.href}
                className="group block rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="inline-flex items-center rounded-full bg-[#F97316]/10 px-2.5 py-1 text-xs font-medium text-[#F97316]">
                  {r.kind}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-800">
                  {r.title}
                </h2>
                <p className="mt-2 text-gray-600">{r.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#F97316]">
                  Open →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Callout */}
        <FadeIn delay={150}>
          <div className="mt-10 rounded-2xl border bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">
              Want a walkthrough?
            </h3>
            <p className="mt-1 text-gray-600">
              We’ll review your invoices and show you how to use these tools on your sites.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-[15px] font-semibold text-white hover:bg-black/90"
            >
              Request a Consultation
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
