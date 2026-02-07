import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface AdminLeadershipDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface LeadershipData {
  name: string;
  title: string;
  messageTitle: string;
  messageContent: string;
  avatarUrl: string;
}

export function AdminLeadershipDialog({ open, onOpenChange }: AdminLeadershipDialogProps) {
  const [formData, setFormData] = useState<LeadershipData>({
    name: "Prof. Dr. Mohammed Al Qasimi",
    title: "Chancellor, Sharjah Education Academy",
    messageTitle: "Welcome to the New Academic Year",
    messageContent: `As we embark on another exciting academic year, I am delighted to welcome our dedicated educators and partners to the Sharjah Education Academy community. Together, we continue our mission to shape the future of education in the UAE, fostering innovation and excellence in teaching practices...`,
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
  });

  const handleSave = () => {
    // In a real app, this would save to the database
    toast({
      title: "Leadership message updated",
      description: "The changes have been saved successfully.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Leadership Message</DialogTitle>
          <DialogDescription>
            Update the message from leadership displayed on the dashboard.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Leader Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Leader Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Title / Position</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter title"
              />
            </div>
          </div>

          {/* Avatar URL */}
          <div className="space-y-2">
            <Label htmlFor="avatar">Avatar Image URL</Label>
            <Input
              id="avatar"
              value={formData.avatarUrl}
              onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
              placeholder="https://..."
            />
            {formData.avatarUrl && (
              <div className="mt-2">
                <img
                  src={formData.avatarUrl}
                  alt="Preview"
                  className="w-16 h-16 rounded-lg object-cover border border-border"
                />
              </div>
            )}
          </div>

          {/* Message Title */}
          <div className="space-y-2">
            <Label htmlFor="messageTitle">Message Title</Label>
            <Input
              id="messageTitle"
              value={formData.messageTitle}
              onChange={(e) => setFormData({ ...formData, messageTitle: e.target.value })}
              placeholder="Enter message title"
            />
          </div>

          {/* Message Content */}
          <div className="space-y-2">
            <Label htmlFor="messageContent">Message Content</Label>
            <Textarea
              id="messageContent"
              value={formData.messageContent}
              onChange={(e) => setFormData({ ...formData, messageContent: e.target.value })}
              placeholder="Enter the leadership message..."
              rows={6}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              The message will be truncated to 5 lines on the dashboard. Users can click "Read more" to see the full message.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-primary">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
