import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
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
      return "border border-rose-500 text-rose-600 bg-transparent";
    case "Notice":
      return "border border-amber-500 text-amber-600 bg-transparent";
    case "Update":
      return "border border-sky-500 text-sky-600 bg-transparent";
    default:
      return "border border-foreground/50 text-foreground/80 bg-transparent";
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
    <div
      className="relative rounded-xl overflow-hidden animate-fade-in bg-background/80 backdrop-blur-sm border border-border"
      style={{ animationDelay: "50ms" }}
    >
      <div className="relative flex flex-col gap-2 px-3 sm:px-4 py-3">
        {/* Carousel content */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="flex-[0_0_100%] min-w-0">
                <span className="text-xs sm:text-sm font-medium line-clamp-2 leading-relaxed text-foreground">
                  {announcement.content}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation row: type chip, date on left, navigation + view all on right */}
        <div className="flex items-center gap-2">
          {/* Type chip */}
          <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${getTypeStyles(announcements[selectedIndex]?.type)}`}>
            {announcements[selectedIndex]?.type}
          </span>

          {/* Date */}
          <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-muted-foreground shrink-0">
            <Calendar className="h-2.5 w-2.5" />
            {announcements[selectedIndex]?.date}
          </span>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Prev arrow */}
          <button
            onClick={scrollPrev}
            className="p-1.5 rounded-full bg-muted hover:bg-muted/80 active:scale-95 transition-all text-foreground/70 hover:text-foreground shrink-0 tap-highlight"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all tap-highlight ${
                  index === selectedIndex
                    ? "bg-foreground scale-110"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={scrollNext}
            className="p-1.5 rounded-full bg-muted hover:bg-muted/80 active:scale-95 transition-all text-foreground/70 hover:text-foreground shrink-0 tap-highlight"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>

          {/* Separator */}
          <div className="w-px h-3 bg-border" />

          {/* View All link */}
          <Link
            to="/announcements"
            className="text-[10px] sm:text-xs font-semibold text-muted-foreground hover:text-foreground active:text-foreground transition-colors shrink-0 tap-highlight px-1 py-0.5"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  );
}
