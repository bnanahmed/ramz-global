"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, FileText, HardHat, CheckCircle, Headphones } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "الاستشارة المجانية",
    desc: "تواصل معنا وسنرد خلال ساعة. نستمع لاحتياجاتك بدقة ونقترح الحل الأمثل.",
    time: "خلال ساعة",
  },
  {
    icon: FileText,
    step: "02",
    title: "دراسة وتقديم العرض",
    desc: "نزور الموقع ونقدم عرضاً تفصيلياً شفافاً بالتكلفة والجدول الزمني.",
    time: "24–48 ساعة",
  },
  {
    icon: HardHat,
    step: "03",
    title: "التنفيذ بإشراف هندسي",
    desc: "نبدأ التنفيذ بإشراف مهندسين معتمدين مع تقارير دورية لضمان الجودة.",
    time: "حسب المشروع",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "التسليم والضمان",
    desc: "نسلمك المشروع في الموعد المحدد مع ضمان رسمي شامل على جميع الأعمال.",
    time: "في الموعد",
  },
  {
    icon: Headphones,
    step: "05",
    title: "دعم ما بعد التسليم",
    desc: "نبقى إلى جانبك بدعم مستمر وصيانة دورية تضمن استمرار الأداء.",
    time: "مستمر",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      ref={ref}
      className="isolate-section py-20 sm:py-28 bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 grid-pattern opacity-15 stack-particles pointer-events-none" />

      <div className="relative stack-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-orange px-5 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
            <span className="text-[#E8500A] text-sm font-bold">منهجية العمل</span>
          </div>
          <h2 className="text-fluid-title font-black text-white mb-4">
            كيف نعمل <span className="gradient-text">معك؟</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base max-w-xl mx-auto px-4">
            عملية واضحة وشفافة من البداية إلى النهاية، بدون أي تعقيدات
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line — visible on all screens */}
          <div
            className="absolute right-[27px] sm:right-[31px] top-8 bottom-8 w-0.5 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #E8500A 0%, rgba(232,80,10,0.5) 50%, rgba(232,80,10,0.1) 100%)",
            }}
          />

          <div className="space-y-6 sm:space-y-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Step circle — sits on the line */}
                <div className="relative shrink-0 z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E8500A] flex flex-col items-center justify-center glow-orange">
                    <span className="text-white font-black text-lg sm:text-xl leading-none">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 glass rounded-2xl p-4 sm:p-5 border border-white/5 hover:border-[#E8500A]/20 transition-colors mb-1">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <div className="flex items-center gap-2.5">
                      <step.icon size={16} className="text-[#E8500A] shrink-0" />
                      <h3 className="text-white font-black text-base sm:text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <span className="glass-orange px-2.5 py-1 rounded-lg text-[#E8500A] text-[10px] sm:text-xs font-bold whitespace-nowrap shrink-0">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-white/55 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
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
            ابدأ الخطوة الأولى الآن
          </a>
        </motion.div>
      </div>
    </section>
  );
}
