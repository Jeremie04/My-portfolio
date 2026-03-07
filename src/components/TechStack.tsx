import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";

import {
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { Services } from "./Services";

const techCategories = [
  {
    title: "Frontend",
    tech: [
      { icon: <FaReact color="#61DAFB" />, name: "React" },
      { icon: <FaAngular color="#DD0031" />, name: "Angular" },
      { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
      { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    ],
  },
  {
    title: "Backend",
    tech: [
      { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
      { icon: <FaJava color="#EA2D2E" />, name: "Java" },
      { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    ],
  },
  {
    title: "Database",
    tech: [
      { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
      { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
      { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-24">
      <Services />
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Technologies</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
      </div>

      <div className="space-y-16">
        {techCategories.map((category, i) => (
          <section key={i} className="space-y-10">
            {/* Titre de la catégorie */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold tracking-tight">
                {category.title}
              </h3>
              <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>

            {/* Grille des technologies */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 max-w-5xl mx-auto">
              {category.tech.map((tech, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center justify-center text-center p-6 h-32 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <CardContent className="flex flex-col items-center gap-3 p-0">
                    <div className="text-4xl text-primary">{tech.icon}</div>

                    <CardTitle className="text-sm font-medium">
                      {tech.name}
                    </CardTitle>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
