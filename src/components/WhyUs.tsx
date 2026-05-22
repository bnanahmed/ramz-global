"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Shield, Users, Clock } from "lucide-react";

const REASONS = [
  {
    icon: Star,
    step: "01",
    title: "جودة لا تُضاهى",
    desc: "نستخدم أجود المواد وأحدث التقنيات الهندسية لضمان نتيجة استثنائية تتجاوز توقعاتكم.",
  },
  {
    icon: Shield,
    step: "02",
    title: "ضمان شامل",
    desc: "نضمن جميع أعمالنا المنفذة بعقود رسمية وواضحة مع ضمان موثّق على المواد والتنفيذ.",
  },
  {
    icon: Users,
    step: "03",
    title: "فريق محترف",
    desc: "مهندسون وفنيون معتمدون يعملون بتناغم تام تحت إشراف هندسي متواصل طوال مراحل التنفيذ.",
  },
  {
    icon: Clock,
    step: "04",
    title: "التزام بالمواعيد",
    desc: "نُسلّم مشاريعنا في الوقت المحدد دون تنازل عن الجودة — التزامنا هو شرفنا.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="whyus"
      ref={ref}
      className="isolate-section py-20 sm:py-28 bg-[#111111]"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 stack-particles pointer-events-none" />

      <div className="relative stack-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-orange px-5 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
            <span className="text-[#E8500A] text-sm font-bold">لماذا نحن؟</span>
          </div>
          <h2 className="text-fluid-title font-black text-white mb-4">
            ما يجعلنا <span className="gradient-text">الخيار الأول</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base max-w-2xl mx-auto px-4">
            نحن لا نبني فقط — نبني الثقة والشراكة الحقيقية مع كل عميل
          </p>
        </motion.div>

        {/* 4 Cards — 2×2 grid, all fully visible */}
        <div className="grid sm:grid-cols-2 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-7 sm:p-8 rounded-3xl border transition-all duration-300 cursor-default overflow-hidden"
              style={{
                background:
                  i === 0
                    ? "linear-gradient(135deg, rgba(232,80,10,0.18) 0%, rgba(196,64,8,0.08) 100%)"
                    : "rgba(255,255,255,0.02)",
                borderColor:
                  i === 0
                    ? "rgba(232,80,10,0.4)"
                    : "rgba(255,255,255,0.06)",
                boxShadow: i === 0 ? "0 0 40px rgba(232,80,10,0.15)" : "none",
              }}
              onHoverStart={(e) => {
                const el = e.target as HTMLElement;
                if (el.closest) {
                  const card = el.closest("[data-card]");
                  if (card) {
                    (card as HTMLElement).style.borderColor = "rgba(232,80,10,0.4)";
                    (card as HTMLElement).style.boxShadow = "0 0 40px rgba(232,80,10,0.15)";
                  }
                }
              }}
              data-card="true"
            >
              {/* Step number watermark */}
              <div className="absolute top-5 left-6 text-6xl sm:text-7xl font-black text-white/[0.04] select-none pointer-events-none">
                {r.step}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #E8500A, #c44008)"
                      : "rgba(232,80,10,0.1)",
                  border: "1px solid rgba(232,80,10,0.3)",
                  boxShadow: i === 0 ? "0 0 20px rgba(232,80,10,0.4)" : "none",
                }}
              >
                <r.icon
                  size={24}
                  className={i === 0 ? "text-white" : "text-[#E8500A]"}
                />
              </div>

              {/* Step label */}
              <div className="text-[#E8500A] text-xs font-black tracking-widest mb-2 opacity-60">
                {r.step}
              </div>

              {/* Title */}
              <h3 className="text-white font-black text-lg sm:text-xl mb-3">
                {r.title}
              </h3>

              {/* Description */}
              <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-black text-sm sm:text-base glow-orange"
          >
            ابدأ مشروعك معنا
          </a>
        </motion.div>
      </div>
    </section>
  );
}
