import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Badge = { label: string; solid?: string; solidText?: string };

export default function ProjectCard({
  id,
  number,
  hoverColor = "var(--accent, #E8A33D)",
  media,
  badges,
  title,
  subtitle,
  description,
  tags,
}: {
  id: string;
  number: string;
  hoverColor?: string;
  media: ReactNode;
  badges: Badge[];
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}) {
  return (
    <Reveal>
      <article
        id={id}
        className="edo-project-card"
        style={
          {
            position: "relative",
            border: "1px solid rgba(242,239,233,.14)",
            background: "rgba(13,13,16,.82)",
            display: "flex",
            flexDirection: "column",
            transition: "border-color .3s ease, transform .3s ease",
            "--edo-card-hover": hoverColor,
          } as React.CSSProperties
        }
      >
        <div
          className="font-display"
          style={{
            position: "absolute",
            top: 14,
            right: 16,
            zIndex: 2,
            fontWeight: 900,
            fontSize: 44,
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(242,239,233,.35)",
          }}
        >
          {number}
        </div>
        <div
          style={{
            position: "relative",
            aspectRatio: "16 / 10",
            overflow: "hidden",
            borderBottom: "1px solid rgba(242,239,233,.14)",
            background: "#14141A",
          }}
        >
          {media}
        </div>
        <div
          style={{
            padding: "clamp(20px, 2.4vw, 30px)",
            display: "flex",
            flexDirection: "column",
            flex: "1 1 auto",
          }}
        >
          <div className="font-mono" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {badges.map((b, i) => (
              <span
                key={i}
                style={{
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  padding: "5px 10px",
                  background: b.solid ?? "transparent",
                  border: b.solid ? "none" : "1px solid rgba(242,239,233,.24)",
                  color: b.solid ? b.solidText ?? "#07070A" : "#9A968F",
                }}
              >
                {b.label}
              </span>
            ))}
          </div>
          <h3
            className="font-display"
            style={{
              margin: "16px 0 0",
              fontWeight: 900,
              fontSize: "clamp(32px, 3.4vw, 46px)",
              lineHeight: 0.9,
              letterSpacing: "-.02em",
              textTransform: "uppercase",
            }}
          >
            {title}
          </h3>
          <div className="font-mono" style={{ marginTop: 4, fontSize: 12, color: "#8A857D" }}>
            {subtitle}
          </div>
          <p style={{ margin: "16px 0 0", fontSize: 16, lineHeight: 1.55, textWrap: "pretty" }}>
            {description}
          </p>
          <div
            className="font-mono"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 14px",
              marginTop: "auto",
              paddingTop: 20,
              fontSize: 12,
              color: "#7E7A74",
            }}
          >
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
