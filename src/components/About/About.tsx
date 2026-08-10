"use client";

import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import { aboutCards } from "./aboutData";

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.25 },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen px-4 pt-32 pb-24 sm:px-6 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] shadow-[0_0_16px_rgba(255,107,0,0.5)]" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF8A1F]">
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            About AdsLogic
          </h2>
          <p className="mx-auto mt-6 max-w-[720px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            We are a premium AI-powered digital marketing agency specializing in
            data-driven campaigns that deliver exceptional results. Our team
            combines cutting-edge technology with proven marketing strategies to
            help businesses scale efficiently and maximize their ROI.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={gridVariants}
          className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-3 lg:gap-7"
        >
          {aboutCards.map((card, index) => (
            <AboutCard key={card.title} card={card} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
