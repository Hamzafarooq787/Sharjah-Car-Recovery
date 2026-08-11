import { Car, Truck, LifeBuoy, Wrench, Zap, TowerControl } from "lucide-react"
import ServiceCard from "./ServiceCard"

const serviceIcons = {
  "car-recovery": Car,
  "towing-service": Truck,
  "roadside-assistance": LifeBuoy,
  "breakdown-recovery": Wrench,
  jumpstart: Zap,
  "flatbed-recovery": TowerControl,
} as const

const services = [
  {
    title: "Car Recovery",
    description: "Fast, careful car recovery anywhere in Sharjah, day or night.",
    href: "/services/car-recovery",
    slug: "car-recovery",
  },
  {
    title: "Towing Service",
    description: "Reliable car towing service for sedans, SUVs and light vehicles.",
    href: "/services/towing-service",
    slug: "towing-service",
  },
  {
    title: "Roadside Assistance",
    description: "On-the-spot help for flat tyres, fuel delivery and minor faults.",
    href: "/services/roadside-assistance",
    slug: "roadside-assistance",
  },
  {
    title: "Breakdown Recovery",
    description: "Emergency breakdown recovery for cars that won't start or move.",
    href: "/services/breakdown-recovery",
    slug: "breakdown-recovery",
  },
  {
    title: "Jumpstart",
    description: "Quick battery jumpstarts to get you back on the road in minutes.",
    href: "/services/jumpstart",
    slug: "jumpstart",
  },
  {
    title: "Flatbed Recovery",
    description: "Flatbed towing for accident recovery, luxury and low-clearance cars.",
    href: "/services/flatbed-recovery",
    slug: "flatbed-recovery",
  },
] as const

export default function ServicesGrid() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.description}
            icon={serviceIcons[service.slug]}
            href={service.href}
          />
        ))}
      </div>
    </section>
  )
}
