// components/blog/StatBar.tsx
export default function StatBar({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid gap-4 rounded-xl border bg-white p-4 shadow-sm md:grid-cols-3">
      {items.map((x) => (
        <div key={x.label} className="rounded-lg bg-gray-50 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {x.label}
          </div>
          <div className="mt-1 text-2xl font-bold text-gray-900">{x.value}</div>
        </div>
      ))}
    </div>
  );
}
