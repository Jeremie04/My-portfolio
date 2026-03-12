import { Marquee } from "@/components/ui/marquee/marquee-animation";
import { Card } from "@/components/ui/card";
import {
  Lightbulb,
  GitBranch,
  MessageCircle,
  Database,
  Search,
  Zap,
} from "lucide-react";
import { Users, Clock, BookOpen, Brain, FileText } from "lucide-react";

const softskills = [
  {
    label: "Méthodologie Agile / Scrum",
    icon: GitBranch,
  },
  {
    label: "Clean Code & bonnes pratiques",
    icon: Lightbulb,
  },
  {
    label: "Communication technique efficace",
    icon: MessageCircle,
  },
  {
    label: "Modélisation base de données",
    icon: Database,
  },
  {
    label: "Analyse des besoins métier",
    icon: Search,
  },
  {
    label: "Adaptation rapide",
    icon: Zap,
  },
];

const softskills2 = [
  { label: "Esprit d’équipe / collaboration", icon: Users },
  { label: "Résolution de problèmes", icon: Lightbulb },
  { label: "Curiosité technologique", icon: Search },
  { label: "Apprentissage continu", icon: BookOpen },
  { label: "Gestion du temps", icon: Clock },
  { label: "Esprit critique", icon: Brain },
  { label: "Documentation claire", icon: FileText },
];

export default function SoftSkills() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Compétences professionnelles
      </h2>

      {/* Container */}
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        {/* gradient gauche */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full 
          w-12 sm:w-20 md:w-32 lg:w-40 
          bg-gradient-to-r from-background to-transparent z-10"
        />

        {/* gradient droite */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full 
          w-12 sm:w-20 md:w-32 lg:w-40 
          bg-gradient-to-l from-background to-transparent z-10"
        />

        <Marquee pauseOnHover className="[--duration:27s]">
          {softskills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <Card
                key={index}
                className="mx-4 flex items-center gap-3 px-6 py-4 bg-muted/40 border hover:scale-105 transition"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium whitespace-nowrap">
                  {skill.label}
                </span>
              </Card>
            );
          })}
        </Marquee>

        {/* ligne 2 (inverse) */}
        <Marquee reverse pauseOnHover className="[--duration:27s]">
          {softskills2.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <Card
                key={`reverse-${index}`}
                className="mx-4 flex items-center gap-3 px-6 py-4 bg-muted/40 border hover:scale-105 transition"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium whitespace-nowrap">
                  {skill.label}
                </span>
              </Card>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
