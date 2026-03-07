const skills = [
  {
    title: "Frontend",
    techs: [
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Spring Boot", icon: "devicon-spring-plain colored" },
      { name: "Express", icon: "devicon-express-original colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "CodeIgniter", icon: "devicon-codeigniter-plain colored" },
      { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
      { name: "REST API", icon: "devicon-fastapi-plain colored" },
    ],
  },
  {
    title: "Database",
    techs: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Oracle", icon: "devicon-oracle-original colored" },
    ],
  },
  {
    title: "Tools",
    techs: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "GitHub", icon: "devicon-github-original colored" },
    ],
  },
  {
    title: "Machine Learning",
    techs: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Pandas", icon: "devicon-pandas-original colored" },
      { name: "Scikit Learn", icon: "devicon-scikitlearn-plain colored" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Compétences</h2>
          <p className="text-muted-foreground mt-4">
            Technologies et outils que j'utilise pour concevoir et développer
            des applications modernes.
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-center mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-10">
                {category.techs.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center hover:scale-110 transition"
                  >
                    <i className={`${tech.icon} text-5xl`}></i>

                    <span className="text-sm text-muted-foreground mt-2">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
