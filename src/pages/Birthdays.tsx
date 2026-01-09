import { Cake } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockBirthdays } from "@/data/mockData";
import { PageLayout } from "@/components/layouts/PageLayout";

export default function Birthdays() {
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
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
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
    <PageLayout title="Team Birthdays">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBirthdays.map((person, index) => (
          <div
            key={person.id}
            className={`group relative rounded-2xl bg-card border shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6 ${
              isToday(person.birthday) 
                ? "border-primary bg-gradient-to-br from-primary/5 to-transparent" 
                : "border-border/50 hover:border-primary/40"
            }`}
          >
            <div className="flex items-center gap-4">
              <Avatar className={`h-16 w-16 ring-2 ring-offset-2 ring-offset-card ${
                isToday(person.birthday) ? "ring-primary" : "ring-border"
              }`}>
                <AvatarImage src={person.avatar} alt={person.name} />
                <AvatarFallback className={`text-lg bg-gradient-to-br ${avatarColors[index % avatarColors.length]} text-white font-bold`}>
                  {person.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base truncate group-hover:text-primary transition-colors">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground">{person.department}</p>
                <div className={`inline-flex items-center gap-1.5 mt-2 text-sm font-semibold px-3 py-1 rounded-full ${
                  isToday(person.birthday) 
                    ? "bg-primary text-primary-foreground animate-pulse" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  <Cake className="h-3.5 w-3.5" />
                  {formatDate(person.birthday)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {mockBirthdays.length === 0 && (
        <div className="text-center py-12">
          <Cake className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">No birthdays this week.</p>
        </div>
      )}
    </PageLayout>
  );
}
