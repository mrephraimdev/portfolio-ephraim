"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export default function ScrollShowcase() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/assets/horuspos-dashboard.jpg"
      bgImageSrc="/assets/ephraim.png"
      title="HORUSPOS EN ACTION"
      date="2025 → aujourd'hui"
      scrollToExpand="Scroll pour découvrir"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-sm tracking-[.14em] uppercase text-[#6FCF97] mb-4">
          Fondateur & dév. principal
        </p>
        <p className="text-lg text-[#F2EFE9] mb-6">
          HorusPOS est une caisse et gestion de commandes pour restaurants : le client
          scanne le QR de sa table, commande depuis son téléphone, la cuisine reçoit le
          ticket en temps réel, le gérant sort son rapport de journée en PDF ou Excel.
        </p>
        <a
          href="#p-horuspos"
          className="font-mono text-sm tracking-[.1em] uppercase text-[#E8A33D] underline underline-offset-4"
        >
          Voir le détail du projet →
        </a>
      </div>
    </ScrollExpandMedia>
  );
}
