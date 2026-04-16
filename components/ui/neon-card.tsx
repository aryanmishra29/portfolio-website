import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type NeonCardProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "section";
  hoverable?: boolean;
};

export function NeonCard({
  className,
  children,
  hoverable = true,
  as: Tag = "div",
  ...rest
}: NeonCardProps) {
  return (
    <Tag
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[color:var(--color-ink-700)]/80 to-[color:var(--color-ink-800)]/80 p-6 backdrop-blur-sm transition-all duration-500",
        hoverable &&
          "hover:border-white/10 hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.45)]",
        className,
      )}
      {...rest}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(124, 58, 237, 0.18), transparent 40%)",
        }}
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
