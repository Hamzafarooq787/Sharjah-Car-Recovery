export default function ServicesIntro() {
  return (
    <section className="bg-slate-dark py-24 px-6 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">Local &amp; Reliable</span>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Serving Sharjah 24/7</h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
          Based in Sharjah, we're proud to be the first call for local car recovery, towing and roadside
          assistance. Our fleet is positioned to provide rapid response across Al Majaz, Al Nahda, Al Taawun and
          beyond. Whether it's 2 AM or midday traffic, our team is ready.
        </p>
        <div className="flex flex-wrap justify-center gap-8 pt-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">24/7</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Availability</span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">30min</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Avg Response</span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">Local</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Sharjah Base</span>
          </div>
        </div>
      </div>
    </section>
  )
}
