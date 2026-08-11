import type { Metadata } from "next"
import ServicesHero from "@/components/ServicesHero"
import ServicesGrid from "@/components/ServicesGrid"
import ServicesIntro from "@/components/ServicesIntro"
import ServicesCTA from "@/components/ServicesCTA"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Car Recovery & Towing Services in Sharjah | Sharjah Car Recovery",
  description:
    "Explore our 24/7 car recovery, towing service, roadside assistance, breakdown recovery, jumpstart and flatbed recovery services in Sharjah.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.siteUrl}/services`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesIntro />
        <ServicesCTA />
      </main>
    </>
  )
}
