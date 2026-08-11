import ServiceCard from "./ServiceCard"
import { services } from "@/lib/site-config"

export default function ServicesGrid() {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            titleAr={service.titleAr}
            description={service.shortDescription}
            href={`/services/${service.slug}`}
            image={service.image}
          />
        ))}
      </div>
    </section>
  )
}
