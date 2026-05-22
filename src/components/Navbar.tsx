"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, ArrowLeft } from "lucide-react";
import Logo from "./Logo";
import SERVICES from "@/lib/services-data";

const NAV_LINKS = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopDrop, setDesktopDrop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative flex items-center justify-between rounded-2xl sm:rounded-3xl transition-all duration-300 ${scrolled
                ? "bg-[#0a0a0a]/80 backdrop-blur-md shadow-2xl shadow-black/50 border border-white/5 px-4 sm:px-6 py-3 sm:py-4"
                : "bg-transparent px-2"
              }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0 z-50 flex items-center">
              <Link href="/" aria-label="الصفحة الرئيسية">
                <Logo size={42} showText={true} variant="horizontal" theme="dark" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3 lg:px-4 py-2 text-sm font-bold text-white/80 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E8500A] transition-all duration-300 group-hover:w-1/2" />
                </Link>
              ))}

              {/* Desktop Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDesktopDrop(true)}
                onMouseLeave={() => setDesktopDrop(false)}
              >
                <button
                  className="flex items-center gap-1.5 px-3 lg:px-4 py-2 text-sm font-bold text-white/80 hover:text-white transition-colors group"
                  onClick={() => setDesktopDrop(!desktopDrop)}
                >
                  خدماتنا
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${desktopDrop ? "rotate-180 text-[#E8500A]" : ""
                      }`}
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E8500A] transition-all duration-300 group-hover:w-1/2" />
                </button>

                <AnimatePresence>
                  {desktopDrop && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full pt-4 w-72"
                    >
                      <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8500A]/10 rounded-full blur-3xl pointer-events-none" />

                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-[#E8500A] group-hover:bg-[#E8500A]/10 transition-colors">
                              <s.icon size={18} />
                            </div>
                            <div>
                              <p className="text-white font-bold text-sm mb-0.5 transition-colors group-hover:text-[#E8500A]">
                                {s.title}
                              </p>
                              <p className="text-white/40 text-[10px] truncate max-w-[180px]">
                                {s.short}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/#contact"
                className="relative px-3 lg:px-4 py-2 text-sm font-bold text-white/80 hover:text-white transition-colors group"
              >
                تواصل معنا
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E8500A] transition-all duration-300 group-hover:w-1/2" />
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+966500763707"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold"
                aria-label="اتصل بنا: +966 50 076 3707"
              >
                <Phone size={14} />
                <span className="hidden lg:inline" dir="ltr">+966 50 076 3707</span>
              </a>
              <a
                href="/#contact"
                className="btn-primary px-5 py-2.5 rounded-xl text-white text-sm font-bold glow-orange shadow-lg flex items-center gap-2 hover:-translate-y-0.5 transition-all"
              >
                طلب استشارة
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <a
                href="tel:+966500763707"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#E8500A] transition-colors"
                aria-label="اتصل بنا"
              >
                <Phone size={16} />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white z-50"
                aria-label="القائمة"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-2xl md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen pt-28 pb-10 px-6">
              {/* Main Links */}
              <nav className="flex flex-col space-y-2 mb-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-4 text-xl font-black text-white hover:text-[#E8500A] transition-colors border-b border-white/5 group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ArrowLeft size={18} className="text-white/20 group-hover:text-[#E8500A] group-hover:-translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}

                {/* Services Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="border-b border-white/5"
                >
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full py-4 text-xl font-black text-white hover:text-[#E8500A] transition-colors"
                  >
                    <span>خدماتنا</span>
                    <ChevronDown
                      size={20}
                      className={`text-white/50 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-[#E8500A]" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col space-y-1 pb-4 pr-4">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 py-3 text-white/70 hover:text-[#E8500A] transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover:text-[#E8500A] group-hover:bg-[#E8500A]/10 transition-colors">
                                <s.icon size={14} />
                              </div>
                              <span className="font-bold text-sm">{s.title}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Contact Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href="/#contact"
                    className="flex items-center justify-between py-4 text-xl font-black text-white hover:text-[#E8500A] transition-colors border-b border-white/5 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>تواصل معنا</span>
                    <ArrowLeft size={18} className="text-white/20 group-hover:text-[#E8500A] group-hover:-translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full py-4 rounded-2xl text-white font-black flex items-center justify-center gap-2 glow-orange"
                >
                  طلب استشارة مجانية
                </a>
                <p className="text-center text-white/30 text-xs mt-4">
                  الرمز العالمي للمقاولات © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
