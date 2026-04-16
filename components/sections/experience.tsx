"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { NeonCard } from "@/components/ui/neon-card";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              A track record of <span className="text-gradient-neon">building hard things</span>.
            </>
          }
          description="Four roles, multiple products, one common theme — take ownership, ship fast, keep the lights on for millions of users."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[11px] top-0 bottom-0 hidden w-px bg-gradient-to-b from-[color:var(--color-neon-cyan)]/40 via-[color:var(--color-brand-500)]/40 to-transparent sm:block"
          />

          <ol className="space-y-10">
            {experience.map((job, i) => (
              <motion.li
                key={`${job.company}-${job.dates}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative sm:pl-14"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-6 hidden h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[color:var(--color-ink-800)] shadow-[0_0_18px_-4px_rgba(139,92,246,0.65)] sm:inline-flex"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[color:var(--color-accent-soft)] to-[color:var(--color-accent-deep)]" />
                </span>

                <NeonCard className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[color:var(--color-neon-cyan)]">
                        <Briefcase size={12} />
                        {job.company}
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {job.role}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
                      {job.dates}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.7rem] text-white/65"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {job.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent-soft)] shadow-[0_0_10px_rgba(167,139,250,0.9)]"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </NeonCard>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
