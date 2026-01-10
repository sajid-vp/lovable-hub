import { useMemo, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Newspaper, Users, Calendar, Bell, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockNews, mockEvents, mockAnnouncements } from "@/data/mockData";
import { employees } from "@/data/employeeData";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: "news" | "employee" | "event" | "announcement";
  url: string;
  avatar?: string;
}

interface SearchDropdownProps {
  query: string;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: () => void;
  className?: string;
  variant?: "default" | "banner";
}

export function SearchDropdown({ 
  query, 
  isOpen, 
  onClose, 
  onNavigate,
  className,
  variant = "default"
}: SearchDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Search results
  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    
    const lowerQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];
    const maxPerCategory = 3;

    // Search employees
    let count = 0;
    for (const employee of employees) {
      if (count >= maxPerCategory) break;
      if (
        employee.name.toLowerCase().includes(lowerQuery) ||
        employee.role.toLowerCase().includes(lowerQuery) ||
        employee.department.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          id: employee.id,
          title: employee.name,
          subtitle: `${employee.role} • ${employee.department}`,
          type: "employee",
          url: `/directory`,
          avatar: employee.avatar,
        });
        count++;
      }
    }

    // Search news
    count = 0;
    for (const news of mockNews) {
      if (count >= maxPerCategory) break;
      if (
        news.title.toLowerCase().includes(lowerQuery) ||
        news.excerpt.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          id: news.id,
          title: news.title,
          subtitle: news.category,
          type: "news",
          url: `/news/${news.id}`,
        });
        count++;
      }
    }

    // Search events
    count = 0;
    for (const event of mockEvents) {
      if (count >= maxPerCategory) break;
      if (
        event.title.toLowerCase().includes(lowerQuery) ||
        event.location.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          id: event.id,
          title: event.title,
          subtitle: event.location,
          type: "event",
          url: `/events`,
        });
        count++;
      }
    }

    // Search announcements
    count = 0;
    for (const announcement of mockAnnouncements) {
      if (count >= maxPerCategory) break;
      if (
        announcement.title.toLowerCase().includes(lowerQuery) ||
        announcement.message.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          id: announcement.id,
          title: announcement.title,
          subtitle: announcement.message.slice(0, 50) + "...",
          type: "announcement",
          url: `/announcements`,
        });
        count++;
      }
    }

    return searchResults;
  }, [query]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "news": return Newspaper;
      case "employee": return Users;
      case "event": return Calendar;
      case "announcement": return Bell;
      default: return Search;
    }
  };

  const handleResultClick = () => {
    onClose();
    onNavigate();
  };

  const handleViewAll = () => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
    onClose();
    onNavigate();
  };

  if (!isOpen || !query || query.length < 2) return null;

  const isBanner = variant === "banner";

  return (
    <div
      ref={dropdownRef}
      className={cn(
        "absolute top-full mt-2 w-full min-w-[280px] max-w-md rounded-xl shadow-xl border z-50",
        isBanner 
          ? "bg-white/95 backdrop-blur-md border-white/30 text-foreground" 
          : "bg-popover border-border",
        className
      )}
    >
      {results.length > 0 ? (
        <>
          <ScrollArea className="max-h-[320px]">
            <div className="p-2">
              {results.map((result) => {
                const Icon = getTypeIcon(result.type);
                return (
                  <Link
                    key={`${result.type}-${result.id}`}
                    to={result.url}
                    onClick={handleResultClick}
                    className={cn(
                      "flex items-center gap-3 p-2.5 rounded-lg transition-colors",
                      isBanner 
                        ? "hover:bg-black/5" 
                        : "hover:bg-accent"
                    )}
                  >
                    {result.type === "employee" && result.avatar ? (
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src={result.avatar} alt={result.title} />
                        <AvatarFallback className="text-xs">
                          {result.title.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className={cn(
                        "h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0",
                        isBanner ? "bg-black/5" : "bg-muted"
                      )}>
                        <Icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm truncate">
                          {result.title}
                        </span>
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "text-[10px] capitalize flex-shrink-0",
                            isBanner && "border-black/10"
                          )}
                        >
                          {result.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {result.subtitle}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollArea>
          
          <div className={cn(
            "p-2 border-t",
            isBanner ? "border-black/10" : "border-border"
          )}>
            <button
              onClick={handleViewAll}
              className={cn(
                "w-full flex items-center justify-center gap-2 p-2.5 rounded-lg text-sm font-medium transition-colors",
                isBanner 
                  ? "hover:bg-black/5 text-primary" 
                  : "hover:bg-accent text-primary"
              )}
            >
              View all results
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </>
      ) : (
        <div className="p-6 text-center">
          <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            No results found for "{query}"
          </p>
        </div>
      )}
    </div>
  );
}
