// app/blog/restaurant-energy-costs/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";
import HighlightList from "@/components/blog/HighlightList";

export const metadata: Metadata = {
  title: "Running a Restaurant? Your Energy Bill Is Eating Your Margins",
  description:
    "Restaurants use far more energy per square foot than most businesses. Where that energy actually goes, what you can control, and the fall checks worth making before winter.",
  alternates: {
    canonical: "/blog/restaurant-energy-costs",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Running a Restaurant? Your Energy Bill Is Eating Your Margins"
        kicker="Energy Insights"
        date="Oct 9, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              Restaurant margins are thin on a good day. Rent, labor, food
              costs — everything is up, and everything is negotiated hard.
              Except, for a lot of owners, one line: the energy bill. It
              shows up, it gets paid, and nobody has time during service to
              ask why it is what it is.
            </p>
            <p>
              That&apos;s a problem, because restaurants are unusually
              energy-hungry. ENERGY STAR notes that restaurants use about
              five to seven times more energy per square foot than other
              commercial buildings — and that most of a restaurant&apos;s
              electricity goes to refrigeration, followed by lighting and
              cooling. When you run that much load, small pricing and
              timing mistakes add up fast.
            </p>

            <h2>Where the energy actually goes in a kitchen</h2>
            <p>
              Walk the line and you&apos;ll see it. Walk-ins and reach-ins
              run around the clock — they never close, even when you do.
              Cooking equipment fires early for prep and often idles through
              slow stretches. The hood pulls out air you paid to heat or
              cool. And the dining room needs to feel comfortable at 6 p.m.
              on a Friday, right when the kitchen hits full tilt.
            </p>
            <p>
              None of that is waste in the usual sense — it&apos;s the job.
              But it does mean your usage pattern is spiky, your equipment
              runs long hours, and a rate that looked fine on paper can
              cost you more than it should if it doesn&apos;t fit how you
              actually operate.
            </p>

            <h2>The part of the bill you can actually shop</h2>
            <p>
              Your bill has two big sides. Delivery — the wires, poles, and
              pipes that bring energy to your building — is set by your
              utility and regulators. You can&apos;t negotiate it. Supply —
              the energy itself — is different. In states like Pennsylvania,
              you can choose a supplier for that portion, and the rate and
              contract terms you sign are where your control lives.
            </p>
            <p>
              The traps are familiar ones: a contract that auto-renews onto
              a variable rate, a teaser rate that resets after a few months,
              or a renewal that lands in the middle of a price spike because
              nobody circled the end date on a calendar. For a business
              running refrigeration 24/7, drifting onto a variable rate in
              winter is an expensive way to find out.
            </p>

            <h2>Three no-cost habits that help</h2>
            <p>
              Before you spend a dollar on new equipment, these cost
              nothing and they&apos;re within your crew&apos;s control:
            </p>

            <HighlightList
              title="Simple moves for a busy kitchen"
              items={[
                "Post a start-up and shut-down routine. Equipment that idles for hours with nothing cooking is burning money — turn it on in stages as service needs it, and off in stages as the night winds down.",
                "Keep refrigeration sealed and maintained. Check door gaskets, clean coils, and don't block vents inside walk-ins — a fridge working against warm air runs longer and draws more.",
                "Stagger the morning start-up where you can. Firing every big load in the same few minutes can set a high demand peak that you pay for all month.",
              ]}
            />

            <h2>Why fall is the right time to look</h2>
            <p>
              October is a useful window. Summer cooling loads are easing,
              but heating season — and the holiday rush — are right around
              the corner. If your supply contract ends sometime this winter,
              shopping now, while you have choices, beats shopping in
              January when you&apos;re busy, understaffed, and out of time.
            </p>
            <p>
              Pull last fall and winter&apos;s bills. Look at the supply
              rate you paid each month — steady, or bouncing around? Find
              your contract end date. That ten-minute check tells you
              whether you&apos;re set for the season or quietly exposed
              to it.
            </p>

            <Callout
              title="Want a second set of eyes on your restaurant's bill?"
              text="Send us your latest bill and we'll break down what you're paying for supply, when your contract ends, and whether a different rate or term would fit your kitchen better. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
