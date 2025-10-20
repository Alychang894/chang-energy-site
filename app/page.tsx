import FadeIn from "../components/FadeIn";
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
    <FadeIn delay={0}>
      <div>
        <div className="text-3xl font-bold text-gray-900">$100M+</div>
        <div className="text-sm text-gray-600 mt-2">Energy spend guided annually</div>
      </div>
    </FadeIn>

    <FadeIn delay={100}>
      <div>
        <div className="text-3xl font-bold text-gray-900">40+</div>
        <div className="text-sm text-gray-600 mt-2">Suppliers benchmarked for every client</div>
      </div>
    </FadeIn>

    <FadeIn delay={200}>
      <div>
        <div className="text-3xl font-bold text-gray-900">3–7%</div>
        <div className="text-sm text-gray-600 mt-2">Average recovery from bill audits</div>
      </div>
    </FadeIn>

    <FadeIn delay={300}>
      <div>
        <div className="text-3xl font-bold text-gray-900">PJM + ERCOT</div>
        <div className="text-sm text-gray-600 mt-2">Full market coverage</div>
      </div>
    </FadeIn>
  </div>
</section>


      {/* How we help */}
      <section className="bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    <FadeIn delay={0}>
      <div>
        <h2 className="text-3xl font-bold mb-6">How We Help You Regain Control</h2>
        <ul className="space-y-4 text-gray-700 leading-relaxed">
          <li><strong>Audit —</strong> We analyze your past bills, usage, and supplier contracts to uncover hidden overcharges.</li>
          <li><strong>Strategy —</strong> We structure your procurement around data-driven block-index models that protect against volatility.</li>
          <li><strong>Execution —</strong> We negotiate directly with suppliers to secure pricing that aligns with your operational needs and risk tolerance.</li>
        </ul>
        <p className="mt-6 text-gray-600">
          We don’t sell energy. We protect your bottom line by ensuring every kWh you buy is priced intelligently.
        </p>
      </div>
    </FadeIn>

    <FadeIn delay={150}>
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h3 className="text-xl font-semibold mb-4">Why Enterprises Choose Chang Energy</h3>
        <ul className="space-y-3 text-gray-700">
          <li>📊 Market intel + supplier access (not just a price quote)</li>
          <li>⚙️ Risk controls: block-index, budget caps, KPI reporting</li>
          <li>🔌 Capacity strategy for lower PLC / NSPL costs</li>
          <li>💡 Utility bill audits with real recoveries</li>
        </ul>
        <a href="/contact" className="btn btn-primary inline-block mt-6">Schedule a Free Audit</a>
      </div>
    </FadeIn>
  </div>
</section>

    </>
  );
}
