"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
}

function getCenter(el: HTMLElement, container: HTMLElement) {
  const elRect = el.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  return {
    x: elRect.left - containerRect.left + elRect.width / 2,
    y: elRect.top - containerRect.top + elRect.height / 2,
  };
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  gradientStartColor = "#06B6D4",
  gradientStopColor = "#2563EB",
}: AnimatedBeamProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current || !svgRef.current || !pathRef.current) return;
      const from = getCenter(fromRef.current, containerRef.current);
      const to = getCenter(toRef.current, containerRef.current);
      const cx = (from.x + to.x) / 2;
      const cy = (from.y + to.y) / 2 - curvature;
      const d = `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
      pathRef.current.setAttribute("d", d);
      const containerRect = containerRef.current.getBoundingClientRect();
      svgRef.current.setAttribute("width", String(containerRect.width));
      svgRef.current.setAttribute("height", String(containerRect.height));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [containerRef, fromRef, toRef, curvature]);

  const id = `beam-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <svg
      ref={svgRef}
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Static path */}
      <path
        ref={pathRef}
        fill="none"
        stroke="var(--border)"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      {/* Animated beam */}
      {!prefersReducedMotion && (
        <motion.path
          fill="none"
          stroke={`url(#${id}-grad)`}
          strokeWidth="2"
          initial={{ pathLength: 0, pathOffset: reverse ? 1 : 0 }}
          animate={{ pathOffset: reverse ? 0 : 1 }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ pathLength: 0.3 }}
          d=""
          ref={(el) => {
            if (el && pathRef.current) el.setAttribute("d", pathRef.current.getAttribute("d") || "");
          }}
        />
      )}
    </svg>
  );
}
