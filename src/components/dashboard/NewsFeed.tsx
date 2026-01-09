import { Link } from "react-router-dom";
import { Pin, ChevronRight, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockNews } from "@/data/mockData";

export function NewsFeed() {
  const pinnedNews = mockNews.filter((n) => n.isPinned);
  const regularNews = mockNews.filter((n) => !n.isPinned);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "150ms" }}>
      {/* Enhanced Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-[hsl(var(--turquoise))]/20 to-[hsl(var(--teal))]/10 flex items-center justify-center">
          <Newspaper className="h-3 w-3 text-[hsl(var(--teal))]" />
        </div>
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

      {/* Glass Container */}
      <div className="relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--turquoise))]/50 to-transparent rounded-full" />

        <div className="space-y-4">
          {/* Pinned news - featured card */}
          {pinnedNews.map((news, index) => (
            <Link key={news.id} to={`/news/${news.id}`} className="block animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 bg-background/80">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--yellow))] text-white border-0 shadow-lg shadow-[hsl(var(--gold))]/30 font-bold">
                        <Pin className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm font-medium">{news.category}</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-white drop-shadow-lg line-clamp-2">{news.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4 bg-gradient-to-r from-[hsl(var(--turquoise))]/5 via-transparent to-[hsl(var(--light-blue))]/5">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{news.author}</span>
                    <span className="text-[hsl(var(--turquoise))]">•</span>
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}

          {/* Regular news - compact list */}
          <div className="grid gap-3">
            {regularNews.slice(0, 3).map((news, index) => (
              <Link key={news.id} to={`/news/${news.id}`} className="block animate-slide-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <Card className="flex overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/30 hover:border-[hsl(var(--turquoise))]/40 bg-background/60">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden relative">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[hsl(var(--turquoise))]/0 group-hover:bg-[hsl(var(--turquoise))]/10 transition-colors" />
                  </div>
                  <CardContent className="flex-1 p-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(var(--turquoise))]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Badge variant="outline" className="text-[10px] mb-1.5 relative z-10 border-[hsl(var(--turquoise))]/30">
                      {news.category}
                    </Badge>
                    <h4 className="font-semibold text-sm line-clamp-1 group-hover:text-[hsl(var(--teal))] transition-colors relative z-10">
                      {news.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-1 relative z-10">
                      {news.excerpt}
                    </p>
                    <span className="text-[10px] text-muted-foreground/70 mt-1.5 block relative z-10">
                      {new Date(news.date).toLocaleDateString()}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
