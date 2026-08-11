import type { Metadata } from "next"
import ContactHero from "@/components/ContactHero"
import ContactServiceArea from "@/components/ContactServiceArea"
import ContactCTA from "@/components/ContactCTA"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact Sharjah Car Recovery | 24/7 Car Recovery Near Me",
  description:
    "Contact Sharjah Car Recovery for 24/7 car recovery, towing and roadside assistance in Sharjah. Call 0545430884 now for fast help.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactServiceArea />
      <ContactCTA />
    </main>
  )
}
