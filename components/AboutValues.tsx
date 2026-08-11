export default function AboutValues() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-24 bg-navy-accent/30 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">01.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Clear Communication</h3>
            <p className="text-slate-400 leading-relaxed">
              From the moment you call, we provide transparent information about our availability and pricing. No hidden
              fees, no ambiguity.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">02.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Rapid Confirmation</h3>
            <p className="text-slate-400 leading-relaxed">
              We utilize live tracking and local knowledge to confirm an accurate ETA, keeping you updated throughout
              the short wait.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-primary text-4xl font-black">03.</div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Expert Dispatch</h3>
            <p className="text-slate-400 leading-relaxed">
              Our specialist recovery vehicles are dispatched immediately, equipped with the latest tools to handle any
              vehicle class safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
