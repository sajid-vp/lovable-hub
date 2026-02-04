import { FileText, Download, ExternalLink, FileSpreadsheet, File, Presentation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockSharePointDocuments, type SharePointDocument } from "@/data/mockData";
import { formatDistanceToNow } from "date-fns";

const getDocumentIcon = (type: SharePointDocument["type"]) => {
  switch (type) {
    case "word":
      return <FileText className="h-5 w-5 text-[#2B579A]" />;
    case "excel":
      return <FileSpreadsheet className="h-5 w-5 text-[#217346]" />;
    case "pdf":
      return <File className="h-5 w-5 text-[#F40F02]" />;
    case "powerpoint":
      return <Presentation className="h-5 w-5 text-[#D24726]" />;
    default:
      return <FileText className="h-5 w-5 text-muted-foreground" />;
  }
};

const getDocumentTypeLabel = (type: SharePointDocument["type"]) => {
  switch (type) {
    case "word":
      return "Word";
    case "excel":
      return "Excel";
    case "pdf":
      return "PDF";
    case "powerpoint":
      return "PowerPoint";
    default:
      return "File";
  }
};

export function RecentDocuments() {
  return (
    <Card className="flex flex-col bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#038387]">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-base font-semibold">Recent Documents</CardTitle>
          </div>
          <a
            href="https://yourorg.sharepoint.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
          >
            View all
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {mockSharePointDocuments.slice(0, 5).map((doc) => (
            <a
              key={doc.id}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-2.5 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-border transition-all"
            >
              <div className="flex-shrink-0 p-2 rounded-lg bg-background border border-border group-hover:shadow-sm transition-shadow">
                {getDocumentIcon(doc.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {doc.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {doc.modifiedBy} • {formatDistanceToNow(new Date(doc.modifiedDate), { addSuffix: true })}
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-1">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                  {getDocumentTypeLabel(doc.type)}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(doc.url, "_blank");
                  }}
                >
                  <Download className="h-3.5 w-3.5" />
                </Button>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
