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
      return "bg-destructive/10 text-destructive";
    case "Notice":
      return "bg-warning/10 text-[hsl(var(--warning))]";
    case "Update":
      return "bg-primary/10 text-primary";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function BulletinBoard() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  return (
    <section className="animate-fade-in" style={{ animationDelay: '250ms' }}>
      {/* iOS-style Section Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Bulletin Board
        </h2>
        <Link 
          to="/announcements" 
          className="text-sm font-medium text-primary flex items-center gap-0.5"
        >
          View all
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* iOS Widget Container */}
      <div className="ios-widget p-4">
        {/* Announcement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {announcements.map((announcement, index) => (
            <button
              key={announcement.id}
              onClick={() => setSelectedAnnouncement(announcement)}
              className="group relative bg-muted/40 hover:bg-muted/70 rounded-2xl p-4 text-left transition-all duration-200 active:scale-[0.98] animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Type Badge */}
              <span className={`inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full mb-2.5 ${getTypeStyles(announcement.type)}`}>
                {announcement.type}
              </span>
              
              {/* Content */}
              <p className="text-sm text-foreground line-clamp-3 leading-relaxed mb-3">
                {announcement.content}
              </p>
              
              {/* Date */}
              <span className="text-xs text-muted-foreground">
                {announcement.date}
              </span>

              {/* Hover indicator */}
              <ChevronRight className="absolute bottom-4 right-4 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {/* Announcement Detail Dialog */}
      <Dialog open={!!selectedAnnouncement} onOpenChange={() => setSelectedAnnouncement(null)}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedAnnouncement && (
                <span className={`inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full ${getTypeStyles(selectedAnnouncement.type)}`}>
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