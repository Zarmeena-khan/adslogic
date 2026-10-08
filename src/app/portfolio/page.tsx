"use client";

import { useState } from "react";
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
    <div className="min-h-screen bg-[#FFF6EF] text-[#111111]">
      <Navbar />

      <main className="pt-28 sm:pt-32">
        <section className="relative min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />
              <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
                Our Portfolio
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                Explore our successful projects and see how we&apos;ve helped businesses
                achieve their goals.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium sm:px-6 sm:py-2.5 sm:text-base ${
                    activeFilter === category
                      ? "border-[#FF6B00] bg-[#FF6B00] text-white"
                      : "border-black/15 bg-white text-neutral-600 hover:border-[#FF6B00]/50 hover:text-[#111111]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="ui-card group relative overflow-hidden rounded-2xl border hover:border-[#FF6B00]/60"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#FFF8F2] via-[#FFE9D6] to-[#FFD8B8]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.08)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🎨</div>
                    </div>
                  </div>

                  <div className="relative p-6">
                    <span className="mb-2 inline-block rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1 text-xs font-medium text-[#FF6B00]">
                      {project.category}
                    </span>

                    <h2 className="text-lg font-semibold text-[#111111] sm:text-xl">
                      {project.title}
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
