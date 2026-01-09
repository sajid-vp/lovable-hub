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
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[hsl(var(--turquoise))] to-[hsl(var(--teal))] animate-pulse" />
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
              className="group relative overflow-hidden rounded-2xl p-5 bg-card border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative corner accent */}
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--turquoise))]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Badge counter with glow */}
              {badgeCounts[item.id] && (
                <span className="absolute top-3 right-3 h-6 min-w-6 px-2 rounded-full bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--orange))] text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-[hsl(var(--coral))]/30 animate-pulse">
                  {badgeCounts[item.id]}
                </span>
              )}

              {/* External link indicator */}
              {isExternal && (
                <span className="absolute top-3 right-3 text-muted-foreground">
                  <ExternalLink className="h-4 w-4" />
                </span>
              )}

              <div
                className={cn(
                  "h-16 w-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
                  item.color
                )}
                style={{
                  boxShadow: "0 8px 20px -4px rgba(0,0,0,0.15)",
                }}
              >
                <item.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                {item.description}
              </p>

              {/* Arrow indicator with color */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <span className="text-[hsl(var(--turquoise))] text-xl font-bold">
                  {isExternal ? "↗" : "→"}
                </span>
              </div>
            </TileWrapper>
          );
        })}
      </div>
    </section>
  );
}
