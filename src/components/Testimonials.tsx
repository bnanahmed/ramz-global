"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "أحمد المحمد",
    company: "شركة التطوير العقاري",
    text: "تعاملنا مع الرمز العالمي في مشروع بناء مجمع سكني كامل وكانت التجربة استثنائية. الالتزام بالمواعيد والجودة العالية جعلانا نوصي بهم لجميع شركائنا.",
    stars: 5,
    initials: "أم",
  },
  {
    id: 2,
    name: "سارة العلي",
    company: "متجر الأناقة",
    text: "أعمال التشطيبات التي نفذوها في معرضنا كانت بمستوى عالمي حقيقي. الفريق محترف جداً وتفاصيل العمل دقيقة. شكراً للرمز العالمي.",
    stars: 5,
    initials: "سع",
  },
  {
    id: 3,
    name: "خالد الزهراني",
    company: "مجموعة الزهراني للاستثمار",
    text: "خمسة مشاريع متتالية معهم ولم نخيب مرة واحدة. الشفافية في التسعير والسرعة في التنفيذ تجعل الرمز العالمي الخيار الأول دائماً.",
    stars: 5,
    initials: "خز",
  },
  {
    id: 4,
    name: "محمد الغامدي",
    company: "مشاريع الغامدي",
    text: "طلبت منهم ترميم مبنى تجاري قديم وكانوا على قدر المسؤولية. أنهوا العمل في الوقت المحدد بجودة تفوق التوقعات وبسعر عادل.",
    stars: 5,
    initials: "مغ",
  },
  {
    id: 5,
    name: "نورة الشمري",
    company: "فيلا العائلة",
    text: "من أفضل قرارات البناء هي التعاون مع الرمز العالمي. أعمال الكهرباء والسباكة والتشطيبات كلها بأيديهم وكل شيء مثالي.",
    stars: 5,
    initials: "نش",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={15} className="text-[#E8500A] fill-[#E8500A]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <section
      ref={ref}
      className="isolate-section py-20 sm:py-28 bg-[#111111]"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 stack-particles pointer-events-none" />

      <div className="relative stack-content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-orange px-5 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
            <span className="text-[#E8500A] text-sm font-bold">آراء عملاؤنا</span>
          </div>
          <h2 className="text-fluid-title font-black text-white mb-3">
            ماذا يقول <span className="gradient-text">عملاؤنا</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base max-w-xl mx-auto">
            ثقة عملاؤنا هي أغلى جائزة نحصل عليها
          </p>
        </motion.div>

        {/* Active testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="max-w-2xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={false}
                animate={{
                  opacity: i === current ? 1 : 0,
                  scale: i === current ? 1 : 0.96,
                  y: i === current ? 0 : 10,
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className={`glass rounded-3xl p-7 sm:p-10 border border-white/5 hover:border-[#E8500A]/20 transition-colors ${
                  i === current ? "relative" : "absolute inset-0"
                }`}
                style={{ pointerEvents: i === current ? "auto" : "none" }}
              >
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#E8500A]/15 border border-[#E8500A]/20 flex items-center justify-center mb-5">
                  <Quote size={20} className="text-[#E8500A]" />
                </div>

                <StarRating />

                <blockquote className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8500A] to-[#c44008] flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">{t.name}</p>
                    <p className="text-[#E8500A] text-xs font-medium">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`الشهادة ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-6 h-2 bg-[#E8500A]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom row — mini avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setCurrent(i)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl transition-all duration-300 ${
                i === current
                  ? "glass-orange border border-[#E8500A]/30"
                  : "glass border border-white/5 hover:border-white/15 opacity-60 hover:opacity-100"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 ${
                  i === current
                    ? "bg-gradient-to-br from-[#E8500A] to-[#c44008]"
                    : "bg-white/10"
                }`}
              >
                {t.initials}
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-white text-xs font-bold leading-none">{t.name}</p>
                <p className="text-white/40 text-[10px] mt-0.5 truncate max-w-[100px]">{t.company}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
