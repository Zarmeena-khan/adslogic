import Link from "next/link";
import {
  Target,
  Repeat,
  BarChart3,
  FlaskConical,
  Search,
  Zap,
  Smartphone,
  Palette,
  Shield,
  Clock,
  TrendingUp,
  RefreshCw,
  Gauge,
  DollarSign,
  UserCheck,
  Eye,
  Heart,
  Database,
} from "lucide-react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { CONTACT_PAGE_HREF } from "@/lib/contactNavigation";
import type { ServicePageContent } from "./servicePageData";

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
      <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF8A1F]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

const getBenefitIcon = (title: string) => {
  const iconProps = {
    className: "h-5 w-5 text-[#FF8A1F]",
  };

  switch (title) {
    case "Faster Lead Generation":
      return <Zap {...iconProps} />;
    case "Stronger Retargeting":
      return <Repeat {...iconProps} />;
    case "Clear ROI Visibility":
      return <BarChart3 {...iconProps} />;
    case "Creative Testing":
      return <FlaskConical {...iconProps} />;
    case "High-Intent Traffic":
      return <Search {...iconProps} />;
    case "Better Cost Efficiency":
      return <TrendingUp {...iconProps} />;
    case "Faster Lead Capture":
      return <Zap {...iconProps} />;
    case "Continuous Improvement":
      return <RefreshCw {...iconProps} />;
    case "Brand Elevation":
      return <Palette {...iconProps} />;
    case "Higher Conversions":
      return <TrendingUp {...iconProps} />;
    case "Mobile-First Experience":
      return <Smartphone {...iconProps} />;
    case "Performance Focus":
      return <Gauge {...iconProps} />;
    case "Lower Acquisition Costs":
      return <DollarSign {...iconProps} />;
    case "Better Search Visibility":
      return <Search {...iconProps} />;
    case "More Qualified Leads":
      return <UserCheck {...iconProps} />;
    case "Long-Term Growth":
      return <TrendingUp {...iconProps} />;
    case "Stronger Brand Recall":
      return <Eye {...iconProps} />;
    case "Audience Trust":
      return <Shield {...iconProps} />;
    case "More Engagement":
      return <Heart {...iconProps} />;
    case "Qualified Demand":
      return <Target {...iconProps} />;
    case "More Time Back":
      return <Clock {...iconProps} />;
    case "Faster Response Times":
      return <Zap {...iconProps} />;
    case "Better Data Flow":
      return <Database {...iconProps} />;
    case "Scalable Ops":
      return <TrendingUp {...iconProps} />;
    default:
      return <Target {...iconProps} />;
  }
};

export default function ServicePageLayout({
  service,
}: {
  service: ServicePageContent;
}) {
  return (
    <div className="min-h-screen bg-[#FFF6EF] text-[#111111]">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden border-b border-[#FF6B00]/15 bg-[#FFF1E6]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,0,0.22),transparent_42%)]" />
          <div className="absolute inset-x-0 top-6 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/8 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#FF8A1F]">
                  {service.subtitle}
                </div>
                <h1 className="max-w-xl text-4xl font-black tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
                  {service.tagline}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact#contact-form"
                    className="inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white"
                  >
                    Book a strategy call
                  </Link>
                  <a
                    href="https://wa.me/923103606935?text=Hi%20AdsLogic%2C%20I%20want%20to%20talk%20about%20growth."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#111111] hover:border-[#FF6B00]/50 hover:text-[#FF8A1F]"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="ui-card relative overflow-hidden rounded-[2rem] border p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B00]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      Growth System
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      ["Campaign Reach", "+42%", "70%"],
                      ["Qualified Leads", "+31%", "80%"],
                      ["ROAS", "4.8x", "90%"],
                    ].map(([label, value, width]) => (
                      <div
                        key={label}
                        className="ui-card-inner rounded-2xl border p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-neutral-700">{label}</span>
                          <span className="text-base font-semibold text-[#FF8A1F]">
                            {value}
                          </span>
                        </div>
                        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#FFE8D4]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]"
                            style={{ width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Overview"
              title="A focused strategy for measurable growth"
              description={service.overview}
            />
          </div>
        </section>

        <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Process"
              title="How we work"
              description="A clear system that balances strategy, creative, optimization, and tracking to improve results without guesswork."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="ui-card relative rounded-[1.75rem] border p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B00]/10 text-sm font-bold text-[#FF8A1F] ring-1 ring-[#FF6B00]/30">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-[#111111]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Why choose us"
              title="Benefits that turn strategy into traction"
              description="We focus on performance, clarity, and momentum so your marketing system works harder without unnecessary complexity."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="ui-card rounded-[1.75rem] border p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B00]/20 to-[#FF8A1F]/10 ring-1 ring-[#FF6B00]/30">
                    {getBenefitIcon(benefit.title)}
                  </div>
                  <h3 className="text-lg font-semibold text-[#111111]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Tools"
              title="Technologies & tools we use"
              description="A practical stack built around performance, visibility, and clean execution across your funnel."
            />

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {service.tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/8 px-4 py-2 text-sm text-[#111111]"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="ui-card overflow-hidden rounded-[2rem] border p-8 text-center sm:p-10">
              <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F]" />
              <h2 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
                {service.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                {service.ctaText}
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href={CONTACT_PAGE_HREF}
                  className="inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white"
                >
                  Let’s grow your business
                </Link>
                <a
                  href="https://wa.me/923103606935?text=Hi%20AdsLogic%2C%20I%20want%20to%20talk%20about%20growth."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#FF6B00]/30 bg-white px-6 py-3 text-sm font-semibold text-[#111111] hover:border-[#FF6B00]/50 hover:text-[#FF8A1F]"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
