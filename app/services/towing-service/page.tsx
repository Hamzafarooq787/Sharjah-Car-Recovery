import type { Metadata } from "next"
import { Truck } from "lucide-react"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "towing-service")!

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

export default function TowingServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Towing Service",
    areaServed: "Sharjah, United Arab Emirates",
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
    },
    serviceType: "Car Towing",
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
        name: "Towing Service",
        item: `${siteConfig.siteUrl}/services/towing-service`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageTemplate
        badge="Tow Truck Sharjah"
        title="Towing Service"
        titleHighlight="Sharjah"
        intro="Looking for a tow truck near me in Sharjah? Our car towing service Sharjah drivers rely on covers every neighbourhood with safe, secure vehicle towing."
        icon={Truck}
        image={service.image}
        paragraphs={[
          "From a single street to a longer trip across the emirate, our tow truck Sharjah fleet is equipped to move your vehicle without added stress or damage.",
          "Each car tow truck Sharjah driver is trained to secure vehicles correctly, so whether it's a compact car or a larger SUV, your vehicle travels safely from pickup to destination.",
        ]}
        features={[
          {
            title: "24/7 Towing",
            description: "Emergency towing service available any hour, any day.",
          },
          {
            title: "Local & Cross-Emirate",
            description: "Towing within Sharjah and to neighbouring emirates on request.",
          },
          {
            title: "Careful Handling",
            description: "Modern towing equipment that keeps your vehicle secure in transit.",
          },
          {
            title: "Upfront Quotes",
            description: "Know your price before we arrive — no surprise charges.",
          },
        ]}
      />
    </>
  )
}
