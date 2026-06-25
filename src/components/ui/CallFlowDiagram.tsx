"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Bot, Calendar, MessageSquare, CheckCircle } from "lucide-react";

const STEPS = [
  { icon: Phone, label: "Patient calls", color: "var(--accent-cyan)" },
  { icon: Bot, label: "AI picks up", color: "var(--accent-blue)" },
  { icon: Calendar, label: "Appointment booked", color: "var(--accent-cyan)" },
  { icon: CheckCircle, label: "Confirmed", color: "var(--green)" },
  { icon: MessageSquare, label: "SMS sent", color: "var(--green)" },
];

export function CallFlowDiagram() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full">
      {/* Vertical flow on mobile, horizontal on larger */}
      <div className="flex flex-col sm:flex-row items-center gap-0">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex flex-col sm:flex-row items-center">
              <motion.div
                initial={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.85 }
                }
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-2 py-3 px-3"
              >
                <div
                  className="w-10 h-10 rounded-xl border flex items-center justify-center"
                  style={{
                    background: `${step.color}12`,
                    borderColor: `${step.color}30`,
                  }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ color: step.color }} />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] text-center leading-tight max-w-[70px]">
                  {step.label}
                </span>
              </motion.div>

              {/* Connector */}
              {i < STEPS.length - 1 && (
                <div className="flex sm:flex-row flex-col items-center">
                  <motion.div
                    initial={{ scaleX: 0, scaleY: 0 }}
                    whileInView={{ scaleX: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18 + 0.25, duration: 0.3 }}
                    className="hidden sm:block h-px w-8 origin-left bg-gradient-to-r from-[var(--accent-cyan)]/40 to-[var(--accent-blue)]/40"
                  />
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18 + 0.25, duration: 0.3 }}
                    className="sm:hidden block w-px h-6 origin-top bg-gradient-to-b from-[var(--accent-cyan)]/40 to-[var(--accent-blue)]/40"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
