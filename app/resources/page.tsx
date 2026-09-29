// app/resources/page.tsx
import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Chang Energy",
  description:
    "Operator-friendly guides and templates: Capacity & Transmission Playbook, Block+Index Strategy Guide, and an Energy Budget Template.",
};

const SITE_URL = "https://www.changenergygroup.com";

const tools = [
  {
    kind: "Calculator",
    title: "Blended Rate Calculator",
    blurb:
      "Plug in your usage and rate components to see your true all-in cost per kWh — the number suppliers hope you never calculate.",
    href: "/resources/blended-rate-calculator",
  },
];

const resources = [
  {
    kind: "Guide",
    title: "Capacity & Transmission Playbook",
    blurb:
      "Cut demand charges with practical PLC/NSPL tactics that won't disrupt operations. Alerts, curtailment windows, year-over-year tracking.",
    href: "/resources/capacity-transmission-playbook",
  },
  {
    kind: "Guide",
    title: "Block+Index Strategy Guide",
    blurb:
      "When fixed is safer, when index is cheaper — and how to size blocks by risk. Transparent markup, hedge logic, and timing tips.",
    href: "/resources/block-index-strategy-guide",
  },
  {
    kind: "Template",
    title: "Energy Budget Template",
    blurb:
      "A simple template for budget vs. actuals with variance explanations — clear visibility for finance and operations.",
    href: "/resources/energy-budget-template",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      {/* JSON-LD: Resources listing */}
      <Script id="schema-resources" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "WebApplication",
              name: "Blended Rate Calculator",
              url: `${SITE_URL}/resources/blended-rate-calculator`,
              about:
                "Calculate your true all-in electricity cost per kWh from usage and rate components.",
              applicationCategory: "UtilitiesApplication",
            },
            {
              "@type": "TechArticle",
              headline: "Capacity & Transmission Playbook",
              url: `${SITE_URL}/resources/capacity-transmission-playbook`,
              about: "PLC/NSPL tactics, alerts, curtailment windows, and tracking.",
              keywords: [
                "PJM energy efficiency programs",
                "Peak demand management",
                "PJM peak demand charges",
              ],
            },
            {
              "@type": "TechArticle",
              headline: "Block+Index Strategy Guide",
              url: `${SITE_URL}/resources/block-index-strategy-guide`,
              about:
                "How to balance fixed and index exposure and size blocks by risk.",
              keywords: [
                "Energy contract optimization",
                "Commercial energy rates",
                "Energy rate analysis",
              ],
            },
            {
              "@type": "HowTo",
              name: "Energy Budget Template",
              url: `${SITE_URL}/resources/energy-budget-template`,
              description:
                "Simple template to track budget vs. actuals with variance notes.",
              totalTime: "PT10M",
              step: [
                { "@type": "HowToStep", name: "Enter monthly usage & rates" },
                { "@type": "HowToStep", name: "Track actuals and PLC costs" },
                { "@type": "HowToStep", name: "Record variance explanations" },
              ],
            },
          ],
        })}
      </Script>

      <section className="band-dark border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_80%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
          <FadeIn>
            <span className="eyebrow">Resources</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Tools you can use today
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              Guides and templates you can use immediately — no sales pitch
              required.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Interactive tools
            </h2>
            <p className="mt-1 text-[15px] text-slate-600">
              Run the numbers yourself — right in your browser.
            </p>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {tools.map((r, i) => (
              <FadeIn key={r.title} delay={i * 80}>
                <a
                  href={r.href}
                  className="card card-hover group relative block h-full p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
                  <span className="badge-brand">{r.kind}</span>
                  <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                    {r.title}
                  </h2>
                  <p className="mt-2 text-[15px] text-slate-600">{r.blurb}</p>
                  <span className="link-brand mt-4 inline-flex items-center gap-1 text-[15px]">
                    Open
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                    </svg>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <h2 className="mt-14 text-xl font-bold tracking-tight text-slate-900">
              Guides & templates
            </h2>
            <p className="mt-1 text-[15px] text-slate-600">
              Plain-language playbooks you can put to work immediately.
            </p>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {resources.map((r, i) => (
              <FadeIn key={r.title} delay={i * 80}>
                <a
                  href={r.href}
                  className="card card-hover group relative block h-full p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
                  <span className="badge-brand">{r.kind}</span>
                  <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                    {r.title}
                  </h2>
                  <p className="mt-2 text-[15px] text-slate-600">{r.blurb}</p>
                  <span className="link-brand mt-4 inline-flex items-center gap-1 text-[15px]">
                    Open
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                    </svg>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="band-dark mt-12 rounded-3xl p-8 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_240px_at_20%_0px,rgba(249,115,22,0.16),transparent)]"
              />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                    Want a walkthrough?
                  </h4>
                  <p className="mt-2 text-slate-300">
                    We&apos;ll review your invoices and show you how to use these
                    tools on your sites.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="btn btn-primary">
                    Get My Free Bill Review
                  </Link>
                  <a href="mailto:ben@changenergygroup.com" className="btn btn-outline-light">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
