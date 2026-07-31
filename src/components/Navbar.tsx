import { ThemeToggle } from "./ThemeToggle";

// No navigation bar — just the theme toggle, aligned with the content
// container: same top offset as the hero photo and the same edge
// spacing on the right that the photo has on the left.
const Navbar = () => {
  return (
    <div className="absolute top-12 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-4 max-w-5xl flex justify-end">
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
