"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

/* ── Zod Schema ─────────────────────────────── */
const schema = z.object({
  name: z
    .string()
    .min(2, "الاسم يجب أن يحتوي على حرفين على الأقل")
    .max(60, "الاسم طويل جداً"),
  phone: z
    .string()
    .min(9, "رقم الجوال غير صحيح")
    .max(15, "رقم الجوال غير صحيح")
    .regex(/^[0-9+\s()-]+$/, "يُرجى إدخال رقم جوال صحيح"),
  email: z
    .string()
    .email("البريد الإلكتروني غير صحيح")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "يُرجى اختيار نوع الخدمة"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const SERVICES_LIST = [
  "أعمال التشييد والبناء",
  "التشطيبات وتجهيز المعارض",
  "الترميم والصيانة العامة",
  "الأعمال الصحية والسباكة",
  "التمديدات الكهربائية",
  "السلامة والكاميرات الأمنية",
  "أخرى",
];

const CONTACT_ITEMS = [
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "راسلنا مباشرةً عبر واتساب",
    value2: "+966 50 080 7274",
    href: "https://wa.me/966500807274?text=" + encodeURIComponent("مرحباً، أريد الاستفسار عن خدماتكم"),
    color: "text-green-400",
  },
  {
    icon: Phone,
    label: "اتصال مباشر",
    value: "+966 50 076 3707",
    href: "tel:+966500763707",
    color: "text-blue-400",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "Global.icon.ksa@gmail.com",
    href: "mailto:Global.icon.ksa@gmail.com",
    color: "text-orange-400",
  },
  {
    icon: MapPin,
    label: "موقعنا",
    value: "المملكة العربية السعودية - الرياض",
    href: "#",
    color: "text-red-400",
  },
  {
    icon: Clock,
    label: "ساعات العمل",
    value: "الأحد – الخميس",
    value2: "8 صباحاً – 10 مساءً",
    href: "#",
    color: "text-yellow-400",
  },
];

const inputCls =
  "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#E8500A]/50 focus:bg-white/[0.06] transition-all text-sm";

const errorCls = "mt-1 text-red-400 text-xs flex items-center gap-1";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "فشل إرسال الرسالة");
      setSent(true);
      reset();
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "حدث خطأ، يرجى المحاولة لاحقاً"
      );
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="isolate-section py-20 sm:py-28 bg-[#111111]"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 stack-particles pointer-events-none" />

      <div className="relative stack-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-orange px-5 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
            <span className="text-[#E8500A] text-sm font-bold">تواصل معنا</span>
          </div>
          <h2 className="text-fluid-title font-black text-white mb-4">
            ابدأ مشروعك <span className="gradient-text">اليوم</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base max-w-xl mx-auto px-4">
            استشارة مجانية +  عرض سعر تفصيلي خلال 24 ساعة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-3">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 glass rounded-2xl p-4 border border-white/5 hover:border-[#E8500A]/20 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <item.icon size={18} className={item.color} />
                </div>
                <div className="min-w-0">
                  <p className="text-white/35 text-[10px] sm:text-xs">{item.label}</p>
                  <p className="text-white font-semibold text-xs sm:text-sm truncate">
                    {typeof item.value === "string" && (item.value.startsWith("+") || item.value.includes("@")) ? <span dir="ltr">{item.value}</span> : item.value}
                  </p>
                  {item.value2 && (
                    <p className="text-white/60 text-xs">
                      {typeof item.value2 === "string" && item.value2.startsWith("+") ? <span dir="ltr">{item.value2}</span> : item.value2}
                    </p>
                  )}
                </div>
              </a>
            ))}

            {/* Consultation promise */}
            <div className="glass rounded-3xl p-5 border border-[#E8500A]/20 mt-2 text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-white font-black text-base mb-1.5">رد سريع</h3>
              <p className="text-white/55 text-xs leading-relaxed">
                نرد على طلبكم خلال ساعة واحدة
                <span className="block text-[#E8500A] font-bold mt-1">متاحون طوال الأسبوع</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-8 sm:p-12 border border-green-500/20 flex flex-col items-center justify-center text-center min-h-[420px]"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  تم الإرسال بنجاح! ✅
                </h3>
                <p className="text-white/55 leading-relaxed text-sm max-w-sm mb-6">
                  شكراً لتواصلكم معنا. سيتواصل معكم فريقنا خلال ساعة كحد أقصى.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-primary px-6 py-2.5 rounded-xl text-white text-sm font-bold"
                >
                  إرسال رسالة أخرى
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="glass rounded-3xl p-5 sm:p-7 border border-white/5 space-y-4"
              >
                <div>
                  <h3 className="text-white font-black text-lg sm:text-xl">
                    أرسل لنا رسالة
                  </h3>
                  <p className="text-white/35 text-xs mt-1">
                    سنرد خلال ساعة واحدة — متاح 24/7
                  </p>
                </div>

                {serverError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle size={16} />
                    {serverError}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">
                      الاسم <span className="text-[#E8500A]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="محمد العلي"
                      {...register("name")}
                      className={inputCls}
                      aria-label="الاسم"
                    />
                    {errors.name && (
                      <p className={errorCls}>
                        <AlertCircle size={11} />
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">
                      الجوال <span className="text-[#E8500A]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="05X XXX XXXX"
                      inputMode="tel"
                      {...register("phone")}
                      className={inputCls}
                      aria-label="رقم الجوال"
                    />
                    {errors.phone && (
                      <p className={errorCls}>
                        <AlertCircle size={11} />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    {...register("email")}
                    className={inputCls}
                    aria-label="البريد الإلكتروني"
                  />
                  {errors.email && (
                    <p className={errorCls}>
                      <AlertCircle size={11} />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">
                    نوع الخدمة <span className="text-[#E8500A]">*</span>
                  </label>
                  <select
                    {...register("service")}
                    className={`${inputCls} form-select bg-[#1a1a1a] cursor-pointer`}
                    aria-label="نوع الخدمة"
                  >
                    <option value="">اختر الخدمة المطلوبة</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s} className="bg-[#1a1a1a]">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className={errorCls}>
                      <AlertCircle size={11} />
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">
                    تفاصيل المشروع
                  </label>
                  <textarea
                    placeholder="صف مشروعك بإيجاز: الموقع، المساحة، المتطلبات..."
                    {...register("message")}
                    className={`${inputCls} form-textarea`}
                    aria-label="تفاصيل المشروع"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 rounded-2xl text-white font-black flex items-center justify-center gap-2 glow-orange disabled:opacity-60 text-sm"
                  aria-label="إرسال الرسالة"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/25 border-t-white rounded-full animate-spin" />
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
