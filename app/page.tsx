"use client";

import { FormEvent, useEffect, useState } from "react";

// ✅ Adresse e-mail officielle
const CONTACT_EMAIL = "fctc-bidc@invictuscapfin.com";
const LANGUAGE_STORAGE_KEY = "ape-bidc-language";
const NOTE_INFO_PDF = "/pdf/note-information.pdf";

type Language = "fr" | "en";

// ✅ Types — `text` optionnel + support vidéo
type OperationBlock = {
  title?: string;
  text?: string;
  list?: string[];
  link?: string;
  linkLabel?: string;
  disabled?: boolean;
};

type OperationPage = {
  title: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  intro: string;
  blocks: OperationBlock[];
  noteLink?: boolean;
  video?: string; // ✅ URL du fichier vidéo (.mp4)
  videoPoster?: string; // ✅ image de prévisualisation (optionnel)
};

const slides = [
  {
    image: "/Emprunt FCTC BIDC 2026 5.png",
    imageEn: "/Emprunt FCTC BIDC 2026 5 Ang.png",
    alt: "Installation industrielle et infrastructures énergétiques",
    title: "Des infrastructures pour demain",
  },
  {
    image: "/images.png",
    imageEn: "/images.png",
    alt: "Lignes électriques au coucher du soleil",
    title: "L'énergie au cœur du développement",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    imageEn:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    alt: "Architecture moderne au cœur de la ville",
    title: "Des villes qui se transforment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    imageEn:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    alt: "Espace de travail lumineux",
    title: "Construire des opportunités durables",
  },
];

const navigation = [
  "Cadre et objet de l'opération",
  "Caractéristiques de l'opération",
  "Documentation",
  "Médiathèque",
];

const resources = [
  {
    title: "Bulletin de souscription Senior",
    image: "/bulletin-souscription.png",
    alt: "Bulletin de souscription Senior",
    pdf: "/pdf/bulletin-souscription-senior.pdf",
    disabled: false,
  },
  {
    title: "Dépliant de l'opération",
    image: "/depliant.png",
    alt: "Dépliant de l'opération",
    pdf: "/pdf/depliant.pdf",
    disabled: true,
  },
  {
    title: "Note d'information",
    image: "/note-information.png",
    alt: "Note d'information",
    pdf: "/pdf/note-information.pdf",
    disabled: false,
  },
];

const marqueeItems = [
  "🎥 Webinaire d'information — Jeudi 12 novembre 2026",
  "📢 Période de souscription ouverte — Du 5 novembre au 4 décembre 2026",
  "💰 Prix d'émission : 10 000 FCFA par part",
  "📍 Souscrivez auprès de votre SGI partenaire",
  `📞 Plus d'infos : ${CONTACT_EMAIL}`,
];

// ============================================================
// PAGES FRANÇAISES
// ============================================================
const operationPages: OperationPage[] = [
  // PAGE 1 : CADRE ET OBJET
  {
    title: navigation[0],
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Infrastructure industrielle et énergétique",
    eyebrow: "Présentation de l'opération",
    intro:
      "Cette rubrique présente le cadre et l'objet de l'opération : la BIDC, ses axes d'intervention, le cadre juridique applicable, et les raisons qui motivent cette opération de titrisation de créances à travers un emprunt obligataire par Appel Public à l'Épargne sur le Marché Financier Régional.",
    noteLink: true,
    blocks: [
      {
        title: "La BIDC, institution financière de développement de la CEDEAO",
        text: "La Banque d'Investissement et de Développement de la CEDEAO (BIDC) est l'institution financière de développement de la Communauté Économique des États de l'Afrique de l'Ouest (CEDEAO). Créée pour soutenir l'intégration économique régionale et le développement durable des États membres, elle constitue aujourd'hui un des outils stratégiques de développement de la sous-région pour le financement des projets publics et privés à fort impact socio-économique.",
      },
      {
        title: "Les axes d'intervention de la BIDC",
        text: "À travers ses interventions, la BIDC accompagne les États membres, les institutions financières et les entreprises dans le financement de projets structurants destinés à promouvoir la croissance économique, l'intégration régionale et le développement durable. Son action s'articule principalement autour des axes suivants :",
        list: [
          "Financement des infrastructures stratégiques dans les secteurs des transports, de l'énergie et de l'aménagement urbain",
          "Soutien au secteur bancaire et aux PME/PMI à travers des lignes de crédit destinées au financement de l'économie régionale",
          "Diversification sectorielle et géographique de son portefeuille afin de favoriser une meilleure maîtrise des risques",
          "Promotion du développement durable à travers le financement de projets à fort impact économique et social",
          "Renforcement de l'intégration économique régionale et de la résilience des économies des États membres de la CEDEAO",
        ],
      },
      {
        title: "Le cadre juridique et réglementaire",
        text: "L'opération est régie par le Règlement n° 02/2010/CM/UEMOA relatif aux Fonds Communs de Titrisation de Créances et aux Opérations de Titrisation dans l'UEMOA, ainsi que par ses textes d'application, notamment :",
        list: [
          "L'Instruction n° 43/2010 relative à l'agrément des FCTC, au visa de leurs Notes d'Information, ainsi qu'aux modalités de placement de leurs titres sur le Marché Financier Régional de l'UMOA",
          "L'Instruction n° 44/2010 relative à l'agrément des sociétés de gestion de FCTC sur le Marché Financier Régional de l'UMOA",
          "Le droit sénégalais en vigueur, les Actes Uniformes de l'OHADA et la réglementation UEMOA applicable",
        ],
      },
      {
        title: "Le refinancement du portefeuille de créances",
        text: "Dans le cadre du développement de ses activités, la BIDC souhaite refinancer une partie de son portefeuille de créances afin d'optimiser la gestion de son bilan, de renforcer sa capacité de financement et de mobiliser de nouvelles ressources sur le Marché Financier Régional. À cet effet, la Banque envisage une opération de titrisation de créances à travers un emprunt obligataire par Appel Public à l'Épargne portant sur un montant de soixante-trois milliards (63 000 000 000) de francs CFA sur le Marché Financier Régional.",
      },
      {
        title: "Les atouts de la titrisation de créances",
        text: "La titrisation de créances est un mécanisme capable de répondre aux aspirations de la BIDC, en ce sens qu'elle lui permet :",
        list: [
          "d'améliorer la structure de son bilan et d'optimiser l'utilisation de ses fonds propres afin de renforcer ses ratios prudentiels",
          "de mobiliser des ressources financières d'un montant de soixante-trois milliards (63 000 000 000) de francs CFA sur le Marché Financier Régional de l'UMOA",
          "de refinancer de façon optimale son portefeuille de créances, tout en diversifiant sa base d'investisseurs institutionnels et privés",
          "de renforcer sa capacité de financement afin d'accroître ses interventions en faveur des projets structurants et du développement économique de l'espace CEDEAO",
        ],
      },
    ],
  },

  // PAGE 2 : CARACTÉRISTIQUES
  {
    title: navigation[1],
    image: "caracteristiques.png",
    imageAlt: "Documents financiers et caractéristiques",
    eyebrow: "Informations clés",
    intro:
      "Retrouvez ci-dessous les caractéristiques essentielles de l'opération : structure de l'émission, modalités, actif sous-jacent, mécanismes de protection, intervenants et fiscalité.",
    noteLink: true,
    blocks: [
      {
        title: "Structure de l'émission",
        text: "L'opération porte sur un montant global de soixante-trois milliards (63 000 000 000) de francs CFA d'obligations, structuré en deux tranches réparties en trois catégories, auxquelles s'ajoutent 2 parts résiduelles de 1 000 000 FCFA chacune :",
        list: [
          "Tranche Senior Catégorie A — « FCTC BIDC SENIOR A 6,20% 2026-2031 » : 12 500 000 000 FCFA, soit 1 250 000 obligations de 10 000 FCFA",
          "Tranche Senior Catégorie B — « FCTC BIDC SENIOR B 6,65% 2026-2033 » : 49 000 000 000 FCFA, soit 4 900 000 obligations de 10 000 FCFA",
          "Tranche Junior — « FCTC BIDC JUNIOR 7,00% 2026-2033 » : 1 500 000 000 FCFA, soit 150 000 obligations de 10 000 FCFA (souscription exclusive BIDC)",
          "Parts résiduelles : 2 parts de 1 000 000 FCFA chacune (souscription exclusive BIDC)",
        ],
      },
      {
        title: "Modalités de l'émission",
        text: "Les principales modalités de l'émission sont les suivantes :",
        list: [
          "Prix d'émission : 100 % de la valeur nominale",
          "Périodicité des coupons : Semestrielle",
          "Maturité : 60 mois pour la Tranche Senior A / 84 mois pour la Tranche Senior B et la Tranche Junior",
          "Amortissement du principal : Semestriel (Senior A et B) / In fine (Junior et Parts)",
          "Période de souscription : Du 5 novembre au 4 décembre 2026",
          "Date de jouissance : 5 jours ouvrés après la clôture de la période de souscription",
          "Cotation : Demande d'admission à la BRVM",
          "Règlement / livraison : Via le DC/BR, au plus tard 14 jours ouvrés après la clôture",
        ],
      },
      {
        title: "Actif sous-jacent",
        text: "Le portefeuille cédé est constitué de 10 créances de prêts détenues par la BIDC sur des débiteurs établis principalement au Sénégal, en Côte d'Ivoire et au Mali. Ces créances résultent de financements consentis au secteur financier, aux infrastructures publiques et parapubliques, ainsi qu'à des sociétés privées intervenant dans le transport, l'énergie et les produits pétroliers.",
        list: [
          "Valeur en principal : 68 342 571 064 FCFA",
          "Intérêts rattachés : 10 431 009 149 FCFA",
          "Flux attendus totaux (capital + intérêts) : 78 773 580 213 FCFA",
          "Répartition géographique : Sénégal 68 % / Côte d'Ivoire 19 % / Mali 13 %",
          "Taux moyen pondéré : 6,85 %",
          "Diversification sectorielle : secteur financier 42,7 %, transport et infrastructures 40,0 %, aménagement urbain 9,9 %, énergie/produits pétroliers 7,3 %",
        ],
      },
      {
        title: "Mécanismes de protection",
        text: "Le Compartiment bénéficie de plusieurs mécanismes de rehaussement de crédit destinés à protéger les Porteurs d'Obligations Senior :",
        list: [
          "Surdimensionnement : créances supplémentaires à hauteur de 0,88 % du montant total des obligations émises, principal et intérêts compris",
          "Portefeuille de Réserve : 4 000 000 000 FCFA, maintenu à 6,35 % du Capital Restant Dû des obligations",
          "Ligne de liquidité : 2 500 000 000 FCFA destinée à pallier tout décalage technique",
          "Subordination des Obligations Junior et des Parts aux Obligations Senior",
          "Compte Spécialement Affecté : compte de recouvrement dédié exclusivement à l'encaissement des Créances Cédées au profit du Compartiment",
        ],
      },
      {
        title: "Intervenants de l'opération",
        text: "Les principaux intervenants de l'opération sont :",
        list: [
          "Cédant et Gestionnaire des Créances : Banque d'Investissement et de Développement de la CEDEAO (BIDC)",
          "Société de Gestion du FCTC : KF Titrisation",
          "Dépositaire et Banque de Liquidité : Bank of Africa Côte d'Ivoire (BOA CI)",
          "Arrangeur et Chef de file du Syndicat de Placement : Invictus Capital & Finance",
          "Co-arrangeur : KASIC Group SARL",
          "Commissaire aux Comptes : Deloitte Sénégal (Titulaire) / Cabinet Djité et associés (Suppléant)",
          "Conseil juridique : ASAFO & Co",
          "Expert évaluateur des actifs : Deloitte Togo",
          "Agence de notation : GCR Ratings",
        ],
      },
      {
        title: "Fiscalité applicable",
        text: "Le régime fiscal applicable est celui en vigueur en République du Sénégal. Conformément à la réglementation applicable, les intérêts des obligations sont soumis à une retenue à la source au titre de l'impôt sur les revenus des valeurs mobilières (IRVM) au taux de 6 % pour les obligations d'une durée d'au moins cinq (5) ans. Les investisseurs sont invités à consulter leurs propres conseils pour appréhender leur situation fiscale particulière.",
      },
    ],
  },

  // PAGE 3 : DOCUMENTATION
  {
    title: navigation[2],
    image: "documentation.png",
    imageAlt: "Documentation officielle",
    eyebrow: "Documentation officielle",
    intro:
      "Retrouvez ci-dessous l'ensemble des supports officiels de l'opération. Téléchargez les documents pour préparer votre souscription en toute confiance.",
    noteLink: true,
    blocks: [
      {
        title: "Bulletin de souscription Senior",
        text: "Bulletin à compléter et à remettre à votre SGI partenaire pour formaliser votre souscription.",
        link: "/pdf/bulletin-souscription-senior.pdf",
        linkLabel: "Télécharger le PDF ↓",
      },
      {
        title: "Dépliant de l'opération",
        text: "Présentation synthétique de l'opération et de ses caractéristiques clés.",
        link: "/pdf/depliant.pdf",
        linkLabel: "Télécharger le PDF ↓",
        disabled: true,
      },
      {
        title: "Note d'information",
        text: "Document de référence détaillant l'ensemble des conditions, modalités et informations relatives à l'opération.",
        link: "/pdf/note-information.pdf",
        linkLabel: "Télécharger le PDF ↓",
      },
      {
        title: "Information importante",
        text: "Les éléments présentés sur ce site ne remplacent pas la lecture attentive de la note d'information officielle de l'opération.",
      },
    ],
  },

  // ============================================================
  // PAGE 4 : MÉDIATHÈQUE — avec vidéo
  // ============================================================
  {
    title: navigation[3],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Ressources institutionnelles",
    eyebrow: "Ressources",
    intro:
      "Découvrez la présentation vidéo de l'opération FCTC BIDC et consultez les ressources institutionnelles mises à votre disposition.",
    video: "/video/presentation-fctc-bidc.mp4",
    videoPoster: "/video/presentation-poster.png",
    blocks: [
      {
        title: "Présentation de l'opération",
        text: "Cette vidéo présente les objectifs, les caractéristiques et les mécanismes de l'opération de titrisation de créances FCTC BIDC.",
      },
      {
        title: "Autres ressources",
        text: "D'autres ressources institutionnelles seront prochainement disponibles dans cette rubrique.",
      },
    ],
  },
];

// ============================================================
// PAGES ANGLAISES
// ============================================================
const operationPagesEnglish: OperationPage[] = [
  {
    title: "Framework and purpose of the operation",
    image: operationPages[0].image,
    imageAlt: "Industrial and energy infrastructure",
    eyebrow: "About the operation",
    intro:
      "This section presents the framework and purpose of the operation: EBID, its areas of intervention, the applicable legal framework, and the reasons behind this securitization operation through a bond issue by public offering on the Regional Financial Market.",
    noteLink: true,
    blocks: [
      {
        title: "EBID, the development finance institution of ECOWAS",
        text: "The ECOWAS Bank for Investment and Development (EBID) is the development finance institution of the Economic Community of West African States (ECOWAS). Established to support regional economic integration and the sustainable development of member States, it is today one of the strategic development tools of the sub-region for financing public and private projects with high socio-economic impact.",
      },
      {
        title: "EBID's areas of intervention",
        text: "Through its interventions, EBID supports member States, financial institutions and companies in financing structuring projects designed to promote economic growth, regional integration and sustainable development. Its action is primarily structured around the following areas:",
        list: [
          "Financing of strategic infrastructure in the transport, energy and urban planning sectors",
          "Support to the banking sector and SMEs/SMIs through credit lines dedicated to financing the regional economy",
          "Sectoral and geographical diversification of its portfolio to promote better risk management",
          "Promotion of sustainable development through financing of projects with high economic and social impact",
          "Strengthening of regional economic integration and resilience of the economies of ECOWAS member States",
        ],
      },
      {
        title: "Legal and regulatory framework",
        text: "The operation is governed by Regulation No. 02/2010/CM/UEMOA on Debt Securitisation Mutual Funds and Securitisation Operations in WAEMU, as well as its implementing texts, in particular:",
        list: [
          "Instruction No. 43/2010 on the approval of Debt Securitisation Mutual Funds, the visa on their Information Memoranda, and the placement arrangements for their securities on the WAEMU Regional Financial Market",
          "Instruction No. 44/2010 on the approval of Debt Securitisation Mutual Fund management companies on the WAEMU Regional Financial Market",
          "Applicable Senegalese law, OHADA Uniform Acts and applicable WAEMU regulations",
        ],
      },
      {
        title: "Refinancing of the loan portfolio",
        text: "As part of its business development, EBID wishes to refinance part of its loan portfolio in order to optimize its balance sheet management, strengthen its financing capacity and mobilize new resources on the Regional Financial Market. To this end, the Bank is considering a securitization operation through a bond issue by Public Offering for an amount of sixty-three billion (63,000,000,000) CFA francs on the Regional Financial Market.",
      },
      {
        title: "The advantages of loan securitization",
        text: "Securitization is a mechanism capable of meeting EBID's expectations, as it allows the Bank to:",
        list: [
          "improve its balance sheet structure and optimize the use of its equity in order to strengthen its prudential ratios",
          "mobilize financial resources of sixty-three billion (63,000,000,000) CFA francs on the WAEMU Regional Financial Market",
          "optimally refinance its loan portfolio while diversifying its base of institutional and private investors",
          "strengthen its financing capacity in order to increase its interventions in favor of structuring projects and the economic development of the ECOWAS area",
        ],
      },
    ],
  },
  {
    title: "Key features of the operation",
    image: operationPages[1].image,
    imageAlt: "Financial documents and key features",
    eyebrow: "Key information",
    intro:
      "Find below the essential features of the operation: issue structure, terms, underlying assets, protection mechanisms, participants and taxation.",
    noteLink: true,
    blocks: [
      {
        title: "Issue structure",
        text: "The operation involves a total amount of sixty-three billion (63,000,000,000) CFA francs in bonds, structured into two tranches divided into three categories, plus 2 residual shares of 1,000,000 CFA francs each:",
        list: [
          "Senior Tranche Category A — “FCTC BIDC SENIOR A 6.20% 2026-2031”: 12,500,000,000 CFA francs, i.e. 1,250,000 bonds of 10,000 CFA francs",
          "Senior Tranche Category B — “FCTC BIDC SENIOR B 6.65% 2026-2033”: 49,000,000,000 CFA francs, i.e. 4,900,000 bonds of 10,000 CFA francs",
          "Junior Tranche — “FCTC BIDC JUNIOR 7.00% 2026-2033”: 1,500,000,000 CFA francs, i.e. 150,000 bonds of 10,000 CFA francs (exclusive subscription by EBID)",
          "Residual shares: 2 shares of 1,000,000 CFA francs each (exclusive subscription by EBID)",
        ],
      },
      {
        title: "Issue terms",
        text: "The main issue terms are as follows:",
        list: [
          "Issue price: 100% of nominal value",
          "Coupon frequency: Semi-annual",
          "Maturity: 60 months for Senior Tranche A / 84 months for Senior Tranche B and Junior Tranche",
          "Principal amortization: Semi-annual (Senior A and B) / Bullet (Junior and Shares)",
          "Subscription period: From 5 November to 4 December 2026",
          "Value date: 5 business days after the closing of the subscription period",
          "Listing: Application for admission to the BRVM",
          "Settlement/delivery: Via the DC/BR, no later than 14 business days after closing",
        ],
      },
      {
        title: "Underlying assets",
        text: "The transferred portfolio consists of 10 loan receivables held by EBID on debtors mainly established in Senegal, Côte d'Ivoire and Mali. These receivables arise from financing granted to the financial sector, public and parapublic infrastructure, as well as private companies operating in transport, energy and petroleum products.",
        list: [
          "Principal value: 68,342,571,064 CFA francs",
          "Attached interest: 10,431,009,149 CFA francs",
          "Total expected flows (principal + interest): 78,773,580,213 CFA francs",
          "Geographical breakdown: Senegal 68% / Côte d'Ivoire 19% / Mali 13%",
          "Weighted average rate: 6.85%",
          "Sector diversification: financial sector 42.7%, transport and infrastructure 40.0%, urban development 9.9%, energy/petroleum products 7.3%",
        ],
      },
      {
        title: "Protection mechanisms",
        text: "The Compartment benefits from several credit enhancement mechanisms designed to protect Senior Bondholders:",
        list: [
          "Overcollateralization: additional receivables representing 0.88% of the total amount of bonds issued, principal and interest included",
          "Reserve Portfolio: 4,000,000,000 CFA francs, maintained at 6.35% of the bonds' outstanding principal",
          "Liquidity facility: 2,500,000,000 CFA francs intended to address any technical delays",
          "Subordination of Junior Bonds and Shares to Senior Bonds",
          "Specifically Assigned Account: collection account dedicated exclusively to receiving Transferred Receivables for the benefit of the Compartment",
        ],
      },
      {
        title: "Transaction participants",
        text: "The main transaction participants are:",
        list: [
          "Seller and Servicer: ECOWAS Bank for Investment and Development (EBID)",
          "Management Company of the FCTC: KF Titrisation",
          "Custodian and Liquidity Bank: Bank of Africa Côte d'Ivoire (BOA CI)",
          "Arranger and Lead Manager: Invictus Capital & Finance",
          "Co-arranger: KASIC Group SARL",
          "Statutory Auditors: Deloitte Senegal (Titular) / Cabinet Djité et associés (Substitute)",
          "Legal Counsel: ASAFO & Co",
          "Asset Valuation Expert: Deloitte Togo",
          "Rating Agency: GCR Ratings",
        ],
      },
      {
        title: "Applicable taxation",
        text: "The applicable tax regime is the one in force in the Republic of Senegal. In accordance with applicable regulations, interest on the bonds is subject to withholding tax under the personal income tax on securities (IRVM) at a rate of 6% for bonds with a maturity of at least five (5) years. Investors are invited to consult their own advisors to understand their specific tax situation.",
      },
    ],
  },
  {
    title: "Documentation",
    image: operationPages[2].image,
    imageAlt: "Official documentation",
    eyebrow: "Official documentation",
    intro:
      "Find below all the official documents of the operation. Download them to prepare your subscription with confidence.",
    noteLink: true,
    blocks: [
      {
        title: "Senior subscription form",
        text: "Form to be completed and submitted to your partner brokerage firm to formalize your subscription.",
        link: "/pdf/bulletin-souscription-senior.pdf",
        linkLabel: "Download PDF ↓",
      },
      {
        title: "Operation brochure",
        text: "Summary presentation of the operation and its key features.",
        link: "/pdf/depliant.pdf",
        linkLabel: "Download PDF ↓",
        disabled: true,
      },
      {
        title: "Information memorandum",
        text: "Reference document detailing all the terms, procedures and information relating to the operation.",
        link: "/pdf/note-information.pdf",
        linkLabel: "Download PDF ↓",
      },
      {
        title: "Important information",
        text: "The information presented on this website is not a substitute for carefully reading the operation's official information memorandum.",
      },
    ],
  },
  {
    title: "Media library",
    image: operationPages[3].image,
    imageAlt: "Institutional resources",
    eyebrow: "Resources",
    intro:
      "Discover the video presentation of the FCTC BIDC operation and consult the institutional resources available to you.",
    video: "/video/presentation-fctc-bidc.mp4",
    videoPoster: "/video/presentation-poster.png",
    blocks: [
      {
        title: "Operation presentation",
        text: "This video presents the objectives, features and mechanisms of the FCTC BIDC securitization operation.",
      },
      {
        title: "Other resources",
        text: "Additional institutional resources will be made available soon in this section.",
      },
    ],
  },
];

// ============================================================
// TRADUCTIONS
// ============================================================
const translations = {
  fr: {
    languageLabel: "Langue",
    switchToEnglish: "Passer le site en anglais",
    switchToFrench: "Passer le site en français",
    operationLabel: "Fonds Commun de Titrisation de Créances",
    operationSubtitle: "EMPRUNT OBLIGATAIRE PAR APPEL PUBLIC À L'ÉPARGNE",
    topNavigation: "Navigation principale",
    subscribe: "Je souscris",
    announcements: "Annonces",
    slideAlts: slides.map((slide) => slide.alt),
    marqueeItems,
    subscriptionTitle: "Je souscris",
    subscriptionIntro:
      "Téléchargez le bulletin de souscription Senior pour finaliser votre souscription. Ce document contient toutes les informations nécessaires pour vous accompagner dans votre démarche.",
    seniorBulletin: "Bulletin Senior",
    seniorDescription:
      "Pour les souscripteurs institutionnels et les investisseurs avertis.",
    downloadPdf: "Télécharger le PDF ↓",
    backHome: "← Retour à l'accueil",
    siteNavigation: "Navigation du site",
    home: "Accueil",
    contact: "Nous contacter",
    lastName: "Nom",
    firstName: "Prénom",
    email: "E-mail",
    message: "Message",
    yourMessage: "Votre message",
    send: "Envoyer",
    contactFeedback:
      "Votre application de messagerie va s'ouvrir avec votre message prérempli.",
    directEmail: "Ou écrivez-nous directement :",
    midBannerAlt: "Bannière intermédiaire",
    resourcesLabel: "Documents et ressources",
    resourcesEyebrow: "Documents & Ressources",
    resourcesTitle: "Tout ce qu'il faut savoir sur l'opération",
    resourcesIntro:
      "Consultez les documents officiels et les informations pratiques pour préparer votre souscription en toute confiance.",
    resourceTitles: resources.map((resource) => resource.title),
    resourceDisabledLabel: "Bientôt disponible",
    footerBannerAlt: "Bannière BIDC",
    allRightsReserved: "Tous droits réservés.",
    footerDescription:
      "Fonds Commun de Titrisation de Créances - Emprunt Obligataire par Appel Public à l'Épargne.",
    emailSubject: "Message du site FCTC BIDC EBID",
    lastNamePrefix: "Nom",
    firstNamePrefix: "Prénom",
    emailPrefix: "E-mail",
    intro:
      "Au cœur du financement du développement en Afrique de l'Ouest depuis plusieurs décennies, la BIDC s'appuie sur son expertise régionale et son action en faveur de projets structurants pour porter la campagne FCTC BIDC avec légitimité, crédibilité et ambition.",
    noteInfoText:
      "Pour plus d'informations sur les conditions, modalités et caractéristiques de l'opération, veuillez consulter la note d'information officielle.",
    noteInfoCTA: "📄 Consulter la note d'information ↓",
  },
  en: {
    languageLabel: "Language",
    switchToEnglish: "Switch the website to English",
    switchToFrench: "Switch the website to French",
    operationLabel: "Debt Securitisation Mutual Fund",
    operationSubtitle: "BOND ISSUE THROUGH A PUBLIC OFFERING",
    topNavigation: "Main navigation",
    subscribe: "Subscribe",
    announcements: "Announcements",
    slideAlts: [
      "Industrial facilities and energy infrastructure",
      "Power lines at sunset",
      "Modern architecture in the heart of the city",
      "Bright workspace",
    ],
    marqueeItems: [
      "🎥 Information webinar — Thursday, November 12, 2026",
      "📢 Subscription period open — 5 November to 4 December 2026",
      "💰 Issue price: CFAF 10,000 per unit",
      "📍 Subscribe through your partner brokerage firm",
      `📞 More information: ${CONTACT_EMAIL}`,
    ],
    navigation: [
      "Framework and purpose of the operation",
      "Key features of the operation",
      "Documentation",
      "Media library",
    ],
    subscriptionTitle: "Subscribe",
    subscriptionIntro:
      "Download the Senior subscription form to complete your subscription. This document contains all the information you need to guide you through the process.",
    seniorBulletin: "Senior subscription form",
    seniorDescription:
      "For institutional subscribers and sophisticated investors.",
    downloadPdf: "Download PDF ↓",
    backHome: "← Back to home",
    siteNavigation: "Website navigation",
    home: "Home",
    contact: "Contact us",
    lastName: "Last name",
    firstName: "First name",
    email: "Email",
    message: "Message",
    yourMessage: "Your message",
    send: "Send",
    contactFeedback:
      "Your email application will open with your message pre-filled.",
    directEmail: "Or email us directly:",
    midBannerAlt: "Promotional banner",
    resourcesLabel: "Documents and resources",
    resourcesEyebrow: "Documents & Resources",
    resourcesTitle: "Everything you need to know about the operation",
    resourcesIntro:
      "Review the official documents and practical information to prepare for your subscription with confidence.",
    resourceTitles: [
      "Senior subscription form",
      "Operation brochure",
      "Information memorandum",
    ],
    resourceDisabledLabel: "Coming soon",
    footerBannerAlt: "BIDC banner",
    allRightsReserved: "All rights reserved.",
    footerDescription:
      "Debt Securitisation Mutual Fund - Bond Issue through a Public Offering.",
    emailSubject: "Message from the FCTC BIDC EBID website",
    lastNamePrefix: "Last name",
    firstNamePrefix: "First name",
    emailPrefix: "Email",
    intro:
      "At the heart of development financing in West Africa for several decades, BIDC relies on its regional expertise and its action in favor of structuring projects to carry the FCTC BIDC campaign with legitimacy, credibility and ambition.",
    operationPages: operationPagesEnglish,
    noteInfoText:
      "For more information on the terms, procedures and features of the operation, please refer to the official information memorandum.",
    noteInfoCTA: "📄 Read the information memorandum ↓",
  },
} as const;

// ============================================================
// COMPOSANTS
// ============================================================
function Brand({ onHome, label }: { onHome: () => void; label: string }) {
  return (
    <a
      className="brand"
      href="#accueil"
      aria-label={`BIDC, ${label.toLowerCase()}`}
      onClick={onHome}
    >
      <img className="brand-logo" src="/logo-bidc.png" alt="Logo BIDC" />
    </a>
  );
}

function HomeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="home-icon"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M4 18.5 20 5l16 13.5M9 16v18h22V16M16 34V23h8v11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.5"
      />
    </svg>
  );
}

// ============================================================
// COMPOSANT PRINCIPAL
// ============================================================
export default function Home() {
  const [language, setLanguage] = useState<Language>("fr");
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePage, setActivePage] = useState<number | null>(null);
  const [showSubscriptionPage, setShowSubscriptionPage] = useState(false);
  const [contactReady, setContactReady] = useState(false);
  const t = translations[language];
  const navigationItems =
    language === "fr" ? navigation : translations.en.navigation;
  const pages =
    language === "fr" ? operationPages : translations.en.operationPages;
  const intro = t.intro;

  const currentSlide = slides[activeSlide];
  const currentImage =
    language === "en" && currentSlide.imageEn
      ? currentSlide.imageEn
      : currentSlide.image;

  const midBannerImage =
    language === "en" ? "/banner-mid-ang.png" : "/banner-mid.png";

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const saved = savedLanguage === "en" ? "en" : "fr";
    setLanguage(saved);
    document.documentElement.lang = saved;
  }, []);

  function handleLanguageChange(nextLanguage: Language) {
    setLanguage(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `${t.emailSubject} — ${formData.get("contact-name")} ${formData.get("contact-first-name")}`;
    const body = [
      `${t.lastNamePrefix} : ${formData.get("contact-name")}`,
      `${t.firstNamePrefix} : ${formData.get("contact-first-name")}`,
      `${t.emailPrefix} : ${formData.get("contact-email")}`,
      "",
      `${t.message} :`,
      formData.get("contact-message"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setContactReady(true);
  }

  function handleSubscribeClick() {
    setActivePage(null);
    setShowSubscriptionPage(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleHomeClick() {
    setActivePage(null);
    setShowSubscriptionPage(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="site-shell" id="accueil">
      <header className="topbar">
        <Brand onHome={handleHomeClick} label={t.home} />

        <div className="operation-title">
          <span className="operation-label">{t.operationLabel}</span>
          <span className="operation-subtitle">{t.operationSubtitle}</span>
        </div>

        <nav className="top-links" aria-label={t.topNavigation}>
          <div
            className="language-switch"
            role="group"
            aria-label={t.languageLabel}
          >
            <button
              aria-label={t.switchToFrench}
              aria-pressed={language === "fr"}
              onClick={() => handleLanguageChange("fr")}
              type="button"
            >
              FR
            </button>
            <button
              aria-label={t.switchToEnglish}
              aria-pressed={language === "en"}
              onClick={() => handleLanguageChange("en")}
              type="button"
            >
              EN
            </button>
          </div>
          <button
            className="login-button"
            onClick={handleSubscribeClick}
            type="button"
          >
            {t.subscribe}
          </button>
        </nav>
      </header>

      <div className="marquee-bar" role="region" aria-label={t.announcements}>
        <div className="marquee-track">
          {t.marqueeItems.map((item, index) => (
            <span className="marquee-item" key={`a-${index}`}>
              {item}
            </span>
          ))}
          {t.marqueeItems.map((item, index) => (
            <span
              aria-hidden="true"
              className="marquee-item"
              key={`b-${index}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===== VUE COMMENT SOUSCRIRE ===== */}
      {showSubscriptionPage ? (
        <article className="section-page" key="subscription-page">
          <div className="subscription-page">
            <div className="subscription-header">
              <h1 className="subscription-title">{t.subscriptionTitle}</h1>
              <p className="subscription-intro">{t.subscriptionIntro}</p>
            </div>

            <div className="subscription-grid">
              <a
                href="/pdf/bulletin-souscription-senior.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="subscription-card"
              >
                <div className="subscription-card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h2 className="subscription-card-title">{t.seniorBulletin}</h2>
                <p className="subscription-card-desc">{t.seniorDescription}</p>
                <span className="subscription-card-cta">{t.downloadPdf}</span>
              </a>
            </div>

            <button
              className="section-back"
              onClick={handleHomeClick}
              type="button"
              style={{ marginTop: "40px" }}
            >
              {t.backHome}
            </button>
          </div>
        </article>
      ) : activePage === null ? (
        /* ===== VUE ACCUEIL ===== */
        <div className="home-full-layout">
          <div className="carousel full-width-carousel">
            <img src={currentImage} alt={t.slideAlts[activeSlide]} />
          </div>

          <div className="intro-copy full-width-text">
            <p>{intro}</p>
          </div>

          <div className="home-split-layout">
            <div className="home-left-column">
              <aside className="sidebar">
                <nav className="side-navigation" aria-label={t.siteNavigation}>
                  <button
                    aria-current={
                      activePage === null && !showSubscriptionPage
                        ? "page"
                        : undefined
                    }
                    className={`home-link${
                      activePage === null && !showSubscriptionPage
                        ? " active"
                        : ""
                    }`}
                    onClick={handleHomeClick}
                    type="button"
                  >
                    <HomeIcon />
                    <span>{t.home}</span>
                  </button>

                  {navigationItems.map((item, index) => (
                    <button
                      aria-current={activePage === index ? "page" : undefined}
                      className={`side-link${
                        activePage === index ? " active" : ""
                      }`}
                      key={item}
                      onClick={() => {
                        setActivePage(index);
                        setShowSubscriptionPage(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      type="button"
                    >
                      <span>{item}</span>
                    </button>
                  ))}

                  <button
                    className="subscribe-button"
                    onClick={handleSubscribeClick}
                    type="button"
                  >
                    {t.subscribe}
                  </button>
                </nav>

                <section className="contact-card" id="contact">
                  <h2>{t.contact}</h2>
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <label>
                      <span>{t.lastName}</span>
                      <input
                        aria-label={t.lastName}
                        name="contact-name"
                        required
                      />
                    </label>
                    <label>
                      <span>{t.firstName}</span>
                      <input
                        aria-label={t.firstName}
                        name="contact-first-name"
                        required
                      />
                    </label>
                    <label>
                      <span>{t.email}</span>
                      <input
                        aria-label={t.email}
                        name="contact-email"
                        required
                        type="email"
                      />
                    </label>
                    <label>
                      <span>{t.message}</span>
                      <textarea
                        aria-label={t.yourMessage}
                        name="contact-message"
                        required
                        rows={4}
                      />
                    </label>
                    <button type="submit">{t.send}</button>
                    {contactReady && (
                      <p className="contact-feedback" role="status">
                        {t.contactFeedback}
                      </p>
                    )}
                  </form>

                  <p className="contact-email">
                    {t.directEmail}
                    <br />
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </p>
                </section>
              </aside>
            </div>

            <div className="home-right-column">
              <div className="mid-banner-wrapper">
                <img
                  src={midBannerImage}
                  alt={t.midBannerAlt}
                  className="mid-banner-image"
                />
              </div>

              <section
                className="resources full-width-resources"
                aria-label={t.resourcesLabel}
              >
                <div className="resources-header">
                  <span className="resources-eyebrow">
                    {t.resourcesEyebrow}
                  </span>
                  <h2 className="resources-title">{t.resourcesTitle}</h2>
                  <p className="resources-intro">{t.resourcesIntro}</p>
                </div>

                <div className="resources-grid">
                  {resources.map((item, index) => {
                    const content = (
                      <>
                        <div className="resource-image-wrapper">
                          <img
                            alt={t.resourceTitles[index]}
                            className="resource-image"
                            src={item.image}
                          />
                        </div>
                        <div className="resource-content">
                          <h3 className="resource-card-title">
                            {t.resourceTitles[index]}
                          </h3>
                          {item.disabled ? (
                            <span className="resource-disabled-badge">
                              {t.resourceDisabledLabel}
                            </span>
                          ) : (
                            <div className="resource-arrow-wrapper">
                              <span
                                aria-hidden="true"
                                className="resource-arrow"
                              >
                                ↓
                              </span>
                            </div>
                          )}
                        </div>
                      </>
                    );

                    if (item.disabled) {
                      return (
                        <div
                          aria-disabled="true"
                          className="resource-card resource-card-disabled"
                          key={item.pdf}
                          title={t.resourceDisabledLabel}
                        >
                          {content}
                        </div>
                      );
                    }

                    return (
                      <a
                        className="resource-card"
                        href={item.pdf}
                        key={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ animationDelay: `${index * 60}ms` }}
                      >
                        {content}
                      </a>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        /* ===== VUES DES PAGES INTERNES DU MENU ===== */
        <div className="page-columns">
          <aside className="sidebar">
            <nav className="side-navigation" aria-label={t.siteNavigation}>
              <button
                aria-current={
                  activePage === null && !showSubscriptionPage
                    ? "page"
                    : undefined
                }
                className={`home-link${
                  activePage === null && !showSubscriptionPage ? " active" : ""
                }`}
                onClick={handleHomeClick}
                type="button"
              >
                <HomeIcon />
                <span>{t.home}</span>
              </button>

              {navigationItems.map((item, index) => (
                <button
                  aria-current={activePage === index ? "page" : undefined}
                  className={`side-link${
                    activePage === index ? " active" : ""
                  }`}
                  key={item}
                  onClick={() => {
                    setActivePage(index);
                    setShowSubscriptionPage(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  type="button"
                >
                  <span>{item}</span>
                </button>
              ))}

              <button
                className="subscribe-button"
                onClick={handleSubscribeClick}
                type="button"
              >
                {t.subscribe}
              </button>
            </nav>

            <section className="contact-card" id="contact">
              <h2>{t.contact}</h2>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label>
                  <span>{t.lastName}</span>
                  <input
                    aria-label={t.lastName}
                    name="contact-name"
                    required
                  />
                </label>
                <label>
                  <span>{t.firstName}</span>
                  <input
                    aria-label={t.firstName}
                    name="contact-first-name"
                    required
                  />
                </label>
                <label>
                  <span>{t.email}</span>
                  <input
                    aria-label={t.email}
                    name="contact-email"
                    required
                    type="email"
                  />
                </label>
                <label>
                  <span>{t.message}</span>
                  <textarea
                    aria-label={t.yourMessage}
                    name="contact-message"
                    required
                    rows={4}
                  />
                </label>
                <button type="submit">{t.send}</button>
                {contactReady && (
                  <p className="contact-feedback" role="status">
                    {t.contactFeedback}
                  </p>
                )}
              </form>
              <p className="contact-email">
                {t.directEmail}
                <br />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </section>
          </aside>

          <section className="main-content">
            <article className="section-page" key={activePage}>
              <figure className="section-hero">
                <img
                  alt={pages[activePage].imageAlt}
                  src={pages[activePage].image}
                />
                <figcaption>{pages[activePage].title}</figcaption>
              </figure>
              <div className="carousel-dots section-dots">
                {pages.map((page, index) => (
                  <button
                    aria-label={`${
                      language === "fr" ? "Afficher" : "Show"
                    }: ${page.title}`}
                    aria-pressed={activePage === index}
                    className={activePage === index ? "active" : ""}
                    key={page.title}
                    onClick={() => setActivePage(index)}
                    type="button"
                  />
                ))}
              </div>
              <p className="section-eyebrow">{pages[activePage].eyebrow}</p>
              <h1 id="section-title">{pages[activePage].title}</h1>
              <p className="section-intro">{pages[activePage].intro}</p>

              {/* ✅ LECTEUR VIDÉO (Médiathèque) */}
              {pages[activePage].video && (
                <div className="section-video-wrapper">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={pages[activePage].videoPoster}
                  >
                    <source
                      src={pages[activePage].video}
                      type="video/mp4"
                    />
                    {language === "fr"
                      ? "Votre navigateur ne supporte pas la lecture vidéo."
                      : "Your browser does not support video playback."}
                  </video>
                </div>
              )}

              <div className="section-cards">
                {pages[activePage].blocks.map((block, index) => (
                  <section className="section-card" key={index}>
                    <span className="section-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      {block.title && <h2>{block.title}</h2>}
                      {block.text && <p>{block.text}</p>}

                      {block.list && (
                        <ul className="section-card-list">
                          {block.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}

                      {block.link && !block.disabled && (
                        <a
                          className="section-card-download"
                          href={block.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {block.linkLabel || t.downloadPdf}
                        </a>
                      )}

                      {block.link && block.disabled && (
                        <span className="section-card-disabled-badge">
                          {t.resourceDisabledLabel}
                        </span>
                      )}
                    </div>
                  </section>
                ))}
              </div>

              {pages[activePage].noteLink && (
                <aside className="section-note-cta">
                  <div className="section-note-icon" aria-hidden="true">
                    📄
                  </div>
                  <div className="section-note-body">
                    <p className="section-note-text">{t.noteInfoText}</p>
                    <a
                      className="section-note-button"
                      href={NOTE_INFO_PDF}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.noteInfoCTA}
                    </a>
                  </div>
                </aside>
              )}

              <button
                className="section-back"
                onClick={() => setActivePage(null)}
                type="button"
              >
                {t.backHome}
              </button>
            </article>
          </section>
        </div>
      )}

      <footer className="footer">
        <div className="footer-banner-wrapper">
          <img
            src="/footer-banner.png"
            alt={t.footerBannerAlt}
            className="footer-banner-image"
          />
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {new Date().getFullYear()} APE BIDC. {t.allRightsReserved}
            </p>
            <p>{t.footerDescription}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}