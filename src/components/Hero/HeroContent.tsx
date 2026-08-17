"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT_FORM_ID } from "@/lib/contactNavigation";

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function scrollToContactForm() {
  document
    .getElementById(CONTACT_FORM_ID)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HeroContent() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
      <div className="pointer-events-auto mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.h1
          initial={entrance.hidden}
          animate={entrance.visible}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          AI-Powered{" "}
          <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] bg-clip-text text-transparent">
            Marketing Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={entrance.hidden}
          animate={entrance.visible}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base md:text-lg"
        >
          Meta Ads • Google Ads • Websites • SEO • AI Automation
        </motion.p>

        <motion.div
          initial={entrance.hidden}
          animate={entrance.visible}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
        >
          <Link
            href={`/contact#${CONTACT_FORM_ID}`}
            scroll={false}
            onClick={(event) => {
              event.preventDefault();
              scrollToContactForm();
            }}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#FF6B00] px-8 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,107,0,0.4)] backdrop-blur-sm transition-shadow hover:shadow-[0_0_40px_rgba(255,107,0,0.55)] sm:px-10 sm:text-base"
          >
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center"
            >
              Book Free Consultation
            </motion.span>
          </Link>

          <motion.a
            href="https://wa.me/923103606935"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-colors hover:border-[#FF6B00]/50 hover:bg-white/10 sm:px-10 sm:text-base"
          >
            WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default memo(HeroContent);
