import { ChevronRight, Settings } from "lucide-react";
import { useState } from "react";
import { LeadershipMessageDialog } from "./LeadershipMessageDialog";
import { Button } from "@/components/ui/button";

export function LeadershipMessage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="animate-fade-in h-full flex flex-col">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
            Message from Leadership
          </h2>
          <div className="flex-1 h-[1.5px] bg-[hsl(var(--light-blue))]/50 rounded-full" />
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-muted-foreground hover:text-primary hover:bg-primary/10"
            title="Admin: Edit message"
          >
            <Settings className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Glass Container */}
        <div className="relative p-3 sm:p-4 rounded-2xl bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] flex-1 flex flex-col">

          <div className="flex items-center gap-3">
            <div className="p-0.5 rounded-xl bg-gradient-to-br from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                alt="Chancellor"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm tracking-tight">Prof. Dr. Mohammed Al Qasimi</h3>
              <p className="text-xs text-muted-foreground truncate font-medium">Chancellor, Sharjah Education Academy</p>
            </div>
          </div>
          
          <div className="mt-3">
            <h4 className="font-semibold text-sm mb-1.5 tracking-tight">Welcome to the New Academic Year</h4>
            <p className="text-sm text-muted-foreground line-clamp-5 leading-relaxed font-medium">
              As we embark on another exciting academic year, I am delighted to welcome our dedicated educators 
              and partners to the Sharjah Education Academy community. Together, we continue our mission to shape 
              the future of education in the UAE, fostering innovation and excellence in teaching practices...
            </p>
          </div>
          
          {/* Read More Link */}
          <div className="flex justify-end mt-3">
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
