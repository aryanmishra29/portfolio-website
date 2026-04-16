import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-neon-cyan)]">
          <span className="h-px w-8 bg-gradient-to-r from-transparent via-[color:var(--color-neon-cyan)] to-transparent" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-base text-white/60 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
