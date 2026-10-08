"use client";

import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#FFF6EF]">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#FF6B00]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-96 w-96 rounded-full bg-[#FF8A1F]/18 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.18)_0%,transparent_58%)]" />
      <HeroContent />
    </section>
  );
}
