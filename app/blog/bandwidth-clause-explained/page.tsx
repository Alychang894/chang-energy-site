import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "Bandwidth Clauses Explained: What Happens When Your Usage Swings",
  description:
    "A bandwidth clause sets how far your energy use can swing from what you expected without changing your price. How it works, why winter makes it matter, and what to check in your contract.",
  alternates: {
    canonical: "/blog/bandwidth-clause-explained",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Bandwidth Clauses Explained: What Happens When Your Usage Swings"
        kicker="Energy Insights"
        date="Nov 27, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              You signed a fixed rate expecting a predictable bill. Then a
              busy month, a slow month, or a cold snap changed how much
              energy you actually used — and the price you paid changed
              with it. Often, the reason is a single contract line most
              owners never had explained to them: the bandwidth clause.
            </p>
            <p>
              It is not a trick, and it is not always a bad thing. But if
              you do not know whether your contract has one — or how wide
              yours is — winter is exactly when you can find out the hard
              way.
            </p>

            <h2>What a bandwidth clause actually does</h2>
            <p>
              When a supplier prices your contract, they are working from
              an expected amount of usage — usually based on your past
              bills. A bandwidth clause, sometimes called a swing or
              tolerance clause, sets a range around that expected usage.
              Inside the range, your agreed rate applies as expected.
              Outside the range, the supplier may price the extra usage —
              or the shortfall — differently, often at a market-based rate.
            </p>
            <p>
              Think of it like a lane on the road. Stay in your lane and
              the trip goes as planned. Drift well outside it, and the
              terms change. The width of that lane is the part worth
              knowing before you sign.
            </p>

            <h2>Why winter puts bandwidth to the test</h2>
            <p>
              Few businesses use energy evenly all year, and winter is
              when the swings get biggest. A restaurant fills up for
              holiday parties one week and sits quiet the next. A shop
              adds heaters and longer hours. A laundromat runs hot water
              and dryers harder when it is cold out. Any of those can push
              a month&apos;s usage well above — or below — the pattern the
              contract was priced on.
            </p>
            <p>
              That does not mean you did anything wrong. It just means a
              narrow bandwidth clause and a very uneven winter can be an
              expensive combination, because the usage outside the band is
              the usage most likely to be repriced.
            </p>

            <h2>Three questions to ask about your contract</h2>
            <p>
              <strong>1. Do I have a bandwidth clause at all?</strong>{" "}
              Some contracts are written with full flexibility on usage —
              sometimes called full swing — and some are not. Neither is
              automatically better; flexible terms can come with a higher
              starting rate. What matters is knowing which one you signed.
            </p>
            <p>
              <strong>2. How is the range measured?</strong> It may be
              measured month by month, across the whole contract term, or
              both. A business with one very busy month and otherwise
              steady use can look fine on a term measure and still trip a
              monthly one. The measuring period matters as much as the
              width.
            </p>
            <p>
              <strong>3. What happens outside the range?</strong> Ask how
              out-of-band usage is priced, in plain language, before you
              sign — not after a surprising bill arrives. A good supplier
              or broker will walk you through a busy-month and a
              slow-month example using your own past usage.
            </p>

            <h2>How to set yourself up well</h2>
            <p>
              Start with honest history. If your usage has changed — new
              equipment, longer hours, a second location, a slower season
              than last year — say so before the contract is priced. A
              contract built on last year&apos;s pattern, when this year
              looks different, is where bandwidth problems usually begin.
            </p>
            <p>
              Then match the clause to your business. A steady operation
              with predictable hours may do fine with a narrower band and
              a sharper rate. A seasonal business — holiday rushes, summer
              lulls, weather-driven weeks — should weigh flexibility more
              heavily, even if the headline rate is a little higher. The
              cheapest rate on paper is not always the cheapest contract
              in practice.
            </p>
            <p>
              Finally, check in mid-contract. If you know a big change is
              coming — a remodel, new ovens, extended hours — a quick
              conversation before it happens beats a surprise adjustment
              after it.
            </p>

            <Callout
              title="Not sure what your contract says about usage swings?"
              text="Send us your bill and we'll walk through your contract terms with you — including any bandwidth clause — and explain in plain English what happens in a busy or slow month. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
