import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
};

type ButtonProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
};

type AnchorProps = Common & AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
};

type GlowButtonProps = ButtonProps | AnchorProps;

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none";

const variants = {
  primary:
    "text-white bg-gradient-to-br from-[#5b21b6] via-[#4c1d95] to-[#2e1065] border border-white/10 shadow-[0_0_0_1px_rgba(109,40,217,0.35),0_14px_30px_-10px_rgba(46,16,101,0.75)] hover:border-white/15 hover:from-[#6d28d9] hover:via-[#5b21b6] hover:to-[#3b0764] hover:shadow-[0_0_0_1px_rgba(139,92,246,0.55),0_20px_45px_-10px_rgba(76,29,149,0.85)]",
  ghost:
    "text-white/90 border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-[color:var(--color-accent-soft)]/45 hover:text-white hover:bg-white/[0.06] hover:shadow-[0_0_30px_-10px_rgba(109,40,217,0.55)]",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function GlowButton(props: GlowButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _as; void _v; void _s; void _c; void _ch;
    return (
      <a className={classes} {...rest}>
        <Shimmer variant={variant} />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps;
  void _as; void _v; void _s; void _c; void _ch;
  return (
    <button className={classes} {...rest}>
      <Shimmer variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

function Shimmer({ variant }: { variant: "primary" | "ghost" }) {
  if (variant !== "primary") return null;
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
    >
      <span
        className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-white/30 blur-md opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
      />
    </span>
  );
}
