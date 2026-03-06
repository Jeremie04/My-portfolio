import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">Jeremy.dev</h1>

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

          <SheetContent side="right">
            <nav className="flex flex-col gap-6 mt-10">
              <a href="#projects">Projets</a>
              <a href="#about">À propos</a>
              <a href="#contact">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
