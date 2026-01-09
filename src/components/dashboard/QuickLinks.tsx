import { Link } from "react-router-dom";
import { mockQuickLinks } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function QuickLinks() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {mockQuickLinks.map((link, index) => (
          <Link
            key={link.id}
            to={link.href}
            className="group relative overflow-hidden rounded-xl p-4 bg-card border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className={cn(
                "h-12 w-12 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110",
                link.color
              )}
            >
              <link.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-medium text-sm">{link.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
