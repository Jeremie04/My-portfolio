import {
    Lightbulb,
    GitBranch,
    MessageCircle,
    Database,
    Search,
    Zap,
  } from "lucide-react";
  import { Users, Clock, BookOpen, Brain, FileText } from "lucide-react";

  export const softskills = {
    fr: [
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
    ],
  
    en: [
      {
        label: "Agile / Scrum methodology",
        icon: GitBranch,
      },
      {
        label: "Clean Code & best practices",
        icon: Lightbulb,
      },
      {
        label: "Effective technical communication",
        icon: MessageCircle,
      },
      {
        label: "Database modeling",
        icon: Database,
      },
      {
        label: "Business requirements analysis",
        icon: Search,
      },
      {
        label: "Fast adaptability",
        icon: Zap,
      },
    ],
  };

  export const softskills2 = {
    fr: [
      { label: "Esprit d’équipe / collaboration", icon: Users },
      { label: "Résolution de problèmes", icon: Lightbulb },
      { label: "Curiosité technologique", icon: Search },
      { label: "Apprentissage continu", icon: BookOpen },
      { label: "Gestion du temps", icon: Clock },
      { label: "Esprit critique", icon: Brain },
      { label: "Documentation claire", icon: FileText },
    ],
  
    en: [
      { label: "Team spirit / collaboration", icon: Users },
      { label: "Problem solving", icon: Lightbulb },
      { label: "Technical curiosity", icon: Search },
      { label: "Continuous learning", icon: BookOpen },
      { label: "Time management", icon: Clock },
      { label: "Critical thinking", icon: Brain },
      { label: "Clear documentation", icon: FileText },
    ],
  };