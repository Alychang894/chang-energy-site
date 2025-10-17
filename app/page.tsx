// app/page.tsx
import Hero from "../components/Hero";

export default function Page() {
  return (
    <>
     <Hero
  title="Stop Letting Energy Costs Control Your Budget"
  subtitle="Rising supplier markups and unpredictable market swings can quietly drain profits. Chang Energy gives manufacturers, distributors, and multi-site operators the data, leverage, and strategy to lock in stable, transparent power costs."
  imageUrl="/images/hero-power.jpg"
  ctas={[
    { label: "Audit My Energy Spend", href: "/contact", variant: "primary" },
    { label: "See How We Cut Costs", href: "/solutions", variant: "outline" },
  ]}
/>

      {/* Proof bar */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">$100M+</div>
            <div className="text-sm text-gray-600 mt-2">Energy spend guided annually</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">40+</div>
            <div className="text-sm text-gray-600 mt-2">Suppliers benchmarked for every client</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">3–7%</div>
            <div className="text-sm text-gray-600 mt-2">Average recovery from bill audits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">PJM + ERCOT</div>
            <div className="text-sm text-gray-600 mt-2">Full market coverage</div>
          </div>
        </div>
      </section>

      {/* Customer-first section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
           <h2 className="text-3xl font-bold mb-6">How We Help You Regain Control</h2>
<ul className="space-y-4 text-gray-700 leading-relaxed">
  <li><strong>Audit —</strong> We analyze your past bills, usage, and supplier contracts to uncover hidden overcharges.</li>
  <li><strong>Strategy —</strong> We structure your procurement around data-driven block-index models that protect against volatility.</li>
  <li><strong>Execution —</strong> We negotiate directly with suppliers to secure pricing that aligns with your operational needs and risk tolerance.</li>
</ul>
<p className="mt-6 text-gray-600">We don’t sell energy. We protect your bottom line by ensuring every kWh you buy is priced intelligently.</p>

            </ul>
          </div>
          <div className="rounded-2xl border p-8 bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Outcomes you can measure</h3>
            <ul className="mt-4 text-gray-700 space-y-2 text-sm">
              <li>Stable budgets across volatile markets</li>
              <li>Lower total cost through supplier competition</li>
              <li>3–7% typical recovery from bill audits</li>
              <li>Lower PLC/NSPL via capacity strategy</li>
            </ul>
            <a href="/contact" className="btn btn-primary inline-block mt-6">Schedule a Free Audit</a>
          </div>
        </div>
      </section>

      {/* Cross-links */}
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
