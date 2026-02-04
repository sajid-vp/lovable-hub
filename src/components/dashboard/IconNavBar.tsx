import { Link } from "react-router-dom";
import { Users, GraduationCap, Building2, FlaskConical, Settings2, HelpCircle, LucideIcon } from "lucide-react";

interface NavItem {
  id: string;
  title: string;
  icon: LucideIcon;
  href: string;
}

const navItems: NavItem[] = [
  { id: "1", title: "Employees", icon: Users, href: "/employees" },
  { id: "2", title: "Students", icon: GraduationCap, href: "/students" },
  { id: "3", title: "Academics", icon: Building2, href: "/academics" },
  { id: "4", title: "Nurseries", icon: FlaskConical, href: "/nurseries" },
  { id: "5", title: "Research", icon: Settings2, href: "/research" },
  { id: "6", title: "Help Desk", icon: HelpCircle, href: "/help" },
];

export function IconNavBar() {
  return (
    <nav className="animate-fade-in mb-4">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.href}
              className="group flex flex-col items-center justify-center gap-1.5 sm:gap-2 
                         p-3 sm:p-4 rounded-xl bg-card
                         border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]
                         hover:bg-[hsl(var(--light-blue))] hover:border-[hsl(var(--light-blue))]
                         active:scale-[0.96] active:bg-[hsl(var(--light-blue))]
                         transition-all duration-150 ease-out tap-highlight app-touch"
            >
              <div className="p-1.5 sm:p-2 rounded-lg bg-[hsl(var(--light-blue))]/10 
                              group-hover:bg-white/20 group-active:bg-white/20 transition-colors">
                <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-[hsl(var(--light-blue))] 
                                 group-hover:text-white group-active:text-white transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground/80 
                               group-hover:text-white group-active:text-white transition-colors text-center leading-tight">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
