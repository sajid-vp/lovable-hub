import { Link } from "react-router-dom";
import { Users, GraduationCap, Building2, FlaskConical, Settings2, HelpCircle, LucideIcon } from "lucide-react";

interface NavItem {
  id: string;
  title: string;
  icon: LucideIcon;
  href: string;
}

const navItems: NavItem[] = [
  { id: "1", title: "Students", icon: Users, href: "/students" },
  { id: "2", title: "Academics", icon: GraduationCap, href: "/academics" },
  { id: "3", title: "Nurseries", icon: Building2, href: "/nurseries" },
  { id: "4", title: "Research", icon: FlaskConical, href: "/research" },
  { id: "5", title: "Operations", icon: Settings2, href: "/operations" },
  { id: "6", title: "Help Desk", icon: HelpCircle, href: "/help" },
];

export function IconNavBar() {
  return (
    <nav className="animate-fade-in mb-4">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.href}
              className="group flex flex-col items-center justify-center gap-2 
                         p-4 rounded-xl bg-white
                         border border-border shadow-sm
                         hover:bg-[hsl(var(--light-blue))] hover:border-[hsl(var(--light-blue))]
                         hover:shadow-lg hover:shadow-[hsl(var(--light-blue))]/20
                         hover:scale-[1.02] active:scale-[0.98]
                         transition-all duration-200 ease-out"
            >
              <div className="p-2 rounded-lg bg-[hsl(var(--light-blue))]/10 
                              group-hover:bg-white/20 transition-colors">
                <Icon className="h-7 w-7 text-[hsl(var(--light-blue))] 
                                 group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground/80 
                               group-hover:text-white transition-colors">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
