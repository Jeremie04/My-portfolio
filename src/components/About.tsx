import TechStack from "./TechStack";

export default function About() {
  return (
    <section className="py-24 px-10 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">À propos</h2>

      <p className="text-muted-foreground">
        Développeur passionné par la conception d’applications web performantes
        et évolutives. J’aime travailler avec les architectures modernes et les
        bonnes pratiques comme Clean Code et l’Agile.
      </p>

      <TechStack />
    </section>
  );
}
