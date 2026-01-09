import { Pin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const announcements = [
  {
    id: 1,
    content: "Registration Open for Spring Programs — Enroll now for our upcoming professional development courses starting February 2025.",
    date: "Jan 8",
    type: "Important",
  },
  {
    id: 2,
    content: "Campus Closure Notice — SEA campus will be closed January 15 for scheduled maintenance and upgrades.",
    date: "Jan 6",
    type: "Notice",
  },
  {
    id: 3,
    content: "New Partnership Announcement — SEA welcomes new institutional partners for the 2025 academic year.",
    date: "Jan 3",
    type: "Update",
  },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "Important":
      return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300";
    case "Notice":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
    case "Update":
      return "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getPinColor = (type: string) => {
  switch (type) {
    case "Important":
      return "text-rose-500";
    case "Notice":
      return "text-amber-500";
    case "Update":
      return "text-sky-500";
    default:
      return "text-muted-foreground";
  }
};

export function BulletinBoard() {
  return (
    <div className="bg-card/60 backdrop-blur-md rounded-xl border border-border/50 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pin className="h-4 w-4 text-primary" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
              Bulletin Board
            </h3>
          </div>
          <Link
            to="/announcements"
            className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-2 h-0.5 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent rounded-full" />
      </div>

      {/* Cards Container */}
      <div className="p-4">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {announcements.map((announcement, index) => {
            // Subtle rotation variations for pinned note effect
            const rotations = ['-1deg', '0.5deg', '-0.8deg', '1deg', '-0.5deg'];
            const rotation = rotations[index % rotations.length];
            
            return (
              <div
                key={announcement.id}
                className="group relative flex-shrink-0 w-64 bg-card border border-border/50 rounded-lg p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:rotate-0"
                style={{
                  transform: `rotate(${rotation})`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Pin Icon */}
                <div className={`absolute -top-1 left-4 ${getPinColor(announcement.type)}`}>
                  <Pin className="h-5 w-5 fill-current" style={{ transform: 'rotate(-45deg)' }} />
                </div>

                {/* Type Chip */}
                <div className="mt-2 mb-3">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getTypeStyles(announcement.type)}`}
                  >
                    {announcement.type}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm text-foreground/80 line-clamp-3 leading-relaxed">
                  {announcement.content}
                </p>

                {/* Date */}
                <div className="mt-3 pt-3 border-t border-border/30 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{announcement.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
