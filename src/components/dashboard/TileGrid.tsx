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
    <section className="animate-fade-in">
      {/* iOS-style Section Header */}
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
        {title}
      </h2>

      {/* iOS Widget Container */}
      <div className="ios-widget p-4">
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
                className="group relative flex items-center gap-3 rounded-2xl px-4 py-3.5 bg-muted/50 hover:bg-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="p-2 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-200 bg-primary/10 group-hover:bg-white/20">
                  <item.icon className="h-4 w-4 text-primary transition-all duration-200 group-hover:text-white" strokeWidth={1.5} />
                </div>
                <span className="font-medium text-sm transition-colors truncate flex-1 group-hover:text-white">
                  {item.title}
                </span>
                {/* Badge counter */}
                {badgeCounts[item.id] && (
                  <span className="h-5 min-w-5 px-1.5 rounded-full bg-destructive text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                    {badgeCounts[item.id]}
                  </span>
                )}
                {isExternal && (
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground/50 group-hover:text-white/70 transition-colors" />
                )}
              </TileWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}