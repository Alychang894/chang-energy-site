// app/blog/utility-vs-supplier-explained/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "Utility vs. Supplier: Who Does What on Your Business Energy Bill?",
  description:
    "Your utility delivers the power and your supplier provides it — two different jobs on one bill. Who handles outages, who sets which charges, and which part you can actually shop this winter.",
  alternates: {
    canonical: "/blog/utility-vs-supplier-explained",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Utility vs. Supplier: Who Does What on Your Business Energy Bill?"
        kicker="Energy Insights"
        date="Nov 6, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              Every winter, the calls start. A supplier offers a new
              rate, an owner asks a fair question — &ldquo;wait, if I
              switch, who do I call when the power goes out?&rdquo; —
              and nobody has ever explained the answer in plain
              English. It is one of the most common points of confusion
              on a business energy bill, and once you see it, the whole
              bill gets easier to read.
            </p>
            <p>
              The short version: two different companies do two
              different jobs. Your utility delivers the power. Your
              supplier provides it. They show up on the same bill, which
              is exactly why they get mixed up.
            </p>

            <h2>Your utility: the wires, the meter, and the outage crew</h2>
            <p>
              Your local utility — PECO in most of the Philadelphia
              suburbs, for example — owns and maintains the poles,
              wires, transformers, and the meter on the side of your
              building. That does not change when you shop for supply,
              and you do not get to choose it. Your utility is set by
              where your building sits.
            </p>
            <p>
              Because the utility runs the delivery side, it handles
              the things owners care about most in a storm: outages,
              downed lines, meter problems, and getting the lights back
              on. If the power goes out at your restaurant on a Friday
              night, you call your utility — no matter who your supplier
              is. Switching suppliers never changes that number, and it
              never changes how fast a crew rolls.
            </p>
            <p>
              The utility also charges for that delivery work. Those
              delivery charges, along with charges like capacity and
              transmission, are set through regulated tariffs. They are
              the part of the bill you generally cannot shop.
            </p>

            <h2>Your supplier: the energy itself, and the price you pay for it</h2>
            <p>
              Your supplier is the company that buys or generates the
              electricity (or natural gas) your business uses and sells
              it to you at a price set by your contract. That supply
              price — per kilowatt-hour for electricity — is the part
              of the bill where you actually have a choice.
            </p>
            <p>
              If you have never chosen a supplier, you are still getting
              supply — your utility provides it at a default rate that
              can move over time. Choosing a supplier simply means you
              have picked who provides that energy and on what terms:
              fixed or variable, for how long, and what happens when
              the contract ends. The power itself arrives the same way,
              through the same wires, either way.
            </p>
            <p>
              A broker like us sits in this part of the picture. We do
              not deliver power and we do not send the repair truck. We
              help you compare suppliers, read the contract terms before
              you sign, and time a renewal so you are not caught on a
              rate you never chose.
            </p>

            <h2>Why it still looks like one bill</h2>
            <p>
              In most cases, you keep getting one bill, from your
              utility, even after you choose a supplier. The utility
              reads the meter, puts both sides together — delivery
              charges from the utility, supply charges from your
              supplier — and sends you the combined total. Your
              supplier&apos;s name and rate usually appear right on that
              bill, in the supply section.
            </p>
            <p>
              That is worth checking this month. Pull a recent bill and
              find two things: the name in the supply section, and the
              supply rate next to it. If the name is your utility, you
              are on default supply. If it is another company, that is
              your supplier — and the rate beside it is the one your
              contract controls. A surprising number of owners cannot
              answer either question, and that is not their fault. The
              bill does not exactly volunteer it.
            </p>

            <h2>Who to call for what</h2>
            <p>
              <strong>Power out, flickering, or a meter issue?</strong>{" "}
              Your utility. Always. Keep that outage number somewhere
              your closing manager can find it before winter storms
              arrive.
            </p>
            <p>
              <strong>A question about your rate or your contract end
              date?</strong> That is the supply side — your supplier, or
              whoever helped you set the contract up. Your utility
              cannot change a supply rate you agreed to with someone
              else.
            </p>
            <p>
              <strong>A charge you do not recognize?</strong> First,
              check which side of the bill it sits on. Delivery-side
              charges are the utility&apos;s to explain. Supply-side
              charges are your supplier&apos;s. Knowing which side you
              are looking at saves you a long hold with the wrong
              company.
            </p>

            <h2>The takeaway before winter</h2>
            <p>
              You cannot shop your utility, and you do not need to —
              its job is delivery, and it stays the same either way.
              What you can shop, compare, and time is your supply. As
              heating season gets underway, that one distinction tells
              you what a new offer can and cannot do for you: a supplier
              can change the price of the energy you use, but no offer
              can change your delivery charges or your outage crew.
              Anyone who suggests otherwise is blurring a line worth
              keeping clear.
            </p>

            <Callout
              title="Not sure who your supplier is?"
              text="Send us a recent bill and we'll point out exactly who supplies your energy, what rate you're on, when that arrangement ends, and whether shopping it before the coldest weeks makes sense. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
