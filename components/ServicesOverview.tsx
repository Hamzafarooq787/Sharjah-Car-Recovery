export default function ServicesOverview() {
  return (
    <section className="bg-navy-accent border-b border-white/5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        <div className="flex flex-col items-center justify-center py-6 gap-1">
          <span className="text-primary font-bold text-xl">24/7</span>
          <span className="text-slate-400 text-xs uppercase tracking-widest font-medium">Available</span>
        </div>
        <div className="flex flex-col items-center justify-center py-6 gap-1">
          <span className="text-white font-bold text-xl flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">location_on</span>
            Sharjah
          </span>
          <span className="text-slate-400 text-xs uppercase tracking-widest font-medium">Local Team</span>
        </div>
        <div className="flex flex-col items-center justify-center py-6 gap-1">
          <span className="text-white font-bold text-xl">Rapid</span>
          <span className="text-slate-400 text-xs uppercase tracking-widest font-medium">Response</span>
        </div>
        <div className="flex flex-col items-center justify-center py-6 gap-1">
          <span className="text-white font-bold text-xl flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">payments</span>
            Clear
          </span>
          <span className="text-slate-400 text-xs uppercase tracking-widest font-medium">Pricing</span>
        </div>
      </div>
    </section>
  )
}
