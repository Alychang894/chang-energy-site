// app/blog/demand-charges-explained/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "Demand Charges Explained: Why Your Busiest Half Hour Sets Part of Your Bill",
  description:
    "Two businesses can use the same amount of electricity and pay very different bills. The difference is often the demand charge — billed on your highest short burst of usage, not your total. How it works, and how to soften it this winter.",
  alternates: {
    canonical: "/blog/demand-charges-explained",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Demand Charges Explained: Why Your Busiest Half Hour Sets Part of Your Bill"
        kicker="Energy Insights"
        date="Nov 4, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              Here is a puzzle we see on real bills all the time: two
              businesses on the same street use about the same amount of
              electricity in a month, and one pays noticeably more than
              the other. Same usage, different bill. Nine times out of
              ten, the difference is a line most owners have never had
              explained to them — the demand charge.
            </p>
            <p>
              It is also the line winter loves to punish. On the coldest
              morning of the month, everything in your building tends to
              start at once. That one busy stretch can set a charge you
              carry for the whole billing period.
            </p>

            <h2>First, the two units on your bill: kWh and kW</h2>
            <p>
              Your bill measures electricity two different ways, and
              mixing them up is where most of the confusion starts.
            </p>
            <p>
              <strong>Kilowatt-hours (kWh)</strong> are how much
              electricity you used in total over the month — every light,
              motor, oven, and dryer, added up over time. Think of it as
              the total amount of water that flowed through the hose.
            </p>
            <p>
              <strong>Kilowatts (kW)</strong> are how fast you were
              pulling power at a given moment — how wide you had the
              hose turned on. Your energy charge bills the total flow.
              Your demand charge bills the widest you opened the tap.
            </p>
            <p>
              The grid has to be built and staffed for everybody&apos;s
              widest moment, not their average one. That is the honest
              reason demand charges exist: the wires, transformers, and
              capacity behind your meter have to be ready for your peak,
              even if that peak only lasts a short while.
            </p>

            <h2>How your peak is actually measured</h2>
            <p>
              Your utility does not bill demand on a single split-second
              spike. It averages your usage over a short interval —
              commonly 15 or 30 minutes — and takes the highest interval
              in the billing period as your peak demand for the month.
              In PECO territory, Penn State Extension notes that peak
              demand is the highest average use over a 30-minute interval
              in the billing period; other Pennsylvania utilities use
              intervals ranging from 15 minutes to an hour. Your tariff
              spells out which one applies to you.
            </p>
            <p>
              That peak number, in kW, is then multiplied by a per-kW
              rate on the delivery side of your bill. To give that some
              shape: PECO&apos;s published General Service tariff (effective
              January 1, 2025) lists a variable distribution charge of
              $11.35 per kW of billed demand. At a rate like that, shaving
              10 kW off your peak is worth more than a hundred dollars a
              month — before you have saved a single kilowatt-hour. Check
              your own bill for the rate and peak that apply to your
              account, because both vary by rate class and utility.
            </p>
            <p>
              Two details worth knowing. First, the demand charge resets
              each billing period, so last month&apos;s bad morning does
              not follow you forever. Second, some tariffs include a
              minimum billing demand, so even a quiet month may not bill
              at zero. Both are reasons to read the demand lines on your
              bill rather than just the total.
            </p>

            <h2>Why winter is when peaks happen</h2>
            <p>
              Picture a restaurant at 7 a.m. in January. The heat comes
              on to warm a cold building. The lights go up. The ovens,
              the hood fans, the walk-in compressors, the water heater,
              and the coffee equipment all start within the same half
              hour. Nothing on that list is wasteful — it is just all
              happening at once, and all at once is exactly what a
              demand charge measures.
            </p>
            <p>
              The same pattern shows up everywhere. A laundromat that
              fires every washer and dryer for the morning rush. An auto
              shop where the compressor, the lifts, and the heat all
              start with the first tech. A small manufacturer starting a
              shift with every motor on the floor. Winter adds heating
              load on top of the normal startup pile-up, which is why
              demand charges so often surprise people on a January or
              February bill.
            </p>

            <h2>What you can — and can&apos;t — shop</h2>
            <p>
              Be clear-eyed about this part: the demand charge itself
              sits mostly on the delivery side of the bill, set by your
              utility&apos;s tariff. Switching suppliers does not make it
              disappear, and anyone who promises that is selling you
              something. What you <em>can</em> shop is your supply rate —
              the per-kWh price for the energy itself — and what you can
              manage, with operations rather than paperwork, is the size
              of the peak the demand charge is calculated on.
            </p>
            <p>
              That distinction matters when you compare quotes, too. A
              great supply rate on a bill with an unmanaged peak is only
              half a win. The full picture is supply price plus how your
              building actually pulls power through the day.
            </p>

            <h2>Four ways to soften your peak without slowing the business down</h2>
            <p>
              <strong>1. Stagger the morning startup.</strong> The
              cheapest demand cut there is. Bring the heat up first, let
              it settle, then start the big equipment in sequence instead
              of all in the same few minutes. Even a 10- to 15-minute
              spread between your largest loads can keep them from
              stacking into one peak interval.
            </p>
            <p>
              <strong>2. Sequence, don&apos;t stack, your biggest loads.</strong>{" "}
              Dryers, ovens, compressors, and large motors are the usual
              suspects. Where the work allows it, run them in rotation
              rather than all at once — the same total work gets done,
              spread across more intervals at a lower peak.
            </p>
            <p>
              <strong>3. Find your peak before you try to fix it.</strong>{" "}
              Start with the demand line on your last few bills: the kW
              figure and the charge next to it. If you want the full
              picture, your utility can usually provide interval data
              showing when during the day your usage spikes. Most owners
              can guess the moment once they see it — it is almost always
              a startup, a rush, or a shift change.
            </p>
            <p>
              <strong>4. Make the peak someone&apos;s job on busy days.</strong>{" "}
              Peaks are rarely a technology problem. They are a habit:
              whoever opens, whoever runs the first batch, whoever starts
              the shift. A simple rule — &ldquo;never start these two
              machines in the same 15 minutes&rdquo; — written down and
              shared beats an expensive fix nobody follows.
            </p>

            <h2>The takeaway for this winter</h2>
            <p>
              You do not need to use less electricity to pay less on the
              demand side. You need to pull it a little more evenly. As
              heating season gets going, pull last month&apos;s bill, find
              the kW line, and ask one question: what was running during
              our busiest half hour, and did it all need to start at
              once? For most small businesses, the honest answer leaves
              real money on the table — in a good way.
            </p>

            <Callout
              title="Not sure what your peak is costing you?"
              text="Send us a recent bill and we'll break down your demand charge in plain English — what set your peak, what it costs you each month, and which of your startup routines are worth staggering before the coldest weeks hit. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
