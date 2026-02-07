import { ArrowLeft, Users, Search, Plus, Mail, Building2, Edit2, Clock, Receipt, FileText, Plane, CreditCard, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialFeed } from "@/components/dashboard/SocialFeed";
import { EmployeeSpotlight } from "@/components/dashboard/EmployeeSpotlight";
import { TeamBirthdays } from "@/components/dashboard/TeamBirthdays";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/contexts/AuthContext";

const services = [
  { id: "leave", title: "Leave Request", icon: Plane, href: "/leave", gradient: "from-[hsl(var(--teal))] to-[hsl(var(--turquoise))]" },
  { id: "claims", title: "Claims", icon: Receipt, href: "/claims", gradient: "from-primary to-[hsl(var(--light-blue))]" },
  { id: "letter", title: "Request Letter", icon: FileText, href: "/letters", gradient: "from-[hsl(var(--turquoise))] to-[hsl(var(--green))]" },
  { id: "timesheet", title: "Timesheet", icon: Clock, href: "/timesheet", gradient: "from-[hsl(var(--indigo))] to-[hsl(var(--lavender))]" },
  { id: "payslip", title: "Payslip", icon: CreditCard, href: "/payslip", gradient: "from-[hsl(var(--cyan))] to-[hsl(var(--teal))]" },
  { id: "certificates", title: "Certificates", icon: Award, href: "/certificates", gradient: "from-[hsl(var(--light-blue))] to-[hsl(var(--indigo))]" },
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
          {/* Back button and title row */}
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
            
            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <Link to="/directory">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex items-center gap-2"
                >
                  <Search className="h-4 w-4" />
                  Directory
                </Button>
              </Link>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] hover:opacity-90 text-white shadow-md"
              >
                <Plus className="h-4 w-4 sm:mr-1" />
                <span className="hidden sm:inline">New Post</span>
              </Button>
            </div>
          </div>
          
          {/* Mobile description */}
          <p className="text-sm text-muted-foreground sm:hidden px-1">
            Connect with colleagues and celebrate achievements
          </p>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {/* My Profile + Services Row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Compact Profile Card - 2/5 width */}
            <div className="lg:col-span-2">
              <section className="animate-fade-in h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                    My Profile
                  </h2>
                  <div className="flex-1 h-[1.5px] bg-[hsl(var(--light-blue))]/50 rounded-full" />
                </div>

                <div className="relative p-4 rounded-2xl bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] flex-1">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] opacity-40 blur-sm" />
                      <Avatar className="relative h-12 w-12 border-2 border-background shadow-md">
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback className="text-sm font-semibold bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white">
                          {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-[hsl(var(--green))] border-2 border-background" />
                    </div>
                    
                    {/* Name & Role */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-foreground truncate">{user?.name || 'User'}</h3>
                      <p className="text-xs text-muted-foreground truncate">{user?.role || 'Staff Member'}</p>
                    </div>

                    {/* Edit Button */}
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Quick Info */}
                  <div className="mt-3 pt-3 border-t border-border/50 grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Mail className="h-3.5 w-3.5 text-[hsl(var(--teal))]" />
                      <span className="truncate text-muted-foreground">{user?.email || 'email@sea.ac.ae'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Building2 className="h-3.5 w-3.5 text-primary" />
                      <span className="truncate text-muted-foreground">{user?.department || 'Administration'}</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Services Section - 3/5 width */}
            <div className="lg:col-span-3">
              <section className="animate-fade-in h-full flex flex-col" style={{ animationDelay: "50ms" }}>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                    Services
                  </h2>
                  <div className="flex-1 h-[1.5px] bg-[hsl(var(--light-blue))]/50 rounded-full" />
                </div>

                <div className="relative p-4 rounded-2xl bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] flex-1">
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                    {services.map((service, index) => (
                      <Link
                        key={service.id}
                        to={service.href}
                        className="group flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-card border border-border/50 hover:bg-muted/50 hover:border-border active:scale-[0.97] transition-all duration-150 tap-highlight app-touch"
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-105 transition-transform`}>
                          <service.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Social Feed - Full Width */}
          <SocialFeed />
          
          {/* Two Column Layout: Spotlight + Birthdays */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Employee Spotlight - Takes 2/3 */}
            <div className="lg:col-span-2">
              <EmployeeSpotlight />
            </div>
            
            {/* Team Birthdays - Takes 1/3 */}
            <div className="lg:col-span-1">
              <TeamBirthdays />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
