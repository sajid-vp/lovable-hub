import { useState } from "react";
import { Clock, MapPin, ChevronRight } from "lucide-react";
import { mockEvents } from "@/data/mockData";
import { EventsCalendarDialog } from "./EventsCalendarDialog";

export function UpcomingEvents() {
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <>
      <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
        {/* iOS-style Section Header */}
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
          Upcoming Events
        </h2>

        {/* iOS Widget Container */}
        <div className="ios-widget p-4">
          <div className="space-y-2">
            {mockEvents.map((event, index) => (
              <div
                key={event.id}
                className="flex gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted/70 transition-all duration-200 cursor-pointer group active:scale-[0.98] animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Date Badge */}
                <div className="flex flex-col items-center justify-center bg-primary text-white rounded-xl px-3 py-2 min-w-[52px]">
                  <span className="text-[10px] font-medium opacity-90 uppercase">
                    {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                  </span>
                  <span className="text-lg font-bold leading-none">
                    {new Date(event.date).getDate()}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm truncate">{event.title}</h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate max-w-[100px]">{event.location}</span>
                    </span>
                  </div>
                </div>
                
                <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity self-center" />
              </div>
            ))}
          </div>

          {/* View All */}
          <button 
            onClick={() => setCalendarOpen(true)}
            className="mt-4 w-full flex items-center justify-between px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
          >
            <span className="text-sm font-medium text-primary">View calendar</span>
            <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      <EventsCalendarDialog open={calendarOpen} onOpenChange={setCalendarOpen} />
    </>
  );
}