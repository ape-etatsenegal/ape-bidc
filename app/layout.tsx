import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APE BIDC — Investir pour l'avenir",
  description:
    "La Banque de Développement des États de l'Afrique Centrale accompagne les projets qui transforment la région.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
