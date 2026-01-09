import { Link } from "react-router-dom";
import { mockQuickLinks } from "@/data/mockData";
import { cn } from "@/lib/utils";

// Badge counts for quick links (mock data)
const badgeCounts: Record<string, number> = {
  "1": 3, // Email - 3 new
  "7": 1, // Messages - 1 new
};

export function QuickLinks() {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "100ms" }}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        Quick Access
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {mockQuickLinks.map((link, index) => (
          <Link
            key={link.id}
            to={link.href}
            className="group relative overflow-hidden rounded-xl p-5 bg-card border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 animate-scale-in"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Badge counter with pulse */}
            {badgeCounts[link.id] && (
              <span className="absolute top-3 right-3 h-5 min-w-5 px-1.5 rounded-full bg-destructive text-destructive-foreground text-xs font-medium flex items-center justify-center animate-pulse">
                {badgeCounts[link.id]}
              </span>
            )}
            
            <div
              className={cn(
                "h-14 w-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg",
                link.color
              )}
            >
              <link.icon className="h-7 w-7 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="font-semibold text-base group-hover:text-primary transition-colors">{link.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
              {link.description}
            </p>
            
            {/* Arrow indicator */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <span className="text-primary text-lg">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
