import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Logo from "./Logo"
import { services, siteConfig } from "@/lib/site-config"

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-white/5 px-6 md:px-20 lg:px-40 py-16">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Logo />
          <p className="text-slate-500 max-w-sm">
            {siteConfig.name} provides 24/7 car recovery, towing and roadside assistance across Sharjah. Fast
            dispatch, fair pricing, and a team that knows every corner of the emirate.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-primary" href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-primary" href="/areas">
                Areas We Cover
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contact</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-primary">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              Sharjah, United Arab Emirates
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs gap-2">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Serving Al Majaz, Al Nahda, Al Taawun, Al Qasba and all of Sharjah, 24 hours a day.</p>
      </div>
    </footer>
  )
}
