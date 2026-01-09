import { Calendar, MapPin, Clock, ArrowRight, Bell, Sparkles, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockNews } from "@/data/mockData";

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Educators Conference 2025",
    date: "2025-02-15",
    time: "9:00 AM",
    location: "SEA Main Campus",
    type: "Conference",
  },
  {
    id: "2",
    title: "Digital Learning Workshop",
    date: "2025-01-25",
    time: "10:00 AM",
    location: "Online",
    type: "Workshop",
  },
  {
    id: "3",
    title: "Leadership Excellence Series",
    date: "2025-02-01",
    time: "2:00 PM",
    location: "SEA Training Center",
    type: "Training",
  },
];

const announcements = [
  {
    id: "1",
    title: "Registration Open for Spring Programs",
    message: "Enroll now for our upcoming professional development courses.",
    isNew: true,
  },
  {
    id: "2",
    title: "Campus Closure Notice - Jan 15",
    message: "SEA campus closed for scheduled maintenance.",
    isNew: false,
  },
];

export function PublicLanding() {
  const featuredNews = mockNews[0];
  const recentNews = mockNews.slice(1, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header Banner */}
      <div className="border-b bg-card">
        <div className="container px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Good {getGreeting()}, <span className="text-gradient">Welcome back</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="container px-4 py-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Featured News - Large Card */}
          <div 
            className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer animate-fade-in"
          >
            <img
              src={featuredNews?.imageUrl}
              alt={featuredNews?.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-white/20 backdrop-blur-md text-white border-0 hover:bg-white/30">
                  {featuredNews?.category}
                </Badge>
                <Badge className="bg-primary text-primary-foreground border-0">
                  <Sparkles className="h-3 w-3 mr-1" /> Featured
                </Badge>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                {featuredNews?.title}
              </h2>
              <p className="text-white/70 text-sm line-clamp-2 mb-3">{featuredNews?.excerpt}</p>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>{featuredNews?.author}</span>
                <span>•</span>
                <span>{new Date(featuredNews?.date || '').toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Announcements Card */}
          <div 
            className="lg:col-span-2 rounded-3xl p-6 glass-card animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-2xl gradient-primary flex items-center justify-center">
                  <Bell className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Announcements</h3>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                View all <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-3">
              {announcements.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                >
                  {item.isNew && (
                    <span className="shrink-0 h-2 w-2 mt-2 rounded-full bg-primary animate-pulse"></span>
                  )}
                  {!item.isNew && <span className="shrink-0 h-2 w-2 mt-2"></span>}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.message}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Events Card */}
          <div 
            className="lg:col-span-2 rounded-3xl p-6 glass-card animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-2xl gradient-secondary flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Upcoming Events</h3>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                View all <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="shrink-0 w-48 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-all cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </div>
                  <h4 className="font-medium text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  <Badge variant="outline" className="text-xs">
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Recent News Cards */}
          {recentNews.map((news, index) => (
            <div 
              key={news.id}
              className="rounded-3xl overflow-hidden glass-card group cursor-pointer animate-fade-in hover:scale-[1.02] transition-transform"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="h-24 overflow-hidden">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">
                  {news.category}
                </Badge>
                <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(news.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}

          {/* Quick Links Card */}
          <div 
            className="rounded-3xl p-6 gradient-accent text-white animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <h3 className="font-semibold text-lg mb-4">Quick Access</h3>
            <div className="space-y-2">
              {[
                { label: "Programs", href: "#" },
                { label: "Resources", href: "#" },
                { label: "Contact Us", href: "#" },
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <span className="text-sm font-medium">{link.label}</span>
                  <ExternalLink className="h-4 w-4 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  return "Evening";
}
