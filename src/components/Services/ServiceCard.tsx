import type { Service } from "./servicesData";

type ServiceCardProps = {
  service: Service;
  index: number;
};

const getServiceIcon = (title: string) => {
  const iconProps = {
    className: "w-8 h-8",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (title) {
    case "Meta Ads":
      return (
        <svg {...iconProps}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
          <path d="M9 8l3 3 3-3" />
        </svg>
      );
    case "Google Ads":
      return (
        <svg {...iconProps}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      );
    case "Website Development":
      return (
        <svg {...iconProps}>
          <path d="M16 18l4-4-4-4" />
          <path d="M8 6L4 10l4 4" />
          <path d="M14.5 3.5l-5 17" />
        </svg>
      );
    case "SEO":
      return (
        <svg {...iconProps}>
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <circle cx="19" cy="9" r="2" fill="currentColor" />
        </svg>
      );
    case "Social Media Marketing":
      return (
        <svg {...iconProps}>
          <path d="M18 8a3 3 0 0 1-3 3H9a3 3 0 0 1 0-6h6a3 3 0 0 1 3 3z" />
          <path d="M9 16a3 3 0 0 0 3 3h3a3 3 0 0 0 0-6h-6a3 3 0 0 0-3 3z" />
          <path d="M21 12h-3M6 12H3" />
        </svg>
      );
    case "AI Automation":
      return (
        <svg {...iconProps}>
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h-1.73c.34.6.73 1.26.73 2a2 2 0 1 1-2-2c.74 0 1.39.4 1.73 1H18a5 5 0 0 0-5-5v-.27c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V9a5 5 0 0 0-5 5H4.27A2 2 0 0 0 4 13a2 2 0 1 0 2 2 2 2 0 0 0-.73-1H7a7 7 0 0 1 7-7V5.73A2 2 0 0 1 13 4a2 2 0 0 1 2-2z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      );
  }
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const serviceHref = {
    "Meta Ads": "/services/meta-ads",
    "Google Ads": "/services/google-ads",
    "Website Development": "/services/website-development",
    SEO: "/services/seo",
    "Social Media Marketing": "/services/social-media-marketing",
    "AI Automation": "/services/ai-automation",
  }[service.title];

  return (
    <article className="ui-card group relative overflow-hidden rounded-3xl border p-8 hover:border-[#FF6B00]/60 sm:p-9 lg:p-10">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FF6B00]/18 blur-2xl" />
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
            {getServiceIcon(service.title)}
          </div>
        </div>

        <div className="mb-3 h-[3px] w-[40px] rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />

        <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#111111] group-hover:text-[#FF8A1F]">
          {service.title}
        </h3>

        <p className="text-base leading-relaxed text-neutral-600">
          {service.description}
        </p>

        <a
          href={serviceHref}
          className="mt-7 inline-flex items-center justify-center rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-2.5 text-sm font-semibold text-[#FF6B00] hover:border-[#FF6B00]/60 hover:bg-[#FF6B00]/15"
        >
          View Details
        </a>
      </div>
    </article>
  );
}
