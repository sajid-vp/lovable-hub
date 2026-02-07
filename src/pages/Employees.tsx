import { ArrowLeft, Users, Search, Plus, Mail, Phone, MapPin, Building2, Calendar, Edit2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialFeed } from "@/components/dashboard/SocialFeed";
import { EmployeeSpotlight } from "@/components/dashboard/EmployeeSpotlight";
import { TeamBirthdays } from "@/components/dashboard/TeamBirthdays";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/contexts/AuthContext";

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
          {/* My Profile Section */}
          <section className="animate-fade-in">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                My Profile
              </h2>
              <div className="flex-1 h-[1.5px] bg-[hsl(var(--light-blue))]/50 rounded-full" />
            </div>

            {/* Profile Card */}
            <div className="relative p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Decorative gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--teal))] via-[hsl(var(--turquoise))] to-[hsl(var(--light-blue))]" />
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Avatar Section */}
                <div className="flex items-center sm:items-start gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] opacity-40 blur-sm" />
                    <Avatar className="relative h-16 w-16 sm:h-20 sm:w-20 border-2 border-background shadow-lg">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="text-lg sm:text-xl font-semibold bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white">
                        {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    {/* Status indicator */}
                    <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-[hsl(var(--green))] border-2 border-background shadow-sm" />
                  </div>
                  
                  <div className="sm:hidden">
                    <h3 className="font-semibold text-lg text-foreground">{user?.name || 'User'}</h3>
                    <p className="text-sm text-muted-foreground">{user?.role || 'Staff Member'}</p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 space-y-4">
                  {/* Name & Role - Desktop */}
                  <div className="hidden sm:block">
                    <h3 className="font-semibold text-xl text-foreground">{user?.name || 'User'}</h3>
                    <p className="text-sm text-muted-foreground">{user?.role || 'Staff Member'}</p>
                  </div>

                  {/* Contact Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* Email */}
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-muted/50 border border-border/50">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))]">
                        <Mail className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Email</p>
                        <p className="text-xs font-medium truncate">{user?.email || 'email@sea.ac.ae'}</p>
                      </div>
                    </div>

                    {/* Department */}
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-muted/50 border border-border/50">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary to-[hsl(var(--light-blue))]">
                        <Building2 className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Department</p>
                        <p className="text-xs font-medium truncate">{user?.department || 'Administration'}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-muted/50 border border-border/50">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-[hsl(var(--turquoise))] to-[hsl(var(--green))]">
                        <Phone className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Phone</p>
                        <p className="text-xs font-medium">+971 6 XXX XXXX</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-muted/50 border border-border/50">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-[hsl(var(--indigo))] to-[hsl(var(--lavender))]">
                        <MapPin className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Location</p>
                        <p className="text-xs font-medium">SEA Main Campus</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Edit Button */}
                <div className="flex sm:flex-col items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Edit2 className="h-4 w-4" />
                    <span className="sm:hidden lg:inline">Edit Profile</span>
                  </Button>
                </div>
              </div>
            </div>
          </section>

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
