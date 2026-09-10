"use client";

import { motion } from "framer-motion";
import { EASE } from "./Reveal";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
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
    </motion.footer>
  );
}
