import { useState } from "react";
import { Pin, Calendar, ArrowRight } from "lucide-react";
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
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  return (
    <div className="relative p-2 rounded-lg" style={{
      background: 'linear-gradient(145deg, hsl(200, 35%, 25%) 0%, hsl(195, 40%, 20%) 20%, hsl(190, 45%, 18%) 50%, hsl(195, 40%, 20%) 80%, hsl(200, 35%, 25%) 100%)',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3), 0 2px 4px -2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
    }}>
      {/* Frame texture overlay */}
      <div 
        className="absolute inset-0 rounded-lg opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.04\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\'/%3E%3C/svg%3E")',
        }}
      />
      {/* Inner frame highlight */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.08), inset -1px -1px 2px rgba(0,0,0,0.3)',
        }}
      />

      {/* Inner board */}
      <div className="relative rounded-md overflow-hidden shadow-inner" style={{
        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2), inset 0 0 2px rgba(0,0,0,0.15)',
      }}>
        {/* Board background - theme gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, hsl(200, 50%, 75%) 0%, hsl(180, 45%, 70%) 50%, hsl(175, 50%, 65%) 100%)',
          }}
        />
        {/* Texture noise overlay */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'cork\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23cork)\'/%3E%3C/svg%3E")',
          }}
        />
        {/* Subtle vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.1)',
          }}
        />

      {/* Header */}
      <div className="relative px-4 py-3 border-b border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pin className="h-4 w-4 text-primary-foreground/80" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/90">
              Bulletin Board
            </h3>
          </div>
          <Link
            to="/announcements"
            className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors flex items-center gap-1 font-medium"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-2 h-0.5 bg-gradient-to-r from-primary-foreground/40 via-primary-foreground/20 to-transparent rounded-full" />
      </div>

      {/* Cards Container */}
      <div className="relative p-4 pt-6">
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
          {announcements.map((announcement, index) => {
            // Subtle rotation variations for pinned note effect
            const rotations = ['-1deg', '0.5deg', '-0.8deg', '1deg', '-0.5deg'];
            const rotation = rotations[index % rotations.length];
            
            return (
              <button
                key={announcement.id}
                onClick={() => setSelectedAnnouncement(announcement)}
                className="group relative flex-shrink-0 w-64 rounded-sm p-4 transition-all duration-300 hover:-translate-y-2 hover:rotate-0 text-left cursor-pointer"
                style={{
                  transform: `rotate(${rotation})`,
                  animationDelay: `${index * 100}ms`,
                  background: 'linear-gradient(135deg, #fffef5 0%, #fefcf3 50%, #fdf9e8 100%)',
                  boxShadow: '0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.06), 0 4px 4px rgba(0,0,0,0.04), 0 8px 8px rgba(0,0,0,0.02), 2px 4px 12px rgba(0,0,0,0.08)',
                }}
              >
                {/* Paper texture overlay */}
                <div 
                  className="absolute inset-0 rounded-sm opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                  }}
                />
                
                {/* Folded corner effect */}
                <div 
                  className="absolute top-0 right-0 w-6 h-6 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.06) 100%)',
                  }}
                />

                {/* Pin Icon - positioned at top center */}
                <div 
                  className={`absolute ${getPinColor(announcement.type)} drop-shadow-md`}
                  style={{ top: '-8px', left: '50%', marginLeft: '-12px' }}
                >
                  <Pin className="h-6 w-6 fill-current" style={{ transform: 'rotate(45deg)' }} />
                </div>

                {/* Type Chip */}
                <div className="mt-4 mb-3 relative">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getTypeStyles(announcement.type)}`}
                  >
                    {announcement.type}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm text-stone-700 line-clamp-3 leading-relaxed relative font-medium">
                  {announcement.content}
                </p>

                {/* Date */}
                <div className="mt-3 pt-3 border-t border-stone-200/60 flex items-center justify-end gap-1 text-xs text-stone-500 relative">
                  <Calendar className="h-3 w-3" />
                  <span>{announcement.date}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      </div>

      {/* Announcement Detail Dialog */}
      <Dialog open={!!selectedAnnouncement} onOpenChange={() => setSelectedAnnouncement(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getTypeStyles(selectedAnnouncement?.type || '')}`}
              >
                {selectedAnnouncement?.type}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {selectedAnnouncement?.date}
              </span>
            </div>
            <DialogTitle className="text-lg font-semibold text-foreground">
              Announcement Details
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-sm text-foreground/80 leading-relaxed">
              {selectedAnnouncement?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
