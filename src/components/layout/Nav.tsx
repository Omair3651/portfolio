"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile nav on route hash change
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--bg-base)]/95 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent"
        )}
        initial={prefersReducedMotion ? {} : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-[var(--text-primary)] text-base tracking-tight focus-visible:outline-none"
          >
            <span>NeuralOps</span>
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: [1, 1.6, 1],
                      opacity: [1, 0.5, 1],
                    }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150 focus-visible:outline-none focus-visible:text-[var(--accent-cyan)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold bg-[var(--accent-cyan)] text-[var(--bg-base)] overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2.5s_infinite]" />
              Get a Free Audit →
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--bg-base)]/98 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.nav
              className="flex flex-col items-center gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 rounded-md bg-[var(--accent-cyan)] text-[var(--bg-base)] font-semibold text-base"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                Get a Free Audit →
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </>
  );
}
