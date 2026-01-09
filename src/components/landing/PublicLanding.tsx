import { Calendar, MapPin, Clock, ArrowRight, Bell, Sparkles, TrendingUp, Users } from "lucide-react";
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
    color: "bg-turquoise/20 text-turquoise border-turquoise/30",
  },
  {
    id: "2",
    title: "Digital Learning Workshop",
    date: "2025-01-25",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    type: "Workshop",
    color: "bg-lavender/20 text-lavender border-lavender/30",
  },
  {
    id: "3",
    title: "Leadership Excellence Series",
    date: "2025-02-01",
    time: "2:00 PM - 4:00 PM",
    location: "SEA Training Center",
    type: "Training",
    color: "bg-orange/20 text-orange border-orange/30",
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

const quickStats = [
  { icon: Users, label: "Educators", value: "2,500+", color: "text-turquoise" },
  { icon: TrendingUp, label: "Programs", value: "45+", color: "text-green" },
  { icon: Sparkles, label: "Workshops", value: "120+", color: "text-lavender" },
];

export function PublicLanding() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Gradient */}
      <div className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container px-4 py-12 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Welcome to SEA Portal
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Your gateway to professional excellence in education
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              {quickStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                  <stat.icon className="h-8 w-8 opacity-90" />
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 50C840 60 960 70 1080 65C1200 60 1320 40 1380 30L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" 
                  fill="hsl(var(--background))" />
          </svg>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - News */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-1 rounded-full gradient-secondary"></div>
                <h2 className="text-2xl font-bold">Latest News</h2>
              </div>
              <Button variant="ghost" size="sm" className="gap-1 hover:text-primary">
                View all <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Featured News Card */}
            {mockNews[0] && (
              <Card 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={mockNews[0].imageUrl}
                    alt={mockNews[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex gap-2 mb-2">
                      <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground">
                        {mockNews[0].category}
                      </Badge>
                      {mockNews[0].isPinned && (
                        <Badge className="bg-orange/90 text-white border-0">
                          ✨ Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{mockNews[0].title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{mockNews[0].excerpt}</p>
                  </div>
                </div>
              </Card>
            )}

            {/* News Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {mockNews.slice(1, 5).map((news, index) => (
                <Card 
                  key={news.id} 
                  className="group overflow-hidden border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-xs backdrop-blur-sm bg-white/90">
                        {news.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{news.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(news.date).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Announcements */}
            <Card className="overflow-hidden border-0 shadow-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardHeader className="pb-3 gradient-primary text-white">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Announcements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {announcements.map((announcement) => (
                  <div 
                    key={announcement.id}
                    className={`p-4 rounded-xl border-l-4 transition-all hover:scale-[1.02] cursor-pointer ${
                      announcement.type === 'success' 
                        ? 'bg-success/10 border-success' 
                        : announcement.type === 'warning'
                        ? 'bg-warning/10 border-warning'
                        : 'bg-primary/10 border-primary'
                    }`}
                  >
                    <h4 className="font-semibold text-sm mb-1">{announcement.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{announcement.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="overflow-hidden border-0 shadow-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardHeader className="pb-3 gradient-secondary text-white">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all hover:scale-[1.02] cursor-pointer group"
                  >
                    <Badge variant="outline" className={`mb-2 text-xs border ${event.color}`}>
                      {event.type}
                    </Badge>
                    <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <div className="space-y-1.5 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Quick Card */}
            <Card className="overflow-hidden border-0 shadow-lg animate-fade-in relative" style={{ animationDelay: "300ms" }}>
              <div className="absolute inset-0 gradient-accent opacity-90"></div>
              <CardContent className="p-6 relative text-white">
                <div className="absolute top-4 right-4 text-6xl opacity-20">💬</div>
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Contact us for inquiries about programs and registration.
                </p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:info@sea.ac.ae" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-lg">📧</span> info@sea.ac.ae
                  </a>
                  <a href="tel:+97165566778" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-lg">📞</span> +971 6 556 6778
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
