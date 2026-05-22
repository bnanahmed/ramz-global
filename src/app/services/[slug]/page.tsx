import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteLayout from "@/components/layout/SiteLayout";
import SERVICES from "@/lib/services-data";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from "lucide-react";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: "خدمة غير موجودة" };
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: `${service.title}, مقاولات, بناء, السعودية, الرمز العالمي`,
    alternates: { canonical: `https://globalicon.sa/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
      type: "website",
      locale: "ar_SA",
      siteName: "الرمز العالمي للمقاولات",
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDesc,
    provider: {
      "@type": "LocalBusiness",
      name: "الرمز العالمي للمقاولات",
      telephone: "+966500807274",
      url: "https://globalicon.sa",
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
    },
    url: `https://globalicon.sa/services/${service.slug}`,
    image: service.image,
  };

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[#E8500A] transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#E8500A] transition-colors">الخدمات</Link>
            <span>/</span>
            <span className="text-white/70">{service.title}</span>
          </nav>

          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E8500A] flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(232,80,10,0.5)]">
              <Icon size={26} className="text-white" />
            </div>
            <div>
              {service.tag && (
                <span className="inline-block bg-[#E8500A] text-white text-[10px] font-black px-3 py-1 rounded-lg mb-2">
                  {service.tag}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {service.title}
              </h1>
            </div>
          </div>
          <p className="text-[#E8500A] font-bold text-base sm:text-lg">{service.short}</p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="bg-[#0A0A0A] relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: Main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <div>
                <div className="inline-flex items-center gap-2 glass-orange px-4 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full" />
                  <span className="text-[#E8500A] text-xs font-bold">نظرة عامة</span>
                </div>
                <p className="text-white/70 leading-loose text-sm sm:text-base">
                  {service.heroDesc}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-white font-black text-xl sm:text-2xl mb-6 flex items-center gap-3">
                  <div className="w-1 h-7 bg-[#E8500A] rounded-full" />
                  ما تشمله الخدمة
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#E8500A]/20 transition-colors"
                    >
                      <CheckCircle2 size={16} className="text-[#E8500A] shrink-0" />
                      <span className="text-white/70 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed sections */}
              <div>
                <h2 className="text-white font-black text-xl sm:text-2xl mb-6 flex items-center gap-3">
                  <div className="w-1 h-7 bg-[#E8500A] rounded-full" />
                  تفاصيل الخدمة
                </h2>
                <div className="space-y-5">
                  {service.details.map((d, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-3xl bg-white/[0.03] border border-white/6 hover:border-[#E8500A]/20 transition-colors"
                    >
                      <h3 className="text-white font-black text-base sm:text-lg mb-3 flex items-center gap-2">
                        <span className="text-[#E8500A] font-black text-sm opacity-60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {d.title}
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                        {d.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why choose us for this service */}
              <div className="p-6 sm:p-8 rounded-3xl border border-[#E8500A]/20 bg-[#E8500A]/5">
                <h2 className="text-white font-black text-xl mb-5 flex items-center gap-3">
                  <div className="w-1 h-7 bg-[#E8500A] rounded-full" />
                  لماذا تختارنا لهذه الخدمة؟
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.whyUs.map((w) => (
                    <div key={w} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#E8500A] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={11} className="text-white" />
                      </div>
                      <span className="text-white/80 text-sm font-medium">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">

                {/* Contact Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#E8500A] to-[#c44008] text-white">
                  <h3 className="font-black text-lg mb-2">احصل على عرض سعر</h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">
                    تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر تفصيلي خلال 24 ساعة
                  </p>
                  <a
                    href="tel:+966500807274"
                    className="flex items-center justify-center gap-2 bg-white text-[#E8500A] font-black py-3.5 rounded-2xl mb-3 text-sm hover:bg-white/90 transition-colors"
                  >
                    <Phone size={16} />
                    اتصل بنا الآن
                  </a>
                  <a
                    href="https://wa.me/966500807274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-bold py-3.5 rounded-2xl text-sm hover:bg-white/30 transition-colors border border-white/30"
                  >
                    <MessageCircle size={16} />
                    واتساب
                  </a>
                </div>

                {/* Other Services */}
                <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/6">
                  <h3 className="text-white font-black text-sm mb-4 flex items-center gap-2">
                    <div className="w-1 h-4 bg-[#E8500A] rounded-full" />
                    خدمات أخرى
                  </h3>
                  <div className="space-y-2">
                    {otherServices.map((s) => {
                      const OtherIcon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#E8500A]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E8500A]/20 transition-colors">
                            <OtherIcon size={15} className="text-[#E8500A]" />
                          </div>
                          <span className="text-white/60 text-xs group-hover:text-white/90 transition-colors leading-snug">
                            {s.title}
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/services"
                      className="flex items-center gap-2 text-[#E8500A] text-xs font-bold pt-2 px-3 hover:gap-3 transition-all"
                    >
                      <ArrowLeft size={12} />
                      جميع الخدمات
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Back Button ── */}
      <div className="bg-[#0A0A0A] pb-16 text-center">
        <Link
          href="/#services"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-white/10 text-white font-bold text-sm hover:border-[#E8500A]/40 transition-colors"
        >
          <ArrowLeft size={16} />
          العودة للخدمات
        </Link>
      </div>
    </SiteLayout>
  );
}
