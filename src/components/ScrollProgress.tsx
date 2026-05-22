"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setShowTop(scrollTop > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-track">
        <div
          className="scroll-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Scroll To Top Button */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          aria-label="العودة للأعلى"
          className="fixed left-4 sm:left-6 w-11 h-11 rounded-full btn-primary flex items-center justify-center shadow-lg glow-orange"
          style={{
            bottom: "calc(5.5rem + env(safe-area-inset-bottom, 0px))",
            zIndex: 85,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={18} className="text-white" />
        </motion.button>
      )}
    </>
  );
}
