import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.fctc-bidc-ebid.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "FCTC BIDC EBID | Emprunt obligataire BIDC",
    template: "%s | FCTC BIDC EBID",
  },
  description:
    "Au cœur du financement du développement en Afrique de l'Ouest depuis plusieurs décennies, la BIDC s'appuie sur son expertise régionale et son action en faveur de projets structurants pour porter la campagne FCTC BIDC avec légitimité, crédibilité et ambition.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "FCTC BIDC EBID",
    title: "FCTC BIDC EBID | Emprunt obligataire BIDC",
    description:
      "Souscrivez à l'emprunt obligataire par appel public à l'épargne de la BIDC. Période : du 28 octobre au 30 novembre 2026. Prix : 10 000 FCFA par part.",
    images: [
      {
        url: "/Emprunt FCTC BIDC 2026 5.png",
        width: 1200,
        height: 630,
        alt: "Aperçu de l'emprunt obligataire BIDC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FCTC BIDC EBID | Emprunt obligataire BIDC",
    description:
      "Souscrivez à l'emprunt obligataire de la BIDC. Période : 28 oct. - 30 nov. 2026.",
    images: ["/Emprunt FCTC BIDC 2026 5.png"],
  },

  icons: {
    icon: "/logo-bidc.png",
    apple: "/logo-bidc.png",
  },

  // À remplir avec la valeur fournie par la Search Console (méthode "Balise HTML")
  // verification: { google: "VOTRE_CODE_DE_VERIFICATION" },
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