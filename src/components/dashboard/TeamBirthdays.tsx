import { Cake } from "lucide-react";
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

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Cake className="h-4 w-4 text-pink" />
          Team Birthdays
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {mockBirthdays.slice(0, 4).map((person) => (
          <div key={person.id} className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={person.avatar} alt={person.name} />
              <AvatarFallback className="text-xs gradient-primary text-primary-foreground">
                {person.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{person.name}</p>
              <p className="text-xs text-muted-foreground">{person.department}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {formatDate(person.birthday)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
