"use client";

import { motion } from "framer-motion";
import type { AboutCard as AboutCardType } from "./aboutData";

type AboutCardProps = {
  card: AboutCardType;
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
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
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="M4.22 4.22l2.12 2.12" />
          <path d="M17.66 17.66l2.12 2.12" />
          <path d="M2 12h3" />
          <path d="M19 12h3" />
          <path d="M4.22 19.78l2.12-2.12" />
          <path d="M17.66 6.34l2.12-2.12" />
        </svg>
      );
    case "Our Vision":
      return (
        <svg {...iconProps}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "Why Choose Us":
      return (
        <svg {...iconProps}>
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function AboutCard({ card, index }: AboutCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1A1A] via-[#151515] to-[#111111] p-7 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md transition-shadow duration-500 hover:border-[#FF6B00]/45 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6),0_0_36px_rgba(255,107,0,0.18)] sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B00]/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-6 flex items-center justify-between">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl text-[#FF8A1F] transition-colors duration-300 group-hover:text-white"
            style={{
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(to bottom right, #1A1A1A, #0F0F0F), linear-gradient(135deg, #FF6B00, #FF8A1F)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            {getLineIcon(card.title)}
          </div>
          <span className="text-xs font-semibold tracking-[0.18em] text-white/30">
            0{index + 1}
          </span>
        </div>

        <div className="mb-4 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] shadow-[0_0_10px_rgba(255,107,0,0.45)] transition-all duration-500 group-hover:w-14 group-hover:shadow-[0_0_16px_rgba(255,107,0,0.65)]" />

        <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FF8A1F] sm:text-2xl">
          {card.title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-white/75 sm:text-base sm:leading-7">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}
