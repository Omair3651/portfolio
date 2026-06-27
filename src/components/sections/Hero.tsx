"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { ActivityDashboard } from "@/components/ui/ActivityDashboard";
import { ArrowRight, Star } from "lucide-react";

const TRUSTED_INDUSTRIES = [
  "Dental Clinics",
  "Medical Practices",
  "E-commerce",
  "Real Estate",
  "Law Firms",
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Aurora gradient background */}
      <AuroraBackground />

      {/* Grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--bg-base)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14 lg:gap-20">
          {/* ── Left: copy ── */}
          <div className="flex-1 max-w-2xl">
            {/* Social proof badge */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]/80 backdrop-blur-sm text-xs text-[var(--text-muted)] mb-8"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-[var(--amber)] text-[var(--amber)]"
                  />
                ))}
              </div>
              <span className="text-[var(--text-secondary)] font-medium">
                4.9 · Trusted by 12+ US businesses
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-7 space-y-1">
              <motion.h1
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[var(--text-primary)] leading-[1.08] tracking-tight"
              >
                Your office closes
              </motion.h1>
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-serif italic leading-[1.08]"
                style={{
                  background:
                    "linear-gradient(135deg, #06B6D4 0%, #2563EB 55%, #8B5CF6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                at 5pm.
              </motion.div>
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.44, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--text-secondary)] leading-tight pt-2"
              >
                Your competitors&apos; AI doesn&apos;t.
              </motion.div>
            </div>

            {/* Body copy */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.6, ease: "easeOut" }}
              className="text-lg text-[var(--text-secondary)] leading-relaxed mb-9 max-w-lg"
            >
              We build AI systems that answer every call, book every appointment,
              and qualify every lead — 24 hours a day, without adding a single
              person to your payroll.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[var(--bg-base)] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] transition-all duration-200"
                style={{
                  background:
                    "linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)",
                  boxShadow: "0 0 30px rgba(6,182,212,0.3), 0 4px 24px rgba(6,182,212,0.2)",
                }}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                Book a Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </a>
              <a
                href="/case-studies/dental"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--border-bright)]/50 hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
              >
                See Live Demo →
              </a>
            </motion.div>

            {/* Trusted by */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Building for
              </p>
              <div className="flex flex-wrap gap-2">
                {TRUSTED_INDUSTRIES.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1.5 rounded-full border border-[var(--border)] text-xs text-[var(--text-muted)] bg-[var(--bg-surface)]/60 backdrop-blur-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Activity Dashboard ── */}
          <div className="flex justify-center lg:justify-end lg:flex-shrink-0">
            <ActivityDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
