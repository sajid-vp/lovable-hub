import { Cake, PartyPopper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: "300ms" }}>
      <CardHeader className="pb-3 bg-gradient-to-r from-pink/10 to-transparent">
        <CardTitle className="text-base flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-pink/20">
            <Cake className="h-4 w-4 text-pink" />
          </div>
          Team Birthdays
          <PartyPopper className="h-3 w-3 text-gold ml-auto animate-float" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-3">
        {mockBirthdays.slice(0, 4).map((person, index) => (
          <div 
            key={person.id} 
            className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-muted cursor-pointer group animate-slide-in ${
              isToday(person.birthday) ? "bg-gold/10 border border-gold/20" : ""
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Avatar className={`h-9 w-9 ring-2 ring-offset-2 ring-offset-card transition-transform group-hover:scale-110 ${
              isToday(person.birthday) ? "ring-gold" : "ring-transparent group-hover:ring-primary/30"
            }`}>
              <AvatarImage src={person.avatar} alt={person.name} />
              <AvatarFallback className="text-xs gradient-primary text-primary-foreground">
                {person.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{person.name}</p>
              <p className="text-xs text-muted-foreground">{person.department}</p>
            </div>
            <span className={`text-xs whitespace-nowrap font-medium ${
              isToday(person.birthday) ? "text-gold animate-pulse" : "text-muted-foreground"
            }`}>
              {formatDate(person.birthday)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
