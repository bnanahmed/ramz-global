"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const HEADLINES = ["نُشيِّد المستقبل", "نبني الأحلام", "نصنع الإتقان"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [headline, setHeadline] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setInterval(() => {
      setHeadline((p) => (p + 1) % HEADLINES.length);
    }, 3500);
    return () => clearInterval(t);
  }, [mounted]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#0A0A0A] flex items-center justify-center min-h-screen-safe pt-20 pb-16"
    >
      {/* LAYER 1: Base Background */}
      <div className="absolute inset-0 stack-base">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0D0D0D]" />
      </div>

      {/* LAYER 2: Grid Pattern */}
      <div className="absolute inset-0 stack-particles grid-pattern opacity-30 pointer-events-none" />

      {/* LAYER 3: Gradient Glows */}
      <div className="absolute inset-0 stack-gradient pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #E8500A 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #E8500A 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #E8500A 0%, transparent 65%)" }}
        />
      </div>

      {/* LAYER 4: Rotating Rings */}
      {mounted && (
        <div className="absolute inset-0 stack-gradient pointer-events-none hidden md:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full border border-[#E8500A]/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[15%] left-[10%] w-48 h-48 rounded-full border border-white/5"
          />
        </div>
      )}

      {/* LAYER 5: Floating badge cards (desktop only) */}
      {mounted && (
        <div className="absolute inset-0 stack-floating pointer-events-none hidden lg:block">
          <div className="absolute top-[28%] left-[8%] animate-float">
            <div className="glass-orange px-3 py-2 rounded-xl border border-[#E8500A]/30 text-xs text-white font-bold whitespace-nowrap">
              🏆 جودة معتمدة
            </div>
          </div>
          <div className="absolute top-[45%] right-[6%] animate-float-delayed">
            <div className="glass px-3 py-2 rounded-xl border border-white/10 text-xs text-white/70 font-bold whitespace-nowrap">
              ✅ ضمان شامل على الأعمال
            </div>
          </div>
          <div className="absolute bottom-[32%] left-[5%] animate-float">
            <div className="glass-orange px-3 py-2 rounded-xl border border-[#E8500A]/30 text-xs text-white font-bold whitespace-nowrap">
              ⚡ استجابة خلال ساعة
            </div>
          </div>
        </div>
      )}

      {/* LAYER 6: Main Content */}
      <div className="relative stack-content w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 glass-orange px-5 py-2 rounded-full mb-6 sm:mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
          <span className="text-[#E8500A] font-bold text-xs sm:text-sm tracking-wide">
            الرمز العالمي للمقاولات ✦
          </span>
          <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
        </motion.div>

        {/* Animated Headline */}
        <div className="mb-3 sm:mb-4" style={{ minHeight: "1.15em" }}>
          {mounted ? (
            <AnimatePresence mode="wait">
              <motion.h1
                key={headline}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-fluid-hero font-black text-white tracking-tight"
              >
                {HEADLINES[headline]}
              </motion.h1>
            </AnimatePresence>
          ) : (
            <h1 className="text-fluid-hero font-black text-white tracking-tight">
              {HEADLINES[0]}
            </h1>
          )}
        </div>

        {/* Gradient subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <span className="text-fluid-title font-black gradient-text">
            بمعايير عالمية
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-fluid-subtitle max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed px-4"
        >
          مؤسسة الرمز العالمي للمقاولات — شريككم الموثوق في بناء المستقبل.
          حلول إنشائية متكاملة بأعلى معايير الجودة والسلامة في المملكة العربية السعودية.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <a
            href="#contact"
            className="btn-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-white font-black text-sm sm:text-base flex items-center gap-2 sm:gap-3 glow-orange w-full sm:w-auto justify-center min-h-[52px]"
          >
            <span>احصل على استشارة مجانية</span>
            <ArrowLeft size={18} />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl glass border border-white/10 text-white font-bold text-sm sm:text-base hover:border-[#E8500A]/40 transition-colors w-full sm:w-auto justify-center min-h-[52px]"
          >
            <span>استعرض خدماتنا</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 stack-floating hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-1 bg-[#E8500A] rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
