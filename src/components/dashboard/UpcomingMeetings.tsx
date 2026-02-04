import { Calendar, ExternalLink, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockTeamsMeetings } from "@/data/mockData";
import { format } from "date-fns";

export function UpcomingMeetings() {
  return (
    <Card className="h-full flex flex-col bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#0078D4]">
              <Calendar className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-base font-semibold">Calendar</CardTitle>
          </div>
          <a
            href="https://outlook.office.com/calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
          >
            Open Calendar
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-0 overflow-y-auto">
        <div className="space-y-1">
          {mockTeamsMeetings.slice(0, 5).map((meeting) => {
            const date = new Date(meeting.startTime);
            return (
              <div
                key={meeting.id}
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => window.open(meeting.joinUrl, "_blank")}
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-[#0078D4]/10">
                  <Calendar className="h-5 w-5 text-[#0078D4]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {meeting.title}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <Clock className="h-3 w-3" />
                    <span>{format(date, "MMM d,")}</span>
                    <span>{format(date, "h:mm a")}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-muted-foreground">{meeting.organizer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
