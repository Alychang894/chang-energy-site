// app/resources/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Resources | Chang Energy",
  description:
    "Operator-friendly guides, calculators, and playbooks for predictable energy budgets.",
};

const items = [
  {
    title: "Blended Rate Calculator",
    desc: "Understand how your fixed and indexed blocks combine—get the real blended rate.",
    href: "/resources/blended-rate-calculator",
    tag: "Tool",
  },
  {
    title: "Capacity & Transmission Playbook",
    desc: "Cut demand charges with practical PLC/NSPL tactics that won’t disrupt operations.",
    href: "#",
    tag: "Guide (PDF)",
  },
  {
    title: "Block+Index Strategy Guide",
    desc: "When fixed is safer, when index is cheaper—and how to size blocks by risk.",
    href: "#",
    tag: "Guide (PDF)",
  },
  {
    title: "Energy Budget Template",
    desc: "A simple template for budget vs. actuals with variance explanations.",
    href: "#",
    tag: "Template",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-6">
          <FadeIn>
            <h1 className="text-4xl font-bold text-gray-900">Resources</h1>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Tools, guides, and templates you can use immediately—no sales pitch required.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((x, i) => (
            <FadeIn key={x.title} delay={i * 75}>
              <a
                href={x.href}
                className="block rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-xs font-medium text-indigo-700 rounded-full bg-indigo-50 inline-block px-2 py-1 ring-1 ring-indigo-100">
                  {x.tag}
                </div>
                <h2 className="mt-3 text-xl font-semibold text-gray-900">{x.title}</h2>
                <p className="mt-2 text-gray-700">{x.desc}</p>
                <span className="mt-4 inline-block text-sm text-indigo-700">Open →</span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={350}>
          <section className="mt-12 rounded-2xl border bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Want a walkthrough?</h3>
              <p className="mt-1 text-gray-600">
                We’ll review your invoices and show you how to use these tools on your sites.
              </p>
            </div>
            <a className="btn btn-primary" href="/contact">Book a Strategy Call</a>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
