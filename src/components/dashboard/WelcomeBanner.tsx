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
    <div className="relative overflow-hidden rounded-2xl gradient-hero p-6 md:p-8 text-white animate-fade-in">
      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <span className="text-sm font-medium opacity-90">Welcome back</span>
        </div>
        <div className="flex items-center gap-3">
          <TimeIcon className="h-8 w-8 opacity-80 animate-float" />
          <h1 className="text-2xl md:text-3xl font-bold">
            {getGreeting()}, {user?.name?.split(" ")[0]}!
          </h1>
        </div>
        <p className="text-sm md:text-base opacity-90 mt-2 max-w-md">
          {today}
        </p>
        <p className="text-sm opacity-75 mt-1">
          Here's what's happening in your organization today.
        </p>
      </div>
    </div>
  );
}
