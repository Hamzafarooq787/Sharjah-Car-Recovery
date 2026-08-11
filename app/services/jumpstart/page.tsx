import type { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { siteConfig, services } from "@/lib/site-config"

const service = services.find((s) => s.slug === "jumpstart")!

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

export default function JumpstartPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jumpstart",
    areaServed: "Sharjah, United Arab Emirates",
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.name,
    },
    serviceType: "Battery Jumpstart",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Jumpstart", item: `${siteConfig.siteUrl}/services/jumpstart` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageTemplate
        badge="Flat Battery? Jumpstart in Minutes"
        title="Jumpstart"
        titleHighlight="Service"
        intro="A flat battery shouldn't ruin your day. Our mobile jumpstart service reaches you fast anywhere in Sharjah, with cheap car recovery Sharjah rates and no long wait."
        image={service.image}
        titleAr={service.titleAr}
        arabicTagline="خدمة قطر السيارات الشارقة"
        paragraphs={[
          "If your car won't start because of a dead battery, our technicians come to you with heavy-duty jump-start equipment suited to all vehicle types.",
          "Most jumpstarts take just a few minutes once we arrive, and if your battery needs replacing rather than charging, we'll let you know honestly so you can plan your next step.",
        ]}
        features={[
          {
            title: "Rapid Dispatch",
            description: "A technician is sent to your location as soon as you call.",
          },
          {
            title: "All Vehicle Types",
            description: "Jumpstart equipment suited to sedans, SUVs and light vehicles.",
          },
          {
            title: "Honest Advice",
            description: "We'll tell you if your battery needs replacing, not just charging.",
          },
          {
            title: "Fair, Fixed Pricing",
            description: "Clear pricing agreed before we start the job.",
          },
        ]}
      />
    </>
  )
}
