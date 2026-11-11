// app/blog/thanksgiving-week-energy-plan/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "Thanksgiving Week and Your Energy Bill: Close, Set Back, and Reopen Right",
  description:
    "Closing for Thanksgiving or running shorter holiday hours? How to set back the heat while you're closed, protect pipes and inventory, and avoid a demand spike when everything restarts at once.",
  alternates: {
    canonical: "/blog/thanksgiving-week-energy-plan",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Thanksgiving Week and Your Energy Bill: Close, Set Back, and Reopen Right"
        kicker="Energy Insights"
        date="Nov 11, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              Thanksgiving week does something odd to a small business.
              Some shops close for a day or two, some run shorter hours,
              and restaurants and grocers do the opposite — their
              busiest days of the year. Either way, your normal rhythm
              breaks, and your energy bill notices.
            </p>
            <p>
              The good news is that holiday week is one of the easiest
              times to save a little money and avoid a silly charge —
              if you plan the close, the setback, and the reopen before
              you&apos;re rushing out the door. Here&apos;s a simple
              way to handle all three.
            </p>

            <h2>If you&apos;re closing: set back, don&apos;t shut off</h2>
            <p>
              It&apos;s tempting to turn the heat all the way off while
              the building is empty. In late November in Pennsylvania,
              that&apos;s a risk not worth taking. A hard freeze while
              you&apos;re closed can threaten pipes, and a building
              that gets truly cold takes a long, expensive run of
              heating to bring back on Monday.
            </p>
            <p>
              A setback is the middle path: lower the thermostat to a
              steady, safe holding temperature while you&apos;re closed,
              rather than off, and rather than keeping the place at full
              comfort temperature for nobody. Walk the building once
              before you leave — back rooms, restrooms, and storage
              areas with water lines are the spots owners most often
              forget.
            </p>
            <p>
              While you&apos;re at it, turn off what doesn&apos;t need
              to stay on: office equipment, extra lighting, space
              heaters (those should never run in an empty building
              anyway), and any display or kitchen equipment that
              isn&apos;t keeping food safe. Refrigeration, security,
              and anything protecting inventory stays on — that&apos;s
              not where the savings are.
            </p>

            <h2>If you&apos;re staying open: your busiest days run differently</h2>
            <p>
              For restaurants and food shops, Thanksgiving week flips
              the problem. Ovens and burners run longer, doors open
              more often to cold air, and hot water use climbs — all
              on your longest days. There&apos;s not much to
              &quot;save&quot; there, and there shouldn&apos;t be:
              that&apos;s revenue.
            </p>
            <p>
              What you can do is keep the waste out of the busy days.
              Preheat in stages instead of firing everything at once
              first thing, keep back doors closed between deliveries
              instead of propped against the cold, and put one person
              in charge of the closing routine on those late nights —
              holiday weeks are exactly when lights, hoods, and
              equipment get left running until morning.
            </p>

            <h2>The reopening spike nobody expects</h2>
            <p>
              Here&apos;s the part that surprises owners in December,
              when the bill arrives. If you closed for a few days and
              then, on reopening morning, the heat, the lights, the
              kitchen or shop equipment, and the water heater all come
              back at full blast at the same moment, that one busy
              stretch can set your highest demand of the billing
              period.
            </p>
            <p>
              As we&apos;ve covered before, many commercial bills
              include a demand charge based on your highest short burst
              of use — not your total use. One stacked restart can
              follow you through the whole month&apos;s bill, even if
              every other day was calm and careful.
            </p>
            <p>
              The fix is simple and free: stagger the restart. Come in
              a little early, bring the heat up first, then bring
              equipment online in stages a few minutes apart instead of
              all at once. You&apos;ll open just as warm and just as
              ready — you just won&apos;t pay for doing it all in the
              same fifteen minutes.
            </p>

            <h2>One five-minute check to do this week</h2>
            <p>
              Before the holiday, pull out your most recent electric
              and gas bills and confirm two things: who your supplier
              is, and whether your supply rate is fixed or changes month
              to month. Thanksgiving sits right at the edge of heating
              season — if you&apos;re heading into December on a rate
              that moves with the market, the holiday week is a good,
              quiet moment to find that out, not the middle of the
              first cold snap.
            </p>
            <p>
              And if your contract is set to end or renew around the
              end of the year, note the date now. December is a hard
              month to reach anyone, and renewal decisions made in a
              rush are rarely the best ones.
            </p>

            <h2>The takeaway</h2>
            <p>
              Holiday week rewards a little intention: set back instead
              of shutting off, keep the waste out of your busiest days,
              and stagger the restart when you reopen. None of it
              changes your rate — it changes how much you use and how
              sharply you use it, and in winter both halves matter.
            </p>
            <p>
              Whether you&apos;re closing up or gearing up, we hope
              you and your crew get a real break in there somewhere.
              The bill can wait until Monday — and if it surprises you
              when it arrives, you know where to find us.
            </p>

            <Callout
              title="Want a second set of eyes before December?"
              text="Send us your electric and gas bills and we'll break down your supply rates, when your contract ends, and anything that looks off before heating season gets serious. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
