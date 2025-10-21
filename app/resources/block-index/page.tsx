import type { Metadata } from "next";
import FadeIn from "../../../components/FadeIn";

export const metadata: Metadata = {
  title: "Block+Index Strategy Guide | Resources",
  description:
    "When fixed is safer, when index is cheaper—and how to size hedge blocks to match real usage.",
};

export default function BlockIndexGuidePage() {
  return (
    <main className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="badge-brand">Guide (PDF)</span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Block+Index Strategy Guide
          </h1>
          <p className="mt-3 text-gray-700">
            A practical guide for choosing between fixed, index, or hybrid—and sizing the
            hedge to your actual baseload and seasonality.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-6 rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">What’s inside</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
              <li>Quick heuristics to pick fixed, index, or block+index</li>
              <li>How to size hedge % to baseload vs. variable usage</li>
              <li>Term length and risk posture by budget tolerance</li>
              <li>Reporting that attributes savings monthly</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resources/block-index-strategy-guide.pdf"
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
