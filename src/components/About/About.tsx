import AboutCard from "./AboutCard";
import { aboutCards } from "./aboutData";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 bg-[#FFF8F2] px-4 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-44"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-[#FF8A1F]/20 bg-[#FFF7F0] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF8A1F]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF6B00]">
              Who We Are
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#111111] sm:text-4xl lg:text-5xl">
            About AdsLogic
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            We are a premium AI-powered digital marketing agency specializing in
            data-driven campaigns that deliver exceptional results. Our team
            combines cutting-edge technology with proven marketing strategies to
            help businesses scale efficiently and maximize their ROI.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-7">
          {aboutCards.map((card, index) => (
            <AboutCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
