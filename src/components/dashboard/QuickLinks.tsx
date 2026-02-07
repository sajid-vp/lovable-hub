import { useState } from "react";
import { TileGrid } from "./TileGrid";
import { mockExternalLinks } from "@/data/mockData";
import { AdminQuickLinksDialog } from "./AdminQuickLinksDialog";

export function QuickLinks() {
  const [adminDialogOpen, setAdminDialogOpen] = useState(false);

  return (
    <>
      <TileGrid 
        title="Quick Links" 
        items={mockExternalLinks} 
        columns={3} 
        showAdminGear 
        onAdminClick={() => setAdminDialogOpen(true)}
      />
      <AdminQuickLinksDialog open={adminDialogOpen} onOpenChange={setAdminDialogOpen} />
    </>
  );
}
