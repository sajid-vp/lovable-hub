import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
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
      <div className="relative">
        {/* Left Film Perforation Strip */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[hsl(var(--teal))]/20 to-transparent z-10 flex flex-col items-center justify-around py-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`left-${i}`} className="w-3 h-4 bg-background/60 rounded-sm border border-[hsl(var(--teal))]/30" />
          ))}
        </div>

        {/* Right Film Perforation Strip */}
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[hsl(var(--teal))]/20 to-transparent z-10 flex flex-col items-center justify-around py-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`right-${i}`} className="w-3 h-4 bg-background/60 rounded-sm border border-[hsl(var(--teal))]/30" />
          ))}
        </div>

        {/* Glass Container */}
        <div className="relative rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5 overflow-hidden mx-4">
          {/* Top gradient accent */}
          <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--turquoise))]/50 to-transparent rounded-full z-10" />

          <div className="py-5 px-4">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {mockNews.map((news) => (
                  <div 
                    key={news.id} 
                    className="flex-[0_0_280px] min-w-0"
                  >
                    {/* News Card - matching other dashboard cards */}
                    <div className="relative rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-md overflow-hidden group hover:shadow-lg hover:border-[hsl(var(--turquoise))]/40 transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={news.imageUrl}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Decorative corner accent */}
                        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[hsl(var(--turquoise))]/50 rounded-tr-lg" />
                        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[hsl(var(--turquoise))]/50 rounded-bl-lg" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <p className="text-sm font-medium text-[hsl(var(--teal))] mb-2">
                          {new Date(news.date).toLocaleDateString("en-US", { 
                            day: "numeric", 
                            month: "long", 
                            year: "numeric" 
                          })}
                        </p>
                        <h3 className="font-bold text-sm line-clamp-2 mb-2 group-hover:text-[hsl(var(--teal))] transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-3 mb-4">
                          {news.excerpt}
                        </p>
                        <Link 
                          to={`/news/${news.id}`}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[hsl(var(--light-blue))]/80 hover:bg-[hsl(var(--light-blue))] text-white text-xs font-semibold transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-muted-foreground" />
        </button>
        
        <button
          onClick={scrollNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[hsl(var(--turquoise))] shadow-lg hover:bg-[hsl(var(--teal))] transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* View All Link */}
      <div className="flex justify-end mt-3">
        <Link 
          to="/news" 
          className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
        >
          View all
        </Link>
      </div>
    </section>
  );
}