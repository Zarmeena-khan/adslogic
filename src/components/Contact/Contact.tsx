"use client";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { useContactScroll } from "./useContactScroll";
import { CONTACT_FORM_ID } from "@/lib/contactNavigation";

export default function Contact() {
  useContactScroll();

  return (
    <section
      id="contact"
      className="relative min-h-screen scroll-mt-28 bg-[#FFF8F2] px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-[#111111] sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base lg:text-lg">
            Ready to grow your business? Let&apos;s talk about how we can help you
            achieve your marketing goals.
          </p>
        </div>

        <div
          id={CONTACT_FORM_ID}
          className="mt-12 grid grid-cols-1 gap-8 scroll-mt-28 sm:mt-16 lg:grid-cols-2 lg:gap-10"
        >
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
