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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[hsl(var(--teal))] via-[hsl(var(--turquoise))] to-[hsl(var(--light-blue))] p-6 md:p-8 text-white animate-fade-in shadow-2xl shadow-[hsl(var(--turquoise))]/20">
      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[hsl(var(--gold))]/15 rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[hsl(var(--coral))]/10 rounded-full" />
      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
              <TimeIcon className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                {getGreeting()}, {user?.name?.split(" ")[0]}!
              </h1>
              <p className="text-sm opacity-90 font-medium mt-0.5">
                {today}
              </p>
            </div>
          </div>
          <p className="text-sm opacity-80 max-w-md">
            Here's what's happening in your organization today.
          </p>
        </div>
        
        {/* Optional: Quick stats or CTA could go here */}
        <div className="hidden md:flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
