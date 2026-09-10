"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "./Reveal";

const LINKS = [
  { href: "#profil", label: "Profil" },
  { href: "#projets", label: "Projets" },
  { href: "#methode", label: "Méthode" },
  { href: "#stack", label: "Stack" },
];

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
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
        onMouseLeave={() => setHovered(null)}
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
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="edo-nav-link"
            onMouseEnter={() => setHovered(l.href)}
            style={{ position: "relative", color: "#9A968F", paddingBottom: 3 }}
          >
            {l.label}
            {hovered === l.href && (
              <motion.span
                layoutId="edo-nav-underline"
                transition={{ duration: 0.3, ease: EASE }}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 1,
                  background: "var(--accent, #E8A33D)",
                }}
              />
            )}
          </a>
        ))}
      </nav>
      <motion.a
        href="#contact"
        className="font-mono edo-cta-outline"
        whileHover={{ scale: 1.035 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2, ease: EASE }}
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
      </motion.a>
    </motion.header>
  );
}
