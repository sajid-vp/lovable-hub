import { ArrowLeft, Users, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialFeed } from "@/components/dashboard/SocialFeed";
import { EmployeeSpotlight } from "@/components/dashboard/EmployeeSpotlight";
import { TeamBirthdays } from "@/components/dashboard/TeamBirthdays";
import { Button } from "@/components/ui/button";

export default function Employees() {
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
