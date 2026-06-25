"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "ghost";
}

export function ShimmerButton({
  children,
  href,
  className,
  variant = "primary",
  ...props
}: ShimmerButtonProps) {
  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]";

  const variants = {
    primary:
      "bg-[var(--accent-cyan)] text-[var(--bg-base)] font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.45)]",
    ghost:
      "border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-bright)]",
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], className)}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {variant === "primary" && (
        <span
          className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden
        />
      )}
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-flex">
        {content}
      </a>
    );
  }

  return content;
}
