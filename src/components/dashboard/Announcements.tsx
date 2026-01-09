import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const announcements = [
  {
    id: 1,
    title: "Registration Open for Spring Programs",
    date: "Jan 8, 2025",
    priority: "high",
  },
  {
    id: 2,
    title: "Campus Closure Notice - January 15",
    date: "Jan 5, 2025",
    priority: "medium",
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    date: "Jan 3, 2025",
    priority: "normal",
  },
];

export function Announcements() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-[hsl(var(--coral))]";
      case "medium":
        return "bg-[hsl(var(--gold))]";
      default:
        return "bg-[hsl(var(--teal))]";
    }
  };

  return (
    <section className="animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Announcements
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[hsl(var(--coral))]/50 via-[hsl(var(--orange))]/30 to-transparent rounded-full" />
      </div>

      {/* Glass Container */}
      <div className="relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--coral))]/50 to-transparent rounded-full" />

        <div className="space-y-2">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/30 transition-colors group cursor-pointer"
            >
              <div className={`w-2 h-2 rounded-full ${getPriorityColor(announcement.priority)} shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                  {announcement.title}
                </p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">
                {announcement.date}
              </span>
            </div>
          ))}
        </div>

        <Link
          to="/announcements"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 mt-3 group"
        >
          View all announcements
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}