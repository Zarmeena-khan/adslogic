import Image from "next/image";
import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact#contact-form" },
];

const contactDetails = [
  { label: "+92 310 3606935", href: "tel:+923103606935", icon: Phone },
  { label: "theadslogic@gmail.com", href: "mailto:theadslogic@gmail.com", icon: Mail },
  { label: "Office No 419, Bhayani Center, North Nazimabad, Karachi", href: "https://maps.google.com/?q=Office+No+419,+Bhayani+Center,+North+Nazimabad,+Karachi", icon: MapPin },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/adslogic", icon: Share2, label: "@adslogic" },
  { name: "Instagram", href: "https://www.instagram.com/ads.logic", icon: Camera, label: "@adslogic" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/ads-logic/home/", icon: BriefcaseBusiness, label: "Ads Logic" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#FF6B00]/20 bg-[#FFF1E6] text-[#111111]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,107,0,0.22),_transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          <div className="space-y-4">
            <a href="/" className="inline-flex shrink-0 items-center hover:opacity-90">
              <span className="relative block h-10 w-[200px] overflow-hidden sm:h-12 sm:w-[250px]">
                <Image
                  src="/footer-Logo.png"
                  alt="AdsLogic"
                  fill
                  sizes="(max-width: 640px) 200px, 250px"
                  className="object-cover object-center invert hue-rotate-180"
                />
              </span>
            </a>

            <p className="max-w-sm text-sm leading-7 text-neutral-600">
            AI-powered digital marketing solutions to help businesses grow with Meta Ads, Google Ads, Websites, SEO & AI Automation.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#FF6B00]">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-neutral-600 hover:text-[#FF6B00]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#FF6B00]">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm">
              {contactDetails.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-3 text-neutral-600 hover:text-[#111111]"
                  >
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/5 text-[#FF6B00] group-hover:border-[#FF6B00]/60 group-hover:bg-[#FF6B00]/10">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-6 w-full break-words">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#FF6B00]">
              Follow Us
            </h4>

            <div className="space-y-3">
              {socialLinks.map(({ name, href, icon: Icon, label }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-card group flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 text-[#111111] hover:border-[#FF6B00]/50 hover:text-[#FF6B00]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FF6B00]/25 bg-white text-[#FF6B00] group-hover:border-[#FF6B00]/50">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{name}</span>
                  </div>

                  <span className="text-[11px] text-neutral-500 group-hover:text-[#FF6B00]">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6">
          <p className="text-center text-sm text-neutral-600">
            © 2026 AdsLogic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
