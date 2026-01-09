import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { PublicHero } from "@/components/landing/PublicHero";
import { PublicFeatures } from "@/components/landing/PublicFeatures";
import { PublicNews } from "@/components/landing/PublicNews";
import { PublicFooter } from "@/components/landing/PublicFooter";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { QuickLinks } from "@/components/dashboard/QuickLinks";
import { NewsFeed } from "@/components/dashboard/NewsFeed";
import { Announcements } from "@/components/dashboard/Announcements";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";

export default function Index() {
  const { isAuthenticated } = useAuthContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Public landing page for visitors - simple login experience
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1">
          <PublicHero />
        </main>
      </div>
    );
  }

  // Authenticated dashboard for employees
  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 md:ml-64 p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <WelcomeBanner />
            <QuickLinks />
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main content - News */}
              <div className="lg:col-span-2">
                <NewsFeed />
              </div>
              
              {/* Sidebar widgets */}
              <div className="space-y-6">
                <Announcements />
                <UpcomingEvents />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
