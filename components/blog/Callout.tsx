// components/blog/Callout.tsx
import { ReactNode } from "react";

export default function Callout({
  icon = "💡",
  children,
}: {
  icon?: string;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900">
      <div className="flex gap-3">
        <div className="text-lg leading-none">{icon}</div>
        <div>{children}</div>
      </div>
    </aside>
  );
}
