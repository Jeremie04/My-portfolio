import { Brain, Code, Layers, Rocket } from "lucide-react";

export const services = {
    fr: [
      {
        title: "Conception & Architecture",
        description:
          "Transformation des idées en solutions web robustes grâce à une architecture logicielle bien pensée.",
        icon: Layers,
        items: [
          "Analyse des besoins",
          "Architecture API",
          "Modélisation base de données",
          "Méthodologie Agile / Scrum",
        ],
      },
      {
        title: "Développement Web",
        description:
          "Création d'applications web modernes, performantes et sécurisées adaptées aux besoins.",
        icon: Code,
        items: [
          "Authentification sécurisée (JWT)",
          "Interfaces modernes & fluides",
          "Back-end robuste",
          "Code propre & testé",
        ],
      },
      {
        title: "Intelligence Artificielle",
        description:
          "Mise en place de modèles intelligents pour exploiter les données et créer des systèmes prédictifs.",
        icon: Brain,
        items: ["Machine Learning", "Analyse de données", "Modèles de prédiction"],
      },
      {
        title: "Déploiement & DevOps",
        description:
          "Mise en production et automatisation pour garantir la stabilité et la disponibilité des applications.",
        icon: Rocket,
        items: [
          "Conteneurisation Docker",
          "Déploiement cloud (Vercel, VPS…)",
          "Scripts CI/CD",
          "Maintenance & sécurisation",
        ],
      },
    ],
  
    en: [
      {
        title: "Design & Architecture",
        description:
          "Turning ideas into robust web solutions through well-designed software architecture.",
        icon: Layers,
        items: [
          "Requirements analysis",
          "API architecture",
          "Database modeling",
          "Agile / Scrum methodology",
        ],
      },
      {
        title: "Web Development",
        description:
          "Building modern, fast, and secure web applications tailored to user needs.",
        icon: Code,
        items: [
          "Secure authentication (JWT)",
          "Modern & smooth interfaces",
          "Robust back-end systems",
          "Clean & tested code",
        ],
      },
      {
        title: "Artificial Intelligence",
        description:
          "Implementing intelligent models to leverage data and build predictive systems.",
        icon: Brain,
        items: [
          "Machine Learning",
          "Data analysis",
          "Predictive modeling",
        ],
      },
      {
        title: "Deployment & DevOps",
        description:
          "Production deployment and automation to ensure application stability and availability.",
        icon: Rocket,
        items: [
          "Docker containerization",
          "Cloud deployment (Vercel, VPS…)",
          "CI/CD pipelines",
          "Maintenance & security",
        ],
      },
    ],
  };