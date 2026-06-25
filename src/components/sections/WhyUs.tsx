"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Zap, Shield, MapPin, Users } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, viewport } from "@/lib/motion";

const POINTS = [
  {
    icon: Zap,
    title: "We ship fast.",
    body: "Most projects launch within 2–4 weeks from kickoff.",
  },
  {
    icon: Shield,
    title: "We own the outcome.",
    body: "If it doesn't work as promised, we fix it. No extra invoice.",
  },
  {
    icon: MapPin,
    title: "We work in the US market.",
    body: "LLC registered, US business practices, US-aware builds.",
  },
  {
    icon: Users,
    title: "We're small on purpose.",
    body: "You work with the people who built it, not an account manager.",
  },
];

export function WhyUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="why" className="py-24 lg:py-32 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — bold statement */}
          <motion.div
            variants={slideInLeft}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-4xl lg:text-5xl font-serif italic text-[var(--text-primary)] leading-tight">
              We&apos;re not an agency that sells you a retainer and disappears.
            </h2>
            <div className="mt-8 h-1 w-16 rounded bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-blue)]" />
          </motion.div>

          {/* Right — points */}
          <motion.div
            variants={slideInRight}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            {POINTS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 flex items-center justify-center mt-0.5">
                    <Icon className="w-4 h-4 text-[var(--accent-cyan)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-primary)]">
                      <span className="font-semibold">{p.title}</span>{" "}
                      <span className="text-[var(--text-secondary)]">{p.body}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
