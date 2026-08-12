import Image from "next/image"
import { Phone } from "lucide-react"
import ArabicTagline from "./ArabicTagline"
import { siteConfig } from "@/lib/site-config"

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full overflow-hidden border-b border-white/5 min-h-[80vh]">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 lg:pl-40 lg:pr-12 py-16 md:py-20 bg-background-dark">
        <div className="space-y-8 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            24/7 Car Recovery Sharjah
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-white leading-[1.2] md:leading-[1.1] tracking-tight">
            Car Recovery &amp; Towing{" "}
            <span className="block mt-2 md:inline md:mt-0">
              in <span className="text-primary">Sharjah</span>
            </span>
          </h1>
          <ArabicTagline text="سحب سيارات الشارقة | إنقاذ سيارات الشارقة | خدمة سحب سيارات الشارقة" />
          <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed pt-2 md:pt-0">
            Sharjah Car Recovery is your local, round-the-clock team for car recovery, towing, breakdown recovery
            and roadside assistance. Fast dispatch, honest pricing, every neighbourhood covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-4">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="bg-primary text-background-dark px-8 py-4 rounded-lg font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href="/services"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-0 relative bg-navy-accent overflow-hidden">
        <Image
          src="/images/car-recovery-loading.webp"
          alt="Sharjah Car Recovery loading a car onto a flatbed"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent lg:block hidden"></div>
      </div>
    </section>
  )
}
