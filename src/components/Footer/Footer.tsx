"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/#contact" },
];

const contactDetails = [
  { label: "+92 310 3606935", href: "tel:+923103606935", icon: Phone },
  { label: "theadslogic@gmail.com", href: "mailto:theadslogic@gmail.com", icon: Mail },
  { label: "Office 123, Behtreen Complex, Karachi", href: "https://maps.google.com/?q=Office+123,+Behtreen+Complex,+Karachi", icon: MapPin },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/adslogic", icon: Share2, label: "@adslogic" },
  { name: "Instagram", href: "https://instagram.com/adslogic", icon: Camera, label: "@adslogic" },
  { name: "LinkedIn", href: "https://linkedin.com/company/adslogic", icon: BriefcaseBusiness, label: "Ads Logic" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,107,0,0.18),_transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <a
              href="/"
              className="inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90"
            >
              <span className="relative block h-10 w-[200px] overflow-hidden sm:h-12 sm:w-[250px]">
                <Image
                  src="/AdsLogic-Logo.png.png"
                  alt="AdsLogic"
                  fill
                  sizes="(max-width: 640px) 200px, 250px"
                  className="object-cover object-center"
                />
              </span>
            </a>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              Performance-focused digital marketing solutions designed to help brands grow with clarity,
              consistency, and measurable results.
            </p>

            <div className="flex items-center gap-2 text-sm text-white/75">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B00] shadow-[0_0_14px_rgba(255,107,0,0.75)]" />
              <span>Owner: Mohsin Javed</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#FF6B00]">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-white/65 transition-all duration-300 hover:text-[#FF6B00]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#FF6B00]">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm">
              {contactDetails.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-3 text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/5 text-[#FF6B00] shadow-[0_0_18px_rgba(255,107,0,0.12)] transition-all duration-300 group-hover:border-[#FF6B00]/60 group-hover:bg-[#FF6B00]/10">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-6">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#FF6B00]">
              Follow Us
            </h4>

            <div className="space-y-3">
              {socialLinks.map(({ name, href, icon: Icon, label }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-3 py-2.5 text-white/75 transition-all duration-300 hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/8 hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#111111] text-[#FF6B00] shadow-[0_0_14px_rgba(255,107,0,0.12)] transition-colors duration-300 group-hover:border-[#FF6B00]/50">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{name}</span>
                  </div>

                  <span className="text-[11px] text-white/45 transition-colors duration-300 group-hover:text-[#FF6B00]">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 border-t border-white/10 pt-6"
        >
          <p className="text-center text-sm text-white/45">
            © 2025 AdsLogic. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
