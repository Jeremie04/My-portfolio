import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-6">Me contacter</h2>

      <p className="text-muted-foreground mb-8">
        Intéressé par une collaboration ?
      </p>

      <Button>Envoyer un message</Button>
    </section>
  );
}
