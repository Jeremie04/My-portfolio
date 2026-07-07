type Tech = {
  name: string;
  icon?: string;
  url?: string;
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
      {
        name: "Angular",
        icon: "devicon-angularjs-plain colored",
        level: 80,
      },
      {
        name: "React",
        icon: "devicon-react-original colored",
        level: 85,
      },
      {
        name: "HTML",
        icon: "devicon-html5-plain colored",
        level: 95,
      },
      {
        name: "CSS",
        icon: "devicon-css3-plain colored",
        level: 90,
      },
      {
        name: "Bootstrap",
        icon: "devicon-bootstrap-plain colored",
        url: "https://cdn.simpleicons.org/bootstrap",
        level: 85,
      },
      {
        name: "Tailwind",
        icon: "devicon-tailwindcss-plain colored",
        level: 90,
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
        level: 85,
      },
      {
        name: "Javascript",
        icon: "devicon-javascript-plain colored",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        level: 88,
      },
    ],
  },
  {
    title: "Mobile",
    techs: [
      {
        name: "React Native",
        icon: "devicon-react-original colored",
        level: 65,
      },
      {
        name: "Ionic",
        icon: "devicon-ionic-original colored",
        url: "https://cdn.simpleicons.org/ionic",
        level: 55,
      },
    ],
  },
  {
    title: "Backend",
    techs: [
      {
        name: "Spring Boot",
        icon: "devicon-spring-plain colored",
        url: "https://cdn.simpleicons.org/springboot",
        level: 80,
      },
      {
        name: "Express",
        icon: "devicon-express-original colored",
        url: "https://cdn.simpleicons.org/express/black",
        darkmode_url: "https://cdn.simpleicons.org/express/white",
        level: 85,
      },
      {
        name: "Java",
        icon: "devicon-java-plain colored",
        level: 85,
      },
      {
        name: "CodeIgniter",
        icon: "devicon-codeigniter-plain colored",
        url: "https://cdn.simpleicons.org/codeigniter",
        level: 70,
      },
      {
        name: "NodeJS",
        icon: "devicon-nodejs-plain colored",
        url: "https://cdn.simpleicons.org/nodedotjs",
        level: 80,
      },
      {
        name: "REST API",
        icon: "devicon-fastapi-plain colored",
        level: 88,
      },
    ],
  },
  {
    title: "Database",
    techs: [
      {
        name: "MySQL",
        icon: "devicon-mysql-plain colored",
        url: "https://cdn.simpleicons.org/mysql",
        level: 88,
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain colored",
        level: 90,
      },
      {
        name: "MongoDB",
        icon: "devicon-mongodb-plain colored",
        url: "https://cdn.simpleicons.org/mongodb",
        level: 75,
      },
      {
        name: "Oracle",
        icon: "devicon-oracle-original colored",
        level: 65,
      },
      {
        name: "Supabase",
        url: "https://cdn.simpleicons.org/supabase",
        level: 60,
      },
    ],
  },
  {
    title: "Tools",
    techs: [
      {
        name: "Git",
        icon: "devicon-git-plain colored",
        url: "https://cdn.simpleicons.org/git",
        level: 88,
      },
      {
        name: "Docker",
        icon: "devicon-docker-plain colored",
        level: 70,
      },
      {
        name: "Postman",
        icon: "devicon-postman-plain colored",
        level: 85,
      },
      {
        name: "Figma",
        icon: "devicon-figma-plain colored",
        url: "https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb-512x512.png",
        level: 70,
      },
      {
        name: "VS Code",
        icon: "devicon-vscode-plain colored",
        level: 92,
      },
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
      {
        name: "Python",
        icon: "devicon-python-plain colored",
        url: "https://cdn.simpleicons.org/python",
        level: 85,
      },
      {
        name: "Pandas",
        icon: "devicon-pandas-original colored",
        url: "https://cdn.simpleicons.org/pandas",
        level: 70,
      },
      {
        name: "Scikit Learn",
        icon: "devicon-scikitlearn-plain colored",
        url: "https://cdn.simpleicons.org/scikitlearn",
        level: 70,
      },
    ],
  },
];
