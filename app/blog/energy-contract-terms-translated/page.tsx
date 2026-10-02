// app/blog/energy-contract-terms-translated/page.tsx
import type { Metadata } from "next";
import Prose from "@/components/blog/Prose";
import HeroBanner from "@/components/blog/HeroBanner";
import Callout from "@/components/blog/Callout";
import HighlightList from "@/components/blog/HighlightList";
import QuoteBlock from "@/components/blog/QuoteBlock";

export const metadata: Metadata = {
  title: "Your Energy Contract, Translated: 7 Terms That Quietly Cost You Money | Chang Energy",
  description:
    "Evergreen clauses, bandwidth, early termination fees — the energy contract terms nobody explains to small-business owners, translated into plain English.",
};

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Your Energy Contract, Translated: 7 Terms That Quietly Cost You Money"
        kicker="Energy Insights"
        date="Oct 2, 2026"
        readTime="5 min read"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <Prose>
            <p>
              Nobody opens a small business dreaming of the day they get to
              read an energy supply contract. So most owners sign what the
              rep puts in front of them, file it somewhere, and never look
              at it again. That&apos;s exactly what the fine print is
              counting on.
            </p>
            <p>
              Here are the seven terms that show up in commercial energy
              contracts most often — and what each one actually means for
              your wallet.
            </p>

            <h2>1. Evergreen / auto-renewal clause</h2>
            <p>
              This is the clause that causes the most damage. It says your
              contract renews automatically unless you give written notice
              within a specific window — often 60 to 90 days before the end
              date. Miss the window, and you roll onto a default rate that is
              almost always higher than anything you&apos;d negotiate
              yourself. Sometimes it&apos;s a month-to-month plan; sometimes
              it&apos;s a whole new fixed term.
            </p>
            <p>
              <strong>Your move:</strong> find your contract&apos;s end date
              and its notice window today, and put a reminder on your
              calendar 120 days before it expires.
            </p>

            <h2>2. Early termination fee (ETF)</h2>
            <p>
              Leave a contract before it ends and you may owe a fee. The
              expensive versions aren&apos;t a flat penalty — they&apos;re a
              &ldquo;loss of profit&rdquo; formula: the supplier estimates how
              much energy you would have bought for the rest of the term and
              charges you a portion of that. With a year or more left on a
              busy shop&apos;s contract, that can run into the thousands.
            </p>
            <p>
              <strong>Your move:</strong> before you sign, ask the supplier
              to show you exactly how the ETF would be calculated for your
              business. &ldquo;It&apos;s standard&rdquo; is not an answer.
            </p>

            <h2>3. Usage bandwidth</h2>
            <p>
              Most fixed-price contracts assume your usage stays within a
              band — say, 75% to 125% of what you used when you signed. If a
              new walk-in cooler, a second shift, or a dead season pushes you
              outside that band, the extra (or missing) usage gets priced at
              whatever the market happens to be, not your nice fixed rate.
            </p>
            <p>
              <strong>Your move:</strong> if your business is growing — or
              has wild seasonal swings — tell your broker <em>before</em> you
              lock a term. The band can be sized to fit.
            </p>

            <h2>4. Rate escalators and adders</h2>
            <p>
              Even a &ldquo;fixed&rdquo; rate can creep. Look for words like{" "}
              <em>adder</em>, <em>adjustment</em>, <em>uplift</em>, or{" "}
              <em>indexing</em> — these are scheduled increases or
              pass-throughs baked into the contract. None of them are
              automatically unfair, but the cents-per-kWh number on the
              front page isn&apos;t the whole story.
            </p>
            <p>
              <strong>Your move:</strong> ask for a projected bill at month
              1, month 12, and month 24 <em>including</em> every escalator —
              then compare offers on those numbers.
            </p>

            <h2>5. Consolidated vs. dual billing</h2>
            <p>
              This one is just about paperwork, but it matters.{" "}
              <em>Consolidated billing</em> means one bill: your utility
              delivers it and the supplier&apos;s charge appears on it.{" "}
              <em>Dual billing</em> means two separate bills — one from the
              utility, one from the supplier. Dual billing is slightly more
              work, but it makes the supplier&apos;s charges much easier to
              see and check.
            </p>
            <p>
              <strong>Your move:</strong> pick whichever your office will
              actually review. A cheaper rate on a bill nobody reads is how
              errors survive for years.
            </p>

            <h2>6. Demand charges (hidden in the rate)</h2>
            <p>
              Some contracts bundle demand charges into the quoted rate so
              the headline number looks lower. Demand charges come from your{" "}
              <em>peak</em> usage — the busiest 15 or 30 minutes of your
              month — not your total usage. For kitchens, laundromats, and
              shops with big motors, that peak can matter more than the
              energy rate itself.
            </p>
            <p>
              <strong>Your move:</strong> ask whether the quoted rate
              includes demand charges, and what happens to the price if your
              peaks move.
            </p>

            <h2>7. Variable-rate &ldquo;default&rdquo; language</h2>
            <p>
              Watch for any sentence that says what happens when your term
              ends. If it says you convert to a variable or
              &ldquo;standard&rdquo; rate, that&apos;s the evergreen trap from
              #1 wearing a different hat. Variable means the price moves with
              the market — and the market moves hardest exactly when small
              businesses can least afford it.
            </p>

            <QuoteBlock>
              The contract isn&apos;t the enemy. The <em>unread</em> contract
              is. The businesses that overpay on energy aren&apos;t the ones
              with the worst contracts — they&apos;re the ones who signed
              blind and renewed by accident.
            </QuoteBlock>

            <HighlightList
              title="The 10-minute contract check"
              items={[
                "When does my term end, and what is the notice window to leave?",
                "What exactly happens if I do nothing at renewal?",
                "How is the early termination fee calculated — show me the math.",
                "What is my usage bandwidth, and what happens if I go outside it?",
                "Which adders, escalators, or uplifts can move the rate during the term?",
              ]}
            />

            <p>
              Run through those five questions with your current contract in
              hand and you&apos;ll know more about your energy deal than most
              brokers assume you do. And if any of the answers make you
              uneasy — especially a contract expiring this winter — it&apos;s
              worth a second look before the renewal window closes.
            </p>

            <Callout
              title="Want a translator for your actual contract?"
              text="Send us your bill or your contract and we'll point out the terms that matter — end date, renewal trap, fees — in plain English. Free, no obligation, no sales pitch."
              buttonText="Get My Free Bill Review"
              buttonHref="/contact"
            />
          </Prose>
        </div>
      </section>
    </>
  );
}
