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

export function TileGrid({ title, items, badgeCounts = {}, columns = 3 }: TileGridProps) {
  return (
    <section className="animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/50 via-primary/20 to-transparent rounded-full" />
      </div>

      {/* Glass Container */}
      <div className="relative p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5">
        {/* Decorative gradient accent */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                className="group relative flex items-center gap-3 rounded-full px-4 py-3 bg-card border border-border/50 hover:bg-[hsl(var(--light-blue))] hover:border-[hsl(var(--light-blue))] shadow-sm hover:shadow-lg hover:shadow-[hsl(var(--light-blue))]/20 transition-all duration-300 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {/* Badge counter */}
                {badgeCounts[item.id] && (
                  <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1.5 rounded-full bg-gradient-to-r from-[hsl(var(--teal))] to-[hsl(var(--turquoise))] text-white text-[10px] font-bold flex items-center justify-center shadow-md shadow-[hsl(var(--teal))]/30 z-10">
                    {badgeCounts[item.id]}
                  </span>
                )}

                <div className="p-2.5 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 bg-[hsl(var(--light-blue))] group-hover:bg-white/20 group-hover:backdrop-blur-sm group-hover:border group-hover:border-white/20">
                  <item.icon className="h-5 w-5 text-white transition-all duration-300" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-sm transition-colors truncate relative z-10 group-hover:text-white">
                  {item.title}
                </span>
                {isExternal && (
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground/50 group-hover:text-white/70 transition-colors ml-auto" />
                )}
              </TileWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
