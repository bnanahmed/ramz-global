"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,80,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,80,10,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-24 h-24 rounded-3xl mx-auto mb-8 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #E8500A, #C44008)" }}
        >
          <span className="text-4xl">⚠️</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-4">
            حدث خطأ ما
          </h1>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            نعتذر عن هذا الخطأ. يرجى المحاولة مرة أخرى.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={reset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base w-full sm:w-auto justify-center"
              style={{
                background: "linear-gradient(135deg, #E8500A, #C44008)",
                boxShadow: "0 0 30px rgba(232,80,10,0.35)",
              }}
            >
              <RefreshCw size={20} />
              <span>حاول مرة أخرى</span>
            </motion.button>

            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base border border-white/10 hover:border-[#E8500A]/40 transition-colors w-full sm:w-auto justify-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
              }}
            >
              <Home size={20} />
              <span>الصفحة الرئيسية</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
