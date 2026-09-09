import Reveal from "./Reveal";

const STEPS = [
  {
    n: "ÉTAPE 01",
    title: "Cadrage métier",
    text: "Je passe une journée dans le métier avant d'écrire une ligne : comment on encaisse, qui imprime le ticket, ce qui se passe quand le réseau tombe. Le modèle de données sort de là.",
  },
  {
    n: "ÉTAPE 02",
    title: "Construction assistée par IA",
    text: "L'IA accélère l'écriture du code, jamais les décisions. Architecture, découpage, isolation des données, arbitrages de sécurité : ce sont des choix que je relis et que j'assume ligne par ligne.",
  },
  {
    n: "ÉTAPE 03",
    title: "Preuve avant livraison",
    text: "Tests automatisés sur les parcours qui touchent à l'argent et aux données. Audits sécurité et accessibilité. Rien ne part en production sur la foi d'un « ça marche chez moi ».",
  },
  {
    n: "ÉTAPE 04",
    title: "Mise en production réelle",
    text: "Déploiement, monitoring Sentry, documentation de reprise. Un projet livré, c'est un projet que quelqu'un d'autre peut reprendre sans moi.",
  },
];

export default function Method() {
  return (
    <Reveal style={{ padding: "0 clamp(16px, 4vw, 56px) clamp(50px, 8vw, 110px)" }}>
      <section id="methode">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px 32px",
            alignItems: "baseline",
            borderTop: "1px solid rgba(242,239,233,.12)",
            paddingTop: 22,
            marginBottom: "clamp(26px, 4vw, 52px)",
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: 12,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--accent, #E8A33D)",
            }}
          >
            03 — Méthode
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))",
            gap: "clamp(24px, 3vw, 44px)",
          }}
        >
          {STEPS.map((s) => (
            <div key={s.n}>
              <div className="font-mono" style={{ fontSize: 12, color: "#8A857D", letterSpacing: ".16em" }}>
                {s.n}
              </div>
              <h3 style={{ margin: "12px 0 10px", fontSize: 20, fontWeight: 700, letterSpacing: "-.01em" }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#9A968F", textWrap: "pretty" }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
