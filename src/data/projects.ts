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
      {
        id: 7,
        name: "Plateforme de gestion des compétitions sportives",
        type: "Projet Académique",
        description:
          "Développement d'une application web permettant de gérer des compétitions de course. Elle assure le suivi des participants, l'enregistrement des résultats, le calcul automatique des points, le classement individuel des joueurs ainsi que le classement général des équipes en temps réel.",
      },
      {
        id: 8,
        name: "Système de gestion des achats et des approvisionnements",
        type: "Projet Académique",
        description:
          "Application web de gestion des achats d'entreprise permettant de gérer les demandes de fournitures, les fournisseurs et les bons de commande. Elle intègre un workflow de validation avec plusieurs rôles (Directeur Général, Chef des achats et Magasinier) ainsi que la génération de bons de commande en PDF. Projet réalisé en équipe de trois développeurs.",
      },
      {
        id: 9,
        name: "Mise en place d’une architecture DMZ via GNS3 et Docker",
        type: "Projet Académique",
        description:
          "Conception et déploiement d'une architecture DMZ sécurisée avec GNS3 et Docker, intégrant un pare-feu, la segmentation réseau WAN/DMZ/LAN et un serveur web pour simuler une infrastructure d'entreprise.",
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
      {
        id: 7,
        name: "Sports Competition Management Platform",
        type: "Academic Project",
        description:
          "Developed a web application for managing running competitions. The platform enables participant registration and tracking, race result management, automatic point calculation, real-time individual athlete rankings, and overall team standings.",
      },
      {
        id: 8,
        name: "Enterprise Procurement Management System",
        type: "Academic Project",
        description:
          "A web-based procurement management application for handling supply requests, suppliers, and purchase orders. The system features role-based approval workflows (General Manager, Purchasing Manager, and Storekeeper) along with automatic PDF purchase order generation. Developed as part of a three-member development team.",
      },
      {
        id: 9,
        name: "Setting up a DMZ architecture using GNS3 and Docker",
        type: "Academic Project",
        description:
          "Designed and deployed a secure DMZ architecture using GNS3 and Docker, featuring a firewall, network segmentation, and a web server to simulate an enterprise network infrastructure.",
      },
    ],
  };


// liens & images de chaque projet
export const projectsBase = [
    {
      id: 1,
      stacks: ["Angular", "Spring Boot", "JWT", "Postgres", "Rest API", "JPA"],
      imageUrl: "frais/login.png",
      gitUrl: "",
      moreDetails: {
        images: [
          "frais/login.png",
          "frais/confidential.png",
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
      moreDetails: {
        images: [
          "/immobilier/image01.png",
          "/immobilier/image02.png",
        ]
      },
      imageUrl: "/immobilier/image01.png",
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
      imageUrl: "/dokotera/image01.png",
      moreDetails: {
        images: [
          "/dokotera/image01.png",
          "/dokotera/image02.png",
        ]
      },
      gitUrl: "https://github.com/Jeremie04/Dokotera",
    },
  
    {
      id: 5,
      stacks: ["Spring Boot", "JSP", "Postgres"],
      imageUrl: "dechet/dashboard-déchet.png",
      gitUrl: "",
      moreDetails: {
        images: [
          "dechet/dashboard-déchet.png",
          "dechet/Axe-dechet.png",
          "dechet/Planning-dechet.png",
          "dechet/Notif-dechet.png",
          "dechet/Dialog-dechet.png",
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
      gitUrl: "https://github.com/ArenaGracia/m1p12mean-ranto-arena-front",
      gits: [
        { 
          link: "https://github.com/ArenaGracia/m1p12mean-ranto-arena-front", 
          name: "front" 
        },
        {
          link: "https://github.com/ArenaGracia/m1p12mean-ranto-arena-back",
          name: "back",
        },
      ],
    },
    {
      id: 7,
      stacks: ["SpringBoot", "JSP", "POO", "GenericDAO", "Postgres"],
      imageUrl: "/course/image01.png",
      moreDetails: {
        images: [
          "course/image01.png",
          "course/image02.png",
          "course/image03.png",
          "course/image04.png",
          "course/image05.png",
          "course/image06.png",
        ],
        infoSup: {
          fr: [
            "Classement automatique par équipe/participant",
            "Génération certificat PDF",
          ],
          en: [
            "Automatic ranking per team/participant",
            "Certificate export in PDF",
          ],
        },
      },
      gitUrl: "https://github.com/Jeremie04/Application-suivi-Course",
    },
    {
      id: 8,
      stacks: ["Java", "JSP", "POO", "Postgres"],
      imageUrl: "/commerce/image1.png",
      moreDetails: {
        images: [
          "commerce/image1.png",
          "commerce/image2.png",
          "commerce/image3.png",
          "commerce/image4.png",
          "commerce/image5.png",
          "commerce/image6.png",
        ],
      },
      gitUrl: "",
    },
    {
      id: 9,
      stacks: ["Linux", "Gns3", "Réseau", "DMZ"],
      imageUrl: "/dmz/image01.png",
      moreDetails: {
        images: [
          "dmz/image01.png",
          "dmz/image02.png",
          "dmz/image03.png",
        ],
        infoSup: {
          fr: [
            "Architecture WAN / DMZ / LAN",
            "Déploiement Docker",
            "Configuration du pare-feu",
            "Segmentation réseau",
            "Tests de sécurité"
          ],
          en: [
            "WAN / DMZ / LAN architecture",
            "Docker deployment",
            "Firewall configuration",
            "Network segmentation",
            "Security testing"
          ]
        }
      },
      gitUrl: "",
    },
  ];