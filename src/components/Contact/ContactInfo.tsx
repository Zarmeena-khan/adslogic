"use client";

import { motion } from "framer-motion";

const contactCards = [
  {
    href: "https://wa.me/",
    label: "WhatsApp",
    value: "Chat with us instantly",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M20.5 12.4A8.3 8.3 0 0 1 12.4 20.5C9.7 20.5 7.2 19.6 5.2 18l-2.7 1 1-2.6A8.3 8.3 0 0 1 3.5 11.6a8.3 8.3 0 1 1 17 0.8Z" />
        <path d="M9.2 8.9c.3-.6.7-.7 1.1-.7.2 0 .5 0 .7.1.3.1.5.4.5.8 0 .5-.3.7-.7 1l-.8.7c-.5.4-.7 1-.5 1.6.5 1.5 2.1 2.3 3.6 2.6.4.1.8.1 1.2-.2.4-.3.7-.7.7-1.2 0-.2-.1-.4-.2-.5l-.4-.5c-.2-.2-.4-.2-.6-.1l-.4.2c-.2.1-.4.2-.7 0-.3-.2-.8-.7-1.1-1.1-.3-.4-.4-.8-.2-1.1l.2-.3c.1-.2.1-.5-.1-.7l-.4-.5c-.2-.2-.5-.2-.8-.1l-.4.2c-.3.2-.5.5-.7.7-.4.6-.3 1.5.2 2.1.7.9 1.7 1.8 2.8 2.5" />
      </svg>
    ),
    accent: "bg-[#25D366]/12 text-[#5CEB93]",
  },
  {
    href: "mailto:hello@adslogic.com",
    label: "Email",
    value: "hello@adslogic.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
        <path d="m5.5 7 6.5 5 6.5-5" />
      </svg>
    ),
    accent: "bg-[#FF6B00]/12 text-[#FFB066]",
  },
  {
    href: "tel:+15550000000",
    label: "Phone",
    value: "+1 (555) 000-0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M5.5 4.5h3l1.1 4.8-1.8 1.7a14.9 14.9 0 0 0 7.6 7.6l1.7-1.8 4.8 1.1v3a2 2 0 0 1-2 2A17.5 17.5 0 0 1 3.5 6.5a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    accent: "bg-[#FF8A1F]/12 text-[#FFB066]",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-5"
    >
      {contactCards.map((card, index) => (
        <motion.a
          key={card.label}
          href={card.href}
          target={card.href.startsWith("http") ? "_blank" : undefined}
          rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: 0.55,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ x: 4, y: -3, scale: 1.01 }}
          className="group flex items-center gap-4 rounded-[24px] border border-[#FF8A1F]/12 bg-[#171717]/90 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.4),0_0_18px_rgba(255,107,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-[#FF8A1F]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.48),0_0_24px_rgba(255,107,0,0.14)]"
        >
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.accent} shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`}>
            {card.icon}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold text-white">{card.label}</h3>
            <p className="mt-1 text-sm text-white/60">{card.value}</p>
          </div>

          <div className="ml-auto text-white/40 transition-colors duration-300 group-hover:text-[#FF8A1F]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
