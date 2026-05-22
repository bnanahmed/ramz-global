"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,80,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,80,10,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #E8500A 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <span
            className="text-[10rem] sm:text-[14rem] font-black leading-none select-none"
            style={{
              background: "linear-gradient(135deg, #E8500A, #FF8C42, #E8500A)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 3s ease infinite",
            }}
          >
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-4">
            الصفحة غير موجودة
          </h1>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
            <br />
            يمكنك العودة للصفحة الرئيسية.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base w-full sm:w-auto justify-center"
              style={{
                background: "linear-gradient(135deg, #E8500A, #C44008)",
                boxShadow: "0 0 30px rgba(232,80,10,0.35)",
              }}
            >
              <Home size={20} />
              <span>الصفحة الرئيسية</span>
            </motion.a>

            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base border border-white/10 hover:border-[#E8500A]/40 transition-colors w-full sm:w-auto justify-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
              }}
            >
              <ArrowLeft size={20} />
              <span>تواصل معنا</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
