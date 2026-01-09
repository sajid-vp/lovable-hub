import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Megaphone, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const announcements = [
  {
    id: 1,
    title: "Registration Open for Spring Programs",
    description: "Enroll now for our upcoming professional development courses starting February 2025.",
    priority: "high",
  },
  {
    id: 2,
    title: "Campus Closure Notice - January 15",
    description: "SEA campus will be closed for scheduled maintenance and upgrades.",
    priority: "medium",
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    description: "SEA welcomes new institutional partners for the 2025 academic year.",
    priority: "normal",
  },
];

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    
    // Auto-play every 5 seconds
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  const getPriorityIndicator = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-white";
      case "medium":
        return "bg-white/70";
      default:
        return "bg-white/50";
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div 
        className="w-full py-2.5 px-4"
        style={{ background: 'linear-gradient(90deg, hsl(var(--indigo)) 0%, hsl(var(--teal)) 100%)' }}
      >
        <div className="container max-w-6xl mx-auto flex items-center gap-3">
          {/* Icon */}
          <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm shrink-0">
            <Megaphone className="h-4 w-4 text-white" />
          </div>

          {/* Nav arrow left */}
          <button
            onClick={scrollPrev}
            className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white shrink-0"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          
          {/* Carousel */}
          <div className="flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="flex-[0_0_100%] min-w-0">
                  <div className="flex items-center gap-2 text-white justify-center">
                    <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", getPriorityIndicator(announcement.priority))} />
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {announcement.title}
                    </span>
                    <span className="text-white/50 hidden sm:inline">—</span>
                    <span className="text-xs text-white/70 truncate hidden sm:block max-w-md">
                      {announcement.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrow right + dots */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex gap-1 hidden sm:flex">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "h-1 rounded-full transition-all",
                    index === selectedIndex
                      ? "bg-white w-4"
                      : "bg-white/40 hover:bg-white/60 w-1"
                  )}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* View All link */}
          <Link
            to="/announcements"
            className="text-xs font-medium text-white/80 hover:text-white transition-colors shrink-0 underline-offset-2 hover:underline"
          >
            View all
          </Link>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white shrink-0 ml-1"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
