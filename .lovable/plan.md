

## SharePoint & Teams Integration Plan

### Recommended Approach: Dual Strategy

Use **embedded widgets** for quick access on the dashboard, with **deep links** for full functionality.

---

### Phase 1: Add SharePoint & Teams to Quick Links (Immediate)

**Files to modify:** `src/data/mockData.ts`

Add entries to `mockExternalLinks`:
```typescript
{
  id: "sharepoint",
  title: "SharePoint",
  description: "Documents & Files",
  icon: FolderOpen,
  href: "https://yourorg.sharepoint.com",
  color: "bg-[#038387]",
  external: true,
},
{
  id: "teams",
  title: "Microsoft Teams",
  description: "Chat & Meetings",
  icon: MessageSquare,
  href: "https://teams.microsoft.com",
  color: "bg-[#6264A7]",
  external: true,
}
```

---

### Phase 2: Create Document Widget Component

**New file:** `src/components/dashboard/RecentDocuments.tsx`

A dedicated card showing recent SharePoint documents with:
- Document name, type icon (Word, Excel, PDF, etc.)
- Modified date and author
- Quick action buttons (Open, Download)
- "View all in SharePoint" link

**Initial implementation:** Use mock data for structure, with placeholder for future API integration.

**Layout placement:** Add to dashboard grid (2-column layout alongside another component)

---

### Phase 3: Create Teams Activity Widget

**New file:** `src/components/dashboard/TeamsActivity.tsx`

A card showing recent Teams activity:
- Recent chat messages or mentions
- Upcoming meetings (next 3)
- Unread message count badge
- "Open in Teams" deep links

**Initial implementation:** Mock data structure matching Microsoft Graph API response format.

---

### Phase 4: Backend Integration (Future - Requires Lovable Cloud)

When ready for live data:

1. **Enable Lovable Cloud** for edge functions

2. **Create Edge Function:** `supabase/functions/microsoft-graph/index.ts`
   - Handles OAuth token management
   - Proxies requests to Microsoft Graph API
   - Endpoints for:
     - `GET /documents` - Recent SharePoint files
     - `GET /teams-activity` - Recent messages/meetings

3. **Azure AD Setup (User action required):**
   - Register app in Azure Portal
   - Configure permissions: `Files.Read.All`, `Chat.Read`, `Calendars.Read`
   - Add redirect URI for OAuth flow

4. **Add secrets to Lovable:**
   - `AZURE_CLIENT_ID`
   - `AZURE_CLIENT_SECRET`
   - `AZURE_TENANT_ID`

---

### Visual Mockup of Dashboard with New Widgets

```
┌─────────────────────────────────────────────────┐
│  Welcome Banner                                  │
├─────────────────────────────────────────────────┤
│  Icon Nav Bar (Students | Academics | etc.)     │
├─────────────────────────────────────────────────┤
│  Leadership (2/5)  │  Quick Links (3/5)         │
│                    │  [+ SharePoint] [+ Teams]  │
├─────────────────────────────────────────────────┤
│  Apps (Full Width)                              │
├─────────────────────────────────────────────────┤
│  Recent Documents (50%)  │  Teams Activity (50%)│
│  ┌──────────────────┐   │  ┌─────────────────┐ │
│  │ 📄 Q1 Report.docx│   │  │ 💬 3 unread     │ │
│  │ 📊 Budget.xlsx   │   │  │ 📅 Next: Standup│ │
│  │ 📑 Policy.pdf    │   │  │ 📅 Team Meeting │ │
│  └──────────────────┘   │  └─────────────────┘ │
├─────────────────────────────────────────────────┤
│  News Feed (66%)        │  Upcoming Events     │
├─────────────────────────────────────────────────┤
│  Social Feed (Full Width)                       │
└─────────────────────────────────────────────────┘
```

---

### Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `src/data/mockData.ts` | Modify | Add SharePoint/Teams to Quick Links + mock document/activity data |
| `src/components/dashboard/RecentDocuments.tsx` | Create | SharePoint documents widget |
| `src/components/dashboard/TeamsActivity.tsx` | Create | Teams messages/meetings widget |
| `src/pages/Index.tsx` | Modify | Add new widgets to dashboard layout |

---

### Implementation Order

1. Add SharePoint & Teams to Quick Links (5 min)
2. Create RecentDocuments component with mock data (30 min)
3. Create TeamsActivity component with mock data (30 min)
4. Update dashboard layout to include new widgets (10 min)
5. (Future) Set up Lovable Cloud + Edge Function for live data

