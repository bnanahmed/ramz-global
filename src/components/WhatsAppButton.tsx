"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone } from "lucide-react";

const WA_NUMBER  = "966500807274";
const CALL_NUMBER = "+966500763707";
const CALL_DISPLAY = "+966 50 076 3707";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setShowTooltip(true), 3000);
    const t2 = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed left-4 sm:left-6 flex flex-col items-start gap-3"
      style={{
        bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
        zIndex: 90,
      }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !open && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.8 }}
            className="absolute bottom-20 left-0 bg-white text-gray-900 px-4 py-2.5 rounded-2xl shadow-2xl font-bold text-sm whitespace-nowrap"
            style={{ filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.3))" }}
          >
            <span>💬 تحتاج مساعدة؟ راسلنا!</span>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="rounded-3xl overflow-hidden shadow-2xl w-[300px] sm:w-[340px]"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(34,197,94,0.1)",
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center gap-3 border-b border-white/5"
              style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-black text-sm">الرمز العالمي للمقاولات</p>
                <p className="text-white/90 text-xs flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  متاح الآن • يرد خلال دقائق
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="إغلاق نافذة الواتساب"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="p-5 space-y-3 bg-[#0a0a0a]/50">
              <div className="bg-[#1f2937] rounded-2xl rounded-tr-sm p-3 max-w-[85%]">
                <p className="text-white/90 text-sm leading-relaxed">
                  👋 مرحباً بك في الرمز العالمي للمقاولات
                </p>
              </div>
              <div className="bg-[#1f2937] rounded-2xl rounded-tr-sm p-3 max-w-[85%]">
                <p className="text-white/90 text-sm leading-relaxed">
                  كيف يمكننا مساعدتك اليوم؟ 🏗️
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 pt-2 space-y-2 bg-[#0a0a0a]/50">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن خدماتكم")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <Send size={16} />
                <span>ابدأ المحادثة على واتساب</span>
              </a>
              <a
                href={`tel:${CALL_NUMBER}`}
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl font-bold text-xs transition-all"
              >
                <Phone size={14} />
                <span dir="ltr">{CALL_DISPLAY}</span>
              </a>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-[#0a0a0a] border-t border-white/5">
              <p className="text-white/30 text-[10px] text-center">
                © الرمز العالمي للمقاولات — خدمة العملاء
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowTooltip(false);
        }}
        className="relative group"
        aria-label="تواصل عبر واتساب"
      >
        {/* Pulse rings */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-pulse-ring" />
          </>
        )}

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            boxShadow: "0 10px 25px -5px rgba(37,211,102,0.5), 0 8px 10px -6px rgba(37,211,102,0.3)",
          }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={26} className="text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Notification dot */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-black shadow-lg">
            1
          </span>
        )}
      </button>
    </div>
  );
}
