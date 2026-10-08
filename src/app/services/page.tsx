"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Megaphone,
  MonitorSmartphone,
  Search,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const services = [
  {
    title: "Meta Ads",
    href: "/services/meta-ads",
    description:
      "High-converting social campaigns built to drive leads, sales, and stronger brand demand.",
    icon: Megaphone,
  },
  {
    title: "Google Ads",
    href: "/services/google-ads",
    description:
      "Intent-driven campaigns designed to capture qualified demand at the exact buying moment.",
    icon: Search,
  },
  {
    title: "Website Development",
    href: "/services/website-development",
    description:
      "Premium websites engineered for trust, performance, and conversion from first click to final action.",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO",
    href: "/services/seo",
    description:
      "Organic growth systems that improve visibility, rankings, and sustainable long-term traffic.",
    icon: TrendingUp,
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    description:
      "Content and engagement strategies that build authority, community, and consistent growth.",
    icon: Megaphone,
  },
  {
    title: "AI Automation",
    href: "/services/ai-automation",
    description:
      "Smart workflows that remove busywork, improve speed, and scale your marketing operations.",
    icon: Bot,
  },
];

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen bg-[#FFF6EF] text-[#111111]">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden border-b border-[#FF6B00]/15 bg-[#FFF1E6]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,0,0.22),transparent_42%)]" />
          <div className="absolute inset-x-0 top-6 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />
              <h1 className="text-4xl font-black tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">
                High-performance digital growth solutions designed to help ambitious brands generate demand, convert better, and scale smarter.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="ui-card group relative overflow-hidden rounded-3xl border p-8 hover:border-[#FF6B00]/60"
                  >
                    <div className="relative">
                      <div className="relative mb-8 inline-block">
                        <div
                          className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl text-[#FF6B00] group-hover:text-[#FF8A1F]"
                          style={{
                            border: "1px solid transparent",
                            backgroundImage:
                              "linear-gradient(to bottom right, #FFFFFF, #FFF3E8), linear-gradient(135deg, #FF6B00, #FF8A1F)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                          }}
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>

                      <div className="mb-3 h-[3px] w-[40px] rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />

                      <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#111111] group-hover:text-[#FF8A1F]">
                        {service.title}
                      </h2>

                      <p className="text-base leading-relaxed text-neutral-600">
                        {service.description}
                      </p>

                      <Link
                        href={service.href}
                        className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-2 text-sm font-medium text-[#FF6B00] hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/15"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
