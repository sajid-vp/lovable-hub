import { useAuthContext } from "@/contexts/AuthContext";
import { PublicHeader } from "@/components/landing/PublicHeader";
import { PublicLanding } from "@/components/landing/PublicLanding";
import { PublicFooter } from "@/components/landing/PublicFooter";
import { FloatingControls } from "@/components/dashboard/FloatingControls";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
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
    <div className="min-h-screen bg-background">
      <FloatingControls />
      
      <main className="container max-w-6xl py-8 px-4 pt-20">
        <div className="space-y-8">
          {/* Welcome Section */}
          <WelcomeBanner />
          
          {/* Quick Access Grid */}
          <QuickLinks />
          
          {/* Content Grid: News/Announcements + Events/Birthdays */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content - News & Announcements */}
            <div className="lg:col-span-2">
              <CombinedFeed />
            </div>
            
            {/* Right sidebar widgets */}
            <div className="space-y-6">
              <UpcomingEvents />
              <TeamBirthdays />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
