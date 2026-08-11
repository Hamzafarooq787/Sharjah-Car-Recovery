export default function AboutIntro() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-32 bg-background-dark">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Our Identity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Founded on Trust, Built for Sharjah Roads.
          </h2>
          <div className="text-slate-400 text-xl leading-relaxed space-y-8 font-light">
            <p>
              At Sharjah Car Recovery, we know that a breakdown is more than a mechanical problem — it's a
              disruption to your day. Based in Sharjah, our team combines local road knowledge with a genuine
              commitment to getting drivers moving again, quickly and safely.
            </p>
            <p>
              Our commitment goes beyond simply towing a car. We pride ourselves on reliability, so whether you're
              stranded near Al Majaz at midday or stuck on Al Ittihad Road late at night, you're met by a
              professional who puts your safety first.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
