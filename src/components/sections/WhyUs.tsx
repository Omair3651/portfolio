"use client";

import { motion, useReducedMotion } from "framer-motion";
import { X, Check } from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const COMPARISON = [
  {
    topic: "Time to launch",
    them: "Months of back-and-forth",
    us: "2–4 weeks to live",
  },
  {
    topic: "Pricing model",
    them: "Bloated retainers + hidden overages",
    us: "Fixed price, no surprises",
  },
  {
    topic: "Who you work with",
    them: "Account managers & ticket queues",
    us: "Direct line to the builders",
  },
  {
    topic: "Outcome ownership",
    them: "Delivered & forgotten",
    us: "We fix it if it doesn't work",
  },
  {
    topic: "Reporting",
    them: "Pretty dashboards, vague ROI",
    us: "Real metrics you can verify",
  },
];

export function WhyUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="why"
      className="py-24 lg:py-32 bg-[var(--bg-surface)] relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(6,182,212,0.03),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left — headline block */}
          <motion.div
            variants={fadeInUp}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
              Why NeuralOps
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight mb-6">
              Most agencies sell{" "}
              <span className="font-serif italic text-[var(--text-secondary)]">
                time.
              </span>
              <br />
              We sell{" "}
              <span className="font-serif italic text-[var(--accent-cyan)]">
                outcomes.
              </span>
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-sm">
              We&apos;re a small team that takes on a handful of clients each
              month. That means you get the people who built the system — not
              an account manager who&apos;s never seen your code.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-cyan)] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] rounded px-1"
            >
              Book a free audit →
            </a>
          </motion.div>

          {/* Right — comparison table */}
          <motion.div
            variants={staggerContainer}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {/* Column headers */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-[1fr_1fr_1fr] gap-3 mb-3"
            >
              <div />
              <div className="text-center px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)]">
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  Other Agencies
                </p>
              </div>
              <div
                className="text-center px-3 py-2 rounded-lg border"
                style={{
                  background: "rgba(6,182,212,0.06)",
                  borderColor: "rgba(6,182,212,0.25)",
                }}
              >
                <p
                  className="text-xs font-mono font-bold uppercase tracking-widest"
                  style={{ color: "#06B6D4" }}
                >
                  NeuralOps
                </p>
              </div>
            </motion.div>

            {/* Rows */}
            <div className="space-y-2">
              {COMPARISON.map((row, i) => (
                <motion.div
                  key={row.topic}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.06 }}
                  className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center"
                >
                  {/* Topic */}
                  <div className="py-4 pr-2">
                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                      {row.topic}
                    </p>
                  </div>

                  {/* Them */}
                  <div className="flex items-start gap-2.5 px-4 py-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]/50">
                    <X className="w-4 h-4 text-red-500/70 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--text-muted)] leading-snug">
                      {row.them}
                    </p>
                  </div>

                  {/* Us */}
                  <div
                    className="flex items-start gap-2.5 px-4 py-3.5 rounded-xl border"
                    style={{
                      background: "rgba(6,182,212,0.04)",
                      borderColor: "rgba(6,182,212,0.18)",
                    }}
                  >
                    <Check
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#06B6D4" }}
                    />
                    <p
                      className="text-xs font-medium leading-snug"
                      style={{ color: "#8ECFDC" }}
                    >
                      {row.us}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA row */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 flex justify-end"
            >
              <p className="text-xs text-[var(--text-muted)] max-w-xs text-right leading-relaxed">
                We take on 3–4 new clients per month. If it&apos;s a fit, we
                move fast.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
