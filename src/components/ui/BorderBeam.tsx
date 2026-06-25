"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  colorFrom = "#06B6D4",
  colorTo = "#2563EB",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:1px_solid_transparent]",
        "[background:linear-gradient(var(--bg-surface),var(--bg-surface))_padding-box,linear-gradient(var(--angle,0deg),transparent_20%,var(--beam-color),transparent_80%)_border-box]",
        className
      )}
      style={
        {
          "--size": size,
          "--duration": `${duration}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          animation: `border-beam ${duration}s linear infinite`,
        } as React.CSSProperties
      }
    >
      <style>{`
        @keyframes border-beam {
          0% { --angle: 0deg; }
          100% { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
    </div>
  );
}

/* Wrapper card that activates beam on hover */
export function MagicCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent-cyan)]/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
