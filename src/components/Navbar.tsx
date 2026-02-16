import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-[700px] mx-auto">
      <Link to="/" className="text-sm font-semibold text-foreground hover:opacity-70 transition-opacity">
        shagun.dev
      </Link>
      <div className="flex items-center gap-4">
        <Link
          to="/about"
          className={`text-sm transition-opacity hover:opacity-70 ${
            location.pathname === "/about" ? "text-foreground font-medium" : "text-muted-foreground"
          }`}
        >
          About
        </Link>
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
