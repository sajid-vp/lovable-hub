import { Calendar, MapPin, Clock, ArrowRight, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockNews } from "@/data/mockData";

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Educators Conference 2025",
    date: "2025-02-15",
    time: "9:00 AM - 5:00 PM",
    location: "SEA Main Campus",
    type: "Conference",
  },
  {
    id: "2",
    title: "Digital Learning Workshop",
    date: "2025-01-25",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    type: "Workshop",
  },
  {
    id: "3",
    title: "Leadership Excellence Series",
    date: "2025-02-01",
    time: "2:00 PM - 4:00 PM",
    location: "SEA Training Center",
    type: "Training",
  },
];

const announcements = [
  {
    id: "1",
    title: "Registration Open for Spring Programs",
    message: "Enroll now for our upcoming professional development courses starting February 2025.",
    type: "success",
    date: "2025-01-09",
  },
  {
    id: "2",
    title: "Campus Closure Notice",
    message: "SEA campus will be closed on January 15th for scheduled maintenance.",
    type: "warning",
    date: "2025-01-08",
  },
];

export function PublicLanding() {
  return (
    <div className="container px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to SEA Portal</h1>
        <p className="text-muted-foreground">
          Stay updated with the latest news, events, and announcements from Sharjah Education Academy
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content - News */}
        <div className="lg:col-span-2 space-y-6">
          {/* Featured News */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Latest News</h2>
              <Button variant="ghost" size="sm" className="gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockNews.slice(0, 4).map((news, index) => (
                <Card 
                  key={news.id} 
                  className="group overflow-hidden hover:shadow-md transition-shadow cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-32 sm:h-auto overflow-hidden shrink-0">
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="flex-1 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {news.category}
                        </Badge>
                        {news.isPinned && (
                          <Badge variant="default" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                        {news.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>{news.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(news.date).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Announcements */}
          <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map((announcement) => (
                <div 
                  key={announcement.id}
                  className={`p-3 rounded-lg border-l-4 ${
                    announcement.type === 'success' 
                      ? 'bg-green-50 border-green-500 dark:bg-green-950/30' 
                      : announcement.type === 'warning'
                      ? 'bg-yellow-50 border-yellow-500 dark:bg-yellow-950/30'
                      : 'bg-blue-50 border-blue-500 dark:bg-blue-950/30'
                  }`}
                >
                  <h4 className="font-medium text-sm mb-1">{announcement.title}</h4>
                  <p className="text-xs text-muted-foreground">{announcement.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming Events
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="p-3 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <Badge variant="outline" className="mb-2 text-xs">
                    {event.type}
                  </Badge>
                  <h4 className="font-medium text-sm mb-2">{event.title}</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Quick Card */}
          <Card className="gradient-primary text-primary-foreground animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardContent className="p-5">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm opacity-90 mb-3">
                Contact us for inquiries about programs and registration.
              </p>
              <div className="text-sm space-y-1 opacity-90">
                <p>📧 info@sea.ac.ae</p>
                <p>📞 +971 6 XXX XXXX</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
