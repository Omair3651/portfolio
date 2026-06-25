"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, Workflow, Globe, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";
import { MagicCard } from "@/components/ui/BorderBeam";

/* ── Mini phone-call flow animation inside the AI Agents card ── */
function AgentFlow() {
  const prefersReducedMotion = useReducedMotion();
  const steps = [
    { label: "Call in", color: "var(--accent-cyan)" },
    { label: "AI answers", color: "var(--accent-blue)" },
    { label: "Booked", color: "var(--green)" },
    { label: "SMS sent", color: "var(--green)" },
  ];

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-1.5">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.3 }}
            className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border"
            style={{
              color: s.color,
              borderColor: `${s.color}40`,
              background: `${s.color}10`,
            }}
          >
            {s.label}
          </motion.div>
          {i < steps.length - 1 && (
            <ArrowRight className="w-3 h-3 text-[var(--text-muted)]" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Animated beam for the Workflow card ── */
function WorkflowBeam() {
  const tools = ["CRM", "Email", "Slack", "Sheets"];
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {tools.map((t, i) => (
        <div key={t} className="flex items-center gap-2">
          <motion.div
            className="px-2.5 py-1 rounded-md text-[10px] font-mono text-[var(--text-secondary)] border border-[var(--border)] bg-[var(--bg-elevated)]"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            {t}
          </motion.div>
          {i < tools.length - 1 && (
            <motion.div
              className="h-px bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-blue)]"
              initial={{ width: 0 }}
              whileInView={{ width: prefersReducedMotion ? 24 : 24 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 + 0.1, duration: 0.4 }}
              style={{ width: 24 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Browser mockup for the Websites card ── */
function BrowserMockup() {
  return (
    <div className="rounded-md border border-[var(--border)] overflow-hidden w-full max-w-[180px]">
      <div className="bg-[var(--bg-elevated)] px-3 py-2 flex items-center gap-1.5 border-b border-[var(--border)]">
        {["var(--amber)", "var(--green)", "#4A6380"].map((c, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: `var(${c.slice(4, -1)})` || c }}
          />
        ))}
        <div className="flex-1 h-3 rounded bg-[var(--border)] ml-1" />
      </div>
      <div className="bg-[var(--bg-surface)] p-3 space-y-2">
        <div className="h-2 w-2/3 rounded bg-[var(--border)]" />
        <div className="h-2 w-full rounded bg-[var(--border)]/60" />
        <div className="h-2 w-4/5 rounded bg-[var(--border)]/40" />
        <div className="h-5 w-1/2 rounded-md mt-3" style={{ background: "var(--accent-cyan)30" }} />
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
          className="mb-14"
        >
          <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-3">
            What we do
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] mb-3">
            What we build for you.
          </h2>
          <p className="text-xl text-[var(--text-muted)]">Three things, done properly.</p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {/* AI Agents — spans 2 cols, 2 rows */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 lg:col-span-3 lg:row-span-2"
          >
            <MagicCard className="h-full min-h-[320px] p-7 flex flex-col">
              <div className="mb-auto">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20">
                    <Bot className="w-5 h-5 text-[var(--accent-cyan)]" />
                  </div>
                  <span className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest">
                    Our specialty
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
                  AI Agents
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-sm">
                  Custom AI systems that handle real business tasks — answering
                  calls, booking appointments, qualifying leads, responding to
                  customers. They work 24 hours a day and never call in sick.
                </p>
                <div className="mb-6">
                  <AgentFlow />
                </div>
              </div>
              <a
                href="/case-studies/dental"
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-cyan)] hover:opacity-80 transition-opacity border border-[var(--accent-cyan)]/30 rounded-full px-3 py-1.5 self-start"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                LIVE: Dental Clinic AI →
              </a>
            </MagicCard>
          </motion.div>

          {/* Workflow Automation */}
          <motion.div variants={fadeInUp} className="md:col-span-1 lg:col-span-2">
            <MagicCard className="h-full min-h-[200px] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20">
                  <Workflow className="w-4.5 h-4.5 text-[var(--accent-blue)]" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  The invisible engine
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Workflow Automation
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                Connect your tools, eliminate manual steps, and let data flow
                automatically between the systems you already use.
              </p>
              <WorkflowBeam />
            </MagicCard>
          </motion.div>

          {/* Websites */}
          <motion.div variants={fadeInUp} className="md:col-span-1 lg:col-span-2">
            <MagicCard className="h-full min-h-[200px] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[var(--green)]/10 border border-[var(--green)]/20">
                  <Globe className="w-4.5 h-4.5 text-[var(--green)]" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  From zero
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Websites & Web Apps
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                A website that actually works for your business — not a template
                you fight with. Built from scratch, with conversion in mind.
              </p>
              <BrowserMockup />
            </MagicCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
