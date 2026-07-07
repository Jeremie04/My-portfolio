type Tech = {
  name: string;
  url: string;
  darkmode_url?: string;
  level?: number; // niveau de maîtrise en % (à ajuster)
};

type Skill = {
  title: string;
  techs: Tech[];
};

export const skills: Skill[] = [
  {
    title: "Frontend",
    techs: [
      { name: "Angular", url: "/icons/angular.svg", level: 80 },
      { name: "React", url: "/icons/react.svg", level: 85 },
      { name: "HTML", url: "/icons/html5.svg", level: 95 },
      { name: "CSS", url: "/icons/css3.svg", level: 90 },
      { name: "Bootstrap", url: "/icons/bootstrap.svg", level: 85 },
      { name: "Tailwind", url: "/icons/tailwind.svg", level: 90 },
      { name: "TypeScript", url: "/icons/typescript.svg", level: 85 },
      { name: "Javascript", url: "/icons/javascript.svg", level: 88 },
    ],
  },
  {
    title: "Mobile",
    techs: [
      { name: "React Native", url: "/icons/react.svg", level: 65 },
      { name: "Ionic", url: "/icons/ionic.svg", level: 55 },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Spring Boot", url: "/icons/spring.svg", level: 80 },
      {
        name: "Express",
        url: "https://cdn.simpleicons.org/express/black",
        darkmode_url: "https://cdn.simpleicons.org/express/white",
        level: 85,
      },
      { name: "Java", url: "/icons/java.svg", level: 85 },
      { name: "CodeIgniter", url: "/icons/codeigniter.svg", level: 70 },
      { name: "NodeJS", url: "/icons/nodejs.svg", level: 80 },
      { name: "REST API", url: "/icons/fastapi.svg", level: 88 },
    ],
  },
  {
    title: "Database",
    techs: [
      { name: "MySQL", url: "/icons/mysql.svg", level: 88 },
      { name: "PostgreSQL", url: "/icons/postgresql.svg", level: 90 },
      { name: "MongoDB", url: "/icons/mongodb.svg", level: 75 },
      { name: "Oracle", url: "/icons/oracle.svg", level: 65 },
      { name: "Supabase", url: "/icons/supabase.svg", level: 60 },
    ],
  },
  {
    title: "Tools",
    techs: [
      { name: "Git", url: "/icons/git.svg", level: 88 },
      { name: "Docker", url: "/icons/docker.svg", level: 70 },
      { name: "Postman", url: "/icons/postman.svg", level: 85 },
      { name: "Figma", url: "/icons/figma.svg", level: 70 },
      { name: "VS Code", url: "/icons/vscode.svg", level: 92 },
      {
        name: "GitHub",
        url: "https://cdn.simpleicons.org/github",
        darkmode_url: "https://cdn.simpleicons.org/github/white",
        level: 88,
      },
    ],
  },
  {
    title: "Machine Learning",
    techs: [
      { name: "Python", url: "/icons/python.svg", level: 85 },
      { name: "Pandas", url: "/icons/pandas.svg", level: 70 },
      { name: "Scikit Learn", url: "/icons/scikitlearn.svg", level: 70 },
    ],
  },
];
