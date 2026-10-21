"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "fctc-bidc-ebid@contact.sn";

const slides = [
  {
    image: "/Emprunt FCTC BIDC 2026 5.png",
    alt: "Installation industrielle et infrastructures énergétiques",
    title: "Des infrastructures pour demain",
  },
  {
    image: "/images.png",
    alt: "Lignes électriques au coucher du soleil",
    title: "L'énergie au cœur du développement",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    alt: "Architecture moderne au cœur de la ville",
    title: "Des villes qui se transforment",
  },
  {
    image:
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
    title: "Bulletin de souscription Junior",
    image: "/bulletin-souscription.png",
    alt: "Bulletin de souscription Junior",
    pdf: "/pdf/bulletin-souscription-junior.pdf",
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
      "Cette rubrique présente le contexte de l'opération et son objectif : permettre au public de mieux comprendre son cadre et sa contribution au financement du développement en Afrique centrale.",
    blocks: [
      {
        title: "Le cadre",
        text: "L'opération s'inscrit dans la mission de la BDEAC, qui accompagne le développement économique et social des pays de la Communauté Économique et Monétaire de l'Afrique Centrale.",
      },
      {
        title: "L'objet",
        text: "Retrouvez ici les informations essentielles pour comprendre la finalité de l'opération et les principes qui l'encadrent.",
      },
    ],
  },
  {
    title: navigation[1],
    image: "/images.png",
    imageAlt: "Lignes électriques au coucher du soleil",
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
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Espace de travail lumineux",
    eyebrow: "Document de référence",
    intro:
      "La note d'information est le document de référence pour prendre connaissance des conditions, des modalités et des informations relatives à l'opération.",
    blocks: [
      {
        title: "Consulter la note d'information",
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
    imageAlt: "Détails d'une technologie numérique",
    eyebrow: "Images et ressources",
    intro:
      "Retrouvez dans la médiathèque les contenus visuels et les ressources liés à la BIDC et à l'opération.",
    blocks: [
      {
        title: "La BIDC en images",
        text: "Les photos, vidéos et autres ressources de la médiathèque seront présentées dans cet espace.",
      },
      {
        title: "À propos de la Banque",
        text: "La BIDC accompagne les projets qui contribuent au développement économique et social de la sous-région.",
      },
    ],
  },
];

function Brand({ onHome }: { onHome: () => void }) {
  return (
    <a
      className="brand"
      href="#accueil"
      aria-label="BIDC, accueil"
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
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePage, setActivePage] = useState<number | null>(null);
  const [showSubscriptionPage, setShowSubscriptionPage] = useState(false);
  const [contactReady, setContactReady] = useState(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Message du site BDEAC — ${formData.get("contact-name")} ${formData.get("contact-first-name")}`;
    const body = [
      `Nom : ${formData.get("contact-name")}`,
      `Prénom : ${formData.get("contact-first-name")}`,
      `E-mail : ${formData.get("contact-email")}`,
      "",
      "Message :",
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
        <Brand onHome={handleHomeClick} />

        <div className="operation-title">
          <span className="operation-label">
            Fonds Commun de Titrisation de Créances
          </span>
          <span className="operation-subtitle">
            EMPRUNT OBLIGATAIRE PAR APPEL PUBLIC À L'ÉPARGNE
          </span>
        </div>

        <nav className="top-links" aria-label="Navigation principale">
          <button
            className="login-button"
            onClick={handleSubscribeClick}
            type="button"
          >
            Je souscris
          </button>
        </nav>
      </header>

      <div className="marquee-bar" role="marquee" aria-label="Annonces">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <span className="marquee-item" key={`a-${index}`}>
              {item}
            </span>
          ))}
          {marqueeItems.map((item, index) => (
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
              <h1 className="subscription-title">Je souscris</h1>
              <p className="subscription-intro">
                Choisissez le type de bulletin de souscription qui vous
                correspond. Chaque document contient les informations
                nécessaires pour finaliser votre souscription.
              </p>
            </div>

            <div className="subscription-grid">
              <a
                href="/pdf/bulletin-souscription-senior.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="subscription-card"
              >
                <div className="subscription-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h2 className="subscription-card-title">Bulletin Senior</h2>
                <p className="subscription-card-desc">
                  Pour les souscripteurs institutionnels et les investisseurs
                  avertis.
                </p>
                <span className="subscription-card-cta">
                  Télécharger le PDF ↓
                </span>
              </a>

              <a
                href="/pdf/bulletin-souscription-junior.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="subscription-card"
              >
                <div className="subscription-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h2 className="subscription-card-title">Bulletin Junior</h2>
                <p className="subscription-card-desc">
                  Pour les souscripteurs particuliers et les nouveaux
                  investisseurs.
                </p>
                <span className="subscription-card-cta">
                  Télécharger le PDF ↓
                </span>
              </a>
            </div>

            <button
              className="section-back"
              onClick={handleHomeClick}
              type="button"
              style={{ marginTop: "40px" }}
            >
              ← Retour à l'accueil
            </button>
          </div>
        </article>
      ) : activePage === null ? (
        /* ===== VUE ACCUEIL ===== */
        <div className="home-full-layout">
          <div className="carousel full-width-carousel">
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].alt}
            />
          </div>

          <div className="intro-copy full-width-text">
            <p>
              Une institution régionale de développement au service des 15 États
              de la CEDEAO, une expérience de plusieurs décennies et un rôle
              actif dans le financement de projets structurants : la BIDC
              constitue la caution institutionnelle visible de la campagne FCTC
              BIDC.
            </p>
          </div>

          <div className="home-split-layout">
            <div className="home-left-column">
              <aside className="sidebar">
                <nav
                  className="side-navigation"
                  aria-label="Navigation du site"
                >
                  <button
                    aria-current={activePage === null && !showSubscriptionPage ? "page" : undefined}
                    className={`home-link${activePage === null && !showSubscriptionPage ? " active" : ""}`}
                    onClick={handleHomeClick}
                    type="button"
                  >
                    <HomeIcon />
                    <span>Accueil</span>
                  </button>

                  {navigation.map((item, index) => (
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
                    Je souscris
                  </button>
                </nav>

                <section className="contact-card" id="contact">
                  <h2>Nous contacter</h2>
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <label>
                      <span>Nom</span>
                      <input aria-label="Nom" name="contact-name" required />
                    </label>
                    <label>
                      <span>Prénom</span>
                      <input
                        aria-label="Prénom"
                        name="contact-first-name"
                        required
                      />
                    </label>
                    <label>
                      <span>E-mail</span>
                      <input
                        aria-label="E-mail"
                        name="contact-email"
                        required
                        type="email"
                      />
                    </label>
                    <label>
                      <span>Message</span>
                      <textarea
                        aria-label="Votre message"
                        name="contact-message"
                        required
                        rows={4}
                      />
                    </label>
                    <button type="submit">Envoyer</button>
                    {contactReady && (
                      <p className="contact-feedback" role="status">
                        Votre application de messagerie va s'ouvrir avec votre
                        message prérempli.
                      </p>
                    )}
                  </form>

                  <p className="contact-email">
                    Ou écrivez-nous directement :<br />
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </p>
                </section>
              </aside>
            </div>

            <div className="home-right-column">
              <div className="mid-banner-wrapper">
                <img
                  src="/banner-mid.png"
                  alt="Bannière intermédiaire"
                  className="mid-banner-image"
                />
              </div>

              <section
                className="resources full-width-resources"
                aria-label="Documents et ressources"
              >
                <div className="resources-header">
                  <span className="resources-eyebrow">
                    Documents & Ressources
                  </span>
                  <h2 className="resources-title">
                    Tout ce qu'il faut savoir sur l'opération
                  </h2>
                  <p className="resources-intro">
                    Consultez les documents officiels et les informations
                    pratiques pour préparer votre souscription en toute
                    confiance.
                  </p>
                </div>

                <div className="resources-grid">
                  {resources.map((item, index) => (
                    <a
                      className="resource-card"
                      href={item.pdf ? item.pdf : "#"}
                      key={item.title}
                      target={item.pdf ? "_blank" : "_self"}
                      rel={item.pdf ? "noopener noreferrer" : undefined}
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <div className="resource-image-wrapper">
                        <img
                          alt={item.alt}
                          className="resource-image"
                          src={item.image}
                        />
                      </div>
                      <div className="resource-content">
                        <h3 className="resource-card-title">{item.title}</h3>
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
            <nav className="side-navigation" aria-label="Navigation du site">
              <button
                aria-current={activePage === null && !showSubscriptionPage ? "page" : undefined}
                className={`home-link${activePage === null && !showSubscriptionPage ? " active" : ""}`}
                onClick={handleHomeClick}
                type="button"
              >
                <HomeIcon />
                <span>Accueil</span>
              </button>

              {navigation.map((item, index) => (
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
                Je souscris
              </button>
            </nav>

            <section className="contact-card" id="contact">
              <h2>Nous contacter</h2>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label>
                  <span>Nom</span>
                  <input aria-label="Nom" name="contact-name" required />
                </label>
                <label>
                  <span>Prénom</span>
                  <input
                    aria-label="Prénom"
                    name="contact-first-name"
                    required
                  />
                </label>
                <label>
                  <span>E-mail</span>
                  <input
                    aria-label="E-mail"
                    name="contact-email"
                    required
                    type="email"
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    aria-label="Votre message"
                    name="contact-message"
                    required
                    rows={4}
                  />
                </label>
                <button type="submit">Envoyer</button>
                {contactReady && (
                  <p className="contact-feedback" role="status">
                    Votre application de messagerie va s'ouvrir avec votre
                    message prérempli.
                  </p>
                )}
              </form>
              <p className="contact-email">
                Ou écrivez-nous directement :<br />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </section>
          </aside>

          <section className="main-content">
            <article className="section-page" key={activePage}>
              <figure className="section-hero">
                <img
                  alt={operationPages[activePage].imageAlt}
                  src={operationPages[activePage].image}
                />
                <figcaption>{operationPages[activePage].title}</figcaption>
              </figure>
              <div className="carousel-dots section-dots">
                {operationPages.map((page, index) => (
                  <button
                    aria-label={`Afficher : ${page.title}`}
                    aria-pressed={activePage === index}
                    className={activePage === index ? "active" : ""}
                    key={page.title}
                    onClick={() => setActivePage(index)}
                    type="button"
                  />
                ))}
              </div>
              <p className="section-eyebrow">
                {operationPages[activePage].eyebrow}
              </p>
              <h1 id="section-title">{operationPages[activePage].title}</h1>
              <p className="section-intro">
                {operationPages[activePage].intro}
              </p>
              <div className="section-cards">
                {operationPages[activePage].blocks.map((block, index) => (
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
                ← Retour à l'accueil
              </button>
            </article>
          </section>
        </div>
      )}

      <footer className="footer">
        <div className="footer-banner-wrapper">
          <img
            src="/footer-banner.png"
            alt="Bannière BIDC"
            className="footer-banner-image"
          />
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} APE BIDC. Tous droits réservés.</p>
            <p>
              Fonds Commun de Titrisation de Créances - Emprunt Obligataire par
              Appel Public à l'Épargne.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}