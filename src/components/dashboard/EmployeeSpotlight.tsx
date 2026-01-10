import { Link } from "react-router-dom";
import { Award, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { currentSpotlight, departments } from "@/data/employeeData";

interface EmployeeSpotlightProps {
  variant?: "default" | "compact";
}

export function EmployeeSpotlight({ variant = "default" }: EmployeeSpotlightProps) {
  const { employee, achievement, quote } = currentSpotlight;
  const department = departments.find(d => d.name === employee.department);

  if (variant === "compact") {
    return (
      <section className="h-full">
        {/* iOS-style Section Header */}
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
          Spotlight
        </h2>

        {/* iOS Widget - Compact */}
        <div className="ios-widget p-4 h-[calc(100%-2rem)]">
          <div className="flex flex-col h-full">
            {/* Employee Info - Centered */}
            <div className="flex flex-col items-center text-center mb-4">
              <div className="relative mb-3">
                <Avatar className="h-16 w-16 ring-2 ring-warning ring-offset-2 ring-offset-card">
                  <AvatarImage src={employee.avatar} alt={employee.name} />
                  <AvatarFallback className="text-lg font-semibold bg-warning text-white">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-warning flex items-center justify-center">
                  <Award className="h-3.5 w-3.5 text-white" />
                </div>
              </div>
              
              <h3 className="font-semibold text-sm">{employee.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{employee.role}</p>
              {department && (
                <Link to={`/departments/${department.slug}`}>
                  <Badge variant="secondary" className="text-xs">
                    {department.name}
                  </Badge>
                </Link>
              )}
            </div>

            {/* Achievement */}
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                Achievement
              </p>
              <p className="text-xs text-foreground leading-relaxed line-clamp-3">
                {achievement}
              </p>
            </div>

            {/* View Directory Link */}
            <Link
              to="/directory"
              className="mt-4 w-full flex items-center justify-between px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
            >
              <span className="text-sm font-medium text-primary">View directory</span>
              <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Default full-width variant
  return (
    <section>
      {/* iOS-style Section Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Employee Spotlight
        </h2>
        <Link
          to="/directory"
          className="text-sm font-medium text-primary flex items-center gap-0.5"
        >
          View directory
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* iOS Widget */}
      <div className="ios-widget p-5">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Employee Info */}
          <div className="flex items-start gap-4 lg:w-1/3">
            <div className="relative">
              <Avatar className="h-20 w-20 ring-2 ring-warning ring-offset-2 ring-offset-card">
                <AvatarImage src={employee.avatar} alt={employee.name} />
                <AvatarFallback className="text-xl font-semibold bg-warning text-white">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-warning flex items-center justify-center shadow-lg">
                <Award className="h-4 w-4 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg">{employee.name}</h3>
              <p className="text-sm text-muted-foreground">{employee.role}</p>
              {department && (
                <Link to={`/departments/${department.slug}`} className="inline-block mt-2">
                  <Badge variant="secondary">
                    {department.name}
                  </Badge>
                </Link>
              )}
            </div>
          </div>

          {/* Achievement & Quote */}
          <div className="flex-1 space-y-4">
            {/* Achievement */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                This Month's Achievement
              </p>
              <p className="text-foreground leading-relaxed">
                {achievement}
              </p>
            </div>

            {/* Quote */}
            <div className="pl-4 border-l-2 border-warning/50">
              <p className="text-sm italic text-muted-foreground">
                "{quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}