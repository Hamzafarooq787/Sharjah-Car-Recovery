import { Car, Truck, LifeBuoy, Wrench, Zap, TowerControl } from "lucide-react"
import ServiceCard from "./ServiceCard"
import { services } from "@/lib/site-config"

const serviceIcons = {
  "car-recovery": Car,
  "towing-service": Truck,
  "roadside-assistance": LifeBuoy,
  "breakdown-recovery": Wrench,
  jumpstart: Zap,
  "flatbed-recovery": TowerControl,
} as const

export default function ServicesGrid() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.shortDescription}
            icon={serviceIcons[service.slug as keyof typeof serviceIcons]}
            href={`/services/${service.slug}`}
            image={service.image}
          />
        ))}
      </div>
    </section>
  )
}
