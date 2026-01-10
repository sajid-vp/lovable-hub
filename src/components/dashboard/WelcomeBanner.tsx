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
    <div className="relative overflow-hidden rounded-3xl shadow-xl animate-fade-in">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${seaBuilding})`,
        }}
      />
      
      {/* iOS-style gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Main content area */}
      <div className="relative z-10 h-48 sm:h-56 md:h-64 p-5 sm:p-6 md:p-8 flex justify-between">
        {/* Left: Text content */}
        <div className="text-white flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-xl">
              <TimeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1 drop-shadow-sm">
            {getGreeting()}, {user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-sm sm:text-base opacity-90 font-medium mb-1">
            {today}
          </p>
          <p className="text-sm opacity-80 max-w-md hidden sm:block leading-relaxed">
            Welcome back to Sharjah Education Academy
          </p>
        </div>

        {/* Right: Controls */}
        <div className="flex items-start gap-2 pt-1">
          {/* Search */}
          <div className="relative">
            <form onSubmit={handleSearch} className="flex items-center">
              <div
                className={cn(
                  "flex items-center overflow-hidden transition-all duration-300 bg-white/15 backdrop-blur-xl border border-white/20 rounded-full",
                  searchOpen ? "w-40 sm:w-52 pl-4 pr-1" : "w-11"
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
                  className="h-11 w-11 rounded-full shrink-0 text-white hover:bg-white/20 hover:text-white"
                  onClick={() => !searchOpen && setSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
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
            className="h-11 w-11 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 text-white hover:bg-white/25 hover:text-white relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-destructive ring-2 ring-white/20" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-11 w-11 rounded-full p-0 bg-white/15 backdrop-blur-xl border border-white/20 hover:bg-white/25"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="bg-white/30 text-white text-sm">
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="font-semibold">{user?.name}</span>
                  <span className="text-xs text-muted-foreground">{user?.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="rounded-xl">
                <Link to="/profile" className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-xl">
                <Link to="/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-destructive cursor-pointer rounded-xl"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}