import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ConditionalLayout from "@/components/ConditionalLayout"
import ScrollToTop from "@/components/ScrollToTop"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Sharjah Car Recovery | 24/7 Car Recovery & Towing Sharjah",
  description:
    "24 hour car recovery Sharjah. Fast towing, breakdown recovery, roadside assistance and flatbed recovery across Sharjah. Call 0545430884 now.",
  generator: "v0.app",
  icons: {
    icon: "/images/sharjah-car-recovery-site-icon.webp",
    apple: "/images/sharjah-car-recovery-site-icon.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Sharjah Car Recovery | 24/7 Car Recovery & Towing Sharjah",
    description:
      "24 hour car recovery Sharjah. Fast towing, breakdown recovery, roadside assistance and flatbed recovery across Sharjah. Call 0545430884 now.",
    images: [
      {
        url: "/images/sharjah-car-recovery-open-graph.webp",
        width: 867,
        height: 454,
        alt: "Sharjah Car Recovery - 24/7 Recovery & Towing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharjah Car Recovery | 24/7 Car Recovery & Towing Sharjah",
    description:
      "24 hour car recovery Sharjah. Fast towing, breakdown recovery, roadside assistance and flatbed recovery across Sharjah.",
    images: ["/images/sharjah-car-recovery-open-graph.webp"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneTel,
    areaServed: "Sharjah, United Arab Emirates",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sharjah",
      addressCountry: "AE",
    },
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [],
  }

  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PSC4JWVV');
        `}</Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-background-dark text-slate-100">
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSC4JWVV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollToTop />
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
      </body>
    </html>
  )
}
