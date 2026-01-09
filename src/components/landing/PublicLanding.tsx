import { Calendar, MapPin, Clock, Bell, ChevronRight, FileText, ExternalLink, BookOpen, Users, HelpCircle, Phone } from "lucide-react";
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
  { icon: BookOpen, label: "Programs & Courses", href: "#" },
  { icon: FileText, label: "Forms & Documents", href: "#" },
  { icon: Users, label: "About SEA", href: "#" },
  { icon: HelpCircle, label: "FAQs", href: "#" },
  { icon: Phone, label: "Contact Us", href: "#" },
  { icon: ExternalLink, label: "SEA Main Website", href: "#" },
];

export function PublicLanding() {
  const recentNews = mockNews.slice(0, 4);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header Banner */}
      <div className="bg-primary text-primary-foreground">
        <div className="container px-4 py-3">
          <p className="text-sm text-center">
            Welcome to the Sharjah Education Academy Portal — Your gateway to resources, news, and events.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-6 md:py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Left Column - Quick Links */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="space-y-1">
                  {quickLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm hover:bg-muted transition-colors group"
                    >
                      <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                      <span className="group-hover:text-primary transition-colors">{link.label}</span>
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - News */}
          <div className="lg:col-span-2 space-y-6">
            {/* Announcements Banner */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Bell className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">Latest Announcement</span>
                      <Badge variant="secondary" className="text-xs">New</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{announcements[0].message}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0">
                    View all
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* News Section */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold">Latest News</CardTitle>
                  <Button variant="link" size="sm" className="text-muted-foreground p-0 h-auto">
                    View all <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {recentNews.map((news, index) => (
                    <article 
                      key={news.id} 
                      className={`flex gap-4 cursor-pointer group ${index !== recentNews.length - 1 ? 'pb-4 border-b' : ''}`}
                    >
                      <div className="w-20 h-20 shrink-0 overflow-hidden rounded-md bg-muted">
                        <img
                          src={news.imageUrl}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">{news.category}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {news.title}
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Events & Announcements */}
          <div className="lg:col-span-1 space-y-6">
            {/* Events */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <CardTitle className="text-base font-semibold">Upcoming Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={event.id}
                      className={`cursor-pointer group ${index !== upcomingEvents.length - 1 ? 'pb-4 border-b' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-center shrink-0 w-10">
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
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View all events
                </Button>
              </CardContent>
            </Card>

            {/* Announcements List */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-primary" />
                  <CardTitle className="text-base font-semibold">Announcements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {announcements.map((item) => (
                    <div 
                      key={item.id}
                      className="cursor-pointer group"
                    >
                      <div className="flex items-start gap-2">
                        {item.isNew && (
                          <span className="shrink-0 h-2 w-2 mt-1.5 rounded-full bg-primary"></span>
                        )}
                        <div className="min-w-0">
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <h3 className="font-medium text-sm mb-1">Need Help?</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Contact our support team for assistance.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Phone className="h-3 w-3 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}