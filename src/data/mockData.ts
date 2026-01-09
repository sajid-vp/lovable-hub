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

// Mock news items - SEA News
export const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "90 Students Begin Early Childhood Education Certification Program with Scholarships from Invest Bank",
    excerpt: "Sharjah Education Academy has launched a new certification program supporting early childhood educators with full scholarships.",
    content: "Full article content here...",
    author: "SEA Communications",
    date: "2025-08-05",
    category: "Programs",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
    isPinned: true,
  },
  {
    id: "2",
    title: "Sharjah's Nurseries: Expanding Early Childhood Education",
    excerpt: "A look at how SEA is supporting the expansion and quality improvement of nursery education across Sharjah.",
    content: "Full article content here...",
    author: "SEA Editorial",
    date: "2025-07-21",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Sharjah Education Academy Launches the 'Leadership Lab' Initiative",
    excerpt: "SEA launches the first cycle of the Leadership Lab initiative under the theme 'Imagination to Impact' for government nurseries.",
    content: "Full article content here...",
    author: "SEA Media",
    date: "2025-06-26",
    category: "Initiatives",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Sharjah Education Academy Joins World Education Research Association (WERA)",
    excerpt: "SEA has been accepted as an institutional member of the World Education Research Association, marking a significant milestone.",
    content: "Full article content here...",
    author: "SEA Communications",
    date: "2025-06-11",
    category: "Partnerships",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Salem Al Qasimi Attends SEA's 3rd Graduation Ceremony",
    excerpt: "Sharjah Education Academy celebrated its third graduation ceremony at University City Hall with distinguished guests.",
    content: "Full article content here...",
    author: "SEA Media",
    date: "2025-05-25",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Key Recommendations Unveiled at the 4th Sharjah International Summit on Improvement in Education",
    excerpt: "SEA announced the key recommendations reached during the 4th edition of the Sharjah International Summit.",
    content: "Full article content here...",
    author: "SEA Editorial",
    date: "2025-02-25",
    category: "Summit",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
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
