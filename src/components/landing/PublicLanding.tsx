import { Calendar, MapPin, Clock, Bell, ChevronRight, FileText, ExternalLink, BookOpen, Users, HelpCircle, Phone, ArrowRight, GraduationCap, Award, Building2 } from "lucide-react";
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

const quickLinks = [
  { icon: BookOpen, label: "Programs & Courses", href: "#", color: "bg-turquoise/10 text-turquoise" },
  { icon: FileText, label: "Forms & Documents", href: "#", color: "bg-orange/10 text-orange" },
  { icon: Users, label: "About SEA", href: "#", color: "bg-primary/10 text-primary" },
  { icon: HelpCircle, label: "FAQs", href: "#", color: "bg-lavender/10 text-lavender" },
  { icon: Phone, label: "Contact Us", href: "#", color: "bg-teal/10 text-teal" },
  { icon: ExternalLink, label: "SEA Main Website", href: "https://sea.ac.ae", color: "bg-indigo/10 text-indigo" },
];

const stats = [
  { value: "2,500+", label: "Educators Trained", icon: Users },
  { value: "45+", label: "Programs", icon: BookOpen },
  { value: "15+", label: "Years of Excellence", icon: Award },
  { value: "50+", label: "Partners", icon: Building2 },
];

const categoryColors: Record<string, string> = {
  "Programs": "bg-turquoise/10 text-turquoise border-turquoise/20",
  "Education": "bg-primary/10 text-primary border-primary/20",
  "Initiatives": "bg-orange/10 text-orange border-orange/20",
  "Partnerships": "bg-indigo/10 text-indigo border-indigo/20",
  "Events": "bg-coral/10 text-coral border-coral/20",
  "Summit": "bg-gold/10 text-gold border-gold/20",
};

export function PublicLanding() {
  const featuredNews = mockNews[0];
  const recentNews = mockNews.slice(1, 5);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/5 via-background to-turquoise/5">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-turquoise/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        </div>
        
        <div className="container px-4 py-12 md:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-0 px-3 py-1">
                <GraduationCap className="h-3 w-3 mr-1" />
                Sharjah Education Academy
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
                Empowering Educators,{" "}
                <span className="text-gradient">Transforming Education</span>
              </h1>
              <p className="text-muted-foreground mb-6 max-w-lg">
                Your gateway to professional development resources, latest news, programs, and events at Sharjah Education Academy.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full px-6">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-full px-6">
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-display text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Bar */}
      <section className="border-b bg-card">
        <div className="container px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            <span className="text-sm font-medium text-muted-foreground shrink-0">Quick Access:</span>
            <div className="flex gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 shrink-0 ${link.color}`}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 py-10 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl md:text-2xl font-bold">Latest News & Updates</h2>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            {/* Featured News */}
            {featuredNews && (
              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={featuredNews.imageUrl}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="md:w-3/5 p-5 md:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={categoryColors[featuredNews.category] || "bg-muted"}>
                        {featuredNews.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(featuredNews.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {featuredNews.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{featuredNews.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto self-start text-primary">
                      Read more <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* News Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {recentNews.map((news) => (
                <Card key={news.id} className="group cursor-pointer hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className={`text-xs ${categoryColors[news.category] || ""}`}>
                        {news.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Announcements */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-orange/10 flex items-center justify-center">
                    <Bell className="h-4 w-4 text-orange" />
                  </div>
                  <CardTitle className="text-base font-semibold">Announcements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {announcements.map((item) => (
                    <div 
                      key={item.id}
                      className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start gap-2">
                        {item.isNew && (
                          <span className="shrink-0 h-2 w-2 mt-1.5 rounded-full bg-orange animate-pulse"></span>
                        )}
                        <div className="min-w-0">
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{item.message}</p>
                          <span className="text-xs text-muted-foreground/70 mt-1 block">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Events */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-turquoise/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-turquoise" />
                  </div>
                  <CardTitle className="text-base font-semibold">Upcoming Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div 
                      key={event.id}
                      className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <div className="shrink-0 text-center w-12 py-2 rounded-lg bg-primary/5">
                        <div className="font-display text-lg font-bold text-primary leading-none">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {event.time.split(' - ')[0]}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span className="truncate">{event.location}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View all events
                </Button>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="gradient-accent text-white overflow-hidden">
              <CardContent className="p-5 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="font-display font-semibold mb-1">Need Assistance?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Our team is here to help with any inquiries.
                </p>
                <Button variant="secondary" size="sm" className="w-full bg-white text-primary hover:bg-white/90">
                  <Phone className="h-3 w-3 mr-2" />
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  );
}