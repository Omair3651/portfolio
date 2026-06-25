"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const AGENCY_EMAIL = "hello@neuralops.io";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 group focus-visible:outline-none"
      aria-label="Copy email address"
    >
      <span className="font-mono text-[var(--text-primary)] text-base group-hover:text-[var(--accent-cyan)] transition-colors">
        {text}
      </span>
      <motion.div
        animate={copied && !prefersReducedMotion ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.3 }}
        className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <Check className="w-4 h-4 text-[var(--green)]" />
            </motion.div>
          ) : (
            <motion.div key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Copy className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" type="text" required placeholder="Your name" className={inputClass} />
        <input name="email" type="email" required placeholder="Email address" className={inputClass} />
      </div>
      <input name="company" type="text" placeholder="Business / company name" className={inputClass} />
      <textarea
        name="automate"
        rows={3}
        placeholder="What's the biggest thing you want to automate?"
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="relative w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[var(--accent-cyan)] text-[var(--bg-base)] overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-shadow duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Book a Free Audit →"}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 p-3 rounded-lg bg-[var(--green)]/10 border border-[var(--green)]/30 text-sm text-[var(--green)]"
          >
            <Check className="w-4 h-4" />
            Got it. We'll reach out within 24 hours.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-400"
          >
            Something went wrong. Email us directly at {AGENCY_EMAIL}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--bg-surface)] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(6,182,212,0.04),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
            Let's talk
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif italic text-[var(--text-primary)] max-w-2xl mx-auto leading-tight">
            Let&apos;s talk about what&apos;s slowing your business down.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-2 gap-10"
        >
          {/* Left — form */}
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-base)] p-8"
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              Book a free 30-minute audit
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              No sales pitch. Just an honest look at your business and where
              automation can help.
            </p>
            <ContactForm />
          </motion.div>

          {/* Right — direct contact */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center gap-8 lg:pl-8"
          >
            <div>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Prefer direct contact?
              </p>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-[var(--text-muted)]" />
                <CopyButton text={AGENCY_EMAIL} />
              </div>
              <div className="flex items-center gap-2 mt-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[var(--green)]"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-[var(--text-secondary)]">
                  Response within 24 hours
                </span>
              </div>
            </div>

            <div className="h-px bg-[var(--border)]" />

            <div>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Connect
              </p>
              <a
                href="https://linkedin.com/company/neuralops"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-base)] p-6">
              <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                Not ready to talk yet?
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Try the live dental AI demo first.{" "}
                <a
                  href="/case-studies/dental"
                  className="text-[var(--accent-cyan)] hover:opacity-80 transition-opacity"
                >
                  See it in action →
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
