import { Link, useLocation } from "react-router-dom";
import { 
  Home, Newspaper, Mail, Calendar, FileText, Users, 
  BarChart3, FolderOpen, MessageSquare, HelpCircle, Settings, X 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Newspaper, label: "News", href: "/news" },
  { icon: Mail, label: "Email", href: "/email" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Users, label: "Directory", href: "/directory" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: FolderOpen, label: "Projects", href: "/projects" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
];

const bottomItems = [
  { icon: HelpCircle, label: "Help & Support", href: "/help" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 border-r bg-card transition-transform duration-300 md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Mobile close button */}
          <div className="flex items-center justify-end p-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-3">
            <nav className="flex flex-col gap-1 py-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-muted",
                      isActive && "bg-primary/10 text-primary"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", isActive && "text-primary")} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </ScrollArea>

          {/* Bottom navigation */}
          <div className="border-t px-3 py-2">
            <nav className="flex flex-col gap-1">
              {bottomItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-muted",
                      isActive && "bg-primary/10 text-primary"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", isActive && "text-primary")} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
