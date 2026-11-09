// app/blog/business-natural-gas-bill-explained/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "Your Business Natural Gas Bill, Explained: Why Heating Season Surprises Owners",
  description:
    "Most owners watch their electric bill and get surprised by the gas bill. How a business natural gas bill works — therms, supply vs. delivery, and why winter changes both — in plain English.",
  alternates: {
    canonical: "/blog/business-natural-gas-bill-explained",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Your Business Natural Gas Bill, Explained: Why Heating Season Surprises Owners"
        kicker="Energy Insights"
        date="Nov 9, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              All fall, most owners watch their electric bill. Then the
              first real cold stretch hits, the heat runs all day, the
              kitchen and the hot water never stop — and the natural gas
              bill is the one that surprises them.
            </p>
            <p>
              It makes sense. If you run a restaurant, a laundromat, or
              any shop that has to stay warm for customers and staff,
              gas is doing a lot of quiet work in winter: heating the
              space, heating water, and often cooking, too. Here is how
              that bill is actually put together, in plain English.
            </p>

            <h2>First, what are you buying? Therms, not kilowatt-hours</h2>
            <p>
              Electricity is measured in kilowatt-hours — how much power
              you used over time. Natural gas is different. On most
              business bills it shows up in <strong>therms</strong> (some
              utilities bill in Ccf or Mcf and convert to therms on the
              bill). A therm is simply a unit of heat.
            </p>
            <p>
              That one detail matters in winter. Your gas use is not
              mostly about how long the lights are on. It is about how
              cold it is outside, how big a space you are heating, how
              well that space holds heat, and how much hot water and
              cooking your business does on a busy day. A mild week and
              a cold week can produce two very different bills even if
              your hours never changed.
            </p>

            <h2>The same two sides as electric: delivery and supply</h2>
            <p>
              Just like your electric bill, your gas bill has two main
              sides.
            </p>
            <p>
              <strong>Delivery</strong> is your local gas utility. It
              owns the pipes that bring gas to your building, reads the
              meter, and handles leaks and emergencies. You do not choose
              your gas utility — it is set by where your building sits —
              and its delivery charges are set through regulated tariffs.
              If you smell gas or think you have a leak, that is always
              a utility call, right away, no matter who supplies your
              gas.
            </p>
            <p>
              <strong>Supply</strong> is the gas itself. That is the
              part you can shop in states that allow choice, just as
              with electricity. If you have never chosen a gas supplier,
              your utility is usually supplying you at its default rate.
              If you have chosen one, your supplier&apos;s name and the
              rate you agreed to should appear in the supply section of
              the bill.
            </p>
            <p>
              Most owners still get one combined bill from the utility,
              which is why the two sides blur together. Learning to spot
              which line belongs to which side is the fastest way to
              know what you can change — and what you cannot.
            </p>

            <h2>Why the winter gas bill jumps two ways at once</h2>
            <p>
              A higher winter gas bill is usually not one thing going
              wrong. It is two things happening at the same time.
            </p>
            <p>
              First, you use more. The heat runs longer, doors open to
              cold air all day, and hot water has to work harder because
              the water coming in is colder. Second, when a cold snap
              settles over a whole region, a lot of buildings need gas
              at the same time. That extra demand can put pressure on
              market prices — and if your supply rate is variable, or
              you are on a default rate that moves, you feel that move
              on top of the extra use.
            </p>
            <p>
              That is why comparing only this month&apos;s total to last
              month&apos;s total can mislead you. Always look at two
              numbers separately: how many therms you used, and what
              price you paid per therm. One tells you about usage. The
              other tells you about your rate.
            </p>

            <h2>Three checks to make this month</h2>
            <p>
              <strong>1. Find your supply rate and who sets it.</strong>{" "}
              Pull a recent gas bill — not just the electric one — and
              find the supply section. Is your utility supplying you, or
              is another supplier named? Is that rate fixed for a term,
              or does it change month to month? Many owners have reviewed
              their electric supply and never once checked the gas side.
            </p>
            <p>
              <strong>2. Line up last winter, month by month.</strong>{" "}
              Look at December through February from last year: therms
              used and the rate per therm for each month. That gives you
              a realistic range for this winter&apos;s budget — far
              better than guessing from a mild fall bill — and it shows
              you whether your rate stayed steady or bounced around.
            </p>
            <p>
              <strong>3. Walk the building like heat does.</strong>{" "}
              Check the simple things while it is still early in the
              season: doors that do not seal, a back door propped open
              during deliveries, thermostats fighting each other in
              different rooms, and water heaters set hotter than your
              operation needs. None of that changes your rate, but it
              does change how many therms you burn through — and in
              winter, usage is half the bill.
            </p>

            <h2>The takeaway before the coldest weeks</h2>
            <p>
              You cannot shop your gas utility, and you do not need to.
              What you can check — and, where choice is available, shop
              and time — is your gas supply, the same way you would for
              electricity. And you can get ahead of usage by knowing
              what last winter actually looked like for your building,
              therm by therm.
            </p>
            <p>
              If you have only ever had your electric bill reviewed, this
              is a good month to have the gas bill looked at too. In a
              lot of small businesses, winter is when gas quietly becomes
              the bigger story.
            </p>

            <Callout
              title="Only ever checked your electric bill?"
              text="Send us both bills and we'll break down your gas supply rate, who your supplier is, when that arrangement ends, and what last winter's usage says about this one. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
