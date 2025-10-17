// app/page.tsx
import Hero from "../components/Hero";

export default function Page() {
  return (
    <>
      <Hero
        title="Take Control of Unpredictable Energy Costs"
        subtitle="Volatile markets, supplier markups, and confusing rate structures drain profit margins. Chang Energy keeps budgets predictable with transparent procurement, block+index strategies, and disciplined bill audits."
        imageUrl="/images/hero-power.jpg" // <-- your uploaded image
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
            <h2 className="text-3xl font-semibold text-gray-900">Turn volatility into a budget you can trust</h2>
            <p className="mt-4 text-gray-600">
              If your energy costs swing quarter to quarter, it’s not your fault—suppliers and markets make it hard to see the truth.
              We put you back in control with transparent pricing, a structure that matches your risk tolerance, and ongoing monitoring.
            </p>
            <ul className="mt-8 space-y-4">
              <li><strong>Audit →</strong> Expose hidden markups, misapplied rates, and overcharges.</li>
              <li><strong>Strategy →</strong> Block+index, fixed, or capped—engineered to your tolerance and load profile.</li>
              <li><strong>Execution →</strong> We run RFPs, negotiate terms, manage PLCs, and watch your bills every month.</li>
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
