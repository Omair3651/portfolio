"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const INDUSTRIES = [
  "Dental Clinics",
  "Medical Practices",
  "E-commerce",
  "Real Estate",
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-base)] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_50%_0%,rgba(6,182,212,0.02),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[var(--border)]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-[var(--text-primary)] text-base tracking-tight mb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] rounded"
            >
              NeuralOps
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]"
                style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
              />
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[220px] mb-5">
              AI automation agency building systems for US businesses that want
              to scale without adding headcount.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-cyan)] hover:opacity-80 transition-opacity focus-visible:outline-none"
            >
              Book a free audit →
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors focus-visible:outline-none focus-visible:text-[var(--accent-cyan)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Industries */}
          <div>
            <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Industries
            </p>
            <ul className="flex flex-col gap-2.5">
              {INDUSTRIES.map((ind) => (
                <li key={ind} className="text-sm text-[var(--text-muted)]">
                  {ind}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@neuralops.io"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
              >
                hello@neuralops.io
              </a>
              <a
                href="https://linkedin.com/company/neuralops"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-[var(--green)]" />
                <span className="text-xs text-[var(--text-muted)]">
                  Response within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 NeuralOps LLC · Registered in the United States
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors focus-visible:outline-none focus-visible:text-[var(--accent-cyan)]"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
