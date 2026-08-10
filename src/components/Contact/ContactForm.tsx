"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        // Form submission logic here
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B00]/5 to-transparent opacity-50" />

      <div className="relative space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:border-[#FF6B00]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
            placeholder="Your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:border-[#FF6B00]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:border-[#FF6B00]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:border-[#FF6B00]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20"
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full rounded-xl bg-[#FF6B00] px-6 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.6)]"
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
}
