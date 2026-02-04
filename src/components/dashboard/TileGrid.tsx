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

export function TileGrid({ title, items, badgeCounts = {}, columns = 4 }: TileGridProps) {
  const gridColsClass = columns === 3 
    ? "grid-cols-2 md:grid-cols-3" 
    : "grid-cols-2 md:grid-cols-4";

  return (
    <section className="animate-fade-in h-full flex flex-col">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
          {title}
        </h2>
        <div className="flex-1 h-[1.5px] bg-[hsl(var(--light-blue))]/50 rounded-full" />
      </div>

      {/* Glass Container */}
      <div className="relative p-4 rounded-2xl bg-card border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] flex-1">
        
        <div className={`grid ${gridColsClass} gap-3`}>
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
                className="group relative flex items-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl px-2.5 sm:px-3 py-2 bg-card border border-border/50 hover:bg-[hsl(var(--light-blue))]/10 hover:border-[hsl(var(--light-blue))]/30 active:scale-[0.97] shadow-sm transition-colors duration-150 animate-scale-in tap-highlight app-touch"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="p-1 sm:p-1.5 rounded-lg flex-shrink-0 flex items-center justify-center bg-[hsl(var(--light-blue))]">
                  <item.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-xs sm:text-sm truncate relative z-10 flex-1 group-hover:text-[hsl(var(--light-blue))]">
                  {item.title}
                </span>
                {/* Badge counter - inside the tile on the right */}
                {badgeCounts[item.id] && (
                  <span className="h-4 sm:h-5 min-w-4 sm:min-w-5 px-1 sm:px-1.5 rounded-full bg-gradient-to-r from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center shadow-sm flex-shrink-0">
                    {badgeCounts[item.id]}
                  </span>
                )}
                {isExternal && (
                  <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0 text-muted-foreground/50 group-hover:text-[hsl(var(--light-blue))]" />
                )}
              </TileWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
