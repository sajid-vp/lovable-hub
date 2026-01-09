import { Calendar, MapPin, Clock, Bell, ChevronRight, ArrowRight, Users, BookOpen, Award, Building2 } from "lucide-react";
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
  { value: "2,500+", label: "Educators Trained", icon: Users },
  { value: "45+", label: "Programs Offered", icon: BookOpen },
  { value: "15+", label: "Years of Excellence", icon: Award },
  { value: "50+", label: "Partner Organizations", icon: Building2 },
];

export function PublicLanding() {
  const featuredNews = mockNews[0];
  const recentNews = mockNews.slice(1, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Width with Image */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&h=1080&fit=crop"
            alt="Education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <Badge className="mb-6 bg-white/20 text-white border-0 backdrop-blur-sm">
              Sharjah Education Academy
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Empowering Educators, Transforming Education
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
              Your gateway to professional development, educational resources, and the latest updates from Sharjah Education Academy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`py-10 text-center ${index !== stats.length - 1 ? 'border-r border-white/20' : ''}`}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                <div className="font-display text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Latest News</h2>
              <p className="text-muted-foreground">Stay updated with the latest from SEA</p>
            </div>
            <Button variant="outline" className="hidden md:flex rounded-full">
              View All News <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Article */}
            {featuredNews && (
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5">
                  <img
                    src={featuredNews.imageUrl}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <Badge className="bg-turquoise text-white border-0 mb-3">
                      {featuredNews.category}
                    </Badge>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                      {featuredNews.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-2 mb-3">{featuredNews.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{featuredNews.author}</span>
                  <span>•</span>
                  <span>{new Date(featuredNews.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </article>
            )}

            {/* Recent Articles */}
            <div className="space-y-6">
              {recentNews.map((news) => (
                <article key={news.id} className="group cursor-pointer flex gap-5">
                  <div className="w-32 h-24 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {news.category}
                    </Badge>
                    <h4 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors mb-1">
                      {news.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full mt-8 md:hidden rounded-full">
            View All News <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Join us at our upcoming programs and workshops</p>
            </div>
            <Button variant="outline" className="hidden md:flex rounded-full">
              View Calendar <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <article 
                key={event.id}
                className="group cursor-pointer bg-card rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex flex-col items-center justify-center">
                      <span className="font-display text-lg font-bold text-primary leading-none">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-xs text-primary uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Important Announcements
              </h2>
              <div className="space-y-4">
                {announcements.map((item) => (
                  <div 
                    key={item.id}
                    className="p-5 rounded-xl border bg-card hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                        <Bell className="h-5 w-5 text-orange" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          {item.isNew && (
                            <Badge className="bg-orange/10 text-orange border-0 text-xs">New</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop"
                alt="Campus"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <div className="font-display text-4xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=600&fit=crop"
            alt="Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="container px-4 relative z-10 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Explore our programs and take the next step in your educational career with Sharjah Education Academy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}