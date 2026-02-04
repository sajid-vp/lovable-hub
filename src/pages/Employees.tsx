import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialFeed } from "@/components/dashboard/SocialFeed";
import { EmployeeSpotlight } from "@/components/dashboard/EmployeeSpotlight";
import { TeamBirthdays } from "@/components/dashboard/TeamBirthdays";

export default function Employees() {
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
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Employees</h1>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {/* Social Feed - Full Width */}
          <SocialFeed />
          
          {/* Employee Spotlight - Full Width */}
          <EmployeeSpotlight />
          
          {/* Team Birthdays - Full Width */}
          <TeamBirthdays />
        </div>
      </main>
    </div>
  );
}
