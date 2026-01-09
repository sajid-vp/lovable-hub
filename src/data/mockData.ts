import { 
  Mail, Calendar, FileText, Users, Settings, HelpCircle, 
  BarChart3, FolderOpen, MessageSquare, Award, Briefcase, Clock
} from "lucide-react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  avatar?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  isPinned?: boolean;
}

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  icon: typeof Mail;
  href: string;
  color: string;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success";
  date: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

// Mock current user
export const mockUser: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex.johnson@company.com",
  role: "Product Manager",
  department: "Product",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
};

// Mock news items
export const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Company Achieves Record Q4 Results",
    excerpt: "We're thrilled to announce our best quarter yet with exceptional growth across all departments.",
    content: "Full article content here...",
    author: "Sarah Chen",
    date: "2025-01-08",
    category: "Company News",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    isPinned: true,
  },
  {
    id: "2",
    title: "New Employee Wellness Program Launches",
    excerpt: "Introducing comprehensive wellness benefits including gym memberships and mental health support.",
    content: "Full article content here...",
    author: "HR Team",
    date: "2025-01-07",
    category: "HR Updates",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Tech Team Wins Innovation Award",
    excerpt: "Our engineering team has been recognized for their groundbreaking work on the new platform.",
    content: "Full article content here...",
    author: "Mike Roberts",
    date: "2025-01-06",
    category: "Recognition",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Office Renovation Complete",
    excerpt: "The third floor has been completely redesigned with new collaboration spaces.",
    content: "Full article content here...",
    author: "Facilities",
    date: "2025-01-05",
    category: "Facilities",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop",
  },
];

// Mock quick links
export const mockQuickLinks: QuickLink[] = [
  {
    id: "1",
    title: "Email",
    description: "Access your inbox",
    icon: Mail,
    href: "/email",
    color: "bg-primary",
  },
  {
    id: "2",
    title: "Calendar",
    description: "View your schedule",
    icon: Calendar,
    href: "/calendar",
    color: "bg-secondary",
  },
  {
    id: "3",
    title: "Documents",
    description: "File management",
    icon: FileText,
    href: "/documents",
    color: "bg-success",
  },
  {
    id: "4",
    title: "Directory",
    description: "Find colleagues",
    icon: Users,
    href: "/directory",
    color: "bg-warning",
  },
  {
    id: "5",
    title: "Reports",
    description: "Analytics & data",
    icon: BarChart3,
    href: "/reports",
    color: "bg-accent",
  },
  {
    id: "6",
    title: "Projects",
    description: "Track work",
    icon: FolderOpen,
    href: "/projects",
    color: "bg-primary",
  },
  {
    id: "7",
    title: "Messages",
    description: "Team chat",
    icon: MessageSquare,
    href: "/messages",
    color: "bg-secondary",
  },
  {
    id: "8",
    title: "Help Desk",
    description: "Get support",
    icon: HelpCircle,
    href: "/help",
    color: "bg-success",
  },
];

// Mock announcements
export const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "System Maintenance",
    message: "Scheduled maintenance this Saturday from 2-4 AM EST.",
    type: "warning",
    date: "2025-01-09",
  },
  {
    id: "2",
    title: "New Feature Released",
    message: "Check out the new document collaboration tools!",
    type: "success",
    date: "2025-01-08",
  },
  {
    id: "3",
    title: "Policy Update",
    message: "Updated remote work guidelines are now available.",
    type: "info",
    date: "2025-01-07",
  },
];

// Mock events
export const mockEvents: Event[] = [
  {
    id: "1",
    title: "All Hands Meeting",
    date: "2025-01-10",
    time: "10:00 AM",
    location: "Main Conference Room",
  },
  {
    id: "2",
    title: "Team Lunch",
    date: "2025-01-12",
    time: "12:30 PM",
    location: "Cafeteria",
  },
  {
    id: "3",
    title: "Training Session",
    date: "2025-01-15",
    time: "2:00 PM",
    location: "Room 301",
  },
];

// Public features for landing page
export const publicFeatures = [
  {
    icon: Users,
    title: "Connect with Colleagues",
    description: "Find and collaborate with team members across all departments.",
  },
  {
    icon: FileText,
    title: "Centralized Resources",
    description: "Access all company documents, policies, and tools in one place.",
  },
  {
    icon: MessageSquare,
    title: "Stay Informed",
    description: "Get the latest news, announcements, and updates instantly.",
  },
  {
    icon: Award,
    title: "Recognition & Culture",
    description: "Celebrate achievements and stay connected with company culture.",
  },
];
