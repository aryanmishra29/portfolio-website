"use client";

import { motion } from "motion/react";
import { ArrowUpRight, BookText } from "lucide-react";
import { SiHashnode } from "react-icons/si";
import { SectionHeading } from "@/components/ui/section-heading";
import { posts, profile } from "@/lib/data";

export function Writing() {
  return (
    <section id="writing" className="relative scroll-mt-24 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Writing"
            title={
              <>
                Notes from the <span className="text-gradient-neon">engineering desk</span>.
              </>
            }
            description="Deep-dive essays on design patterns, distributed systems, and the craft of building software."
          />
          <a
            href={profile.hashnode}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/70 transition-all hover:border-[color:var(--color-neon-cyan)]/40 hover:text-white"
          >
            <SiHashnode size={14} />
            Full blog
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[color:var(--color-ink-700)]/80 to-[color:var(--color-ink-800)]/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.45)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--color-brand-500)]/20 blur-3xl transition-all duration-500 group-hover:bg-[color:var(--color-neon-magenta)]/25"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[color:var(--color-neon-cyan)]">
                  <BookText size={12} />
                  {post.kicker}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white">
                  {post.title}
                </h3>
              </div>
              <div className="relative flex items-center justify-between text-xs text-white/50">
                <span className="font-mono">Hashnode · Blog</span>
                <ArrowUpRight
                  size={18}
                  className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--color-neon-cyan)]"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
