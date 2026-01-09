import { AlertCircle, CheckCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { mockAnnouncements } from "@/data/mockData";
import { cn } from "@/lib/utils";

const iconMap = {
  info: Info,
  warning: AlertCircle,
  success: CheckCircle,
};

const colorMap = {
  info: "border-secondary bg-secondary/10 text-secondary",
  warning: "border-warning bg-warning/10 text-warning",
  success: "border-success bg-success/10 text-success",
};

export function Announcements() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Announcements</h2>
      <div className="space-y-3">
        {mockAnnouncements.map((announcement) => {
          const Icon = iconMap[announcement.type];
          return (
            <Alert
              key={announcement.id}
              className={cn("border-l-4", colorMap[announcement.type])}
            >
              <Icon className="h-4 w-4" />
              <AlertTitle className="text-sm font-medium">
                {announcement.title}
              </AlertTitle>
              <AlertDescription className="text-xs mt-1">
                {announcement.message}
              </AlertDescription>
            </Alert>
          );
        })}
      </div>
    </section>
  );
}
