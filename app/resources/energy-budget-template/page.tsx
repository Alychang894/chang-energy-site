// app/resources/energy-budget-template/page.tsx
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";

export const metadata = {
  title: "Energy Budget Template | Resources | Chang Energy",
  description:
    "Simple template for budget vs. actuals with variance explanations and PLC/NSPL visibility.",
};

export default function Page() {
  return (
    <main className="px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="text-sm text-gray-500">
            <Link href="/resources" className="hover:underline">
              Resources
            </Link>{" "}
            / Energy Budget Template
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Energy Budget Template
          </h1>
          <p className="mt-3 text-gray-700">
            Operator-friendly budget vs. actuals with variance notes, hedge
            position, and PLC/NSPL indicators. Import monthly invoices and let
            the template surface what changed and why.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-semibold">What’s inside</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
              <li>Budget vs. actuals with variance % and $</li>
              <li>Capacity/transmission visibility (PLC/NSPL notes)</li>
              <li>Space for explanations and exception tracking</li>
              <li>Roll-up view for multi-site operators</li>
            </ul>

            <a
              href="/resources/energy-budget-template.xlsx"
              className="mt-6 inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
            >
              Download the Excel Template
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-semibold">How to use</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-700">
              <li>Copy the template to your workbook or use as-is.</li>
              <li>Enter monthly kWh, demand charges, and supplier costs.</li>
              <li>Add PLC/NSPL or demand-charge notes where relevant.</li>
              <li>Capture short explanations for variances over a threshold.</li>
            </ol>
            <div className="mt-6 rounded-lg bg-orange-50 p-4 text-sm text-orange-800">
              Tip: set thresholds (e.g., &gt; 5% or &gt; $2,000 variance) to
              require a short explanation. That keeps finance informed and ops
              accountable without busywork.
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 rounded-2xl border bg-white p-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-semibold">Need a custom dashboard?</h3>
                <p className="mt-1 text-gray-700">
                  We’ll tailor KPIs, add data imports, and build a roll-up for
                  your portfolio.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
