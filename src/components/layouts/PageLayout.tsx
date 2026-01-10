import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Bell, LogOut, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthContext } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import { SearchDropdown } from "@/components/search/SearchDropdown";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  backTo?: string;
}

export function PageLayout({ title, children, backTo = "/" }: PageLayoutProps) {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchOpen(false);
      setShowDropdown(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowDropdown(value.length >= 2);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Floating controls - top right */}
      <div className="fixed top-3 sm:top-4 right-3 sm:right-4 z-50 flex items-center gap-1.5 sm:gap-2">
        {/* Search */}
        <div className="relative">
          <form onSubmit={handleSearch} className="flex items-center">
            <div
              className={cn(
                "flex items-center overflow-hidden transition-all duration-300 glass-card rounded-full",
                searchOpen ? "w-48 sm:w-64 pl-3 sm:pl-4 pr-1" : "w-9 sm:w-10"
              )}
            >
              {searchOpen && (
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="border-0 bg-transparent h-8 focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  autoFocus
                  onBlur={() => {
                    setTimeout(() => {
                      if (!searchQuery) setSearchOpen(false);
                    }, 200);
                  }}
                />
              )}
              <Button
                type={searchOpen ? "submit" : "button"}
                variant="ghost"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full shrink-0"
                onClick={() => !searchOpen && setSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
          
          {/* Search Dropdown */}
          <SearchDropdown
            query={searchQuery}
            isOpen={showDropdown && searchOpen}
            onClose={() => setShowDropdown(false)}
            onNavigate={() => {
              setSearchQuery("");
              setSearchOpen(false);
            }}
            className="right-0"
          />
        </div>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-full glass-card relative"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full p-0 glass-card"
            >
              <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback className="gradient-primary text-primary-foreground text-xs sm:text-sm">
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-popover">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-medium">{user?.name}</span>
                <span className="text-xs text-muted-foreground">{user?.email}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile" className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings" className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-destructive cursor-pointer"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="container max-w-5xl py-8 px-4">
        {/* Back button and title */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild className="shrink-0">
            <Link to={backTo}>
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        
        {/* Page content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
