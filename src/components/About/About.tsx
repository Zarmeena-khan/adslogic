"use client";

import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import { aboutCards } from "./aboutData";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-4 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-44"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={headingVariants}
            className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-[#FF8A1F]/20 bg-[#1A120D]/80 px-4 py-2 shadow-[0_0_18px_rgba(255,122,38,0.12)] backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF8A1F] shadow-[0_0_14px_rgba(255,138,31,0.9)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FFB066]">
              Who We Are
            </span>
          </motion.div>

          <motion.h2
            variants={headingVariants}
            className="text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl"
          >
            About AdsLogic
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
          >
            We are a premium AI-powered digital marketing agency specializing in
            data-driven campaigns that deliver exceptional results. Our team
            combines cutting-edge technology with proven marketing strategies to
            help businesses scale efficiently and maximize their ROI.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
          className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-7"
        >
          {aboutCards.map((card, index) => (
            <AboutCard key={card.title} card={card} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
