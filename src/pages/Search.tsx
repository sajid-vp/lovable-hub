import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search as SearchIcon, FileText, Newspaper, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageLayout } from "@/components/layouts/PageLayout";
import { mockNews } from "@/data/mockData";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "news" | "document" | "person";
  url: string;
}

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Mock search - in real app, this would call an API
    if (query) {
      const searchResults: SearchResult[] = mockNews
        .filter((news) =>
          news.title.toLowerCase().includes(query.toLowerCase()) ||
          news.excerpt.toLowerCase().includes(query.toLowerCase())
        )
        .map((news) => ({
          id: news.id,
          title: news.title,
          description: news.excerpt,
          type: "news" as const,
          url: `/news/${news.id}`,
        }));
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };

  const filteredResults = activeTab === "all" 
    ? results 
    : results.filter((r) => r.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "news":
        return Newspaper;
      case "document":
        return FileText;
      case "person":
        return Users;
      default:
        return FileText;
    }
  };

  return (
    <PageLayout title="Search Portal">
      {/* Search input */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="relative">
          <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for news, documents, people..."
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
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="document">Documents</TabsTrigger>
              <TabsTrigger value="person">People</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-4">
              {filteredResults.length > 0 ? (
                filteredResults.map((result) => {
                  const Icon = getTypeIcon(result.type);
                  return (
                    <Link key={result.id} to={result.url}>
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                              <Icon className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-medium hover:text-primary transition-colors">
                                  {result.title}
                                </h3>
                                <Badge variant="outline" className="text-xs capitalize">
                                  {result.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {result.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })
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
            Find news articles, documents, and colleagues
          </p>
        </div>
      )}
    </PageLayout>
  );
}
