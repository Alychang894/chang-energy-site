// components/blog/QuoteBlock.tsx
"use client";

export default function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-orange-500 bg-orange-50/60 px-6 py-4 italic text-gray-800 rounded-r-xl shadow-sm">
      {children}
    </blockquote>
  );
}
