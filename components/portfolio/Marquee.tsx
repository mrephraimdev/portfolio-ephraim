const STACK = [
  "Laravel 12",
  "PHP 8.2",
  "React",
  "Inertia.js",
  "Livewire 3",
  "Filament 3",
  "TypeScript",
  "Expo / React Native",
  "Alpine.js",
  "Tailwind",
  "MySQL",
  "Docker",
  "GitHub Actions",
  "Sentry",
  "PWA",
];

function Items() {
  return (
    <>
      {STACK.map((item, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span style={{ paddingRight: 26 }}>{item}</span>
          <span style={{ paddingRight: 26, color: "var(--accent, #E8A33D)" }}>
            ·
          </span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(242,239,233,.1)",
        borderBottom: "1px solid rgba(242,239,233,.1)",
        overflow: "hidden",
        padding: "13px 0",
        background: "rgba(7,7,10,.5)",
      }}
    >
      <div
        className="font-mono"
        style={{
          display: "flex",
          width: "max-content",
          animation: "edo-marquee 38s linear infinite",
          fontSize: 13,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "#7E7A74",
        }}
      >
        <Items />
        <Items />
      </div>
    </div>
  );
}
