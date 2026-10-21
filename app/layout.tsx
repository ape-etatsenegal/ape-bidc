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
      <head>
        {/* Injection manuelle du favicon */}
        <link rel="icon" href="/logo-bidc.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo-bidc.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}