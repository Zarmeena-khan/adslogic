"use client";

import { motion } from "framer-motion";
import type { AboutCard as AboutCardType } from "./aboutData";

type AboutCardProps = {
  card: AboutCardType;
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function getLineIcon(title: string) {
  const iconProps = {
    className: "h-7 w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (title) {
    case "Our Mission":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
          <path d="M12 2.5v2.5" />
          <path d="M12 19v2.5" />
          <path d="M4.5 4.5l1.8 1.8" />
          <path d="M17.7 17.7l1.8 1.8" />
          <path d="M2.5 12h2.5" />
          <path d="M19 12h2.5" />
          <path d="M4.5 19.5l1.8-1.8" />
          <path d="M17.7 6.3l1.8-1.8" />
        </svg>
      );
    case "Our Vision":
      return (
        <svg {...iconProps}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
      );
    case "Why Choose Us":
      return (
        <svg {...iconProps}>
          <path d="M12 2.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 2.5Z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default function AboutCard({ card, index }: AboutCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -10,
        scale: 1.01,
        transition: { type: "spring", stiffness: 260, damping: 22 },
      }}
      className="group relative h-full overflow-hidden rounded-[28px] border border-[#FF8A1F]/12 bg-[#1A1A1A]/95 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.45),0_0_26px_rgba(255,107,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-[#FF8A1F]/30 hover:shadow-[0_22px_52px_rgba(0,0,0,0.52),0_0_30px_rgba(255,107,0,0.16)] sm:p-7"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(255,132,55,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,118,0,0.14),transparent_38%)] opacity-90" />
      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/5 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01),rgba(255,107,0,0.05))]" />
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#FF9D50]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_rgba(255,123,0,0.12),transparent_58%)]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF8A1F]/20 bg-[linear-gradient(135deg,rgba(255,122,38,0.18),rgba(255,255,255,0.02))] text-[#FF9F4A] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_18px_rgba(255,123,0,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:text-white">
            {getLineIcon(card.title)}
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
            0{index + 1}
          </span>
        </div>

        <div className="mb-5 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#FF8A1F] to-[#FFB066] shadow-[0_0_14px_rgba(255,122,38,0.5)] transition-all duration-500 group-hover:w-16" />

        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#FFB066] sm:text-[1.7rem]">
          {card.title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-white/75 sm:text-[15px] sm:leading-7">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}
