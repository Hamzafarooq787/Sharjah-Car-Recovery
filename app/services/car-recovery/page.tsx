import type { Metadata } from "next"
import { Car } from "lucide-react"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "car-recovery")!

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

export default function CarRecoveryPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car Recovery",
    areaServed: "Sharjah, United Arab Emirates",
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
    },
    serviceType: "Car Recovery",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Car Recovery", item: `${siteConfig.siteUrl}/services/car-recovery` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageTemplate
        badge="24/7 Car Recovery Sharjah"
        title="Car Recovery"
        titleHighlight="Sharjah"
        intro="Need car recovery in Sharjah right now? Our team handles every recovery call with speed and care, getting your vehicle off the road and to wherever you need it."
        icon={Car}
        paragraphs={[
          "When your car can't be driven, you need a car recovery service you can rely on. Sharjah Car Recovery offers 24 hour car recovery Sharjah drivers trust, with clear communication from the first call to the final drop-off.",
          "Our recovery technicians use well-maintained equipment suited to sedans, SUVs and light commercial vehicles, so whether you're on Sheikh Mohammed Bin Zayed Road or a quiet side street, help is close by.",
        ]}
        features={[
          {
            title: "24/7 Availability",
            description: "Round-the-clock car recovery service, every day of the year.",
          },
          {
            title: "Fast Response Times",
            description: "Average arrival time of 20-40 minutes across Sharjah.",
          },
          {
            title: "All Vehicle Types",
            description: "Sedans, SUVs, 4x4s and light commercial vehicles.",
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
