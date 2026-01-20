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
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.href}
              className="group relative flex flex-col items-center justify-center gap-2.5 
                         p-5 rounded-2xl 
                         bg-white/90 backdrop-blur-md
                         border border-white/60
                         shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.06)]
                         hover:bg-gradient-to-br hover:from-[hsl(var(--light-blue))] hover:to-[hsl(var(--teal))]
                         hover:border-[hsl(var(--light-blue))]/50
                         hover:shadow-[0_8px_30px_-4px_hsl(var(--light-blue)/0.35),0_4px_12px_-2px_hsl(var(--teal)/0.2)]
                         hover:scale-[1.03] hover:-translate-y-0.5
                         active:scale-[0.98] active:translate-y-0
                         transition-all duration-300 ease-out
                         overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Subtle inner glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity" />
              
              {/* Icon container with gradient background */}
              <div className="relative z-10 p-2.5 rounded-xl 
                              bg-gradient-to-br from-[hsl(var(--light-blue))]/15 to-[hsl(var(--teal))]/10
                              group-hover:bg-white/25 
                              shadow-sm group-hover:shadow-none
                              transition-all duration-300">
                <Icon className="h-7 w-7 text-[hsl(var(--light-blue))] 
                                 group-hover:text-white 
                                 transition-colors duration-300" 
                      strokeWidth={1.75} />
              </div>
              
              {/* Label */}
              <span className="relative z-10 text-sm font-semibold tracking-tight text-foreground/85 
                               group-hover:text-white 
                               transition-colors duration-300">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
