import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Folder, User, Mail, type LucideIcon } from "lucide-react";

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

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a href="#home">
          <h1 className="text-xl font-bold">Ranto Jeremie.dev</h1>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#projects" className="text-sm hover:text-primary">
            Projets
          </a>
          <a href="#about" className="text-sm hover:text-primary">
            À propos
          </a>
          <a href="#contact" className="text-sm hover:text-primary">
            Contact
          </a>

          <Button>CV</Button>
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
              <a href="#home">
                <SheetTitle>Ranto Jeremie.dev</SheetTitle>
              </a>
              <SheetDescription>Navigation principale du site</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-3 mt-10">
              <NavItem href="#projects" icon={Folder}>
                Projets
              </NavItem>

              <NavItem href="#about" icon={User}>
                À propos
              </NavItem>

              <NavItem href="#contact" icon={Mail}>
                Contact
              </NavItem>

              {/* séparateur */}
              <div className="border-t my-4"></div>

              {/* bouton CTA */}
              <a href="#contact">
                <Button className="w-full">CV</Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
