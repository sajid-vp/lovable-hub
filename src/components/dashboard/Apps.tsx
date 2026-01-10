import { TileGrid } from "./TileGrid";
import { mockApps } from "@/data/mockData";

// Mock notification counts - will be replaced with real data from API
const appNotifications: Record<string, number> = {
  "3": 2,  // 2 pending leave requests
  "5": 5,  // 5 pending approvals
};

export function Apps() {
  return <TileGrid title="Apps" items={mockApps} badgeCounts={appNotifications} />;
}
