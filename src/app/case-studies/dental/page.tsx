import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { DentalHero } from "@/components/case-studies/dental/DentalHero";
import { DentalFlow } from "@/components/case-studies/dental/DentalFlow";
import { DentalDemo } from "@/components/case-studies/dental/DentalDemo";

export const metadata: Metadata = {
  title: "Dental AI Receptionist Case Study — NeuralOps",
  description:
    "How we built an AI receptionist for a dental clinic that answers every call instantly, books appointments 24/7, and sends automated SMS confirmations.",
};

const OUTCOMES = [
  { stat: "24/7", label: "Calls answered", sub: "No voicemail, ever" },
  { stat: "< 2s", label: "Time to answer", sub: "Instant, every call" },
  { stat: "100%", label: "Automated booking", sub: "Zero staff involved" },
  { stat: "3 SMS", label: "Per appointment", sub: "Confirmation + reminders" },
];

export default function DentalCaseStudy() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <DentalHero />

        {/* The Problem */}
        <section className="py-20 bg-[var(--bg-surface)]">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">
              Dental clinics lose patients to voicemail.
            </h2>
            <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                Most dental clinics run on a 9-to-5 front desk. When a patient
                calls after hours — or even during lunch — they hit voicemail.
                Studies show that 60% of callers who reach voicemail don&apos;t
                leave a message. They call the next clinic on the list.
              </p>
              <p>
                This particular clinic was losing 8–12 potential appointments
                per week to unanswered calls. They had no way of knowing the
                exact number, because missed calls leave no record. The revenue
                impact was invisible until we measured it.
              </p>
              <p>
                The solution wasn&apos;t to hire another front desk person. It
                was to make the phone call the last thing that needed a human.
              </p>
            </div>
          </div>
        </section>

        {/* What We Built */}
        <section className="py-20 bg-[var(--bg-base)]">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
              What We Built
            </p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">
              An AI receptionist that works like a person — without the
              limitations of one.
            </h2>
            <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                The system picks up every call, in any language the patient
                speaks, in under two seconds. It introduces itself, asks what
                the patient needs, and handles appointment booking from start
                to finish — without transferring, without putting anyone on
                hold, without ever saying &quot;let me check with someone.&quot;
              </p>
              <p>
                It reads the live appointment calendar. It knows which
                practitioners are available on which days. It books directly
                into the practice management system. It sends a confirmation
                SMS, a reminder 24 hours before, and a follow-up after the
                appointment.
              </p>
              <p>
                The clinic&apos;s staff didn&apos;t change their workflow. The
                system slots into what already exists.
              </p>
            </div>
          </div>
        </section>

        <DentalFlow />

        {/* Results */}
        <section className="py-20 bg-[var(--bg-base)]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
              The Result
            </p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-10">
              Immediate, measurable outcomes.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {OUTCOMES.map((o) => (
                <div
                  key={o.stat}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 text-center hover:border-[var(--accent-cyan)]/30 transition-colors"
                >
                  <div className="font-mono text-4xl font-bold text-[var(--accent-cyan)] mb-1">
                    {o.stat}
                  </div>
                  <div className="text-sm font-medium text-[var(--text-primary)] mb-0.5">
                    {o.label}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">{o.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DentalDemo />

        {/* What's Next */}
        <section className="py-20 bg-[var(--bg-surface)]">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest mb-4">
              What&apos;s Next
            </p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">
              Insurance verification — coming soon.
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              The next phase extends the AI to handle insurance eligibility
              checks before every appointment. The patient gives their insurance
              details on the call — the system verifies coverage in real time
              and flags any issues before they reach the front desk.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              This eliminates the biggest source of surprise billing complaints
              and saves the front desk team 15–20 minutes per patient on
              verification calls.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--bg-base)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif italic text-[var(--text-primary)] mb-4">
              Want this for your clinic?
            </h2>
            <p className="text-base text-[var(--text-secondary)] mb-8">
              We can have a version running for your practice in 2–3 weeks.
              Starts with a free 30-minute audit — no pitch, just an honest
              look at how it would work for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="relative inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-semibold bg-[var(--accent-cyan)] text-[var(--bg-base)] overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-shadow"
              >
                Book a Free Audit →
              </Link>
              <Link
                href="/"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                ← Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
