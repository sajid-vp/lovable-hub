import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function PublicFooter() {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src={logo} 
              alt="Sharjah Education Academy" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground max-w-md">
              Sharjah Education Academy is committed to developing educational leaders 
              and advancing teaching excellence across the emirate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">
                About Us
              </a>
              <a href="#programs" className="hover:text-foreground transition-colors">
                Programs
              </a>
              <a href="#news" className="hover:text-foreground transition-colors">
                News
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/login" className="hover:text-foreground transition-colors">
                Staff Portal
              </Link>
              <a href="#" className="hover:text-foreground transition-colors">
                Help Center
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Use
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sharjah Education Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
