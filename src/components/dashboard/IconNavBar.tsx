import { Link } from "react-router-dom";
import { Users, GraduationCap, Building2, FlaskConical, Settings2, HelpCircle, LucideIcon } from "lucide-react";

interface NavItem {
  id: string;
  title: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
}

const navItems: NavItem[] = [
  { id: "1", title: "Employees", icon: Users, href: "/employees", gradient: "from-[hsl(var(--teal))] to-[hsl(var(--turquoise))]" },
  { id: "2", title: "Students", icon: GraduationCap, href: "/students", gradient: "from-primary to-[hsl(var(--light-blue))]" },
  { id: "3", title: "Academics", icon: Building2, href: "/academics", gradient: "from-[hsl(var(--turquoise))] to-[hsl(var(--green))]" },
  { id: "4", title: "Nurseries", icon: FlaskConical, href: "/nurseries", gradient: "from-[hsl(var(--indigo))] to-[hsl(var(--lavender))]" },
  { id: "5", title: "Research", icon: Settings2, href: "/research", gradient: "from-[hsl(var(--indigo))] to-primary" },
  { id: "6", title: "Help Desk", icon: HelpCircle, href: "/help", gradient: "from-[hsl(var(--pink))] to-[hsl(var(--lavender))]" },
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
              className={`group flex flex-col items-center justify-center gap-1.5 sm:gap-2 
                         p-3 sm:p-4 rounded-xl bg-card
                         border border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]
                         hover:bg-muted/50 hover:border-border
                         active:scale-[0.96]
                         transition-all duration-150 ease-out tap-highlight app-touch`}
            >
              <div className={`p-2 sm:p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} shadow-md group-hover:scale-105 transition-transform`}>
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground/80 
                               group-hover:text-foreground transition-colors text-center leading-tight">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
