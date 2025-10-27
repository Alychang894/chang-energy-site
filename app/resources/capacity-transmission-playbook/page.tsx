// app/resources/capacity-transmission-playbook/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Capacity & Transmission Playbook | Resources | Chang Energy",
  description:
    "Practical PLC/NSPL tactics to cut demand charges without disrupting operations.",
};

export default function Page() {
  const siteUrl = "https://changenergygroup.com";

  return (
    <main className="px-6 py-12">
      {/* JSON-LD: Breadcrumb + TechArticle */}
      <Script id="schema-capacity-breadcrumbs" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Resources", item: `${siteUrl}/resources` },
            { "@type": "ListItem", position: 2, name: "Capacity & Transmission Playbook", item: `${siteUrl}/resources/capacity-transmission-playbook` },
          ],
        })}
      </Script>
      <Script id="schema-capacity-article" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Capacity & Transmission Playbook",
          description:
            "Reduce PLC/NSPL and demand charges using targeted peak alerts, short curtailment windows, and YOY tracking.",
          url: `${siteUrl}/resources/capacity-transmission-playbook`,
          about: ["PJM PLC", "NSPL", "Peak demand management", "Demand charges"],
          author: { "@type": "Organization", name: "Chang Energy" },
        })}
      </Script>

      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-[#F97316]/10 px-2.5 py-1 text-xs font-medium text-[#F97316]">
            Guide
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Capacity & Transmission Playbook
          </h1>
          <p className="mt-3 text-gray-700">
            A pragmatic approach to lowering PLC/NSPL without slowing production or service. Alerts when it matters,
            quiet when it doesn’t—so your teams can focus on operations.
          </p>
        </FadeIn>

        <div className="mt-8 space-y-6">
          <FadeIn delay={100}>
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">1) Predict peaks, not people</h2>
              <p className="mt-2 text-gray-700">
                Use regional indicators to flag likely peaks. Keep the signal simple for sites: “Reduce for this
                60–120 minute window.” Avoid alert fatigue with clear start/stop.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={150}>
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">2) Curtailment playbooks by site</h2>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>What to shut off (and what not to)</li>
                <li>How to sequence load safely</li>
                <li>Who confirms and logs actions</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={200}>
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">3) Verify savings & trend PLC/NSPL</h2>
              <p className="mt-2 text-gray-700">
                Track tags year-over-year and attribute savings back to events and behaviors so finance trusts the numbers.
              </p>
            </section>
          </FadeIn>
        </div>

        <FadeIn delay={250}>
          <div className="mt-8 flex items-center gap-3">
            <Link href="/resources" className="text-[#F97316] font-medium">
              ← Back to Resources
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-gray-900 px-4 py-2 text-[15px] font-semibold text-white hover:bg-black/90"
            >
              Request a Consultation
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
