"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, x: 4 }}
        className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_0_24px_rgba(255,107,0,0.15)]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#25D366]/10 text-2xl">
          💬
        </div>
        <div>
          <h3 className="font-semibold text-white">WhatsApp</h3>
          <p className="text-sm text-white/60">Chat with us instantly</p>
        </div>
        <div className="ml-auto text-white/40 transition-colors group-hover:text-[#FF6B00]">
          →
        </div>
      </motion.a>

      {/* Email */}
      <motion.a
        href="mailto:hello@adslogic.com"
        whileHover={{ scale: 1.02, x: 4 }}
        className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_0_24px_rgba(255,107,0,0.15)]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF6B00]/10 text-2xl">
          📧
        </div>
        <div>
          <h3 className="font-semibold text-white">Email</h3>
          <p className="text-sm text-white/60">hello@adslogic.com</p>
        </div>
        <div className="ml-auto text-white/40 transition-colors group-hover:text-[#FF6B00]">
          →
        </div>
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:+15550000000"
        whileHover={{ scale: 1.02, x: 4 }}
        className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_0_24px_rgba(255,107,0,0.15)]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF6B00]/10 text-2xl">
          📞
        </div>
        <div>
          <h3 className="font-semibold text-white">Phone</h3>
          <p className="text-sm text-white/60">+1 (555) 000-0000</p>
        </div>
        <div className="ml-auto text-white/40 transition-colors group-hover:text-[#FF6B00]">
          →
        </div>
      </motion.a>
    </motion.div>
  );
}
