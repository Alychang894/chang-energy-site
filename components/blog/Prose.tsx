"use client";

import React, { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-gray max-w-none">
      {children}
    </div>
  );
}
