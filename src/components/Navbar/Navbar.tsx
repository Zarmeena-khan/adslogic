"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/#contact" },
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
    <motion.a
      href={href}
      onClick={onClick}
      className={`group relative px-1 py-2 text-sm font-medium transition-colors ${
        active ? "text-white" : "text-white/75 hover:text-white"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] shadow-[0_0_8px_rgba(255,107,0,0.6)] transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </motion.a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);
  const isServicesActive = pathname.startsWith("/services");

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#111111]/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <motion.a
          href="/#home"
          className="inline-flex shrink-0 items-center"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span className="relative block h-9 w-[190px] overflow-hidden sm:h-11 sm:w-[230px]">
            <Image
              src="/AdsLogic-Logo.png"
              alt="AdsLogic"
              fill
              sizes="(max-width: 640px) 190px, 230px"
              priority
              className="object-cover object-center"
            />
          </span>
        </motion.a>

        <div className="hidden items-center gap-8 lg:flex">
          <NavLink href="/#home" label="Home" active={pathname === "/" || pathname === "/#home"} />

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => router.push("/services")}
              aria-expanded={servicesOpen}
              className={`group relative flex items-center gap-2 px-1 py-2 text-sm font-medium transition-colors ${
                isServicesActive ? "text-white" : "text-white/75 hover:text-white"
              }`}
            >
              Services
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex h-4 w-4 items-center justify-center"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] shadow-[0_0_8px_rgba(255,107,0,0.6)] transition-all duration-300 ${
                  isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-full mt-3 w-[270px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#111111]/85 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                >
                  <a
                    href="/services"
                    className="mb-1 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white/80 hover:text-white"
                  >
                    <span>All Services</span>
                    <ArrowRight className="h-4 w-4 text-[#FF8A1F]" />
                  </a>

                  {serviceMenuItems.map((item) => {
                    const Icon = serviceIcons[item.icon] ?? Search;
                    const isMatched = pathname === item.href;

                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        whileHover={{ x: 2 }}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                          isMatched
                            ? "bg-[#FF6B00]/10 text-white ring-1 ring-[#FF6B00]/30"
                            : "text-white/75 hover:bg-white/[0.02] hover:text-white"
                        }`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-[#FF8A1F]">
                          <Icon className="h-4 w-4" />
                        </span>
                        {item.title}
                      </motion.a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/#about" label="About" active={pathname === "/" || pathname === "/#about"} />
          <NavLink href="/portfolio" label="Portfolio" active={pathname === "/portfolio"} />
          <NavLink href="/#contact" label="Contact" active={pathname === "/" || pathname === "/#contact"} />
        </div>

        <div className="hidden lg:block">
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#FF6B00] px-5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,107,0,0.35)] transition-shadow hover:shadow-[0_0_32px_rgba(255,107,0,0.5)]"
          >
            Book Free Consultation
          </motion.a>
        </div>

        <motion.button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 lg:hidden"
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
            className="absolute h-0.5 w-5 rounded-full bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute h-0.5 w-5 rounded-full bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
            className="absolute h-0.5 w-5 rounded-full bg-white"
          />
        </motion.button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#111111]/90 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    href={item.href}
                    label={item.label}
                    onClick={closeMenu}
                    active={item.href === pathname || (item.href === "/#home" && pathname === "/") || (item.href === "/portfolio" && pathname === "/portfolio")}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mt-1 rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-medium text-white"
                >
                  <span>Services</span>
                  <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} className="flex h-4 w-4 items-center justify-center">
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 border-t border-white/10 px-2 py-2">
                        <a
                          href="/services"
                          onClick={closeMenu}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white"
                        >
                          <span>All Services</span>
                          <ArrowRight className="h-4 w-4 text-[#FF8A1F]" />
                        </a>

                        {serviceMenuItems.map((item) => {
                          const Icon = serviceIcons[item.icon] ?? Search;

                          return (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              onClick={closeMenu}
                              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${
                                pathname === item.href ? "bg-[#FF6B00]/10 text-white" : "text-white/70 hover:text-white"
                              }`}
                            >
                              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-[#FF8A1F]">
                                <Icon className="h-4 w-4" />
                              </span>
                              {item.title}
                            </motion.a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.a
                href="/#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                whileTap={{ scale: 0.97 }}
                className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-[#FF6B00] px-5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,107,0,0.35)]"
              >
                Book Free Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
