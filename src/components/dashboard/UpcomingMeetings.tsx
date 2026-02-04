import { Calendar, ExternalLink, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockTeamsMeetings } from "@/data/mockData";
import { format, isToday, isTomorrow } from "date-fns";

export function UpcomingMeetings() {
  const formatMeetingTime = (startTime: string) => {
    const date = new Date(startTime);
    if (isToday(date)) {
      return `Today at ${format(date, "h:mm a")}`;
    }
    if (isTomorrow(date)) {
      return `Tomorrow at ${format(date, "h:mm a")}`;
    }
    return format(date, "MMM d, h:mm a");
  };

  return (
    <Card className="h-[420px] flex flex-col bg-card border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow">
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
        <div className="space-y-2">
          {mockTeamsMeetings.slice(0, 5).map((meeting) => (
            <div
              key={meeting.id}
              className="group flex items-center gap-3 p-2.5 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-border transition-all"
            >
              <div className="flex-shrink-0 p-2 rounded-lg bg-[#0078D4]/10">
                <Calendar className="h-4 w-4 text-[#0078D4]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {meeting.title}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formatMeetingTime(meeting.startTime)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {meeting.organizer}
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs opacity-0 group-hover:opacity-100 transition-opacity border-[#0078D4]/30 text-[#0078D4] hover:bg-[#0078D4]/10"
                onClick={() => window.open(meeting.joinUrl, "_blank")}
              >
                View
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
