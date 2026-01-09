import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockNews } from "@/data/mockData";

export function PublicNews() {
  const displayedNews = mockNews.slice(0, 3);

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest News</h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest from Sharjah Education Academy
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {displayedNews.map((news, index) => (
            <article
              key={news.id}
              className="group bg-card rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <Badge variant="secondary" className="mb-3">
                  {news.category}
                </Badge>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{news.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(news.date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
