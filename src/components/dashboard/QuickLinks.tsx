import { TileGrid } from "./TileGrid";
import { mockExternalLinks } from "@/data/mockData";

export function QuickLinks() {
  return <TileGrid title="Quick Links" items={mockExternalLinks} />;
}
