import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";

const COLUMNS = [
  {
    title: "Backend",
    items: [
      "Laravel 11 / 12",
      "PHP 8.2",
      "MySQL",
      "Multi-tenancy (stancl/tenancy)",
      "Files d'attente & temps réel",
      "Exports PDF / Excel",
      "Node.js · TypeScript",
    ],
  },
  {
    title: "Frontend & mobile",
    items: [
      "React",
      "Inertia.js",
      "Livewire 3",
      "Filament 3",
      "Alpine.js",
      "Tailwind CSS",
      "Bootstrap 5",
      "Expo / React Native",
      "PWA · IndexedDB · SW",
    ],
  },
  {
    title: "Infra & qualité",
    items: [
      "CI/CD GitHub Actions",
      "VPS Nginx / PHP-FPM",
      "Docker",
      "Cloudflare R2",
      "Pest / PHPUnit",
      "Sentry",
      "Audits sécurité & a11y",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" style={{ padding: "0 clamp(16px, 4vw, 56px) clamp(50px, 8vw, 110px)" }}>
      <Reveal>
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
            04 — Stack
          </span>
          <h2
            className="font-display"
            style={{
              margin: 0,
              fontWeight: 800,
              fontSize: "clamp(30px, 3.6vw, 56px)",
              lineHeight: 1,
              letterSpacing: "-.01em",
              textTransform: "uppercase",
            }}
          >
            Ce que je maîtrise en production
          </h2>
        </div>
      </Reveal>
      <StaggerGroup
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "clamp(16px, 2vw, 24px)",
        }}
      >
        {COLUMNS.map((col) => (
          <StaggerItem
            key={col.title}
            className="edo-stack-card"
            style={{
              border: "1px solid rgba(242,239,233,.14)",
              background: "rgba(13,13,16,.82)",
              padding: "clamp(20px, 2.4vw, 28px)",
              transition: "border-color .3s ease",
            }}
          >
            <h3
              className="font-mono"
              style={{
                margin: "0 0 18px",
                fontSize: 12,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--accent, #E8A33D)",
              }}
            >
              {col.title}
            </h3>
            <StaggerGroup
              as="ul"
              style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 8 }}
            >
              {col.items.map((item) => (
                <StaggerItem
                  key={item}
                  as="li"
                  style={{
                    border: "1px solid rgba(242,239,233,.14)",
                    background: "rgba(242,239,233,.03)",
                    padding: "8px 12px",
                    fontSize: 14,
                  }}
                >
                  {item}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
