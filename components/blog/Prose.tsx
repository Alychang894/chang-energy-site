"use client";

import React, { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <article
      className={[
        "prose prose-lg max-w-none prose-slate",
        "prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-a:text-brand-600 hover:prose-a:text-brand-700 prose-a:font-medium prose-a:no-underline hover:prose-a:underline",
        "prose-img:rounded-xl prose-img:shadow",
        "prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:not-italic prose-blockquote:text-slate-700",
        "prose-code:before:hidden prose-code:after:hidden",
      ].join(" ")}
    >
      {children}
    </article>
  );
}
