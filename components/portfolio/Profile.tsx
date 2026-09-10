import Image from "next/image";
import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";

const NEOFETCH_ROWS: [string, string, string][] = [
  ["backend", "·······", "Laravel 11 / 12 · PHP 8.2 · MySQL"],
  ["frontend", "······", "React · Inertia.js · Livewire 3 · Filament 3 · Alpine.js"],
  ["mobile", "········", "Expo / React Native · TypeScript · Zod"],
  ["infra", "·········", "VPS Nginx / PHP-FPM · Docker · Cloudflare R2"],
  ["ci/cd", "·········", "GitHub Actions · Pest / PHPUnit"],
  ["monitoring", "····", "Sentry · audits sécurité & accessibilité"],
  ["produits", "······", "6 conçus de bout en bout · 1 en production client"],
  ["tests", "·········", "297 automatisés sur HorusEvent CI"],
  ["langues", "·······", "français · anglais technique"],
];

export default function Profile() {
  return (
    <Reveal style={{ padding: "clamp(40px, 6vw, 90px) clamp(16px, 4vw, 56px) clamp(40px, 6vw, 84px)" }}>
      <section id="profil">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px 32px",
            alignItems: "baseline",
            borderTop: "1px solid rgba(242,239,233,.12)",
            paddingTop: 22,
            marginBottom: "clamp(24px, 3.5vw, 44px)",
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
            01 — Profil
          </span>
        </div>

        <div
          className="font-mono"
          style={{
            border: "1px solid rgba(242,239,233,.14)",
            background: "rgba(9,10,12,.86)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "10px 18px",
              padding: "11px 16px",
              borderBottom: "1px solid rgba(242,239,233,.12)",
              background: "rgba(242,239,233,.04)",
            }}
          >
            <span style={{ display: "flex", gap: 7 }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#3A3A40" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#3A3A40" }} />
              <span
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "var(--accent, #E8A33D)",
                }}
              />
            </span>
            <span style={{ fontSize: 12.5, color: "#8A857D" }}>
              ephraim@abidjan: ~/portfolio — zsh
            </span>
          </div>

          <div style={{ padding: "clamp(18px, 3vw, 34px) clamp(16px, 3vw, 32px)" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
              <span style={{ color: "var(--accent, #E8A33D)", fontWeight: 700 }}>$</span>
              <span style={{ color: "#F2EFE9" }}>whoami</span>
            </div>
            <div
              style={{
                margin: "10px 0 30px",
                paddingLeft: 22,
                borderLeft: "1px solid rgba(242,239,233,.14)",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(28px, 4.4vw, 52px)",
                  lineHeight: 1.02,
                  letterSpacing: "-.01em",
                  textTransform: "uppercase",
                  color: "#F2EFE9",
                }}
              >
                Ephraïm David Osim
              </div>
              <p style={{ margin: "8px 0 0", fontSize: "clamp(13px, 1.5vw, 15px)", color: "#9A968F" }}>
                développeur full-stack freelance · abidjan, côte d&apos;ivoire
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
              <span style={{ color: "var(--accent, #E8A33D)", fontWeight: 700 }}>$</span>
              <span style={{ color: "#F2EFE9" }}>neofetch</span>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px clamp(22px, 3.5vw, 52px)",
                marginTop: 14,
                paddingLeft: 22,
                borderLeft: "1px solid rgba(242,239,233,.14)",
              }}
            >
              <div style={{ flex: "0 0 auto", width: "clamp(128px, 17vw, 176px)" }}>
                <div
                  style={{
                    position: "relative",
                    border: "1px solid rgba(242,239,233,.16)",
                    overflow: "hidden",
                    background: "#14141A",
                    aspectRatio: "1",
                  }}
                >
                  <Image
                    src="/assets/neofetch.jpg"
                    alt="Portrait d'Ephraïm David Osim"
                    fill
                    sizes="176px"
                    style={{
                      objectFit: "cover",
                      filter: "grayscale(1) contrast(1.06) brightness(.96)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(160deg, color-mix(in oklch, var(--accent, #E8A33D) 42%, transparent), rgba(9,12,12,.3))",
                      mixBlendMode: "color",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "repeating-linear-gradient(180deg, rgba(0,0,0,.28) 0 1px, transparent 1px 3px)",
                    }}
                  />
                </div>
                <div style={{ marginTop: 8, fontSize: 11, color: "#7E7A74" }}>
                  ./assets/portrait.jpg
                </div>
              </div>

              <StaggerGroup
                style={{
                  flex: "1 1 340px",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  fontSize: 13.5,
                  color: "#B4B0A8",
                  alignSelf: "center",
                }}
              >
                {NEOFETCH_ROWS.map(([label, dots, value]) => (
                  <StaggerItem key={label}>
                    <span style={{ color: "var(--accent, #E8A33D)" }}>{label}</span>
                    <span style={{ color: "#35383A" }}> {dots} </span>
                    <span>{value}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginTop: 30 }}>
              <span style={{ color: "var(--accent, #E8A33D)", fontWeight: 700 }}>$</span>
              <span style={{ color: "#F2EFE9" }}>cat manifeste.txt</span>
            </div>
            <div
              style={{
                marginTop: 12,
                padding: "18px 20px",
                border: "1px dashed rgba(242,239,233,.18)",
                background: "rgba(242,239,233,.03)",
              }}
            >
              <p
                className="font-sans"
                style={{
                  margin: 0,
                  fontSize: "clamp(16px, 1.9vw, 21px)",
                  lineHeight: 1.5,
                  color: "#F2EFE9",
                  textWrap: "pretty",
                }}
              >
                L&apos;IA écrit le code plus vite que moi. Elle ne décide pas du
                modèle de données, ne choisit pas l&apos;isolation d&apos;un
                tenant, n&apos;assume pas un rollback à 22 h. C&apos;est mon
                travail. Je m&apos;en sers pour livrer en semaines ce qui
                prenait des mois — puis je prouve que ça tient : tests,
                audits, CI/CD, monitoring, documentation de reprise.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginTop: 26 }}>
              <span style={{ color: "var(--accent, #E8A33D)", fontWeight: 700 }}>$</span>
              <span
                style={{
                  width: 9,
                  height: 16,
                  background: "var(--accent, #E8A33D)",
                  animation: "edo-blink 1.1s steps(1) infinite",
                }}
              />
            </div>
          </div>
        </div>

        <StaggerGroup
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 1,
            background: "rgba(242,239,233,.12)",
            marginTop: "clamp(26px, 4vw, 48px)",
          }}
        >
          <StaggerItem style={{ background: "rgba(11,11,14,.72)", padding: "24px 20px" }}>
            <div className="font-display" style={{ fontWeight: 900, fontSize: "clamp(42px, 5vw, 68px)", lineHeight: 0.85 }}>
              06
            </div>
            <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.5, color: "#9A968F" }}>
              produits conçus de bout en bout&nbsp;
            </div>
          </StaggerItem>
          <StaggerItem style={{ background: "rgba(11,11,14,.72)", padding: "24px 20px" }}>
            <div
              className="font-display"
              style={{ fontWeight: 900, fontSize: "clamp(42px, 5vw, 68px)", lineHeight: 0.85, color: "#6FCF97" }}
            >
              01
            </div>
            <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.5, color: "#9A968F" }}>
              en production&nbsp;
            </div>
          </StaggerItem>
          <StaggerItem style={{ background: "rgba(11,11,14,.72)", padding: "24px 20px" }}>
            <div className="font-display" style={{ fontWeight: 900, fontSize: "clamp(42px, 5vw, 68px)", lineHeight: 0.85 }}>
              01
            </div>
            <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.5, color: "#9A968F" }}>
              SaaS dont je suis le fondateur : HorusPOS. Je porte le produit, pas seulement le code
            </div>
          </StaggerItem>
        </StaggerGroup>
      </section>
    </Reveal>
  );
}
