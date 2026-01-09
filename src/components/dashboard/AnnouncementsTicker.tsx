import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const announcements = [
  {
    id: 1,
    content: "Registration Open for Spring Programs — Enroll now for our upcoming professional development courses starting February 2025.",
    date: "Jan 8",
  },
  {
    id: 2,
    content: "Campus Closure Notice — SEA campus will be closed January 15 for scheduled maintenance and upgrades.",
    date: "Jan 6",
  },
  {
    id: 3,
    content: "New Partnership Announcement — SEA welcomes new institutional partners for the 2025 academic year.",
    date: "Jan 3",
  },
];

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
    <div className="relative rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "50ms" }}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--light-blue))] to-[hsl(var(--turquoise))]" />
      
      <div className="relative flex items-start gap-2 px-3 sm:px-4 py-3">
        {/* Prev arrow */}
        <button
          onClick={scrollPrev}
          className="p-1 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white/90 hover:text-white shrink-0 mt-1"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Carousel */}
        <div className="flex-1 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="flex-[0_0_100%] min-w-0">
                <div className="flex flex-col gap-1 text-white">
                  <span className="text-xs sm:text-sm font-medium line-clamp-2 leading-relaxed">
                    {announcement.content}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-white/70">
                    {announcement.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-1.5 shrink-0 mt-1.5">
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
          className="p-1 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white/90 hover:text-white shrink-0 mt-1"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* View All link */}
        <Link
          to="/announcements"
          className="text-[10px] sm:text-xs font-semibold text-white/90 hover:text-white transition-colors shrink-0 mt-1.5 ml-1"
        >
          View all
        </Link>
      </div>
    </div>
  );
}
