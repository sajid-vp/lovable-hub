import { MessageSquare, Video, ExternalLink, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockTeamsMessages, mockTeamsMeetings } from "@/data/mockData";
import { format, formatDistanceToNow, isToday, isTomorrow } from "date-fns";

export function TeamsActivity() {
  const unreadCount = mockTeamsMessages.filter((m) => m.isUnread).length;

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
    <Card className="h-full flex flex-col bg-card border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#6264A7]">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-base font-semibold">Teams Activity</CardTitle>
            {unreadCount > 0 && (
              <Badge className="bg-[#6264A7] hover:bg-[#6264A7]/90 text-white text-[10px] px-1.5 py-0 h-5">
                {unreadCount} unread
              </Badge>
            )}
          </div>
          <a
            href="https://teams.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
          >
            Open Teams
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-0 space-y-4">
        {/* Recent Messages */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <MessageSquare className="h-3 w-3" />
            Recent Messages
          </h4>
          <div className="space-y-2">
            {mockTeamsMessages.slice(0, 3).map((message) => (
              <a
                key={message.id}
                href="https://teams.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 p-2 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-border transition-all"
              >
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarImage src={message.senderAvatar} alt={message.sender} />
                  <AvatarFallback className="text-xs bg-[#6264A7]/10 text-[#6264A7]">
                    {message.sender.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground truncate">
                      {message.sender}
                    </p>
                    {message.isUnread && (
                      <span className="h-2 w-2 rounded-full bg-[#6264A7] flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{message.content}</p>
                  <p className="text-[10px] text-muted-foreground/70 mt-0.5">
                    {message.channel} • {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Video className="h-3 w-3" />
            Upcoming Meetings
          </h4>
          <div className="space-y-2">
            {mockTeamsMeetings.slice(0, 3).map((meeting) => (
              <div
                key={meeting.id}
                className="group flex items-center gap-3 p-2 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-border transition-all"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-[#6264A7]/10">
                  <Video className="h-4 w-4 text-[#6264A7]" />
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
                  className="h-7 text-xs opacity-0 group-hover:opacity-100 transition-opacity border-[#6264A7]/30 text-[#6264A7] hover:bg-[#6264A7]/10"
                  onClick={() => window.open(meeting.joinUrl, "_blank")}
                >
                  Join
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
