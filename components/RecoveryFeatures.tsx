import Link from "next/link"
import Image from "next/image"
import { siteConfig, services as serviceConfig } from "@/lib/site-config"

const services = [
  {
    slug: "car-recovery",
    description: "Fast, careful recovery for any car, any time of day.",
    large: true,
  },
  { slug: "towing-service", large: false },
  { slug: "roadside-assistance", large: false },
  { slug: "breakdown-recovery", large: false },
  { slug: "jumpstart", large: false },
  {
    slug: "flatbed-recovery",
    description: "Safe transport for accident recovery and low-clearance cars.",
    large: true,
  },
] as const

export default function RecoveryFeatures() {
  return (
    <>
      <section className="px-6 md:px-20 lg:px-40 py-24 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-4">Professional Recovery Services in Sharjah</h2>
          <div className="h-1.5 w-24 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            const info = serviceConfig.find((s) => s.slug === service.slug)!
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`${service.large ? "lg:col-span-2" : ""} group relative overflow-hidden rounded-xl bg-navy-accent border border-white/10 hover:border-primary/50 transition-colors ${
                  service.large ? "aspect-[16/9] md:aspect-auto min-h-[240px]" : "aspect-square"
                }`}
              >
                {info.image && (
                  <Image
                    src={info.image}
                    alt={info.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={
                      service.large
                        ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                  />
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(10,12,18,0.95) 0%, rgba(10,12,18,0.55) 45%, rgba(10,12,18,0.05) 75%)",
                  }}
                />
                <div className={`absolute bottom-0 left-0 right-0 ${service.large ? "p-7 md:p-8" : "p-5"}`}>
                  <h3
                    className={`${
                      service.large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                    } font-black text-white leading-tight group-hover:text-primary transition-colors`}
                  >
                    {info.title}
                  </h3>
                  {service.description && (
                    <p className="text-slate-300 text-sm mt-2 max-w-sm">{service.description}</p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="w-full py-24 relative overflow-hidden flex items-center justify-center text-center px-6 bg-navy-accent">
        <Image
          src="/images/flatbed-recovery-handover.webp"
          alt="Sharjah Car Recovery professional operations"
          fill
          loading="lazy"
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background-dark/70" />
        <div className="relative z-10 max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white">Trust In Professional Operations</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Sharjah Car Recovery brings a fully equipped fleet to every roadside call across Sharjah, from Al Majaz
            to Al Rahmaniya. Our team handles each recovery with precision, so your vehicle and your journey are
            never left waiting.
          </p>
          <div className="flex justify-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="bg-primary text-background-dark px-10 py-4 rounded-lg font-black text-xl hover:scale-105 transition-transform"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 lg:px-40 py-24 bg-navy-accent/30">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">The Process</h2>
          <p className="text-slate-500">Simple, effective, and stress-free recovery</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[2px] bg-primary/20 -z-10"></div>
          {[
            {
              icon: "phone_callback",
              number: "1",
              title: "Call Us",
              description: "Call our 24/7 hotline. Give us your location and vehicle details.",
            },
            {
              icon: "verified",
              number: "2",
              title: "Confirm",
              description: "Receive a clear quote and estimated arrival time instantly.",
            },
            {
              icon: "local_shipping",
              number: "3",
              title: "Dispatch",
              description: "Our nearest recovery truck is dispatched to your location immediately.",
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center relative">
                <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                <div className="absolute -top-2 -right-2 bg-primary text-background-dark w-8 h-8 rounded-full flex items-center justify-center font-black text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-slate-400 max-w-[250px]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
