"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="group relative px-1 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#FF6B00] to-[#FF8A1F] shadow-[0_0_8px_rgba(255,107,0,0.6)] transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#111111]/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          className="text-lg font-bold tracking-tight text-white sm:text-xl"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Ads<span className="text-[#FF6B00]">Logic</span>
        </motion.a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>

        <div className="hidden lg:block">
          <motion.a
            href="#consultation"
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
                  />
                </motion.div>
              ))}
              <motion.a
                href="#consultation"
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
