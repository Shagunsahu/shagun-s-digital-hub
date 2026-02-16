import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-background/50 sticky top-0 z-50 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-sm font-semibold text-foreground hover:opacity-70 transition-opacity">
          shagun.dev
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/about"
            className={`text-sm transition-colors hover:text-foreground ${
              location.pathname === "/about" ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
