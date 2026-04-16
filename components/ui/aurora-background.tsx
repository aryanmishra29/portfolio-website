export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.32] mask-radial" />
      <div
        className="motion-safe-only absolute -top-40 left-1/2 h-[70vh] w-[70vw] -translate-x-1/2 rounded-full blur-3xl opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(76, 29, 149, 0.65), rgba(76, 29, 149, 0) 70%)",
          animation: "var(--animate-aurora)",
        }}
      />
      <div
        className="motion-safe-only absolute -bottom-40 -right-20 h-[60vh] w-[55vw] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(46, 16, 101, 0.55), rgba(46, 16, 101, 0) 70%)",
          animation: "var(--animate-aurora)",
          animationDirection: "reverse",
        }}
      />
      <div
        className="motion-safe-only absolute top-1/3 -left-20 h-[50vh] w-[45vw] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124, 58, 237, 0.35), rgba(124, 58, 237, 0) 70%)",
          animation: "var(--animate-aurora)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--color-ink-900)] to-transparent" />
    </div>
  );
}
