"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clientData = [
  { image: "/client1.png.jpeg", title: "Social Media Management", description: "Proven Results on Lead Generation through Meta Ads" },
  { image: "/client2.png.jpeg", title: "Daar Enterprises", description: "Social Media Management · Proven Results on Lead Generation through Meta Ads" },
  { image: "/client3.png.jpeg", title: "Website Designing", description: "Custom website design & development" },
  { image: "/client4.png.jpeg", title: "Masun Chemicals", description: "Social Media Management · Proven Results on Lead Generation through Meta Ads" },
];

const uniqueCount = clientData.length;

const duplicatedClients = [...clientData, ...clientData];

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInstant, setIsInstant] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const first = track.firstElementChild as HTMLElement | null;
      const second = first?.nextElementSibling as HTMLElement | null;
      if (!first) return;
      const gap = second ? second.offsetLeft - first.offsetLeft - first.offsetWidth : 24;
      setCardWidth(first.offsetWidth + gap);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goNext = () => {
    setCurrentIndex((index) => Math.min(index + 1, uniqueCount));
  };

  const goPrev = () => {
    if (currentIndex === 0) {
      setIsInstant(true);
      setCurrentIndex(uniqueCount - 1);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsInstant(false)));
      return;
    }
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  const goNextRef = useRef(goNext);
  goNextRef.current = goNext;

  useEffect(() => {
    if (isHovered) return;
    const id = window.setInterval(() => goNextRef.current(), 3000);
    return () => window.clearInterval(id);
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex !== uniqueCount) return;
    const id = window.setTimeout(() => {
      setIsInstant(true);
      setCurrentIndex(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsInstant(false)));
    }, 500);
    return () => window.clearTimeout(id);
  }, [currentIndex]);

  return (
    <section id="portfolio" className="relative min-h-screen px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] shadow-[0_0_16px_rgba(255,107,0,0.5)]" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Portfolio</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">Explore our successful projects and see how we've helped businesses achieve their goals.</p>
        </motion.div>

        {/* ===== OLD PORTFOLIO CODE (COMMENTED OUT) ===== */}
        {/*
        import { useState } from "react";
        import { AnimatePresence } from "framer-motion";
        import ProjectCard from "./ProjectCard";
        import { projects, categories } from "./portfolioData";

        const [activeFilter, setActiveFilter] = useState("All");

        const filteredProjects
          = activeFilter === "All"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-base ${ activeFilter === category ? "border-[#FF6B00] bg-[#FF6B00] text-white shadow-[0_0_20px_rgba(255,107,0,0.4)]" : "border-white/20 bg-white/5 text-white/70 hover:border-[#FF6B00]/50 hover:bg-white/10 hover:text-white" }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
        */}
        {/* ===== END OLD CODE ===== */}

        {/* ===== NEW CLIENTS CAROUSEL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={goNext}
              aria-label="Previous slide"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111111]/80 text-white shadow-[0_0_16px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/15 hover:text-[#FF8A1F] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex-1 overflow-hidden"
            >
              <div
                ref={trackRef}
                className={`flex w-max items-stretch gap-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-8 ${
                  isInstant ? "transition-none" : ""
                }`}
                style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
              >
                {duplicatedClients.map((client, index) => (
                  <div key={index} className="flex-shrink-0 w-[280px] sm:w-[320px]">
                    <div className="group/card relative flex h-full flex-col rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl p-5 text-center transition-all duration-300 hover:border-[#FF6B00]/50 hover:shadow-[0_0_40px_rgba(255,107,0,0.25),0_0_60px_rgba(255,107,0,0.15)] sm:p-6">
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF6B00]/0 group-hover/card:from-[#FF6B00]/8 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                      <div className="relative mb-5 flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-5 sm:h-44">
                        <Image
                          src={client.image}
                          alt={client.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="relative font-bold text-white text-sm sm:text-base">{client.title}</h3>
                      <p className="relative mt-2 text-xs sm:text-sm text-white/60">{client.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Next slide"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111111]/80 text-white shadow-[0_0_16px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/15 hover:text-[#FF8A1F] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
        {/* ===== END NEW CAROUSEL ===== */}
      </div>
    </section>
  );
}