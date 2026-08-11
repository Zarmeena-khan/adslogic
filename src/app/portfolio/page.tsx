"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { projects, categories } from "@/components/Portfolio/portfolioData";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      <main className="pt-28 sm:pt-32">
        <section className="relative min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
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
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Our Portfolio
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                Explore our successful projects and see how we've helped businesses
                achieve their goals.
              </p>
            </motion.div>

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
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-base ${
                    activeFilter === category
                      ? "border-[#FF6B00] bg-[#FF6B00] text-white shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                      : "border-white/20 bg-white/5 text-white/70 hover:border-[#FF6B00]/50 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.03, y: -6 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-shadow duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_0_32px_rgba(255,107,0,0.2)]"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B00]/0 to-[#FF6B00]/0 opacity-0 transition-opacity duration-300 group-hover:from-[#FF6B00]/8 group-hover:to-transparent group-hover:opacity-100" />

                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#0A0A0A]">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.1)_0%,transparent_70%)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20">🎨</div>
                      </div>
                    </div>

                    <div className="relative p-6">
                      <span className="mb-2 inline-block rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1 text-xs font-medium text-[#FF8A1F]">
                        {project.category}
                      </span>

                      <h2 className="text-lg font-semibold text-white sm:text-xl">
                        {project.title}
                      </h2>

                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {project.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
