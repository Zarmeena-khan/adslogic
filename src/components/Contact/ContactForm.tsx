"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[28px] border border-[#FF8A1F]/12 bg-[#171717]/90 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.45),0_0_22px_rgba(255,107,0,0.08)] backdrop-blur-xl sm:p-8 lg:p-9"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(255,132,55,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,118,0,0.12),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/5 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01),rgba(255,107,0,0.06))]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FF9D50]/80 to-transparent" />

      <div className="relative space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-white/10 bg-[#1B1B1B]/90 px-4 py-3.5 text-white placeholder-white/35 backdrop-blur-sm transition-all duration-300 focus:border-[#FF8A1F]/45 focus:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-white/10 bg-[#1B1B1B]/90 px-4 py-3.5 text-white placeholder-white/35 backdrop-blur-sm transition-all duration-300 focus:border-[#FF8A1F]/45 focus:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-white/10 bg-[#1B1B1B]/90 px-4 py-3.5 text-white placeholder-white/35 backdrop-blur-sm transition-all duration-300 focus:border-[#FF8A1F]/45 focus:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-xl border border-white/10 bg-[#1B1B1B]/90 px-4 py-3.5 text-white placeholder-white/35 backdrop-blur-sm transition-all duration-300 focus:border-[#FF8A1F]/45 focus:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
            placeholder="Tell us about your project..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="w-full rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] px-6 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(255,107,0,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)]"
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
}
