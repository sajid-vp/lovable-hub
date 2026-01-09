import { TileGrid } from "./TileGrid";
import { mockApps } from "@/data/mockData";

export function Apps() {
  return <TileGrid title="Apps" items={mockApps} />;
}
