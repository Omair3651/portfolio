"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const NODES = [
  { x: 8, y: 12 }, { x: 20, y: 5 }, { x: 35, y: 18 }, { x: 50, y: 8 },
  { x: 65, y: 22 }, { x: 78, y: 10 }, { x: 90, y: 25 }, { x: 15, y: 38 },
  { x: 28, y: 55 }, { x: 42, y: 40 }, { x: 58, y: 50 }, { x: 72, y: 35 },
  { x: 85, y: 55 }, { x: 95, y: 42 }, { x: 5, y: 65 }, { x: 22, y: 75 },
  { x: 38, y: 68 }, { x: 55, y: 72 }, { x: 68, y: 62 }, { x: 80, y: 78 },
  { x: 92, y: 68 }, { x: 12, y: 88 }, { x: 32, y: 90 }, { x: 48, y: 85 },
  { x: 62, y: 92 }, { x: 75, y: 85 }, { x: 88, y: 90 },
];

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13],
  [7, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19], [19, 20],
  [14, 21], [21, 22], [22, 23], [23, 24], [24, 25], [25, 26],
  [2, 9], [4, 11], [6, 13], [9, 16], [11, 18], [13, 20], [16, 23], [18, 25],
  [1, 8], [3, 10], [5, 12], [8, 15], [10, 17], [12, 19],
];

// Paths to animate (sequences of node indices)
const PULSE_PATHS = [
  [0, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26],
  [0, 7, 14, 21],
  [2, 9, 16, 23],
  [4, 11, 18, 25],
  [6, 13, 20, 26],
];

function buildPath(indices: number[]): string {
  const points = indices.map((i) => NODES[i]);
  if (points.length < 2) return "";
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x}% ${p.y}%`)
    .join(" ");
}

export function CircuitBackground() {
  const canvasRef = useRef<SVGSVGElement>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {PULSE_PATHS.map((path, i) => (
          <linearGradient
            key={i}
            id={`pulse-grad-${i}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>

      {/* Static network lines */}
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={`${NODES[a].x}%`}
          y1={`${NODES[a].y}%`}
          x2={`${NODES[b].x}%`}
          y2={`${NODES[b].y}%`}
          stroke="#1E2D42"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
      ))}

      {/* Static nodes */}
      {NODES.map((node, i) => (
        <circle
          key={i}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="2.5"
          fill="#1E2D42"
          stroke="#2A3D56"
          strokeWidth="0.8"
        />
      ))}

      {/* Animated pulses */}
      {!prefersReducedMotion &&
        PULSE_PATHS.map((path, i) => (
          <path
            key={i}
            d={buildPath(path)}
            fill="none"
            stroke={`url(#pulse-grad-${i})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: "30 200",
              strokeDashoffset: 0,
              animation: `circuit-pulse ${3 + (i % 3)}s linear ${i * 0.8}s infinite`,
            }}
          />
        ))}

      <style>{`
        @keyframes circuit-pulse {
          0%   { stroke-dashoffset: 230; }
          100% { stroke-dashoffset: -230; }
        }
      `}</style>
    </svg>
  );
}
