"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { ServicePageContent } from "./servicePageData";

const easeCurve = [0.22, 1, 0.36, 1] as const;

const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: easeCurve },
};

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] shadow-[0_0_16px_rgba(255,107,0,0.5)]" />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF8A1F]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function ServicePageLayout({
  service,
}: {
  service: ServicePageContent;
}) {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#111111]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,0,0.18),transparent_42%)]" />
          <div className="absolute inset-x-0 top-6 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeCurve }}
              className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
            >
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/8 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#FF8A1F]">
                  {service.subtitle}
                </div>
                <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                  {service.tagline}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,107,0,0.3)] transition hover:translate-y-[-1px] hover:shadow-[0_0_28px_rgba(255,107,0,0.45)]"
                  >
                    Book a strategy call
                  </Link>
                  <a
                    href="https://wa.me/1234567890?text=Hi%20AdsLogic%2C%20I%20want%20to%20talk%20about%20growth."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#FF6B00]/50 hover:text-[#FF8A1F]"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: easeCurve }}
                className="relative"
              >
                <div className="absolute inset-4 rounded-[2rem] bg-[#FF6B00]/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#1A1A1A] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B00]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                      Growth System
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      ["Campaign Reach", "+42%"],
                      ["Qualified Leads", "+31%"],
                      ["ROAS", "4.8x"],
                    ].map(([label, value], index) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/8 bg-white/[0.02] p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-white/60">{label}</span>
                          <span className="text-base font-semibold text-[#FF8A1F]">
                            {value}
                          </span>
                        </div>
                        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${70 + index * 10}%` }}
                            transition={{ duration: 0.8, delay: 0.35 + index * 0.15 }}
                            className="h-full rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div {...sectionReveal}>
              <SectionHeader
                eyebrow="Overview"
                title="A focused strategy for measurable growth"
                description={service.overview}
              />
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-7xl">
            <motion.div {...sectionReveal}>
              <SectionHeader
                eyebrow="Process"
                title="How we work"
                description="A clear system that balances strategy, creative, optimization, and tracking to improve results without guesswork."
              />
            </motion.div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative rounded-[1.75rem] border border-white/[0.06] bg-gradient-to-br from-[#1A1A1A] to-[#111111] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B00]/10 text-sm font-bold text-[#FF8A1F] ring-1 ring-[#FF6B00]/30">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div {...sectionReveal}>
              <SectionHeader
                eyebrow="Why choose us"
                title="Benefits that turn strategy into traction"
                description="We focus on performance, clarity, and momentum so your marketing system works harder without unnecessary complexity."
              />
            </motion.div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-md"
                >
                  <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF6B00]/20 to-[#FF8A1F]/10 ring-1 ring-[#FF6B00]/30" />
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-7xl">
            <motion.div {...sectionReveal}>
              <SectionHeader
                eyebrow="Tools"
                title="Technologies & tools we use"
                description="A practical stack built around performance, visibility, and clean execution across your funnel."
              />
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {service.tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/8 px-4 py-2 text-sm text-white/85 shadow-[0_0_18px_rgba(255,107,0,0.1)]"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: easeCurve }}
              className="overflow-hidden rounded-[2rem] border border-[#FF6B00]/20 bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#1A1A1A] p-8 text-center shadow-[0_25px_60px_rgba(0,0,0,0.4)] sm:p-10"
            >
              <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {service.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                {service.ctaText}
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,107,0,0.3)] transition hover:translate-y-[-1px] hover:shadow-[0_0_28px_rgba(255,107,0,0.45)]"
                >
                  Let’s grow your business
                </Link>
                <a
                  href="https://wa.me/1234567890?text=Hi%20AdsLogic%2C%20I%20want%20to%20talk%20about%20growth."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#FF6B00]/40 hover:text-[#FF8A1F]"
                >
                  WhatsApp us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
