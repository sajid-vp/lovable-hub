import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

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
      return "bg-destructive/10 text-destructive";
    case "Notice":
      return "bg-warning/10 text-[hsl(var(--warning))]";
    case "Update":
      return "bg-primary/10 text-primary";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function AnnouncementsTicker() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    
    // Auto-play
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <div className="ios-widget-sm p-4 animate-fade-in" style={{ animationDelay: "50ms" }}>
      {/* Carousel content */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="flex-[0_0_100%] min-w-0">
              <p className="text-sm font-medium line-clamp-2 leading-relaxed text-foreground">
                {announcement.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation row */}
      <div className="flex items-center gap-3 mt-3">
        {/* Type pill */}
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${getTypeStyles(announcements[selectedIndex]?.type)}`}>
          {announcements[selectedIndex]?.type}
        </span>

        {/* Date */}
        <span className="text-xs text-muted-foreground">
          {announcements[selectedIndex]?.date}
        </span>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Dots */}
        <div className="flex gap-1.5">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-primary w-4"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Nav buttons */}
        <div className="flex gap-1">
          <button
            onClick={scrollPrev}
            className="ios-nav-btn p-1.5"
          >
            <ChevronLeft className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="ios-nav-btn p-1.5"
          >
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </div>

        {/* View All link */}
        <Link
          to="/announcements"
          className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          View all
        </Link>
      </div>
    </div>
  );
}