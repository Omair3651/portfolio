"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const STEPS = [
  {
    n: 1,
    title: "Free Audit",
    body: "We look at your business, your current tools, and where you're losing time or money. No pitch, just honest assessment. Takes 30 minutes.",
  },
  {
    n: 2,
    title: "Proposal",
    body: "A clear document: what we'll build, how long it takes, what it costs. No retainer packages, no hidden scope.",
  },
  {
    n: 3,
    title: "Build",
    body: "We build in sprints and show you working software every step. You're never waiting on a black box.",
  },
  {
    n: 4,
    title: "Launch",
    body: "We deploy, we monitor, we handle anything that breaks. Your team needs zero technical knowledge.",
  },
  {
    n: 5,
    title: "Evolve",
    body: "As your business grows, we add to the system. Every client gets a direct line to us — no ticket queue.",
  },
];

export function Process() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="process" className="py-24 lg:py-32 bg-[var(--bg-base)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mb-14"
        >
          <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-3">
            How we work
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] mb-2">
            How we work.
          </h2>
          <p className="text-xl text-[var(--text-muted)]">Fast. Direct. No surprises.</p>
        </motion.div>

        {/* Desktop: horizontal cards row; Mobile: vertical stack */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 flex flex-col gap-4 group hover:border-[var(--accent-cyan)]/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.06)] transition-all duration-300"
            >
              {/* Connector line (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2 w-4 h-px bg-gradient-to-r from-[var(--border)] to-transparent z-10" />
              )}

              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-bold text-[var(--accent-cyan)] opacity-40 group-hover:opacity-70 transition-opacity">
                  {step.n}
                </span>
                <div className="h-px flex-1 bg-[var(--border)] group-hover:bg-[var(--accent-cyan)]/20 transition-colors" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
