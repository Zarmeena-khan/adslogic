import type { AboutCard as AboutCardType } from "./aboutData";

type AboutCardProps = {
  card: AboutCardType;
  index: number;
};

function getLineIcon(title: string) {
  const iconProps = {
    className: "h-7 w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (title) {
    case "Our Mission":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
          <path d="M12 2.5v2.5" />
          <path d="M12 19v2.5" />
          <path d="M4.5 4.5l1.8 1.8" />
          <path d="M17.7 17.7l1.8 1.8" />
          <path d="M2.5 12h2.5" />
          <path d="M19 12h2.5" />
          <path d="M4.5 19.5l1.8-1.8" />
          <path d="M17.7 6.3l1.8-1.8" />
        </svg>
      );
    case "Our Vision":
      return (
        <svg {...iconProps}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
      );
    case "Why Choose Us":
      return (
        <svg {...iconProps}>
          <path d="M12 2.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 2.5Z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default function AboutCard({ card, index }: AboutCardProps) {
  return (
    <article className="ui-card group relative h-full overflow-hidden rounded-[28px] border p-6 sm:p-7">
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,138,31,0.08),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#FF9D50]/80 to-transparent" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div className="ui-card-inner flex h-14 w-14 items-center justify-center rounded-2xl border text-[#FF6B00]">
            {getLineIcon(card.title)}
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
            0{index + 1}
          </span>
        </div>

        <div className="mb-5 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#FF8A1F] to-[#FFB066]" />

        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#111111] group-hover:text-[#FF8A1F] sm:text-[1.7rem]">
          {card.title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600 sm:text-[15px] sm:leading-7">
          {card.description}
        </p>
      </div>
    </article>
  );
}
