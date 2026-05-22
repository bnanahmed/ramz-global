"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Eye, Building2, Paintbrush, Wrench } from "lucide-react";

type FilterKey = "all" | "construction" | "finishing" | "renovation";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "الكل" },
  { key: "construction", label: "تشييد" },
  { key: "finishing", label: "تشطيبات" },
  { key: "renovation", label: "ترميم" },
];

const PROJECTS = [
  { id: 1, title: "مجمع سكني فاخر — الرياض", category: "construction" as FilterKey, categoryLabel: "تشييد", icon: Building2, image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", alt: "مجمع سكني فاخر في الرياض" },
  { id: 2, title: "تشطيب معرض تجاري — جدة", category: "finishing" as FilterKey, categoryLabel: "تشطيبات", icon: Paintbrush, image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80", alt: "تشطيب معرض تجاري في جدة" },
  { id: 3, title: "ترميم مبنى تجاري — الدمام", category: "renovation" as FilterKey, categoryLabel: "ترميم", icon: Wrench, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", alt: "ترميم مبنى تجاري في الدمام" },
  { id: 4, title: "برج سكني — الرياض", category: "construction" as FilterKey, categoryLabel: "تشييد", icon: Building2, image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", alt: "برج سكني في الرياض" },
  { id: 5, title: "واجهات فاخرة — مكة", category: "finishing" as FilterKey, categoryLabel: "تشطيبات", icon: Paintbrush, image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80", alt: "واجهات فاخرة في مكة المكرمة" },
  { id: 6, title: "تجديد شامل — المدينة", category: "renovation" as FilterKey, categoryLabel: "ترميم", icon: Wrench, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "تجديد شامل في المدينة المنورة" },
  { id: 7, title: "مستودع صناعي — الرياض", category: "construction" as FilterKey, categoryLabel: "تشييد", icon: Building2, image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&q=80", alt: "مستودع صناعي في الرياض" },
  { id: 8, title: "تشطيب فيلا — الطائف", category: "finishing" as FilterKey, categoryLabel: "تشطيبات", icon: Paintbrush, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "تشطيب فيلا في الطائف" },
  { id: 9, title: "ترميم قصر تاريخي — جدة", category: "renovation" as FilterKey, categoryLabel: "ترميم", icon: Wrench, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "ترميم قصر تاريخي في جدة" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className="isolate-section py-20 sm:py-28 bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 grid-pattern opacity-15 stack-particles pointer-events-none" />

      <div className="relative stack-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 glass-orange px-5 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
            <span className="text-[#E8500A] text-sm font-bold">مشاريعنا المنجزة</span>
          </div>
          <h2 className="text-fluid-title font-black text-white mb-4">
            أعمال تتحدث عن{" "}
            <span className="gradient-text">نفسها</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base max-w-2xl mx-auto px-4">
            نفخر بمئات المشاريع المنجزة بأعلى معايير الجودة في مختلف مناطق المملكة
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === f.key
                  ? "filter-tab-active"
                  : "glass border border-white/10 text-white/60 hover:border-[#E8500A]/30 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.32, delay: i * 0.05 }}
                className="project-card relative group rounded-2xl overflow-hidden border border-white/5 hover:border-[#E8500A]/30 transition-all duration-300"
                style={{ minHeight: "260px" }}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Category badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="glass-orange px-3 py-1 rounded-full text-[#E8500A] text-xs font-bold flex items-center gap-1.5">
                    <project.icon size={11} />
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="project-card-overlay z-10" />

                {/* Content on hover */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-black text-base mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <a
                    href="#contact"
                    className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-bold self-start"
                  >
                    <Eye size={13} />
                    عرض المشروع
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-black text-sm sm:text-base glow-orange"
          >
            ابدأ مشروعك معنا
          </a>
        </motion.div>
      </div>
    </section>
  );
}
