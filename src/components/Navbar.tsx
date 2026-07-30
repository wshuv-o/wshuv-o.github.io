import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between h-14">
          <a href="/#about" className="font-display text-xl font-bold text-gradient">
            Wahiduzzaman Suva
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
