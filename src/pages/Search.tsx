import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search as SearchIcon, FileText, Newspaper, Users, Calendar, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PageLayout } from "@/components/layouts/PageLayout";
import { mockNews, mockEvents, mockAnnouncements } from "@/data/mockData";
import { employees } from "@/data/employeeData";
import { format } from "date-fns";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "news" | "employee" | "event" | "announcement";
  url: string;
  meta?: {
    department?: string;
    date?: string;
    time?: string;
    location?: string;
    category?: string;
    avatar?: string;
    role?: string;
    announcementType?: "info" | "warning" | "success";
  };
}

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [activeTab, setActiveTab] = useState("all");

  // Unified search across all data sources
  const results = useMemo(() => {
    if (!query) return [];
    
    const lowerQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search employees
    employees.forEach((employee) => {
      const matches = 
        employee.name.toLowerCase().includes(lowerQuery) ||
        employee.role.toLowerCase().includes(lowerQuery) ||
        employee.department.toLowerCase().includes(lowerQuery) ||
        employee.email.toLowerCase().includes(lowerQuery);
      
      if (matches) {
        searchResults.push({
          id: employee.id,
          title: employee.name,
          description: employee.role,
          type: "employee",
          url: `/directory`,
          meta: {
            department: employee.department,
            avatar: employee.avatar,
            role: employee.role,
          },
        });
      }
    });

    // Search news
    mockNews.forEach((news) => {
      const matches =
        news.title.toLowerCase().includes(lowerQuery) ||
        news.excerpt.toLowerCase().includes(lowerQuery) ||
        news.category.toLowerCase().includes(lowerQuery);
      
      if (matches) {
        searchResults.push({
          id: news.id,
          title: news.title,
          description: news.excerpt,
          type: "news",
          url: `/news/${news.id}`,
          meta: {
            category: news.category,
            date: news.date,
          },
        });
      }
    });

    // Search events
    mockEvents.forEach((event) => {
      const matches =
        event.title.toLowerCase().includes(lowerQuery) ||
        event.location.toLowerCase().includes(lowerQuery);
      
      if (matches) {
        searchResults.push({
          id: event.id,
          title: event.title,
          description: event.location,
          type: "event",
          url: `/events`,
          meta: {
            date: event.date,
            time: event.time,
            location: event.location,
          },
        });
      }
    });

    // Search announcements
    mockAnnouncements.forEach((announcement) => {
      const matches =
        announcement.title.toLowerCase().includes(lowerQuery) ||
        announcement.message.toLowerCase().includes(lowerQuery);
      
      if (matches) {
        searchResults.push({
          id: announcement.id,
          title: announcement.title,
          description: announcement.message,
          type: "announcement",
          url: `/announcements`,
          meta: {
            announcementType: announcement.type as "info" | "warning" | "success",
            date: announcement.date,
          },
        });
      }
    });

    return searchResults;
  }, [query]);

  // Calculate counts per category
  const counts = useMemo(() => ({
    all: results.length,
    employee: results.filter((r) => r.type === "employee").length,
    news: results.filter((r) => r.type === "news").length,
    event: results.filter((r) => r.type === "event").length,
    announcement: results.filter((r) => r.type === "announcement").length,
  }), [results]);

  const filteredResults = activeTab === "all" 
    ? results 
    : results.filter((r) => r.type === activeTab);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
    setActiveTab("all");
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "news":
        return Newspaper;
      case "employee":
        return Users;
      case "event":
        return Calendar;
      case "announcement":
        return Bell;
      default:
        return FileText;
    }
  };

  const getAnnouncementBadgeVariant = (type?: string) => {
    switch (type) {
      case "warning":
        return "destructive";
      case "success":
        return "default";
      default:
        return "secondary";
    }
  };

  const renderResultCard = (result: SearchResult) => {
    const Icon = getTypeIcon(result.type);

    return (
      <Link key={`${result.type}-${result.id}`} to={result.url}>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              {result.type === "employee" && result.meta?.avatar ? (
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage src={result.meta.avatar} alt={result.title} />
                  <AvatarFallback>
                    {result.title.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-medium hover:text-primary transition-colors">
                    {result.title}
                  </h3>
                  <Badge variant="outline" className="text-xs capitalize">
                    {result.type}
                  </Badge>
                  {result.type === "announcement" && result.meta?.announcementType && (
                    <Badge 
                      variant={getAnnouncementBadgeVariant(result.meta.announcementType)} 
                      className="text-xs capitalize"
                    >
                      {result.meta.announcementType}
                    </Badge>
                  )}
                </div>
                
                {/* Type-specific metadata */}
                {result.type === "employee" && result.meta && (
                  <p className="text-sm text-muted-foreground">
                    {result.meta.role} • {result.meta.department}
                  </p>
                )}
                
                {result.type === "news" && result.meta && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    {result.meta.category && (
                      <Badge variant="secondary" className="text-xs">
                        {result.meta.category}
                      </Badge>
                    )}
                    {result.meta.date && (
                      <span>{format(new Date(result.meta.date), "MMM d, yyyy")}</span>
                    )}
                  </div>
                )}
                
                {result.type === "event" && result.meta && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {result.meta.date && (
                      <span>{format(new Date(result.meta.date), "MMM d, yyyy")}</span>
                    )}
                    {result.meta.time && <span>• {result.meta.time}</span>}
                    {result.meta.location && <span>• {result.meta.location}</span>}
                  </div>
                )}
                
                {result.type === "announcement" && result.meta?.date && (
                  <p className="text-sm text-muted-foreground mb-1">
                    {format(new Date(result.meta.date), "MMM d, yyyy")}
                  </p>
                )}

                {(result.type === "news" || result.type === "announcement") && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {result.description}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  };

  return (
    <PageLayout title="Search Portal">
      {/* Search input */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="relative">
          <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for news, people, events, announcements..."
            className="pl-12 h-12 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      {/* Results */}
      {query && (
        <>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 flex-wrap h-auto gap-1">
              <TabsTrigger value="all" className="gap-1">
                All <span className="text-xs opacity-70">({counts.all})</span>
              </TabsTrigger>
              {counts.employee > 0 && (
                <TabsTrigger value="employee" className="gap-1">
                  <Users className="h-3.5 w-3.5" />
                  People <span className="text-xs opacity-70">({counts.employee})</span>
                </TabsTrigger>
              )}
              {counts.news > 0 && (
                <TabsTrigger value="news" className="gap-1">
                  <Newspaper className="h-3.5 w-3.5" />
                  News <span className="text-xs opacity-70">({counts.news})</span>
                </TabsTrigger>
              )}
              {counts.event > 0 && (
                <TabsTrigger value="event" className="gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Events <span className="text-xs opacity-70">({counts.event})</span>
                </TabsTrigger>
              )}
              {counts.announcement > 0 && (
                <TabsTrigger value="announcement" className="gap-1">
                  <Bell className="h-3.5 w-3.5" />
                  Announcements <span className="text-xs opacity-70">({counts.announcement})</span>
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value={activeTab} className="space-y-4">
              {filteredResults.length > 0 ? (
                filteredResults.map(renderResultCard)
              ) : (
                <div className="text-center py-12">
                  <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No results found</h3>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your search terms or filters
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </>
      )}

      {!query && (
        <div className="text-center py-12">
          <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">Search the portal</h3>
          <p className="text-sm text-muted-foreground">
            Find news articles, employees, events, and announcements
          </p>
        </div>
      )}
    </PageLayout>
  );
}
