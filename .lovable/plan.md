

# Enhance Card Visibility and Projection

## Overview
The current cards appear "flat" against the background because the shadows are too subtle and the border contrast is too low. This plan will improve the visual distinction of all cards to make them look like proper "projected" cards with clear depth and separation.

---

## Changes Required

### 1. Update Base Card Component
**File:** `src/components/ui/card.tsx`

Enhance the default Card styling with:
- Stronger shadow: Change from `shadow-sm` to a more visible shadow like `shadow-md` or a custom shadow
- Slightly more visible border: Increase border opacity/contrast

```
Current:  shadow-sm
Proposed: shadow-[0_2px_12px_-2px_rgba(0,0,0,0.1)]
```

---

### 2. Increase Border Visibility
**File:** `src/index.css`

Adjust the `--border` CSS variable to be slightly darker for better card edge definition:

```
Current:  --border: 220 13% 91%
Proposed: --border: 220 13% 85%
```

---

### 3. Update Dashboard Section Cards

**Files to update:**
- `src/components/dashboard/LeadershipMessage.tsx`
- `src/components/dashboard/TileGrid.tsx` (Quick Links, Apps)
- `src/components/dashboard/AnnouncementsTicker.tsx`
- `src/components/dashboard/NewsFeed.tsx`
- `src/components/dashboard/UpcomingEvents.tsx`
- `src/components/dashboard/RecentDocuments.tsx`
- `src/components/dashboard/TeamsActivity.tsx`
- `src/components/dashboard/UpcomingMeetings.tsx`
- `src/components/dashboard/IconNavBar.tsx`
- `src/components/dashboard/DirectoryWidget.tsx`

**Changes for each:**
- Replace hover shadow effects with a consistent static "projected" shadow
- Remove `hover:shadow-*` transitions (per your request for no hover effects)
- Standardize shadow to: `shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]`

---

## Summary of Visual Changes

| Element | Before | After |
|---------|--------|-------|
| Card shadow | `shadow-sm` or subtle custom | Deeper projected shadow |
| Border | 91% lightness (very light) | 85% lightness (more visible) |
| Hover effects | Various shadow transitions | Removed (static appearance) |

---

## Technical Details

The shadow formula `shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]` creates:
- A soft ambient shadow (15px blur) for depth
- A tighter directional shadow (6px blur) for grounding
- Combined opacity of ~0.1 keeps it elegant but visible

