"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const TESTIMONIALS = [
  {
    quote:
      "Before NeuralOps, we lost 40% of our after-hours calls to voicemail. Now every call gets answered instantly and 80% convert to bookings. It paid for itself in the first week.",
    name: "Dr. Sarah Mitchell",
    role: "Owner",
    company: "Mitchell Family Dental",
    location: "Annapolis, MD",
    industry: "Dental Practice",
    accentColor: "#06B6D4",
  },
  {
    quote:
      "Customer service emails went from 4 hours daily to 20 minutes of reviewing escalations. Response time dropped from 6 hours to under a minute. Revenue up 23% in 60 days.",
    name: "Marcus Johnson",
    role: "Operations Lead",
    company: "ShopSmarter Co.",
    location: "Austin, TX",
    industry: "E-commerce",
    accentColor: "#10B981",
  },
  {
    quote:
      "I didn't think AI could handle medical scheduling nuances. Three weeks in, it had processed 300+ appointments without a single error. Staff now focus on patient care, not phones.",
    name: "Dr. Kevin Patel",
    role: "Practice Director",
    company: "Patel Medical Group",
    location: "San Diego, CA",
    industry: "Medical Practice",
    accentColor: "#8B5CF6",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[var(--amber)] text-[var(--amber)]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-[var(--bg-base)] relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.03),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mb-14 max-w-xl"
        >
          <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-3">
            Client results
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight">
            Real businesses.{" "}
            <span className="font-serif italic text-[var(--text-secondary)]">
              Real results.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-7 flex flex-col gap-5 hover:border-[var(--border-bright)]/30 transition-all duration-300"
              style={{
                boxShadow: "0 0 0 1px transparent",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${t.accentColor}60, transparent)`,
                }}
              />

              {/* Stars */}
              <Stars />

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="flex items-start justify-between gap-3 pt-4 border-t border-[var(--border)]">
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {t.role} · {t.company}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">{t.location}</p>
                </div>
                <span
                  className="flex-shrink-0 mt-0.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold"
                  style={{
                    color: t.accentColor,
                    background: `${t.accentColor}12`,
                    border: `1px solid ${t.accentColor}25`,
                  }}
                >
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
