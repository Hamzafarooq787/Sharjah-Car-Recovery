import Image from "next/image"

export default function AboutProcess() {
  return (
    <>
      <section className="flex flex-col lg:flex-row w-full overflow-hidden bg-background-dark">
        <div className="w-full lg:w-1/2 min-h-[350px] relative bg-navy-accent overflow-hidden">
          <Image
            src="/images/roadside-assistance-fuel-delivery.webp"
            alt="Sharjah Car Recovery roadside assistance in Sharjah"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 lg:px-24 py-24">
          <div className="space-y-8 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-white">Performance Under Pressure</h2>
            <div className="h-1.5 w-20 bg-primary"></div>
            <p className="text-slate-400 text-lg leading-relaxed">
              Recovery work isn&apos;t always straightforward. Our operators are trained to handle busy Sharjah
              interchanges, tight residential streets, and everything in between with a calm, methodical approach.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              We don&apos;t just move vehicles; we manage the scene safely. Every technician is fully trained in vehicle
              recovery protocols, ensuring your car reaches its destination without further complication.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-slate-500 text-sm uppercase font-bold tracking-wider">Trained Team</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-slate-500 text-sm uppercase font-bold tracking-wider">Operational</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-navy-accent">
        <div className="max-w-[1280px] mx-auto text-center space-y-8">
          <span className="material-symbols-outlined text-primary text-6xl">location_on</span>
          <h2 className="text-3xl font-black text-white">Dedicated to Sharjah</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            We aren&apos;t a national call centre. We are a local team based right here in Sharjah. Our knowledge of the
            emirate&apos;s roads, from Al Majaz Corniche to the outskirts of Al Suyoh, lets us reach you when others
            can&apos;t.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300">Al Nahda Sharjah</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300">Al Taawun</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300">Al Qasba</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300">Al Khan</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300">Al Rahmaniya</span>
          </div>
        </div>
      </section>
    </>
  )
}
