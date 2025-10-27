// app/blog/lower-commercial-energy-bills/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Lower Commercial Energy Bills (Without Going 100% Fixed)",
  description:
    "Discover how block + index strategies, smart risk management, and transparent procurement can lower your commercial energy costs in the PJM market.",
};

export default function Page() {
  const siteUrl = "https://changenergygroup.com";
  const title =
    "How to Lower Commercial Energy Bills (Without Going 100% Fixed)";

  return (
    <main className="px-6 py-12">
      {/* JSON-LD: Article + breadcrumbs */}
      <Script id="schema-lowerbills-article" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          datePublished: "2025-10-10",
          author: { "@type": "Organization", name: "Chang Energy" },
          url: `${siteUrl}/blog/lower-commercial-energy-bills`,
        })}
      </Script>
      <Script id="schema-lowerbills-breadcrumbs" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Blog", item: `${siteUrl}/blog` },
            { "@type": "ListItem", position: 2, name: title, item: `${siteUrl}/blog/lower-commercial-energy-bills` },
          ],
        })}
      </Script>

      <article className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-xs text-gray-500">Oct 10, 2025 • 7 min read</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{title}</h1>

          <p className="mt-3 text-gray-700">
            The phrase “fixed rate” sounds safe — but in today’s PJM energy market, locking in 100% of your electricity supply can actually cost you more in the long run. 
            With wholesale prices swinging, capacity adders changing quarterly, and utilities constantly recalculating transmission rates, the best-performing commercial clients 
            aren’t chasing fixed numbers — they’re balancing **control with flexibility**.
          </p>

          <p className="mt-3 text-gray-700">
            Whether you operate a manufacturing facility, restaurant group, or multi-location retail portfolio, your energy bill is a story of two halves: 
            how you *buy* energy, and how you *use* it. This article focuses on the first half — procurement strategy — and how smarter contract design can 
            stabilize budgets while still giving you room to benefit from market drops.
          </p>
        </FadeIn>

        <div className="prose prose-gray mt-8 max-w-none">
          <h2>1) The Myth of the “Safe” 100% Fixed Rate</h2>
          <p>
            A fully fixed supply contract feels simple: one rate, one number, one less thing to worry about. But behind that simplicity hides a tradeoff. 
            Suppliers build a premium into fixed rates to cover risk — weather swings, generation outages, transmission changes, and even geopolitical events 
            that could move gas prices overnight. The more uncertainty they carry, the higher the buffer they build into your rate.
          </p>

          <p>
            In many PJM markets, this risk premium can be **0.5¢–1.5¢ per kWh**. That may not sound huge until you multiply it across millions of kWh each year. 
            For a mid-sized manufacturer, that’s tens of thousands of dollars annually — paid for protection you may not even need.
          </p>

          <blockquote>
            “Fixed rates buy comfort, not necessarily value,” says Ben Chang, founder of Chang Energy Group. 
            “The key is knowing how much of that comfort you actually need.”
          </blockquote>

          <h2>2) Enter Block + Index: Smarter Risk, Real Savings</h2>
          <p>
            The **block and index** strategy blends stability with opportunity. Instead of locking 100% of your usage at a fixed price, 
            you secure a base “block” of energy — usually 50–80% of your average load — at a known rate. The remainder floats on the market (the index), 
            following real-time PJM prices.
          </p>

          <p>
            This hybrid model gives you a predictable baseline cost while allowing you to benefit when prices dip. 
            If managed correctly, it consistently beats 100% fixed pricing over time, particularly for clients with predictable baseload consumption.
          </p>

          <p>
            Here’s how it works in practice:
          </p>

          <ul>
            <li><strong>Step 1:</strong> Analyze 12–24 months of interval data to determine your baseload vs. variable load.</li>
            <li><strong>Step 2:</strong> Fix your baseload with a block rate.</li>
            <li><strong>Step 3:</strong> Let the remainder float, and track its performance quarterly.</li>
            <li><strong>Step 4:</strong> Adjust future blocks as patterns stabilize.</li>
          </ul>

          <p>
            The key is to avoid emotion. When markets rise, the instinct is to over-fix. When they drop, everyone wants to float. 
            The best energy managers take a data-driven, rules-based approach — not a reactive one.
          </p>

          <h2>3) How to Size Your Block Properly</h2>
          <p>
            One of the biggest mistakes companies make is setting the wrong block size. Too small, and your exposure to index volatility increases. 
            Too large, and you lose the flexibility that made this strategy attractive in the first place.
          </p>

          <p>
            A good starting point: fix **60–70%** of your typical weekday demand. For manufacturers with steady 24/7 operations, that number can rise to 80%. 
            For seasonal or hospitality-driven businesses, 50% may be more appropriate.
          </p>

          <p>
            Use your **load factor** and **hourly interval data** to inform this decision. The steadier your load, the more safely you can fix. 
            The spikier your usage, the more beneficial it is to leave a portion indexed.
          </p>

          <h2>4) Contract Clauses That Can Make or Break Your Savings</h2>
          <p>
            Even the best pricing structure can be undone by fine print. Before signing, review these terms carefully:
          </p>

          <ul>
            <li>
              <strong>Bandwidth (Swing) Clause:</strong> Determines how much your actual usage can vary from your contracted amount before penalties apply.
            </li>
            <li>
              <strong>Change-in-Law Clause:</strong> Allows suppliers to adjust your rate if regulations or capacity costs shift — often a hidden risk.
            </li>
            <li>
              <strong>Pass-Through Costs:</strong> Confirm which line items (capacity, transmission, RMR, etc.) are fixed vs. variable.
            </li>
            <li>
              <strong>Credit and Margin Adders:</strong> Ask how your credit score or payment terms affect supplier markups.
            </li>
          </ul>

          <p>
            Transparency in these clauses is often the difference between a deal that performs and one that quietly drains your budget.
          </p>

          <h2>5) How the Market Cycle Plays into Timing</h2>
          <p>
            PJM energy prices are heavily influenced by natural gas futures, weather outlooks, and capacity auction results. 
            Buying at the wrong time can lock in a year of unnecessary premium. The best energy buyers don’t chase rates — they track market signals.
          </p>

          <p>
            At Chang Energy, we use forward curves and capacity adders to identify pricing windows where value exists. 
            A rate that looks high today could actually undercut future cost curves if capacity prices are set to rise. 
            The opposite is also true — fixing too early can mean missing market softening.
          </p>

          <blockquote>
            “The market rewards patience, not panic. Procurement isn’t timing the market — it’s reading it,” says Chang.
          </blockquote>

          <h2>6) Real-World Example: The Multi-Site Retailer</h2>
          <p>
            A Pennsylvania-based grocery chain was paying a fully fixed 10.2¢ per kWh across 12 locations. After a load audit, we discovered 
            their baseload represented 75% of their usage — ideal for a block and index structure. By fixing that portion and floating the rest, 
            their all-in blended cost averaged 8.7¢ over the next contract term, saving more than $120,000 annually.
          </p>

          <p>
            Just as importantly, the CFO gained visibility into which cost components were controllable vs. market-driven — turning what used to be 
            an unpredictable expense into a measurable performance metric.
          </p>

          <h2>7) The Strategic Payoff: Control Without Overpaying</h2>
          <p>
            Reducing commercial energy costs isn’t about chasing the lowest rate — it’s about optimizing the mix of fixed and flexible exposure. 
            The right structure lets you participate in market declines, protect against spikes, and align energy costs with operational goals.
          </p>

          <p>
            Whether your goal is budgeting predictability, competitive advantage, or sustainability alignment, procurement should work *for* your business — 
            not against it. A thoughtful block + index approach, managed through a transparent partnership, delivers exactly that.
          </p>

          <hr />
          <p className="text-sm text-gray-600">
            Curious what your blended rate would look like under a block + index model? 
            Send us a recent bill — we’ll model three strategies side by side and show your true savings potential.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Link href="/blog" className="text-[#F97316] font-medium">
            ← Back to Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-gray-900 px-4 py-2 text-[15px] font-semibold text-white hover:bg-black/90"
          >
            Request a Consultation
          </Link>
        </div>
      </article>
    </main>
  );
}
