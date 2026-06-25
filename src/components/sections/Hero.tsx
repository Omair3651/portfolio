"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CircuitBackground } from "@/components/ui/CircuitBackground";
import { LiveWidget } from "@/components/ui/LiveWidget";
import { fadeInUp } from "@/lib/motion";

const TRUSTED_PILLS = [
  "Dental Clinics",
  "Medical Practices",
  "E-commerce",
  "Real Estate",
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Circuit background */}
      <div className="absolute inset-0 opacity-60">
        <CircuitBackground />
      </div>

      {/* Radial gradient overlay — fades circuit at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,var(--bg-base)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg-base)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Left: headline + copy + CTAs */}
          <div className="flex-1 max-w-xl">
            {/* Pill tag */}
            <motion.div
              variants={fadeInUp}
              initial={prefersReducedMotion ? "visible" : "hidden"}
              animate="visible"
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-xs text-[var(--text-muted)] font-mono mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
              AI Automation for Real Businesses
            </motion.div>

            {/* Headline */}
            <div className="mb-6 space-y-1">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl sm:text-5xl font-semibold text-[var(--text-secondary)] leading-tight"
              >
                We build systems that
              </motion.div>
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl sm:text-7xl font-serif italic text-[var(--text-primary)] leading-none"
              >
                work while you sleep.
              </motion.div>
            </div>

            {/* Body copy */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-md"
            >
              AI agents, workflow automation, and custom websites — built
              specifically for small and medium businesses in the US that want
              to compete without adding headcount.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href="#work"
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-[var(--accent-cyan)] text-[var(--bg-base)] overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2.5s_infinite]" />
                See Our Work
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text-primary)] hover:border-[var(--border-bright)] transition-colors duration-200 focus-visible:outline-none"
              >
                How It Works →
              </a>
            </motion.div>

            {/* Trusted-by pills */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              <p className="text-xs text-[var(--text-muted)] mb-3 font-mono uppercase tracking-widest">
                Trusted by businesses in
              </p>
              <div className="flex flex-wrap gap-2">
                {TRUSTED_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1 rounded-full border border-[var(--border)] text-xs text-[var(--text-muted)] bg-[var(--bg-surface)]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: live widget */}
          <div className="flex justify-center lg:justify-end lg:flex-shrink-0">
            <LiveWidget />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </section>
  );
}
