// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const solutionLinks = [
  { href: "/solutions", label: "Procurement & Risk Strategy" },
  { href: "/solutions", label: "Capacity & Demand Optimization" },
  { href: "/solutions", label: "Utility Bill Audits" },
  { href: "/solutions", label: "Reporting & Budget Tracking" },
];

const companyLinks = [
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Get a Free Bill Review" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="band-dark">
      {/* subtle top accent */}
      <div className="h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
      {/* faint radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_50%_-80px,rgba(249,115,22,0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Chang Energy logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-lg font-semibold tracking-tight text-white">
                Chang Energy
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Transparent energy procurement and demand strategy for businesses
              that are tired of overpaying for electricity.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Serving businesses across{" "}
              <span className="font-medium text-slate-200">
                PA · OH · TX · New England
              </span>
            </p>
          </div>

          {/* Solutions */}
          <nav aria-label="Solutions">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2.5">
              {solutionLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Talk to us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+12673408300"
                  className="font-semibold text-white transition-colors hover:text-brand-300"
                >
                  +1-267-340-8300
                </a>
                <p className="mt-0.5 text-slate-500">Mon–Fri, 9am–5pm ET</p>
              </li>
              <li>
                <a
                  href="mailto:support@changenergygroup.com"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  support@changenergygroup.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="btn btn-primary !px-5 !py-2.5 !text-sm">
                  Get a Free Bill Review
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {year} Chang Energy Group. All rights reserved.</p>
          <p>
            Chang Energy is an energy broker. Your utility continues to deliver
            your power — only the supplier changes.
          </p>
        </div>
      </div>
    </footer>
  );
}
