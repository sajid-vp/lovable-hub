import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockEvents } from "@/data/mockData";

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockEvents.map((event) => (
          <div
            key={event.id}
            className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg px-2 py-1 min-w-[50px]">
              <span className="text-xs font-medium">
                {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
              </span>
              <span className="text-lg font-bold">
                {new Date(event.date).getDate()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{event.title}</h4>
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
