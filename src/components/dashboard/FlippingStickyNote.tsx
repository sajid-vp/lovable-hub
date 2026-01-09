import { useState, useEffect } from "react";
import { Pin, Calendar } from "lucide-react";
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
      return "bg-rose-100 text-rose-700";
    case "Notice":
      return "bg-amber-100 text-amber-700";
    case "Update":
      return "bg-sky-100 text-sky-700";
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

export function FlippingStickyNote() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
        setIsFlipping(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentAnnouncement = announcements[currentIndex];

  return (
    <>
      <button
        onClick={() => setSelectedAnnouncement(currentAnnouncement)}
        className="relative cursor-pointer group"
        style={{ perspective: '1000px' }}
      >
        {/* The flipping card */}
        <div
          className="relative w-44 sm:w-52 transition-transform duration-500 ease-in-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipping ? 'rotateY(90deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Sticky note card */}
          <div
            className="relative rounded-sm p-3 sm:p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #fffef5 0%, #fefcf3 50%, #fdf9e8 100%)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15), 2px 4px 8px rgba(0,0,0,0.1)',
              transform: 'rotate(-2deg)',
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
              className="absolute top-0 right-0 w-5 h-5 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.08) 100%)',
              }}
            />

            {/* Pin Icon */}
            <div 
              className={`absolute ${getPinColor(currentAnnouncement.type)} drop-shadow-md`}
              style={{ top: '-6px', left: '50%', marginLeft: '-10px' }}
            >
              <Pin className="h-5 w-5 fill-current" style={{ transform: 'rotate(45deg)' }} />
            </div>

            {/* Type Chip */}
            <div className="mt-2 mb-2 relative">
              <span
                className={`text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full ${getTypeStyles(currentAnnouncement.type)}`}
              >
                {currentAnnouncement.type}
              </span>
            </div>

            {/* Content */}
            <p className="text-xs sm:text-sm text-stone-700 line-clamp-2 leading-relaxed relative font-medium">
              {currentAnnouncement.content}
            </p>

            {/* Date */}
            <div className="mt-2 pt-2 border-t border-stone-200/60 flex items-center justify-between text-[10px] sm:text-xs text-stone-500 relative">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {currentAnnouncement.date}
              </span>
              <span className="text-stone-400">
                {currentIndex + 1}/{announcements.length}
              </span>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-2">
          {announcements.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-4 bg-white' 
                  : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </button>

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
    </>
  );
}
