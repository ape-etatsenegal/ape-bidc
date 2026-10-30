"use client";

import { FormEvent, useEffect, useState } from "react";

const CONTACT_EMAIL = "fctc-bidc-ebid@contact.sn";
const LANGUAGE_STORAGE_KEY = "ape-bidc-language";

type Language = "fr" | "en";

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
  },
  {
    title: "Dépliant de l'opération",
    image: "/depliant.png",
    alt: "Dépliant de l'opération",
    pdf: "/pdf/depliant.pdf",
  },
  {
    title: "Note d'information",
    image: "/note-information.png",
    alt: "Note d'information",
    pdf: "/pdf/note-information.pdf",
  },
];

const marqueeItems = [
  "📢 Période de souscription ouverte — Du 28 octobre au 30 novembre 2026",
  "💰 Prix d'émission : 10 000 FCFA par part",
  "📍 Souscrivez auprès de votre SGI partenaire",
  "📞 Plus d'infos : fctc-bidc-ebid@contact.sn",
];

const operationPages = [
  {
    title: navigation[0],
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Infrastructure industrielle et énergétique",
    eyebrow: "Présentation de l'opération",
    intro:
      "Cette rubrique présente le contexte de l'opération et son objectif : permettre au public de mieux comprendre son cadre et sa contribution au financement du développement en Afrique de l'Ouest.",
    blocks: [
      {
        title: "Le cadre",
        text: "L'opération s'inscrit dans la mission de la BIDC, Institution de Financement du Développement au service des 15 États de l'Afrique de l'Ouest dédiée au financement de projets structurants favorisant la croissance économique, l'intégration régionale et le développement durable de la sous-région.",
      },
      {
        title: "L'objet",
        text: "Retrouvez ici les informations essentielles pour comprendre la finalité de l'opération et les principes qui l'encadrent.",
      },
    ],
  },
  {
    title: navigation[1],
    image: "caracteristiques.png",
    imageAlt: "Documents financiers et caractéristiques",
    eyebrow: "Informations clés",
    intro:
      "Les caractéristiques de l'opération rassemblent les éléments utiles pour en comprendre le fonctionnement et les modalités.",
    blocks: [
      {
        title: "Modalités de l'opération",
        text: "Les modalités applicables, les conditions de participation et les informations pratiques sont à consulter dans les documents officiels de l'opération.",
      },
      {
        title: "À retenir",
        text: "Avant toute décision, prenez connaissance de l'ensemble des caractéristiques et des conditions décrites dans la note d'information.",
      },
    ],
  },
  {
    title: navigation[2],
    image: "documentation.png",
    imageAlt: "Documentation officielle",
    eyebrow: "Document de référence",
    intro:
      "La note d'information est le document de référence pour prendre connaissance des conditions, des modalités et des informations relatives à l'opération.",
    blocks: [
      {
        text: "Les informations détaillées de l'opération sont destinées à être regroupées dans cette rubrique. Référez-vous aux documents officiels avant toute souscription.",
      },
      {
        title: "Information importante",
        text: "Les éléments présentés sur ce site ne remplacent pas la lecture attentive de la note d'information officielle de l'opération.",
      },
    ],
  },
  {
    title: navigation[3],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Ressources institutionnelles",
    eyebrow: "Ressources",
    intro:
      "Retrouvez les ressources institutionnelles et les documents de référence liés à la BIDC.",
    blocks: [
      {
        title: "Brochure institutionnelle",
        text: "Découvrez la BIDC à travers sa brochure institutionnelle présentant sa mission, son organisation et ses réalisations.",
      },
      {
        title: "Stratégie GRO",
        text: "Consultez la Stratégie GRO de la BIDC pour en savoir plus sur ses orientations stratégiques.",
      },
      {
        title: "Rapport annuel",
        text: "Accédez au rapport annuel de la BIDC pour suivre ses activités, ses résultats financiers et son impact sur le développement de la sous-région.",
      },
    ],
  },
];

const operationPagesEnglish = [
  {
    title: "Framework and purpose of the operation",
    image: operationPages[0].image,
    imageAlt: "Industrial and energy infrastructure",
    eyebrow: "About the operation",
    intro:
      "This section explains the context and purpose of the operation, helping the public understand its framework and contribution to financing development in Ouest Africa.",
    blocks: [
      {
        title: "Framework",
        text: "The operation is part of BIDC's mission, a Development Finance Institution serving the 15 West African States dedicated to financing structuring projects that promote economic growth, regional integration and sustainable development in the sub-region.",
      },
      {
        title: "Purpose",
        text: "Find the essential information here to understand the operation's purpose and the principles that govern it.",
      },
    ],
  },
  {
    title: "Key features of the operation",
    image: operationPages[1].image,
    imageAlt: "Financial documents and key features",
    eyebrow: "Key information",
    intro:
      "The operation's key features bring together the information needed to understand how it works and its terms.",
    blocks: [
      {
        title: "Terms of the operation",
        text: "Please refer to the official operation documents for the applicable terms, participation requirements and practical information.",
      },
      {
        title: "Key points",
        text: "Before making any decision, review all the features and conditions described in the information memorandum.",
      },
    ],
  },
  {
    title: "Documentation",
    image: operationPages[2].image,
    imageAlt: "Official documentation",
    eyebrow: "Reference document",
    intro:
      "The information memorandum is the reference document outlining the terms, procedures and information relating to the operation.",
    blocks: [
      {
        title: "Read the information memorandum",
        text: "Detailed information about the operation is provided in this section. Please consult the official documents before subscribing.",
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
    intro: "Discover the institutional resources and reference documents related to BIDC.",
    blocks: [
      {
        title: "Institutional Brochure",
        text: "Learn about BIDC through its institutional brochure presenting its mission, organization, and achievements.",
      },
      {
        title: "GRO Strategy",
        text: "Consult BIDC's GRO Strategy to learn more about its strategic orientations.",
      },
      {
        title: "Annual Report",
        text: "Access BIDC's annual report to track its activities, financial results, and impact on the sub-region's development.",
      },
    ],
  },
];

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
    footerBannerAlt: "Bannière BIDC",
    allRightsReserved: "Tous droits réservés.",
    footerDescription:
      "Fonds Commun de Titrisation de Créances - Emprunt Obligataire par Appel Public à l'Épargne.",
    // ✅ CORRIGÉ : BDEAC → FCTC BIDC EBID
    emailSubject: "Message du site FCTC BIDC EBID",
    lastNamePrefix: "Nom",
    firstNamePrefix: "Prénom",
    emailPrefix: "E-mail",
    intro:
      "Au cœur du financement du développement en Afrique de l'Ouest depuis plusieurs décennies, la BIDC s'appuie sur son expertise régionale et son action en faveur de projets structurants pour porter la campagne FCTC BIDC avec légitimité, crédibilité et ambition.",
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
      "📢 Subscription period open — 28 October to 30 November 2026",
      "💰 Issue price: CFAF 10,000 per unit",
      "📍 Subscribe through your partner brokerage firm",
      "📞 More information: fctc-bidc-ebid@contact.sn",
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
    footerBannerAlt: "BIDC banner",
    allRightsReserved: "All rights reserved.",
    footerDescription:
      "Debt Securitisation Mutual Fund - Bond Issue through a Public Offering.",
    // ✅ CORRIGÉ : BDEAC → FCTC BIDC EBID
    emailSubject: "Message from the FCTC BIDC EBID website",
    lastNamePrefix: "Last name",
    firstNamePrefix: "First name",
    emailPrefix: "Email",
    intro:
      "At the heart of development financing in West Africa for several decades, BIDC relies on its regional expertise and its action in favor of structuring projects to carry the FCTC BIDC campaign with legitimacy, credibility and ambition.",
    operationPages: operationPagesEnglish,
  },
} as const;

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

export default function Home() {
  const [language, setLanguage] = useState<Language>("fr");
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePage, setActivePage] = useState<number | null>(null);
  const [showSubscriptionPage, setShowSubscriptionPage] = useState(false);
  const [contactReady, setContactReady] = useState(false);
  const t = translations[language];
  const navigationItems =
    language === "fr" ? navigation : translations.en.navigation;
  const pages = language === "fr" ? operationPages : translations.en.operationPages;
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
          <div className="language-switch" role="group" aria-label={t.languageLabel}>
            {/* ✅ CORRIGÉ : aria-label correspond désormais à l'action réelle du bouton */}
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

      {/* ✅ CORRIGÉ : role="marquee" (invalide) → role="region" (valide) */}
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
            <img
              src={currentImage}
              alt={t.slideAlts[activeSlide]}
            />
          </div>

          <div className="intro-copy full-width-text">
            <p>{intro}</p>
          </div>

          <div className="home-split-layout">
            <div className="home-left-column">
              <aside className="sidebar">
                <nav
                  className="side-navigation"
                  aria-label={t.siteNavigation}
                >
                  <button
                    aria-current={activePage === null && !showSubscriptionPage ? "page" : undefined}
                    className={`home-link${activePage === null && !showSubscriptionPage ? " active" : ""}`}
                    onClick={handleHomeClick}
                    type="button"
                  >
                    <HomeIcon />
                    <span>{t.home}</span>
                  </button>

                  {navigationItems.map((item, index) => (
                    <button
                      aria-current={activePage === index ? "page" : undefined}
                      className={`side-link${activePage === index ? " active" : ""}`}
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
                      <input aria-label={t.lastName} name="contact-name" required />
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
                    {t.directEmail}<br />
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
                  {resources.map((item, index) => (
                    <a
                      className="resource-card"
                      href={item.pdf ? item.pdf : "#"}
                      key={item.pdf}
                      target={item.pdf ? "_blank" : "_self"}
                      rel={item.pdf ? "noopener noreferrer" : undefined}
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
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
                        <div className="resource-arrow-wrapper">
                          <span aria-hidden="true" className="resource-arrow">
                            ↓
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
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
                aria-current={activePage === null && !showSubscriptionPage ? "page" : undefined}
                className={`home-link${activePage === null && !showSubscriptionPage ? " active" : ""}`}
                onClick={handleHomeClick}
                type="button"
              >
                <HomeIcon />
                <span>{t.home}</span>
              </button>

              {navigationItems.map((item, index) => (
                <button
                  aria-current={activePage === index ? "page" : undefined}
                  className={`side-link${activePage === index ? " active" : ""}`}
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
                  <input aria-label={t.lastName} name="contact-name" required />
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
                {t.directEmail}<br />
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
                    aria-label={`${language === "fr" ? "Afficher" : "Show"}: ${page.title}`}
                    aria-pressed={activePage === index}
                    className={activePage === index ? "active" : ""}
                    key={page.title}
                    onClick={() => setActivePage(index)}
                    type="button"
                  />
                ))}
              </div>
              <p className="section-eyebrow">
                {pages[activePage].eyebrow}
              </p>
              <h1 id="section-title">{pages[activePage].title}</h1>
              <p className="section-intro">
                {pages[activePage].intro}
              </p>
              <div className="section-cards">
                {pages[activePage].blocks.map((block, index) => (
                  <section className="section-card" key={block.title}>
                    <span className="section-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2>{block.title}</h2>
                      <p>{block.text}</p>
                    </div>
                  </section>
                ))}
              </div>
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
            <p>© {new Date().getFullYear()} APE BIDC. {t.allRightsReserved}</p>
            <p>{t.footerDescription}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}