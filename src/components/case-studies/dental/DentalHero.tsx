"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function DentalHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(6,182,212,0.05),transparent)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-6"
        >
          Case Study · Dental Clinic AI Receptionist
        </motion.p>
        <motion.h1
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-[var(--text-primary)] leading-tight mb-8"
        >
          The AI receptionist that books appointments while the dentist is in
          the chair.
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          transition={{ delay: 0.3 }}
          className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          A dental clinic was losing patients every time a call went to
          voicemail. We built an AI receptionist that never misses a call — and
          the results were immediate.
        </motion.p>
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
          <span className="text-sm font-mono text-[var(--green)] font-semibold">
            LIVE NOW — Booking real appointments
          </span>
        </motion.div>
      </div>
    </section>
  );
}
