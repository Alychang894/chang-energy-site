// components/blog/QuoteBlock.tsx
"use client";

export default function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-brand-500 bg-brand-50/60 px-6 py-4 italic text-slate-800 rounded-r-xl shadow-sm">
      {children}
    </blockquote>
  );
}
