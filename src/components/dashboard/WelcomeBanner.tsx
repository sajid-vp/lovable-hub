import { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, Moon, CloudSun, Search, Bell, LogOut, User, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
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

const announcements = [
  {
    id: 1,
    title: "Registration Open for Spring Programs",
    description: "Enroll now for our upcoming professional development courses starting February 2025.",
    priority: "high",
  },
  {
    id: 2,
    title: "Campus Closure Notice - January 15",
    description: "SEA campus will be closed for scheduled maintenance and upgrades.",
    priority: "medium",
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    description: "SEA welcomes new institutional partners for the 2025 academic year.",
    priority: "normal",
  },
];

export function WelcomeBanner() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    
    // Auto-play
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-white";
      case "medium":
        return "bg-white/70";
      default:
        return "bg-white/50";
    }
  };
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
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
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
      
      {/* Gradient overlay - brand blue to teal */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(40deg, rgba(114, 160, 213, 0.85) 0%, rgba(104, 204, 202, 0.75) 100%)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(114,160,213,0.6)] via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
      
      {/* Main content area */}
      <div className="relative z-10 h-44 sm:h-56 md:h-64 p-4 sm:p-6 md:p-8 flex justify-between">
        {/* Left: Text content */}
        <div className="text-white flex flex-col justify-center">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
              <TimeIcon className="h-4 w-4 sm:h-6 sm:w-6" />
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-white/40 via-white/20 to-transparent rounded-full max-w-[150px] sm:max-w-xs" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1 sm:mb-2 drop-shadow-md">
            {getGreeting()}, {user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-sm sm:text-base opacity-90 font-medium mb-1 sm:mb-2">
            {today}
          </p>
          <p className="text-xs sm:text-sm opacity-80 max-w-lg hidden sm:block">
            Welcome back to Sharjah Education Academy. Here's what's happening in your organization today.
          </p>
        </div>

        {/* Right: Controls */}
        <div className="flex items-start gap-2 sm:gap-2.5 pt-1">
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
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 bg-transparent h-9 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-white placeholder:text-white/60 text-sm"
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery) setSearchOpen(false);
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

      {/* Bottom Announcements Ticker - seamlessly blended */}
      <div className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent" />
        <div className="relative flex items-center gap-3 px-4 sm:px-6 md:px-8 py-2.5">
          {/* Nav arrows */}
          <button
            onClick={scrollPrev}
            className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          
          {/* Carousel */}
          <div className="flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="flex-[0_0_100%] min-w-0">
                  <div className="flex items-center gap-2 text-white">
                    <div className={`w-1.5 h-1.5 rounded-full ${getPriorityColor(announcement.priority)} shrink-0`} />
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {announcement.title}
                    </span>
                    <span className="text-[10px] text-white/60 hidden sm:inline">—</span>
                    <span className="text-[10px] sm:text-xs text-white/60 truncate hidden sm:block">
                      {announcement.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows + dots */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-1 h-1 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-white w-3"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* View All link */}
          <Link
            to="/announcements"
            className="text-[10px] sm:text-xs font-medium text-white/70 hover:text-white transition-colors shrink-0"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  );
}
