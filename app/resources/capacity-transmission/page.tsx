import type { Metadata } from "next";
import FadeIn from "../../../components/FadeIn";

export const metadata: Metadata = {
  title: "Capacity & Transmission Playbook | Resources",
  description:
    "Practical PLC/NSPL reduction with targeted peak alerts and short, site-friendly curtailment windows.",
};

export default function CapacityTransmissionPage() {
  return (
    <main className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="badge-brand">Guide (PDF)</span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Capacity & Transmission Playbook
          </h1>
          <p className="mt-3 text-gray-700">
            Cut demand charges without disrupting throughput. This short playbook covers
            PLC/NSPL fundamentals, targeted peak alerts, and site-specific curtailment
            windows that actually work in real operations.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-6 rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">What’s inside</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
              <li>Peak prediction signals that matter (and which to ignore)</li>
              <li>Site-by-site curtailment options that respect operations</li>
              <li>Year-over-year PLC/NSPL tracking with verified savings</li>
              <li>How to communicate plan and impact to finance</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resources/capacity-transmission-playbook.pdf"
                className="btn btn-primary"
                download
              >
                Download PDF
              </a>
              <a href="/contact" className="btn btn-outline">
                Request a Consultation
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
