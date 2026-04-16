"use client";

import { motion } from "motion/react";
import {
  Blocks,
  Server,
  Cloud,
  Database,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { NeonCard } from "@/components/ui/neon-card";
import { skills } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  "Blockchain & Web3": Blocks,
  "Backend Development": Server,
  "Cloud & Infrastructure": Cloud,
  "Databases & Systems": Database,
  "Security & Auth": ShieldCheck,
};

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical skills"
          title={
            <>
              The <span className="text-gradient-neon">stack</span> I reach for.
            </>
          }
          description="From Rust and Substrate for Layer-1 consensus to Next.js on Supabase edge functions — a toolkit honed across production, at scale."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = iconMap[group.label] ?? Server;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
              >
                <NeonCard className="h-full">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[color:var(--color-brand-700)]/50 to-[color:var(--color-brand-500)]/30 text-[color:var(--color-accent-soft)] shadow-[0_0_24px_-8px_rgba(139,92,246,0.55)]">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                      {group.label}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.72rem] text-white/70 transition-colors hover:border-[color:var(--color-neon-cyan)]/30 hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </NeonCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
