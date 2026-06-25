"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";
import { CallFlowDiagram } from "@/components/ui/CallFlowDiagram";

const OUTCOMES = [
  { stat: "24/7", label: "Calls answered", sub: "No voicemail, ever" },
  { stat: "< 2s", label: "Time to answer", sub: "Instant every time" },
  { stat: "100%", label: "Automated booking", sub: "Zero staff involved" },
  { stat: "3 SMS", label: "Per appointment", sub: "Sent automatically" },
];

export function CaseStudy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" className="py-24 lg:py-32 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4"
        >
          Case Study
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left — headline + body */}
          <motion.div
            variants={fadeInUp}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-4xl lg:text-5xl font-serif italic text-[var(--text-primary)] leading-tight mb-6">
              "The front desk that never closes."
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              A dental clinic was losing patients every evening and weekend —
              calls going to voicemail, appointments never booked. We built an
              AI receptionist that handles every call instantly, books
              appointments directly into their calendar, and sends automated
              confirmation and reminder texts.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              It&apos;s live right now. Booking real appointments for a real
              dental clinic, around the clock.
            </p>
          </motion.div>

          {/* Right — call flow */}
          <motion.div
            variants={fadeInUp}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-base)] p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                Call flow — live
              </span>
              <div className="flex items-center gap-1.5">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[var(--green)]"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[10px] font-mono text-[var(--green)]">ACTIVE</span>
              </div>
            </div>
            <CallFlowDiagram />
            <div className="mt-5 pt-5 border-t border-[var(--border)]">
              <p className="text-[11px] font-mono text-[var(--text-muted)]">
                Built with: Voice AI · Workflow Automation · SMS Delivery · Live Data Sync
              </p>
            </div>
          </motion.div>
        </div>

        {/* Outcome stats */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {OUTCOMES.map((o) => (
            <motion.div
              key={o.stat}
              variants={fadeInUp}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-base)] p-6 text-center hover:border-[var(--accent-cyan)]/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.06)] transition-all duration-300"
            >
              <div className="font-mono text-3xl lg:text-4xl font-bold text-[var(--accent-cyan)] mb-1">
                {o.stat}
              </div>
              <div className="text-sm font-medium text-[var(--text-primary)] mb-0.5">
                {o.label}
              </div>
              <div className="text-xs text-[var(--text-muted)]">{o.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
        >
          <Link
            href="/case-studies/dental"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-cyan)] hover:opacity-80 transition-opacity"
          >
            See the full case study →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
