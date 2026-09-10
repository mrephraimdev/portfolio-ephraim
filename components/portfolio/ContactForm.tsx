"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { EASE } from "./Reveal";

const inputStyle: React.CSSProperties = {
  background: "#0B0B0C",
  border: "1px solid rgba(242,239,233,.18)",
  color: "#F2EFE9",
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontSize: 16,
  padding: "14px 16px",
  outline: "none",
};

export default function ContactForm() {
  const [envoye, setEnvoye] = useState(false);

  function envoyer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget.elements as typeof e.currentTarget.elements &
      Record<string, HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    const val = (k: string) => (f[k] && f[k].value ? f[k].value.trim() : "");
    const corps = [
      "Nom : " + val("nom"),
      "Email : " + val("email"),
      "Type de projet : " + val("type"),
      "",
      val("message"),
    ].join("\n");
    window.location.href =
      "mailto:mrephraim2.0@gmail.com?subject=" +
      encodeURIComponent("Projet — " + (val("nom") || "nouveau contact")) +
      "&body=" +
      encodeURIComponent(corps);
    setEnvoye(true);
  }

  if (envoye) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        style={{ display: "flex", flexDirection: "column", gap: 14, minHeight: 320, justifyContent: "center" }}
      >
        <div
          className="font-display"
          style={{ fontWeight: 900, fontSize: 44, lineHeight: 0.9, textTransform: "uppercase", color: "#6FCF97" }}
        >
          Brief prêt
        </div>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#9A968F" }}>
          Votre client mail vient de s&apos;ouvrir avec le message pré-rempli. S&apos;il ne
          s&apos;est rien passé, écrivez directement à{" "}
          <a href="mailto:mrephraim2.0@gmail.com">mrephraim2.0@gmail.com</a>.
        </p>
        <motion.button
          type="button"
          onClick={() => setEnvoye(false)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="font-mono edo-reset-btn"
          style={{
            alignSelf: "flex-start",
            marginTop: 8,
            background: "none",
            border: "1px solid rgba(242,239,233,.24)",
            color: "#F2EFE9",
            fontSize: 12,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            padding: "12px 18px",
            cursor: "pointer",
          }}
        >
          Écrire un autre message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={envoyer} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="font-mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#8A857D" }}>
          Nom
        </span>
        <input name="nom" type="text" required placeholder="Votre nom" className="edo-form-input" style={inputStyle} />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="font-mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#8A857D" }}>
          Email
        </span>
        <input name="email" type="email" required placeholder="vous@entreprise.com" className="edo-form-input" style={inputStyle} />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="font-mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#8A857D" }}>
          Type de projet
        </span>
        <select name="type" className="edo-form-input" style={inputStyle}>
          <option value="Logiciel métier sur mesure">Logiciel métier sur mesure</option>
          <option value="Caisse / point de vente">Caisse / point de vente</option>
          <option value="SaaS multi-tenant">SaaS multi-tenant</option>
          <option value="Application mobile">Application mobile</option>
          <option value="Reprise / audit d'un projet existant">Reprise ou audit d&apos;un projet existant</option>
          <option value="Autre">Autre</option>
        </select>
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="font-mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#8A857D" }}>
          Le problème à résoudre
        </span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Ce qui ne marche pas aujourd'hui, qui l'utilisera, et pour quand."
          className="edo-form-input"
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </label>
      <motion.button
        type="submit"
        className="edo-submit-btn"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: EASE }}
        style={{
          background: "var(--accent, #E8A33D)",
          color: "#07070A",
          border: "none",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 700,
          fontSize: 16,
          padding: "17px 20px",
          cursor: "pointer",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        Envoyer le brief
        <motion.span
          className="font-mono"
          variants={{ hover: { x: 4 } }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          →
        </motion.span>
      </motion.button>
    </form>
  );
}
