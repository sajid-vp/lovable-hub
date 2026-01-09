import { Clock, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mockEvents } from "@/data/mockData";

export function UpcomingEvents() {
  const colors = [
    "from-[hsl(var(--teal))] to-[hsl(var(--turquoise))]",
    "from-primary to-[hsl(var(--light-blue))]",
    "from-[hsl(var(--turquoise))] to-[hsl(var(--green))]",
  ];

  return (
    <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Upcoming Events
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[hsl(var(--turquoise))]/50 via-[hsl(var(--teal))]/20 to-transparent rounded-full" />
      </div>

      {/* Glass Container */}
      <div className="relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--turquoise))]/50 to-transparent rounded-full" />

        <div className="space-y-3">
          {mockEvents.map((event, index) => (
            <div
              key={event.id}
              className="flex gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-md hover:-translate-x-1 cursor-pointer group animate-slide-in border border-transparent hover:border-[hsl(var(--turquoise))]/20"
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
                    <Clock className="h-3 w-3 text-[hsl(var(--teal))]" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1 truncate">
                    <MapPin className="h-3 w-3 text-[hsl(var(--turquoise))]" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <Link 
          to="/events"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 mt-4 group"
        >
          View all
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
