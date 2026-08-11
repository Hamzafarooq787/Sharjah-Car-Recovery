import { siteConfig } from "@/lib/site-config"

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[45vh] flex items-center overflow-hidden bg-navy-accent">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40 py-20 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Rapid Response Support
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4">
          Contact <span className="text-primary">Sharjah Car Recovery</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          If you need car recovery or towing assistance, contact us any time. We're ready to dispatch help across
          Sharjah immediately.
        </p>
      </div>
    </section>
  )
}
