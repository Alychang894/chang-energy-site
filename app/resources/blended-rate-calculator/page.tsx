// app/resources/blended-rate-calculator/page.tsx
"use client";

import { useMemo, useState } from "react";
import FadeIn from "../../../components/FadeIn";
import Link from "next/link";

function Field({
  label,
  value,
  onChange,
  suffix,
  min = 0,
  step = "any",
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix: string;
  min?: number;
  step?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-800">{label}</span>
      <div className="relative mt-1">
        <input
          type="number"
          className="input pr-14"
          value={value}
          min={min}
          step={step}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
          {suffix}
        </span>
      </div>
    </label>
  );
}

export default function BlendedRateCalculatorPage() {
  const [annualKwh, setAnnualKwh] = useState(1_200_000);
  const [fixedPct, setFixedPct] = useState(65);
  const [fixedRate, setFixedRate] = useState(8.5);
  const [indexRate, setIndexRate] = useState(6.9);

  const r = useMemo(() => {
    const fixedShare = Math.min(100, Math.max(0, fixedPct)) / 100;
    const blendedCents = fixedRate * fixedShare + indexRate * (1 - fixedShare);
    const blendedCost = (annualKwh * blendedCents) / 100;
    const allFixedCost = (annualKwh * fixedRate) / 100;
    const allIndexCost = (annualKwh * indexRate) / 100;
    return { blendedCents, blendedCost, allFixedCost, allIndexCost, fixedShare };
  }, [annualKwh, fixedPct, fixedRate, indexRate]);

  const fmt$ = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <main className="bg-white">
      <section className="band-dark border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_20%_0px,rgba(249,115,22,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
          <FadeIn>
            <span className="eyebrow">Interactive tool</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Blended Rate Calculator
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              See how a fixed block and floating index exposure combine into
              your true blended ¢/kWh — and how that compares to going 100%
              fixed or 100% index.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_380px]">
          <FadeIn>
            <div className="card p-6 md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">Your inputs</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Annual usage" value={annualKwh} onChange={setAnnualKwh} suffix="kWh" />
                <Field label="Fixed block share" value={fixedPct} onChange={setFixedPct} suffix="%" min={0} step="1" />
                <Field label="Fixed block rate" value={fixedRate} onChange={setFixedRate} suffix="¢/kWh" />
                <Field label="Expected index rate" value={indexRate} onChange={setIndexRate} suffix="¢/kWh" />
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">Fixed block</span>
                  <span className="text-slate-600">{r.fixedShare * 100}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={fixedPct}
                  onChange={(e) => setFixedPct(Number(e.target.value))}
                  className="mt-2 w-full accent-orange-600"
                  aria-label="Fixed block share"
                />
              </div>

              <p className="mt-6 text-xs text-slate-500">
                Estimates only — illustrative supply-cost math. Your actual
                blended cost depends on load shape, market movement, demand
                charges, and supplier markups.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="band-dark h-full rounded-2xl p-6 md:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(320px_200px_at_50%_0px,rgba(249,115,22,0.2),transparent)]"
              />
              <div className="relative">
                <h2 className="text-lg font-semibold text-white">Your blended result</h2>
                <p className="mt-4 text-5xl font-bold tracking-tight text-brand-400">
                  {r.blendedCents.toFixed(2)}¢
                  <span className="text-xl font-medium text-slate-400">/kWh</span>
                </p>
                <p className="mt-2 text-slate-300">
                  ≈ {fmt$(r.blendedCost)} per year in supply cost
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">100% fixed at {fixedRate.toFixed(2)}¢</span>
                    <span className="font-semibold text-white">{fmt$(r.allFixedCost)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">100% index at {indexRate.toFixed(2)}¢</span>
                    <span className="font-semibold text-white">{fmt$(r.allIndexCost)}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-slate-300">Blended vs. all-fixed</span>
                    <span
                      className={`font-bold ${
                        r.allFixedCost - r.blendedCost >= 0 ? "text-emerald-400" : "text-brand-300"
                      }`}
                    >
                      {r.allFixedCost - r.blendedCost >= 0 ? "−" : "+"}
                      {fmt$(Math.abs(r.allFixedCost - r.blendedCost))}/yr
                    </span>
                  </div>
                </div>

                <Link href="/contact" className="btn btn-primary mt-6 w-full">
                  Model This on My Actual Bill
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
