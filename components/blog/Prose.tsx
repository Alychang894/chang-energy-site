"use client";

import React, { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <article
      className={[
        "prose prose-lg max-w-none",
        "prose-headings:font-semibold",
        "prose-a:text-brand hover:prose-a:text-brand-dark",
        "prose-img:rounded-xl prose-img:shadow",
        "prose-blockquote:border-l-4 prose-blockquote:border-brand prose-blockquote:not-italic",
        "prose-code:before:hidden prose-code:after:hidden",
      ].join(" ")}
    >
      {children}
    </article>
  );
}
