"use client";

import { memo } from "react";
import Link from "next/link";
import { CONTACT_FORM_ID } from "@/lib/contactNavigation";

function scrollToContactForm() {
  document
    .getElementById(CONTACT_FORM_ID)
    ?.scrollIntoView({ behavior: "auto", block: "start" });
}

function HeroContent() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
      <div className="ui-card pointer-events-auto mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] border px-6 py-10 text-center backdrop-blur-xl sm:px-12 sm:py-14">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF6B00]">
          AdsLogic
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#111111] sm:text-4xl md:text-5xl lg:text-6xl">
          AI-Powered{" "}
          <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] bg-clip-text text-transparent">
            Marketing Solutions
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:mt-6 sm:text-base md:text-lg">
          Meta Ads • Google Ads • Websites • SEO • AI Automation
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href={`/contact#${CONTACT_FORM_ID}`}
            scroll={false}
            onClick={(event) => {
              event.preventDefault();
              scrollToContactForm();
            }}
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] px-8 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(255,107,0,0.35)] sm:px-10 sm:text-base"
          >
            Book Free Consultation
          </Link>

          <a
            href="https://wa.me/923103606935"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#FF6B00]/40 bg-white px-8 text-sm font-semibold text-[#FF8A1F] hover:bg-[#FF6B00]/10 sm:px-10 sm:text-base"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroContent);
