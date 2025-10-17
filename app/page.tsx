import Hero from "../components/Hero";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Hero
  title="Take Control of Unpredictable Energy Costs"
  subtitle="Volatile markets, supplier markups, and confusing rate structures drain profit margins. Chang Energy helps you take control with transparent procurement, block+index strategies, and disciplined energy audits that keep your budgets stable year after year."
  imageUrl="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2000&q=80"
  ctas={[
    { label: "Audit My Energy Spend", href: "/contact", variant: "primary" },
    { label: "See How We Cut Costs", href: "/solutions", variant: "outline" },
  ]}
/>

      {/* Proof bar / value props */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div><div className="text-2xl font-semibold">$100M+</div><div>Energy spend guided</div></div>
          <div><div className="text-2xl font-semibold">40+</div><div>Active suppliers</div></div>
          <div><div className="text-2xl font-semibold">3–7%</div><div>Typical audit recovery</div></div>
          <div><div className="text-2xl font-semibold">PJM/ERCOT</div><div>Market coverage</div></div>
        </div>
      </section>

      {/* How we work (like the reference sites’ simple 3-step) */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="h2">How we work</h2>
            <ol className="mt-4 space-y-4 text-sm">
              <li><strong>Audit</strong> — Bills, usage, PLC/LF, supplier terms.</li>
              <li><strong>Strategy</strong> — Fixed, block+index, or index+cap layering.</li>
              <li><strong>Execution</strong> — RFPs with suppliers, negotiations, monitoring.</li>
            </ol>
            <p className="p mt-6 text-gray-600">
              Need a specific plan for cold storage or manufacturing? See{" "}
              <Link href="/industries/cold-storage" className="underline">industry playbooks</Link>.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="text-xl font-semibold">Why enterprises choose Chang</h3>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>Market intel + supplier access (not just a price quote)</li>
              <li>Risk controls: block+index, budget caps, KPI reporting</li>
              <li>Capacity/transmission strategy for lower PLC/NSPL</li>
              <li>Utility bill audits with real recoveries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cross-links like the examples */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-6">
          <a href="/solutions" className="block rounded-2xl border p-6 hover:shadow">
            <div className="text-lg font-semibold">Solutions</div>
            <div className="mt-2 text-sm text-gray-600">Procurement, risk & hedging, capacity/transmission, audits, efficiency.</div>
          </a>
          <a href="/industries" className="block rounded-2xl border p-6 hover:shadow">
            <div className="text-lg font-semibold">Industries</div>
            <div className="mt-2 text-sm text-gray-600">Cold storage, manufacturing, healthcare, multi-site QSR, and more.</div>
          </a>
          <a href="/resources" className="block rounded-2xl border p-6 hover:shadow">
            <div className="text-lg font-semibold">Resources</div>
            <div className="mt-2 text-sm text-gray-600">Operator-friendly guides and calculators.</div>
          </a>
        </div>
      </section>
    </>
  );
}
