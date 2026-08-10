"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "./testimonialsData";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-shadow duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_0_32px_rgba(255,107,0,0.18)] sm:p-10"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B00]/0 to-[#FF6B00]/0 opacity-0 transition-opacity duration-300 group-hover:from-[#FF6B00]/5 group-hover:to-transparent group-hover:opacity-100" />

      <div className="relative flex-1">
        {/* Quote Icon */}
        <div className="mb-4 text-3xl text-[#FF6B00]/40">"</div>

        {/* Testimonial Text */}
        <p className="mb-6 text-sm leading-relaxed text-white/80 sm:text-base">
          {testimonial.text}
        </p>

        {/* Star Rating */}
        <div className="mb-6 flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-lg text-[#FF6B00]">
              ★
            </span>
          ))}
        </div>

        {/* Client Info */}
        <div className="mt-auto">
          <h3 className="text-lg font-semibold text-white">
            {testimonial.name}
          </h3>
          <p className="mt-1 text-sm text-white/60">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
