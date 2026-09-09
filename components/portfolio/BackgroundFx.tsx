export default function BackgroundFx() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "92vmax",
          height: "92vmax",
          left: "-30vmax",
          top: "-34vmax",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--accent, #E8A33D) 22%, transparent), transparent 62%)",
          filter: "blur(30px)",
          animation: "edo-float-a 34s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "76vmax",
          height: "76vmax",
          right: "-28vmax",
          bottom: "-30vmax",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(90,140,255,.14), transparent 64%)",
          filter: "blur(34px)",
          animation: "edo-float-b 46s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "46%",
          background:
            "linear-gradient(180deg, transparent, color-mix(in oklch, var(--accent, #E8A33D) 9%, transparent), transparent)",
          animation: "edo-sweep 15s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(130% 95% at 50% 34%, transparent 38%, rgba(7,7,10,.82) 100%)",
        }}
      />
    </div>
  );
}
