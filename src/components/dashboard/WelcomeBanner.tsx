import { Sun, Moon, CloudSun } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import seaBuilding from "@/assets/sea-building.jpg";

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
    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl shadow-[hsl(var(--turquoise))]/20 animate-fade-in h-44 sm:h-56 md:h-64">
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
      
      <div className="relative z-10 h-full p-4 sm:p-6 md:p-8 flex flex-col justify-center">
        {/* Text content */}
        <div className="text-white">
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
      </div>
    </div>
  );
}