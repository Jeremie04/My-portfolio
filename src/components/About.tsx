import Parcours from "./Parcours";

export default function About() {
  return (
    <section id="about" className="py-24 text-center max-w-4xl mx-auto px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        <div className="order-1">
          <h2 className="text-3xl font-bold mb-6">À propos</h2>

          <p className="text-muted-foreground text-justify leading-relaxed tracking-normal max-w-2xl mb-5">
            Développeur Full-Stack spécialisé en React, Angular et Spring Boot,
            actuellement en cours d’obtention de mon Master. Je conçois des
            applications web modernes en mettant l’accent sur la performance, la
            qualité du code et la maintenabilité.
          </p>

          <p className="text-muted-foreground text-justify leading-relaxed tracking-normal max-w-2xl mb-5">
            J’interviens sur l’ensemble du cycle de développement : conception,
            développement frontend et backend, intégration d’API et déploiement
            d’applications. Mon objectif est de construire des solutions
            fiables, performantes et centrées sur l’utilisateur.
          </p>

          <p className="text-muted-foreground text-justify leading-relaxed tracking-normal max-w-2xl">
            Passionné par l’ingénierie logicielle, je m’intéresse
            particulièrement à l’architecture des applications, au Clean Code et
            aux bonnes pratiques de développement. En début de carrière, je
            cherche continuellement à progresser et à relever de nouveaux défis
            techniques.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center mt-6">
            <div>
              <p className="text-2xl font-bold">Bacc +5</p>
              <p className="text-sm text-muted-foreground">Education</p>
            </div>

            <div>
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>

            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Passion</p>
            </div>
          </div>
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
