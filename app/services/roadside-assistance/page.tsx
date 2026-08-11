import type { Metadata } from "next"
import { LifeBuoy } from "lucide-react"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "roadside-assistance")!

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

export default function RoadsideAssistancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roadside Assistance",
    areaServed: "Sharjah, United Arab Emirates",
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
    },
    serviceType: "Roadside Assistance",
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
        name: "Roadside Assistance",
        item: `${siteConfig.siteUrl}/services/roadside-assistance`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageTemplate
        badge="24 Hour Roadside Assistance Sharjah"
        title="Roadside"
        titleHighlight="Assistance"
        intro="Flat tyre, running out of fuel, or a minor fault that won't let you drive on? Our roadside assistance Sharjah team reaches you fast, wherever you are."
        icon={LifeBuoy}
        image={service.image}
        titleAr={service.titleAr}
        arabicTagline="قطر السيارات الشارقة"
        paragraphs={[
          "Not every problem needs a full tow. Our roadside assistance covers tyre changes, fuel delivery, minor diagnostics and quick fixes that get you moving again without leaving the roadside.",
          "We aim to be one of the fastest roadside assistance Sharjah services around, dispatching a technician the moment you call so you're not left waiting in the heat or the dark.",
        ]}
        features={[
          {
            title: "24/7 Roadside Help",
            description: "Available around the clock for emergencies big and small.",
          },
          {
            title: "Flat Tyre Support",
            description: "Quick tyre changes so you can get back on the road.",
          },
          {
            title: "Fuel Delivery",
            description: "Run out of fuel? We bring enough to get you to the nearest station.",
          },
          {
            title: "On-the-Spot Fixes",
            description: "Minor repairs handled at your location where possible.",
          },
        ]}
      />
    </>
  )
}
