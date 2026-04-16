"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats, summary } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-28 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2"
        >
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Engineers who ship, <br />
                <span className="text-gradient-neon">at scale.</span>
              </>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3"
        >
          <p className="text-pretty text-lg leading-relaxed text-white/75 sm:text-xl">
            {summary}
          </p>

          <p className="mt-6 text-pretty text-base leading-relaxed text-white/55">
            I&rsquo;m happiest at the boundary where product meets infrastructure — shipping
            trading engines with sub-5&nbsp;ms latency, running Layer-1 blockchains on
            Rust, and orchestrating cloud platforms that answer autonomously to AI agents.
            I lead small, senior teams, write code I&rsquo;m proud of, and obsess over
            reliability, security, and the developer experience.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-[color:var(--color-neon-cyan)]/30"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[color:var(--color-brand-500)]/30 blur-2xl transition-opacity group-hover:bg-[color:var(--color-neon-cyan)]/20"
                />
                <dt className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-white/50">
                  {s.label}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
