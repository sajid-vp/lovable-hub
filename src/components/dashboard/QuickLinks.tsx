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
    <section>
      <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {mockQuickLinks.map((link, index) => (
          <Link
            key={link.id}
            to={link.href}
            className="group relative overflow-hidden rounded-xl p-5 bg-card border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Badge counter */}
            {badgeCounts[link.id] && (
              <span className="absolute top-3 right-3 h-5 min-w-5 px-1.5 rounded-full bg-destructive text-destructive-foreground text-xs font-medium flex items-center justify-center">
                {badgeCounts[link.id]}
              </span>
            )}
            
            <div
              className={cn(
                "h-14 w-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                link.color
              )}
            >
              <link.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-base">{link.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
