import { Brain, Code, Layers, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";
const services = [
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
];
export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="text-muted-foreground mt-4">
            Des solutions complètes pour concevoir, développer et déployer des
            applications web modernes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <CardContent className="p-0">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-center mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-center mb-6">
                    {service.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside text-left">
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
