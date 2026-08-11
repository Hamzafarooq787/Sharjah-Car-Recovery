import type { LucideIcon } from "lucide-react"
import { Phone } from "lucide-react"
import { areas, siteConfig } from "@/lib/site-config"

interface Feature {
  title: string
  description: string
}

interface ServicePageTemplateProps {
  badge: string
  title: string
  titleHighlight: string
  intro: string
  icon: LucideIcon
  paragraphs: string[]
  features: Feature[]
}

export default function ServicePageTemplate({
  badge,
  title,
  titleHighlight,
  intro,
  icon: Icon,
  paragraphs,
  features,
}: ServicePageTemplateProps) {
  const coverageAreas = areas.slice(0, 4)

  return (
    <main>
      {/* Hero Split Section */}
      <section className="flex flex-col lg:flex-row w-full overflow-hidden border-b border-white/5">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 lg:pl-40 lg:pr-12 py-20 bg-background-dark">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              {title} <span className="text-primary">{titleHighlight}</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">{intro}</p>
            <div className="pt-4">
              <a
                className="inline-flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-5 rounded-lg font-black text-xl hover:scale-[1.02] transition-transform w-full sm:w-auto"
                href={`tel:${siteConfig.phoneTel}`}
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[350px] lg:min-h-0 relative bg-navy-accent flex items-center justify-center">
          <Icon className="w-24 h-24 md:w-32 md:h-32 text-primary" strokeWidth={1.25} />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent lg:block hidden z-10"></div>
        </div>
      </section>

      {/* Service Description & Features */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white">Professional {title} Service</h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mb-8"></div>
            <div className="text-slate-400 text-lg space-y-4 leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="bg-navy-accent p-10 rounded-2xl border border-white/5 h-fit">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified</span>
              Service Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <div>
                    <span className="text-white font-semibold">{feature.title}</span>
                    <p className="text-slate-500 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-navy-accent/20 border-y border-white/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">How It Works</h2>
            <p className="text-slate-500">Quick recovery in three simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-primary/20 -z-10"></div>
            {[
              {
                icon: "call",
                number: "01",
                title: "Contact Us",
                description: "Call our 24/7 hotline and share your location and vehicle details.",
              },
              {
                icon: "local_shipping",
                number: "02",
                title: "We Dispatch",
                description: "Our nearest recovery vehicle is sent to your location straight away.",
              },
              {
                icon: "home",
                number: "03",
                title: "Safe Recovery",
                description: "Your vehicle is safely recovered to your home, garage or preferred location.",
              },
            ].map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-background-dark border border-primary flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                  <div className="absolute -top-1 -right-1 bg-primary text-background-dark w-7 h-7 rounded-full flex items-center justify-center font-black text-xs">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 max-w-[250px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-dark py-20 md:py-32 text-center border-t border-white/5 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 text-xs md:text-sm">
            {badge}
          </p>
          <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-black mb-8 md:mb-12 px-2">
            Need Help? Call Now
          </h2>
          <a
            className="block bg-transparent text-primary hover:text-white transition-colors duration-300 break-all px-4"
            href={`tel:${siteConfig.phoneTel}`}
          >
            <span className="text-4xl md:text-6xl lg:text-8xl font-black tabular-nums">
              {siteConfig.phoneDisplay}
            </span>
          </a>
          <p className="mt-8 md:mt-12 text-slate-500 font-medium text-base md:text-lg italic px-4">
            Available 24 hours a day, 7 days a week across Sharjah.
          </p>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="bg-background-dark py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="bg-navy-accent rounded-3xl overflow-hidden flex flex-col md:flex-row items-center border border-white/5">
            <div className="w-full md:w-1/2 p-12 lg:p-20">
              <h2 className="text-3xl font-black text-white mb-4">Sharjah Coverage</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our {title.toLowerCase()} service covers every district of Sharjah. From busy main roads to quiet
                residential streets, we know the emirate inside out.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {coverageAreas.map((area) => (
                  <div key={area.en} className="flex items-center gap-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {area.en}
                  </div>
                ))}
              </div>
              <a
                href="/areas"
                className="inline-flex items-center gap-2 mt-8 text-primary font-bold uppercase tracking-wider text-sm hover:text-white transition-colors"
              >
                View all areas we cover
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
            <div className="relative w-full md:w-1/2 h-80 md:h-[450px] flex items-center justify-center bg-background-dark/40">
              <Icon className="w-20 h-20 text-primary/40" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
