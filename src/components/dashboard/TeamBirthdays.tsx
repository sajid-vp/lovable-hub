import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockBirthdays } from "@/data/mockData";

export function TeamBirthdays() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today! 🎉";
    }
    if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    }
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const isToday = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const avatarColors = [
    "from-[hsl(var(--teal))] to-[hsl(var(--turquoise))]",
    "from-primary to-[hsl(var(--light-blue))]",
    "from-[hsl(var(--turquoise))] to-[hsl(var(--green))]",
    "from-[hsl(var(--light-blue))] to-primary",
  ];

  return (
    <section className="animate-fade-in" style={{ animationDelay: "300ms" }}>
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
          Team Birthdays
        </h2>
        <div className="flex-1 h-[2px] bg-[hsl(var(--teal))]/50 rounded-full" />
      </div>

      {/* Glass Container */}
      <div className="relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5">

        <div className="space-y-3">
          {mockBirthdays.slice(0, 4).map((person, index) => (
            <div 
              key={person.id} 
              className={`flex items-center gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-background/80 cursor-pointer group animate-slide-in ${
                isToday(person.birthday) ? "bg-gradient-to-r from-[hsl(var(--teal))]/15 to-[hsl(var(--turquoise))]/10 border border-[hsl(var(--teal))]/30" : "bg-background/50 border border-transparent hover:border-[hsl(var(--turquoise))]/20"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Avatar className={`h-10 w-10 ring-2 ring-offset-2 ring-offset-card transition-transform group-hover:scale-110 ${
                isToday(person.birthday) ? "ring-[hsl(var(--teal))]" : "ring-transparent group-hover:ring-[hsl(var(--turquoise))]/40"
              }`}>
                <AvatarImage src={person.avatar} alt={person.name} />
                <AvatarFallback className={`text-xs bg-gradient-to-br ${avatarColors[index % avatarColors.length]} text-white font-bold`}>
                  {person.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate group-hover:text-[hsl(var(--teal))] transition-colors">{person.name}</p>
                <p className="text-xs text-muted-foreground">{person.department}</p>
              </div>
              <span className={`text-xs whitespace-nowrap font-bold px-2 py-1 rounded-full ${
                isToday(person.birthday) 
                  ? "bg-gradient-to-r from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white animate-pulse shadow-lg shadow-[hsl(var(--teal))]/30" 
                  : "text-muted-foreground bg-muted/50"
              }`}>
                {formatDate(person.birthday)}
              </span>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-end mt-4">
          <Link 
            to="/birthdays"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 group"
          >
            View all
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
