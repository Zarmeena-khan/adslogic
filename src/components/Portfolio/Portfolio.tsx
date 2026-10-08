"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clientData = [
  { image: "/client1.png.jpeg", title: "Social Media Management", description: "Proven Results on Lead Generation through Meta Ads" },
  { image: "/client2.png.jpeg", title: "Daar Enterprises", description: "Social Media Management · Proven Results on Lead Generation through Meta Ads" },
  { image: "/client3.png.jpeg", title: "Website Designing", description: "Custom website design & development" },
  { image: "/client4.png.jpeg", title: "Masun Chemicals", description: "Social Media Management · Proven Results on Lead Generation through Meta Ads" },
];

const uniqueCount = clientData.length;

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const first = track.firstElementChild as HTMLElement | null;
      const second = first?.nextElementSibling as HTMLElement | null;
      if (!first) return;
      const gap = second ? second.offsetLeft - first.offsetLeft - first.offsetWidth : 24;
      setCardWidth(first.offsetWidth + gap);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goNext = () => {
    setCurrentIndex((index) => Math.min(index + 1, uniqueCount - 1));
  };

  const goPrev = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  return (
    <section id="portfolio" className="relative min-h-screen bg-[#FFF8F2] px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">Portfolio</h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">Explore our successful projects and see how we&apos;ve helped businesses achieve their goals.</p>
        </div>

        <div className="relative mt-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FF6B00]/25 bg-[#FFF1E6] text-[#FF6B00] hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/15"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex-1 overflow-hidden">
              <div
                ref={trackRef}
                className="flex w-max items-stretch gap-6 sm:gap-8"
                style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
              >
                {clientData.map((client) => (
                  <div key={client.title} className="flex-shrink-0 w-[280px] sm:w-[320px]">
                    <div className="ui-card group/card relative flex h-full flex-col rounded-3xl border p-5 text-center hover:border-[#FF6B00]/60 sm:p-6">
                      <div className="relative mb-5 flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FFF8F2] p-5 sm:h-44">
                        <Image
                          src={client.image}
                          alt={client.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="relative text-sm font-bold text-[#111111] sm:text-base">{client.title}</h3>
                      <p className="relative mt-2 text-xs text-neutral-600 sm:text-sm">{client.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FF6B00]/25 bg-[#FFF1E6] text-[#FF6B00] hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/15"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
