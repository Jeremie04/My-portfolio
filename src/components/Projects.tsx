import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { ProjectDialog } from "./ProjectDialog";
import { useTranslation } from "react-i18next";
import i18n from "@/config/i18n";
import { projectsBase, projectsText } from "@/data/projects";
import type { Lang } from "@/data/types";
import { Title } from "./ui/Title";

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

export default function Projects() {
  const lang = i18n.language.split("-")[0] as Lang;
  const { t } = useTranslation();

  const projects = projectsBase.map((p) => ({
    ...p,
    ...projectsText[lang].find((t) => t.id === p.id),
  }));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <section id="projects" className="py-24 px-10">
      <Title title={t("projects.title")} />

      <div className="max-w-6xl mx-auto md:px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i: number) => (
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
