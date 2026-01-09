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
          <TabsList className="bg-muted/70">
            <TabsTrigger value="news" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
              News
            </TabsTrigger>
            <TabsTrigger value="announcements" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
              Announcements
            </TabsTrigger>
          </TabsList>
          {activeTab === "news" && (
            <Button variant="ghost" size="sm" asChild className="group">
              <Link to="/news" className="text-primary">
                View all <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          )}
        </div>

        <TabsContent value="news" className="space-y-4 mt-0">
          {/* Pinned news - featured card */}
          {pinnedNews.map((news, index) => (
            <Link key={news.id} to={`/news/${news.id}`} className="block animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="gradient-accent text-white border-0 shadow-lg animate-pulse">
                        <Pin className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-0 backdrop-blur-sm">{news.category}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-white drop-shadow-lg">{news.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4 bg-gradient-to-r from-transparent to-primary/5">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">{news.author}</span>
                    <span>•</span>
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
            return (
              <Alert
                key={announcement.id}
                className={cn(
                  "border-l-4 animate-slide-in hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-x-1",
                  colorMap[announcement.type]
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-4 w-4 animate-pulse" />
                <AlertTitle className="text-sm font-medium">
                  {announcement.title}
                </AlertTitle>
                <AlertDescription className="text-xs mt-1">
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
