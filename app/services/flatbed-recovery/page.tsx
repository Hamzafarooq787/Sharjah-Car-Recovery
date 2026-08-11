import type { Metadata } from "next"
import { TowerControl } from "lucide-react"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "flatbed-recovery")!

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

export default function FlatbedRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Flatbed Recovery",
    areaServed: "Sharjah, United Arab Emirates",
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
    },
    serviceType: "Flatbed Towing",
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
        name: "Flatbed Recovery",
        item: `${siteConfig.siteUrl}/services/flatbed-recovery`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageTemplate
        badge="Flatbed Towing Sharjah"
        title="Flatbed"
        titleHighlight="Recovery"
        intro="For accident recovery and low-clearance vehicles, our flatbed recovery Sharjah service transports your car safely without any wheel contact with the road."
        icon={TowerControl}
        image={service.image}
        titleAr={service.titleAr}
        arabicTagline="سطحة لنقل السيارات الشارقة | نقل سيارات الشارقة | نقل السيارات بالسطحة الشارقة | سطحة لنقل السيارات | سحب سيارات الحوادث الشارقة"
        paragraphs={[
          "Some vehicles need extra care in transit. Whether it's a car involved in an accident, a lowered sports car, or a vehicle with mechanical damage, our flatbed towing service Sharjah keeps every wheel off the ground.",
          "Our flatbed trucks are suited to accident recovery, car transport Sharjah relocations, and any job where a standard tow isn't the safest option.",
        ]}
        features={[
          {
            title: "Zero Wheel Contact",
            description: "Full flatbed loading keeps your vehicle completely off the road.",
          },
          {
            title: "Accident Recovery",
            description: "Careful handling for collision-damaged vehicles.",
          },
          {
            title: "Low-Clearance Friendly",
            description: "Safe transport for sports cars and lowered vehicles.",
          },
          {
            title: "Secure Transport",
            description: "Vehicles are strapped and secured for the full journey.",
          },
        ]}
      />
    </>
  )
}
