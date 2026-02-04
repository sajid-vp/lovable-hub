import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { AnnouncementsTicker } from "@/components/dashboard/AnnouncementsTicker";
import { IconNavBar } from "@/components/dashboard/IconNavBar";
import { Apps } from "@/components/dashboard/Apps";
import { QuickLinks } from "@/components/dashboard/QuickLinks";
import { LeadershipMessage } from "@/components/dashboard/LeadershipMessage";
import { NewsFeed } from "@/components/dashboard/NewsFeed";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { RecentDocuments } from "@/components/dashboard/RecentDocuments";
import { TeamsActivity } from "@/components/dashboard/TeamsActivity";
import { UpcomingMeetings } from "@/components/dashboard/UpcomingMeetings";
import { DirectoryWidget } from "@/components/dashboard/DirectoryWidget";

export default function Index() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-background no-overscroll">
      {/* Subtle decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[hsl(var(--light-blue))]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-[hsl(var(--turquoise))]/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <main className="container max-w-6xl pt-safe pb-safe py-3 sm:py-6 px-3 sm:px-4 relative z-10 scroll-touch">
        <div className="space-y-4 sm:space-y-5">
          {/* Welcome Section */}
          <WelcomeBanner />
          
          {/* Icon Navigation Bar - Below Welcome Banner */}
          <IconNavBar />
          
          {/* Announcements Ticker */}
          <AnnouncementsTicker />
          
          {/* Leadership Message + Quick Links side by side */}
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
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
          
          {/* Microsoft Integration: Documents + Teams Activity + Meetings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            <RecentDocuments />
            <TeamsActivity />
            <UpcomingMeetings />
          </div>
          
          {/* Content Grid: News + Events */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2 flex flex-col">
              <NewsFeed />
            </div>
            <div className="flex flex-col">
              <UpcomingEvents />
            </div>
          </div>
          
          {/* Directory Widget - Full Width */}
          <DirectoryWidget />
        </div>
      </main>
    </div>
  );
}