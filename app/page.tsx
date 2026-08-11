import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection"
import ServicesOverview from "@/components/ServicesOverview"
import RecoveryFeatures from "@/components/RecoveryFeatures"
import LocationSection from "@/components/LocationSection"
import CTASection from "@/components/CTASection"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Car Recovery Sharjah | 24/7 Towing & Breakdown Recovery Near Me",
  description:
    "Car recovery Sharjah, available 24 hours a day. Fast car towing service, roadside assistance, breakdown recovery and flatbed recovery. Call Sharjah Car Recovery now.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <RecoveryFeatures />
      <LocationSection />
      <CTASection />
    </main>
  )
}
