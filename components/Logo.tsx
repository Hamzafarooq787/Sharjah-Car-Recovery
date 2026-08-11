import Link from "next/link"
import { Truck } from "lucide-react"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      <span className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-lg bg-primary text-background-dark flex-shrink-0">
        <Truck className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-white font-black text-base md:text-lg tracking-tight">Sharjah Car Recovery</span>
        <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
          24/7 Recovery &amp; Towing
        </span>
      </span>
    </Link>
  )
}
