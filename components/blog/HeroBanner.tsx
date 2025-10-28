// components/blog/HeroBanner.tsx
"use client";

type Stat = { label: string; value: string };
type Props = {
  kicker?: string;
  title: string;
  date?: string;
  readTime?: string;
  stats?: Stat[]; // e.g. [{label:"Region", value:"PJM Interconnection"}, ...]
};

export default function HeroBanner({ kicker, title, date, readTime, stats = [] }: Props) {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-12">
        {/* Kicker */}
        {kicker && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              {kicker}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          {title}
        </h1>

        {/* Meta */}
        {(date || readTime) && (
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            {date && <span>{date}</span>}
            {date && readTime && <span className="h-1 w-1 rounded-full bg-gray-300" />}
            {readTime && <span>{readTime}</span>}
          </div>
        )}
      </div>

      {/* Stat pills */}
      {stats.length > 0 && (
        <div className="bg-white/60">
          <div className="mx-auto max-w-5xl px-6 pb-6 md:pb-8">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm ring-1 ring-black/[0.02] transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                    {s.label}
                  </div>
                  <div className="mt-1 text-base font-semibold text-gray-900">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
