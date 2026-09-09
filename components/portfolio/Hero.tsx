import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "clamp(22px, 3.5vw, 52px) clamp(16px, 4vw, 56px) 0",
      }}
    >
      <div
        className="font-mono"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "8px 18px",
          fontSize: 11.5,
          lineHeight: 1.5,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "#9A968F",
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
      </div>

      <div style={{ position: "relative", marginTop: "clamp(16px, 2.5vw, 34px)" }}>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            padding: "clamp(10px, 2vw, 26px) 0 0",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(210px, 27vw, 380px)",
              aspectRatio: ".84",
              overflow: "hidden",
              background: "#14141A",
            }}
          >
            <Image
              src="/assets/ephraim.png"
              alt="Portrait d'Ephraïm David Osim"
              fill
              priority
              sizes="(max-width: 768px) 210px, 380px"
              style={{
                objectFit: "cover",
                objectPosition: "50% 14%",
                filter: "grayscale(1) contrast(1.04) brightness(1.02)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(172deg, color-mix(in oklch, var(--accent, #E8A33D) 30%, transparent), transparent 46%, rgba(7,7,10,.6))",
                mixBlendMode: "overlay",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                boxShadow:
                  "inset 0 -54px 52px -30px #07070A, inset 0 60px 50px -40px #07070A",
              }}
            />
          </div>
        </div>

        <h1
          className="font-display"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            transform: "translateY(-52%)",
            margin: 0,
            textAlign: "center",
            fontWeight: 900,
            fontSize: "clamp(62px, 15.5vw, 250px)",
            lineHeight: 0.8,
            letterSpacing: "-.025em",
            textTransform: "uppercase",
            color: "#F2EFE9",
            textShadow: "0 22px 70px rgba(7,7,10,.9), 0 2px 0 rgba(7,7,10,.4)",
            pointerEvents: "none",
          }}
        >
          Portfolio
        </h1>
        <div
          className="font-mono"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            textAlign: "center",
            fontSize: "clamp(10px, 1.1vw, 13px)",
            letterSpacing: ".34em",
            textTransform: "uppercase",
            color: "var(--accent, #E8A33D)",
            pointerEvents: "none",
          }}
        >
          Ephraïm David Osim
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px 40px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "clamp(22px, 3.5vw, 44px)",
          paddingBottom: "clamp(28px, 4.5vw, 56px)",
        }}
      >
        <a
          href="#contact"
          className="edo-cta-solid"
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
          <span className="font-mono">→</span>
        </a>
        <a
          href="#projets"
          className="edo-cta-ghost"
          style={{
            flex: "0 1 300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "18px 22px",
            border: "1px solid rgba(242,239,233,.2)",
            color: "#F2EFE9",
            fontSize: 16,
          }}
        >
          Voir les 6 produits
          <span className="font-mono">↓</span>
        </a>
      </div>
    </section>
  );
}
