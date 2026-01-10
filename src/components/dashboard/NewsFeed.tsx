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
      {/* iOS-style Section Header */}
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
        Latest News
      </h2>

      {/* iOS-style Category Pills */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              activeCategory === category
                ? "ios-pill-active"
                : "ios-pill"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* iOS Widget Container */}
      <div className="ios-widget p-4 relative">
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {(filteredNews.length > 0 ? filteredNews : mockNews).map((news) => (
              <div 
                key={news.id} 
                className="flex-[0_0_200px] sm:flex-[0_0_220px] min-w-0"
              >
                {/* News Card */}
                <div className="relative rounded-2xl bg-card border border-border/30 shadow-sm overflow-hidden group hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-3.5 flex-1 flex flex-col">
                    <p className="text-xs font-medium text-primary mb-1.5">
                      {new Date(news.date).toLocaleDateString("en-US", { 
                        day: "numeric", 
                        month: "short", 
                        year: "numeric" 
                      })}
                    </p>
                    <h3 className="font-semibold text-sm line-clamp-2 mb-2 leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
                      {news.excerpt}
                    </p>
                    <Link 
                      to={`/news/${news.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      Read more
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* iOS-style Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 ios-nav-btn"
        >
          <ChevronLeft className="h-5 w-5 text-muted-foreground" />
        </button>
        
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-all active:scale-95"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>

        {/* View All Link */}
        <div className="flex justify-end mt-4 pt-3 border-t border-border/30">
          <Link 
            to="/news" 
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            View all news
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}