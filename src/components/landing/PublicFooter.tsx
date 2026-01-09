import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function PublicFooter() {
  return (
    <footer className="border-t bg-card py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Sharjah Education Academy" 
              className="h-8 w-auto"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              About SEA
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Programs
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sharjah Education Academy
          </p>
        </div>
      </div>
    </footer>
  );
}
