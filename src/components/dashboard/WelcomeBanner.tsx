import { Sun, Moon, CloudSun } from "lucide-react";
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
    <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[hsl(var(--turquoise))]/20 animate-fade-in h-56 md:h-64">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop')`,
        }}
      />
      
      {/* Gradient overlay blending with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--teal))]/95 via-[hsl(var(--turquoise))]/85 to-[hsl(var(--light-blue))]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--teal))]/60 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
      
      <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-center">
        {/* Text content */}
        <div className="text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
              <TimeIcon className="h-6 w-6" />
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-white/40 via-white/20 to-transparent rounded-full max-w-xs" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 drop-shadow-md">
            {getGreeting()}, {user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-base opacity-90 font-medium mb-2">
            {today}
          </p>
          <p className="text-sm opacity-80 max-w-lg">
            Welcome back to Sharjah Education Academy. Here's what's happening in your organization today.
          </p>
        </div>
      </div>
    </div>
  );
}