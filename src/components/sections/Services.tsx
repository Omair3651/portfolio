"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Workflow, Globe, ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";
import { MagicCard } from "@/components/ui/BorderBeam";

/* ── Animated call conversation for the AI Agents card ── */
function ConversationMockup() {
  const prefersReducedMotion = useReducedMotion();
  const messages = [
    { from: "caller", text: "Hi, I'd like to book an appointment for a cleaning." },
    { from: "ai", text: "Of course! I have Tuesday at 2pm or Thursday at 10am available. Which works best?" },
    { from: "caller", text: "Tuesday 2pm is perfect." },
    { from: "ai", text: "Booked! You'll get a confirmation text shortly." },
  ];

  return (
    <div className="space-y-2.5">
      {messages.map((m, i) => (
        <motion.div
          key={i}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.18, duration: 0.35, ease: "easeOut" }}
          className={`flex ${m.from === "ai" ? "justify-start" : "justify-end"}`}
        >
          <div
            className="max-w-[80%] px-3 py-2 rounded-xl text-[11px] leading-snug"
            style={
              m.from === "ai"
                ? {
                    background: "rgba(6,182,212,0.10)",
                    border: "1px solid rgba(6,182,212,0.20)",
                    color: "var(--text-secondary)",
                  }
                : {
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }
            }
          >
            {m.from === "ai" && (
              <span className="block text-[9px] font-mono text-[var(--accent-cyan)] mb-0.5 uppercase tracking-wide">
                AI Agent
              </span>
            )}
            {m.text}
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.4 }}
        className="flex items-center gap-1.5"
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green)]" />
        <span className="text-[10px] font-mono text-[var(--green)]">
          Appointment confirmed · SMS sent
        </span>
      </motion.div>
    </div>
  );
}

/* ── Integration logos for Workflow card ── */
function WorkflowIntegrations() {
  const tools = [
    { name: "CRM", color: "#06B6D4" },
    { name: "Email", color: "#2563EB" },
    { name: "Slack", color: "#8B5CF6" },
    { name: "Sheets", color: "#10B981" },
  ];
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        {tools.map((t, i) => (
          <div key={t.name} className="flex items-center gap-2">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-semibold"
              style={{
                color: t.color,
                background: `${t.color}12`,
                border: `1px solid ${t.color}25`,
              }}
            >
              {t.name}
            </motion.div>
            {i < tools.length - 1 && (
              <motion.div
                className="h-px bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-blue)] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.15, duration: 0.35 }}
                style={{ width: 20 }}
              />
            )}
          </div>
        ))}
      </div>
      <p className="text-[11px] text-[var(--text-muted)] font-mono">
        Data flows automatically · Zero manual steps
      </p>
    </div>
  );
}

/* ── Website metrics preview ── */
function WebsiteMetrics() {
  return (
    <div className="rounded-xl border border-[var(--border)] overflow-hidden">
      <div className="bg-[var(--bg-elevated)] px-3 py-2 flex items-center gap-1.5 border-b border-[var(--border)]">
        {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
          <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 mx-2 h-3.5 rounded-full bg-[var(--border)]" />
      </div>
      <div className="bg-[var(--bg-surface)] p-4 space-y-2.5">
        <div className="h-3 w-3/4 rounded bg-[var(--border)]/60" />
        <div className="h-2 w-full rounded bg-[var(--border)]/40" />
        <div className="h-2 w-5/6 rounded bg-[var(--border)]/30" />
        <div className="flex gap-2 mt-3">
          <div
            className="h-7 w-28 rounded-lg"
            style={{ background: "rgba(6,182,212,0.2)", border: "1px solid rgba(6,182,212,0.3)" }}
          />
          <div className="h-7 w-20 rounded-lg bg-[var(--border)]/40" />
        </div>
        <div className="pt-2 grid grid-cols-3 gap-2">
          {["3.2s → 0.8s", "+41% conv.", "100/100"].map((m) => (
            <div key={m} className="text-center py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)]">
              <span className="text-[9px] font-mono text-[var(--accent-cyan)]">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-3">
            What we build
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight mb-4">
            Three services.{" "}
            <span className="font-serif italic text-[var(--text-secondary)]">
              One mission.
            </span>
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            Make your business run better without making your team bigger.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {/* AI Agents — spans 3 cols, large */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 lg:col-span-3 lg:row-span-2"
          >
            <MagicCard className="h-full min-h-[360px] p-7 flex flex-col">
              <div className="mb-auto">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20">
                    <Bot className="w-5 h-5 text-[var(--accent-cyan)]" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest">
                      Our specialty
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                  AI Voice & Chat Agents
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-sm">
                  Custom AI systems that handle real business tasks — answering
                  calls, booking appointments, qualifying leads, and sending
                  follow-ups. They work 24 hours a day and never call in sick.
                </p>

                <div className="mb-6">
                  <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">
                    Live conversation example
                  </p>
                  <ConversationMockup />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="/case-studies/dental"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 rounded-full px-3.5 py-1.5 hover:bg-[var(--accent-cyan)]/5 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                  LIVE: Dental Clinic AI →
                </a>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  From $1,800/mo
                </span>
              </div>
            </MagicCard>
          </motion.div>

          {/* Workflow Automation */}
          <motion.div variants={fadeInUp} className="md:col-span-1 lg:col-span-2">
            <MagicCard className="h-full min-h-[220px] p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20">
                  <Workflow className="w-4.5 h-4.5 text-[var(--accent-blue)]" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  The invisible engine
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Workflow Automation
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                Connect your tools, eliminate manual steps, and let data flow
                between the systems you already use. Stop doing the same thing
                twice.
              </p>
              <WorkflowIntegrations />
            </MagicCard>
          </motion.div>

          {/* Websites */}
          <motion.div variants={fadeInUp} className="md:col-span-1 lg:col-span-2">
            <MagicCard className="h-full min-h-[220px] p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[var(--green)]/10 border border-[var(--green)]/20">
                  <Globe className="w-4.5 h-4.5 text-[var(--green)]" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  Conversion-first
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Websites & Web Apps
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                A website built to convert, not just impress. Fast, modern, and
                designed with your customers&apos; next action in mind.
              </p>
              <WebsiteMetrics />
            </MagicCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
