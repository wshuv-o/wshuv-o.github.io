import { ThemeToggle } from "./ThemeToggle";

// No navigation bar — just a floating theme toggle in the corner.
const Navbar = () => {
  return (
    <div className="fixed top-3 right-4 z-50">
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
