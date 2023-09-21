import { BASE_TITLE } from "@/lib"
import { Inconsolata, Open_Sans } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const sans = Open_Sans({
  variable: "--font-sans2",
  display: "swap",
  subsets: ["latin"]
})

const mono = Inconsolata({
  variable: "--font-mono",
  display: "swap",
  subsets: ["latin"],
  weight: "500"
})

export const metadata = {
  title: BASE_TITLE,
  description: "Blog about .NET, Azure, React and whatever comes to mind."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="bg-slate-200 dark:bg-slate-700">
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-indigo-600 py-2 shadow-indigo-300 dark:shadow-indigo-800 shadow-2xl font-sans2">
          <div className="flex w-full flex-wrap items-center justify-between px-2">
            <div>
              <Link className="text-2xl font-semibold text-neutral-100 dark:text-neutral-200" href="/">
                <h1 className="inline">🍔 food for ai</h1>{" "}
                <span className="font-mono font-light text-xs">food.joona.cloud</span>
              </Link>
            </div>
          </div>
        </nav>
        <main className="mt-4">{children}</main>
      </body>
    </html>
  )
}
