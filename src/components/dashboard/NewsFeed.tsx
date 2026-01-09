import { Link } from "react-router-dom";
import { Pin, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockNews } from "@/data/mockData";

export function NewsFeed() {
  const pinnedNews = mockNews.filter((n) => n.isPinned);
  const regularNews = mockNews.filter((n) => !n.isPinned);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Latest News</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/news" className="text-primary">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        {/* Pinned news - featured card */}
        {pinnedNews.map((news) => (
          <Link key={news.id} to={`/news/${news.id}`}>
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="gradient-accent text-accent-foreground border-0">
                      <Pin className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                    <Badge variant="secondary">{news.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{news.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {news.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                  <span>{news.author}</span>
                  <span>•</span>
                  <span>{new Date(news.date).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}

        {/* Regular news - compact list */}
        <div className="grid gap-3">
          {regularNews.slice(0, 3).map((news) => (
            <Link key={news.id} to={`/news/${news.id}`}>
              <Card className="flex overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex-1 p-3">
                  <Badge variant="outline" className="text-xs mb-1">
                    {news.category}
                  </Badge>
                  <h4 className="font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                    {news.excerpt}
                  </p>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {new Date(news.date).toLocaleDateString()}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
