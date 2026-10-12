// app/blog/laundromat-energy-costs/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "Laundromat Energy Costs: The Bill Behind Every Load",
  description:
    "Hot water and dryers drive most of a laundromat's energy bill. Where the money goes, which part you can shop, and the fall checks worth making before winter.",
  alternates: {
    canonical: "/blog/laundromat-energy-costs",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Laundromat Energy Costs: The Bill Behind Every Load"
        kicker="Energy Insights"
        date="Oct 12, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              If you run a laundromat, energy isn&apos;t a background cost —
              it&apos;s the business. Every load a customer runs needs hot
              water, a spinning drum, and a dryer pushing hot air. When rates
              move, your margins feel it the same week, and you can&apos;t
              exactly ask customers to wash in cold water and take home damp
              clothes.
            </p>
            <p>
              The good news: a laundromat&apos;s bill has a few very specific
              pressure points. Know where they are, and you know where to
              push back.
            </p>

            <h2>Hot water is the main event</h2>
            <p>
              According to a U.S. Department of Energy study of commercial
              building appliances, roughly half of the energy used by
              commercial laundry equipment goes to the building&apos;s water
              heater — the machines themselves account for the rest. In
              plain terms: heating water is about as big a cost as running
              the washers and dryers. That&apos;s why so many laundromats
              lean heavily on natural gas for water heating and drying, and
              why it pays to look at your gas and electric bills together
              instead of treating them as separate problems.
            </p>

            <h2>Your busiest hour can set part of the bill</h2>
            <p>
              Many commercial electric bills include a demand charge — a
              charge based on your highest burst of usage in the billing
              period, not just your total usage. A Saturday morning when
              every washer, dryer, and the water heater fire up at once can
              set that peak. You don&apos;t have to turn customers away to
              manage it: staggering equipment startups, fixing machines that
              sit out of service and overload the rest, and avoiding running
              your own wash-and-fold work right in the middle of the
              Saturday rush can all soften the spike.
            </p>

            <h2>The supply rate is the part you can shop</h2>
            <p>
              Your utility delivers the power and will always charge for
              that. The supply portion — the energy itself — is the part
              competitive suppliers price. For a business that runs energy
              all day, every day, even a small difference in the supply rate
              adds up across thousands of loads a year. Two things to check
              on your current deal: whether your rate is fixed or variable,
              and when the contract ends. Laundromats on variable rates
              heading into winter are the ones who get the nasty surprise
              bills, because cold weather is when energy markets tend to
              get jumpy.
            </p>

            <h2>Three fall checks before winter</h2>
            <p>
              <strong>1. Service the water heater and dryers.</strong> A
              water heater fighting sediment or a dryer with a clogged vent
              runs longer to do the same job — and you pay for every extra
              minute. Fall maintenance is cheaper than winter repair calls
              and winter bills.
            </p>
            <p>
              <strong>2. Pull last winter&apos;s bills.</strong> Line up
              December through February and look at your supply rate month
              to month. If it bounced around, you were riding the market.
              That&apos;s the strongest argument for pricing a fixed rate
              now, while it&apos;s still fall.
            </p>
            <p>
              <strong>3. Know your contract end date.</strong> Many
              commercial contracts auto-renew, sometimes onto a variable
              rate. If yours renews this winter, the time to shop is now —
              not the week it rolls over.
            </p>

            <p>
              None of this requires new machines or a remodel. It&apos;s
              about knowing which lines on the bill you control, which ones
              you can shop, and which habits quietly set your peak. For a
              laundromat, that awareness is real money — load after load,
              all winter long.
            </p>

            <Callout
              title="Want a second set of eyes on your laundromat's bill?"
              text="Send us a recent bill and we'll break down what you're paying for supply, where your demand peak is coming from, and when your contract ends. Free, no obligation — and we'll tell you straight if your current deal is already a fair one."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
