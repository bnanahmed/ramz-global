"use client";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
} from "lucide-react";
import Logo from "./Logo";

const COMPANY_LINKS = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/#about" },
  { name: "خدماتنا", href: "/#services" },
  { name: "لماذا نحن", href: "/#why-us" },
  { name: "منهجية العمل", href: "/#process" },
  { name: "تواصل معنا", href: "/#contact" },
];

const SOCIALS = [
  {
    icon: Instagram,
    href: "https://instagram.com/globalicon.ksa",
    label: "Instagram — الرمز العالمي",
    color: "hover:text-pink-400 hover:border-pink-400/40",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/globalicon_ksa",
    label: "X (Twitter) — الرمز العالمي",
    color: "hover:text-sky-400 hover:border-sky-400/40",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-20 pb-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <Logo size={56} showText={true} variant="vertical" theme="dark" />
            <p className="text-white/50 text-sm leading-relaxed mb-6 mt-5 max-w-xs">
              مؤسسة الرمز العالمي للمقاولات — شريككم الموثوق في بناء المستقبل
              بأعلى معايير الجودة في المملكة العربية السعودية.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-white/40 ${s.color} transition-all duration-200 hover:scale-110`}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-5 flex items-center gap-2 text-sm uppercase tracking-wider">
              <div className="w-1 h-5 bg-[#E8500A] rounded-full" />
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-[#E8500A] transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#E8500A] group-hover:w-4 transition-all duration-300 shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black mb-5 flex items-center gap-2 text-sm uppercase tracking-wider">
              <div className="w-1 h-5 bg-[#E8500A] rounded-full" />
              تواصل معنا
            </h4>

            <div className="space-y-3 mb-6">
              <a
                href="tel:+966500807274"
                className="flex items-center gap-3 text-white/50 hover:text-[#E8500A] transition-colors group text-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-[#E8500A]/10 flex items-center justify-center transition-colors shrink-0">
                  <Phone size={14} className="text-[#E8500A]" />
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase">اتصل بنا</p>
                  <p className="font-semibold text-xs"><span dir="ltr">+966 50 080 7274</span></p>
                  <p className="font-semibold text-xs text-white/40"><span dir="ltr">+966 50 076 3707</span></p>
                </div>
              </a>

              <a
                href="mailto:Global.icon.ksa@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-[#E8500A] transition-colors group text-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-[#E8500A]/10 flex items-center justify-center transition-colors shrink-0">
                  <Mail size={14} className="text-[#E8500A]" />
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase">البريد</p>
                  <p className="font-semibold text-xs break-all">Global.icon.ksa@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-white/50 text-sm">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#E8500A]" />
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase">الموقع</p>
                  <p className="font-semibold text-xs">المملكة العربية السعودية - الرياض</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs text-center">
          <p>
            © {year}{" "}
            <span className="text-[#E8500A] font-bold">الرمز العالمي للمقاولات</span>. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-[#E8500A] transition-colors">
              سياسة الخصوصية
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-[#E8500A] transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>

        {/* Developer credit */}
        <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-center">
          <a
            href="https://wa.me/966782293935"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل مع المطور بلال غالب عبر واتساب"
            className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/5 hover:border-[#25D366]/30 bg-white/[0.02] hover:bg-[#25D366]/5 transition-all duration-300"
          >
            {/* Glow on hover */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: "0 0 20px rgba(37,211,102,0.1)" }}
            />


            {/* Content */}
            <span className="flex items-center gap-1.5 text-[11px] tracking-wider">
              <span className="text-white/25 group-hover:text-white/40 transition-colors font-light">
                Digital Architecture by
              </span>
              <span className="font-black text-white/50 group-hover:text-[#25D366] transition-colors duration-300 uppercase tracking-widest text-[10px]">
                Belal Ghaleb
              </span>
            </span>


            {/* WhatsApp dot indicator */}
            <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#25D366] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
