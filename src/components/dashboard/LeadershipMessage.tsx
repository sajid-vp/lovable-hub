import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function LeadershipMessage() {
  return (
    <section className="animate-fade-in h-full">
      <h2 className="text-xs font-semibold mb-3 flex items-center gap-2 text-muted-foreground/70 uppercase tracking-widest">
        Message from Leadership
      </h2>
      <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl p-5 h-[calc(100%-2rem)]">
        <div className="flex items-start gap-4">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
            alt="Chancellor"
            className="w-16 h-16 rounded-xl object-cover shadow-md"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base">Prof. Dr. Mohammed Al Qasimi</h3>
            <p className="text-xs text-muted-foreground">Chancellor, Sharjah Education Academy</p>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium text-sm mb-2">Welcome to the New Academic Year</h4>
          <p className="text-sm text-muted-foreground line-clamp-3">
            As we embark on another exciting academic year, I am delighted to welcome our dedicated educators, 
            staff, and partners to the Sharjah Education Academy community. Together, we continue to shape 
            the future of education in the region...
          </p>
        </div>
        
        <Link 
          to="/leadership-message"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 mt-4 group"
        >
          Read more
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
