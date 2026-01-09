import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockEvents } from "@/data/mockData";

export function UpcomingEvents() {
  const colors = [
    "from-[hsl(var(--turquoise))] to-[hsl(var(--teal))]",
    "from-[hsl(var(--coral))] to-[hsl(var(--orange))]",
    "from-[hsl(var(--lavender))] to-[hsl(var(--indigo))]",
  ];

  return (
    <Card className="overflow-hidden animate-fade-in border-0 shadow-lg" style={{ animationDelay: "200ms" }}>
      <CardHeader className="pb-3 bg-gradient-to-r from-[hsl(var(--turquoise))]/10 via-[hsl(var(--light-blue))]/5 to-transparent">
        <CardTitle className="text-base flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-to-br from-[hsl(var(--turquoise))] to-[hsl(var(--teal))] shadow-lg shadow-[hsl(var(--turquoise))]/20">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          <span className="bg-gradient-to-r from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] bg-clip-text text-transparent font-bold">
            Upcoming Events
          </span>
          <Sparkles className="h-3 w-3 text-[hsl(var(--gold))] ml-auto animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-3">
        {mockEvents.map((event, index) => (
          <div
            key={event.id}
            className="flex gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/60 transition-all duration-300 hover:shadow-md hover:-translate-x-1 cursor-pointer group animate-slide-in border border-transparent hover:border-[hsl(var(--turquoise))]/20"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`flex flex-col items-center justify-center bg-gradient-to-br ${colors[index % colors.length]} text-white rounded-xl px-3 py-2 min-w-[56px] group-hover:scale-105 transition-transform shadow-lg`}>
              <span className="text-xs font-medium opacity-90">
                {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
              </span>
              <span className="text-xl font-bold">
                {new Date(event.date).getDate()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm truncate group-hover:text-[hsl(var(--teal))] transition-colors">{event.title}</h4>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-[hsl(var(--coral))]" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1 truncate">
                  <MapPin className="h-3 w-3 text-[hsl(var(--lavender))]" />
                  {event.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
