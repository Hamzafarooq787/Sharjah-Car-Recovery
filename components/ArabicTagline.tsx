export default function ArabicTagline({ text, className = "" }: { text: string; className?: string }) {
  return (
    <p
      dir="rtl"
      lang="ar"
      className={`text-primary text-xl md:text-2xl font-bold leading-relaxed ${className}`}
    >
      {text}
    </p>
  )
}
