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


      {/* Main content */}
      <main id="main-content">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}
