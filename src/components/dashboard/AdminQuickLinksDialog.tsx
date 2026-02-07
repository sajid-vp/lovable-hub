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
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Trash2, GripVertical, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { mockExternalLinks } from "@/data/mockData";

interface AdminQuickLinksDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface QuickLink {
  id: string;
  title: string;
  description: string;
  href: string;
  external: boolean;
}

export function AdminQuickLinksDialog({ open, onOpenChange }: AdminQuickLinksDialogProps) {
  const [links, setLinks] = useState<QuickLink[]>(
    mockExternalLinks.map((link) => ({
      id: link.id,
      title: link.title,
      description: link.description,
      href: link.href,
      external: link.external,
    }))
  );

  const handleAddLink = () => {
    const newLink: QuickLink = {
      id: `new-${Date.now()}`,
      title: "",
      description: "",
      href: "",
      external: true,
    };
    setLinks([...links, newLink]);
  };

  const handleRemoveLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const handleUpdateLink = (id: string, field: keyof QuickLink, value: string | boolean) => {
    setLinks(
      links.map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      )
    );
  };

  const handleSave = () => {
    // Validate links
    const invalidLinks = links.filter((link) => !link.title || !link.href);
    if (invalidLinks.length > 0) {
      toast({
        title: "Validation Error",
        description: "All links must have a title and URL.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would save to the database
    toast({
      title: "Quick links updated",
      description: `${links.length} links have been saved successfully.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Manage Quick Links</DialogTitle>
          <DialogDescription>
            Add, edit, or remove quick links displayed on the dashboard.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 max-h-[50vh] pr-4">
          <div className="space-y-4 py-4">
            {links.map((link, index) => (
              <div
                key={link.id}
                className="relative p-4 rounded-xl border border-border bg-muted/30 space-y-3"
              >
                {/* Header with drag handle and delete */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GripVertical className="h-4 w-4 cursor-grab" />
                    <span className="text-xs font-medium">Link {index + 1}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => handleRemoveLink(link.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor={`title-${link.id}`} className="text-xs">
                      Title
                    </Label>
                    <Input
                      id={`title-${link.id}`}
                      value={link.title}
                      onChange={(e) => handleUpdateLink(link.id, "title", e.target.value)}
                      placeholder="e.g., SharePoint"
                      className="h-9"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`description-${link.id}`} className="text-xs">
                      Description
                    </Label>
                    <Input
                      id={`description-${link.id}`}
                      value={link.description}
                      onChange={(e) => handleUpdateLink(link.id, "description", e.target.value)}
                      placeholder="e.g., Documents & Files"
                      className="h-9"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor={`href-${link.id}`} className="text-xs">
                    URL
                  </Label>
                  <Input
                    id={`href-${link.id}`}
                    value={link.href}
                    onChange={(e) => handleUpdateLink(link.id, "href", e.target.value)}
                    placeholder="https://..."
                    className="h-9"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <Switch
                      id={`external-${link.id}`}
                      checked={link.external}
                      onCheckedChange={(checked) => handleUpdateLink(link.id, "external", checked)}
                    />
                    <Label htmlFor={`external-${link.id}`} className="text-xs text-muted-foreground cursor-pointer">
                      Opens in new tab
                    </Label>
                  </div>
                  {link.external && (
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </div>
              </div>
            ))}

            {/* Add new link button */}
            <Button
              variant="outline"
              className="w-full border-dashed"
              onClick={handleAddLink}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Link
            </Button>
          </div>
        </ScrollArea>

        <DialogFooter className="pt-4 border-t">
          <div className="flex items-center justify-between w-full">
            <p className="text-xs text-muted-foreground">
              {links.length} link{links.length !== 1 ? "s" : ""} configured
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-primary">
                Save Changes
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
