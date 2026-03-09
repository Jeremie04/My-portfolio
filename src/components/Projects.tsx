import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { ProjectDialog } from "./ProjectDialog";

type Project = {
  name: string;
  type: string;
  description: string;
  stacks: string[];
  imageUrl?: string;
  gitUrl?: string;
  moreDetails?: {
    images?: string[];
    infoSup?: string[];
    gits?: { link: string; name: string }[];
  };
};

const projects: Project[] = [
  {
    name: "Application de gestion frais d’administration",
    type: "Stage",
    description:
      "Application web permettant de gérer et automatiser le calcul des frais d’administration minière, avec génération automatique de factures et suivi en temps réel des opérations financières.",
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
      infoSup: [
        "Génération automatique de factures",
        "Envoi d'email automatisé",
        "Dashboard interactif en temps réel",
        "Export données en CSV et PDF",
        "Sécurisation des accès avec JWT",
      ],
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
    name: "Application de prédiction immobilier",
    type: "Projet Académique",
    description:
      "Application de prédiction des prix immobiliers utilisant Machine Learning et Web Scraping.",
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
    name: "Generic DAO Framework en Java",
    type: "Projet Personnel",
    description:
      "Développement d’une architecture DAO générique en Java permettant de standardiser les opérations CRUD, améliorer la maintenabilité du code et faciliter l’intégration avec différentes entités métier.",
    stacks: ["Java", "POO"],
    imageUrl: "",
    gitUrl: "https://github.com/Jeremie04/GenericDAO",
  },
  {
    name: "Système de suggestion de traitements médicaux",
    type: "Projet Personnel",
    description:
      "Application intégrant un système de recommandation basé sur les symptômes, proposant des maladies probables et des médicaments optimisés selon un budget défini.",
    stacks: ["Spring", "JSP", "Postgres"],
    imageUrl: "",
    gitUrl: "https://github.com/Jeremie04/Dokotera",
  },
  {
    name: "Application de Gestion de Déchet",
    type: "Projet Académique",
    description:
      "Application permettant de planifier et suivre les collectes de déchets en temps réel, facilitant la communication entre les agents de collecte et les responsables de gestion.",
    stacks: ["Spring", "JSP", "Postgres"],
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
      infoSup: [
        "Notifications instantanées",
        "Interface utilisateur intuitive",
        "Suivi des collectes en temps réel",
        "Export données en CSV et PDF",
      ],
    },
  },
  {
    name: "Système de gestion de garage automobile",
    type: "Projet Académique",
    description:
      "Application permettant de gérer les réservations, le suivi des réparations et la gestion des prestations automobiles, afin d’optimiser l’organisation et la relation client d’un garage.",
    stacks: ["Angular", "ExpressJS", "MongoDB", "JWT"],
    imageUrl: "",
    gitUrl: "",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <section id="projects" className="py-24 px-10">
      <h2 className="text-3xl font-bold text-center mb-16">Mes projets</h2>

      <div className="max-w-6xl mx-auto md:px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project: Project, i: number) => (
            <ProjectItem
              setSelectedProject={setSelectedProject}
              setOpen={setOpen}
              key={i}
              item={project}
            />
          ))}
        </div>
      </div>
      <ProjectDialog project={selectedProject} open={open} setOpen={setOpen} />
    </section>
  );
}
