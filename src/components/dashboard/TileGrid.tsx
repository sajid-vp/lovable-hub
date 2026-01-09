import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { App, ExternalLink as ExternalLinkType } from "@/data/mockData";

type TileItem = App | ExternalLinkType;

interface TileGridProps {
  title: string;
  items: TileItem[];
  badgeCounts?: Record<string, number>;
}

function isExternalLink(item: TileItem): item is ExternalLinkType {
  return "external" in item && item.external === true;
}

export function TileGrid({ title, items, badgeCounts = {} }: TileGridProps) {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "100ms" }}>
      <h2 className="text-sm font-semibold mb-3 flex items-center gap-2 text-muted-foreground uppercase tracking-wide">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[hsl(var(--turquoise))] to-[hsl(var(--teal))]" />
        {title}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {items.map((item, index) => {
          const isExternal = isExternalLink(item);
          const TileWrapper = isExternal ? "a" : Link;
          const tileProps = isExternal
            ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
            : { to: item.href };

          return (
            <TileWrapper
              key={item.id}
              {...(tileProps as any)}
              className="group relative overflow-hidden rounded-xl p-3 bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Badge counter */}
              {badgeCounts[item.id] && (
                <span className="absolute top-2 right-2 h-5 min-w-5 px-1.5 rounded-full bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--orange))] text-white text-[10px] font-bold flex items-center justify-center">
                  {badgeCounts[item.id]}
                </span>
              )}

              {/* External link indicator */}
              {isExternal && !badgeCounts[item.id] && (
                <span className="absolute top-2 right-2 text-muted-foreground/50">
                  <ExternalLink className="h-3 w-3" />
                </span>
              )}

              <div
                className={cn(
                  "h-10 w-10 rounded-lg flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-105 shadow-md",
                  item.color
                )}
              >
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                {item.title}
              </h3>
            </TileWrapper>
          );
        })}
      </div>
    </section>
  );
}
