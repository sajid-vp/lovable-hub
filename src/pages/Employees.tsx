import { ArrowLeft, Users, Search, Plus, Mail, Building2, ChevronRight, Clock, Receipt, FileText, Plane, CreditCard, Award, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialFeed } from "@/components/dashboard/SocialFeed";
import { EmployeeSpotlight } from "@/components/dashboard/EmployeeSpotlight";
import { TeamBirthdays } from "@/components/dashboard/TeamBirthdays";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/contexts/AuthContext";

const services = [
  { id: "leave", title: "Leave", description: "Request time off", icon: Plane, href: "/leave", gradient: "from-[hsl(var(--teal))] to-[hsl(var(--turquoise))]", badge: 2 },
  { id: "claims", title: "Claims", description: "Submit expenses", icon: Receipt, href: "/claims", gradient: "from-primary to-[hsl(var(--light-blue))]" },
  { id: "letter", title: "Letters", description: "Request documents", icon: FileText, href: "/letters", gradient: "from-[hsl(var(--turquoise))] to-[hsl(var(--green))]" },
  { id: "timesheet", title: "Timesheet", description: "Log hours", icon: Clock, href: "/timesheet", gradient: "from-[hsl(var(--indigo))] to-[hsl(var(--lavender))]" },
  { id: "payslip", title: "Payslip", description: "View salary", icon: CreditCard, href: "/payslip", gradient: "from-[hsl(var(--cyan))] to-[hsl(var(--teal))]", badge: 1 },
  { id: "certificates", title: "Certificates", description: "Training records", icon: Award, href: "/certificates", gradient: "from-[hsl(var(--light-blue))] to-[hsl(var(--indigo))]" },
];

export default function Employees() {
  const { user } = useAuthContext();

  return (
    <div className="min-h-screen min-h-[100dvh] bg-background no-overscroll">
      {/* Subtle decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[hsl(var(--light-blue))]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-[hsl(var(--turquoise))]/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <main className="container max-w-6xl pt-safe pb-safe py-3 sm:py-6 px-3 sm:px-4 relative z-10 scroll-touch">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link 
              to="/" 
              className="p-2 rounded-xl bg-card border border-border shadow-sm 
                         hover:bg-[hsl(var(--light-blue))] hover:border-[hsl(var(--light-blue))]
                         hover:text-white active:scale-95 transition-all app-touch"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] shadow-md">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-foreground">Employees</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                    Connect with your colleagues, celebrate achievements, and stay updated
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Link to="/directory">
                <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Directory
                </Button>
              </Link>
              <Button size="sm" className="bg-gradient-to-r from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] hover:opacity-90 text-white shadow-md">
                <Plus className="h-4 w-4 sm:mr-1" />
                <span className="hidden sm:inline">New Post</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {/* Profile Card - Hero Style */}
          <section className="animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] p-4 sm:p-6 shadow-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
              
              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4">
                {/* Avatar */}
                <div className="relative">
                  <Avatar className="h-20 w-20 sm:h-24 sm:w-24 border-4 border-white/30 shadow-xl">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="text-xl sm:text-2xl font-bold bg-white/20 text-white">
                      {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-[hsl(var(--green))] border-3 border-white flex items-center justify-center shadow-md">
                    <BadgeCheck className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{user?.name || 'User'}</h2>
                  <p className="text-white/80 font-medium">{user?.role || 'Staff Member'}</p>
                  
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3">
                    <div className="flex items-center gap-1.5 text-white/90 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>{user?.email || 'email@sea.ac.ae'}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/90 text-sm">
                      <Building2 className="h-4 w-4" />
                      <span>{user?.department || 'Administration'}</span>
                    </div>
                  </div>
                </div>

                {/* View Profile Button */}
                <Link to="/profile">
                  <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                    View Profile
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="animate-fade-in" style={{ animationDelay: "50ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                Employee Services
              </h2>
              <div className="flex-1 h-[1.5px] bg-[hsl(var(--light-blue))]/50 rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {services.map((service, index) => (
                <Link
                  key={service.id}
                  to={service.href}
                  className="group relative flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] hover:shadow-lg hover:border-[hsl(var(--turquoise))]/50 active:scale-[0.97] transition-all duration-200 tap-highlight app-touch"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute -top-1.5 -right-1.5 h-5 min-w-5 px-1.5 rounded-full bg-gradient-to-r from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                      {service.badge}
                    </span>
                  )}
                  
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-foreground group-hover:text-[hsl(var(--teal))] transition-colors">
                      {service.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Social Feed */}
          <SocialFeed />
          
          {/* Spotlight + Birthdays */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2">
              <EmployeeSpotlight />
            </div>
            <div className="lg:col-span-1">
              <TeamBirthdays />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
