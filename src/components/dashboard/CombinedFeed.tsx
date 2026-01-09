import { useState } from "react";
import { Link } from "react-router-dom";
import { Pin, ChevronRight, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { mockNews, mockAnnouncements } from "@/data/mockData";
import { cn } from "@/lib/utils";

const iconMap = {
  info: Info,
  warning: AlertCircle,
  success: CheckCircle,
};

const colorMap = {
  info: "border-secondary bg-secondary/10 text-secondary",
  warning: "border-warning bg-warning/10 text-warning",
  success: "border-success bg-success/10 text-success",
};

export function CombinedFeed() {
  const [activeTab, setActiveTab] = useState("news");
  const pinnedNews = mockNews.filter((n) => n.isPinned);
  const regularNews = mockNews.filter((n) => !n.isPinned);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "150ms" }}>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-4">
          <TabsList className="bg-muted/70 p-1 rounded-xl">
            <TabsTrigger 
              value="news" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--turquoise))] data-[state=active]:to-[hsl(var(--teal))] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all rounded-lg px-4"
            >
              News
            </TabsTrigger>
            <TabsTrigger 
              value="announcements" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[hsl(var(--coral))] data-[state=active]:to-[hsl(var(--orange))] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all rounded-lg px-4"
            >
              Announcements
            </TabsTrigger>
          </TabsList>
          {activeTab === "news" && (
            <Button variant="ghost" size="sm" asChild className="group hover:bg-[hsl(var(--turquoise))]/10">
              <Link to="/news" className="text-[hsl(var(--teal))] font-semibold">
                View all <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          )}
        </div>

        <TabsContent value="news" className="space-y-4 mt-0">
          {/* Pinned news - featured card */}
          {pinnedNews.map((news, index) => (
            <Link key={news.id} to={`/news/${news.id}`} className="block animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--yellow))] text-white border-0 shadow-lg shadow-[hsl(var(--gold))]/30 animate-pulse font-bold">
                        <Pin className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm font-medium">{news.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{news.title}</h3>
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
                <Card className="flex overflow-hidden group hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden relative">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                  </div>
                  <CardContent className="flex-1 p-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Badge variant="outline" className="text-xs mb-1 relative z-10">
                      {news.category}
                    </Badge>
                    <h4 className="font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors relative z-10">
                      {news.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-1 relative z-10">
                      {news.excerpt}
                    </p>
                    <span className="text-xs text-muted-foreground mt-1 block relative z-10">
                      {new Date(news.date).toLocaleDateString()}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-3 mt-0">
          {mockAnnouncements.map((announcement, index) => {
            const Icon = iconMap[announcement.type];
            const gradientColors = {
              info: "from-[hsl(var(--light-blue))]/20 to-[hsl(var(--turquoise))]/10 border-l-[hsl(var(--turquoise))]",
              warning: "from-[hsl(var(--orange))]/20 to-[hsl(var(--gold))]/10 border-l-[hsl(var(--orange))]",
              success: "from-[hsl(var(--green))]/20 to-[hsl(var(--teal))]/10 border-l-[hsl(var(--green))]",
            };
            const iconColors = {
              info: "text-[hsl(var(--turquoise))]",
              warning: "text-[hsl(var(--orange))]",
              success: "text-[hsl(var(--green))]",
            };
            return (
              <Alert
                key={announcement.id}
                className={cn(
                  "border-l-4 animate-slide-in hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-x-1 bg-gradient-to-r border-0",
                  gradientColors[announcement.type]
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className={cn("h-4 w-4 animate-pulse", iconColors[announcement.type])} />
                <AlertTitle className="text-sm font-bold">
                  {announcement.title}
                </AlertTitle>
                <AlertDescription className="text-xs mt-1 text-muted-foreground">
                  {announcement.message}
                </AlertDescription>
              </Alert>
            );
          })}
        </TabsContent>
      </Tabs>
    </section>
  );
}
