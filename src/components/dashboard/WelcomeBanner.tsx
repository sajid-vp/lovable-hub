import { Sun, Moon, CloudSun } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import productivityImage from "@/assets/productivity-banner.png";

export function WelcomeBanner() {
  const { user } = useAuthContext();
  
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

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg animate-fade-in">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[hsl(var(--teal))] via-[hsl(var(--turquoise))] to-[hsl(var(--light-blue))]" />
      
      <div className="p-6 md:p-8 flex items-center justify-between gap-6">
        <div className="flex-1">
          {/* Header with gradient line */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-[hsl(var(--teal))]/20 to-[hsl(var(--turquoise))]/10 rounded-xl border border-[hsl(var(--teal))]/20">
              <TimeIcon className="h-5 w-5 text-[hsl(var(--teal))]" />
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-[hsl(var(--teal))]/50 via-[hsl(var(--turquoise))]/20 to-transparent rounded-full" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-1">
            {getGreeting()}, {user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-sm text-muted-foreground font-medium mb-3">
            {today}
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-md">
            Here's what's happening in your organization today.
          </p>
        </div>
        
        {/* Productivity image */}
        <div className="hidden md:block relative">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border border-border/30 shadow-lg">
            <img 
              src={productivityImage} 
              alt="Productivity and connectivity" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--teal))]/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
