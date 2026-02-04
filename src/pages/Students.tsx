import { ArrowLeft, Search, Calendar, Clock, FileText, User, BookOpen, GraduationCap, CalendarDays, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Mock student data
const mockStudents = [
  { id: "1", name: "Ahmed Al Mahmoud", program: "Education Leadership", year: "Year 3", avatar: "", status: "Active" },
  { id: "2", name: "Sara Al Khouri", program: "Early Childhood Education", year: "Year 2", avatar: "", status: "Active" },
  { id: "3", name: "Mohammed Hassan", program: "Special Education", year: "Year 4", avatar: "", status: "Active" },
  { id: "4", name: "Fatima Al Rashid", program: "Curriculum Design", year: "Year 1", avatar: "", status: "Active" },
  { id: "5", name: "Omar Al Suwaidi", program: "Educational Technology", year: "Year 2", avatar: "", status: "Active" },
];

// Quick access tiles
const quickAccessTiles = [
  { id: "1", title: "My Schedule", icon: Calendar, color: "bg-[hsl(var(--turquoise))]" },
  { id: "2", title: "Timetable", icon: Clock, color: "bg-[hsl(var(--indigo))]" },
  { id: "3", title: "Transcript", icon: FileText, color: "bg-[hsl(var(--coral))]" },
  { id: "4", title: "My Profile", icon: User, color: "bg-[hsl(var(--lavender))]" },
];

// Student resources
const studentResources = [
  { id: "1", title: "Learning Portal", description: "Access course materials and assignments", icon: BookOpen },
  { id: "2", title: "Academic Calendar", description: "View important dates and deadlines", icon: CalendarDays },
  { id: "3", title: "Exam Schedule", description: "Check upcoming examinations", icon: ClipboardList },
  { id: "4", title: "Graduation Requirements", description: "Track your progress towards graduation", icon: GraduationCap },
];

// Upcoming events for students
const studentEvents = [
  { id: "1", title: "Mid-term Examinations", date: "Feb 15-20, 2026", type: "Exam" },
  { id: "2", title: "Career Fair", date: "Feb 25, 2026", type: "Event" },
  { id: "3", title: "Registration Deadline", date: "Mar 1, 2026", type: "Deadline" },
  { id: "4", title: "Spring Break", date: "Mar 10-17, 2026", type: "Holiday" },
];

export default function Students() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = mockStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.program.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-background via-background to-[hsl(var(--turquoise))]/5 no-overscroll">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[hsl(var(--turquoise))]/8 to-[hsl(var(--teal))]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-br from-[hsl(var(--lavender))]/8 to-[hsl(var(--indigo))]/5 rounded-full blur-3xl" />
      </div>
      
      <main className="container max-w-6xl pt-safe pb-safe py-3 sm:py-6 px-3 sm:px-4 relative z-10 scroll-touch">
        {/* Header with back button */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <Link 
            to="/" 
            className="p-2 rounded-xl bg-card border border-border shadow-sm 
                       hover:bg-[hsl(var(--light-blue))] hover:border-[hsl(var(--light-blue))]
                       hover:text-white active:scale-95 transition-all app-touch"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Students</h1>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {/* Quick Access Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickAccessTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <button
                  key={tile.id}
                  className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-card
                             border border-border shadow-sm hover:shadow-lg
                             hover:bg-[hsl(var(--light-blue))] hover:border-[hsl(var(--light-blue))]
                             active:scale-[0.96] transition-all duration-150 app-touch"
                >
                  <div className={`p-2.5 rounded-xl ${tile.color} group-hover:bg-white/20 transition-colors`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-white transition-colors">
                    {tile.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Student Resources */}
          <Card className="bg-card border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[hsl(var(--turquoise))]">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <CardTitle className="text-base font-semibold">Student Resources</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {studentResources.map((resource) => {
                  const Icon = resource.icon;
                  return (
                    <button
                      key={resource.id}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted 
                                 border border-transparent hover:border-border transition-all text-left"
                    >
                      <div className="p-2 rounded-lg bg-[hsl(var(--turquoise))]/10 group-hover:bg-[hsl(var(--turquoise))]/20 transition-colors">
                        <Icon className="h-4 w-4 text-[hsl(var(--turquoise))]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{resource.title}</p>
                        <p className="text-xs text-muted-foreground truncate">{resource.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-card border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[hsl(var(--coral))]">
                  <CalendarDays className="h-4 w-4 text-white" />
                </div>
                <CardTitle className="text-base font-semibold">Upcoming Events</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {studentEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted 
                               border border-transparent hover:border-border transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--coral))]/10">
                        <Calendar className="h-4 w-4 text-[hsl(var(--coral))]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-[10px] ${
                        event.type === "Exam" ? "bg-[hsl(var(--coral))]/10 text-[hsl(var(--coral))]" :
                        event.type === "Deadline" ? "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]" :
                        event.type === "Holiday" ? "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]" :
                        "bg-[hsl(var(--indigo))]/10 text-[hsl(var(--indigo))]"
                      }`}
                    >
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Student Directory */}
          <Card className="bg-card border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[hsl(var(--indigo))]">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-base font-semibold">Student Directory</CardTitle>
                </div>
              </div>
              <div className="relative mt-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search students..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-muted/50 border-border"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted 
                               border border-transparent hover:border-border transition-all cursor-pointer"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback className="bg-[hsl(var(--indigo))]/10 text-[hsl(var(--indigo))] text-sm">
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{student.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {student.program} • {student.year}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]">
                      {student.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
