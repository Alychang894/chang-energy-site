// components/blog/HighlightList.tsx
"use client";

export default function HighlightList({
  title,
  items,
  dense = false,
}: {
  title?: string;
  items: (string | React.ReactNode)[];
  dense?: boolean;
}) {
  return (
    <div className="my-8 rounded-2xl border bg-white shadow-sm p-5 md:p-6">
      {title && (
        <h4 className="text-lg font-semibold text-gray-900 mb-3">{title}</h4>
      )}
      <ul className={`space-y-${dense ? "2" : "3"}`}>
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-orange-500 shadow-[0_0_0_3px_rgba(253,186,116,.35)]" />
            <div className="text-gray-800">{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
