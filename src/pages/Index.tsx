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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[hsl(var(--turquoise))]/5">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[hsl(var(--turquoise))]/8 to-[hsl(var(--teal))]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-br from-[hsl(var(--lavender))]/8 to-[hsl(var(--indigo))]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-gradient-to-br from-[hsl(var(--coral))]/6 to-[hsl(var(--orange))]/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-[hsl(var(--gold))]/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <main className="container max-w-6xl py-4 sm:py-6 px-3 sm:px-4 relative z-10">
        <div className="space-y-4 sm:space-y-5">
          {/* Welcome Section */}
          <WelcomeBanner />
          
          {/* Announcements Ticker */}
          <AnnouncementsTicker />
          
          {/* Leadership Message + Quick Links side by side */}
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Subtle connecting glow behind the entire row */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[hsl(var(--indigo))]/3 via-transparent to-[hsl(var(--turquoise))]/3 blur-xl" />
            
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2">
              <NewsFeed />
            </div>
            <div className="space-y-4 sm:space-y-5">
              <UpcomingEvents />
              <TeamBirthdays />
            </div>
          </div>
          
          {/* Content Grid 2: Bulletin Board + Employee Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
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
