import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockNews } from "@/data/mockData";

export function PublicNews() {
  const displayedNews = mockNews.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Updates</h2>
            <p className="text-muted-foreground">Stay informed with company news and announcements</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link to="/login">
              Sign in to read more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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

        <div className="mt-8 text-center md:hidden">
          <Button asChild>
            <Link to="/login">
              Sign in to read more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
