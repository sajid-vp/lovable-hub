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

  return (
    <section className="animate-fade-in" style={{ animationDelay: "300ms" }}>
      {/* iOS-style Section Header */}
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
        Team Birthdays
      </h2>

      {/* iOS Widget Container */}
      <div className="ios-widget p-4">
        <div className="space-y-2">
          {mockBirthdays.slice(0, 4).map((person, index) => (
            <div 
              key={person.id} 
              className={`flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 cursor-pointer group active:scale-[0.98] animate-fade-in ${
                isToday(person.birthday) 
                  ? "bg-primary/10 border border-primary/20" 
                  : "bg-muted/40 hover:bg-muted/70"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Avatar className={`h-10 w-10 ${isToday(person.birthday) ? "ring-2 ring-primary ring-offset-2 ring-offset-card" : ""}`}>
                <AvatarImage src={person.avatar} alt={person.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                  {person.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{person.name}</p>
                <p className="text-xs text-muted-foreground">{person.department}</p>
              </div>
              <span className={`text-xs whitespace-nowrap font-semibold px-2.5 py-1 rounded-full ${
                isToday(person.birthday) 
                  ? "bg-primary text-white" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {formatDate(person.birthday)}
              </span>
            </div>
          ))}
        </div>

        {/* View All */}
        <Link 
          to="/birthdays"
          className="mt-4 w-full flex items-center justify-between px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
        >
          <span className="text-sm font-medium text-primary">View all birthdays</span>
          <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}