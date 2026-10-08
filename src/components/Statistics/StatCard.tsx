import type { Stat } from "./statsData";

type StatCardProps = {
  stat: Stat;
  index: number;
};

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="ui-card group relative overflow-hidden rounded-2xl border px-6 py-8 hover:border-[#FF6B00]/60 sm:px-8 sm:py-10">
      <div className="relative text-center">
        <div className="mb-2 text-4xl font-bold tracking-tight text-[#FF6B00] sm:text-5xl lg:text-6xl">
          {stat.value}
          {stat.suffix}
        </div>

        <p className="text-sm font-medium text-neutral-700 sm:text-base">
          {stat.label}
        </p>
      </div>
    </div>
  );
}
