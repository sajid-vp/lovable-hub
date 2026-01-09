import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingControls } from "@/components/dashboard/FloatingControls";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  backTo?: string;
}

export function PageLayout({ title, children, backTo = "/" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <FloatingControls />
      
      <div className="container max-w-5xl py-8 px-4">
        {/* Back button and title */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild className="shrink-0">
            <Link to={backTo}>
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        
        {/* Page content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
