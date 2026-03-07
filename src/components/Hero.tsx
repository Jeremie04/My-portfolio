import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Bonjour, je suis Jeremie
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        Développeur Full Stack spécialisé en React, Angular et Spring. Je
        conçois des applications web performantes et maintenables.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#projects">
          <Button>Voir mes projets</Button>
        </a>

        <a href="#contact">
          <Button variant="outline">Me contacter</Button>
        </a>
      </div>
    </section>
  );
}
