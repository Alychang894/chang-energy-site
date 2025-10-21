// app/resources/capacity-transmission-playbook/page.tsx
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Capacity & Transmission Playbook | Resources | Chang Energy",
  description:
    "Practical PLC/NSPL and demand-charge strategy: peak alerts, curtailment playbooks, and year-over-year savings tracking.",
};

export default function Page() {
  return (
    <main className="px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="text-sm text-gray-500">
            <Link href="/resources" className="hover:underline">
              Resources
            </Link>{" "}
            / Capacity & Transmission Playbook
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Capacity & Transmission Playbook
          </h1>
          <p className="mt-3 text-gray-700">
            Capacity and transmission often rival the energy itself. This
            playbook shows how to reduce demand charges without disrupting
            operations—using practical peak alerts, brief curtailment windows,
            and year-over-year PLC/NSPL tracking.
          </p>
        </FadeIn>

        {/* Key ideas */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Peak Prediction & Alerts",
              body:
                "Run PJM/ERCOT alerts during likely system peaks. Keep windows short (e.g., 60–120 minutes) with clear start/stop signals.",
            },
            {
              title: "Practical Curtailment",
              body:
                "Focus on what’s easy: pre-cooling, shifting minor loads, sequencing equipment, and brief production pauses only if risk is low.",
            },
            {
              title: "Playbooks by Site",
              body:
                "Each site gets a 1-pager: who acts, what to change, acceptable limits, and a quick post-event reset checklist.",
            },
            {
              title: "Track PLC/NSPL & Savings",
              body:
                "Track actual PLC/NSPL year-over-year, quantify demand-charge changes, and attribute verified savings by site.",
            },
          ].map((x) => (
            <FadeIn key={x.title}>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{x.title}</h3>
                <p className="mt-2 text-gray-700">{x.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Simple guidance table */}
        <FadeIn>
          <div className="mt-10 overflow-hidden rounded-2xl border bg-white">
            <div className="border-b bg-orange-50 px-5 py-3 text-sm font-semibold text-orange-700">
              Quick Reference
            </div>
            <div className="p-5">
              <table className="w-full text-left text-sm">
                <thead className="text-gray-600">
                  <tr className="border-b">
                    <th className="py-2">Topic</th>
                    <th className="py-2">Guidance</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b">
                    <td className="py-3">Alert windows</td>
                    <td className="py-3">
                      Keep short (60–120 min). Avoid alert fatigue.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Who acts</td>
                    <td className="py-3">
                      Clear owners (ops/facilities) and a one-pager per site.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Documentation</td>
                    <td className="py-3">
                      Log each event (start/stop, measures taken, impact).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">KPIs</td>
                    <td className="py-3">
                      PLC/NSPL vs. last year; $ demand-charge savings; # of
                      alerts and adherence rate.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="mt-10 rounded-2xl border bg-white p-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-semibold">
                  Want a site-specific PLC/NSPL plan?
                </h3>
                <p className="mt-1 text-gray-700">
                  We’ll review your interval data and invoices and provide a
                  practical curtailment playbook by location.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
