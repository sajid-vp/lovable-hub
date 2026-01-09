import { Sun, Moon, CloudSun, ArrowRight } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import welcomeHero from "@/assets/welcome-hero.png";

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
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(var(--teal))] via-[hsl(var(--turquoise))] to-[hsl(var(--light-blue))] shadow-2xl shadow-[hsl(var(--turquoise))]/20 animate-fade-in">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(var(--gold))]/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      
      <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        {/* Text content */}
        <div className="flex-1 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
              <TimeIcon className="h-6 w-6" />
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-white/40 via-white/20 to-transparent rounded-full" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 drop-shadow-sm">
            {getGreeting()}, {user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-base opacity-90 font-medium mb-4">
            {today}
          </p>
          <p className="text-sm opacity-80 max-w-md mb-6">
            Welcome back to Sharjah Education Academy. Here's what's happening in your organization today.
          </p>
          
          {/* Quick action button */}
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl border border-white/20 text-sm font-medium transition-all duration-300 hover:translate-x-1 group">
            Explore Dashboard
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
        
        {/* Hero image */}
        <div className="relative w-full md:w-auto">
          <div className="relative w-full md:w-72 lg:w-80 h-48 md:h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img 
              src={welcomeHero} 
              alt="Education and learning" 
              className="w-full h-full object-cover"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--teal))]/30 via-transparent to-transparent" />
          </div>
          
          {/* Floating decorative cards */}
          <div className="absolute -top-3 -right-3 w-16 h-16 bg-white/90 rounded-xl shadow-lg flex items-center justify-center animate-pulse">
            <span className="text-2xl">📚</span>
          </div>
          <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-[hsl(var(--gold))]/90 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-xl">🎓</span>
          </div>
        </div>
      </div>
    </div>
  );
}