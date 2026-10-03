// app/blog/winter-energy-checklist/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";

export const metadata: Metadata = {
  title: "5 Energy Moves to Make Before Winter",
  description:
    "Winter is when electric bills surprise small businesses. Five practical moves — contract check, rate review, and more — to make before the cold hits.",
  alternates: {
    canonical: "/blog/winter-energy-checklist",
  },
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="5 Energy Moves to Make Before Winter"
        kicker="Energy Insights"
        date="Sep 30, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              Every fall, the same thing happens: the first cold snap hits,
              the heat kicks on, and business owners open a winter electric
              bill that looks nothing like the summer ones. It doesn&apos;t
              have to be a surprise. A little prep now — before heating
              season — goes a long way.
            </p>
            <p>
              Here are five moves worth making in the next few weeks. None
              of them require an engineering degree.
            </p>

            <h2>1. Find out when your contract actually ends</h2>
            <p>
              This is the big one. Most commercial supply contracts{" "}
              <strong>auto-renew</strong> — often at a variable rate that can
              be much higher than what you signed up for. Dig out your
              contract (or your last few bills) and find the end date. If it
              expires this winter, you want to be shopping{" "}
              <em>now</em>, not in January when everyone else is.
            </p>

            <h2>2. Check whether your rate is fixed or variable</h2>
            <p>
              A fixed rate means your supply price doesn&apos;t move when the
              market does. A variable rate means it does — and winter is
              exactly when energy markets get jumpy. Cold snaps drive up
              demand, demand drives up prices, and variable-rate customers
              feel all of it. If you&apos;re on a variable rate heading into
              winter, that&apos;s worth a conversation.
            </p>

            <h2>3. Pull last winter&apos;s bills and look at the trend</h2>
            <p>
              You don&apos;t need a spreadsheet — just line up December
              through February and look at two things: total usage and the
              supply rate you paid. If the rate bounced around month to
              month, you were exposed to the market. That&apos;s useful to
              know <em>before</em> you sign anything new.
            </p>

            <h2>4. Shift what you can away from peak hours</h2>
            <p>
              Some utilities charge extra based on your usage during the
              grid&apos;s busiest hours. If your business has flexibility —
              running big equipment early morning instead of mid-afternoon,
              for example — it can take real money off the delivery side of
              the bill. Even small shifts help if they&apos;re consistent.
            </p>

            <h2>5. Get a second set of eyes on the bill</h2>
            <p>
              Energy bills are genuinely hard to read — that&apos;s not a
              you problem, they&apos;re designed that way. Before you lock
              anything in for winter, have someone who reads these all day
              take a look. We do it free, and we&apos;ll tell you straight
              whether your current deal is fair or not.
            </p>

            <Callout
              title="Heading into winter on a variable rate?"
              text="Send us your bill and we'll break down exactly what you're paying, when your contract ends, and whether locking in a fixed rate before winter makes sense for you. Free, no obligation."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
