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
  };
};

const projects: Project[] = [
  {
    name: "Application de gestion frais d’administration",
    type: "Stage",
    description:
      "Application permettant de gérer les frais d’administration avec authentification JWT et gestion de données via Postgres.",
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
      ],
      infoSup: [
        "Envoi d'email automatisé intégré",
        "Sécurisé avec JWT",
        "Export données en CSV et PDF",
        "Dashboard interactif en temps réel",
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
    name: "Generic DAO en java",
    type: "Projet Personnel",
    description:
      "Implémentation d'un modèle générique DAO en Java pour faciliter la persistance des données.",
    stacks: ["Java", "POO"],
    imageUrl: "",
    gitUrl: "https://github.com/Jeremie04/GenericDAO",
  },
  {
    name: "Application de Suggestion de médicament",
    type: "Projet Personnel",
    description:
      "Application suggérant des médicaments selon les symptômes avec le minimum de budget possible.",
    stacks: ["Spring", "JSP", "Postgres"],
    imageUrl: "",
    gitUrl: "https://github.com/Jeremie04/Dokotera",
  },
  {
    name: "Application de Gestion de Déchet",
    type: "Projet Académique",
    description: "Application de gestion pour notification de déchets.",
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
        "UI intuitive",
        "Export données en CSV et PDF",
      ],
    },
  },
  {
    name: "Gestion garage",
    type: "Projet Académique",
    description:
      "Application de gestion d’un garage automobile avec authentification JWT et base MongoDB.",
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

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project: Project, i: number) => (
          <ProjectItem
            setSelectedProject={setSelectedProject}
            setOpen={setOpen}
            key={i}
            item={project}
          />
        ))}
      </div>
      <ProjectDialog project={selectedProject} open={open} setOpen={setOpen} />
    </section>
  );
}
