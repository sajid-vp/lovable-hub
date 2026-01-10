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
      return "border border-white/70 text-white bg-transparent";
    case "Notice":
      return "border border-white/60 text-white/95 bg-transparent";
    case "Update":
      return "border border-white/50 text-white/90 bg-transparent";
    default:
      return "border border-white/50 text-white/90 bg-transparent";
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
    <div className="relative rounded-xl overflow-hidden animate-fade-in bg-background/10 backdrop-blur-md border border-white/15" style={{ animationDelay: "50ms" }}>
      <div className="relative flex flex-col gap-2 px-3 sm:px-4 py-3">
        {/* Carousel content */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="flex-[0_0_100%] min-w-0">
                <span className="text-xs sm:text-sm font-medium line-clamp-2 leading-relaxed text-white">
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
          <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-white/80 shrink-0">
            <Calendar className="h-2.5 w-2.5" />
            {announcements[selectedIndex]?.date}
          </span>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Prev arrow */}
          <button
            onClick={scrollPrev}
            className="p-1 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white/90 hover:text-white shrink-0"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={scrollNext}
            className="p-1 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white/90 hover:text-white shrink-0"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>

          {/* Separator */}
          <div className="w-px h-3 bg-white/30" />

          {/* View All link */}
          <Link
            to="/announcements"
            className="text-[10px] sm:text-xs font-semibold text-white/90 hover:text-white transition-colors shrink-0"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  );
}
