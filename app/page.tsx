import Link from 'next/link'

export default function Page(){
  return (
    <section className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="h1">Your Large-Company Edge in Power Procurement</h1>
          <p className="p mt-6">Chang Energy helps enterprises tame volatility, lower total cost, and protect budgets with block+index strategies, PLC management, and bill-audit discipline.</p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className="btn btn-primary">Book a Strategy Call</Link>
            <Link href="/resources/blended-rate-calculator" className="btn btn-outline">Blended Rate Calculator</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div><div className="text-2xl font-semibold">$100M+</div><div>Energy spend guided</div></div>
            <div><div className="text-2xl font-semibold">40+ </div><div>Active suppliers</div></div>
            <div><div className="text-2xl font-semibold">3-7% </div><div>Typical audit recovery</div></div>
            <div><div className="text-2xl font-semibold">PJM/ERCOT</div><div>Market coverage</div></div>
          </div>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="h2">How we work</h2>
          <ol className="mt-4 space-y-4 text-sm">
            <li><strong>Audit</strong> — We analyze bills, usage, PLC/LF, and supplier terms.</li>
            <li><strong>Strategy</strong> — We design fixed, block+index, or index+cap hedges.</li>
            <li><strong>Execution</strong> — We run RFPs with suppliers, negotiate terms, and monitor.</li>
          </ol>
          <div className="mt-6 text-sm text-gray-500">Need a specific plan for cold storage or manufacturing? See <Link href="/industries/cold-storage" className="underline">industry playbooks</Link>.</div>
        </div>
      </div>
    </section>
  )
}
