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
    <nav className="animate-fade-in px-4 pt-4 pb-2">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.href}
              className="group flex flex-col items-center justify-center gap-1.5 
                         py-3 px-2 rounded-xl 
                         bg-white/10 backdrop-blur-sm
                         border border-white/20
                         hover:bg-white/25 hover:border-white/40
                         hover:scale-[1.02] active:scale-[0.98]
                         transition-all duration-200 ease-out"
            >
              <Icon className="h-6 w-6 text-white/90 group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors font-sans">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
