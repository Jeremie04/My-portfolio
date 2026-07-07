import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const navLinks = [
  { id: "about", label: "navbar.about" },
  { id: "services", label: "navbar.service" },
  { id: "skills", label: "navbar.skill" },
  { id: "projects", label: "navbar.project" },
  { id: "contact", label: "navbar.contact" },
];

export default function Footer() {
  const { t } = useTranslation();
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
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-sm font-semibold mb-4">
              {t("footer.navigation")}
            </h4>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              {t("footer.contact")}
            </h4>

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

              <a
                href="https://wa.me/261333203373"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              {t("footer.message")}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ranto Jeremie — {t("footer.right")}
        </div>
      </div>
    </footer>
  );
}
