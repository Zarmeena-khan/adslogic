"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] shadow-[0_0_16px_rgba(255,107,0,0.5)]" />
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
            Ready to grow your business? Let&apos;s talk about how we can help you
            achieve your marketing goals.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
