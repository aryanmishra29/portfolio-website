"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, profile } from "@/lib/data";

export function Nav() {
  const [active, setActive] = useState<string>(navLinks[0]?.id ?? "");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-[color:var(--color-ink-900)]/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Home"
        >
          <span
            role="img"
            aria-label={`${profile.name} headshot`}
            className="relative inline-block h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15 bg-[color:var(--color-ink-800)] shadow-[0_0_22px_-6px_rgba(76,29,149,0.8)] transition-transform duration-300 group-hover:scale-[1.06]"
          >
            <Image
              src={profile.headshot}
              alt=""
              fill
              sizes="96px"
              priority
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-white transition-colors group-hover:text-white">
              {profile.name}
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
              Senior Engineer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === link.id
                  ? "text-white"
                  : "text-white/50 hover:text-white/80",
              )}
            >
              {active === link.id && (
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/5 shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)]"
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-[color:var(--color-neon-cyan)]/40 hover:text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div
            className="absolute inset-x-0 top-full border-t border-white/5 bg-[color:var(--color-ink-900)]/95 backdrop-blur-xl"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl border border-transparent px-4 py-3 text-base transition-colors",
                    active === link.id
                      ? "border-white/10 bg-white/5 text-white"
                      : "text-white/60 hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
