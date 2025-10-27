// components/blog/QuickStat.tsx
"use client";

type Trend = "up" | "down" | "flat";

export default function QuickStat({
  label,
  value,
  sublabel,
  trend = "flat",
  note,
}: {
  label: string;
  value: string;
  sublabel?: string;
  trend?: Trend;
  note?: string;
}) {
  const trendIcon =
    trend === "up"
      ? "▲"
      : trend === "down"
      ? "▼"
      : "–";

  const trendColor =
    trend === "up"
      ? "text-rose-600"
      : trend === "down"
      ? "text-emerald-600"
      : "text-gray-500";

  return (
    <div className="rounded-2xl border bg-white shadow-sm p-5 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-medium text-gray-600">{label}</div>
          <div className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
            {value}
          </div>
          {sublabel && (
            <div className="mt-1 text-sm text-gray-500">{sublabel}</div>
          )}
        </div>
        <div className={`rounded-full bg-orange-50 px-2 py-1 text-xs ${trendColor}`}>
          {trendIcon}
        </div>
      </div>
      {note && <p className="mt-3 text-sm text-gray-600">{note}</p>}
    </div>
  );
}
