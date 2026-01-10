import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Announcement {
  id: number;
  content: string;
  date: string;
  type: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    content: "Registration Open for Spring Programs — Enroll now for our upcoming professional development courses starting February 2025. Early bird registration ends January 20th. Available programs include Advanced Teaching Methods, Educational Leadership, and Digital Learning Integration. Visit the registrar's office or apply online through the SEA portal.",
    date: "Jan 8",
    type: "Important",
  },
  {
    id: 2,
    content: "Campus Closure Notice — SEA campus will be closed January 15 for scheduled maintenance and upgrades. All staff should ensure they have completed any pending tasks before the closure date. Remote work arrangements will be in place for essential personnel. Normal operations will resume January 16th at 8:00 AM.",
    date: "Jan 6",
    type: "Notice",
  },
  {
    id: 3,
    content: "New Partnership Announcement — SEA welcomes new institutional partners for the 2025 academic year. We are excited to announce collaborations with leading educational institutions across the region. These partnerships will enhance our research capabilities and provide new opportunities for faculty and student exchange programs.",
    date: "Jan 3",
    type: "Update",
  },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "Important":
      return "border border-rose-500 text-rose-600 dark:text-rose-400 bg-transparent";
    case "Notice":
      return "border border-amber-500 text-amber-600 dark:text-amber-400 bg-transparent";
    case "Update":
      return "border border-sky-500 text-sky-600 dark:text-sky-400 bg-transparent";
    default:
      return "border border-muted-foreground text-muted-foreground bg-transparent";
  }
};

export function BulletinBoard() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  return (
    <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
          Bulletin Board
        </h2>
        <div className="flex-1 h-[1.5px] bg-gradient-to-r from-primary/40 to-transparent rounded-full" />
        <Link 
          to="/announcements" 
          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
        >
          View all
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Glass Container */}
      <div className="relative bg-card/60 backdrop-blur-md border border-border/50 shadow-lg rounded-2xl p-4 overflow-hidden">
        {/* Decorative gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[hsl(var(--blue))] via-[hsl(var(--turquoise))] to-[hsl(var(--light-blue))]" />
        
        {/* Announcement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {announcements.map((announcement) => (
            <button
              key={announcement.id}
              onClick={() => setSelectedAnnouncement(announcement)}
              className="group relative bg-background/80 border border-border/50 rounded-xl p-4 text-left transition-all duration-300 hover:border-[hsl(var(--turquoise))]/40 hover:shadow-lg hover:shadow-[hsl(var(--turquoise))]/5 hover:-translate-y-0.5"
            >
              {/* Type Badge */}
              <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-2 ${getTypeStyles(announcement.type)}`}>
                {announcement.type}
              </span>
              
              {/* Content */}
              <p className="text-sm text-foreground/90 line-clamp-3 leading-relaxed mb-3">
                {announcement.content}
              </p>
              
              {/* Date */}
              <span className="text-xs text-muted-foreground">
                {announcement.date}
              </span>

              {/* Hover indicator */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="h-4 w-4 text-[hsl(var(--turquoise))]" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Announcement Detail Dialog */}
      <Dialog open={!!selectedAnnouncement} onOpenChange={() => setSelectedAnnouncement(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedAnnouncement && (
                <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${getTypeStyles(selectedAnnouncement.type)}`}>
                  {selectedAnnouncement.type}
                </span>
              )}
              <span className="text-muted-foreground text-sm font-normal">
                {selectedAnnouncement?.date}
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <p className="text-foreground leading-relaxed">
              {selectedAnnouncement?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
