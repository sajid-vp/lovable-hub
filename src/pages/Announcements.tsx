import { Bell, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { PageLayout } from "@/components/layouts/PageLayout";

const announcements = [
  {
    id: 1,
    title: "Registration Open for Spring Programs",
    description: "Enroll now for our upcoming professional development courses starting February 2025. Limited seats available for early registration.",
    date: "Jan 8, 2025",
    priority: "high",
    category: "Programs",
  },
  {
    id: 2,
    title: "Campus Closure Notice - January 15",
    description: "SEA campus will be closed for scheduled maintenance and upgrades. All classes and activities will resume on January 16.",
    date: "Jan 5, 2025",
    priority: "medium",
    category: "Operations",
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    description: "SEA welcomes new institutional partners for the 2025 academic year. This collaboration will enhance our research capabilities.",
    date: "Jan 3, 2025",
    priority: "normal",
    category: "Partnerships",
  },
  {
    id: 4,
    title: "Updated Travel Policy",
    description: "Please review the updated travel and expense policy effective from January 2025. All staff members should familiarize themselves with the new guidelines.",
    date: "Jan 2, 2025",
    priority: "normal",
    category: "Policy",
  },
  {
    id: 5,
    title: "IT System Upgrade Complete",
    description: "The planned IT infrastructure upgrade has been successfully completed. All systems are now running on the latest version.",
    date: "Dec 28, 2024",
    priority: "normal",
    category: "IT",
  },
];

export default function Announcements() {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "medium":
        return <Bell className="h-5 w-5 text-warning" />;
      default:
        return <Info className="h-5 w-5 text-primary" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-destructive bg-destructive/5";
      case "medium":
        return "border-l-[hsl(var(--warning))] bg-[hsl(var(--warning))]/5";
      default:
        return "border-l-primary bg-primary/5";
    }
  };

  return (
    <PageLayout title="Announcements">
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`relative rounded-xl bg-card border border-border/50 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border-l-4 ${getPriorityColor(announcement.priority)}`}
          >
            <div className="p-5">
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  {getPriorityIcon(announcement.priority)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-bold text-base">{announcement.title}</h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      {announcement.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {announcement.description}
                  </p>
                  <span className="text-xs text-muted-foreground/70">{announcement.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {announcements.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">No announcements at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
}
