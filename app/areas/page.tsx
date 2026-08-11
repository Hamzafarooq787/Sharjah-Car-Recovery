import type { Metadata } from "next"
import { Phone, MapPin } from "lucide-react"
import { areas, siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Areas We Cover | Car Recovery Near Me Across Sharjah",
  description:
    "Sharjah Car Recovery covers Al Majaz, Al Nahda, Al Taawun, Al Qasba, Al Rahmaniya and every other area of Sharjah with 24/7 car recovery service near you.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/areas`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AreasPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Areas We Cover", item: `${siteConfig.siteUrl}/areas` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        <section className="relative w-full py-24 flex items-center justify-center overflow-hidden border-b border-white/5 bg-navy-accent">
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Areas We Cover
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Car Recovery Near Me — <span className="text-primary">All of Sharjah</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Wherever you are in Sharjah, our car recovery, towing and roadside assistance team is close by, 24
              hours a day, 7 days a week.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-20 lg:px-40 py-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Local Coverage, Every Neighbourhood</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                From Al Majaz Corniche to the residential streets of Al Rahmaniya, Sharjah Car Recovery provides
                fast car recovery, car towing service and breakdown recovery across every district of Sharjah. Our
                drivers know the emirate&apos;s roads well, so whether you need emergency towing near a busy junction or
                accident recovery on a quiet street, help is always close by.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area) => (
                <div
                  key={area.en}
                  className="flex flex-col gap-1 bg-navy-accent border border-white/5 rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
                >
                  <span className="text-white font-bold text-sm">{area.en}</span>
                  <span className="text-slate-500 text-sm" dir="rtl">
                    {area.ar}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background-dark py-20 md:py-32 text-center border-t border-white/5 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 text-xs md:text-sm">
              Don&apos;t See Your Area?
            </p>
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-black mb-8 md:mb-12 px-2">
              Call Us — We Probably Still Cover It
            </h2>
            <a
              className="inline-flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-5 rounded-lg font-black text-xl hover:scale-[1.02] transition-transform"
              href={`tel:${siteConfig.phoneTel}`}
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
