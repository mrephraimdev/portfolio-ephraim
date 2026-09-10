import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid rgba(242,239,233,.12)",
        padding: "clamp(44px, 7vw, 100px) clamp(16px, 4vw, 56px) clamp(36px, 5vw, 66px)",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px, 4vw, 72px)" }}>
        <Reveal style={{ flex: "1 1 340px", minWidth: 0 }}>
          <span
            className="font-mono"
            style={{
              fontSize: 12,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--accent, #E8A33D)",
            }}
          >
            05 — Contact
          </span>
          <h2
            className="font-display"
            style={{
              margin: "18px 0 0",
              fontWeight: 900,
              fontSize: "clamp(44px, 7vw, 116px)",
              lineHeight: 0.84,
              letterSpacing: "-.02em",
              textTransform: "uppercase",
            }}
          >
            On
            <br />
            construit
            <br />
            quoi ?
          </h2>
          <p style={{ margin: "24px 0 0", fontSize: 17, lineHeight: 1.55, color: "#9A968F", maxWidth: "46ch", textWrap: "pretty" }}>
            Décrivez le problème métier, même en trois lignes. Je réponds sous 24 h avec un
            premier cadrage : ce que je ferais, dans quel ordre, et en combien de temps.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 32, fontSize: 16 }}>
            <a href="mailto:mrephraim2.0@gmail.com" style={{ display: "flex", alignItems: "center", gap: 12, color: "#F2EFE9" }}>
              <span className="font-mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "#8A857D", width: 76 }}>
                EMAIL
              </span>
              mrephraim2.0@gmail.com
            </a>
            <a href="tel:+2250160689239" style={{ display: "flex", alignItems: "center", gap: 12, color: "#F2EFE9" }}>
              <span className="font-mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "#8A857D", width: 76 }}>
                TÉL
              </span>
              +225 01 60 68 92 39
            </a>
            <a
              href="https://www.linkedin.com/in/ephraïm-david-osim"
              target="_blank"
              rel="noopener"
              style={{ display: "flex", alignItems: "center", gap: 12, color: "#F2EFE9" }}
            >
              <span className="font-mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "#8A857D", width: 76 }}>
                LINKEDIN
              </span>
              ephraïm-david-osim
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#9A968F" }}>
              <span className="font-mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "#8A857D", width: 76 }}>
                BASE
              </span>
              Abidjan, Côte d&apos;Ivoire — missions à distance acceptées
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.12}
          style={{
            flex: "1 1 380px",
            minWidth: 0,
            border: "1px solid rgba(242,239,233,.14)",
            padding: "clamp(22px, 3vw, 40px)",
            background: "rgba(15,15,18,.86)",
          }}
        >
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
