// app/resources/insights/_data.tsx
export type Post = {
  slug: string;
  title: string;
  date: string;        // e.g., "2025-10-20"
  summary: string;
  tags?: string[];
  // JSX content so we don't need MD/MDX deps
  Content: () => JSX.Element;
};

export const POSTS: Post[] = [
  {
    slug: "block-index-vs-fixed",
    title: "Block+Index vs. Fixed — When Each Wins",
    date: "2025-10-20",
    summary:
      "Quick operator guide to choosing between fixed, index, or hybrid structures—without guessing.",
    tags: ["Procurement", "Risk"],
    Content: () => (
      <>
        <p>
          There’s no one-size-fits-all product. For sites with spiky load, a full
          fixed price often overpays. For steady, baseload-heavy profiles, fixed
          can be the right insurance. Most portfolios land in between, where
          block+index matches hedge size to usage patterns.
        </p>
        <h3 className="mt-6 text-lg font-semibold">Fast rules of thumb</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>
            <strong>Baseline usage</strong> → hedge with a fixed block sized to your
            most consistent kWh.
          </li>
          <li>
            <strong>Seasonal or variable usage</strong> → keep on index to capture
            low-cost periods and avoid over-hedging.
          </li>
          <li>
            <strong>Risk tolerance & budgets</strong> → inform hedge % and term length.
          </li>
        </ul>
        <p className="mt-4">
          The outcome isn’t theoretical—we attribute savings monthly so finance
          can see the impact. Want a portfolio sizing?{" "}
          <a className="link-brand" href="/contact">Request a consultation</a>.
        </p>
      </>
    ),
  },
  {
    slug: "lower-plc-nspl-without-downtime",
    title: "Lower PLC/NSPL Without Slowing Operations",
    date: "2025-10-20",
    summary:
      "Practical, short curtailment windows and better planning beat long shutdowns every time.",
    tags: ["Capacity", "Transmission"],
    Content: () => (
      <>
        <p>
          Fancy forecasting isn’t helpful if it disrupts throughput. We use short,
          practical windows and site-specific playbooks to reduce demand charges—
          especially during peak season—without operational drama.
        </p>
        <h3 className="mt-6 text-lg font-semibold">What actually works</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Peak prediction alerts focused on the real risk hours</li>
          <li>Brief curtailment options matched to each site’s constraints</li>
          <li>Year-over-year tracking with verified capacity savings</li>
        </ul>
        <p className="mt-4">
          If your PLC/NSPL keeps drifting up, we can show exactly why and how to
          fix it for next season.{" "}
          <a className="link-brand" href="/contact">Start my audit</a>.
        </p>
      </>
    ),
  },
];
