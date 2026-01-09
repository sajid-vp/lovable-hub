import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockNews } from "@/data/mockData";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export function NewsFeed() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "150ms" }}>
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Latest News
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[hsl(var(--turquoise))]/50 via-[hsl(var(--teal))]/20 to-transparent rounded-full" />
        <Button variant="ghost" size="sm" asChild className="group hover:bg-[hsl(var(--turquoise))]/10">
          <Link to="/news" className="text-[hsl(var(--teal))] font-semibold text-xs">
            View all <ChevronRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Film Strip Container */}
      <div className="relative rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5 overflow-hidden">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--turquoise))]/50 to-transparent rounded-full z-10" />
        
        {/* Film strip perforations - top */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-foreground/10 to-transparent flex items-center justify-around px-4 z-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`top-${i}`} className="w-3 h-2 bg-background/40 rounded-sm" />
          ))}
        </div>
        
        {/* Film strip perforations - bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-foreground/10 to-transparent flex items-center justify-around px-4 z-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`bottom-${i}`} className="w-3 h-2 bg-background/40 rounded-sm" />
          ))}
        </div>

        <div className="py-8 px-4">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {mockNews.map((news, index) => (
                <Link 
                  key={news.id} 
                  to={`/news/${news.id}`} 
                  className="flex-[0_0_280px] min-w-0 group"
                >
                  <div className="relative h-44 rounded-lg overflow-hidden shadow-lg border-2 border-foreground/10 group-hover:border-[hsl(var(--turquoise))]/50 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Film frame number */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 rounded text-[10px] font-mono text-white/80">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm font-medium text-[10px] mb-2">
                        {news.category}
                      </Badge>
                      <h3 className="text-sm font-bold text-white drop-shadow-lg line-clamp-2 leading-tight">
                        {news.title}
                      </h3>
                      <p className="text-[10px] text-white/70 mt-1.5">
                        {new Date(news.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors border border-border/50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-1.5">
              {mockNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-[hsl(var(--teal))] w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-1.5"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={scrollNext}
              className="p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors border border-border/50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}