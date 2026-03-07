import TechStack from "./TechStack";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen text-center max-w-3xl mx-auto px-5"
    >
      <div className="max-w-5xl mx-auto items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">À propos</h2>

          <p className="text-muted-foreground mb-6">
            Développeur Full-Stack spécialisé en React, Angular et Spring Boot.
            Actuellement en cours d’obtention de mon Master, je développe des
            applications web modernes en mettant l’accent sur la qualité, la
            performance et la maintenabilité.
          </p>

          <p className="text-muted-foreground mb-6">
            Je conçois des applications complètes en couvrant l’ensemble du
            cycle de développement : conception, développement frontend, backend
            et déploiement.
          </p>

          <p className="text-muted-foreground mb-6">
            Curieux et passionné par l’ingénierie logicielle, j’accorde une
            grande importance à la qualité du code, à l’architecture des
            applications et aux bonnes pratiques comme le Clean Code, les tests
            automatisés et les méthodologies Agile.
          </p>

          <p className="text-muted-foreground mb-6">
            En début de carrière, je cherche continuellement à approfondir mes
            compétences et à relever de nouveaux défis techniques en contribuant
            à des projets concrets et utiles pour les utilisateurs.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center mt-6">
            <div>
              <p className="text-2xl font-bold">Bacc +5</p>
              <p className="text-sm text-muted-foreground">Education</p>
            </div>

            <div>
              <p className="text-2xl font-bold">3+</p>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>

            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Passion</p>
            </div>
          </div>
        </div>
      </div>

      <TechStack />
    </section>
  );
}
