import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Educators Conference 2025",
    date: "2025-02-15",
    time: "9:00 AM - 5:00 PM",
    location: "SEA Main Campus",
    type: "Conference",
    description: "Join leading educators for a day of insights, workshops, and networking.",
  },
  {
    id: "2",
    title: "Digital Learning Workshop",
    date: "2025-01-25",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    type: "Workshop",
    description: "Master the latest digital tools and techniques for modern classrooms.",
  },
  {
    id: "3",
    title: "Leadership Excellence Series",
    date: "2025-02-01",
    time: "2:00 PM - 4:00 PM",
    location: "SEA Training Center",
    type: "Training",
    description: "Develop essential leadership skills for educational administrators.",
  },
];

export function PublicEvents() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">
              Join us for workshops, conferences, and training sessions
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-card rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <Badge variant="secondary" className="mb-4">
                  {event.type}
                </Badge>
                <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
