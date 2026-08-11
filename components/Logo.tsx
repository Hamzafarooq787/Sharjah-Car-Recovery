import Link from "next/link"
import Image from "next/image"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/sharjah-car-recovery-logo.webp"
        alt="Sharjah Car Recovery"
        width={884}
        height={357}
        priority
        className="h-10 md:h-12 w-auto"
      />
    </Link>
  )
}
