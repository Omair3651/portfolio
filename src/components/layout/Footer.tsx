"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          <div>
            <Link
              href="/"
              className="font-semibold text-[var(--text-primary)] text-base tracking-tight"
            >
              NeuralOps
            </Link>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              AI Agents & Automation for US Businesses
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 NeuralOps LLC · Registered in the United States
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
