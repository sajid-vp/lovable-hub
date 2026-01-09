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

  const avatarColors = [
    "from-[hsl(var(--pink))] to-[hsl(var(--coral))]",
    "from-[hsl(var(--lavender))] to-[hsl(var(--indigo))]",
    "from-[hsl(var(--turquoise))] to-[hsl(var(--teal))]",
    "from-[hsl(var(--gold))] to-[hsl(var(--orange))]",
  ];

  return (
    <Card className="overflow-hidden animate-fade-in border-0 shadow-lg" style={{ animationDelay: "300ms" }}>
      <CardHeader className="pb-3 bg-gradient-to-r from-[hsl(var(--pink))]/10 via-[hsl(var(--coral))]/5 to-transparent">
        <CardTitle className="text-base flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-to-br from-[hsl(var(--pink))] to-[hsl(var(--coral))] shadow-lg shadow-[hsl(var(--pink))]/20">
            <Cake className="h-4 w-4 text-white" />
          </div>
          <span className="bg-gradient-to-r from-[hsl(var(--pink))] to-[hsl(var(--coral))] bg-clip-text text-transparent font-bold">
            Team Birthdays
          </span>
          <PartyPopper className="h-4 w-4 text-[hsl(var(--gold))] ml-auto animate-float" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-3">
        {mockBirthdays.slice(0, 4).map((person, index) => (
          <div 
            key={person.id} 
            className={`flex items-center gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-muted cursor-pointer group animate-slide-in ${
              isToday(person.birthday) ? "bg-gradient-to-r from-[hsl(var(--gold))]/15 to-[hsl(var(--yellow))]/10 border border-[hsl(var(--gold))]/30" : "border border-transparent hover:border-[hsl(var(--pink))]/20"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Avatar className={`h-10 w-10 ring-2 ring-offset-2 ring-offset-card transition-transform group-hover:scale-110 ${
              isToday(person.birthday) ? "ring-[hsl(var(--gold))]" : "ring-transparent group-hover:ring-[hsl(var(--pink))]/40"
            }`}>
              <AvatarImage src={person.avatar} alt={person.name} />
              <AvatarFallback className={`text-xs bg-gradient-to-br ${avatarColors[index % avatarColors.length]} text-white font-bold`}>
                {person.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate group-hover:text-[hsl(var(--pink))] transition-colors">{person.name}</p>
              <p className="text-xs text-muted-foreground">{person.department}</p>
            </div>
            <span className={`text-xs whitespace-nowrap font-bold px-2 py-1 rounded-full ${
              isToday(person.birthday) 
                ? "bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--yellow))] text-white animate-pulse shadow-lg shadow-[hsl(var(--gold))]/30" 
                : "text-muted-foreground bg-muted/50"
            }`}>
              {formatDate(person.birthday)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
