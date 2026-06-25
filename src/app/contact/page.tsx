"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";

const BUSINESS_TYPES = [
  "Dental",
  "Medical",
  "E-commerce",
  "Real Estate",
  "Restaurant",
  "Other",
];

const HEAR_ABOUT = [
  "Google",
  "LinkedIn",
  "Referral",
  "Social media",
  "Other",
];

export default function ContactPage() {
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
    <>
      <Nav />
      <main className="pt-16 min-h-screen">
        <section className="py-24 lg:py-32">
          <div className="max-w-2xl mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
                Get in touch
              </p>
              <h1 className="text-4xl lg:text-5xl font-serif italic text-[var(--text-primary)] leading-tight mb-4">
                Let&apos;s talk about your business.
              </h1>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Tell us about what you do and what you want to automate. We&apos;ll
                come back with an honest assessment — no pitch, no retainer
                required.
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl border border-[var(--green)]/30 bg-[var(--green)]/5 p-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/30 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-[var(--green)]" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    We&apos;ve got your message.
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">
                    We&apos;ll reach out within 24 hours to set up your free audit.
                  </p>
                  <Link
                    href="/"
                    className="text-sm text-[var(--accent-cyan)] hover:opacity-80 transition-opacity"
                  >
                    ← Back to homepage
                  </Link>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase tracking-wide">
                        Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase tracking-wide">
                      Company / Business name
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Your business"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase tracking-wide">
                      What do you do? *
                    </label>
                    <select name="business_type" required className={inputClass}>
                      <option value="" disabled>
                        Select your industry
                      </option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase tracking-wide">
                      What&apos;s the main thing you want to automate? *
                    </label>
                    <textarea
                      name="automate"
                      required
                      rows={4}
                      placeholder="Tell us what's taking up too much time, costing too much, or simply isn't working..."
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase tracking-wide">
                      How did you hear about us?
                    </label>
                    <select name="hear_about" className={inputClass}>
                      <option value="">Select (optional)</option>
                      {HEAR_ABOUT.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full relative flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold bg-[var(--accent-cyan)] text-[var(--bg-base)] overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-shadow duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send message →"}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-400 text-center">
                      Something went wrong. Email us directly at{" "}
                      <a
                        href="mailto:hello@neuralops.io"
                        className="text-[var(--accent-cyan)]"
                      >
                        hello@neuralops.io
                      </a>
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
