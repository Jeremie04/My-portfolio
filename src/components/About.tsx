import Parcours from "./Parcours";

export default function About() {
  return (
    <section id="about" className="py-24 text-center max-w-4xl mx-auto px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        <div className="order-1">
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
        </div>

        {/* PARCOURS */}
        <div className="order-2 space-y-6 h-100">
          <h2 className="text-2xl font-bold mb-6">Parcours</h2>
          <Parcours />
        </div>
      </div>
    </section>
  );
}
