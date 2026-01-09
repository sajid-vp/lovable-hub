import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { LeadershipMessageDialog } from "./LeadershipMessageDialog";

export function LeadershipMessage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="animate-fade-in">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Message from Leadership
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/50 via-[hsl(var(--turquoise))]/30 to-transparent rounded-full" />
        </div>

        {/* Glass Container */}
        <div className="relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5">
          {/* Top gradient accent */}
          <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />

          <div className="flex items-start gap-3 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
              alt="Chancellor"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shadow-md border border-border/30"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm tracking-tight">Prof. Dr. Mohammed Al Qasimi</h3>
              <p className="text-xs text-muted-foreground truncate font-medium">Chancellor, Sharjah Education Academy</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold text-sm mb-2 tracking-tight">Welcome to the New Academic Year</h4>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-medium">
              As we embark on another exciting academic year, I am delighted to welcome our dedicated educators, 
              staff, and partners to the Sharjah Education Academy community. Together, we continue to shape 
              the future of education in the region...
            </p>
          </div>
          
          {/* Read More Link */}
          <div className="flex justify-end mt-4">
            <button 
              onClick={() => setDialogOpen(true)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 group"
            >
              Read more
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
      
      <LeadershipMessageDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
