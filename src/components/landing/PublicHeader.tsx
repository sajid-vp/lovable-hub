import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/contexts/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logo from "@/assets/logo.png";

export function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthContext();

  const handleStaffLogin = async () => {
    setIsLoading(true);
    // Simulate Microsoft SSO - in production this would trigger Azure AD OAuth
    await new Promise((resolve) => setTimeout(resolve, 800));
    login("employee@sea.ac.ae", "password");
    setIsLoading(false);
    setLoginDialogOpen(false);
  };

  const handleOthersLogin = () => {
    // For non-staff users - could redirect to a registration page or show info
    window.open("https://sea.ac.ae", "_blank");
    setLoginDialogOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Sharjah Education Academy" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#programs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Programs
              </a>
              <a href="#news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                News
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>

            {/* Login Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button onClick={() => setLoginDialogOpen(true)}>
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col gap-4">
                <a 
                  href="#about" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#programs" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Programs
                </a>
                <a 
                  href="#news" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News
                </a>
                <a 
                  href="#contact" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Button onClick={() => { setMobileMenuOpen(false); setLoginDialogOpen(true); }} className="w-full mt-2">
                  Login
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Login Dialog */}
      <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Welcome</DialogTitle>
            <DialogDescription className="text-center">
              Please select your login type
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            {/* Staff Login */}
            <button
              onClick={handleStaffLogin}
              disabled={isLoading}
              className="flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-left group"
            >
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <svg className="h-6 w-6 text-primary-foreground" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="9" height="9" fill="currentColor" fillOpacity="0.9"/>
                  <rect x="11" y="1" width="9" height="9" fill="currentColor" fillOpacity="0.7"/>
                  <rect x="1" y="11" width="9" height="9" fill="currentColor" fillOpacity="0.7"/>
                  <rect x="11" y="11" width="9" height="9" fill="currentColor" fillOpacity="0.5"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold group-hover:text-primary transition-colors">
                  {isLoading ? "Signing in..." : "Staff"}
                </div>
                <div className="text-sm text-muted-foreground">
                  SEA employees login with Microsoft
                </div>
              </div>
              {isLoading && (
                <span className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              )}
            </button>

            {/* Others Login */}
            <button
              onClick={handleOthersLogin}
              className="flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-left group"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <div className="font-semibold group-hover:text-primary transition-colors">
                  Others
                </div>
                <div className="text-sm text-muted-foreground">
                  External users & partners
                </div>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
