import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

export function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthContext();

  const handleStaffLogin = async () => {
    setIsLoading(true);
    // Simulate Microsoft SSO - in production this would trigger Azure AD OAuth
    await new Promise((resolve) => setTimeout(resolve, 800));
    login("employee@sea.ac.ae", "password");
    setIsLoading(false);
    setShowLoginOptions(false);
  };

  const handleOthersLogin = () => {
    // For non-staff users - could redirect to a registration page or show info
    window.open("https://sea.ac.ae", "_blank");
    setShowLoginOptions(false);
  };

  const handleBack = () => {
    setShowLoginOptions(false);
  };

  return (
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

          {/* Desktop Login Area */}
          <div className="hidden md:flex items-center">
            {!showLoginOptions ? (
              <Button onClick={() => setShowLoginOptions(true)}>
                Login
              </Button>
            ) : (
              <div className="flex items-center gap-2 animate-fade-in">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleBack}
                  className="h-9 w-9"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleStaffLogin}
                  disabled={isLoading}
                  className="gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
                        <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
                        <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
                        <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
                      </svg>
                      Staff
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleOthersLogin}
                  className="gap-2"
                >
                  <Users className="h-4 w-4" />
                  Others
                </Button>
              </div>
            )}
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
              
              {/* Mobile Login Options */}
              <div className="pt-4 border-t mt-2">
                {!showLoginOptions ? (
                  <Button onClick={() => setShowLoginOptions(true)} className="w-full">
                    Login
                  </Button>
                ) : (
                  <div className="space-y-2 animate-fade-in">
                    <div className="flex items-center gap-2 mb-3">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={handleBack}
                        className="h-8 w-8"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-medium">Select login type</span>
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={handleStaffLogin}
                      disabled={isLoading}
                      className="w-full gap-2 justify-start"
                    >
                      {isLoading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        <>
                          <svg className="h-4 w-4" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
                            <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
                            <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
                            <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
                          </svg>
                          Staff (Microsoft)
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={handleOthersLogin}
                      className="w-full gap-2 justify-start"
                    >
                      <Users className="h-4 w-4" />
                      Others (External)
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
