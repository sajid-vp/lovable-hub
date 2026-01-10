import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { LeadershipMessageDialog } from "./LeadershipMessageDialog";

export function LeadershipMessage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="animate-fade-in">
        {/* iOS-style Section Header */}
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
          Message from Leadership
        </h2>

        {/* iOS Widget Container */}
        <div className="ios-widget p-5">
          <div className="flex items-start gap-4">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
              alt="Chancellor"
              className="w-14 h-14 rounded-2xl object-cover shadow-sm"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base tracking-tight">Prof. Dr. Mohammed Al Qasimi</h3>
              <p className="text-sm text-muted-foreground truncate">Chancellor, Sharjah Education Academy</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold text-sm mb-2">Welcome to the New Academic Year</h4>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              As we embark on another exciting academic year, I am delighted to welcome our dedicated educators, 
              staff, and partners to the Sharjah Education Academy community. Together, we continue to shape 
              the future of education in the region...
            </p>
          </div>
          
          {/* iOS-style Read More Link */}
          <button 
            onClick={() => setDialogOpen(true)}
            className="mt-4 w-full flex items-center justify-between px-4 py-3 -mx-1 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
          >
            <span className="text-sm font-medium text-primary">Read more</span>
            <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
      
      <LeadershipMessageDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}