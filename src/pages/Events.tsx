import { Clock, MapPin, Calendar } from "lucide-react";
import { mockEvents } from "@/data/mockData";
import { PageLayout } from "@/components/layouts/PageLayout";

export default function Events() {
  const colors = [
    "from-[hsl(var(--teal))] to-[hsl(var(--turquoise))]",
    "from-primary to-[hsl(var(--light-blue))]",
    "from-[hsl(var(--turquoise))] to-[hsl(var(--green))]",
    "from-[hsl(var(--light-blue))] to-primary",
  ];

  return (
    <PageLayout title="Upcoming Events">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockEvents.map((event, index) => (
          <div
            key={event.id}
            className="group relative rounded-2xl bg-card border border-border/50 shadow-md overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all duration-300 p-6"
          >
            <div className="flex gap-5">
              {/* Date Badge */}
              <div className={`flex flex-col items-center justify-center bg-gradient-to-br ${colors[index % colors.length]} text-white rounded-2xl px-5 py-4 min-w-[80px] shadow-lg`}>
                <span className="text-sm font-medium opacity-90">
                  {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                </span>
                <span className="text-3xl font-bold">
                  {new Date(event.date).getDate()}
                </span>
                <span className="text-xs opacity-80">
                  {new Date(event.date).toLocaleDateString("en-US", { weekday: "short" })}
                </span>
              </div>
              
              {/* Event Details */}
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {mockEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">No upcoming events at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
}
