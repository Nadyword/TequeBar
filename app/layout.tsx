import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "El Tequebar | Tequeños gourmet en Orlando",
  description:
    "Servicio de tequeños gourmet tipo mobile bar para eventos en Orlando. Tequeños frescos y deliciosos para tus celebraciones especiales.",
  keywords: "tequeños, Orlando, eventos, mobile bar, comida venezolana, catering",
  authors: [{ name: "El Tequebar" }],
  creator: "El Tequebar",
  publisher: "El Tequebar",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/tqmuch-logotipo_95x.avif", type: "image/avif" },
    ],
    apple: "/logo.svg",
  },
  openGraph: {
    title: "El Tequebar | Tequeños gourmet en Orlando",
    description: "Servicio de tequeños gourmet tipo mobile bar para eventos en Orlando",
    type: "website",
    locale: "es_US",
    siteName: "El Tequebar",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Tequebar | Tequeños gourmet en Orlando",
    description: "Servicio de tequeños gourmet tipo mobile bar para eventos en Orlando",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
