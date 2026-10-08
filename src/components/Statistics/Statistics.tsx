import StatCard from "./StatCard";
import MarqueeBackground from "./MarqueeBackground";
import { stats } from "./statsData";

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="relative overflow-hidden bg-[#FFF1E6] px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      <MarqueeBackground />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Our Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
