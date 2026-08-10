"use client";

import { motion } from "framer-motion";
import type { Project } from "./portfolioData";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-shadow duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_0_32px_rgba(255,107,0,0.2)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B00]/0 to-[#FF6B00]/0 opacity-0 transition-opacity duration-300 group-hover:from-[#FF6B00]/8 group-hover:to-transparent group-hover:opacity-100" />

      {/* Image Placeholder */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">🎨</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <span className="mb-2 inline-block rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1 text-xs font-medium text-[#FF8A1F]">
          {project.category}
        </span>

        <h3 className="text-lg font-semibold text-white sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}
