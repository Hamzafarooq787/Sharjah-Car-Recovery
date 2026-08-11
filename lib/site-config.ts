export const siteConfig = {
  name: "Sharjah Car Recovery",
  shortName: "Sharjah Recovery",
  phoneDisplay: "0545430884",
  phoneIntlDisplay: "+971 54 543 0884",
  phoneTel: "+971545430884",
  whatsapp: "https://wa.me/971545430884",
  email: "info@sharjahcarrecovery.ae",
  city: "Sharjah",
  country: "United Arab Emirates",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sharjahcarrecovery.ae",
}

export interface ServiceInfo {
  slug: string
  title: string
  shortDescription: string
  metaTitle: string
  metaDescription: string
}

export const services: ServiceInfo[] = [
  {
    slug: "car-recovery",
    title: "Car Recovery",
    shortDescription: "Fast, careful car recovery anywhere in Sharjah, day or night.",
    metaTitle: "Car Recovery Sharjah | 24/7 Car Recovery Service Near Me",
    metaDescription:
      "Need car recovery in Sharjah? Our team offers 24 hour car recovery Sharjah drivers trust, with fast dispatch and fair pricing across the emirate.",
  },
  {
    slug: "towing-service",
    title: "Towing Service",
    shortDescription: "Reliable car towing service for sedans, SUVs and light vehicles.",
    metaTitle: "Car Towing Service Sharjah | Tow Truck Near Me 24/7",
    metaDescription:
      "Looking for a tow truck in Sharjah? Our car towing service Sharjah drivers rely on covers every neighbourhood with fast, safe vehicle towing.",
  },
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance",
    shortDescription: "On-the-spot help for flat tyres, fuel delivery and minor faults.",
    metaTitle: "Roadside Assistance Sharjah | 24 Hour Emergency Help",
    metaDescription:
      "Stuck on the road? Get 24/7 roadside assistance Sharjah residents count on for flat tyres, fuel delivery and quick roadside fixes.",
  },
  {
    slug: "breakdown-recovery",
    title: "Breakdown Recovery",
    shortDescription: "Emergency breakdown recovery for cars that won't start or move.",
    metaTitle: "Breakdown Recovery Sharjah | Emergency Car Recovery Near Me",
    metaDescription:
      "Vehicle broken down? Our emergency breakdown recovery Sharjah team responds fast, any time of day, to get your car off the road safely.",
  },
  {
    slug: "jumpstart",
    title: "Jumpstart",
    shortDescription: "Quick battery jumpstarts to get you back on the road in minutes.",
    metaTitle: "Car Jumpstart Sharjah | Flat Battery Assistance Near Me",
    metaDescription:
      "Flat battery? Our mobile jumpstart service reaches you fast anywhere in Sharjah, with cheap car recovery Sharjah rates and no waiting around.",
  },
  {
    slug: "flatbed-recovery",
    title: "Flatbed Recovery",
    shortDescription: "Flatbed towing for accident recovery, luxury and low-clearance cars.",
    metaTitle: "Flatbed Recovery Sharjah | Flatbed Towing Service Near Me",
    metaDescription:
      "For accident recovery and low-clearance vehicles, our flatbed recovery Sharjah service transports your car safely without wheel contact.",
  },
]

export const areas: { en: string; ar: string }[] = [
  { en: "Al Majaz", ar: "المجاز" },
  { en: "Al Nahda Sharjah", ar: "النهدة الشارقة" },
  { en: "Al Khan", ar: "الخان" },
  { en: "Al Qasimia", ar: "القاسمية" },
  { en: "Al Nabba", ar: "النباعة" },
  { en: "Al Ghuwair", ar: "الغوير" },
  { en: "Al Shuwaihean", ar: "الشويهين" },
  { en: "Al Manakh", ar: "المناخ" },
  { en: "Al Ghubaiba", ar: "الغبيبة" },
  { en: "Al Yarmook", ar: "اليرموك" },
  { en: "Al Mahatta", ar: "المحطة" },
  { en: "Al Qasba", ar: "القصباء" },
  { en: "Al Taawun", ar: "التعاون" },
  { en: "Al Mamzar", ar: "الممزر" },
  { en: "Al Jazzat", ar: "الجزات" },
  { en: "Al Ramla", ar: "الرملة" },
  { en: "Al Fayha", ar: "الفايحاء" },
  { en: "Al Ghafia", ar: "الغافية" },
  { en: "Al Noaf", ar: "النوف" },
  { en: "Al Juraina", ar: "الجرينة" },
  { en: "Al Suyoh", ar: "السيوح" },
  { en: "Al Rahmaniya", ar: "الرحمانية" },
  { en: "Al Khan Lagoon", ar: "بحيرة الخان" },
  { en: "Al Heera", ar: "الحيرة" },
  { en: "Al Rifah", ar: "الرفاعة" },
  { en: "Al Sharqan", ar: "الشارقان" },
  { en: "Al Azra", ar: "العزرة" },
  { en: "Al Goaz", ar: "القوز" },
  { en: "Al Darari", ar: "الدراري" },
  { en: "Al Ramaqiya", ar: "الرماقية" },
  { en: "Al Barashi", ar: "البرشي" },
  { en: "Al Tai", ar: "الطي" },
  { en: "Al Gharayen", ar: "القرائن" },
  { en: "Al Shahba", ar: "الشهباء" },
  { en: "Al Muwafjah", ar: "الموافجة" },
  { en: "Al Sweihat", ar: "السويحات" },
  { en: "Al Falaj", ar: "الفلج" },
  { en: "Al Mirgab", ar: "المرقاب" },
  { en: "Al Mansoura", ar: "المنصورة" },
  { en: "Al Butina", ar: "البطينة" },
]
