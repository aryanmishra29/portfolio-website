"use client";

import { motion } from "motion/react";
import { Download, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";
import { GlowButton } from "@/components/ui/glow-button";
import { profile } from "@/lib/data";

export function ResumeCta() {
  return (
    <section id="resume" className="relative scroll-mt-24 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[color:var(--color-brand-900)]/70 via-[color:var(--color-ink-800)] to-[color:var(--color-ink-700)] p-10 sm:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[color:var(--color-neon-cyan)]/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[color:var(--color-neon-magenta)]/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-dots opacity-[0.25] mask-radial"
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70 backdrop-blur">
              <Sparkles size={12} className="text-[color:var(--color-neon-cyan)]" />
              Let&rsquo;s build something
            </div>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Need a senior engineer who <br className="hidden sm:block" />
              <span className="text-gradient-neon">actually ships?</span>
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
              I&rsquo;m open to senior software engineering roles and high-impact
              consulting gigs. Grab the résumé, or drop me a line — I reply to
              every serious message.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <GlowButton as="a" href="/resume.pdf" download size="lg">
                <Download size={16} />
                Download Résumé
              </GlowButton>
              <GlowButton
                as="a"
                href={`mailto:${profile.email}`}
                variant="ghost"
                size="lg"
              >
                <Mail size={16} />
                {profile.email}
              </GlowButton>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/5 pt-8 text-sm text-white/60">
              <SocialLink href={profile.github} label="GitHub" handle="/aryanmishra29">
                <FaGithub size={16} />
              </SocialLink>
              <SocialLink href={profile.linkedin} label="LinkedIn" handle="/aryanmishra29">
                <FaLinkedin size={16} />
              </SocialLink>
              <SocialLink href={profile.hashnode} label="Hashnode" handle="aryanmishra.hashnode.dev">
                <SiHashnode size={16} />
              </SocialLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  handle,
  children,
}: {
  href: string;
  label: string;
  handle: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group inline-flex items-center gap-2.5 transition-colors hover:text-white"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all group-hover:border-[color:var(--color-neon-cyan)]/40 group-hover:text-white">
        {children}
      </span>
      <span className="flex flex-col text-xs leading-tight">
        <span className="font-mono uppercase tracking-wider text-white/45">{label}</span>
        <span className="text-sm text-white/80">{handle}</span>
      </span>
    </a>
  );
}
