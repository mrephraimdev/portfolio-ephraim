"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { EASE } from "./Reveal";

export default function ScrollShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const mediaSrc = isMobile ? "/assets/hero-1-portrait.jpg" : "/assets/hero-1.jpg";
  const bgImageSrc = isMobile ? "/assets/hero-2-portrait.jpg" : "/assets/hero-2.jpg";

  return (
    <div id="top" style={{ position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        className="font-mono"
        style={{
          position: "absolute",
          top: "clamp(16px, 3vw, 32px)",
          left: 0,
          right: 0,
          zIndex: 20,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px 18px",
          fontSize: 11.5,
          lineHeight: 1.5,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "#F2EFE9",
          pointerEvents: "none",
        }}
      >
        <span>Développeur full-stack freelance</span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#6FCF97",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              flex: "0 0 auto",
              width: 7,
              height: 7,
              background: "#6FCF97",
              animation: "edo-blink 1.6s steps(1) infinite",
            }}
          />
          Disponible pour missions
        </span>
      </motion.div>

      <ScrollExpandMedia mediaType="image" mediaSrc={mediaSrc} bgImageSrc={bgImageSrc} />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "clamp(16px, 3vw, 32px)",
          zIndex: 20,
          display: "flex",
          flexWrap: "wrap",
          gap: "20px 40px",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 clamp(16px, 4vw, 56px)",
        }}
      >
        <motion.a
          href="#contact"
          className="edo-cta-solid"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: EASE }}
          style={{
            flex: "0 1 300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "18px 22px",
            background: "var(--accent, #E8A33D)",
            color: "#07070A",
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          Parlons de votre projet
          <motion.span className="font-mono" variants={{ hover: { x: 4 } }} transition={{ duration: 0.2, ease: EASE }}>
            →
          </motion.span>
        </motion.a>
        <motion.a
          href="#projets"
          className="edo-cta-ghost"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: EASE }}
          style={{
            flex: "0 1 300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "18px 22px",
            border: "1px solid rgba(242,239,233,.4)",
            color: "#F2EFE9",
            fontSize: 16,
            background: "rgba(7,7,10,.4)",
            backdropFilter: "blur(4px)",
          }}
        >
          Voir les 6 produits
          <motion.span className="font-mono" variants={{ hover: { y: 3 } }} transition={{ duration: 0.2, ease: EASE }}>
            ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </div>
  );
}
