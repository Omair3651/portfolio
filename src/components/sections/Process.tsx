"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, FileText, Wrench, Rocket, RefreshCw } from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const STEPS = [
  {
    n: 1,
    icon: Search,
    title: "Free Audit",
    body: "We look at your business, your tools, and where you're losing time or money. Honest assessment. 30 minutes. No pitch.",
    accent: "#06B6D4",
    tag: "Day 1",
  },
  {
    n: 2,
    icon: FileText,
    title: "Proposal",
    body: "A clear document: exactly what we'll build, how long it takes, what it costs. Fixed price. No retainer. No hidden scope.",
    accent: "#2563EB",
    tag: "Week 1",
  },
  {
    n: 3,
    icon: Wrench,
    title: "Build",
    body: "We build in sprints and show you working software at every step. You're never waiting on a black box.",
    accent: "#8B5CF6",
    tag: "Weeks 2–3",
  },
  {
    n: 4,
    icon: Rocket,
    title: "Launch",
    body: "We deploy, monitor, and handle anything that breaks. Your team needs zero technical knowledge.",
    accent: "#10B981",
    tag: "Week 4",
  },
  {
    n: 5,
    icon: RefreshCw,
    title: "Evolve",
    body: "As your business grows, we add to the system. Every client gets a direct line — no ticket queue, ever.",
    accent: "#F59E0B",
    tag: "Ongoing",
  },
];

export function Process() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-[var(--bg-base)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-3">
            How we work
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight mb-3">
            From idea to live in{" "}
            <span className="font-serif italic text-[var(--accent-cyan)]">
              4 weeks.
            </span>
          </h2>
          <p className="text-xl text-[var(--text-muted)]">
            No months of back-and-forth. No surprises.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[2.4rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-[var(--accent-cyan)]/20 via-[var(--accent-blue)]/20 to-[var(--amber)]/20 z-0" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                variants={fadeInUp}
                whileHover={
                  prefersReducedMotion ? {} : { y: -5, transition: { duration: 0.2 } }
                }
                className="relative z-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 flex flex-col gap-4 group hover:border-[rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.06)] transition-all duration-300"
              >
                {/* Step icon + number */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${step.accent}14`,
                      border: `1px solid ${step.accent}28`,
                    }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: step.accent }} />
                  </div>
                  <span
                    className="font-mono text-[10px] px-2 py-1 rounded-full"
                    style={{
                      color: step.accent,
                      background: `${step.accent}10`,
                      border: `1px solid ${step.accent}20`,
                    }}
                  >
                    {step.tag}
                  </span>
                </div>

                <div>
                  <p className="font-mono text-2xl font-bold text-[var(--border)] group-hover:text-[var(--accent-cyan)]/20 transition-colors mb-1">
                    0{step.n}
                  </p>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
