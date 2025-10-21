// app/resources/block-index-strategy-guide/page.tsx
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Block+Index Strategy Guide | Resources | Chang Energy",
  description:
    "When fixed is safer, when index is cheaper—and how to size blocks by risk, usage patterns, and hedge goals.",
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
            / Block+Index Strategy Guide
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Block+Index Strategy Guide
          </h1>
          <p className="mt-3 text-gray-700">
            Balance budget stability with market opportunity. Block+index can
            reduce premium versus all-fixed while avoiding full index exposure.
            The key is sizing blocks to your risk tolerance and usage shape.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "When to use",
              body:
                "Volatile markets, seasonal usage, or a desire to capture downside. You want predictable coverage with some open index.",
            },
            {
              title: "Block sizing",
              body:
                "Anchor to your minimum load during on-peak hours. Increase coverage if budget certainty > market opportunity.",
            },
            {
              title: "Term & timing",
              body:
                "Stagger blocks across start months/terms. Avoid single-date cliffs. Evaluate liquidity for each tenor.",
            },
            {
              title: "Governance & reporting",
              body:
                "Define hedge targets, ranges, and approval thresholds. Track coverage %, budget vs. actual, and risk alerts.",
            },
          ].map((x) => (
            <FadeIn key={x.title}>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{x.title}</h3>
                <p className="mt-2 text-gray-700">{x.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Simple illustration table */}
        <FadeIn>
          <div className="mt-10 overflow-hidden rounded-2xl border bg-white">
            <div className="border-b bg-orange-50 px-5 py-3 text-sm font-semibold text-orange-700">
              Example Coverage Target
            </div>
            <div className="p-5">
              <table className="w-full text-left text-sm">
                <thead className="text-gray-600">
                  <tr className="border-b">
                    <th className="py-2">Period</th>
                    <th className="py-2">Target Hedge %</th>
                    <th className="py-2">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b">
                    <td className="py-3">Next 6–12 months</td>
                    <td className="py-3">70–90%</td>
                    <td className="py-3">Budget stability most important.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">12–24 months</td>
                    <td className="py-3">40–60%</td>
                    <td className="py-3">Blend in liquidity and outlook.</td>
                  </tr>
                  <tr>
                    <td className="py-3">24–36 months</td>
                    <td className="py-3">20–40%</td>
                    <td className="py-3">Opportunistic; avoid over-hedging.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="mt-10 rounded-2xl border bg-white p-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-semibold">
                  Want help sizing blocks to your load?
                </h3>
                <p className="mt-1 text-gray-700">
                  We’ll analyze interval data and propose a block+index plan
                  with coverage bands and governance you can run.
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
