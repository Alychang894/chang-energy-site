// app/blog/commercial-electric-bill-decoded/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";
import StatBar from "@/components/blog/StatBar";
import HighlightList from "@/components/blog/HighlightList";

export const metadata: Metadata = {
  title: "Your Commercial Electric Bill, Decoded: The 3 Lines That Actually Matter",
  description:
    "Supply, delivery, demand — what each line of your business electric bill means, which one you can actually negotiate, and what to check before winter.",
  alternates: {
    canonical: "/blog/commercial-electric-bill-decoded",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Your Commercial Electric Bill, Decoded: The 3 Lines That Actually Matter"
        kicker="Energy Insights"
        date="Oct 5, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              If your electric bill looks like a puzzle with half the pieces
              missing, you&apos;re in good company. Most commercial bills run
              several pages, name the same charges three different ways, and
              bury the number you actually care about. Here&apos;s the plain
              version: almost every commercial bill is made of just three
              buckets. Learn the buckets, and the bill gets a lot less
              intimidating.
            </p>

            <StatBar
              items={[
                {
                  label: "Supply",
                  value: "The electricity itself",
                },
                {
                  label: "Delivery",
                  value: "The wires it rides on",
                },
                {
                  label: "Demand",
                  value: "Your peak draw",
                },
              ]}
            />

            <h2>Bucket 1: Supply — the energy you actually used</h2>
            <p>
              Supply is the cost of the electricity itself — what a power
              plant had to burn, spin, or soak up from the sun to make your
              kWh. On your bill it might be labeled &ldquo;generation,&rdquo;
              &ldquo;supply charges,&rdquo; or &ldquo;energy.&rdquo; It&apos;s
              priced per kilowatt-hour, and it&apos;s the only bucket you can
              shop. Your utility sets a default supply rate, but licensed
              suppliers compete for this line — which is why two identical
              shops on the same street can pay different supply rates.
            </p>
            <p>
              In Pennsylvania, the statewide commercial average sits around
              13.7 cents per kWh (U.S. Energy Information Administration,
              April 2026 data) — but averages hide a lot. Your real number
              depends on your rate class, your contract terms, and how much of
              that total is supply versus everything else on the bill. Which
              is exactly why you have to read the lines, not just the total.
            </p>

            <h2>Bucket 2: Delivery — getting it to your door</h2>
            <p>
              Delivery covers the poles, wires, transformers, and the crews
              that keep them standing. This is your utility&apos;s territory —
              PECO, PPL, FirstEnergy, whoever owns the lines in your area. The
              rates are set by regulators, not by competition, and they apply
              the same to everyone in your rate class. You can&apos;t negotiate
              this bucket, and anyone who says they can is selling you
              something.
            </p>
            <p>
              What you <em>can</em> do: know it&apos;s there, so you
              don&apos;t blame it on your supply contract — or blame your
              supply contract on it. When someone quotes you a lower rate,
              make sure you&apos;re comparing supply to supply, not supply to
              a blended total that includes delivery.
            </p>

            <h2>Bucket 3: Demand — the one that ambushes people</h2>
            <p>
              Demand is a charge based on your highest 15- or 30-minute burst
              of usage in the month — measured in kilowatts, not
              kilowatt-hours. It&apos;s the utility&apos;s way of billing you
              for the capacity it has to keep ready for your peak moment.
            </p>
            <p>
              This is the line that surprises owners. A laundromat that fires
              every dryer at 9 a.m. Monday can rack up a demand charge from a
              single bad hour, then pay for that hour all month. Restaurants,
              auto shops, gyms — any business that runs big equipment all at
              once is exposed. The fix is usually operational, not technical:
              stagger start-ups, shift a big load out of your peak window, and
              know <em>when</em> your peak happens.
            </p>

            <HighlightList
              title="Five things to check on your next bill"
              items={[
                "Find your supply rate (cents per kWh). Is it fixed, variable, or a default utility rate? If the bill doesn't say, that's a question worth asking.",
                "Find your contract end date. If it's missing or already passed, you may be on an auto-renewed variable rate.",
                "Find the demand charge. Compare it month to month — if it's climbing, something operational changed, not the market.",
                "Add up the line items yourself. If the total doesn't match the bottom line, you found a billing error — it happens more than utilities admit.",
                "Compare supply to the going rate, not the blended total. A low supply quote means nothing until delivery and demand are held constant.",
              ]}
            />

            <h2>Why this matters now</h2>
            <p>
              We&apos;re heading into the part of the year when bills swing
              the hardest. Heating loads, shorter days, and winter price
              spikes all stack up — and if your supply contract expires this
              winter, the default rate you land on could be the most expensive
              line item you never chose. Five minutes with your bill today,
              knowing which bucket is which, is the difference between
              shopping from a position of strength and getting surprised in
              January.
            </p>

            <Callout
              title="Not sure what your bill is actually saying?"
              text="Send us your latest bill and we'll break down all three buckets — what you're paying, when your contract ends, and whether you're leaving money on the table. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
