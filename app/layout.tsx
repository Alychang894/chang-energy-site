import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chang Energy — Enterprise Energy Strategy',
  description: 'We turn volatile energy markets into predictable budgets for large operators.',
  metadataBase: new URL('https://www.changenergygroup.com'),
} as const

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased text-gray-900">
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">Chang Energy</Link>
            <div className="flex gap-6 text-sm">
              <Link href="/solutions">Solutions</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/contact" className="btn btn-primary">Book a Strategy Call</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-7xl px-6">{children}</main>
        <footer className="mt-20 border-t">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-500">© {new Date().getFullYear()} Chang Energy</div>
        </footer>
      </body>
    </html>
  )
}
