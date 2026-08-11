import type { Metadata } from "next"
import AboutHero from "@/components/AboutHero"
import AboutIntro from "@/components/AboutIntro"
import AboutValues from "@/components/AboutValues"
import AboutProcess from "@/components/AboutProcess"
import AboutCTA from "@/components/AboutCTA"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About Sharjah Car Recovery | 24/7 Car Recovery Team",
  description:
    "Learn about Sharjah Car Recovery, providing 24/7 car recovery, towing service and roadside assistance across Sharjah, UAE.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutProcess />
      <AboutCTA />
    </main>
  )
}
