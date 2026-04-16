import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-sm text-white/50 md:flex-row md:justify-between">
        <p className="font-mono text-xs tracking-wide">
          © {year} {profile.name}. Crafted with Next.js, Tailwind and a lot of late-night caffeine.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 bg-white/5 p-2 transition-all hover:border-[color:var(--color-neon-cyan)]/50 hover:text-white"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/5 p-2 transition-all hover:border-[color:var(--color-neon-cyan)]/50 hover:text-white"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/5 p-2 transition-all hover:border-[color:var(--color-neon-cyan)]/50 hover:text-white"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={profile.hashnode}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Hashnode"
            className="rounded-full border border-white/10 bg-white/5 p-2 transition-all hover:border-[color:var(--color-neon-cyan)]/50 hover:text-white"
          >
            <SiHashnode size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
