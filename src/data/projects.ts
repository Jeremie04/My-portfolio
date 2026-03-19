// nom, description etc.

export const projectsText = {
    fr: [
      {
        id: 1,
        name: "Application de gestion frais d’administration",
        type: "Stage",
        description:
          "Application web permettant de gérer et automatiser le calcul des frais d’administration minière, avec génération automatique de factures et suivi en temps réel des opérations financières.",
      },
      {
        id: 2,
        name: "Application de prédiction immobilier",
        type: "Projet Académique",
        description:
          "Application de prédiction des prix immobiliers utilisant Machine Learning et Web Scraping.",
      },
      {
        id: 3,
        name: "Generic DAO Framework en Java",
        type: "Projet Personnel",
        description:
          "Développement d’une architecture DAO générique en Java permettant de standardiser les opérations CRUD, améliorer la maintenabilité du code et faciliter l’intégration avec différentes entités métier.",
      },
      {
        id: 4,
        name: "Système de suggestion de traitements médicaux",
        type: "Projet Personnel",
        description:
          "Application intégrant un système de recommandation basé sur les symptômes, proposant des maladies probables et des médicaments optimisés selon un budget défini.",
      },
      {
        id: 5,
        name: "Application de Gestion de Déchet",
        type: "Projet Académique",
        description:
          "Application permettant de planifier et suivre les collectes de déchets en temps réel, facilitant la communication entre les agents de collecte et les responsables de gestion.",
      },
      {
        id: 6,
        name: "Système de gestion de garage automobile",
        type: "Projet Académique",
        description:
          "Application permettant de gérer les réservations, le suivi des réparations et la gestion des prestations automobiles.",
      },
    ],
  
    en: [
      {
        id: 1,
        name: "Mining Fee Management Application",
        type: "Internship",
        description:
          "Web application for managing and automating mining administration fees, with automatic invoice generation and real-time financial tracking.",
      },
      {
        id: 2,
        name: "Real Estate Price Prediction App",
        type: "Academic Project",
        description:
          "Application for predicting real estate prices using Machine Learning and Web Scraping.",
      },
      {
        id: 3,
        name: "Generic DAO Framework in Java",
        type: "Personal Project",
        description:
          "Development of a generic DAO architecture in Java to standardize CRUD operations and improve code maintainability.",
      },
      {
        id: 4,
        name: "Medical Treatment Recommendation System",
        type: "Personal Project",
        description:
          "Recommendation system based on symptoms to suggest probable diseases and optimized treatments within a budget.",
      },
      {
        id: 5,
        name: "Waste Management Application",
        type: "Academic Project",
        description:
          "Application to schedule and track waste collection in real time, improving communication between agents and managers.",
      },
      {
        id: 6,
        name: "Car Garage Management System",
        type: "Academic Project",
        description:
          "System for managing bookings, repairs, and automotive services in a garage.",
      },
    ],
  };


// liens & images de chaque projet
export const projectsBase = [
    {
      id: 1,
      stacks: ["Angular", "Spring Boot", "JWT", "Postgres", "Rest API", "JPA"],
      imageUrl: "/Graphe-frais.png",
      gitUrl: "",
      moreDetails: {
        images: [
          "/Graphe-frais.png",
          "/Histogramme-frais.png",
          "/Historique-frais.png",
          "/Notif-frais.png",
          "/Repartition-frais.png",
          "facture-frais.png",
          "saisie-facture-frais.png",
        ],
        infoSup: {
          fr: [
            "Génération automatique de factures",
            "Envoi d'email automatisé",
            "Dashboard interactif en temps réel",
            "Export données en CSV et PDF",
            "Sécurisation des accès avec JWT",
          ],
          en: [
            "Automatic invoice generation",
            "Automated email sending",
            "Real-time interactive dashboard",
            "CSV and PDF data export",
            "JWT-based access security",
          ],
        },
        gits: [
          { link: "https://github.com/Jeremie04/angular-front", name: "front" },
          {
            link: "https://github.com/Jeremie04/back-spring-Frais-d-Administration",
            name: "back",
          },
        ],
      },
    },
  
    {
      id: 2,
      stacks: [
        "Python",
        "Machine Learning",
        "Streamlit",
        "Scikit-learn",
        "BeautifulSoup",
      ],
      imageUrl: "",
      gitUrl: "",
    },
  
    {
      id: 3,
      stacks: ["Java", "POO"],
      imageUrl: "",
      gitUrl: "https://github.com/Jeremie04/GenericDAO",
    },
  
    {
      id: 4,
      stacks: ["Spring Boot", "JSP", "Postgres"],
      imageUrl: "",
      gitUrl: "https://github.com/Jeremie04/Dokotera",
    },
  
    {
      id: 5,
      stacks: ["Spring Boot", "JSP", "Postgres"],
      imageUrl: "/dashboard-déchet.png",
      gitUrl: "",
      moreDetails: {
        images: [
          "/dashboard-déchet.png",
          "/Axe-dechet.png",
          "/Planning-dechet.png",
          "/Notif-dechet.png",
          "/Dialog-dechet.png",
        ],
        infoSup: {
          fr: [
            "Notifications instantanées",
            "Interface utilisateur intuitive",
            "Suivi des collectes en temps réel",
            "Export données en CSV et PDF",
          ],
          en: [
            "Instant notifications",
            "Intuitive user interface",
            "Real-time waste tracking",
            "CSV and PDF export",
          ],
        },
      },
    },
  
    {
      id: 6,
      stacks: ["Angular", "ExpressJS", "MongoDB", "JWT"],
      imageUrl: "",
      gitUrl: "",
    },
  ];