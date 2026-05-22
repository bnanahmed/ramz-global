import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";

import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SiteLayout>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services */}
      <Services />

      {/* 3. About / Why Us */}
      <About />

      {/* 4. Why Choose Us — 4 feature cards */}
      <WhyUs />



      {/* 7. How We Work */}
      <Process />

      {/* 9. Contact */}
      <Contact />
    </SiteLayout>
  );
}
