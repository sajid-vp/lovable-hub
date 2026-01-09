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
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[hsl(var(--turquoise))] to-[hsl(var(--teal))] animate-pulse" />
        Quick Access
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {mockQuickLinks.map((link, index) => (
          <Link
            key={link.id}
            to={link.href}
            className="group relative overflow-hidden rounded-2xl p-5 bg-card border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative corner accent */}
            <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--turquoise))]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Badge counter with glow */}
            {badgeCounts[link.id] && (
              <span className="absolute top-3 right-3 h-6 min-w-6 px-2 rounded-full bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--orange))] text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-[hsl(var(--coral))]/30 animate-pulse">
                {badgeCounts[link.id]}
              </span>
            )}
            
            <div
              className={cn(
                "h-16 w-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
                link.color
              )}
              style={{
                boxShadow: "0 8px 20px -4px rgba(0,0,0,0.15)"
              }}
            >
              <link.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="font-bold text-base group-hover:text-primary transition-colors">{link.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
              {link.description}
            </p>
            
            {/* Arrow indicator with color */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <span className="text-[hsl(var(--turquoise))] text-xl font-bold">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
