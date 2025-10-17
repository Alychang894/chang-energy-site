import Hero from "../components/Hero";
import Link from "next/link";

export default function Page() {
  return (
    <>
     <Hero
  title="Take Control of Unpredictable Energy Costs"
  subtitle="Volatile markets, supplier markups, and confusing rate structures drain profit margins. Chang Energy helps you take control with transparent procurement, block+index strategies, and disciplined energy audits that keep your budgets stable year after year."
  imageUrl="https://images.unsplash.com/photo-1529927066849-6c8af6a3a6c8?auto=format&fit=crop&w=2000&q=80"
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
      <h2 className="text-3xl font-semibold text-gray-900">Built Around the Way You Buy Power</h2>
      <p className="mt-4 text-gray-600">
        Energy buying shouldn’t feel like gambling. We help facility and finance leaders replace guesswork with data-driven strategy — keeping budgets predictable and margins protected.
      </p>

      <ul className="mt-8 space-y-4">
        <li>
          <strong>Audit →</strong> Find hidden supplier markups, misapplied rates, and overcharges.
        </li>
        <li>
          <strong>Strategy →</strong> Lock in block+index or fixed structures that fit your risk tolerance.
        </li>
        <li>
          <strong>Execution →</strong> Negotiate supplier terms, manage PLCs, and monitor ongoing spend.
        </li>
      </ul>
    </div>

    <div className="rounded-2xl border p-8 bg-white shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900">The Result</h3>
      <p className="mt-4 text-gray-600">
        Predictable energy costs. Stronger P&L protection. Fewer supplier surprises.
      </p>
      <div className="mt-6">
        <a
          href="/contact"
          className="btn btn-primary inline-block"
        >
          Schedule a Free Audit
        </a>
      </div>
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
