// app/why-chang-energy/page.tsx
// "Why lock in your rate" — education + case for fixed-rate procurement.
// Chart data: U.S. Energy Information Administration, Electric Power Annual,
// Table 2.10 — average commercial retail price, cents/kWh. Verified Sept 2026.

import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Why Lock In Your Electricity Rate | Chang Energy",
  description:
    "How commercial electricity rates work, what they actually did from 2013–2024, why they swing with weather and world events — and why smart businesses lock in one solid rate.",
};

type Series = { label: string; color: string; dashed?: boolean; values: number[] };
const YEARS = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
const SERIES: Series[] = [
  {
    label: "Pennsylvania",
    color: "#F97316",
    values: [9.25, 9.73, 9.6, 9.22, 8.98, 8.94, 8.71, 8.5, 8.91, 10.73, 11.26, 11.03],
  },
  {
    label: "Ohio",
    color: "#0F2740",
    values: [9.35, 9.83, 10.07, 9.97, 10.05, 10.11, 9.72, 9.53, 9.75, 10.39, 10.75, 10.66],
  },
  {
    label: "Texas",
    color: "#059669",
    values: [8.02, 8.16, 8.15, 8.26, 8.26, 8.16, 8.06, 7.6, 8.72, 9.05, 8.82, 8.55],
  },
  {
    label: "U.S. average",
    color: "#94A3B8",
    dashed: true,
    values: [10.26, 10.74, 10.64, 10.43, 10.66, 10.67, 10.68, 10.59, 11.22, 12.41, 12.59, 12.75],
  },
];

const W = 920;
const H = 440;
const ML = 58;
const MR = 28;
const MT = 34;
const MB = 48;
const YMIN = 7;
const YMAX = 13.5;

const x = (i: number) => ML + (i / (YEARS.length - 1)) * (W - ML - MR);
const y = (v: number) => MT + ((YMAX - v) / (YMAX - YMIN)) * (H - MT - MB);

function pathFor(s: Series) {
  return s.values.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
}

const ANNOTATIONS = [
  {
    year: 2014,
    series: 0,
    dx: -10,
    dy: -46,
    title: "2014 polar vortex",
    text: "Gas spikes hit the Midwest & Northeast",
  },
  {
    year: 2021,
    series: 2,
    dx: 26,
    dy: 52,
    title: "Feb 2021: Winter Storm Uri",
    text: "Texas grid crisis — TX rates jumped 15% that year",
  },
  {
    year: 2022,
    series: 0,
    dx: 30,
    dy: -58,
    title: "2022: Russia invades Ukraine",
    text: "Global gas prices surge — PA rates jumped 20% in one year",
  },
];

function RateChart() {
  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label="Line chart of average commercial electricity rates 2013 to 2024 for Pennsylvania, Ohio, Texas, and the U.S. average, in cents per kilowatt-hour. Source: U.S. Energy Information Administration."
      >
        {/* gridlines */}
        {[7, 8, 9, 10, 11, 12, 13].map((t) => (
          <g key={t}>
            <line x1={ML} x2={W - MR} y1={y(t)} y2={y(t)} stroke="#E2E8F0" strokeWidth="1" />
            <text x={ML - 10} y={y(t) + 4} textAnchor="end" fontSize="12" fill="#64748B">
              {t}¢
            </text>
          </g>
        ))}
        {/* x labels */}
        {YEARS.map((yr, i) =>
          i % 2 === 0 ? (
            <text key={yr} x={x(i)} y={H - 16} textAnchor="middle" fontSize="12" fill="#64748B">
              {yr}
            </text>
          ) : null
        )}
        {/* series lines */}
        {SERIES.map((s) => (
          <g key={s.label}>
            <path
              d={pathFor(s)}
              fill="none"
              stroke={s.color}
              strokeWidth={s.dashed ? 2 : 3}
              strokeDasharray={s.dashed ? "7 5" : undefined}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {s.values.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r="3.5" fill={s.color} stroke="#fff" strokeWidth="1.5">
                <title>{`${s.label} ${YEARS[i]}: ${v.toFixed(2)}¢/kWh`}</title>
              </circle>
            ))}
          </g>
        ))}
        {/* annotations */}
        {ANNOTATIONS.map((a, k) => {
          const s = SERIES[a.series];
          const i = YEARS.indexOf(a.year);
          const px = x(i);
          const py = y(s.values[i]);
          const tx = px + a.dx;
          const ty = py + a.dy;
          const anchor = a.dx >= 0 ? "start" : "end";
          return (
            <g key={k}>
              <circle cx={px} cy={py} r="6" fill="#fff" stroke={s.color} strokeWidth="2.5" />
              <line x1={px} y1={py} x2={tx} y2={ty + (a.dy > 0 ? -8 : 14)} stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 3" />
              <text x={tx} y={ty} textAnchor={anchor} fontSize="13" fontWeight="700" fill="#0F2740">
                {a.title}
              </text>
              <text x={tx} y={ty + 17} textAnchor={anchor} fontSize="12" fill="#64748B">
                {a.text}
              </text>
            </g>
          );
        })}
      </svg>
      {/* legend */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {SERIES.map((s) => (
          <span key={s.label} className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
            <span
              className="inline-block h-0 w-8 rounded"
              style={{
                borderTop: `3px ${s.dashed ? "dashed" : "solid"} ${s.color}`,
              }}
            />
            {s.label}
          </span>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">
        Average commercial retail price, cents per kWh. Source: U.S. Energy
        Information Administration, Electric Power Annual, Table 2.10 (Form
        EIA-861). Retrieved September 2026.
      </p>
      <details className="mx-auto mt-4 max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
        <summary className="cursor-pointer font-semibold text-slate-800">See the exact numbers</summary>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="text-slate-500">
                <th className="py-1 pr-4 font-medium">Year</th>
                {SERIES.map((s) => (
                  <th key={s.label} className="py-1 pr-4 font-medium">{s.label} (¢)</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {YEARS.map((yr, i) => (
                <tr key={yr} className="border-t border-slate-200">
                  <td className="py-1 pr-4 font-medium text-slate-700">{yr}</td>
                  {SERIES.map((s) => (
                    <td key={s.label} className="py-1 pr-4 tabular-nums text-slate-600">
                      {s.values[i].toFixed(2)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}

const BILL_PARTS = [
  {
    title: "Supply",
    tag: "The part we shop",
    body: "The actual electricity you use. This is the only part of the bill you can negotiate — and the part suppliers compete on.",
  },
  {
    title: "Delivery",
    tag: "Stays with your utility",
    body: "The poles, wires, and meters that get power to your door. Your utility still delivers no matter who supplies you — this part doesn't change.",
  },
  {
    title: "Taxes & fees",
    tag: "Set by regulators",
    body: "State and local charges that ride along with the bill. Nobody negotiates these, but a good review makes sure they're correct.",
  },
];

const SWINGERS = [
  {
    title: "Weather",
    body: "A brutal cold snap or a record-hot August sends demand through the roof. When everyone's cranking heat or AC at once, the price of power spikes with it.",
  },
  {
    title: "Natural gas prices",
    body: "Gas-fired plants set the price of electricity most hours of the day in our markets. When gas gets expensive, your electric rate follows.",
  },
  {
    title: "World events",
    body: "Pipelines, wars, and export demand move global fuel prices — and those ripples land on American electric bills within months.",
  },
  {
    title: "Grid & capacity costs",
    body: "The grid has to be ready for the single hottest hour of the year. Those readiness costs get baked into rates and capacity charges.",
  },
];

const BENEFITS = [
  {
    title: "One number you can budget around",
    body: "Your rate is your rate — for 12, 24, or 36 months. No surprises when you open the bill, no scrambling to explain a spike.",
  },
  {
    title: "Spikes can't touch you",
    body: "When the next polar vortex or heat dome sends market prices soaring, your contract doesn't move. That's the whole point.",
  },
  {
    title: "Stop trying to time the market",
    body: "You run a business, not a trading desk. We watch the market every day and tell you when the timing is right to lock in.",
  },
  {
    title: "The utility still delivers",
    body: "Same wires, same reliability, same outage response. Only the supplier name on the bill changes — everything else feels identical.",
  },
];

export default function WhyChangEnergyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="band-dark relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_80%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <FadeIn>
            <span className="eyebrow">Why Chang Energy</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              The case for locking in your electricity rate.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
              Nobody taught you how commercial electric rates work — the market
              counts on that. Here&apos;s the plain-English version, the real
              numbers, and why smart businesses pick one solid rate and stop
              worrying about it.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get My Free Bill Review
              </Link>
              <a href="mailto:ben@changenergygroup.com" className="btn btn-lg btn-outline-light">
                Email Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How rates work */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Your bill has three parts. Only one is negotiable.
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-600">
              Once you see the split, the whole game makes sense — and
              you&apos;ll see exactly where we earn our keep.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {BILL_PARTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div className="card h-full p-6">
                  <span className={i === 0 ? "badge-brand" : "badge"}>
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The chart */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              What commercial rates actually did, 2013–2024
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-600">
              Real average commercial rates — not projections, not marketing.
              Hover any dot for the exact number. Notice how calm things look
              until they don&apos;t.
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="card mt-8 p-4 md:p-8">
              <RateChart />
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-bold text-brand-600">+20%</p>
                <p className="mt-1 text-sm text-slate-600">
                  Pennsylvania commercial rates jumped that much in a single
                  year (2021→2022) when global gas prices surged.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-bold text-brand-600">+15%</p>
                <p className="mt-1 text-sm text-slate-600">
                  Texas commercial rates jumped that much the year Winter
                  Storm Uri froze the grid (2020→2021).
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-bold text-brand-600">+24%</p>
                <p className="mt-1 text-sm text-slate-600">
                  That&apos;s how much higher the U.S. commercial average was
                  in 2024 than in 2013. The trend only points one way.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why rates swing */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why rates swing the way they do
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-600">
              Four forces move your rate. None of them ask your permission
              first.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SWINGERS.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div className="card h-full p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of locking in */}
      <section className="band-dark relative overflow-hidden py-14 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_340px_at_50%_0px,rgba(249,115,22,0.16),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              What locking in gets you
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-300">
              A fixed rate doesn&apos;t beat every market wiggle — it beats
              the worry. Here&apos;s the trade, honestly.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <FadeIn key={b.title} delay={i * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-300">{b.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <div className="mt-10 text-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get My Free Bill Review
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                Free review · No obligation · A real person looks at every bill
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
