import { Sparkles, Sun, Moon, CloudSun } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";

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
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(var(--teal))] via-[hsl(var(--turquoise))] to-[hsl(var(--light-blue))] p-6 md:p-8 text-white animate-fade-in shadow-xl">
      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[hsl(var(--gold))]/20 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-[hsl(var(--coral))]/15 rounded-full animate-float" />
      <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-[hsl(var(--lavender))]/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-12 w-3 h-3 bg-white rounded-full" />
        <div className="absolute top-8 right-24 w-2 h-2 bg-white rounded-full" />
        <div className="absolute bottom-8 right-16 w-2 h-2 bg-white rounded-full" />
        <div className="absolute top-12 right-32 w-1.5 h-1.5 bg-white rounded-full" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          <span className="text-sm font-medium opacity-90">Welcome back</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[hsl(var(--gold))]/30 rounded-xl backdrop-blur-sm">
            <TimeIcon className="h-7 w-7 animate-float" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            {getGreeting()}, {user?.name?.split(" ")[0]}!
          </h1>
        </div>
        <p className="text-base md:text-lg opacity-95 mt-3 font-medium">
          {today}
        </p>
        <p className="text-sm opacity-80 mt-1 max-w-lg">
          Here's what's happening in your organization today. Stay connected and informed.
        </p>
      </div>
    </div>
  );
}
