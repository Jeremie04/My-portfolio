import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6">
      <h1 className="text-5xl font-bold mb-6">Bonjour, je suis Jeremy</h1>

      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        Développeur Full Stack spécialisé en React, Angular et Spring. Je
        conçois des applications web performantes et maintenables.
      </p>

      <div className="flex gap-4">
        <Button>Voir mes projets</Button>
        <Button variant="outline">Me contacter</Button>
      </div>
    </section>
  );
}
