import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockEvents } from "@/data/mockData";

export function UpcomingEvents() {
  return (
    <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: "200ms" }}>
      <CardHeader className="pb-3 bg-gradient-to-r from-primary/5 to-transparent">
        <CardTitle className="text-base flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-primary/10">
            <Calendar className="h-4 w-4 text-primary" />
          </div>
          Upcoming Events
          <Sparkles className="h-3 w-3 text-gold ml-auto animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-3">
        {mockEvents.map((event, index) => (
          <div
            key={event.id}
            className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:shadow-md hover:-translate-x-1 cursor-pointer group animate-slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg px-2 py-1 min-w-[50px] group-hover:scale-105 transition-transform shadow-sm">
              <span className="text-xs font-medium">
                {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
              </span>
              <span className="text-lg font-bold">
                {new Date(event.date).getDate()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">{event.title}</h4>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1 truncate">
                  <MapPin className="h-3 w-3" />
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
