"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SERVICES from "@/lib/services-data";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} className="isolate-section py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="absolute inset-0 grid-pattern opacity-20 stack-particles pointer-events-none" />

      <div className="relative stack-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-orange px-5 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
            <span className="text-[#E8500A] text-sm font-bold">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-fluid-title font-black text-white mb-4">
            حلول إنشائية متكاملة{" "}
            <span className="gradient-text">لكل احتياجاتكم</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            أربع خدمات متخصصة تغطي كل احتياجاتك — من الكهرباء حتى التشطيبات النهائية
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <article className="relative h-full rounded-3xl overflow-hidden border border-white/6 bg-white/[0.02] hover:border-[#E8500A]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(232,80,10,0.15)]">

                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={i < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

                      {/* Tag */}
                      {service.tag && (
                        <div className="absolute top-3 right-3 bg-[#E8500A] text-white text-[10px] font-black px-2.5 py-1 rounded-lg">
                          {service.tag}
                        </div>
                      )}

                      {/* Icon bubble */}
                      <div className="absolute top-3 left-3 w-11 h-11 rounded-2xl bg-[#E8500A]/90 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-white font-black text-base sm:text-lg mb-2 group-hover:text-[#E8500A] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-5">
                        {service.short}
                      </p>

                      {/* Features preview */}
                      <ul className="space-y-1.5 mb-5">
                        {service.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-center gap-2 text-white/40 text-xs">
                            <span className="w-1 h-1 bg-[#E8500A] rounded-full shrink-0" />
                            {f}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-[#E8500A]/60 text-xs font-bold">
                            +{service.features.length - 3} خدمات أخرى...
                          </li>
                        )}
                      </ul>

                      {/* CTA row */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-[#E8500A] text-xs font-bold group-hover:gap-3 flex items-center gap-1.5 transition-all duration-300">
                          تفاصيل الخدمة
                          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-[#E8500A]/10 group-hover:bg-[#E8500A] flex items-center justify-center transition-all duration-300">
                          <ArrowLeft size={14} className="text-[#E8500A] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-black text-sm sm:text-base glow-orange"
          >
            احصل على عرض سعر مجاني
            <ArrowLeft size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
