import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "How to Budget for Energy This Winter Without Guessing",
  description:
    "Winter energy bills don't have to be a surprise. A simple way to budget from last winter's bills, separate what you can control, and build in a cushion.",
  alternates: {
    canonical: "/blog/small-business-energy-budget",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="How to Budget for Energy This Winter Without Guessing"
        kicker="Energy Insights"
        date="Oct 16, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              Most small businesses budget for energy the same way: take
              last month&apos;s bill, hope winter looks similar, and wince
              when it doesn&apos;t. Winter rarely cooperates with that
              approach. The heat runs longer, the lights stay on earlier,
              and if your supply rate can move, a cold stretch can move it
              too.
            </p>
            <p>
              You don&apos;t need a forecast or a finance degree to do
              better. You need last winter&apos;s bills and about twenty
              minutes. Here&apos;s a simple way to turn them into a number
              you can actually plan around.
            </p>

            <h2>Start with last winter, not last month</h2>
            <p>
              Pull your bills from December through February of last year
              and add them up. That total — not your mild October bill —
              is your starting point. Those were your coldest months, with
              your heat, your hours, and your equipment all working the
              way they really work in winter.
            </p>
            <p>
              If last winter was unusually mild or unusually harsh for
              your area, say so in your notes and nudge the number a
              little in the other direction. The goal isn&apos;t precision.
              It&apos;s a budget grounded in your own building&apos;s
              history instead of a guess.
            </p>

            <h2>Split the bill into what&apos;s steady and what can move</h2>
            <p>
              Next, look at how that total was built. Delivery charges
              cover getting power or gas to your building, and they tend
              to change on a utility&apos;s schedule, not the weather&apos;s.
              The supply portion is the energy itself — and whether it can
              move depends on your contract.
            </p>
            <p>
              If you&apos;re on a fixed supply rate, your price per unit
              stays put even if the market jumps, so your winter swing
              comes mostly from using more. If you&apos;re on a variable
              rate, both usage and price can climb at the same time, right
              when a cold snap pushes demand up across the whole grid.
              Knowing which situation you&apos;re in tells you how much
              cushion your budget honestly needs.
            </p>

            <h2>Build in a cushion — then track against it monthly</h2>
            <p>
              Take your last-winter total, divide it across the winter
              months, and add a modest cushion on top for a colder-than-
              expected stretch or a rate change you didn&apos;t plan for.
              Then, each month, compare the actual bill to the budget
              while there&apos;s still winter left to adjust — not in
              March, when it&apos;s just a post-mortem.
            </p>
            <p>
              If a bill comes in well over budget, check two things
              before you panic: did you simply use more because it was
              colder or busier, or did the rate itself change? The first
              is weather and workload. The second may mean a contract
              rolled over or a variable rate moved — and that&apos;s a
              problem with a fix, not just a cost to absorb.
            </p>

            <h2>Put your contract end date on the same calendar</h2>
            <p>
              A budget only works if the rate underneath it stays the
              rate you planned on. Find your supply contract&apos;s end
              date and write it next to your winter budget. If it expires
              mid-winter and auto-renews onto a different rate, your
              careful math can be undone without you signing anything
              new. Shopping ahead of that date — while you still have
              choices — is part of budgeting, not a separate chore.
            </p>
            <p>
              While you&apos;re looking, scan for anything that
              doesn&apos;t belong: a meter reading that jumps for no
              reason, a charge for a service you don&apos;t recognize, or
              a rate that doesn&apos;t match your contract. Catching an
              error in October is a phone call. Catching it in February
              is three months of overpaying.
            </p>

            <p>
              That&apos;s the whole method: last winter as your baseline,
              a clear split between steady charges and the part that can
              move, a small cushion, a monthly check-in, and your end
              date on the calendar. Do that in the next week or two and
              winter stops being the bill that surprises you — it becomes
              a line you planned for, like rent or payroll.
            </p>

            <Callout
              title="Want help turning last winter into this winter's budget?"
              text="Send us a few recent bills and we'll break down what you're paying for supply, whether your rate can move this winter, and when your contract ends — so your budget rests on real numbers. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
