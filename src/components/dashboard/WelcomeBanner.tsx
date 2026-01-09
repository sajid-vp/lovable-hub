import { Sparkles } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";

export function WelcomeBanner() {
  const { user } = useAuthContext();
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="relative overflow-hidden rounded-2xl gradient-hero p-6 md:p-8 text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5" />
          <span className="text-sm font-medium opacity-90">Welcome back</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">
          {getGreeting()}, {user?.name?.split(" ")[0]}!
        </h1>
        <p className="text-sm md:text-base opacity-90 mt-2 max-w-md">
          Here's what's happening in your organization today. Stay connected and informed.
        </p>
      </div>
    </div>
  );
}
