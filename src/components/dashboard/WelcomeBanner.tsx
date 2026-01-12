import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, Moon, CloudSun, Search, Bell, LogOut, User, Settings } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
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
import { cn } from "@/lib/utils";
import seaBuilding from "@/assets/sea-building.jpg";
import seaLogoWhite from "@/assets/sea-logo-white.png";
import { SearchDropdown } from "@/components/search/SearchDropdown";

export function WelcomeBanner() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const getIcon = () => {
    const hour = new Date().getHours();
    if (hour < 12) return Sun;
    if (hour < 17) return CloudSun;
    return Moon;
  };

  const TimeIcon = getIcon();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

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
    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl shadow-[hsl(var(--turquoise))]/20 animate-fade-in">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${seaBuilding})`,
        }}
      />
      
      {/* Gradient overlay - matching announcements ticker */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--light-blue))]/90 to-[hsl(var(--turquoise))]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--light-blue))]/50 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
      
      {/* Main content area */}
      <div className="relative z-10 h-44 sm:h-56 md:h-64 p-4 sm:p-6 md:p-8 flex flex-col">
        {/* Top row: Logo and Controls */}
        <div className="flex items-start justify-between">
          {/* Logo in top-left */}
          <img 
            src={seaLogoWhite} 
            alt="Sharjah Education Academy" 
            className="h-8 sm:h-10 md:h-12 w-auto drop-shadow-lg"
          />
          
          {/* Controls in top-right */}
          <div className="flex items-start gap-2 sm:gap-2.5">
            {/* Search */}
            <div className="relative">
              <form onSubmit={handleSearch} className="flex items-center">
                <div
                  className={cn(
                    "flex items-center overflow-hidden transition-all duration-300 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full",
                    searchOpen ? "w-36 sm:w-52 pl-3 sm:pl-4 pr-1" : "w-10 sm:w-11"
                  )}
                >
                  {searchOpen && (
                    <Input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="border-0 bg-transparent h-9 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-white placeholder:text-white/60 text-sm"
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
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full shrink-0 text-white hover:bg-white/20 hover:text-white"
                    onClick={() => !searchOpen && setSearchOpen(true)}
                  >
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
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
                variant="banner"
                className="right-0 sm:left-0 sm:right-auto"
              />
            </div>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:text-white relative"
            >
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full p-0 bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30"
                >
                  <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="bg-white/30 text-white text-xs sm:text-sm">
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
        </div>
        
        {/* Bottom: Text content */}
        <div className="text-white mt-auto [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%),_0_2px_8px_rgb(0_0_0_/_20%)]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1 sm:mb-2 leading-tight flex items-center gap-2 sm:gap-3 [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%),_0_4px_12px_rgb(0_0_0_/_30%)]">
            <TimeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 drop-shadow-[0_2px_4px_rgb(0_0_0_/_40%)]" />
            {getGreeting()}, {user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-white/95">
            {today}
          </p>
          <p className="text-sm max-w-lg hidden sm:block font-medium leading-relaxed text-white/90">
            Welcome back to Sharjah Education Academy. Here's what's happening in your organization today.
          </p>
        </div>
      </div>
    </div>
  );
}
