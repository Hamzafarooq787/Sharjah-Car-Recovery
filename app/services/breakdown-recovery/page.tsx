import type { Metadata } from "next"
import { Wrench } from "lucide-react"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "breakdown-recovery")!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/${service.slug}`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BreakdownRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Breakdown Recovery",
    areaServed: "Sharjah, United Arab Emirates",
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
    },
    serviceType: "Breakdown Recovery",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Breakdown Recovery",
        item: `${siteConfig.siteUrl}/services/breakdown-recovery`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageTemplate
        badge="Emergency Breakdown Recovery Sharjah"
        title="Breakdown"
        titleHighlight="Recovery"
        intro="Vehicle broken down and won't start? Our emergency breakdown recovery Sharjah team responds fast, day or night, to get you and your car somewhere safe."
        icon={Wrench}
        paragraphs={[
          "A breakdown always happens at the worst time. Sharjah Car Recovery provides rapid response breakdown recovery across Sharjah, with a calm, professional driver dispatched to your exact location.",
          "Our team handles all types of breakdowns, from engine failures to electrical faults, making sure your vehicle and everyone in it get to your chosen destination safely.",
        ]}
        features={[
          {
            title: "24/7 Availability",
            description: "Round-the-clock breakdown recovery, 365 days a year.",
          },
          {
            title: "Fast Response Times",
            description: "Average arrival time of 20-40 minutes across Sharjah.",
          },
          {
            title: "All Vehicle Types",
            description: "Cars, SUVs and light commercial vehicles.",
          },
          {
            title: "Transparent Pricing",
            description: "Clear upfront quotes with no hidden charges.",
          },
        ]}
      />
    </>
  )
}
