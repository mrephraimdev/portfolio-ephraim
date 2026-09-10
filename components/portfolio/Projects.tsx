"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/carousel-squeeze";
import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";

const ROWS: {
  statut: string;
  statutColor: string;
  annee: string;
  projet: string;
  role: string;
  stack: string;
}[] = [
  { statut: "dev", statutColor: "#E8A33D", annee: "2025→", projet: "HorusPOS/", role: "fondateur", stack: "laravel 12, alpine, docker, sentry" },
  { statut: "prod", statutColor: "#6FCF97", annee: "2026", projet: "LGC-Alert/", role: "dév. principal", stack: "laravel 12, react, inertia, tenancy" },
  { statut: "staging", statutColor: "#7FB2E8", annee: "2025", projet: "Gym-Manager/", role: "dév. principal", stack: "laravel 12, pwa, indexeddb, sw" },
  { statut: "staging", statutColor: "#7FB2E8", annee: "2025", projet: "Ligne-Rouge/", role: "dév. principal", stack: "laravel 11, livewire 3, filament 3" },
  { statut: "dev", statutColor: "#E8A33D", annee: "2026", projet: "HorusEvent-CI/", role: "dév. principal", stack: "laravel 12, alpine, r2, pwa" },
  { statut: "dev", statutColor: "#E8A33D", annee: "2026", projet: "BABIRIDE/", role: "dév. secondaire", stack: "typescript, expo, react, zod" },
];

const mark = (text: string) => (
  <span className="font-mono text-xs uppercase tracking-[.14em] text-white">{text}</span>
);

const SLIDES: SqueezeSlide[] = [
  {
    id: "horuspos",
    title: "HorusPOS —",
    description:
      "caisse & commandes pour restaurants. Le client scanne le QR de sa table, commande depuis son téléphone, la cuisine reçoit le ticket en temps réel.",
    image: "/assets/horuspos-dashboard.jpg",
    imageAlt: "Tableau de bord HorusPOS",
    overlay: mark("HorusPOS"),
  },
  {
    id: "lgc",
    title: "LGC Alert —",
    description:
      "SaaS multi-tenant de notification SMS, généralisable à tout secteur — assurance, mairie, hôpital — via des modules métier configurables sans écrire de code.",
    background: "linear-gradient(135deg, #0d1410, #16241c)",
    overlay: mark("LGC Alert"),
  },
  {
    id: "gym",
    title: "Gym Manager —",
    description:
      "PWA de gestion de salle de sport : membres, abonnements, présences, caisse. Le pointage à l'entrée continue même quand la connexion coupe.",
    image: "/assets/gym-dashboard.jpg",
    imageAlt: "Tableau de bord Gym Manager",
    overlay: mark("Gym Manager"),
  },
  {
    id: "ligne-rouge",
    title: "Ligne Rouge —",
    description:
      "Caisse et gestion de stock pour commerce de détail multi-boutique : transferts entre magasins, commandes fournisseurs, crédits clients, back-office Filament.",
    background: "linear-gradient(135deg, #14100d, #241a12)",
    overlay: mark("Ligne Rouge"),
  },
  {
    id: "horusevent",
    title: "HorusEvent CI —",
    description:
      "SaaS événementiel pour mariages : invitations digitales animées, RSVP, contrôle d'accès par QR, commande de repas par QR de table, galerie photo partagée.",
    background: "linear-gradient(135deg, #0d1114, #182028)",
    overlay: mark("HorusEvent CI"),
  },
  {
    id: "babiride",
    title: "BABIRIDE —",
    description:
      "Covoiturage domicile-travail à Abidjan : réservation matin et soir, tickets QR, suivi de trajet en direct, dashboard admin avec dispatch des chauffeurs.",
    background: "linear-gradient(135deg, #0d0f14, #171b24)",
    overlay: mark("BABIRIDE"),
  },
];

const carouselTheme = {
  "--foreground": "40 20% 94%",
  "--muted-foreground": "30 6% 62%",
  "--muted": "220 6% 11%",
  "--background": "220 8% 4%",
} as CSSProperties;

export default function Projects() {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelCooldown = useRef(false);

  // Scroll through the projects one at a time while hovering the carousel —
  // same feel as the hero's scroll-expand. Releases the wheel back to the
  // page once you're past the first/last slide, so scrolling the rest of
  // the page still works normally. A native, non-passive listener is
  // required here: React's onWheel is attached passive by default, which
  // silently no-ops preventDefault and lets the page scroll underneath.
  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    const handleWheel = (e: globalThis.WheelEvent) => {
      if (Math.abs(e.deltaY) < 4) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      if (dir > 0 && active === SLIDES.length - 1) return;
      if (dir < 0 && active === 0) return;

      e.preventDefault();
      if (wheelCooldown.current) return;
      wheelCooldown.current = true;
      setActive((i) => (i + dir + SLIDES.length) % SLIDES.length);
      window.setTimeout(() => {
        wheelCooldown.current = false;
      }, 550);
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, [active]);

  return (
    <section
      id="projets"
      style={{ padding: "0 clamp(16px, 4vw, 56px) clamp(50px, 8vw, 110px)" }}
    >
      <Reveal>
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
            02 — Projets
          </span>
        </div>

        <div
          className="font-mono"
          style={{ display: "flex", gap: 12, alignItems: "baseline", fontSize: 14 }}
        >
          <span style={{ color: "var(--accent, #E8A33D)", fontWeight: 700 }}>$</span>
          <span style={{ color: "#F2EFE9" }}>ls -la ~/projets</span>
        </div>
      </Reveal>

      <div
        className="font-mono"
        style={{
          marginTop: 12,
          border: "1px solid rgba(242,239,233,.14)",
          background: "rgba(11,11,14,.6)",
        }}
      >
        <div
          className="edo-proj-head"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            padding: "9px 14px",
            background: "rgba(242,239,233,.04)",
            borderBottom: "1px solid rgba(242,239,233,.12)",
            fontSize: 11.5,
            letterSpacing: ".1em",
            color: "#8A857D",
          }}
        >
          <span style={{ flex: "0 0 92px" }}>STATUT</span>
          <span style={{ flex: "0 0 52px" }}>ANNÉE</span>
          <span style={{ flex: "1 1 150px" }}>PROJET</span>
          <span style={{ flex: "1 1 130px" }}>RÔLE</span>
          <span style={{ flex: "2 1 220px" }}>STACK</span>
        </div>
        <StaggerGroup>
          {ROWS.map((r, i) => (
            <StaggerItem
              key={r.projet}
              as="button"
              onClick={() => {
                setActive(i);
                carouselRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="edo-table-row edo-proj-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                gap: "8px 12px",
                padding: "12px 14px",
                border: "none",
                borderBottom: i < ROWS.length - 1 ? "1px solid rgba(242,239,233,.07)" : undefined,
                background: i === active ? "rgba(242,239,233,.05)" : "transparent",
                fontSize: 13,
                color: "#B4B0A8",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              <span style={{ flex: "0 0 92px", color: r.statutColor }}>{r.statut}</span>
              <span style={{ flex: "0 0 52px", color: "#8A857D" }}>{r.annee}</span>
              <span style={{ flex: "1 1 150px", color: i === active ? "var(--accent, #E8A33D)" : "#F2EFE9" }}>
                {r.projet}
              </span>
              <span style={{ flex: "1 1 130px", color: "#9A968F" }}>{r.role}</span>
              <span style={{ flex: "2 1 220px", color: "#8A857D" }}>{r.stack}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <div ref={carouselRef} style={{ marginTop: "clamp(26px, 4vw, 44px)" }}>
        <Reveal style={carouselTheme}>
          <SqueezeCarousel
            key={active}
            slides={SLIDES}
            defaultIndex={active}
            onIndexChange={setActive}
            label="Projets"
            accent="#E8A33D"
            accentForeground="#07070A"
            height="clamp(140px, 34cqi, 380px)"
          />
        </Reveal>
      </div>
    </section>
  );
}
