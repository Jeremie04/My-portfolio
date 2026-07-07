import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  User,
  Mail,
  type LucideIcon,
  Briefcase,
  Brain,
  FolderGit2,
  Download,
} from "lucide-react";
import { useEffect, useState } from "react";
import EmailDialog from "./EmailDialog";
import { ThemeSwitch } from "./theme-switch";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

type NavItemProps = {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
};

export function NavItem({ href, icon: Icon, children }: NavItemProps) {
  return (
    <a
      href={href}
      className="
          group flex items-center gap-3
          px-4 py-3 rounded-lg text-lg font-medium
          transition-all duration-200
          hover:bg-muted hover:translate-x-1
        "
    >
      <Icon className="w-5 h-5 text-purple-500 transition-transform duration-200 group-hover:scale-110" />

      <span className="transition-colors group-hover:text-purple-500">
        {children}
      </span>
    </a>
  );
}

const navLinks = [
  { id: "about", label: "navbar.about", icon: User },
  { id: "services", label: "navbar.service", icon: Briefcase },
  { id: "skills", label: "navbar.skill", icon: Brain },
  { id: "projects", label: "navbar.project", icon: FolderGit2 },
  { id: "contact", label: "navbar.contact", icon: Mail },
];

export default function Navbar() {
  // pour les changement des link selon la section
  const [activeSection, setActiveSection] = useState("about");
  const [openEmailDialog, setOpenEmailDialog] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const observed = new WeakSet<Element>();
    let mo: MutationObserver;

    const observeSections = () => {
      document.querySelectorAll("section").forEach((section) => {
        if (!observed.has(section)) {
          observed.add(section);
          observer.observe(section);
        }
      });
      // Les sections sous la ligne de flottaison sont chargées en lazy :
      // une fois toutes présentes, on arrête d'écouter le DOM.
      if (navLinks.every((l) => document.getElementById(l.id))) {
        mo?.disconnect();
      }
    };

    observeSections();
    mo = new MutationObserver(observeSections);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/70 dark:bg-black/70 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <a href="#home">
            <h1 className="text-xl font-bold">Ranto Jeremie.dev</h1>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link text-sm hover:text-primary ${
                  activeSection === link.id
                    ? "active-link text-primary font-semibold"
                    : ""
                }`}
              >
                {t(link.label)}
              </a>
            ))}
            <ThemeSwitch />
            <LanguageSwitcher />
            <Button onClick={() => setOpenEmailDialog(true)}>
              <Download data-icon="inline-start" /> CV
            </Button>
          </nav>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Ranto Jeremie.dev</SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-3">
                {/* Les liens */}
                {navLinks.map((link) => (
                  <NavItem key={link.id} href={`#${link.id}`} icon={link.icon}>
                    {t(link.label)}
                  </NavItem>
                ))}
                {/* séparateur */}
                <div className="border-t my-2"></div>

                <div className="flex items-center p-2 gap-2 w-full">
                  <ThemeSwitch />

                  <LanguageSwitcher />

                  <a href="#contact" className="flex-1">
                    <Button
                      className="w-full"
                      onClick={() => setOpenEmailDialog(true)}
                    >
                      <Download data-icon="inline-start" />
                      CV
                    </Button>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      {/* Email Dialog */}
      <EmailDialog open={openEmailDialog} setOpen={setOpenEmailDialog} />
    </>
  );
}
