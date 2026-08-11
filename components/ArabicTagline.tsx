export default function ArabicTagline({ text, className = "" }: { text: string; className?: string }) {
  return (
    <p
      dir="rtl"
      lang="ar"
      className={`text-primary/90 text-sm md:text-base font-semibold leading-relaxed ${className}`}
    >
      {text}
    </p>
  )
}
