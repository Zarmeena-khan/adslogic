"use client";

import {
  ArrowRight,
  Bot,
  ChevronDown,
  Megaphone,
  MonitorSmartphone,
  Search,
  TrendingUp,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { serviceMenuItems } from "@/components/Services/servicePageData";

const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
   // { { label: "Portfolio", href: "/portfolio" } } // HIDDEN
    { label: "Contact", href: "/contact#contact-form" },
  ];

const serviceIcons: Record<string, typeof Search> = {
  meta: Megaphone,
  google: Search,
  web: MonitorSmartphone,
  seo: TrendingUp,
  social: Megaphone,
  ai: Bot,
};

function NavLink({
  href,
  label,
  onClick,
  active,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative px-1 py-2 text-sm font-medium ${
        active ? "text-[#111111]" : "text-neutral-600 hover:text-[#111111]"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const isServicesActive = pathname.startsWith("/services");

  const isLinkActive = (href: string) => {
    if (href === "/#home") return pathname === "/" && (!hash || hash === "#home");
    if (href === "/#about") return pathname === "/" && hash === "#about";
    if (href === "/contact#contact-form") return pathname === "/contact";
    if (href === "/portfolio") return pathname === "/portfolio";
    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#FF6B00]/15 bg-[#FFF8F2]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="/#home" className="inline-flex shrink-0 items-center">
          <span className="relative block h-9 w-[190px] overflow-hidden sm:h-11 sm:w-[230px]">
            <Image
              src="/footer-Logo.png"
              alt="AdsLogic"
              fill
              sizes="(max-width: 640px) 190px, 230px"
              priority
              className="object-cover object-center invert hue-rotate-180"
            />
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <NavLink href="/#home" label="Home" active={isLinkActive("/#home")} />

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => router.push("/services")}
              aria-expanded={servicesOpen}
              className={`group relative flex items-center gap-2 px-1 py-2 text-sm font-medium ${
                isServicesActive ? "text-[#111111]" : "text-neutral-600 hover:text-[#111111]"
              }`}
            >
              Services
              <span
                className={`flex h-4 w-4 items-center justify-center ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] ${
                  isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-[270px] -translate-x-1/2 rounded-2xl border border-[#FF6B00]/20 bg-[#FFF8F2] p-2 shadow-[0_18px_45px_rgba(255,107,0,0.12)]">
                <a
                  href="/services"
                  className="mb-1 flex items-center justify-between rounded-xl border border-black/10 bg-[#FAFAFA] px-3 py-2 text-sm text-neutral-700 hover:text-[#111111]"
                >
                  <span>All Services</span>
                  <ArrowRight className="h-4 w-4 text-[#FF8A1F]" />
                </a>

                {serviceMenuItems.map((item) => {
                  const Icon = serviceIcons[item.icon] ?? Search;
                  const isMatched = pathname === item.href;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
                        isMatched
                          ? "bg-[#FF6B00]/10 text-[#111111] ring-1 ring-[#FF6B00]/30"
                          : "text-neutral-600 hover:bg-black/[0.03] hover:text-[#111111]"
                      }`}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-[#FAFAFA] text-[#FF8A1F]">
                        <Icon className="h-4 w-4" />
                      </span>
                      {item.title}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <NavLink href="/#about" label="About" active={isLinkActive("/#about")} />
          {/* <NavLink href="/portfolio" label="Portfolio" active={pathname === "/portfolio"} /> */}
          <NavLink href="/contact#contact-form" label="Contact" active={isLinkActive("/contact#contact-form")} />
        </div>

        <div className="hidden lg:block">
          <a
            href="/contact#contact-form"
            className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] px-5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,0,0.28)]"
          >
            Book Free Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#FF6B00]/20 bg-[#FFF1E6] lg:hidden"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-[#111111] ${
              menuOpen ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-[#111111] ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-[#111111] ${
              menuOpen ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#FF6B00]/15 bg-[#FFF8F2] lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <div key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  onClick={closeMenu}
                  active={isLinkActive(item.href)}
                />
              </div>
            ))}

            <div className="mt-1 rounded-2xl border border-black/10 bg-[#FAFAFA]">
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-medium text-[#111111]"
              >
                <span>Services</span>
                <span className={`flex h-4 w-4 items-center justify-center ${servicesOpen ? "rotate-180" : ""}`}>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              {servicesOpen && (
                <div className="space-y-1 border-t border-black/10 px-2 py-2">
                  <a
                    href="/services"
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-700 hover:text-[#111111]"
                  >
                    <span>All Services</span>
                    <ArrowRight className="h-4 w-4 text-[#FF8A1F]" />
                  </a>

                  {serviceMenuItems.map((item) => {
                    const Icon = serviceIcons[item.icon] ?? Search;

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${
                          pathname === item.href ? "bg-[#FF6B00]/10 text-[#111111]" : "text-neutral-600 hover:text-[#111111]"
                        }`}
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-black/10 bg-white text-[#FF8A1F]">
                          <Icon className="h-4 w-4" />
                        </span>
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="/contact#contact-form"
              onClick={closeMenu}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] px-5 text-sm font-semibold text-white"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
