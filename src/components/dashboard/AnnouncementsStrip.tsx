import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

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

export function AnnouncementsStrip() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-[hsl(var(--coral))]";
      case "medium":
        return "bg-[hsl(var(--gold))]";
      default:
        return "bg-[hsl(var(--turquoise))]";
    }
  };

  return (
    <div className="rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 shadow-sm animate-fade-in">
      <div className="flex items-center gap-3 px-3 sm:px-4 py-2">
        {/* Nav arrow */}
        <button
          onClick={scrollPrev}
          className="p-1 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        
        {/* Carousel */}
        <div className="flex-1 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="flex-[0_0_100%] min-w-0">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${getPriorityColor(announcement.priority)} shrink-0`} />
                  <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                    {announcement.title}
                  </span>
                  <span className="text-[10px] text-muted-foreground hidden sm:inline">—</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground truncate hidden sm:block">
                    {announcement.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots + nav */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-1 h-1 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-primary w-3"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            className="p-1 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* View All */}
        <Link
          to="/announcements"
          className="text-[10px] sm:text-xs font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
        >
          View all
        </Link>
      </div>
    </div>
  );
}
