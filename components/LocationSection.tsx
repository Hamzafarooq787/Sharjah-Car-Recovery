import Link from "next/link"
import { areas } from "@/lib/site-config"

export default function LocationSection() {
  const featured = areas.slice(0, 8)

  return (
    <section className="flex flex-col lg:flex-row items-center bg-background-dark">
      <div className="w-full lg:w-1/2 p-12 lg:p-40">
        <h2 className="text-4xl font-black text-white mb-6 leading-tight">Serving Sharjah &amp; Every Surrounding Area</h2>
        <p className="text-slate-400 mb-8">
          From Al Majaz to Al Nahda, Al Taawun to Al Qasba, our car recovery Sharjah team is never far away. If
          you're stuck anywhere in the emirate, we're already nearby.
        </p>
        <ul className="grid grid-cols-2 gap-y-4">
          {featured.map((area, index) => (
            <li key={index} className="flex items-center gap-2 text-slate-300 font-medium">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              {area.en}
            </li>
          ))}
        </ul>
        <Link
          href="/areas"
          className="inline-flex items-center gap-2 mt-8 text-primary font-bold uppercase tracking-wider text-sm hover:text-white transition-colors"
        >
          View all areas we cover
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 h-[500px] bg-navy-accent relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115654!2d55.4033!3d25.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5d1a5e6a6e7%3A0x0!2sSharjah!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sharjah Location Map"
          className="grayscale opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-primary/20 p-8 rounded-full border border-primary/30 animate-pulse">
            <div className="bg-primary p-4 rounded-full">
              <span className="material-symbols-outlined text-background-dark text-3xl">my_location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
