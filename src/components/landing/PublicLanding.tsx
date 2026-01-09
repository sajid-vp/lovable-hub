import { Calendar, MapPin, Clock, ArrowRight, Bell, ChevronRight, Users, BookOpen, Award, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockNews } from "@/data/mockData";

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Educators Conference 2025",
    date: "2025-02-15",
    time: "9:00 AM - 5:00 PM",
    location: "SEA Main Campus",
  },
  {
    id: "2",
    title: "Digital Learning Workshop",
    date: "2025-01-25",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
  },
  {
    id: "3",
    title: "Leadership Excellence Series",
    date: "2025-02-01",
    time: "2:00 PM - 4:00 PM",
    location: "SEA Training Center",
  },
];

const announcements = [
  {
    id: "1",
    title: "Registration Open for Spring Programs",
    message: "Enroll now for our upcoming professional development courses starting February 2025.",
    isNew: true,
  },
  {
    id: "2",
    title: "Campus Closure Notice - January 15",
    message: "SEA campus will be closed for scheduled maintenance.",
    isNew: false,
  },
  {
    id: "3",
    title: "New Partnership Announcement",
    message: "SEA welcomes new institutional partners for the 2025 academic year.",
    isNew: true,
  },
];

const stats = [
  { icon: Users, value: "2,500+", label: "Educators Trained" },
  { icon: BookOpen, value: "45+", label: "Programs Offered" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Building2, value: "50+", label: "Partner Organizations" },
];

export function PublicLanding() {
  const featuredNews = mockNews[0];
  const recentNews = mockNews.slice(1, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-turquoise/5"></div>
        <div className="container px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Sharjah Education Academy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Advancing educational excellence through professional development, 
              research, and innovative learning programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-muted/40 border-b">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`py-8 text-center ${index !== stats.length - 1 ? 'border-r border-border/50' : ''}`}
              >
                <stat.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                <div className="font-display text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl md:text-2xl font-semibold">Latest News</h2>
              <Button variant="link" className="text-muted-foreground hover:text-primary p-0">
                View all <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* Featured Article */}
            {featuredNews && (
              <article className="group mb-8 cursor-pointer">
                <div className="relative aspect-[2/1] overflow-hidden rounded-lg mb-4">
                  <img
                    src={featuredNews.imageUrl}
                    alt={featuredNews.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-foreground hover:bg-white mb-2">
                      {featuredNews.category}
                    </Badge>
                  </div>
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {featuredNews.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{featuredNews.excerpt}</p>
                <span className="text-xs text-muted-foreground">
                  {new Date(featuredNews.date).toLocaleDateString('en-US', { 
                    month: 'long', day: 'numeric', year: 'numeric' 
                  })}
                </span>
              </article>
            )}

            {/* Article List */}
            <div className="space-y-6 border-t pt-6">
              {recentNews.map((news) => (
                <article key={news.id} className="group cursor-pointer flex gap-4">
                  <div className="w-24 h-24 shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge variant="outline" className="mb-1.5 text-xs">{news.category}</Badge>
                    <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Announcements */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bell className="h-4 w-4 text-primary" />
                <h3 className="font-display text-lg font-semibold">Announcements</h3>
              </div>
              <div className="space-y-3">
                {announcements.map((item) => (
                  <div 
                    key={item.id}
                    className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-2">
                      {item.isNew && (
                        <span className="shrink-0 h-2 w-2 mt-1.5 rounded-full bg-primary"></span>
                      )}
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-4 w-4 text-primary" />
                <h3 className="font-display text-lg font-semibold">Upcoming Events</h3>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="flex gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="shrink-0 text-center w-12">
                      <div className="font-display text-xl font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View all events
              </Button>
            </div>

            {/* Contact CTA */}
            <div className="rounded-lg bg-primary p-6 text-primary-foreground">
              <h3 className="font-display font-semibold mb-2">Get in Touch</h3>
              <p className="text-sm opacity-90 mb-4">
                Have questions? We're here to help with inquiries and support.
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                Contact Us
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}