"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Calendar, MessageSquare, UserPlus, CheckCircle2 } from "lucide-react";

const BASE_EVENTS = [
  {
    id: 1,
    icon: Phone,
    color: "#06B6D4",
    time: "11:47 PM",
    title: "Call answered",
    detail: "Patient inquiry — whitening treatment",
  },
  {
    id: 2,
    icon: Calendar,
    color: "#2563EB",
    time: "11:23 PM",
    title: "Appointment booked",
    detail: "Emma R. · Tuesday 2:00 PM",
  },
  {
    id: 3,
    icon: MessageSquare,
    color: "#10B981",
    time: "11:08 PM",
    title: "Reminder sent",
    detail: "James T. · Appointment tomorrow",
  },
  {
    id: 4,
    icon: UserPlus,
    color: "#F59E0B",
    time: "10:45 PM",
    title: "New patient qualified",
    detail: "Insurance verified · Pending booking",
  },
];

export function ActivityDashboard() {
  const prefersReducedMotion = useReducedMotion();
  const [calls, setCalls] = useState(47);
  const [booked, setBooked] = useState(12);
  const [recovered, setRecovered] = useState(8400);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      const r = Math.random();
      if (r > 0.65) {
        setCalls((n) => n + 1);
        setRecovered((n) => n + Math.floor(Math.random() * 250 + 80));
      } else if (r > 0.35) {
        setBooked((n) => n + 1);
      }
    }, 4800);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[380px]"
    >
      {/* Ambient glow behind card */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(6,182,212,0.12)] to-[rgba(37,99,235,0.06)] blur-2xl scale-110" />

      <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/90 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.08)]">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/70 to-transparent" />

        {/* Header */}
        <div className="px-5 py-4 border-b border-[var(--border)]/60 flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
              NeuralOps AI Agent
            </p>
            <p className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">
              Brighton Family Dental
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/25">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[var(--green)]"
              animate={
                prefersReducedMotion
                  ? {}
                  : { scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }
              }
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-mono text-[10px] text-[var(--green)] font-bold">
              LIVE
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {[
            { label: "Calls today", value: calls.toString(), color: "var(--accent-cyan)" },
            { label: "Booked", value: booked.toString(), color: "var(--accent-blue)" },
            { label: "Revenue", value: `$${recovered.toLocaleString()}`, color: "var(--green)" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="p-4 text-center"
              style={{
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <motion.p
                key={s.value}
                initial={prefersReducedMotion ? {} : { opacity: 0.3, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="font-mono text-lg font-bold"
                style={{ color: s.color }}
              >
                {s.value}
              </motion.p>
              <p className="font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-wide mt-0.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="px-5 py-4 space-y-3">
          <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
            Live Activity
          </p>
          {BASE_EVENTS.map((ev, i) => {
            const Icon = ev.icon;
            return (
              <motion.div
                key={ev.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.9 + i * 0.09,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="flex items-start gap-3"
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5"
                  style={{
                    background: `${ev.color}14`,
                    border: `1px solid ${ev.color}28`,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: ev.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[var(--text-primary)] truncate">
                      {ev.title}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)] flex-shrink-0">
                      {ev.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] truncate mt-0.5">
                    {ev.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active call bar */}
        <div className="px-5 pb-4">
          <div className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--accent-cyan)]/15">
            <Phone className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span className="font-mono text-xs text-[var(--text-secondary)]">
              Active call in progress
            </span>
            <div className="ml-auto flex gap-0.5 items-end h-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="block w-0.5 rounded-full bg-[var(--accent-cyan)]"
                  animate={
                    prefersReducedMotion
                      ? { height: 8 }
                      : { height: [3, 14, 6, 12, 3] }
                  }
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
