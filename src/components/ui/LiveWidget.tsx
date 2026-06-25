"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Calendar, MessageSquare } from "lucide-react";

export function LiveWidget() {
  const prefersReducedMotion = useReducedMotion();
  const [appts, setAppts] = useState(3);
  const [calls, setCalls] = useState(12);

  // Slowly tick numbers up to simulate a live system
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      const rand = Math.random();
      if (rand > 0.7) setAppts((n) => n + 1);
      else if (rand > 0.4) setCalls((n) => n + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[0_0_40px_rgba(6,182,212,0.06)] w-full max-w-[260px]"
    >
      {/* Subtle top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/40 to-transparent rounded-t-xl" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
          Dental AI Agent
        </span>
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-2 h-2 rounded-full bg-[var(--green)]"
            animate={
              prefersReducedMotion
                ? {}
                : { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-mono text-[10px] text-[var(--green)] font-semibold">
            LIVE
          </span>
        </div>
      </div>

      {/* Status line */}
      <div className="flex items-center gap-2 mb-4 py-2 px-3 rounded-md bg-[var(--bg-elevated)] border border-[var(--border)]">
        <Phone className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
        <span className="font-mono text-xs text-[var(--text-secondary)]">
          Booking now
        </span>
        <motion.span
          className="ml-auto flex gap-0.5"
          animate={prefersReducedMotion ? {} : {}}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block w-0.5 bg-[var(--accent-cyan)] rounded-full"
              animate={
                prefersReducedMotion
                  ? { height: 8 }
                  : { height: [4, 12, 4] }
              }
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <StatCard
          icon={<Calendar className="w-3.5 h-3.5" />}
          label="Appts today"
          value={appts}
          prefersReducedMotion={!!prefersReducedMotion}
        />
        <StatCard
          icon={<Phone className="w-3.5 h-3.5" />}
          label="Calls handled"
          value={calls}
          prefersReducedMotion={!!prefersReducedMotion}
        />
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center gap-1.5">
        <MessageSquare className="w-3 h-3 text-[var(--text-muted)]" />
        <span className="font-mono text-[10px] text-[var(--text-muted)]">
          3 SMS sent · 0 voicemails
        </span>
      </div>
    </motion.div>
  );
}

function StatCard({
  icon,
  label,
  value,
  prefersReducedMotion,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  prefersReducedMotion: boolean;
}) {
  return (
    <div className="rounded-md bg-[var(--bg-elevated)] border border-[var(--border)] p-2.5">
      <div className="text-[var(--text-muted)] mb-1">{icon}</div>
      <motion.div
        key={value}
        initial={prefersReducedMotion ? {} : { opacity: 0.4, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="font-mono text-lg font-bold text-[var(--text-primary)]"
      >
        {value}
      </motion.div>
      <div className="font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
