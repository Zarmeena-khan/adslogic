"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    label: "Our Location",
    value: "Office 123, Behtreen Complex, Karachi",
    href: "https://maps.google.com/?q=Office+123,+Behtreen+Complex,+Karachi",
    icon: MapPin,
  },
  {
    label: "Phone Number",
    value: "+92 310 3606935",
    href: "tel:+923103606935",
    icon: Phone,
  },
  {
    label: "Email",
    value: "theadslogic@gmail.com",
    href: "mailto:theadslogic@gmail.com",
    icon: Mail,
  },
];

export default function ContactInfo() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[28px] border border-[#FF8A1F]/15 bg-[#171717]/90 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.4),0_0_18px_rgba(255,107,0,0.08)] backdrop-blur-xl sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,132,55,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,118,0,0.12),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/5 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01),rgba(255,107,0,0.06))]" />

      <div className="relative">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF8A1F]">
          Contact
        </div>

        <h3 className="text-3xl font-bold tracking-tight text-white">Get in Touch</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
          Let&apos;s build a smarter growth strategy for your brand with tailored marketing systems that actually convert.
        </p>

        <div className="mt-7 space-y-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 4 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#FF8A1F]/30 hover:bg-[#FF6B00]/5"
              >
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF8A1F]/15 bg-[#FF6B00]/10 text-[#FF8A1F] shadow-[0_0_18px_rgba(255,107,0,0.1)]">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/80 sm:text-[15px]">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
}
