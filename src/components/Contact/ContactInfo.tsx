"use client";

import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    label: "Our Location",
    value: "Office No 419, Bhayani Center, North Nazimabad, Karachi",
    href: "https://maps.google.com/?q=Office+No+419,+Bhayani+Center,+North+Nazimabad,+Karachi",
    icon: MapPin,
  },
  {
    label: "Phone Number",
    value: "+92 310 3606935",
    href: "tel:+923103606935",
    icon: Phone,
  },
  {
    label: "Email",
    value: "theadslogic@gmail.com",
    href: "mailto:theadslogic@gmail.com",
    icon: Mail,
  },
];

export default function ContactInfo() {
  return (
    <aside className="ui-card relative overflow-hidden rounded-[28px] border p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,138,31,0.06),transparent_38%)]" />

      <div className="relative">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
          Contact
        </div>

        <h3 className="text-3xl font-bold tracking-tight text-[#111111]">Get in Touch</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Let&apos;s build a smarter growth strategy for your brand with tailored marketing systems that actually convert.
        </p>

        <div className="mt-7 space-y-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="ui-card-inner group flex items-start gap-4 rounded-2xl border p-4 hover:border-[#FF8A1F]/45 hover:bg-[#FF6B00]/10"
              >
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF8A1F]/15 bg-[#FF6B00]/10 text-[#FF8A1F]">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#111111] sm:text-[15px]">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
