"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Users, Award, Briefcase, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";

const VALUES = [
  "الالتزام بأعلى معايير الجودة العالمية",
  "الشفافية الكاملة في التعاملات",
  "الالتزام الصارم بالمواعيد",
  "فريق هندسي معتمد ومتخصص",
  "ضمان شامل على جميع الأعمال",
  "خدمة عملاء على مدار الساعة",
];

const HIGHLIGHTS = [
  { icon: Users, value: "فريق متخصص", label: "مهندسون معتمدون" },
  { icon: Award, value: "جودة مضمونة", label: "كودات سعودية" },
  { icon: Briefcase, value: "حلول متكاملة", label: "من البداية للنهاية" },
  { icon: Clock, value: "استجابة سريعة", label: "خلال ساعة" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="isolate-section py-20 sm:py-28 bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 grid-pattern opacity-15 stack-particles pointer-events-none" />

      <div className="relative stack-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Orange frame decoration */}
            <div
              className="absolute -top-3 -right-3 w-full h-full rounded-3xl border-2 border-[#E8500A]/20 pointer-events-none"
              style={{ transform: "translate(6px, -6px)" }}
            />

            <div className="relative grid grid-cols-2 gap-3">
              {/* Main image — full width */}
              <div className="col-span-2 relative h-52 sm:h-64 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
                  alt="مشاريع الرمز العالمي للمقاولات — إنشاء وبناء"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent" />
                <div className="absolute bottom-3 right-3 glass-orange px-3 py-1.5 rounded-xl">
                  <p className="text-[#E8500A] font-bold text-xs">🏆 جودة معتمدة دولياً</p>
                </div>
              </div>

              {/* Two smaller images */}
              <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80"
                  alt="أعمال صيانة وترميم متخصصة"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/40" />
                <p className="absolute bottom-2 right-2 text-white font-bold text-[10px] sm:text-xs drop-shadow">
                  صيانة متخصصة
                </p>
              </div>

              <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=500&q=80"
                  alt="تشطيبات فاخرة وتجهيز المعارض"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/40" />
                <p className="absolute bottom-2 right-2 text-white font-bold text-[10px] sm:text-xs drop-shadow">
                  تشطيبات فاخرة
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 glass-orange px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
              <span className="text-[#E8500A] text-sm font-bold">من نحن</span>
            </div>

            <h2 className="text-fluid-title font-black text-white mb-5 leading-tight">
              شريككم الموثوق في
              <br />
              <span className="gradient-text">البناء والتشييد</span>
            </h2>

            <p className="text-white/55 leading-relaxed mb-4 text-sm sm:text-base">
              مؤسسة الرمز العالمي للمقاولات — انطلقنا بهدف واضح: تقديم خدمات إنشائية
              بمعايير عالمية حقيقية في السوق السعودية.
            </p>

            <p className="text-white/55 leading-relaxed mb-7 text-sm sm:text-base">
              فريقنا يضم مهندسين معتمدين وفنيين متخصصين، نعمل معاً لنحوّل رؤيتك إلى
              واقع ملموس بأعلى معايير الجودة والسلامة.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-2 mb-8">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v}
                  initial={{ opacity: 0, x: 15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle size={15} className="text-[#E8500A] shrink-0" />
                  <span className="text-white/65 text-xs sm:text-sm">{v}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats 2×2 grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                  className="glass rounded-2xl p-4 border border-white/5 hover:border-[#E8500A]/20 transition-colors"
                >
                  <h.icon size={20} className="text-[#E8500A] mb-2" />
                  <p className="text-white font-black text-sm">{h.value}</p>
                  <p className="text-white/35 text-xs mt-0.5">{h.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons — properly sized and equal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white font-black text-sm glow-orange flex-1 sm:flex-none min-h-[50px]"
              >
                <span>احصل على استشارة مجانية</span>
                <ArrowLeft size={16} />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass border border-white/10 text-white font-bold text-sm hover:border-[#E8500A]/40 transition-colors flex-1 sm:flex-none min-h-[50px]"
              >
                استعرض خدماتنا
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
