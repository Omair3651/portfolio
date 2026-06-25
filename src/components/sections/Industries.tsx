"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";
import { MagicCard } from "@/components/ui/BorderBeam";
import { Bot, Stethoscope, ShoppingBag } from "lucide-react";

const TICKER_ITEMS = [
  "Dental Clinics",
  "Medical Practices",
  "E-commerce",
  "Real Estate",
  "Law Firms",
  "Restaurants",
  "Retail",
  "Logistics",
];

const INDUSTRY_CARDS = [
  {
    icon: Bot,
    name: "Dental Clinics",
    color: "var(--accent-cyan)",
    headline: "AI receptionist that never misses a call",
    body: "Automated booking, reminders, and follow-ups. Patients book 24/7 and staff never pick up the phone for routine scheduling again.",
  },
  {
    icon: Stethoscope,
    name: "Medical Practices",
    color: "var(--accent-blue)",
    headline: "Patient intake and appointment management",
    body: "From first contact to confirmed appointment — fully automated. Works across GP practices, specialists, and allied health.",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce",
    color: "var(--green)",
    headline: "Customer service that scales without headcount",
    body: "Order tracking, return handling, and product questions answered instantly. Escalates to a human only when it matters.",
  },
];

export function Industries() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="industries" className="py-24 lg:py-32 bg-[var(--bg-base)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-3">
            Who we serve
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[var(--text-primary)]">
            We&apos;ve built for these industries.{" "}
            <span className="text-[var(--text-muted)]">We can build for yours.</span>
          </h2>
        </motion.div>

        {/* Ticker/marquee */}
        <div className="relative mb-14 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10" />

          {prefersReducedMotion ? (
            <div className="flex flex-wrap gap-3 py-2">
              {TICKER_ITEMS.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-[var(--border)] text-sm text-[var(--text-muted)] font-mono whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <div className="flex gap-6 py-2 w-max">
              <motion.div
                className="flex gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="px-4 py-2 rounded-full border border-[var(--border)] text-sm text-[var(--text-muted)] font-mono whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          )}
        </div>

        {/* Industry cards */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {INDUSTRY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.name} variants={fadeInUp}>
                <MagicCard className="p-6 h-full">
                  <div
                    className="w-9 h-9 rounded-lg border flex items-center justify-center mb-4"
                    style={{
                      background: `${card.color}12`,
                      borderColor: `${card.color}30`,
                    }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: card.color }} />
                  </div>
                  <p
                    className="text-[11px] font-mono uppercase tracking-widest mb-2"
                    style={{ color: card.color }}
                  >
                    {card.name}
                  </p>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3">
                    {card.headline}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {card.body}
                  </p>
                </MagicCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
