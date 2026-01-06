import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Built Tough Construction | 31+ Years of Excellence in Texas",
  description:
    "Trusted construction company inTexas since 1994. Specializing in residential and commercial projects, kitchen remodels, bathroom renovations, and more. Licensed & Insured.",
  keywords:
    "construction Texas, home renovation, kitchen remodel, bathroom renovation, commercial construction,Texas builder",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/Your paragraph text (1).png",
        type: "image/png",
      },
    ],
    shortcut: "/Your paragraph text (1).png",
    apple: "/Your paragraph text (1).png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

