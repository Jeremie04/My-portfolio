import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-250 m-auto px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-muted-foreground mt-4">
            N'hésitez pas à me contacter pour discuter de vos projets ou
            collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 p-6">
            <h3 className="text-xl font-semibold">Mes coordonnées</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">+261 33 32 033 73</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">
                  rantojeremie@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">
                  Antananarivo, Madagascar
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-3">
                Réseaux sociaux
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Jeremie04"
                  className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jeremie-ravoninahitra-4787362b2/"
                  className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://www.facebook.com/ravran.jeremie/"
                  className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envoyer un message</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <Input placeholder="Votre nom" />

              <Input type="email" placeholder="Votre email" />

              <Input placeholder="Objet" />

              <Textarea placeholder="Votre message..." className="h-40" />

              <Button className="w-full">Envoyer</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
