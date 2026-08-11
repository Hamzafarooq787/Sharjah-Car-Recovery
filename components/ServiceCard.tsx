import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  titleAr: string
  description: string
  href: string
  image?: string
}

export default function ServiceCard({ title, titleAr, description, href, image }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-surface-dark border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div className="h-40 relative overflow-hidden bg-navy-accent">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="p-8 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
          <span dir="rtl" lang="ar" className="text-primary text-base font-bold">
            {titleAr}
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
          View service <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}
