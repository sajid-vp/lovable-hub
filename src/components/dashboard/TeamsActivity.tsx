import { MessageSquare, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockTeamsMessages } from "@/data/mockData";
import { formatDistanceToNow } from "date-fns";

export function TeamsActivity() {
  const unreadCount = mockTeamsMessages.filter((m) => m.isUnread).length;

  return (
    <Card className="h-full flex flex-col bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
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
      <CardContent className="flex-1 pt-0 overflow-y-auto">
        <div className="space-y-2">
          {mockTeamsMessages.slice(0, 6).map((message) => (
            <a
              key={message.id}
              href="https://teams.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-border transition-all"
            >
              <Avatar className="h-9 w-9 flex-shrink-0">
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
      </CardContent>
    </Card>
  );
}
