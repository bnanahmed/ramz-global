import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Scroll progress bar + scroll-to-top button */}
      <ScrollProgress />

      {/* Fixed navbar */}
      <Navbar />

      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#E8500A] focus:text-white focus:rounded-xl focus:font-bold focus:text-sm"
      >
        انتقل إلى المحتوى الرئيسي
      </a>

      {/* Main content */}
      <main id="main-content">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}
