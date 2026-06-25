"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, viewport } from "@/lib/motion";
import { ExternalLink } from "lucide-react";

export function DentalDemo() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-[var(--bg-base)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-10"
        >
          <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-3">
            Live Demo
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--text-primary)] mb-4">
            This is a live system.
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            The demo below is the actual AI receptionist — not a mockup. Enter
            your number and book a real test appointment.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] overflow-hidden"
        >
          {/* Demo header bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
              <span className="text-xs font-mono text-[var(--green)]">LIVE</span>
              <span className="text-xs font-mono text-[var(--text-muted)] ml-2">
                customerautomation.netlify.app
              </span>
            </div>
            <a
              href="https://customerautomation.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[var(--accent-cyan)] hover:opacity-80 transition-opacity"
            >
              Open full page <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="relative" style={{ paddingBottom: "62.5%", height: 0 }}>
            <iframe
              src="https://customerautomation.netlify.app"
              title="Dental AI Receptionist — Live Demo"
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="text-center text-xs text-[var(--text-muted)] font-mono mt-4"
        >
          Demo uses test data. Any appointments booked are for demonstration
          purposes only.
        </motion.p>
      </div>
    </section>
  );
}
