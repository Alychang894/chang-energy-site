// components/blog/Prose.tsx
"use client";

import React from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-gray max-w-none">
      {children}
      <style jsx global>{`
        .prose h2 {
          margin-top: 2.25rem;
          border-top: 1px solid #efefef;
          padding-top: 1.25rem;
        }
        .prose h3 {
          margin-top: 1.5rem;
        }
        .prose p.lead {
          font-size: 1.125rem;
          line-height: 1.75rem;
          color: rgb(75 85 99);
        }
        .prose .kicker {
          display: inline-block;
          font-size: .75rem;
          font-weight: 600;
          letter-spacing: .06em;
          color: rgb(234 88 12);
          text-transform: uppercase;
          margin-bottom: .5rem;
        }
        .prose .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #eee, transparent);
          margin: 2rem 0;
        }
        .prose blockquote {
          border-left-color: rgb(234 88 12);
        }
        .prose a {
          color: rgb(234 88 12);
          text-decoration: none;
        }
        .prose a:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}
