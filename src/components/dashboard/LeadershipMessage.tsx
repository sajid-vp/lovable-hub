import { ChevronRight, MessageSquareQuote } from "lucide-react";
import { Link } from "react-router-dom";

export function LeadershipMessage() {
  return (
    <section className="animate-fade-in h-full">
      {/* Enhanced Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-[hsl(var(--indigo))]/20 to-[hsl(var(--lavender))]/10 flex items-center justify-center">
          <MessageSquareQuote className="h-3 w-3 text-[hsl(var(--indigo))]" />
        </div>
        <h2 className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Message from Leadership
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      {/* Glass Card with Gradient Accent */}
      <div className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden h-[calc(100%-2.5rem)] shadow-lg shadow-black/5">
        {/* Top gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--indigo))] via-[hsl(var(--lavender))] to-[hsl(var(--turquoise))]" />
        
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '8px 8px'
          }} />
        </div>

        <div className="p-5 relative">
          <div className="flex items-start gap-4">
            {/* Avatar with gradient ring */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[hsl(var(--indigo))] to-[hsl(var(--lavender))] rounded-xl opacity-60 blur-sm" />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                alt="Chancellor"
                className="relative w-16 h-16 rounded-xl object-cover shadow-md"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base">Prof. Dr. Mohammed Al Qasimi</h3>
              <p className="text-xs text-muted-foreground">Chancellor, Sharjah Education Academy</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[hsl(var(--indigo))] to-[hsl(var(--lavender))]" />
              Welcome to the New Academic Year
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              As we embark on another exciting academic year, I am delighted to welcome our dedicated educators, 
              staff, and partners to the Sharjah Education Academy community. Together, we continue to shape 
              the future of education in the region...
            </p>
          </div>
          
          <Link 
            to="/leadership-message"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 mt-4 group"
          >
            Read more
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
