import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";

const ROWS: {
  href: string;
  statut: string;
  statutColor: string;
  annee: string;
  projet: string;
  role: string;
  stack: string;
}[] = [
  { href: "#p-horuspos", statut: "dev", statutColor: "#E8A33D", annee: "2025→", projet: "HorusPOS/", role: "fondateur", stack: "laravel 12, alpine, docker, sentry" },
  { href: "#p-lgc", statut: "prod", statutColor: "#6FCF97", annee: "2026", projet: "LGC-Alert/", role: "dév. principal", stack: "laravel 12, react, inertia, tenancy" },
  { href: "#p-gym", statut: "staging", statutColor: "#7FB2E8", annee: "2025", projet: "Gym-Manager/", role: "dév. principal", stack: "laravel 12, pwa, indexeddb, sw" },
  { href: "#p-ligne-rouge", statut: "staging", statutColor: "#7FB2E8", annee: "2025", projet: "Ligne-Rouge/", role: "dév. principal", stack: "laravel 11, livewire 3, filament 3" },
  { href: "#p-horusevent", statut: "dev", statutColor: "#E8A33D", annee: "2026", projet: "HorusEvent-CI/", role: "dév. principal", stack: "laravel 12, alpine, r2, pwa" },
  { href: "#p-babiride", statut: "dev", statutColor: "#E8A33D", annee: "2026", projet: "BABIRIDE/", role: "dév. secondaire", stack: "typescript, expo, react, zod" },
];

export default function Projects() {
  return (
    <section
      id="projets"
      style={{ padding: "0 clamp(16px, 4vw, 56px) clamp(50px, 8vw, 110px)" }}
    >
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

      <div
        className="font-mono"
        style={{
          marginTop: 12,
          border: "1px solid rgba(242,239,233,.14)",
          background: "rgba(11,11,14,.6)",
        }}
      >
        <div
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
        {ROWS.map((r, i) => (
          <a
            key={r.href}
            href={r.href}
            className="edo-table-row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 12px",
              padding: "12px 14px",
              borderBottom: i < ROWS.length - 1 ? "1px solid rgba(242,239,233,.07)" : undefined,
              fontSize: 13,
              color: "#B4B0A8",
            }}
          >
            <span style={{ flex: "0 0 92px", color: r.statutColor }}>{r.statut}</span>
            <span style={{ flex: "0 0 52px", color: "#8A857D" }}>{r.annee}</span>
            <span style={{ flex: "1 1 150px", color: "#F2EFE9" }}>{r.projet}</span>
            <span style={{ flex: "1 1 130px", color: "#9A968F" }}>{r.role}</span>
            <span style={{ flex: "2 1 220px", color: "#8A857D" }}>{r.stack}</span>
          </a>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(16px, 2vw, 24px)",
          marginTop: "clamp(26px, 4vw, 44px)",
        }}
      >
        <ProjectCard
          id="p-horuspos"
          number="01"
          media={
            <Image
              src="/assets/horuspos-dashboard.jpg"
              alt="Tableau de bord HorusPOS"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "50% 0" }}
            />
          }
          badges={[
            { label: "Fondateur & dév. principal", solid: "var(--accent, #E8A33D)", solidText: "#07070A" },
            { label: "En développement · 2025 →" },
          ]}
          title="HorusPOS"
          subtitle="caisse & commandes pour restaurants"
          description="Le client scanne le QR de sa table, commande depuis son téléphone, la cuisine reçoit le ticket en temps réel, le gérant sort son rapport de journée en PDF ou Excel."
          tags={["Laravel 12", "PHP 8.2", "Alpine.js", "Tailwind", "Docker", "Sentry"]}
        />

        <ProjectCard
          id="p-lgc"
          number="02"
          hoverColor="#6FCF97"
          media={<ProjectImagePlaceholder label="Capture LGC Alert — tableau de bord ou envoi de campagne SMS" />}
          badges={[
            { label: "Développeur principal" },
            { label: "En production · 2026", solid: "#6FCF97", solidText: "#08170F" },
          ]}
          title="LGC Alert"
          subtitle="saas sms multi-tenant · lawson general company"
          description="SaaS multi-tenant de notification SMS, généralisable à tout secteur — assurance, mairie, hôpital — via des modules métier configurables sans écrire de code."
          tags={["Laravel 12", "React", "Inertia.js", "stancl/tenancy", "MySQL"]}
        />

        <ProjectCard
          id="p-gym"
          number="03"
          media={
            <Image
              src="/assets/gym-dashboard.jpg"
              alt="Tableau de bord Gym Manager"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "50% 0" }}
            />
          }
          badges={[
            { label: "Développeur principal" },
            { label: "Prêt au déploiement · 2025" },
          ]}
          title="Gym Manager"
          subtitle="pwa de gestion de salle de sport"
          description="Membres, abonnements, présences, caisse. Le vrai sujet technique n'est pas le CRUD — c'est que la connexion coupe et que le pointage à l'entrée doit continuer."
          tags={["Laravel 12", "Bootstrap 5", "MySQL", "IndexedDB", "Service Worker"]}
        />

        <ProjectCard
          id="p-ligne-rouge"
          number="04"
          media={<ProjectImagePlaceholder label="Capture Ligne Rouge — écran de caisse ou back-office Filament" />}
          badges={[
            { label: "Développeur principal" },
            { label: "Prêt au déploiement · 2025" },
          ]}
          title="Ligne Rouge"
          subtitle="caisse & stock multi-boutique"
          description="Logiciel de caisse et de gestion de stock pour commerce de détail multi-boutique : transferts entre magasins, commandes fournisseurs, crédits clients, impression de tickets thermiques, back-office Filament."
          tags={["Laravel 11", "Livewire 3", "Filament 3", "escpos-php"]}
        />

        <ProjectCard
          id="p-horusevent"
          number="05"
          media={<ProjectImagePlaceholder label="Capture HorusEvent CI — invitation animée ou contrôle d'accès QR" />}
          badges={[
            { label: "Développeur principal" },
            { label: "En développement · 2026" },
          ]}
          title="HorusEvent CI"
          subtitle="saas événementiel pour mariages"
          description="De l'invitation au repas servi : invitations digitales animées, RSVP, contrôle d'accès par QR, commande de repas par QR de table, galerie photo partagée."
          tags={["Laravel 12", "Alpine.js", "Cloudflare R2", "PWA"]}
        />

        <ProjectCard
          id="p-babiride"
          number="06"
          media={<ProjectImagePlaceholder label="Capture BABIRIDE — réservation mobile ou dispatch chauffeurs" />}
          badges={[
            { label: "Développeur secondaire" },
            { label: "En développement · 2026" },
          ]}
          title="BABIRIDE"
          subtitle="covoiturage domicile-travail à abidjan"
          description="Réservation matin et soir, tickets QR, suivi de trajet en direct, dashboard admin avec dispatch des chauffeurs. Monorepo pnpm, application mobile Expo Router bilingue FR/EN."
          tags={["TypeScript", "Expo / React Native", "React", "Zod", "pnpm"]}
        />
      </div>
    </section>
  );
}
