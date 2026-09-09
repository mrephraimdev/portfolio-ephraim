export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "12px 24px",
        padding: "13px clamp(16px, 4vw, 56px)",
        borderBottom: "1px solid rgba(242,239,233,.1)",
        background: "rgba(7,7,10,.78)",
        backdropFilter: "blur(16px)",
      }}
    >
      <a
        href="#top"
        className="font-mono"
        style={{
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: ".16em",
          color: "#F2EFE9",
        }}
      >
        E.D.OSIM
      </a>
      <nav
        className="font-mono"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 18px",
          marginLeft: "auto",
          fontSize: 12,
          lineHeight: 1.4,
          letterSpacing: ".06em",
          textTransform: "uppercase",
        }}
      >
        <a href="#profil" className="edo-nav-link" style={{ color: "#9A968F" }}>
          Profil
        </a>
        <a href="#projets" className="edo-nav-link" style={{ color: "#9A968F" }}>
          Projets
        </a>
        <a href="#methode" className="edo-nav-link" style={{ color: "#9A968F" }}>
          Méthode
        </a>
        <a href="#stack" className="edo-nav-link" style={{ color: "#9A968F" }}>
          Stack
        </a>
      </nav>
      <a
        href="#contact"
        className="font-mono edo-cta-outline"
        style={{
          fontSize: 12,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          padding: "9px 16px",
          border: "1px solid var(--accent, #E8A33D)",
          color: "var(--accent, #E8A33D)",
        }}
      >
        Démarrer un projet
      </a>
    </header>
  );
}
