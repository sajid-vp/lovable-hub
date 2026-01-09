import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { App, ExternalLink as ExternalLinkType } from "@/data/mockData";

type TileItem = App | ExternalLinkType;

interface TileGridProps {
  title: string;
  items: TileItem[];
  badgeCounts?: Record<string, number>;
  columns?: number;
}

function isExternalLink(item: TileItem): item is ExternalLinkType {
  return "external" in item && item.external === true;
}

export function TileGrid({ title, items, badgeCounts = {} }: TileGridProps) {
  return (
    <section className="animate-fade-in">
      <h2 className="text-xs font-semibold mb-3 flex items-center gap-2 text-muted-foreground/70 uppercase tracking-widest">
        {title}
      </h2>
      <div className="flex flex-wrap gap-2">
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
              className="group relative flex items-center gap-3 rounded-xl px-4 py-3 bg-card/80 backdrop-blur-sm border border-border/40 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-scale-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Badge counter */}
              {badgeCounts[item.id] && (
                <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1.5 rounded-full bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--orange))] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {badgeCounts[item.id]}
                </span>
              )}

              <div
                className={cn(
                  "h-9 w-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm",
                  item.color
                )}
              >
                <item.icon className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="font-medium text-sm group-hover:text-primary transition-colors whitespace-nowrap relative z-10">
                {item.title}
              </span>
              {isExternal && (
                <ExternalLink className="h-3 w-3 text-muted-foreground/40 group-hover:text-primary/60 transition-colors" />
              )}
            </TileWrapper>
          );
        })}
      </div>
    </section>
  );
}
