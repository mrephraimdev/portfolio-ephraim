import type { Metadata } from "next";
import {
  Big_Shoulders_Display,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio — Ephraïm David Osim",
  description: "Développeur full-stack freelance · Abidjan, Côte d'Ivoire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bigShoulders.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
