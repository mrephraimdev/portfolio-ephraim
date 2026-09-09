export default function Footer() {
  return (
    <footer
      className="font-mono"
      style={{
        borderTop: "1px solid rgba(242,239,233,.12)",
        padding: "26px clamp(16px, 4vw, 56px) 34px",
        display: "flex",
        flexWrap: "wrap",
        gap: "14px 28px",
        alignItems: "center",
        fontSize: 12,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        color: "#8A857D",
      }}
    >
      <span>Ephraïm David Osim — Développeur full-stack</span>
      <span style={{ marginLeft: "auto" }}>Abidjan · CI</span>
      <a href="#top" style={{ color: "#9A968F" }}>
        Haut de page ↑
      </a>
    </footer>
  );
}
