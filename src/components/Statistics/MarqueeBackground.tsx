"use client";

import { motion } from "framer-motion";

const MARQUEE_TEXT = "AdsLogic - AI-Powered Marketing Solutions";

function MarqueeTrack() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className="px-8 text-[clamp(3rem,10vw,7rem)] font-bold uppercase tracking-tight text-white/[0.04] sm:px-12"
        >
          {MARQUEE_TEXT}
          <span className="mx-6 text-[#FF6B00]/[0.06]">•</span>
        </span>
      ))}
    </>
  );
}

export default function MarqueeBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-y-0 left-0 flex items-center">
        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="flex">
            <MarqueeTrack />
          </div>
          <div className="flex">
            <MarqueeTrack />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
