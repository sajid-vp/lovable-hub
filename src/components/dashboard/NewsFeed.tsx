import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { mockNews } from "@/data/mockData";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const categories = ["All", "Academics", "Nurseries", "Operations"];

export function NewsFeed() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Filter news based on category
  const filteredNews = activeCategory === "All" 
    ? mockNews 
    : mockNews.filter(news => 
        news.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        activeCategory === "Academics" && ["Programs", "Education", "Summit"].includes(news.category) ||
        activeCategory === "Nurseries" && news.title.toLowerCase().includes("nursery") ||
        activeCategory === "Operations" && ["Partnerships", "Events", "Initiatives"].includes(news.category)
      );

  // Reset carousel when category changes
  useEffect(() => {
    emblaApi?.scrollTo(0);
  }, [activeCategory, emblaApi]);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "150ms" }}>
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Latest News
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[hsl(var(--turquoise))]/50 via-[hsl(var(--teal))]/20 to-transparent rounded-full" />
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-[hsl(var(--light-blue))] text-white shadow-md"
                : "bg-card border border-border/50 text-muted-foreground hover:border-[hsl(var(--turquoise))]/50 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Glass Container */}
      <div className="relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--turquoise))]/50 to-transparent rounded-full" />

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {(filteredNews.length > 0 ? filteredNews : mockNews).map((news) => (
              <div 
                key={news.id} 
                className="flex-[0_0_280px] min-w-0"
              >
                {/* News Card */}
                <div className="relative rounded-2xl bg-background/80 border border-border/50 shadow-md overflow-hidden group hover:shadow-lg hover:border-[hsl(var(--turquoise))]/40 transition-all duration-300 h-full flex flex-col">
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
                  <div className="p-4 flex-1 flex flex-col">
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
                    <p className="text-xs text-muted-foreground line-clamp-3 mb-4 flex-1">
                      {news.excerpt}
                    </p>
                    <Link 
                      to={`/news/${news.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 group/link"
                    >
                      Read more
                      <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-muted-foreground" />
        </button>
        
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[hsl(var(--turquoise))] shadow-lg hover:bg-[hsl(var(--teal))] transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* View All Link */}
      <div className="flex justify-end mt-3">
        <Link 
          to="/news" 
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 group"
        >
          View all
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}