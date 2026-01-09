import { Calendar, MapPin, Clock, ArrowRight, Bell, ChevronRight, Users, BookOpen, Award, GraduationCap, Building2, Briefcase, UserCheck, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    message: "SEA welcomes new partners for the 2025 academic year.",
    isNew: true,
  },
];

const stats = [
  { icon: Users, value: "2,500+", label: "Educators Trained" },
  { icon: BookOpen, value: "45+", label: "Programs Offered" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Building2, value: "50+", label: "Partner Organizations" },
];

const quickAccess = [
  { 
    icon: GraduationCap, 
    title: "Students & Applicants", 
    description: "Explore programs, apply online, and track your application status",
    link: "#programs",
    color: "bg-accent-turquoise/10 text-accent-turquoise"
  },
  { 
    icon: Briefcase, 
    title: "Vendors & Partners", 
    description: "Collaboration opportunities, procurement, and partnership inquiries",
    link: "#partners",
    color: "bg-accent-orange/10 text-accent-orange"
  },
  { 
    icon: UserCheck, 
    title: "Staff Login", 
    description: "Access the internal portal for employees and faculty members",
    link: "#staff",
    color: "bg-primary/10 text-primary"
  },
  { 
    icon: Mail, 
    title: "General Inquiries", 
    description: "Contact us for information, support, or general questions",
    link: "#contact",
    color: "bg-accent-lavender/10 text-accent-lavender"
  },
];

export function PublicLanding() {
  const featuredNews = mockNews[0];
  const recentNews = mockNews.slice(1, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent-turquoise/5">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-turquoise/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-0 px-4 py-1.5">
              Sharjah Education Academy Portal
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Gateway to{" "}
              <span className="text-gradient">Educational Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Welcome to the Sharjah Education Academy — connecting students, educators, 
              partners, and visitors with resources, programs, and opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="container px-4 -mt-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickAccess.map((item) => (
            <Card 
              key={item.title} 
              className="group cursor-pointer hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-5">
                <div className={`h-12 w-12 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y bg-muted/30 mt-16">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 text-center">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-display text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold">Latest News & Updates</h2>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                View all <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* Featured Article */}
            {featuredNews && (
              <article className="group mb-8 cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-4">
                  <img
                    src={featuredNews.imageUrl}
                    alt={featuredNews.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="secondary">{featuredNews.category}</Badge>
                    <span>•</span>
                    <span>{new Date(featuredNews.date).toLocaleDateString('en-US', { 
                      month: 'long', day: 'numeric', year: 'numeric' 
                    })}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">{featuredNews.excerpt}</p>
                </div>
              </article>
            )}

            {/* Article Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {recentNews.map((news) => (
                <article key={news.id} className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl mb-3">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <Badge variant="outline" className="mb-2 text-xs">{news.category}</Badge>
                  <h4 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Announcements */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Bell className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold">Announcements</h3>
              </div>
              <div className="space-y-4">
                {announcements.map((item) => (
                  <div 
                    key={item.id}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-2">
                      {item.isNew && (
                        <span className="shrink-0 h-2 w-2 mt-1.5 rounded-full bg-primary animate-pulse"></span>
                      )}
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl gradient-secondary flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold">Upcoming Events</h3>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="flex gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="shrink-0 text-center">
                      <div className="font-display text-2xl font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                    <div className="min-w-0">
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
              <Button variant="outline" className="w-full mt-4 rounded-xl">
                View all events
              </Button>
            </div>

            {/* CTA Card */}
            <div className="rounded-2xl gradient-accent p-6 text-white">
              <h3 className="font-display text-lg font-semibold mb-2">Need Assistance?</h3>
              <p className="text-sm opacity-90 mb-4">
                Whether you're a student, partner, or visitor — we're here to help.
              </p>
              <Button variant="secondary" className="w-full rounded-xl bg-white text-primary hover:bg-white/90">
                Get in Touch
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}