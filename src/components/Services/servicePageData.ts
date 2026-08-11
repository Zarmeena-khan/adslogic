export type ProcessStep = {
  title: string;
  description: string;
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type ServicePageContent = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  process: ProcessStep[];
  benefits: BenefitItem[];
  tools: string[];
  ctaTitle: string;
  ctaText: string;
};

export const serviceMenuItems = [
  { title: "Meta Ads", href: "/services/meta-ads", icon: "meta" },
  { title: "Google Ads", href: "/services/google-ads", icon: "google" },
  { title: "Website Development", href: "/services/website-development", icon: "web" },
  { title: "SEO", href: "/services/seo", icon: "seo" },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", icon: "social" },
  { title: "AI Automation", href: "/services/ai-automation", icon: "ai" },
] as const;

export const servicePages: Record<string, ServicePageContent> = {
  "meta-ads": {
    slug: "meta-ads",
    title: "Meta Ads",
    subtitle: "Paid social growth",
    tagline: "Performance campaigns engineered to turn clicks into qualified leads.",
    overview:
      "We build Meta advertising systems that help brands reach the right audience, improve conversion quality, and scale profitable acquisition through testing and optimization.",
    process: [
      {
        title: "Audience Discovery",
        description:
          "We identify your ideal customer segments, buying signals, and interests so every impression is aimed at decision-ready prospects.",
      },
      {
        title: "Offer & Messaging",
        description:
          "We sharpen your value proposition, ad creatives, and copy to attract attention and drive action from your highest-intent audience.",
      },
      {
        title: "Campaign Build",
        description:
          "Our team sets up campaigns, tracking, and funnel logic to ensure data is clean and every optimization decision is based on real performance.",
      },
      {
        title: "Scale & Retarget",
        description:
          "Once winning patterns are found, we scale intelligently with retargeting, incremental testing, and budget allocation focused on ROI.",
      },
    ],
    benefits: [
      {
        title: "Faster Lead Generation",
        description: "Capture high-intent demand quickly with precision targeting and polished creatives.",
      },
      {
        title: "Stronger Retargeting",
        description: "Re-engage warm audiences with offers and messages that move them toward conversion.",
      },
      {
        title: "Clear ROI Visibility",
        description: "Track ad spend, conversions, and performance metrics in a dashboard built for smarter decisions.",
      },
      {
        title: "Creative Testing",
        description: "Improve performance with structured experimentation across hooks, visuals, and offers.",
      },
    ],
    tools: [
      "Meta Business Suite",
      "Meta Ads Manager",
      "Meta Pixel",
      "Lookalike Audiences",
      "Creative Testing",
      "Analytics Dashboard",
    ],
    ctaTitle: "Ready to scale your Meta Ads engine?",
    ctaText:
      "Let’s build a smarter funnel that brings in warmer leads and more efficient sales conversations.",
  },
  "google-ads": {
    slug: "google-ads",
    title: "Google Ads",
    subtitle: "Search intent capture",
    tagline: "Capture demand at the exact moment customers are looking for your solution.",
    overview:
      "We build intent-driven Google Ads campaigns that reach users with buying intent, eliminate wasted spend, and convert more of the traffic that is already looking for your offer.",
    process: [
      {
        title: "Keyword Strategy",
        description:
          "We research high-intent search terms and build a campaign structure designed around commercial opportunity and conversion potential.",
      },
      {
        title: "Landing Page Alignment",
        description:
          "We connect ad messaging to conversion-focused landing pages so intent is matched with clear value and strong calls to action.",
      },
      {
        title: "Smart Setup",
        description:
          "We configure campaign settings, asset groups, and tracking so performance data is accurate and optimization remains efficient.",
      },
      {
        title: "Optimization Loop",
        description:
          "We refine bids, audiences, copy, and targeting continuously to improve quality leads and cost efficiency over time.",
      },
    ],
    benefits: [
      {
        title: "High-Intent Traffic",
        description: "Reach people already searching for your product, service, or category.",
      },
      {
        title: "Better Cost Efficiency",
        description: "Reduce wasted spend by targeting only the keywords and audiences that convert.",
      },
      {
        title: "Faster Lead Capture",
        description: "Generate more qualified inquiries through sharper messaging and stronger landing pages.",
      },
      {
        title: "Continuous Improvement",
        description: "Scale performance through data-backed testing across campaigns and intent segments.",
      },
    ],
    tools: [
      "Google Ads Manager",
      "Google Analytics",
      "Search Console",
      "Keyword Planner",
      "Conversion Tracking",
      "Smart Bidding",
    ],
    ctaTitle: "Looking for more qualified leads from Google?",
    ctaText:
      "We’ll build a campaign system that captures intent and turns clicks into booked calls and high-value sales conversations.",
  },
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    subtitle: "Conversion-focused design",
    tagline: "Premium digital experiences engineered to build trust and drive action.",
    overview:
      "We design and develop high-converting websites that combine premium branding, fast performance, and a clear user journey from first impression to conversion.",
    process: [
      {
        title: "Strategy & UX",
        description:
          "We map your goals, audience flow, and conversion points to shape a site that moves visitors naturally toward action.",
      },
      {
        title: "Visual Design",
        description:
          "We craft premium layouts, strong messaging, and high-trust visual direction that make your brand stand out and feel credible.",
      },
      {
        title: "Build & Optimize",
        description:
          "We turn the design into a responsive, fast, accessible website that runs smoothly across desktop and mobile.",
      },
      {
        title: "Launch & Improve",
        description:
          "After launch, we track user journeys and continuously improve clarity, speed, and conversion flow.",
      },
    ],
    benefits: [
      {
        title: "Brand Elevation",
        description: "Present your business with a polished, premium website that builds instant trust.",
      },
      {
        title: "Higher Conversions",
        description: "Reduce friction and guide visitors toward calls, leads, and sales actions.",
      },
      {
        title: "Mobile-First Experience",
        description: "Deliver a smooth user experience on every device, from tablets to smartphones.",
      },
      {
        title: "Performance Focus",
        description: "Improve page speed, engagement, and user satisfaction without sacrificing brand quality.",
      },
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SEO Structure",
      "Analytics Integration",
    ],
    ctaTitle: "Need a website that actually converts?",
    ctaText:
      "We’ll create a premium online presence that strengthens your brand and turns more visitors into customers.",
  },
  seo: {
    slug: "seo",
    title: "SEO",
    subtitle: "Organic growth engine",
    tagline: "Turn search visibility into sustainable demand and long-term growth.",
    overview:
      "We build SEO systems that help your brand rank for the right keywords, attract better-fit leads, and create a lasting pipeline of organic traffic.",
    process: [
      {
        title: "SEO Audit",
        description:
          "We review your site architecture, technical foundation, and keyword opportunities to uncover the biggest strategic wins.",
      },
      {
        title: "Content & Structure",
        description:
          "We improve search relevance with stronger page structure, user intent alignment, and conversion-focused content planning.",
      },
      {
        title: "Technical Optimization",
        description:
          "We clean up crawlability, page speed, metadata, and indexation issues so your site is easier for search engines to trust.",
      },
      {
        title: "Authority Growth",
        description:
          "We build a sustainable strategy for rankings, topical authority, and long-term visibility through smart content and optimization loops.",
      },
    ],
    benefits: [
      {
        title: "Lower Acquisition Costs",
        description: "Reduce dependence on paid traffic by building strong organic demand over time.",
      },
      {
        title: "Better Search Visibility",
        description: "Rank for the keywords and topics that matter to buyers in your niche.",
      },
      {
        title: "More Qualified Leads",
        description: "Attract users already searching for products or services like yours.",
      },
      {
        title: "Long-Term Growth",
        description: "Create sustainable traffic assets that compound with every optimization cycle.",
      },
    ],
    tools: [
      "Google Search Console",
      "Google Analytics",
      "Technical SEO Audits",
      "Keyword Research",
      "On-Page Optimization",
      "Content Strategy",
    ],
    ctaTitle: "Ready to grow without constantly buying traffic?",
    ctaText:
      "We’ll help you build a search strategy that attracts demand, improves authority, and creates compounding results over time.",
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    subtitle: "Brand presence & engagement",
    tagline: "Build trust, authority, and demand across the channels your audience already uses.",
    overview:
      "We help brands grow meaningful social presence through content strategy, community engagement, and campaign systems built to turn attention into action.",
    process: [
      {
        title: "Brand Positioning",
        description:
          "We define the voice, story, and content direction that makes your brand clear, relevant, and memorable.",
      },
      {
        title: "Content System",
        description:
          "We build a consistent posting framework with campaign themes, hooks, and creative assets built around your goals.",
      },
      {
        title: "Community Growth",
        description:
          "We increase engagement, response quality, and audience loyalty through strategic interactions and content experimentation.",
      },
      {
        title: "Conversion Layer",
        description:
          "We turn attention into action with landing page alignment, CTAs, and funnel-aware content that supports the next step.",
      },
    ],
    benefits: [
      {
        title: "Stronger Brand Recall",
        description: "Keep your business visible and memorable with a content system designed for recognition.",
      },
      {
        title: "Audience Trust",
        description: "Build authority through consistent storytelling, proof, and customer-centered messaging.",
      },
      {
        title: "More Engagement",
        description: "Create posts and campaigns that encourage comments, shares, and meaningful conversations.",
      },
      {
        title: "Qualified Demand",
        description: "Use social traffic and retargeting to support lead generation and sales conversations.",
      },
    ],
    tools: [
      "Social Strategy",
      "Content Calendars",
      "Creative Direction",
      "Community Management",
      "Campaign Reporting",
      "Organic + Paid Alignment",
    ],
    ctaTitle: "Want your brand to feel active and credible online?",
    ctaText:
      "We’ll turn your social presence into a consistent growth channel that supports reach, trust, and conversion.",
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Smarter operations",
    tagline: "Streamline repetitive work and make your marketing machine more efficient.",
    overview:
      "We design AI-powered workflows that reduce manual effort, accelerate lead handling, and help your team move faster without sacrificing quality or control.",
    process: [
      {
        title: "Workflow Mapping",
        description:
          "We identify the repetitive tasks, bottlenecks, and handoffs that slow your marketing or sales operations down.",
      },
      {
        title: "Automation Design",
        description:
          "We build practical systems for lead routing, follow-ups, reporting, content repurposing, and internal triggers.",
      },
      {
        title: "Integration Setup",
        description:
          "We connect your tools into one smarter pipeline so data moves effortlessly between channels and touchpoints.",
      },
      {
        title: "Optimization & Scale",
        description:
          "We refine automations over time to improve speed, accuracy, and the experience for both your team and your customers.",
      },
    ],
    benefits: [
      {
        title: "More Time Back",
        description: "Free your team from repetitive tasks so they can focus on strategy and growth.",
      },
      {
        title: "Faster Response Times",
        description: "Automate follow-ups and lead handling so prospects receive timely attention.",
      },
      {
        title: "Better Data Flow",
        description: "Keep reporting and lead insights connected across your full marketing ecosystem.",
      },
      {
        title: "Scalable Ops",
        description: "Build systems that grow with your business without creating more bottlenecks.",
      },
    ],
    tools: [
      "AI Workflow Design",
      "CRM Integration",
      "Lead Routing",
      "Reporting Automations",
      "Content Repurposing",
      "Internal Process Logic",
    ],
    ctaTitle: "Want a more efficient growth engine?",
    ctaText:
      "We’ll design AI-driven systems that remove friction, improve speed, and help your team scale with less manual effort.",
  },
};
