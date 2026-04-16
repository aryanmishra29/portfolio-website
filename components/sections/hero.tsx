"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownRight, Download, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";
import { GlowButton } from "@/components/ui/glow-button";
import { profile, rotatingRoles } from "@/lib/data";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % rotatingRoles.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pb-20 pt-32 sm:pt-40"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-white/70 backdrop-blur"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for senior engineering roles &amp; consulting
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.95] tracking-tight text-white"
          >
            <span className="block text-white">{profile.name.split(" ")[0]}</span>
            <span className="block text-gradient-violet">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-wrap items-center gap-3 text-lg text-white/70 sm:text-xl"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              / Currently
            </span>
            <div className="relative inline-flex h-14 min-w-[14ch] items-center overflow-hidden">
              {rotatingRoles.map((r, i) => (
                <motion.span
                  key={r}
                  initial={false}
                  animate={{
                    y: i === roleIndex ? 0 : i < roleIndex ? -28 : 28,
                    opacity: i === roleIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 font-semibold text-white"
                >
                  {r}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <GlowButton as="a" href="/resume.pdf" download size="lg">
              <Download size={16} />
              Download Résumé
            </GlowButton>
            <GlowButton as="a" href="#experience" variant="ghost" size="lg">
              See my work
              <ArrowDownRight size={16} />
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/55"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-[color:var(--color-neon-cyan)]" />
              {profile.location}
            </span>
            <div className="flex items-center gap-2">
              <SocialIcon href={`mailto:${profile.email}`} label="Email">
                <Mail size={16} />
              </SocialIcon>
              <SocialIcon href={profile.github} label="GitHub">
                <FaGithub size={16} />
              </SocialIcon>
              <SocialIcon href={profile.linkedin} label="LinkedIn">
                <FaLinkedin size={16} />
              </SocialIcon>
              <SocialIcon href={profile.hashnode} label="Hashnode blog">
                <SiHashnode size={16} />
              </SocialIcon>
            </div>
          </motion.div>
        </div>

        <Portrait />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white/40 sm:flex"
      >
        <span>Scroll</span>
        <span className="relative inline-block h-8 w-px overflow-hidden">
          <span
            className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-[color:var(--color-neon-cyan)] to-transparent"
            style={{ animation: "var(--animate-scroll-cue)" }}
          />
        </span>
      </motion.div>
    </section>
  );
}

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="order-1 relative mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:order-2 lg:mx-0 lg:max-w-none"
    >
      <div className="relative">
        {/* Single ambient violet glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-12 rounded-full bg-[rgba(124,58,237,0.18)] blur-3xl"
          style={{ animation: "var(--animate-pulse-glow)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-14 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-[rgba(124,58,237,0.35)] blur-3xl"
        />

        {/* Thin violet gradient border */}
        <div
          aria-hidden
          className="absolute -inset-px rounded-[2rem] opacity-70"
          style={{
            background:
              "linear-gradient(145deg, rgba(167,139,250,0.55), rgba(124,58,237,0.1) 45%, rgba(167,139,250,0.45))",
          }}
        />

        {/* Frame */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[color:var(--color-ink-800)] shadow-[0_30px_80px_-20px_rgba(124,58,237,0.45)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 rounded-[2rem] ring-1 ring-inset ring-white/10"
          />
          <div className="relative aspect-[4/5] w-full sm:w-[22rem] lg:w-[26rem]">
            <Image
              src={profile.portrait}
              alt={`${profile.name} — portrait`}
              fill
              priority
              sizes="(min-width: 1024px) 26rem, (min-width: 640px) 22rem, 20rem"
              className="object-cover object-center"
            />
            {/* Subtle dark vignette — no duotone wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 30%, transparent 55%, rgba(7,1,15,0.55) 100%)",
              }}
            />
            {/* Bottom fade into dark */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[color:var(--color-ink-900)] via-[color:var(--color-ink-900)]/60 to-transparent"
            />
          </div>

          {/* Corner tag */}
          <div className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/85 backdrop-blur">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Online
          </div>

          {/* Identity card chip */}
          <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/50 px-3 py-2 backdrop-blur">
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/45">
                Senior Software Engineer
              </p>
              <p className="mt-0.5 font-display text-sm font-semibold text-white">
                {profile.name}
              </p>
            </div>
            <span className="rounded-md border border-[color:var(--color-accent-soft)]/40 bg-[color:var(--color-accent)]/10 px-2 py-0.5 font-mono text-[0.6rem] text-[color:var(--color-accent-soft)]">
              v3.0
            </span>
          </div>
        </div>

        {/* Floating code chip */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute -right-4 top-10 hidden rotate-6 rounded-xl border border-white/10 bg-[color:var(--color-ink-800)]/90 px-3 py-2 font-mono text-[0.65rem] text-white/80 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.55)] backdrop-blur lg:block"
          style={{ animation: "var(--animate-float)" }}
        >
          <span className="text-[color:var(--color-accent-soft)]">{"> "}</span>
          deploy: <span className="text-white">production</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-accent-soft)]/50 hover:text-white hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.7)]"
    >
      {children}
    </a>
  );
}
