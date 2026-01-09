import { Calendar, MapPin, Clock, Bell, ChevronRight, ArrowRight } from "lucide-react";
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
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Digital Learning Workshop",
    date: "2025-01-25",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Leadership Excellence Series",
    date: "2025-02-01",
    time: "2:00 PM - 4:00 PM",
    location: "SEA Training Center",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
];

const announcements = [
  {
    id: "1",
    title: "Registration Open for Spring Programs",
    message: "Enroll now for our upcoming professional development courses starting February 2025.",
    isNew: true,
    date: "Jan 8, 2025",
  },
  {
    id: "2",
    title: "Campus Closure Notice - January 15",
    message: "SEA campus will be closed for scheduled maintenance.",
    isNew: false,
    date: "Jan 5, 2025",
  },
  {
    id: "3",
    title: "New Partnership Announcement",
    message: "SEA welcomes new institutional partners for the 2025 academic year.",
    isNew: true,
    date: "Jan 3, 2025",
  },
];

const nurseryNews = [
  {
    id: "1",
    title: "New Nursery Curriculum Framework Launched",
    excerpt: "Sharjah Nurseries introduces an enhanced early childhood curriculum focusing on play-based learning.",
    date: "2025-01-06",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Teacher Training Program for Early Childhood Educators",
    excerpt: "Professional development workshops for nursery staff across Sharjah.",
    date: "2025-01-02",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  },
];

export function PublicLanding() {
  const featuredNews = mockNews[0];
  const seaNews = mockNews.slice(1, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Banner */}
      {announcements[0]?.isNew && (
        <div className="bg-orange/10 border-b border-orange/20">
          <div className="container px-4 py-3">
            <div className="flex items-center justify-center gap-3 text-sm">
              <Bell className="h-4 w-4 text-orange" />
              <span className="font-medium">{announcements[0].title}:</span>
              <span className="text-muted-foreground hidden sm:inline">{announcements[0].message}</span>
              <Button variant="link" size="sm" className="text-orange p-0 h-auto">
                Learn more <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero - News Focused */}
      <section className="border-b">
        <div className="container px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Story */}
            {featuredNews && (
              <article className="lg:col-span-2 group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-4">
                  <img
                    src={featuredNews.imageUrl}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="bg-turquoise text-white border-0 mb-3">
                      {featuredNews.category}
                    </Badge>
                    <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
                      {featuredNews.title}
                    </h1>
                    <p className="text-white/80 hidden md:block line-clamp-2">{featuredNews.excerpt}</p>
                    <div className="flex items-center gap-3 mt-3 text-sm text-white/70">
                      <span>{featuredNews.author}</span>
                      <span>•</span>
                      <span>{new Date(featuredNews.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Announcements Sidebar */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-semibold">Announcements</h2>
              </div>
              <div className="space-y-3">
                {announcements.map((item) => (
                  <div 
                    key={item.id}
                    className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-2">
                      {item.isNew && (
                        <span className="shrink-0 h-2 w-2 mt-2 rounded-full bg-orange animate-pulse"></span>
                      )}
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">{item.message}</p>
                        <span className="text-xs text-muted-foreground/70 mt-2 block">{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View all announcements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEA News + Nurseries News */}
      <section className="py-10 md:py-14">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* SEA News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl md:text-2xl font-bold">SEA News</h2>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {seaNews.map((news) => (
                  <article key={news.id} className="group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-3">
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs">{news.category}</Badge>
                    <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors mb-1">
                      {news.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </article>
                ))}
              </div>
            </div>

            {/* Sharjah Nurseries News */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green/10 flex items-center justify-center">
                    <span className="text-green font-bold text-xs">SN</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold">Sharjah Nurseries</h2>
                </div>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {nurseryNews.map((news) => (
                  <article key={news.id} className="group cursor-pointer flex gap-4">
                    <div className="w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors mb-1">
                        {news.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
              <a href="https://sn.ac.ae" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Visit Sharjah Nurseries <ArrowRight className="h-3 w-3 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-10 md:py-14 bg-muted/30 border-y">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl font-bold">Upcoming Events</h2>
                <p className="text-sm text-muted-foreground">Workshops, conferences, and programs</p>
              </div>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View Calendar
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {upcomingEvents.map((event) => (
              <article 
                key={event.id}
                className="group cursor-pointer bg-card rounded-xl overflow-hidden border hover:shadow-md transition-all"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white rounded-lg px-3 py-2 text-center shadow-sm">
                    <span className="font-display text-xl font-bold text-primary block leading-none">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time.split(' - ')[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}