import { useAuthContext } from "@/contexts/AuthContext";
import { PublicHeader } from "@/components/landing/PublicHeader";
import { PublicLanding } from "@/components/landing/PublicLanding";
import { PublicFooter } from "@/components/landing/PublicFooter";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { AnnouncementsTicker } from "@/components/dashboard/AnnouncementsTicker";
import { BulletinBoard } from "@/components/dashboard/BulletinBoard";
import { Apps } from "@/components/dashboard/Apps";
import { QuickLinks } from "@/components/dashboard/QuickLinks";
import { LeadershipMessage } from "@/components/dashboard/LeadershipMessage";
import { NewsFeed } from "@/components/dashboard/NewsFeed";
import { SocialFeed } from "@/components/dashboard/SocialFeed";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { TeamBirthdays } from "@/components/dashboard/TeamBirthdays";
import { EmployeeSpotlight } from "@/components/dashboard/EmployeeSpotlight";

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
      {/* iOS-style subtle background mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[hsl(var(--primary))]/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-16 w-64 h-64 bg-[hsl(var(--secondary))]/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-24 right-1/3 w-48 h-48 bg-[hsl(var(--accent))]/5 rounded-full blur-[80px]" />
      </div>
      
      <main className="container max-w-6xl py-5 sm:py-8 px-4 sm:px-6 relative z-10">
        <div className="space-y-5 sm:space-y-6">
          {/* Welcome Section */}
          <WelcomeBanner />
          
          {/* Announcements Ticker */}
          <AnnouncementsTicker />
          
          {/* Leadership Message + Quick Links side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
            
            <div className="lg:col-span-2">
              <LeadershipMessage />
            </div>
            <div className="lg:col-span-3">
              <QuickLinks />
            </div>
          </div>
          
          {/* Apps - Full Width */}
          <Apps />
          
          {/* Content Grid 1: News + Events/Birthdays */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="lg:col-span-2">
              <NewsFeed />
            </div>
            <div className="space-y-5 sm:space-y-6">
              <UpcomingEvents />
              <TeamBirthdays />
            </div>
          </div>
          
          {/* Content Grid 2: Bulletin Board + Employee Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="lg:col-span-2">
              <BulletinBoard />
            </div>
            <div>
              <EmployeeSpotlight variant="compact" />
            </div>
          </div>
          
          {/* Social Feed - Full Width */}
          <SocialFeed />
        </div>
      </main>
    </div>
  );
}
