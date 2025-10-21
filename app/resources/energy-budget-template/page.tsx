import type { Metadata } from "next";
import FadeIn from "../../../components/FadeIn";

export const metadata: Metadata = {
  title: "Energy Budget Template | Resources",
  description:
    "A clean Excel model for budget vs. actuals with variance notes and verified savings.",
};

export default function BudgetTemplatePage() {
  return (
    <main className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="badge-brand">Template</span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Energy Budget Template
          </h1>
          <p className="mt-3 text-gray-700">
            Drop in your invoices and load. The template rolls up site-level results to a
            clean summary view with variance explanations and a spot to show verified savings.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-6 rounded-2xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Included sheets</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
              <li>Site Inputs (invoices, kWh, peaks)</li>
              <li>Budget vs. Actuals with variance drivers</li>
              <li>Savings attribution and notes</li>
              <li>Portfolio roll-up for finance & leadership</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resources/energy-budget-template.xlsx"
                className="btn btn-primary"
                download
              >
                Download Excel
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
