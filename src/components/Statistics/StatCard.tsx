"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Stat } from "./statsData";

type StatCardProps = {
  stat: Stat;
  index: number;
  isSectionInView: boolean;
};

export default function StatCard({
  stat,
  index,
  isSectionInView,
}: StatCardProps) {
  const motionValue = useSpring(0, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });

  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  useEffect(() => {
    if (isSectionInView) {
      const timeout = setTimeout(() => {
        motionValue.set(stat.value);
      }, index * 120);
      return () => clearTimeout(timeout);
    }

    motionValue.set(0);
  }, [isSectionInView, motionValue, stat.value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/30 hover:shadow-[0_0_24px_rgba(255,107,0,0.15)] sm:px-8 sm:py-10"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B00]/0 to-[#FF6B00]/0 opacity-0 transition-opacity duration-300 group-hover:from-[#FF6B00]/3 group-hover:to-transparent group-hover:opacity-100" />

      <div className="relative text-center">
        <div className="mb-2 text-4xl font-bold tracking-tight text-[#FF6B00] drop-shadow-[0_0_12px_rgba(255,107,0,0.4)] sm:text-5xl lg:text-6xl">
          {displayValue}
          {stat.suffix}
        </div>

        <p className="text-sm font-medium text-white/70 sm:text-base">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}
