// app/blog/capacity-and-transmission-charges-explained/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "Capacity and Transmission Charges, Explained",
  description:
    "Your supply rate is only part of the bill. What capacity and transmission charges pay for, why they show up even in a quiet month, and what to check before winter.",
  alternates: {
    canonical: "/blog/capacity-and-transmission-charges-explained",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Capacity and Transmission Charges, Explained"
        kicker="Energy Insights"
        date="Oct 30, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              A lot of owners do the same math when a bill arrives: take
              the total, divide by how much electricity they used, and
              compare that number to the supply rate they signed for. When
              the two don&apos;t match, it&apos;s natural to assume
              something is wrong.
            </p>
            <p>
              Often, nothing is broken. The gap is usually two charges that
              don&apos;t get much explanation: capacity and transmission.
              They are real costs of keeping power available and getting it
              to your building — and understanding them makes the rest of
              your bill a lot easier to read.
            </p>

            <h2>Capacity: paying for power to be ready when you need it</h2>
            <p>
              Capacity is not the electricity you actually used. It is the
              cost of making sure enough generation is available for the
              busiest moments — the coldest morning, the hottest afternoon,
              the dinner rush when everything in the kitchen is running at
              once.
            </p>
            <p>
              Think of it the way you think about staffing. You don&apos;t
              only pay for the work done on a quiet Tuesday. You also keep
              enough people scheduled for Friday night. The grid works in
              a similar way: power plants are kept available so the system
              does not run short when demand spikes, and businesses share
              in that cost.
            </p>
            <p>
              Because capacity is tied to how much you might need at peak
              times — not just how much you used in total — it can stay
              on your bill even in a month when your overall usage was
              low. That is confusing the first time you see it, but it is
              how the charge is designed to work.
            </p>

            <h2>Transmission: paying to move power across the grid</h2>
            <p>
              Transmission is the delivery system at a larger scale: the
              high-voltage lines and equipment that move electricity from
              where it is generated to your local utility&apos;s network.
              From there, your utility&apos;s local delivery charges cover
              the last stretch to your meter.
            </p>
            <p>
              In plain terms, the energy itself, the readiness behind it,
              and the trip it takes to reach you are three different
              things — and they can be priced three different ways. That
              is why a bill can show a supply rate you recognise and still
              total more than that rate alone would suggest.
            </p>

            <h2>Fixed in your rate, or passed through? That is the key question</h2>
            <p>
              Here is the part that actually affects your decisions. In
              some contracts, capacity and transmission costs are built
              into your fixed supply rate, so they are locked in with it.
              In others, they are passed through — listed separately, or
              adjusted if the underlying costs change during your term.
            </p>
            <p>
              Neither approach is automatically better. A rate that
              includes them can look higher on paper but be more
              predictable. A pass-through structure can look lower at
              signing, then move later. The mistake is comparing two quotes
              without knowing which structure each one uses. Two offers
              with the same headline rate can cost you differently over a
              winter if one has locked those charges in and the other
              has not.
            </p>
            <p>
              Before you sign or renew, ask one direct question: are
              capacity and transmission included in this rate, or passed
              through separately? Get the answer in the contract language,
              not just in conversation.
            </p>

            <h2>What you can — and can&apos;t — control</h2>
            <p>
              You cannot shop your way out of the grid needing capacity
              and transmission. Every business connected to it shares
              those costs in some form. What you can control is how
              clearly they are handled in your contract, and — over
              time — how your highest-demand moments look.
            </p>
            <p>
              Because capacity-related costs are often influenced by your
              usage during the system&apos;s busiest periods, steady
              habits help: avoid starting every large piece of equipment
              at the same moment where you can, and keep an eye on the
              demand figure on your bill, not just total usage. You do
              not need a new system to do that. You just need to know the
              number is there.
            </p>

            <h2>A simple way to read your next bill</h2>
            <p>
              On your next bill, find three things: your supply rate, any
              line that mentions capacity, and any line that mentions
              transmission. Then pull out your contract and check whether
              those charges were supposed to be inside the rate or outside
              it. If the bill and the contract tell the same story, the
              math gap you noticed at the start is probably explained. If
              they don&apos;t, that is a fair, specific question to raise
              — and much easier to sort out now than after a winter of
              bills.
            </p>

            <Callout
              title="Not sure if those charges are in your rate or on top of it?"
              text="Send us a recent bill and your contract, and we'll show you how capacity and transmission are handled in your deal — and whether a quote you're comparing is really apples to apples. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
