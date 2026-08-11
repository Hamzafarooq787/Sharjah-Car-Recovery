import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-surface-dark border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div className="h-40 flex items-center justify-center bg-navy-accent relative">
        <Icon className="w-14 h-14 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} />
      </div>
      <div className="p-8 space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
          View service <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}
