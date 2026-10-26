// app/blog/fixed-vs-index-energy-rates/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "Fixed vs. Index vs. Block + Index: Which Rate Fits Your Business?",
  description:
    "Fixed, index, and block + index sound like trader talk, but the choice decides whether your winter bill is predictable or rides the market. A plain-English guide for small-business owners.",
  alternates: {
    canonical: "/blog/fixed-vs-index-energy-rates",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Fixed vs. Index vs. Block + Index: Which Rate Fits Your Business?"
        kicker="Energy Insights"
        date="Oct 26, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              When a supplier sends you a quote, the rate gets all the
              attention. The line underneath it matters just as much:
              how that rate is built. Fixed, index, and block + index
              are three different answers to one simple question — when
              the market moves, who feels it, you or the supplier?
            </p>
            <p>
              You don&apos;t need to pick the &ldquo;best&rdquo; one in
              the abstract. You need the one that fits how your business
              actually runs, especially heading into winter, when you
              use more energy and the market tends to get jumpy at the
              same time.
            </p>

            <h2>Fixed: you lock the supply price and stop watching the market</h2>
            <p>
              With a fixed-rate contract, your supply price per
              kilowatt-hour stays the same for the whole term, whether
              that&apos;s 12 months or longer. The market can go up, the
              market can go down — your supply rate doesn&apos;t move.
              Your total bill still changes with how much you use, but
              the price you pay for each unit doesn&apos;t.
            </p>
            <p>
              That predictability is the whole point. If you run a
              restaurant, laundromat, or auto shop on tight margins, a
              fixed rate makes winter budgeting honest: you can look at
              last winter&apos;s usage and get a pretty good sense of
              this winter&apos;s cost. The trade-off is just as plain.
              If market prices fall after you sign, you don&apos;t get
              the dip — you signed for certainty instead.
            </p>
            <p>
              For most small businesses without someone watching energy
              markets every week, fixed is the default that makes sense.
              It&apos;s not exciting. It&apos;s sleep-at-night pricing.
            </p>

            <h2>Index: your price rides the wholesale market</h2>
            <p>
              An index (sometimes called variable) rate does the
              opposite. Instead of locking a price, your supply rate
              tracks a wholesale market index, plus a set adder from
              your supplier. When the market is calm and prices are
              low, you can pay less than a fixed rate would have cost.
              When a cold snap, a heat wave, or a grid event pushes
              wholesale prices up, you feel it on that month&apos;s
              bill — often in the same month you&apos;re also using
              the most energy.
            </p>
            <p>
              That double exposure is why index needs a honest gut
              check, not just a good-looking first quote. Can your
              business absorb a bad month without it hurting? Do you
              have the time and habit to watch the market and jump to
              a fixed rate when it makes sense? If the answer to either
              is no, index isn&apos;t a deal — it&apos;s a risk you
              didn&apos;t mean to take.
            </p>
            <p>
              Index can work for larger users with flexible operations
              and someone paying attention. For a busy owner heading
              into heating season, it&apos;s usually the exposed
              position.
            </p>

            <h2>Block + index: part locked, part floating</h2>
            <p>
              Block + index sits in the middle, and it&apos;s the one
              most owners haven&apos;t heard explained plainly. You
              lock — &ldquo;block&rdquo; — a set amount of your usage
              at a fixed price, usually the baseline you know you&apos;ll
              use no matter what. Whatever you use above (or below)
              that block settles at the index price.
            </p>
            <p>
              Think of a shop that runs pretty steady all year, then
              spikes in winter. The steady part can be blocked at a
              known price, so most of the bill is predictable. The
              seasonal swing rides the market, which gives you some
              upside if prices soften and some exposure if they spike
              — but only on part of your usage, not all of it.
            </p>
            <p>
              The catch is that block + index only works if the block
              is sized right for your real usage pattern. Block too
              much and you&apos;re paying for energy you didn&apos;t
              use at a fixed price. Block too little and most of your
              bill is floating anyway. That sizing comes from your
              actual bills, month by month — not from a guess in a
              sales call.
            </p>

            <h2>A simple way to choose, in late October</h2>
            <p>
              <strong>If budgeting certainty matters most, choose
              fixed.</strong> Most small restaurants, laundromats, auto
              shops, and gyms land here, and late October is a sensible
              time to lock — before the first sustained cold pushes
              both usage and market prices up together.
            </p>
            <p>
              <strong>If you can watch the market and absorb a spike,
              index is an option — not a default.</strong> Be honest
              about whether you&apos;ll actually watch it through
              winter. If not, the low starting number isn&apos;t the
              real price.
            </p>
            <p>
              <strong>If your usage has a clear steady base with a
              seasonal swing, ask about block + index.</strong> Ask the
              supplier to show you, using your own last 12 months of
              bills, how much would have been blocked and how much
              would have floated. If they can&apos;t show that, it&apos;s
              not a plan yet — it&apos;s just a pitch.
            </p>
            <p>
              And whichever structure you&apos;re looking at, check
              the same three contract details before you sign: when
              the term ends, what happens at renewal, and whether
              capacity and transmission costs are included in the rate
              or passed through separately. Two quotes with the same
              headline rate can land very differently once those are
              counted.
            </p>
            <p>
              The right rate structure won&apos;t make winter cheap.
              It will make winter knowable — and for a small business,
              knowable is usually worth more than a gamble on cheap.
            </p>

            <Callout
              title="Not sure which structure you're on right now?"
              text="Send us a recent bill and we'll tell you plainly whether you're fixed, variable, or somewhere in between, when your contract ends, and which structure fits your usage heading into winter. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
