"use client";

import { motion } from "framer-motion";
import type { Service } from "./servicesData";

type ServiceCardProps = {
  service: Service;
  index: number;
};

// Custom SVG Icons for each service
const getServiceIcon = (title: string) => {
  const iconProps = {
    className: "w-8 h-8",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (title) {
    case "Meta Ads":
      return (
        <svg {...iconProps}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
          <path d="M9 8l3 3 3-3" />
        </svg>
      );
    case "Google Ads":
      return (
        <svg {...iconProps}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      );
    case "Website Development":
      return (
        <svg {...iconProps}>
          <path d="M16 18l4-4-4-4" />
          <path d="M8 6L4 10l4 4" />
          <path d="M14.5 3.5l-5 17" />
        </svg>
      );
    case "SEO":
      return (
        <svg {...iconProps}>
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <circle cx="19" cy="9" r="2" fill="currentColor" />
        </svg>
      );
    case "Social Media Marketing":
      return (
        <svg {...iconProps}>
          <path d="M18 8a3 3 0 0 1-3 3H9a3 3 0 0 1 0-6h6a3 3 0 0 1 3 3z" />
          <path d="M9 16a3 3 0 0 0 3 3h3a3 3 0 0 0 0-6h-6a3 3 0 0 0-3 3z" />
          <path d="M21 12h-3M6 12H3" />
        </svg>
      );
    case "AI Automation":
      return (
        <svg {...iconProps}>
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h-1.73c.34.6.73 1.26.73 2a2 2 0 1 1-2-2c.74 0 1.39.4 1.73 1H18a5 5 0 0 0-5-5v-.27c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V9a5 5 0 0 0-5 5H4.27A2 2 0 0 0 4 13a2 2 0 1 0 2 2 2 2 0 0 0-.73-1H7a7 7 0 0 1 7-7V5.73A2 2 0 0 1 13 4a2 2 0 0 1 2-2z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      );
  }
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Alternating rotation: odd cards rotate left, even cards rotate right
  const isOdd = index % 2 === 1;
  const initialRotation = isOdd ? -1.5 : 1.5;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
        rotate: initialRotation
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: initialRotation
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#1A1A1A] to-[#111111] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:border-[#FF6B00]/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_40px_rgba(255,107,0,0.25)] sm:p-9 lg:p-10"
    >
      {/* Glowing orange border that intensifies on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 shadow-[inset_0_0_0_1px_rgba(255,107,0,0.3),0_0_20px_rgba(255,107,0,0.2)] transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content wrapper */}
      <div className="relative">
        {/* Large Icon Container (72px) with radial glow */}
        <div className="relative mb-8 inline-block">
          {/* Soft orange radial glow behind icon (blurred) */}
          <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-gradient-radial from-[#FF6B00]/30 via-[#FF6B00]/10 to-transparent opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          {/* Icon container - 72px with gradient border */}
          <div
            className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] text-white transition-all duration-500 group-hover:text-[#FF8A1F]"
            style={{
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(to bottom right, #1A1A1A, #0A0A0A), linear-gradient(135deg, #FF6B00, #FF8A1F)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            {getServiceIcon(service.title)}
          </div>
        </div>

        {/* Orange gradient bar ABOVE title (3px × 40px) */}
        <div className="mb-3 h-[3px] w-[40px] rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] shadow-[0_0_10px_rgba(255,107,0,0.5)] transition-all duration-500 group-hover:w-[60px] group-hover:shadow-[0_0_20px_rgba(255,107,0,0.8)]" />

        {/* Title - bold text-2xl */}
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FF8A1F]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-base leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
}
