import { areas } from "@/lib/site-config"

export default function ContactServiceArea() {
  const featured = areas.slice(0, 8)

  return (
    <section className="relative bg-navy-accent/30 py-24 overflow-hidden border-y border-white/5">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Our Service Area</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            We are strategically positioned to provide rapid car recovery across <strong>Sharjah</strong> and every
            surrounding neighbourhood. Our fleet covers all major roads and residential districts, usually arriving
            within 30 minutes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
            {featured.map((area) => (
              <div key={area.en} className="flex items-center gap-2 text-slate-300 border-l-2 border-primary/30 pl-3">
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
      </div>
    </section>
  )
}
