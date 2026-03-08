import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { id: "about", label: "À propos" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-semibold">
              RAVONINAHITRA Ranto Ny Aina Jeremie
            </h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Développeur Full-Stack spécialisé en React, Angular et Spring
              Boot. Je conçois des applications web modernes, performantes et
              maintenables.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>

            <div className="flex items-center gap-4">
              <a
                href="mailto:rantojeremie@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://github.com/Jeremie04"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/jeremie-ravoninahitra-4787362b2/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Disponible pour des opportunités et collaborations.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ranto Jeremie — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
