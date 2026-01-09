import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const announcements = [
  {
    id: 1,
    title: "Registration Open for Spring Programs",
    description: "Enroll now for our upcoming professional development courses starting February 2025.",
    date: "Jan 8, 2025",
    priority: "high",
  },
  {
    id: 2,
    title: "Campus Closure Notice - January 15",
    description: "SEA campus will be closed for scheduled maintenance and upgrades.",
    date: "Jan 5, 2025",
    priority: "medium",
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    description: "SEA welcomes new institutional partners for the 2025 academic year.",
    date: "Jan 3, 2025",
    priority: "normal",
  },
];

export function Announcements() {
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-[hsl(var(--teal))]";
      case "medium":
        return "bg-[hsl(var(--turquoise))]";
      default:
        return "bg-primary";
    }
  };

  return (
    <section className="animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Announcements
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[hsl(var(--teal))]/50 via-[hsl(var(--turquoise))]/30 to-transparent rounded-full" />
      </div>

      {/* Glass Container */}
      <div className="relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--teal))]/50 to-transparent rounded-full" />

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="flex-[0_0_100%] min-w-0 px-1">
                <div className="flex items-start gap-3 min-h-[44px]">
                  <div className={`w-2 h-2 rounded-full ${getPriorityColor(announcement.priority)} shrink-0 mt-1.5`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold mb-0.5 line-clamp-1">{announcement.title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            {/* Navigation arrows */}
            <button
              onClick={scrollPrev}
              className="p-1.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-1.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-1.5 ml-2">
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
          </div>

          <Link
            to="/announcements"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 group"
          >
            View all
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}