import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Single-page anchors; work from any route ("/#news" is an in-page
  // hash change when already on "/").
  const links = [
    { to: "/#about", label: "About" },
    { to: "/#news", label: "News" },
    { to: "/#experience", label: "Experience" },
    { to: "/#publications", label: "Publications" },
    { to: "/#projects", label: "Projects" },
    { to: "/#academic", label: "Research" },
    { to: "/#skills", label: "Skills" },
    { to: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between h-16">
          <a href="/#about" className="font-display text-xl font-bold text-gradient">
            Wahiduzzaman Suva
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
