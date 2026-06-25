"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Bot, Calendar, MessageSquare, CheckCircle, Database } from "lucide-react";

const FLOW_STEPS = [
  {
    icon: Phone,
    title: "Patient calls",
    desc: "At any hour — lunch break, evening, weekend.",
    color: "var(--accent-cyan)",
  },
  {
    icon: Bot,
    title: "AI answers instantly",
    desc: "In under 2 seconds. Friendly, professional, always available.",
    color: "var(--accent-blue)",
  },
  {
    icon: Calendar,
    title: "Checks availability",
    desc: "Reads the live calendar in real-time. No double bookings.",
    color: "var(--accent-cyan)",
  },
  {
    icon: CheckCircle,
    title: "Books the appointment",
    desc: "Writes directly into the practice management system.",
    color: "var(--green)",
  },
  {
    icon: MessageSquare,
    title: "Sends confirmation",
    desc: "SMS to the patient with date, time, and location.",
    color: "var(--green)",
  },
  {
    icon: Database,
    title: "Syncs data",
    desc: "Patient record updated. Reminders scheduled automatically.",
    color: "var(--accent-blue)",
  },
];

export function DentalFlow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--text-primary)]">
            From ring to booked — fully automated.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-[var(--accent-cyan)]/30 via-[var(--accent-blue)]/30 to-[var(--green)]/30 hidden md:block" />

          <div className="space-y-4">
            {FLOW_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={
                    prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-5 md:pl-14 relative"
                >
                  {/* Node dot on the line */}
                  <div
                    className="hidden md:flex absolute left-3 w-4 h-4 rounded-full border-2 items-center justify-center mt-1"
                    style={{
                      background: "var(--bg-surface)",
                      borderColor: step.color,
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: step.color }}
                    />
                  </div>

                  <div
                    className="flex-shrink-0 md:hidden w-10 h-10 rounded-xl border flex items-center justify-center"
                    style={{
                      background: `${step.color}12`,
                      borderColor: `${step.color}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>

                  <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg-base)] p-5 hover:border-[var(--accent-cyan)]/20 transition-colors">
                    <div className="flex items-center gap-3 mb-1">
                      <Icon
                        className="hidden md:block w-4 h-4 flex-shrink-0"
                        style={{ color: step.color }}
                      />
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
