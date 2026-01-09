import { useAuthContext } from "@/contexts/AuthContext";
import { PublicHeader } from "@/components/landing/PublicHeader";
import { PublicLanding } from "@/components/landing/PublicLanding";
import { PublicFooter } from "@/components/landing/PublicFooter";
import { FloatingControls } from "@/components/dashboard/FloatingControls";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { Apps } from "@/components/dashboard/Apps";
import { QuickLinks } from "@/components/dashboard/QuickLinks";
import { CombinedFeed } from "@/components/dashboard/CombinedFeed";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { TeamBirthdays } from "@/components/dashboard/TeamBirthdays";

export default function Index() {
  const { isAuthenticated } = useAuthContext();

  // Public landing page for visitors
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <PublicHeader />
        <main className="flex-1">
          <PublicLanding />
        </main>
        <PublicFooter />
      </div>
    );
  }

  // Authenticated dashboard - no navbar, full-width layout
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[hsl(var(--turquoise))]/5">
      <FloatingControls />
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[hsl(var(--turquoise))]/8 to-[hsl(var(--teal))]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-br from-[hsl(var(--lavender))]/8 to-[hsl(var(--indigo))]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-gradient-to-br from-[hsl(var(--coral))]/6 to-[hsl(var(--orange))]/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-[hsl(var(--gold))]/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <main className="container max-w-6xl py-6 px-4 pt-20 relative z-10">
        <div className="space-y-6">
          {/* Welcome Section */}
          <WelcomeBanner />
          
          {/* Apps & Quick Links in a combined row */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <Apps />
            </div>
            <div className="flex-1">
              <QuickLinks />
            </div>
          </div>
          
          {/* Content Grid: News/Announcements + Events/Birthdays */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main content - News & Announcements */}
            <div className="lg:col-span-2">
              <CombinedFeed />
            </div>
            
            {/* Right sidebar widgets */}
            <div className="space-y-5">
              <UpcomingEvents />
              <TeamBirthdays />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
