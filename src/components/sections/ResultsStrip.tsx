"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";
import { Clock, PhoneCall, Zap, TrendingUp } from "lucide-react";

const STATS = [
  {
    icon: Clock,
    prefix: "",
    end: 127,
    suffix: "+",
    unit: "hrs saved",
    detail: "per client, per month",
    color: "#06B6D4",
  },
  {
    icon: PhoneCall,
    prefix: "",
    end: 0,
    suffix: "",
    unit: "missed calls",
    detail: "every call answered instantly",
    color: "#10B981",
  },
  {
    icon: Zap,
    prefix: "<",
    end: 2,
    suffix: "s",
    unit: "response time",
    detail: "to answer every inquiry",
    color: "#2563EB",
  },
  {
    icon: TrendingUp,
    prefix: "",
    end: 24,
    suffix: "/7",
    unit: "availability",
    detail: "no holidays, no sick days",
    color: "#8B5CF6",
  },
];

export function ResultsStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-14 overflow-hidden" aria-label="Key results">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-base)] via-[var(--bg-surface)] to-[var(--bg-base)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_50%,rgba(6,182,212,0.04),transparent)]" />
      {/* Top/bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[var(--border)]">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.unit}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center text-center lg:px-8"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${stat.color}14`,
                    border: `1px solid ${stat.color}28`,
                  }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ color: stat.color }} />
                </div>
                <div className="font-mono text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-none mb-1">
                  {stat.end === 0 ? (
                    <span style={{ color: stat.color }}>0</span>
                  ) : (
                    <CountUp
                      end={stat.end}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2}
                      className=""
                      style={{ color: stat.color }}
                    />
                  )}
                </div>
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                  {stat.unit}
                </p>
                <p className="text-xs text-[var(--text-muted)] leading-snug max-w-[140px]">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
